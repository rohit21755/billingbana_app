import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
export default function SNav({handleSelected}){
    const [value, setValue] = useState('stock');
    function handleSelected2(s){
        setValue(s)
        handleSelected(s)
       
    }
    return<>
    <LinearGradient 
    colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
    start={{ x: 0.09, y: 0 }}
        end={{ x: 0.96, y: 1 }}
    >
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16
    }}>
        <TouchableOpacity
                    onPress={() => handleSelected2('stock')}
                >
                    <Text style={value === 'stock'? styles.selected : styles.notSelected}>Stock Summary</Text>
                    
                    {value === 'stock' && <View style={styles.underline}></View>}
                </TouchableOpacity><TouchableOpacity
                    onPress={() => handleSelected2('item')}
                >
                    <Text style={value === 'item'? styles.selected : styles.notSelected}>Item Report</Text>
                    
                    {value === 'item' && <View style={styles.underline}></View>}
                </TouchableOpacity>
    </View>
    </LinearGradient>


    </>
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


