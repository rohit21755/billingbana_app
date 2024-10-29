import { View, Text, TouchableOpacity } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  console.log(navigation)
  function handleClick(){
    
  }
  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#212934',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 14,
          borderRadius: 20,
          width: '100%', 
        }}
      >
        <TouchableOpacity style={{
            alignItems: 'center'
        }}>
          <Fontisto name="home" size={20} color="white" />
          <Text style={{
            color: 'white'
          }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.push('Parties')} style={{
            alignItems: 'center'
        }}>
          <MaterialIcons name="groups" size={22} color="white" />
          <Text style={{
            color: 'white'
          }}>Parties</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('addsaleform')} style={{
            alignItems: 'center'
        }}>
          <FontAwesome name="search" size={24} color="white" />
          <Text style={{color: 'white'}}>Sales</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('allitems')} style={{
            alignItems: 'center'
        }}>
        <FontAwesome6 name="shapes" size={24} color="white" />
        <Text style={{
            color: 'white'
        }}>Items</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('sale')} style={{
            alignItems: 'center'
        }}>
        <MaterialIcons name="chat" size={24} color="white" />
        <Text style={{
            color: 'white'
        }}>Orders</Text>
        </TouchableOpacity>
       
      </View>
    </>
  );
}
