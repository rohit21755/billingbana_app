import Entypo from '@expo/vector-icons/Entypo';
import {View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function PartieBt(){
    const navigation = useNavigation()
    return<>
    <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#212934',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 14,
          paddingHorizontal: 32,
          borderRadius: 20,
          width: '100%', // Ensure the bottom navigation covers the full width of the screen
        }}
      >
        <View style={{
            backgroundColor: 'white',
            borderRadius: 24,
            flexDirection: 'row',
            gap:3,
            paddingHorizontal: 12,
            paddingVertical: 4,
            alignContent: 'center',
            alignItems: 'center',
            width: 100
        }}>
            <Entypo name="share" size={20} color="black" />
            <Text style={{
                fontSize: 16
            }}>Share</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('addnewparty')}>
        <Entypo name="circle-with-plus" size={24} color="#00308F" />
        <Text style={
            {
                color: 'white'
            }
        }>ADD</Text>
        </TouchableOpacity>
        <View style={{
            backgroundColor: 'white',
            borderRadius: 24,
            flexDirection: 'row',
            gap:3,
            paddingHorizontal: 12,
            paddingVertical: 4,
            alignContent: 'center',
            alignItems: 'center',

            width: 100
        }}>
            <TouchableOpacity style={{
                width: '50%',
            
            }}>
            <Text
            style={{
               
                textAlign: 'center'
            }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text
            style={{
                
            }}>Group</Text>
            </TouchableOpacity>
            
        </View>
        

      </View>
    </>
}