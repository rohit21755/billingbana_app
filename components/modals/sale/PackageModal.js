import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
const PackageModal = ({modalVisible, setModalVisible, selectedState, setSelectedState, state_of_supply, states, saleType, setShippingAddress
}) => {
    const [open, setOpen] = useState(false)
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
            <Text style={styles.modalText}>Packge and Delivery</Text>
            <DropDownPicker
                        searchable={true}
  
                        zIndex={4000}
                        max={10}
                        open={open}
                        value={selectedState}
                        items={states}
                        setOpen={setOpen}
                        setValue={setSelectedState}  
                        placeholder={state_of_supply.state || 'Select State of Supply'}
                        containerStyle={{ width: '100%' }}
                        style={{ backgroundColor: '#fafafa' }}
                        dropDownContainerStyle={{
                            backgroundColor: '#fafafa',
                        }}
                    />
                    {saleType === 'Sale' ? <TextInput
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 48,
                            borderRadius: 10,
                            paddingHorizontal: 14,
                            marginVertical: 10,
                        }}
                        placeholder="Shipping Address"
                        placeholderTextColor="gray"
                        onChangeText={setShippingAddress}
                    /> : null}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close Modal</Text>
            </Pressable>
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
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '80%',
    alignItems: 'center',
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

export default PackageModal;