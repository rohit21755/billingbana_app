import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Nav({handleChange}) {
    const [selectedText, setSelected] = useState('all');
    function handleSelected(s) {
        setSelected(s);
        handleChange(s)
        // handleFuntion(s);
    }

    return (
        <>
        <LinearGradient 
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}
    >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 12,
                paddingHorizontal: 18,
            }}>
                <TouchableOpacity
                    onPress={() => handleSelected('all')}
                    style={{
                        paddingTop:16
                    }}
                >
                    <Text style={selectedText === 'all'? styles.selected : styles.notSelected}>All Parties</Text>
                    {selectedText === 'all' && <View style={styles.underline}></View>}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSelected('collect')}
                >
                    <Text style={selectedText === 'collect'? styles.selected : styles.notSelected}>To Collect</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'green'
                    }}>₹ 5600</Text>
                    {selectedText === 'collect' && <View style={styles.underline}></View>}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSelected('pay')}
                >
                    <Text style={selectedText === 'pay'? styles.selected : styles.notSelected}>To Pay</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'red'
                    }}>₹ 5600</Text>
                    {selectedText === 'pay' && <View style={styles.underline}></View>}
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    selected: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    notSelected: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 16,
    },
    underline: {
        height: 2, 
        backgroundColor: 'black', 
        marginTop: 5, 
    },
});
