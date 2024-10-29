import { View, Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useGlobalState } from '../providers/GlobalStateProvider';
export default function Moreopt() {
     const { data, time, fetchData } = useGlobalState()
     const navigation = useNavigation()
    return(<>
    <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 8,
            marginVertical: 10,
            backgroundColor: 'white',
            paddingHorizontal: 10
        }}>
            <View
            style={{
                flexDirection: 'row',
                flex: 1,
                // justifyContent: 'space-between', 
                
                gap: 12,
                padding: 8, 
                backgroundColor: 'rgba(255, 255, 255, 1)',

    // Shadow for iOS
    shadowColor: '#A1A1A1',
    shadowOffset: { width: 0, height: -2 }, // Negative height for top shadow
    shadowOpacity: 0.21,
    shadowRadius: 6.4,

    // Shadow for Android
    elevation: 4,
                
            }}>
                <View
                style={{
                    flexDirection: 'row',
                    gap: 4,
                    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
                    
                    
                }}>
                    <AntDesign name="arrowup" size={18} color="red" style={{
                        
                    }} />
                    <Text style={{
                        fontSize: 16,
                        // fontWeight: 'bold',
                    
                    }}>To Pay</Text>
                </View>
                <Text
                style={{
                    fontSize: 16,
                    // fontWeight: 'bold',
                }}>₹ {data?.data.to_pay}</Text>
            </View>
            <View
            style={{
                flexDirection: 'row',
                flex: 1,
                // justifyContent: 'space-between', 
               
                gap: 12,
                padding: 8,  
                backgroundColor: 'rgba(255, 255, 255, 1)',

    // Shadow for iOS
    shadowColor: '#A1A1A1',
    shadowOffset: { width: 0, height: -1 }, // Negative height for top shadow
    shadowOpacity: 0.21,
    shadowRadius: 6.4,

    // Shadow for Android
    elevation: 4,

            }}>
                <View
                style={{
                    flexDirection: 'row',
                    gap: 4,
                    
                    
                }}>
                    <AntDesign name="arrowdown" size={20} color="green" />
                    <Text style={{
                        fontSize: 16,
                        // fontWeight: 'bold',
                    
                    }}>To Collect</Text>
                </View>
                <Text
                style={{
                    fontSize: 16,
                    // fontWeight: 'bold',
                }}>₹ {data?.data.to_collect}</Text>
            </View>
            
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
            marginVertical: 10,
            // paddingHorizontal: 12
        }}>
            <TouchableOpacity onPress={()=>fetchData(data?.data.uid)} style={{
                flexDirection: 'row',
                gap:10,
                backgroundColor: 'rgba(221, 236, 255, 1)',
                borderRadius: 5
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00308F',
                    padding: 7,
                    borderRadius: 5
                }}>
                    <Feather name="refresh-ccw" size={22} color="white" />
                </View>
                <View>
                   <Text style={{
                    fontSize: 12,
                    fontWeight: '500'
                   }}>Last Sync</Text>
                   <Text style={{
                    color: 'gray',
                    fontSize: 10
                   }}>{time}</Text> 
                </View>
                <View style={{
                    alignItems: 'center',
                    margin: 'auto'
                }}>
                    <AntDesign name="caretright" size={10} color="black" />
                </View>

            </TouchableOpacity>
           
            <TouchableOpacity style={{
                flexDirection: 'row',
                gap:10,
                backgroundColor: 'rgba(221, 236, 255, 1)',
                borderRadius: 5
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00308F',
                    padding: 7,
                    borderRadius: 5
                }}>
                    <FontAwesome5 name="store" size={20} color="white" />
                </View>
                <View style={{
                    alignContent: 'center'
                }}>
                   <Text style={{
                    fontSize: 13,
                    fontWeight: '500',
                    textAlign: 'center',
                    marginVertical: 'auto'
                   }}>My Online Store</Text>
                   
                </View>
                <View style={{
                    alignItems: 'center',
                    margin: 'auto'
                }}>
                    <AntDesign name="caretright" size={10} color="black" />
                </View>

            </TouchableOpacity>
        </View>
    </>)
}