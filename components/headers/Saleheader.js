import { View, Text, TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function SaleHader(){
    return<>
        <View style={{
            paddingTop: 60,
            paddingBottom: 12,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent:'space-between',
            
        }}>
            <View style={{
                flexDirection: 'row',
                gap: 10
            }}><TouchableOpacity><Entypo name="home" size={24} color="#0C2D79" /></TouchableOpacity>
                <Text  style={{
                    fontWeight: 'bold',
                    fontSize: 20
                }}>Sale</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                gap:7
            }}>
                <Entypo name='magnifying-glass' size={24} color="#0C2D79"/>
                <MaterialIcons name="tune" size={24} color="#0C2D79" />
            </View>
            
        </View>
    </>
}