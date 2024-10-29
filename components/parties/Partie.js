import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
export default function Partie({toShow, data}) {
    const navigation = useNavigation()
   function handleTouch(pep){
    console.log(pep)
    navigation.navigate('partyprofile', { profile : pep})

   }
    return(
    <View style={{flex : 1}}>
    <ScrollView 
     contentContainerStyle={{ flexGrow: 1 }} 
    style={{
        padding: 20
    }}>
    
            {data?.map((p, index)=>{
                return(
                <TouchableOpacity onPress={()=>handleTouch(p)} key={index} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                paddingBottom: 16
                
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 7
                }}>
                    <Image source={require('../../assets/images/profile.png')} style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                }} />
                <View style={{
                    paddingHorizontal: 10,
                
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>{p.partyName}</Text>
                    <Text style={{
                        fontSize: 14,
                        color: 'grey',
                    }}>Costumer</Text>
                    
                    
                </View>
                </View>
                
                <View style={{
                    paddingHorizontal: 6,
    
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        // color: 'green',
                    }}>₹ 1000</Text>
                </View>
    
            </TouchableOpacity>
            )
            })}
    </ScrollView>
    </View>)
}