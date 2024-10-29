import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
export default function AddNewParty() {
    const navigation = useNavigation()
    return<>
    <LinearGradient
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}>

<View style={{
        paddingTop: 60,
        paddingBottom: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <View style={{
            flexDirection: 'row',
            gap: 8
        }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <AntDesign name='left' size={20} color="black"/>
            </TouchableOpacity>
            <Text style={{
                fontWeight: 'bold',
                Fontisto: 24
            }} >Add New Party</Text>
            

        </View>
        <TouchableOpacity>
            <AntDesign name='setting' size={22} color="black" />
        </TouchableOpacity>
    </View>
        </LinearGradient>
    </>
}