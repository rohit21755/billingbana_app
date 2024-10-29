import { View, TouchableOpacity, Text,TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import { useGlobalState } from '../../components/providers/GlobalStateProvider'
import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker'
export default function PaymentIn(){
    const {data, updateData} = useGlobalState()
    const [name, setName] = useState();
    const [paymentType, setPaymentType] = useState();
    const [desc, setDesc] = useState();
    const [date, setDate] = useState(new Date());
    const [reciptno, setReciptNo] = useState();
    const [amount, setAmount] = useState();
    const [open, setOpen] = useState();
    const [open2, setOpen2] = useState()
    const [open3, setOpen3] =useState()
    const [partyData, setPartyData] = useState()
    const payType = [
        {
            label: 'Cash', value: 'cash'
        },
        {
            label: 'Check', value: 'check'
        }
    ]
    useEffect(()=>{
        createPartyData()
    },[])
    function createPartyData() {
        if (data?.data?.parties) {
            const partyData1 = data.data.parties.map((p, index) => ({
                label: p.partyName,
                value: p.partyName
            }));
            setPartyData(partyData1);
        }
    }
    function handlePartyChange(s){
        
    }
    function handleSubmit(){
        let newData = {
            name: name ? name : "",
            paymentType: paymentType ? paymentType : "cash",
            description: desc ? desc : "",
            date: date ? formatDate(date) : "",
            invoice_number: reciptno ? reciptno : "",
            amount: amount ? amount : "",
            total: amount ? amount : "",
            type: "Payment-In",
            transactionType: "Payment-In",
          };
          let newDa = data
          newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);
      
      newDa.data.to_collect
      ? (newDa.data.to_collect -= parseFloat(newData.amount))
      : (newDa.data.to_collect = -parseFloat(newData.amount));

      newData.credit = newDa.data.parties.find((ele) => ele.partyName === name).credit;
      newDa.data.parties.find((ele) => ele.partyName === name).credit
      ? (newDa.data.parties.find((ele) => ele.partyName === name).credit -=
          parseFloat(newData.amount))
      : (newDa.data.parties.find((ele) => ele.partyName === name).credit =
          -parseFloat(newData.amount));

    newDa.data.cash_in_hands
      ? (newDa.data.cash_in_hands += parseFloat(newData.amount))
      : (newDa.data.cash_in_hands = parseFloat(newData.amount));

      newData.balance = newDa.data.parties.find(
        (ele) => ele.partyName === name
      ).credit;

      updateData(newDa, data.data.uid);
    }
    function formatDate(s) {
        console.log(s)
        const dateObj = new Date(s);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');  
        const day = String(dateObj.getDate()).padStart(2, '0'); 
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate

    }

    return(<>
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
                    <DropDownPicker
                     searchable={true}
                        open={open}
                        value={name}
                        items={partyData}
                        setOpen={setOpen}
                        zIndex={5000}
                        setValue={setName} 
                        // setItems={setItems}
                        placeholder={name ? name : 'Select Party'}
                        containerStyle={{ width: '100%' }}
                        style={{ backgroundColor: '#fafafa' }}
                        dropDownContainerStyle={{
                            backgroundColor: '#fafafa',
                        }}
                    />
                    <DropDownPicker
                        zIndex={3000}
                        open={open2}
                        value={paymentType}
                        items={payType}
                        setOpen={setOpen2}
                        setValue={setPaymentType}
                        placeholder={paymentType || 'Select Payment Type'}
                        containerStyle={{ width: '100%' }}
                        style={{ backgroundColor: '#fafafa', marginVertical: 10 }}
                        dropDownContainerStyle={{
                            backgroundColor: '#fafafa',
                        }}
                    />
                    <TouchableOpacity style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 48,
                            borderRadius: 10,
                            paddingHorizontal: 14,
                            marginVertical: 10,
                        }} onPress={()=>setOpen3(!open3)}>
                            <Text style={{
                                color: 'black',
                                fontSize: 15,
                                
                            }}>{formatDate(date)}</Text></TouchableOpacity>
                            <DatePicker
                        modal
                        open={open3}
                        date={date}
                        onConfirm={(date) => {
                            setOpen3(false);
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen3(false);
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
                        placeholder="Description"
                        placeholderTextColor="gray"
                        onChangeText={setDesc}
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
                        placeholder="Recipt Number"
                        placeholderTextColor="gray"
                        onChangeText={setReciptNo}
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
                        placeholder="Amount"
                        placeholderTextColor="gray"
                        onChangeText={setAmount}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={handleSubmit} style={{
                        padding: 12,
                        backgroundColor: '#BAD8FF',
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Save & New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit} style={{
                        padding: 12,
                        backgroundColor: '#BAD8FF',
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Save</Text>
                    </TouchableOpacity>
                    </View>
                </View>
    
    </>)

}