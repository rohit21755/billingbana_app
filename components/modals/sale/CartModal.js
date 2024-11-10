import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const CartModal = ({modalVisible, setModalVisible, rows}) => {
  function handleClose() {
    setModalVisible(false);
  }
  const filteredRows = rows.filter(row => row.qty > 0);
  if (filteredRows.length === 0) {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>No Items Available in Cart</Text>
              <Pressable onPress={handleClose}><Text>Close</Text></Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  // If there are items with qty > 0, render the cart items
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {filteredRows.map((row, index) => (
              <View key={index} style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <Text>{row.item}</Text>
                <Text>{row.qty}</Text>
              </View>
            ))}
            
            <Pressable onPress={handleClose} style={{
              paddingVertical: 5,
              paddingHorizontal: 12,
              borderWidth: 1,
              marginTop: 5,
              borderRadius: 12 
            }}><Text style={{
              textAlign: 'center'
            }}>Close</Text></Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '75%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CartModal;