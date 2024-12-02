import { View, Text, TouchableOpacity} from 'react-native';
export default function Stock(){
    return(<>
    <View style={{
        padding: 16,
        flexDirection: 'row',
        // gap:12
        justifyContent: 'space-between',
         
    }}>
        <View style={{
            padding: 12,
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
            width: '45%',
            
        }}>
            <Text>Low Stock</Text>
            <Text>0</Text>
            
        </View>
        <View style={{
            padding: 12,
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
            width: '45%',
        }}>
            <Text>Low Stock</Text>
            <Text>0</Text>
            
        </View>
    </View>
    </>)
}