import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
const PaymentModal = ({modalVisible, setModalVisible, selectedPaymentType, paymentTypes, setSelectedPaymentType,setRoundOff, totalTax, setTotalTax, taxes, setPaid, saleType, setBillingAddress}) => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
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
            <Text style={styles.modalText}>Payment Details</Text>
            <DropDownPicker
                        zIndex={3000}
                        open={open}
                        value={selectedPaymentType}
                        items={paymentTypes}
                        setOpen={setOpen}
                        setValue={setSelectedPaymentType}
                        placeholder={selectedPaymentType || 'Select Payment Type'}
                        containerStyle={{ width: '100%' }}
                        style={{ backgroundColor: '#fafafa', marginVertical: 10 }}
                        dropDownContainerStyle={{
                            backgroundColor: '#fafafa',
                        }}
                    />
                    <DropDownPicker
                        zIndex={3000}
                        open={open2}
                        value={totalTax}
                        items={taxes}
                        setOpen={setOpen2}
                        setValue={setTotalTax}
                        placeholder={totalTax || 'Select Taxes'}
                        containerStyle={{ width: '100%' }}
                        style={{ backgroundColor: '#fafafa', marginVertical: 10 }}
                        dropDownContainerStyle={{
                            backgroundColor: '#fafafa',
                        }}
                    />
                    <TextInput
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 48,
                            borderRadius: 10,
                            paddingHorizontal: 14,
                            marginVertical: 10,
                        }}
                        keyboardType = 'numeric'
                        placeholder="Round OFF"
                        placeholderTextColor="gray"
                        onChangeText={setRoundOff}
                    />
                    <TextInput
                    keyboardType = 'numeric'
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 48,
                            borderRadius: 10,
                            paddingHorizontal: 14,
                            marginVertical: 10,
                        }}
                        placeholder="Pay"
                        placeholderTextColor="gray"
                        onChangeText={setPaid}
                    />
                    {saleType === 'Sale' ? (<TextInput
                    keyboardType = 'numeric'
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 48,
                            borderRadius: 10,
                            paddingHorizontal: 14,
                            marginVertical: 10,
                        }}
                        placeholder="Billing Address"
                        placeholderTextColor="gray"
                        onChangeText={setBillingAddress}
                    />) : null}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Submit</Text>
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
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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

export default PaymentModal;