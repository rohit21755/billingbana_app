import {View, Text, TouchableOpacity, Pressable, Modal, TextInput } from 'react-native';
export default function TaxModal({modalVisible, setModalVisible, handleTaxSubmit, currentTaxPercentage, setCurrentTaxPercentage, items, currentItemIndex}){
    return(<>
    <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%'}}>
                        <Text>Enter Tax Percentage for {items[currentItemIndex]?.Name}:</Text>
                        <TextInput
                            style={{borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 10}}
                            keyboardType="numeric"
                            value={currentTaxPercentage}
                            onChangeText={setCurrentTaxPercentage}
                        />
                        <TouchableOpacity onPress={handleTaxSubmit} style={{backgroundColor: '#2196F3', padding: 10, marginTop: 10, borderRadius: 5}}>
                            <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    </>)
}