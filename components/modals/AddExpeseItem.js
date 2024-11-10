import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { useGlobalState } from '../providers/GlobalStateProvider';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function AddExpenseItem({modalVisible, setModalVisible}){
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const { data , updateData } = useGlobalState("")
    let isFormValid = name.trim() !== "" && price>0;
    function handleAddRow(x){
        const newData = {
            name: name || "",
            price: price || 0,
        }
        let newDa = data
        newDa.data.expenseItem
      ? newDa.data.expenseItem.push(newData)
      : (newDa.data.expenseItem = [newData]);
        console.log(newData)
        console.log(newDa.data.expenseItem)
      updateData(newDa, data.data.uid);
      if(x){
        setModalVisible(!modalVisible)
      }
      else{
        setName("");
        setPrice(0)
      }

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
                  placeholder="Item Name"
                  placeholderTextColor="gray"
                  onChangeText={setName}
                  value={name}
                  
                />
                
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Price"
                  placeholderTextColor="gray"
                  onChangeText={(value) => setPrice(value || 0)}
                  keyboardType="numeric"
                  value={price}
                />
                
               
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => handleAddRow(false)}>
                  <Text style={styles.textStyle}>Submit and New</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => handleAddRow(true)}>
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
