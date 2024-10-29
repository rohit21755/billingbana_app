import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import Entypo from '@expo/vector-icons/Entypo';
import { useGlobalState } from '../providers/GlobalStateProvider'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
export default function AddPartyForm() {
    const navigation = useNavigation()
    const { data, updateData} = useGlobalState()
    const [open, setOpen] = useState(false);
    const [gstopen, setGstOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [state, setState] = useState(null)
    const states = [
        { label: 'Andhra Pradesh', value: 'andhra_pradesh' },
        { label: 'Arunachal Pradesh', value: 'arunachal_pradesh' },
        { label: 'Assam', value: 'assam' },
        { label: 'Bihar', value: 'bihar' },
        { label: 'Chhattisgarh', value: 'chhattisgarh' },
        { label: 'Goa', value: 'goa' },
        { label: 'Gujarat', value: 'gujarat' },
        { label: 'Haryana', value: 'haryana' },
        { label: 'Himachal Pradesh', value: 'himachal_pradesh' },
        { label: 'Jharkhand', value: 'jharkhand' },
        { label: 'Karnataka', value: 'karnataka' },
        { label: 'Kerala', value: 'kerala' },
        { label: 'Madhya Pradesh', value: 'madhya_pradesh' },
        { label: 'Maharashtra', value: 'maharashtra' },
        { label: 'Manipur', value: 'manipur' },
        { label: 'Meghalaya', value: 'meghalaya' },
        { label: 'Mizoram', value: 'mizoram' },
        { label: 'Nagaland', value: 'nagaland' },
        { label: 'Odisha', value: 'odisha' },
        { label: 'Punjab', value: 'punjab' },
        { label: 'Rajasthan', value: 'rajasthan' },
        { label: 'Sikkim', value: 'sikkim' },
        { label: 'Tamil Nadu', value: 'tamil_nadu' },
        { label: 'Telangana', value: 'telangana' },
        { label: 'Tripura', value: 'tripura' },
        { label: 'Uttar Pradesh', value: 'uttar_pradesh' },
        { label: 'Uttarakhand', value: 'uttarakhand' },
        { label: 'West Bengal', value: 'west_bengal' },
        { label: 'Andaman and Nicobar Islands', value: 'andaman_nicobar' },
        { label: 'Chandigarh', value: 'chandigarh' },
        { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'dadra_nagar_haveli_daman_diu' },
        { label: 'Delhi', value: 'delhi' },
        { label: 'Jammu and Kashmir', value: 'jammu_kashmir' },
        { label: 'Ladakh', value: 'ladakh' },
        { label: 'Lakshadweep', value: 'lakshadweep' },
        { label: 'Puducherry', value: 'puducherry' },
    ];
    

    const category = [
        { label: 'Unregistered/Consumer', value: 'Unregistered/Consumer' },
        { label: 'Registered Business - Regular', value: 'Registered Business - Regular' },
        { label: 'Registered Business - Consumer', value: 'Registered Business - Consumer' },
    ];

    const [gstcategory, setGstCategory] = useState(null);
    const [date, setDate] = useState(new Date());
    const [open2, setOpen2] = useState(false);
    const [partyName, setPartyName] = useState('');
    const [GSTIN, setGSTIN] = useState('');
    const [phoneNo, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [add, setAdd] = useState('');
    const [openingBalance, setOpeningBalance] = useState(0);
    const [asDate, setAsDate] = useState('');
    const [addF1, setAddF1] = useState('');
    const [addF2, setAddF2] = useState('');
    const [addF3, setAddF3] = useState('');
    const [creditLimit, setCreditLimit] = useState(0);

    // Function to capture and log the input data
    function addData() {
        if (
            partyName.trim() === '' || 
            
            phoneNo.trim() === '' ||
            email.trim() === '' ||
            add.trim() === '' ||
            openingBalance === '' || 
            date === null ||
            gstcategory === null || 
            creditLimit === ''
        ) {
            alert("Please fill the data")
            return
        }
        console.log('Party Name:', partyName);
        console.log('GSTIN:', GSTIN);
        console.log('Phone No:', phoneNo);
        console.log('Email:', email);
        console.log('Address:', add);
        console.log('Opening Balance:', openingBalance);
        console.log('Date:', date);
        console.log('GST Category:', gstcategory);
        console.log('Credit Limit:', creditLimit);
        let newData = {
            partyName: partyName ? partyName : "",
            GSTIN: GSTIN ? GSTIN : "",
            phoneNo: phoneNo ? phoneNo : "",
            GstType: gstcategory ? gstcategory : "",
            state: state ? state : "",
            Email: email ? email : "",
            Add: add ? add : "",
            OpeningBalance: openingBalance  ? parseInt(openingBalance) : "",
            asDate: date ? date : "",
            AddF1: addF1 ? addF1 : "",
            AddF2: addF2 ? addF2 : "",
            AddF3: addF3 ? addF3 : "",
            transactions: [],
            creditLimit: creditLimit,
            // convert openingbalance into integer below
            credit: parseInt(openingBalance ? openingBalance : 0),
          };
          
          let newDa = data;
          newDa.data.parties ? newDa.data.parties.push(newData) : (newDa.data.parties = [newData])
          
          openingBalance && newDa?.data.Transactions
      ? newDa?.data.Transactions.push({
          type: "Opening Balance",
          name: partyName,
          invoice_number: "-",
          invoice_date: new Date(Date.now()).toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          date: new Date(Date.now()).toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          // date: Date.now(),
          total: parseFloat(openingBalance),
          pending: parseFloat(openingBalance),
        })
      : (newDa.data.Transactions = [
          {
            type: "Opening Balance",
            name: partyName,
            date: new Date(Date.now()).toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            amount: parseFloat(openingBalance),
          },
        ]);

          updateData(newDa, data.data.uid)

          alert("Party is Added")
          navigation.goBack()
          
    }

    return (
        <>
            <LinearGradient
                colors={['rgba(186, 216, 255, 1)', 'rgba(255, 255, 255, 1)']}
                start={{ x: 0.09, y: 0 }}
                end={{ x: 0.96, y: 1 }}
                style={{
                    padding: 18,
                    width: '100%',
                    height: 100,
                    backgroundColor: '#BAD8FF',
                }}
            >
                <View
                    style={{
                        marginTop: 5,
                        borderWidth: 1,
                        backgroundColor: 'white',
                        borderColor: '#D9D9D9',
                        paddingTop: 16,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                        paddingBottom: 12,
                    }}
                >
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
                        placeholder="Enter GST Number"
                        placeholderTextColor="gray"
                        value={GSTIN}
                        onChangeText={setGSTIN}
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
                        placeholder="Legal Name"
                        placeholderTextColor="gray"
                        value={partyName}
                        onChangeText={setPartyName}
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
                        placeholder="Contact Number"
                        placeholderTextColor="gray"
                        value={phoneNo}
                        onChangeText={setPhone}
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
                        placeholder="Email"
                        placeholderTextColor="gray"
                        value={email}
                        onChangeText={setEmail}
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
                        placeholder="Address"
                        placeholderTextColor="gray"
                        value={add}
                        onChangeText={setAdd}
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
                        keyboardType="numeric"
                        placeholder="Opening balance"
                        placeholderTextColor="gray"
                        value={openingBalance}
                        onChangeText={setOpeningBalance}
                    />

                    <DropDownPicker
                        open={gstopen}
                        value={gstcategory}
                        items={category}
                        setOpen={setGstOpen}
                        setValue={setGstCategory}
                        placeholder="GST Category"
                        containerStyle={{ width: '100%' }}
                        style={{ backgroundColor: 'white', zIndex: 1000 }}
                        dropDownContainerStyle={{
                            backgroundColor: 'white',
                        }}
                    />

                    
                        

                        <TouchableOpacity
                            style={{
                                
                                marginVertical: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                                height: 48,
                                borderRadius: 10,
                                paddingHorizontal: 14,
                                // justifyContent: 'center',
                                paddingVertical: 11,
                                backgroundColor: 'white',
                                flexDirection: 'row',
                                gap: 8
                            }}
                            onPress={() => setOpen2(true)}
                        >
                            <Entypo name="calendar" size={18} color="black" />
                            <Text style={{
                                fontSize: 15
                            }}>{date.toDateString()}</Text>
                        </TouchableOpacity>
                   

                    <DatePicker
                        modal
                        open={open2}
                        date={date}
                        onConfirm={(date) => {
                            setOpen2(false);
                            setDate(date);
                        }}
                        onCancel={() => {
                            setOpen2(false);
                        }}
                    />

<View
    style={{
        backgroundColor: 'white',
        padding: 16,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',  // Changed to space-between
        height: 60,
    }}
>
    <TouchableOpacity
        style={{
            flex: 1,  // Makes the button take equal available space
            padding: 2,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 6,
            marginRight: 8, // Adds space between the buttons
            alignItems: 'center',
        }}
        onPress={addData}
    >
        <Text>Save & New</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={{
            flex: 1,  // Makes the button take equal available space
            padding: 2,
            borderWidth: 1,
            borderColor: 'blue',
            borderRadius: 6,
            alignItems: 'center',
        }}
        onPress={addData}
    >
        <Text>Save</Text>
    </TouchableOpacity>
</View>

                </View>

               
            </LinearGradient>
            
        </>
    );
}
