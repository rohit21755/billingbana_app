import { View, Text, TouchableOpacity, Image} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Item() {
    return<>
    <View style={{
        padding: 16,
        flexDirection: 'row',
        // gap:12
        justifyContent: 'space-between',
         
    }}>
        <View style={{
            padding: 12,
            borderWidth: 2,
            alignItems: 'center',
            width: '45%'
        }}>
            <Text>0</Text>
            <Text>No. of Items</Text>
            
        </View>
        <View style={{
            padding: 12,
            borderWidth: 2,
            alignItems: 'center',
            width: '45%'
        }}>
            <Text>2000</Text>
            <Text>Stock Value</Text>
            
        </View>

    </View>
    <View style={{
        padding:16
    }}>
        <View style={{
            flexDirection: 'row',
        }}>
            <View style={{
                width: '20%'
            }}><Image source={require('../../assets/images/item1.png')} style={{}}/></View>
            
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // width: '100%'
                }}>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>Fiery Jalapeno, Paprika Pizza</Text>
                    <Ionicons name="information-circle-outline" style={{
                        marginTop: 4,
                        marginRight: ''
                    }} size={12} color="black" />
                </View>
            </View>
        </View>
    </View>
    </>
}