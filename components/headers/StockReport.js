
import { View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { CheckBoxComponent } from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import SNav from '../stock/Nav';
export default function StockReportHeaderß(){
    function handleSelected(s){
        ß
    }
    return <>
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
        <View style={{
            flexDirection: 'row',
            gap:10
        }}>
            <TouchableOpacity>
                <AntDesign name='left' size={20} color='black'/>
            </TouchableOpacity>
            <Text  style={{
                fontSize: 16
            }}>Stock Report</Text>

        </View>
        
        <View style={
            {
                flexDirection: 'row',
                gap:10,
            }
        }>
            <Entypo name='magnifying-glass' size={20} color='black'/>
            <Entypo name='magnifying-glass' size={20} color='black'/>

        </View>
    </View>

    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }}>
        <View style={{
            flexDirection: 'row',
            gap:3
        }}>
            {/* <CheckBoxComponent
            value={isSelected}
            onValueChange={setSelection}/> */}
            <Text>Show stock as on date</Text>

        </View>
        <TouchableOpacity>
            <AntDesign name='filter' size={20} color='black'/>
        </TouchableOpacity>
    </View>

 
    </LinearGradient>
    </>
}