import { LinearGradient } from "expo-linear-gradient"
import {View, Text, TouchableOpacity} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
export default function PaymentInHeader({title}){
    const navigation = useNavigation()
    return(<>
      <LinearGradient
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}>

            <View style={{
                paddingTop: 42,
                paddingBottom: 10,
                paddingHorizontal: 12,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 12
                }}>
                    <TouchableOpacity><AntDesign name="left" size={24} color="black" /></TouchableOpacity>
                    <Text
                    style={{
                        fontWeight: '600',
                        fontSize: 20
                    }}>{title}</Text>
                </View>
                <View style={{
                
                }}>
                    <TouchableOpacity>
                    <AntDesign name="setting" size={24} color="black" />
                    </TouchableOpacity>
                    




                </View>
            </View>
        </LinearGradient>
    
    </>)
}