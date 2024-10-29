import ItemHeader from "../../components/headers/ItemHeader";
import {View, Text, TouchableOpacity, Image} from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ItemBt from "../../components/bottom/ItemBt";
import { useGlobalState } from "../../components/providers/GlobalStateProvider"
import { useNavigation } from "@react-navigation/native";
export default function AllItems(){
    const {data} = useGlobalState()
    const navigation = useNavigation()
    console.log(data?.data.items)
    function handleView(item){
        console.log(item)

    }
    return<>
   <ItemHeader/>
   {data?.data.items.map((item, index)=>{
            return(<View key={index} style={{
                padding: 12
            }}>
                
                <View style={{
                    flexDirection: 'row',
                    // padding: 4
        
                }}>
                    
                    <Image source={require('../../assets/images/item.png')}  style={{
                        resizeMode: 'contain',
                        width: '22%',
                        height: 60
                    }}/>
                    <View style={{
        paddingHorizontal: 12,
        paddingTop: 6
        
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // width: '100%'
                            gap: 32
                        }}>
                            <Text style={{
                                fontWeight: '500'
                            }}>{item.Name}</Text>
                            <TouchableOpacity><Feather name="info" size={18} color="black" /></TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
        
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 4,
                                gap: 7
                            }}><Text>₹{item.purchasePrice}</Text>
                            <Text>₹{item.salesPrice}</Text>
                            <Text style={{
                                color: '#ED4135'
                            }}>{item.discount}% OFF</Text></View>
                            <View style={{
                                borderRadius: 5,
                                marginLeft: 32,
                                flexDirection: 'row',
                                gap:6,
                                marginTop: 4,
                                borderWidth: 1,
                                paddingHorizontal: 3,
                                backgroundColor: 'white'
                            }}>
                                <TouchableOpacity style={{
                                    borderRightWidth: 1,
                                    paddingHorizontal: 5
                                }}><Text>-</Text></TouchableOpacity>
                                <View><Text>1</Text></View>
                                <TouchableOpacity style={{
                                    borderLeftWidth: 1,
                                    paddingHorizontal: 5
                                }}><Text>+</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
        
                </View>
                <View style={{
                    paddingHorizontal: 16,
                    marginVertical: 10
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        paddingVertical: 4,
                        paddingHorizontal: 2,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        borderBottomColor: '#D9D9D9',
                        borderBottomWidth: 2
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            gap:7
                        }}>
                            <TouchableOpacity><MaterialIcons name="tune" size={22} color="black" /></TouchableOpacity>
                            <Text>QTY: {item.stock}</Text>
                            <TouchableOpacity onPress={()=>handleView(item)} style={{
                                borderRadius: 5,
                                paddingVertical: 1,
                                paddingHorizontal: 4,
                                backgroundColor: 'black'
                            }}>
                                <Text style={{
                                    color: 'white'
                                }}>View</Text>
                            </TouchableOpacity>
                        </View>
                        <View><Text>Location: {item.location}</Text></View>
                    </View>
                </View>
            </View>)
        })}
    
    <ItemBt/>
    </>

}