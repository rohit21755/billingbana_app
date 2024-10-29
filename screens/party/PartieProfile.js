import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileTransaction from '../../components/parties/ProfileTransaction';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function PartieProfile(){
  const route = useRoute()
  console.log(route.params.profile)
    return(<>
    <LinearGradient
      colors={['#FFFFFF', '#BAD8FF']}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0, y: 1 }}
    //   style={{ flex: 1 }}
    style=
    {{
      height: 180
    }}
    >
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingBottom: 20,
            paddingTop: 48,
            
           
        }}>
          <View style={{
            flexDirection: 'row',
            gap: 10
          }}>
            <TouchableOpacity><AntDesign name="left" size={24} color="black" /></TouchableOpacity>
            <Text style={{
              fontWeight: '500',
              fontSize: 16
            }}>Party Details</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            gap: 8
          }}>
            <TouchableOpacity><Feather name="edit-2" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity><Entypo name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
          </View>
        </View>
        <View style={{
          paddingHorizontal: 20,
          paddingHorizontal: 24
        }}>
          <View style={{
            backgroundColor: 'white',
            borderRadius: 14,
            padding: 16,
            marginTop: 16
          }}>
            <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <View><Text style={{
              fontWeight: '500',
              fontSize: 16
            }}>{route.params.profile.partyName}</Text>
            <View style={{
              flexDirection: 'row',
              gap: 10,
              marginVertical: 6
            }}>
              <Feather name="phone-call" size={20} color="black" />
              <Text style={{
                fontWeight:'600',
                fontSize: 15
              }}>{route.params.profile.phoneNo}</Text>
            </View>
            </View>
            <View><Text style={{
              fontWeight: '400',
              fontSize: 10
            }}>To Collect</Text>
            
              
              <Text style={{
                fontWeight:'600',
                fontSize: 15
              }}>$ 200</Text>
            </View>
            
            
            </View>
            <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8
          }}>
            <View>
            <View style={{
              flexDirection: 'row',
              gap: 10,
              marginVertical: 6
            }}>
              <View style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: 4
              }}><Text>WholeSale</Text></View>
              <View style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: 4
              }}><Text>Return</Text></View>
            </View>
            </View>
            <View><Text style={{
              fontWeight: '400',
              fontSize: 10
            }}>Loyalty Points</Text>
            
              
              <Text style={{
                fontWeight:'600',
                fontSize: 15,
                textAlign: 'right'
              }}>20</Text>
            </View>
            
            
            </View>
            
            </View>
        </View>
    </LinearGradient>
    <View style={{
      marginTop: 80,
      paddingHorizontal: 40,
      // paddingVertical: ,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <TouchableOpacity style={{
        flexDirection: 'row',
        gap: 10
      }}>
<Feather name="bell" size={20} color="black" />
<Text style={{fontWeight: '500'}}>Send Reminder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        flexDirection: 'row',
        gap: 10
      }}>
<Ionicons name="document-text-outline" size={20} color="black" />
<Text style={{fontWeight: '500'}}>Send Statement</Text>
      </TouchableOpacity>
    </View>
    <View style={{
       padding: 24,
      
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
      borderWidth: 1,
      padding: 6
      }}><Entypo name="magnifying-glass" size={24} color="black" />
      <TextInput placeholder='Search Transaction' />
      <Ionicons name="filter-sharp" size={24} color="black" />
      </View>
      <View style={{
        marginTop: 10,
        borderWidth:1,
        borderRadius: 8,
        borderColor: '#D9D9D9'
      }}>
        <ProfileTransaction transactions = {route.params.profile.transactions}/>
        
      </View>
      
      
    </View>
    
    </>)
}