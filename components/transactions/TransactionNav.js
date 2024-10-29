import { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
export default function TransactionNav() {
    const [selected, setSelected] = useState('live')

    return<>
    <View style={{
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }}>
        <TouchableOpacity onPress={()=> setSelected('live')} style={{
            width: '45%',
            borderRadius: 6,
            alignItems: 'center',
            alignContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderWidth: 1,
            backgroundColor: selected === "live" ? 'white': '#BAD8FF8F',
            borderColor: selected === "live"? "#76B1FE" : "#D9D9D9"
        }}>
            <Text style={{
                fontSize: 12,
                fontWeight: 'bold'
            }}>Live Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelected('past')} style={{
            width: '45%',
            borderRadius: 6,
            alignItems: 'center',
            alignContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderWidth: 1,
            backgroundColor: selected === "past" ? 'white': '#BAD8FF8F',
            borderColor: selected === "past"? "#76B1FE" : "#D9D9D9"
        }}>
            <Text style={{
                fontSize: 12,
                fontWeight: 'bold'
            }}>Past orders</Text>
        </TouchableOpacity>
    </View>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18
    }}>
        <View style={{
            borderRadius: 7,
            padding:3,
            borderWidth: 2,
            borderColor: 'gray'            
        }}>
           <Text>All</Text>
        </View>
        <View style={{
            borderRadius: 7,
            padding:3,
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor: '#F7FFAE'            
        }}>
             <Text>Offline</Text>
        </View>
        <View style={{
            borderRadius: 7,
            padding:3,
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor: '#AEFFDD'            
        }}>
             <Text>Online</Text>
        </View>
        <View style={{
            borderRadius: 7,
            padding:3,
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor: '#FF9D9D'            
        }}>
             <Text>Return</Text>
        </View>
       
    </View>
    </>
}