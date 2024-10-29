import { View, Text, TouchableOpacity, ImageBackground} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'; //user
import EvilIcons from '@expo/vector-icons/EvilIcons'; // location
import { useNavigation } from '@react-navigation/native';
import Home from '../components/bottom/Home';
export default function Profile() {
    const navigation = useNavigation()
    return<>
    <ImageBackground style={{
        paddingTop: 200,
        paddingBottom:10
    }} source={require('../assets/images/profile.jpeg')}>
        <Text style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20,
            textAlign: 'center' 
        }}>XYZ Traders</Text>
    </ImageBackground>
    <View style={{
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }}>
        <View style={{
            flexDirection: 'row',
            gap:5
        }}>
            <AntDesign name="user" size={18} color="black"/>
            <Text>View Profile</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            gap:5
        }}>
            <EvilIcons name="location" size={18} color="black"/>
            <Text>New Delhi</Text>
        </View>
    </View>
    <View style={{
        paddingVertical: 16,
        paddingHorizontal: 20,
    }}>
        <View  style={{
        
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 12


    }}>
        <Text style={{
            fontSize: 20,
            color: '#0E2F7E',
            fontWeight: '500'
        }}>Activity & Records</Text>
        <Text style={{
            color: 'gray'
        }}>Reports.Staff</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('paymentin')}><Text>PayemtnIn</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('paymentout')}><Text>PayemtnOut</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('addpurchaseform')}><Text>Add Purchase</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('addexpense')}><Text>Add Expense</Text></TouchableOpacity>
    


    </View>
    <Home navigation={navigation}/>
    
    </>
}