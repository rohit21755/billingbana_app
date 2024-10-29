import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
const InvoiceModal = ({modalVisible, setModalVisible, invoice_number, setInvoiceNumer,invoice_date, open2,setOpen2, setInvoiceDate}) => {
    const [open, setOpen] = useState(false)
    function formatDate(s) {
        console.log(s)
        const dateObj = new Date(s);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');  
        const day = String(dateObj.getDate()).padStart(2, '0'); 
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate

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
            <Text style={styles.modalText}>Invoice Details</Text>
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
                        value={invoice_number}
                        keyboardType = 'numeric'
                        placeholder="Invoice Number"
                        placeholderTextColor="gray"
                        onChangeText={setInvoiceNumer}
                    />
            <TouchableOpacity style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 48,
                            borderRadius: 10,
                            paddingHorizontal: 14,
                            marginVertical: 10,
                        }} onPress={()=>setOpen2(!open2)}>
                            <Text style={{
                                color: 'black',
                                fontSize: 15,
                                
                            }}>{formatDate(invoice_date)}</Text>
                        </TouchableOpacity>
                        <DatePicker
                        modal
                        open={open2}
                        date={invoice_date}
                        onConfirm={(date) => {
                            setOpen2(false);
                            setInvoiceDate(date)
                        }}
                        onCancel={() => {
                            setOpen2(false);
                        }}
                    />
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
    // width: 80
  },
 
  modalView: {
    margin: 20,
    width: '70%',
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

export default InvoiceModal;