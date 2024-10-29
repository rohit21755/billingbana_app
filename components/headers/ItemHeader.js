import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
export default function ItemHeader() {
    const [selected, setSelected] = useState('item')
    return<>
    <LinearGradient colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingTop: 40
    }}>
        <View style={{
            flexDirection: 'row',
            gap:10
        }}><Entypo name="home" size={24} color="black" />
        <Text style={{
            fontWeight: '700',
            fontSize: 18
        }}>Sale</Text></View>
        <View style={{
            flexDirection: 'row',
            gap: 10
        }}>
            <TouchableOpacity><Entypo name="magnifying-glass" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity><MaterialIcons name="tune" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity><Ionicons name="settings-sharp" size={24} color="black" /></TouchableOpacity>
        </View>
    </View>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingHorizontal: 12
    }}>
        <TouchableOpacity onPress={()=> setSelected('item')} style={selected === 'item'? styles.selected : styles.notselected} >
            <Text style={{
                fontWeight: '400'
            }}>ITEMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelected('brand')} style={selected === 'brand'? styles.selected : styles.notselected} >
            <Text style={{
                fontWeight: '400'
            }}>BRANDS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelected('category')} style={selected === 'category'? styles.selected : styles.notselected} >
            <Text style={{
                fontWeight: '400'
            }}>CATEGORY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelected('online')} style={selected === 'online'? styles.selected : styles.notselected} >
            <Text style={{
                fontWeight: '400'
            }}>ITEMS</Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
    </>
}
const styles = StyleSheet.create({
    selected: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding:8,
            alignContent: 'center',
            alignItems: 'center'
    },
    notselected: {
        padding:8,
        alignContent: 'center',
        alignItems: 'center'

    }
})
