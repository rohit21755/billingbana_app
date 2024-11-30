import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
const SaleTypeModal = ({modalVisible, setModalVisible, saleTypes, saleType, setSaleType}) => {
    const [open, setOpen] = useState(false)
    const [sale, setSale] = useState()
    function submit(){
      setSaleType(sale)
      setModalVisible(!modalVisible)
    }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select Party</Text>
            <DropDownPicker
                    
                        open={open}
                        value={sale}
                        items={saleTypes}
                        setOpen={setOpen} 
                        zIndex={5000}
                        setValue={setSale} 
                        // setItems={setItems}
                        placeholder={sale ? sale : 'Select Type of Sale'}
                        containerStyle={{ width: '100%' }}
                        style={{ backgroundColor: '#fafafa' }}
                        dropDownContainerStyle={{
                            backgroundColor: '#fafafa',
                        }}
                    />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={submit}>
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

export default SaleTypeModal;