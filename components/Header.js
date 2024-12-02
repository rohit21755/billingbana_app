import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Collapsible from './home/Collapsible';
import { useNavigation } from '@react-navigation/native';
import { useGlobalState } from './providers/GlobalStateProvider';
export default function Header() {
    const navigation = useNavigation();
    const { data } = useGlobalState()
    return(<>
    <LinearGradient 
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}
    >
    <View style={{
        paddingTop: 40,
        paddingBottom: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <TouchableOpacity onPress={()=> navigation.navigate('profile')} style={{
            flexDirection: 'row',
            gap: 7,
        }}>
            <FontAwesome name="user-circle-o" size={28} color="black" />
            <Text style={{
                fontWeight:'bold',
                marginTop: 2,
                fontSize: 16
            }}>{data?.data.name}</Text>
        </TouchableOpacity>
        <View style={{
            flexDirection: 'row',
            gap:8,

        }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search')}><Entypo name="magnifying-glass" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity><Entypo name="message" size={24} color="black" /></TouchableOpacity>
        </View>
        
    </View>
    <Collapsible/>
    </LinearGradient>
    </>)
}



