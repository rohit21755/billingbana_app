import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native'
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
export default function Pricing(props) {
    const [catOpen, setCatOpen] = useState(false)
    const [toggle, setToggle] = useState(props.sellPrice.withTax);
    const [toggle2, setToggle2] = useState(props.purchaseprice.withTax)
    const [isFocus, setIsFocus] = useState(false);
    const taxData = [
        { label: '@Gst 0%', value: 0 },
        { label: '@IGst 0%', value: 0 },
        { label: '@Gst 0.25%', value: 0.25 },
        { label: '@IGst 0.25%', value: 0.25 },
        { label: '@Gst 3%', value: 3 },
        { label: '@IGst 3%', value: 3 },
        { label: '@Gst 5%', value: 5 },
        { label: '@IGst 5%', value: 5 },
        { label: '@Gst 12%', value: 12 },
        { label: '@IGst 12%', value: 12 },
        { label: '@Gst 18%', value: 18 },
        { label: '@IGst 18%', value: 18 },
        { label: '@Gst 28%', value: 28 },
        { label: '@IGst 28%', value: 28 },
        
      ];
    const toggleSwitch = () => {
        // Toggle the switch and update the 'withTax' in the state
        setToggle(!toggle);
        props.setSellPrice({
            ...props.sellPrice,
            withTax: !toggle // Update the 'withTax' based on toggle
        });
    };
    const toggleSwitch2 = () => {
        // Toggle the switch and update the 'withTax' in the state
        setToggle2(!toggle2);
        props.setSellPrice({
            ...props.sellPrice,
            withTax: !toggle2 // Update the 'withTax' based on toggle
        });
    };

    return (
        <>
        <View style={{
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#D9D9D9',
    padding: 8,
    marginVertical: 8
}}>
    <Text style={{
        fontSize: 18,
        fontWeight: '600'
    }}>Sale Price</Text>
            <TextInput
                value={props.sellPrice.value}  // Use props.sellPrice.value for the TextInput value
                onChangeText={(e) => {
                    props.setSellPrice({
                        ...props.sellPrice,
                        value: e // Update the 'value' field on text input change
                    });
                }}
                placeholder='Sale Price'
                style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 48,
                    borderRadius: 10,
                    paddingHorizontal: 14,
                    marginTop: 10,
                    marginBottom: 2
                }}
            />

            <View style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center'  // Ensure proper alignment
            }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>Without Tax</Text>
                
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={toggle ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}  // Handle the switch toggle
                    value={toggle}  // Sync with 'toggle' state
                />
              
                

                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>With Tax</Text>
            </View>
            <TextInput

    onChangeText={props.setDescount}
    placeholder='Discount'
    style={{
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        height: 48,
        borderRadius: 10,
        paddingHorizontal: 14,
        marginVertical: 10,
                        }}/>
                        <TextInput

onChangeText={props.setWholePrice}
placeholder='Wholesale Price'
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginVertical: 10,
                    }}/>

                    {!props.toggle && (<>
<Text style={{
        fontSize: 18,
        fontWeight: '600'
    }}>Purchase Price</Text>

                    <TextInput
                value={props.purchaseprice.value}  // Use props.sellPrice.value for the TextInput value
                onChangeText={(e) => {
                    props.setPurchasePrice({
                        ...props.sellPrice,
                        value: e // Update the 'value' field on text input change
                    });
                }}
                placeholder='Sale Price'
                style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 48,
                    borderRadius: 10,
                    paddingHorizontal: 14,
                    marginTop: 10,
                    marginBottom: 2
                }}
            />

            <View style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center'  // Ensure proper alignment
            }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>Without Tax</Text>
                
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={toggle ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}  // Handle the switch toggle
                    value={toggle2}  // Sync with 'toggle' state
                />
              
                

                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>With Tax</Text>
            </View>
            </>)}



            <Text style={{
        fontSize: 18,
        fontWeight: '600'
    }}>Taxes</Text>
                    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={taxData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Payment Type' : '...'}
          searchPlaceholder="Search..."
          value={props.tax}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            const selecteditems = item.value;
            props.setTax(selecteditems);
            setIsFocus(false);
          }
          }
          />
    </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 20,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
