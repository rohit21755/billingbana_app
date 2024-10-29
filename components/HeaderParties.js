import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';

export default function HeaderParties() {
    return(<>
    <LinearGradient 
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}
    >
    <View style={{
        paddingTop: 44,
        paddingBottom: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <View style={{
            flexDirection: 'row',
            gap: 6
        }}>
            <TouchableOpacity><Entypo name="menu" size={28} color="black" /></TouchableOpacity>
            <TouchableOpacity style={{
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 30,
                backgroundColor: '#ABCFFF'
            }}>
                <Text style={{
                    fontWeight: '400'
                }}>My Groups</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            gap: 6
        }}>
            <TouchableOpacity><Entypo name="magnifying-glass" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
        </View>
        

    </View>
    </LinearGradient>
    </>)
}