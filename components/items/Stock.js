import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';
export default function Stock(props){
    const [open2, setOpen2] = useState(false);
    return<>
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
    }}>Stock</Text>
    <TextInput

// onChangeText={setitemCode}
onChangeText={props.setOpeningQuantity}
// value={itemCode}
placeholder='Opening Quantity'
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 2
                    }}/>
                    <TextInput

onChangeText={props.setAtPrice}
// value={itemCode}
placeholder='At Price'
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 2
                    }}/>
                    <TextInput

    onChangeText={props.setMinToMaintain}
value={props.minToMaintain}
placeholder='Min Stock to maintain'
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 2
                    }}/>
                    <TextInput

onChangeText={props.setLocation}
// value={itemCode}
placeholder='Location'
style={{
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 2
                    }}/>
                    <TouchableOpacity
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
                            onPress={() => setOpen2(true)}
                        >
                            
                            <Text>{props.asDate.toDateString()}</Text>
                        </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open2}
                        date={props.asDate}
                        onConfirm={(date) => {
                            setOpen2(false);
                            props.setAsDate(date);
                        }}
                        onCancel={() => {
                            setOpen2(false);
                        }}
                    />
                    </View>
    </>
}