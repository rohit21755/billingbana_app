import { Text, View, TextInput, Touchable, TouchableOpacity,StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import AddSalebt from '../../components/bottom/AddSaleBt';
import Entypo from '@expo/vector-icons/Entypo';
import { useGlobalState } from '../../components/providers/GlobalStateProvider';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import PartyModal from '../../components/modals/sale/PartyModal'
import InvoiceModal from '../../components/modals/sale/InvoiceModal'
import PaymentModal from "../../components/modals/sale/PaymentModal"
import PackageModal from '../../components/modals/sale/PackageModal'
import SaleTypeModal from '../../components/modals/sale/SaleTypeModal';
export default function AddPurchaseForm() {
    
    const navigation = useNavigation()
    // party modals
    const [partymodal, setPartyModal] = useState(false);
    // Invoice modals
    const [invoicemodal, setInvoiceModal] = useState(false);
    // payment Modal
    const [paymentModal, setPaymentModal] = useState(false)
    // packaging detials modal
    const [packageModal, setPackageModal] = useState(false)
    // extracting the rows 
    const { setRows, rows, totalPrice, setTotalPrice} = useGlobalState()
    
    
    const states = [
        { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
        { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
        { label: 'Assam', value: 'Assam' },
        { label: 'Bihar', value: 'Bihar' },
        { label: 'Chhattisgarh', value: 'Chhattisgarh' },
        { label: 'Goa', value: 'Goa' },
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'Haryana', value: 'Haryana' },
        { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
        { label: 'Jharkhand', value: 'Jharkhand' },
        { label: 'Karnataka', value: 'Karnataka' },
        { label: 'Kerala', value: 'Kerala' },
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Manipur', value: 'Manipur' },
        { label: 'Meghalaya', value: 'Meghalaya' },
        { label: 'Mizoram', value: 'Mizoram' },
        { label: 'Nagaland', value: 'Nagaland' },
        { label: 'Odisha', value: 'Odisha' },
        { label: 'Punjab', value: 'Punjab' },
        { label: 'Rajasthan', value: 'Rajasthan' },
        { label: 'Sikkim', value: 'Sikkim' },
        { label: 'Tamil Nadu', value: 'Tamil Nadu' },
        { label: 'Telangana', value: 'Telangana' },
        { label: 'Tripura', value: 'Tripura' },
        { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
        { label: 'Uttarakhand', value: 'Uttarakhand' },
        { label: 'West Bengal', value: 'West Bengal' },
        { label: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
        { label: 'Chandigarh', value: 'Chandigarh' },
        { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'Dadra and Nagar Haveli and Daman and Diu' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
        { label: 'Ladakh', value: 'Ladakh' },
        { label: 'Lakshadweep', value: 'Lakshadweep' },
        { label: 'Puducherry', value: 'Puducherry' },
    ];
    const purchaseTypes = [
        
        {label: 'Purchase Order', value: 'Purchase Order'},
        
        {label: 'Purchase Returns', value: 'Purchase Returns'},
      
    ]
    
    const { data,updateData } = useGlobalState()
    
    const [value, setValue] = useState(null);
    const [partyData, setPartyData] = useState()
    const [date, setDate] = useState(new Date())
    const [open2, setOpen2] = useState(false)
    const [party, setParty] = useState({
        name: '',
        phone: ''
    })
    const [invoice_number, setInvoiceNumer] = useState()
    const [invoice_date, setInvoiceDate] = useState(new Date())
    const [state_of_supply, setStateOfSupply] = useState({
        state: '',
        isDone: ''
    })
    const [stateOpen, setStateOpen] = useState(false); 
    const [selectedState, setSelectedState] = useState(null);
    const paymentTypes = [
        { label: 'Credit', value: 'Credit' },
        { label: 'Cash', value: 'Cash' },
    ];
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [selectedPaymentType, setSelectedPaymentType] = useState(null);
    const [roundOff, setRoundOff] = useState()
    const [totalTax, setTotalTax] = useState(0);
    const [desc, setDesc] = useState('')
    const [paid, setPaid] = useState(0)
    const [profit, setProfit] = useState(0)
    const [purchaseType, setPurcahseType] = useState() 
    const [saleTypeModal, setSaleTypeModal] = useState(false)
    const [allValuesSet, setAllValuesSet] = useState({
        purchaseType: false,
        party: false,
        invoice: false,
        payment: false,
        package: false,
    });
    useEffect(()=>{
        createPartyData()
        setInvoiceNumer(generateInvoiceNumber())
    },[data])
    useEffect(()=>{
       
        if(!invoice_number){
            generateInvoiceNumber()
        }
    },[])
    
    
    function generateInvoiceNumber() {
        const existing = new Set(data?.data.Transactions.map(item => item.invoice_number));
        let invoice;
    do {
      invoice = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    } while (existing.has(invoice));
    return invoice;
    }
    function createPartyData() {
        if (data?.data?.parties) {
            const partyData1 = data.data.parties.map((p, index) => ({
                label: p.partyName,
                value: { name: p.partyName, phone: p.phoneNo }, 
            }));
            setPartyData(partyData1);
        }
    }
    const handlePartyChange = (selectedParty) => {
        console.log("party selected")
        if (selectedParty) {
            setParty(selectedParty); 
        }
        setPartyModal(false)
    };
    function formatDate(s) {
        console.log(s)
        const dateObj = new Date(s);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');  
        const day = String(dateObj.getDate()).padStart(2, '0'); 
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate

    }
    useEffect(()=>{
        handleStateChange();
    },[stateOpen])

    useEffect(()=>{
        handleTaxes()
    },[totalTax])
    function handleTaxes () {
        console.log("Gst selected :)")
    }
    const handleStateChange = () => {
        setStateOfSupply({ isDone : false, state: selectedState }); 
    };
    
    
    
    const handleSubmitDebitNote = () => {
        const newData = {
            name: party.name ? party.name : "",
            phone_no: party.phoneNo ? party.phoneNo : "",
            invoice_number: invoice_number ? invoice_number : "",
            invoice_date: invoice_date ? formatDate(invoice_date) : "",
            // date: due_date ? due_date : "",
            state_of_supply: state_of_supply.state ? state_of_supply.state : "",
            payment_type: selectedPaymentType ? selectedPaymentType : "",
            transactionType: "Debit Note",
            items: filteredRows ? filteredRows : "",
            round_off: roundOff ? roundOff : "",
            total: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "",
            amount: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "", 
            profit: profit ? profit : "", 
            total_tax: (totalTax * totalPrice)/100,
            description: desc ? desc : "",
            pending: totalPrice && paid ? totalPrice + (totalTax * totalPrice)/100  - paid : 0,
            paid: paid,
            type: "Debit Note",
          };
          let newDa = data;

    newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);
    newDa.data.sales ? newDa.data.sales.push(newData) : (newDa.data.sales = [newData]);
    }
    
    const handleSubmitPurchaseOrder = () => {
        const filteredRows = rows.filter(row => row.qty > 0);
        const newData = {
            name: party.name ? party.name : "",
            phone_no: party.phoneNo ? party.phoneNo : "",
            invoice_number: invoice_number ? invoice_number : "",
            invoice_date: invoice_date ? formatDate(invoice_date) : "",
            // due_date: due_date ? due_date : "",
            state_of_supply: state_of_supply.state ? state_of_supply.state : "",
            payment_type: selectedPaymentType ? selectedPaymentType : "",
            transactionType: "Purchase order",
            items: filteredRows ? filteredRows : "",
            round_off: roundOff ? roundOff : "",
            total: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "", 
            profit: profit ? profit : "", 
            total_tax: (totalTax * totalPrice)/100,
            description: desc ? desc : "",
            pending: totalPrice && paid ? totalPrice + (totalTax * totalPrice)/100  - paid : 0,
            paid: paid,
            type: "Purchase order",
          };
          

          console.log(newData)

          let newDa = data
          newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);
    newDa.data.sales ? newDa.data.sales.push(newData) : (newDa.data.sales = [newData]);
    
    updateData(newDa, data?.data.uid)
    resetForm()
    
    }
   
    function resetForm(){
        setParty({ name: '', phone: '' });
        setInvoiceNumer(generateInvoiceNumber());
        setInvoiceDate(new Date());
        setSelectedState(null);
        setStateOfSupply({ state: '', isDone: '' });
        setSelectedPaymentType(null);
        setRoundOff('');
        setTotalTax(0);
        setDesc('');
        setPaid(0);
        setProfit(0);
        setTotalPrice(0.00);
    }
    
    function handleModals(s){
        s === 'Party Details'? setPartyModal(!partymodal) : setPartyModal(false);
        s === 'Invoice Details' ? setInvoiceModal(!invoicemodal) : setInvoiceModal(false)
        s === 'Payment Details' ? setPaymentModal(!paymentModal) : setPaymentModal(false)
        s === 'Packing and Delivery details' ? setPackageModal(!packageModal) : setPackageModal(false)
        s === 'Cart Detials' ? renderCart() : null
        s === 'Purchase Type' ? setSaleTypeModal(!saleTypeModal): setSaleTypeModal(false)
    }
    function renderCart(){
        navigation.navigate('purchaseitem')

    }
    function handleSubmit(){
        console.log("hi", purchaseType)
        purchaseType === 'Purchase Order' ? handleSubmitPurchaseOrder() : null
        purchaseType === 'Purchase Returns' ? handleSubmitDebitNote() : null
        
        
        
    }
    useEffect(()=>{
        console.log("party to check:", party)
    },[])
     const taxes = [
        { value: 0, label: "IGST@0%" },
        { value: 0, label: "GST@0%" },
        { value: 0.5, label: "IGST@0.25%" },
        { value: 0.5, label: "GST@0.25%" },
        { value: 3, label: "IGST@3%" },
        { value: 3, label: "GST@3%" },
        { value: 5, label: "IGST@5%" },
        { value: 5, label: "GST@5%" },
        { value: 12, label: "IGST@12%" },
        { value: 18, label: "IGST@18%" },
        { value: 18, label: "GST@18%" },
        { value: 28, label: "IGST@28%" },
        { value: 28, label: "GST @28%" }
      ]
      
      const DetailsSection = ({ title }) => {
        const isSet = allValuesSet[title.toLowerCase().replace(/ /g, '')];
        return (
            <TouchableOpacity onPress={() => handleModals(title)} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#FFF',
                paddingHorizontal: 16,
                paddingVertical: 10,
                marginBottom: 8,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 10,
            }}>
                <Text style={{
                    fontSize: 14,
                }}>{title}</Text>
                {isSet ? (
                    <AntDesign name="checkcircle" size={20} color="green" />
                ) : (
                    <AntDesign name="right" size={20} color="black" />
                )}
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        checkAllValuesSet();
    }, [purchaseType, party, invoice_number, invoice_date, selectedPaymentType, selectedState]);
    
    const checkAllValuesSet = () => {
        setAllValuesSet({
            purchaseType: !!purchaseType,
            party: !!party.name && !!party.phone,
            invoice: !!invoice_number && !!invoice_date,
            payment: !!selectedPaymentType,
            package: !!selectedState,
        });
    };
    
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
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 8
                    }}>Party Balance</Text>
    
                    {/* Sections */}
                    <DetailsSection title="Purchase Type" />
                    <DetailsSection title="Party Details" />
                    <DetailsSection title="Invoice Details" />
                    <DetailsSection title="Payment Details" />
                    <DetailsSection title="Packing and Delivery details" />
                    <DetailsSection title="Cart Detials" />
    
                    {/* Note Input Field */}
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
                        placeholder="Note"
                        placeholderTextColor="gray"
                        onChangeText={setDesc}
                    />
    
                    {/* Save & New Button */}
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
            </LinearGradient>
    
            {/* AddSale Button */}
            <AddSalebt />
    
            {/* Modals */}
            <PartyModal modalVisible={partymodal} setModalVisible={setPartyModal} value={value} partyData={partyData} handlePartyChange={handlePartyChange} party={party} />
            <InvoiceModal modalVisible={invoicemodal} setModalVisible={setInvoiceModal} invoice_number={invoice_number} setInvoiceNumer={setInvoiceNumer} invoice_date={invoice_date} setInvoiceDate={setInvoiceDate} open2={open2} setOpen2={setOpen2} />
            <PaymentModal modalVisible={paymentModal} setModalVisible={setPaymentModal} selectedPaymentType={selectedPaymentType} paymentTypes={paymentTypes} setSelectedPaymentType={setSelectedPaymentType} setRoundOff={setRoundOff} taxes={taxes} totalTax={totalTax} setTotalTax={setTotalTax} setPaid={setPaid} />
            <PackageModal modalVisible={packageModal} setModalVisible={setPackageModal} selectedState={selectedState} setSelectedState={setSelectedState} state_of_supply={state_of_supply} states={states} />
            <SaleTypeModal modalVisible={saleTypeModal} setModalVisible={setSaleTypeModal} saleTypes={purchaseTypes} saleType={purchaseType} setPurchaseType={setPurcahseType}/>
        </>
    );
    
}
