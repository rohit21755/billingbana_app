import Entypo from '@expo/vector-icons/Entypo';
import {View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function ItemBt(){
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
          paddingHorizontal: 20,
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
            alignItems: 'center'
        }}>
            <Entypo name="share" size={20} color="black" />
            <Text style={{
                fontSize: 16
            }}>Share</Text>
        </View>
        <TouchableOpacity style={{
            alignContent: 'center',
            alignItems: 'center'
        }} onPress={()=> navigation.navigate('additem')}>
            {/* <View style={{
                backgroundColor: 'white',
                borderRadius: 100,
               
            }}> */}
                <AntDesign name="pluscircle" size={24} color="#0C2D79" style={{
                    backgroundColor: 'white',
                    borderRadius: 28,
                }} />
            {/* </View> */}
        
        <Text style={
            {
                color: 'white',
                textAlign: 'center'
            }
        }>ADD ITEMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('stock')} style={{
            backgroundColor: 'white',
            borderRadius: 24,
            flexDirection: 'row',
            gap:3,
            paddingHorizontal: 12,
            paddingVertical: 4,
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Ionicons name="document-text-sharp" size={20} color="black" />
            <Text style={{
                fontSize: 16
            }}>Report</Text>
        </TouchableOpacity>
        

      </View>
    </>
}