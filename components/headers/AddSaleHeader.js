import { View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCart } from '../providers/CartProvider';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function AddSaleHeader() {
    const { cart, setCart } = useCart();
    return<>
    <LinearGradient
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}>

<View style={{
        paddingTop: 36,
        paddingBottom: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <View style={{
            flexDirection: 'row',
            gap: 8
        }}>
            <TouchableOpacity>
            <AntDesign name='left' size={20} color="black"/>
            </TouchableOpacity>
            <View>
            <Text style={{
                fontWeight: 'bold'
            }} >Add Sale</Text>
            {/* <Text>000000000</Text> */}
            </View>
            
            

        </View>
        <TouchableOpacity onPress={()=>setCart(!cart)}>
            <AntDesign name='shoppingcart' size={22} color="black" />
        </TouchableOpacity>
    </View>
        </LinearGradient>
    </>
    
}