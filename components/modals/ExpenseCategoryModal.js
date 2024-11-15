import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import { useGlobalState } from '../providers/GlobalStateProvider';
const ExpenseCategoryModal = ({ modalVisible, setModalVisible }) => {
  const [open, setOpen] = useState(false);
  const expenseType = [
    { label: 'Direct Expense', value: 'Direct Expense' },
    { label: 'Indirect Expense', value: 'Indirect Expense' },
  ];
  const [value, setValue] = useState();
  const {data, updateData} = useGlobalState()
  const [categoryName, setCategoryName] = useState()
  function hanleSubmit() {
    const newData = {
      name: categoryName || "",
      type: value || ""
    }
    let newDa = data
    newDa.data.expenseCategory
      ? newDa.data.expenseCategory.push(newData)
      : (newDa.data.expenseCategory = [newData]);
    updateData(newDa, data.data.uid)
    setModalVisible(!modalVisible)
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
              <Text style={styles.modalText}>Add Category Type</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={20} color="black" />
              </Pressable>
            </View>
            
            
            <TextInput
              style={styles.inputStyle}
              value={categoryName}
              placeholder="Category Name"
              placeholderTextColor="gray"
              onChangeText={setCategoryName}
            />
            
            <DropDownPicker
              open={open}
              value={value}
              items={expenseType}
              setOpen={setOpen}
              setValue={setValue}
              placeholder={value ? value : 'Select Category Type'}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdownStyle}
              dropDownContainerStyle={styles.dropdownContainerStyle}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={hanleSubmit}>
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
    width: '90%', // Adjust the width of the modal
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'stretch', // Changed from 'center' to 'stretch'
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
  dropdownContainer: {
    marginVertical: 10,
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
  },
  dropdownContainerStyle: {
    backgroundColor: '#fafafa',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    alignSelf: 'center', // Center the button
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

export default ExpenseCategoryModal;