import { View, Text, TouchableOpacity, ImageBackground} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'; //user
import EvilIcons from '@expo/vector-icons/EvilIcons'; // location
import { useNavigation } from '@react-navigation/native';
import Home from '../components/bottom/Home';
import Accordion from '../components/Accordin';
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
    
    <TouchableOpacity ><Text>Add Purchase</Text></TouchableOpacity>
    <TouchableOpacity ><Text>Add Expense</Text></TouchableOpacity>
    <Accordion title="Payments">
    <TouchableOpacity style={{
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }} onPress={()=>navigation.navigate('paymentin')}><Text style={{
        fontSize: 16
    }}>PayemtnIn</Text>
    <AntDesign name="rightcircleo" size={16} color="black" /></TouchableOpacity>
    <TouchableOpacity style={{
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }} onPress={()=>navigation.navigate('paymentout')}><Text style={{
        fontSize: 16
    }}>PayemtnOut</Text><AntDesign name="rightcircleo" size={16} color="black" /></TouchableOpacity>
    </Accordion>
    <Accordion title="Purchases">
    <TouchableOpacity style={{
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }} onPress={()=>navigation.navigate('addpurchaseform')}><Text style={{
        fontSize: 16
    }}>Add Purchase</Text>
    <AntDesign name="rightcircleo" size={16} color="black" /></TouchableOpacity>
    <TouchableOpacity style={{
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }} onPress={()=>navigation.navigate('addexpense')}><Text style={{
        fontSize: 16
    }}>Add Expense</Text><AntDesign name="rightcircleo" size={16} color="black" /></TouchableOpacity>
    </Accordion>

<TouchableOpacity style={{
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }} onPress={()=>navigation.navigate('drafttransactions')}><Text style={{
        fontSize: 16
    }}>Draft Transactions</Text><AntDesign name="rightcircleo" size={16} color="black" /></TouchableOpacity>

    </View>
    <Home navigation={navigation}/>
    
    </>
}