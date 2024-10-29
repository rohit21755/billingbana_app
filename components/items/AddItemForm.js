import {View, Text, TouchableOpacity, Switch, TextInput,ScrollView} from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Pricing from './Pricing';
import AntDesign from '@expo/vector-icons/AntDesign';
import Stock from './Stock';
import { useGlobalState } from '../providers/GlobalStateProvider';
export default function AddItemForm(){
    const { data, updateData} = useGlobalState()
    var [toggle, setToggle] = useState(false);
    var [itemName, setitemName] = useState();
    var [itemHSN, setitemHSN] = useState();
    var [itemCategory, setitemCategory] = useState();
    var [itemCode, setitemCode] = useState();
    var [sellPrice, setSellPrice] = useState({
        value: '',
        withTax: true
    });
    var [wholeSalePrice, setWholePrice] = useState();
    var [description, setdescription] = useState();
    var [discount, setDescount] = useState();
    var [purchaseprice, setPurchasePrice] = useState({
        value: '',
        withTax: true
    });
    var [tax, setTax] = useState(0);
    var [openingQuantity, setOpeningQuantity] = useState();
    var [atPrice, setAtPrice] = useState();
    var [asDate, setAsDate] = useState(new Date());
    var [minToMaintain, setMinToMaintain] = useState(10);
    var [location, setLocation] = useState();
    var [primaryUnit, setprimaryUnit] = useState();
    var [SecondaryUnit, setSecondaryUnit] = useState();
    var [ImageURL, setImageUrl] = useState();
    var [ImageList, setImageList] = useState();
    var [showPopup, setShowPopup] = useState(false);
    const toggleSwitch = () => setToggle(previousState => !previousState);
    function generate13DigitNumberString() {
        console.log('hello')
        let numberString = "";
        for (let i = 0; i < 13; i++) {
          numberString += Math.floor(Math.random() * 10).toString();
        }
        setitemCode(numberString)
      }
      const addItemReq = async () => {
        // setLoading(true);
        let newData;
        if (!toggle) {
          newData = {
            Name: itemName ? itemName : "",
            HSN: itemHSN ? itemHSN : "",
            Category: itemCategory ? itemCategory : "",
            Code: itemCode ? itemCode : "",
            wholeSalePrice: wholeSalePrice ? wholeSalePrice : "",
            description: description ? description : "",
            primaryUnit: primaryUnit ? primaryUnit : "",
            secondaryUnit: SecondaryUnit ? SecondaryUnit : "",
            unit: primaryUnit ? primaryUnit : "",
            salesPrice: sellPrice.withTax
              ? sellPrice.value * (1 - tax)
              : sellPrice.value,
            discount: discount ? discount : "",
            purchasePrice: purchaseprice.withTax
              ? purchaseprice.value * (1 - tax)
              : purchaseprice.value,
            Tax: tax ? tax : "",
            taxPercentage: tax ? tax : "",
            openingQuantity: openingQuantity ? openingQuantity : 0,
            atPrice: atPrice ? atPrice : "",
            asDate: asDate ? asDate : "",
            minToMaintain: minToMaintain ? minToMaintain : "",
            location: location ? location : "",
            profit: sellPrice - discount - purchaseprice.value - (tax ? tax : 0),
            barcode: ImageURL ? ImageURL.url : "",
            stock: openingQuantity || 0,
            itemType: "product",
          };
        } else {
          newData = {
            Name: itemName ? itemName : "",
            HSN: itemHSN ? itemHSN : "",
            Category: itemCategory ? itemCategory : "",
            Code: itemCode ? itemCode : "",
            salesPrice: sellPrice.withTax
              ? sellPrice.value * (1 - tax)
              : sellPrice.value,
            discount: discount ? discount : "",
            Tax: tax ? tax : "",
            profit: sellPrice - discount,
            itemType: "service",
          };
        }
        let newDa = data;
        newDa.data.items ? newDa.data.items.push(newData) : (newDa.data.items = [newData]);
        updateData(newDa, data.data.uid)
        // console.log(data);
        // let newDa = data;
        // newDa.items ? newDa.items.push(newData) : (newDa.items = [newData]);
        // console.log(newDa);
        // setData(newDa);
        // setChange(!change);
        // Navigate("/items");
        console.log(newData)
      };
    return(<>
        
    <LinearGradient
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}>

<View style={{
        paddingTop: 60,
        paddingBottom: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <View style={{
            flexDirection: 'row',
            gap: 8
        }}>
            <TouchableOpacity>
            <AntDesign name='left' size={20} color="black"/>
            </TouchableOpacity>
            <Text style={{
                fontWeight: 'bold'
            }} >Add New Item</Text>
            

        </View>
        <TouchableOpacity>
            <AntDesign name='setting' size={22} color="black" />
        </TouchableOpacity>
    </View>
        </LinearGradient>
        <ScrollView style={{
            paddingBottom: 12,
            paddingHorizontal: 20,
        }}>
            <View style={{
   padding: 12
    
}}>
    <View style={{
        flexDirection: 'row',
        gap: 10,
    }}><Text style={{
        fontWeight: '500',
        fontSize: 18
    }}>Product</Text>
    <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={toggle ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={toggle}
    />
    <Text style={{
        fontWeight: '500',
        fontSize: 18
    }}>Service</Text></View>
    
</View>
{/* form view */}
<View style={{
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#D9D9D9',
    padding: 8
}}>
    <TextInput

    onChangeText={setitemName}
    placeholder={!toggle ? 'Item Name': 'Service Name'}
    style={{
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        height: 48,
        borderRadius: 10,
        paddingHorizontal: 14,
        marginVertical: 10,
                        }}/>
                        <TextInput

onChangeText={setitemHSN}
placeholder={!toggle ? 'Item HSN': 'Service HSN'}
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginVertical: 10,
                    }}/>
                <TextInput

onChangeText={setitemCode}
value={itemCode}
placeholder={!toggle ? 'Item Code': 'Service Code'}
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 2
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <TouchableOpacity onPress={generate13DigitNumberString} style={{
                        marginBottom: 2
                    }}><Text style={{
                        color: 'blue'
                    }}>Generate Random Code</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=> setitemCode('')}><Text style={{
                        color: 'blue'
                    }}>Clear</Text></TouchableOpacity>
                    </View>
                    <TextInput

onChangeText={setdescription}
placeholder='Description'
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 2
                    }}/>
                    </View>
                    <Pricing toggle={toggle} setSellPrice={setSellPrice} sellPrice={sellPrice} setDescount={setDescount} setWholePrice={setWholePrice} setTax={setTax} tax={tax} setPurchasePrice={setPurchasePrice} purchaseprice={purchaseprice}/>
                    {!toggle && (<Stock setOpeningQuantity={setOpeningQuantity} setAtPrice={setAtPrice} setMinToMaintain={setMinToMaintain} minToMaintain={minToMaintain} setLocation={setLocation} setAsDate={setAsDate} asDate={asDate}/>)}
                    
                    
                        
<View style={{
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
}}>
    <TouchableOpacity style={{
        borderWidth: 1,
        borderColor:'#D9D9D9',
        padding: 4
    }}><Text>Save and New</Text></TouchableOpacity>
     <TouchableOpacity onPress={addItemReq} style={{
        borderWidth: 1,
        borderColor:'#D9D9D9',
        padding: 4
    }}><Text>Save</Text></TouchableOpacity>
</View>
        </ScrollView>
    </>
    )
}