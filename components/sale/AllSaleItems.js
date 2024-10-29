import { View, Text, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useGlobalState } from '../providers/GlobalStateProvider';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
const ItemCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity 
            style={{
                padding: 4,
                borderRadius: 8,
                width: '49%',
                backgroundColor: 'white',
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 1,
                marginVertical: 4
            }}
            onPress={onPress}
        >
            <Image 
                source={require('../../assets/images/item.png')}  
                style={{
                    width: '100%',
                    height: 120,
                    resizeMode: 'cover'
                }}
            />
            <View style={{
                paddingHorizontal: 6,
                paddingVertical: 1
            }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 16
                }}>{item.Name}</Text>
                <Text style={{
                    fontWeight: '300',
                    fontSize: 12
                }}>{item.HSN}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 4
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 3
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 2,
                        padding: 4
                    }}>
                        <Text>{item.quantity}</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 2,
                        padding: 4
                    }}>
                        <Text>{item.atPrice}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather name="info" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default function AllSaleItems({setRows, rows, totalPrice, setTotalPrice}) {
    const { data } = useGlobalState();
    const [items, setItems] = useState(data?.data.items.map(item => ({ ...item, quantity: 0 })));
    const navigation = useNavigation()
    const addRow = (index) => {
        const selectedItem = items[index];
        const updatedItems = items.map((item, i) => 
            i === index ? { ...item, quantity: item.quantity + 1 } : item
        );
        setItems(updatedItems);
        const existingRowIndex = rows.findIndex(row => row.item === selectedItem.Name);
    
        if (existingRowIndex >= 0) {
            const updatedRows = rows.map((row, i) => 
                i === existingRowIndex
                    ? {
                        ...row,
                        qty: row.qty + 1,  
                        amount: (row.qty + 1) * row.price_per_unit
                    }
                    : row
            );
            setRows(updatedRows);
        } else {
            
            setRows(prevRows => [
                ...prevRows,
                {
                    index: prevRows.length + 1,
                    item: selectedItem.Name,
                    qty: 1,
                    unit: selectedItem.Unit || "",
                    hsn: selectedItem.HSN || "",
                    price_per_unit: selectedItem.atPrice || 0,
                    discount: "",
                    profit: 0,
                    amount: selectedItem.atPrice || 0,
                }
            ]);
        }
    };
   
    

   
    const handleSubmit = () => {
        // Remove rows that have a qty of 0
        const filteredRows = rows.filter(row => row.qty > 0);
        setRows(filteredRows);
        let total_price = 0
        filteredRows.filter(row => {
            total_price = row.price_per_unit * row.qty
        })
        console.log(total_price)

        // console.log("Filtered Rows: ", filteredRows);
        console.log(total_price);
        setTotalPrice(total_price);
        setRows(filteredRows)
        navigation.navigate('addsaleform')
    };

    const renderItem = ({ item, index }) => (
        <ItemCard item={item} onPress={() => addRow(index)} />
    );

    

    return (
        <>
        <Pressable
        // onPress={()=>navigation.navigate('addsaleform')}
        onPress={handleSubmit}
              style={[{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                marginTop: 10,
                position: 'absolute',
                bottom: 15,
                alignSelf: 'center'
              }, {
                backgroundColor: '#2196F3',
              }]}
              >
              <Text style={{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }}>Checkout</Text>
            </Pressable>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 12
            }}>
                <TouchableOpacity style={{ padding: 4 }}>
                    <MaterialIcons name="tune" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 6,
                    borderWidth: 1,
                    borderColor: '#D9D9D9',
                    borderRadius: 7
                }}>
                    <Text style={{ fontSize: 12 }}>New Item</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 6,
                    borderWidth: 1,
                    borderColor: '#D9D9D9',
                    borderRadius: 7
                }}>
                    <Text style={{ fontSize: 12 }}>Hold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 6,
                    borderWidth: 1,
                    borderColor: '#D9D9D9',
                    borderRadius: 7
                }}>
                    <Text style={{ fontSize: 12 }}>Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 6,
                    borderWidth: 1,
                    borderColor: '#D9D9D9',
                    borderRadius: 7
                }}>
                    <Text style={{ fontSize: 12 }}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 4 }} onPress={()=> handleSubmit()}>
                    <AntDesign name="CodeSandbox" size={22} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 12 }}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                />
            </View>
        </>
    );
}
