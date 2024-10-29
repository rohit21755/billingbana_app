import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { setUpTests } from 'react-native-reanimated';
export default function AddItemExModal({modalVisible, setModalVisible, rows, setRows}) {
    const [item, setItem] = useState()
    const [qty, setQty] = useState(0)
    const [price,setPrice] = useState(0.00)
    const [amount, setAmount] = useState(0.00)
    function handleAddRow(t) {

        setRows(prevRows => [
            ...prevRows,
            {
                index: prevRows.length+1,
                item: item,
                qty: qty,
                price: price,
                amount: amount
            }
        ])
        reset()
        if(!t){
            setModalVisible(!modalVisible);
            
        }

    }
    function reset() {
        setItem("");
        setAmount(0.00)
        setPrice(0.00)
        setQty(0)
    }
    return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.header}>
                  <Text style={styles.modalText}>Add Item Details</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <AntDesign name="close" size={20} color="black" />
                  </Pressable>
                </View>
                
                <TextInput
                  style={styles.inputStyle}
                //   value={itemName}
                  placeholder="Item Name"
                  placeholderTextColor="gray"
                  onChangeText={setItem}
                />
                
                <TextInput
                  style={styles.inputStyle}
                  value={qty}
                  placeholder="Quantity"
                  placeholderTextColor="gray"
                  onChangeText={setQty}
                  keyboardType="numeric"
                />
                
                <TextInput
                  style={styles.inputStyle}
                  value={price}
                  placeholder="Price"
                  placeholderTextColor="gray"
                  onChangeText={setPrice}
                  keyboardType="numeric"
                />
                
                <TextInput
                  style={styles.inputStyle}
                  value={amount}
                  placeholder="Amount"
                  placeholderTextColor="gray"
                  editable={false}
                  onChangeText={setAmount}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleAddRow(true)}>
                  <Text style={styles.textStyle}>Submit and New</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleAddRow(false)}>
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                
              </View>
            </View>
          </Modal>
        </View>
      );
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'stretch',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },
    modalText: {
      fontWeight: '700',
      fontSize: 18,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: 'gray',
      height: 48,
      borderRadius: 10,
      paddingHorizontal: 14,
      marginVertical: 10,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 10,
      alignSelf: 'center',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });