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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CartModal from '../../components/modals/sale/CartModal';
import { useCart } from '../../components/providers/CartProvider';
export default function AddSaleForm() {
    const { cart, setCart } = useCart();
    useEffect(()=>{
        console.log(cart)
    },[cart])
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
    const { setRows2, rows2, rows, setRows, totalPrice, setTotalPrice} = useGlobalState()
    
    
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
    const saleTypes = [
        {label: 'Estimate', value: 'Estimate'},
        {label: 'Sales Order', value: 'Sales Order'},
        {label: 'Delievery Challan', value: 'Delievery Challan'},
        {label: 'Sales Returns', value: 'Sales Returns'},
        {label: 'Sale', value: 'Sale'},
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
    const [saleType, setSaleType] = useState() 
    const [saleTypeModal, setSaleTypeModal] = useState(false)
    const [allValuesSet, setAllValuesSet] = useState({
        saleType: false,
        party: false,
        invoice: false,
        payment: false,
        package: false,
    });
    const [billingAddress, setBillingAddress] = useState()
    const [shippingAddress, setShippingAddress] = useState()
    // const [checkSaleType, setCheckSaleType] = use
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
    
    const handleSubmitEsitmation = () => { // for estimate
        const filteredRows = rows.filter(row => row.qty > 0);
        const newData = {
            name: party.name ? party.name : "",
            phone_no: party.phoneNo ? party.phoneNo : "",
            invoice_number: invoice_number ? invoice_number : "",
            invoice_date: invoice_date ? formatDate(invoice_date) : "",
            state_of_supply: state_of_supply.state ? state_of_supply.state : "",
            payment_type: selectedPaymentType ? selectedPaymentType : "",
            transactionType: "Estimate",
            items: filteredRows ? filteredRows : "",
            round_off: roundOff ? roundOff : "",
            total: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "",
            profit: profit ? profit : "", 
            total_tax: (totalTax * totalPrice)/100,
            description: desc ? desc : "",
            pending: totalPrice && paid ? totalPrice + (totalTax * totalPrice)/100  - paid : 0,
            paid: paid,
            type: "Estimate",
          };
          let newDa = data;
    newDa.data.sales_estimations
      ? newDa.data.sales_estimations.push(newData)
      : (newDa.data.sales_estimations = [newData]);
    newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);

      updateData(newDa, data?.data.uid)
    resetForm()
    }
    function handleSubmitChallan(){
        const filteredRows = rows.filter(row => row.qty > 0);
        const newData = {
            name: party.name ? party.name : "",
            phone_no: party.phoneNo ? party.phoneNo : "",
            invoice_number: invoice_number ? invoice_number : "",
            invoice_date: invoice_date ? formatDate(invoice_date) : "",
            // due_date: due_date ? due_date : "",
            state_of_supply: state_of_supply.state ? state_of_supply.state : "",
            payment_type: selectedPaymentType ? selectedPaymentType : "",
            transactionType: "Delivery chalan",
            items: filteredRows ? filteredRows : "",
            round_off: roundOff ? roundOff : "",
            total: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "",
            profit: profit ? profit : "", 
            total_tax: (totalTax * totalPrice)/100,
            description: desc ? desc : "",
            pending: totalPrice && paid ? totalPrice + (totalTax * totalPrice)/100  - paid : 0,
            paid: paid,
            type: "Delivery chalan",
          };
          let newDa = data;
    newDa.data.DeliveryChalan
      ? newDa.data.DeliveryChalan.push(newData)
      : (newDa.data.DeliveryChalan = [newData]);
    newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);

      updateData(newDa, data?.data.uid)
    resetForm();

    }
    const handleSubmitCreditNote = () => {
        const newData = {
            name: party.name ? party.name : "",
            phone_no: party.phoneNo ? party.phoneNo : "",
            invoice_number: invoice_number ? invoice_number : "",
            invoice_date: invoice_date ? formatDate(invoice_date) : "",
            // date: due_date ? due_date : "",
            state_of_supply: state_of_supply.state ? state_of_supply.state : "",
            payment_type: selectedPaymentType ? selectedPaymentType : "",
            transactionType: "Sale order",
            items: filteredRows ? filteredRows : "",
            round_off: roundOff ? roundOff : "",
            total: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "",
            amount: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "", 
            profit: profit ? profit : "", 
            total_tax: (totalTax * totalPrice)/100,
            description: desc ? desc : "",
            pending: totalPrice && paid ? totalPrice + (totalTax * totalPrice)/100  - paid : 0,
            paid: paid,
            type: "Credit Note",
          };
          let newDa = data;

    newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);
    newDa.data.sales ? newDa.data.sales.push(newData) : (newDa.data.sales = [newData]);
    }
    
    const handleSubmitSaleOrder = () => {
        const filteredRows = rows.filter(row => row.qty > 0);
        const newData = {
            name: party.name ? party.name : "",
            phone_no: party.phoneNo ? party.phoneNo : "",
            invoice_number: invoice_number ? invoice_number : "",
            invoice_date: invoice_date ? formatDate(invoice_date) : "",
            // due_date: due_date ? due_date : "",
            state_of_supply: state_of_supply.state ? state_of_supply.state : "",
            payment_type: selectedPaymentType ? selectedPaymentType : "",
            transactionType: "Sale order",
            items: filteredRows ? filteredRows : "",
            round_off: roundOff ? roundOff : "",
            total: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "",
            amount: totalPrice ? totalPrice + (totalTax * totalPrice)/100 : "", 
            profit: profit ? profit : "", 
            total_tax: (totalTax * totalPrice)/100,
            description: desc ? desc : "",
            pending: totalPrice && paid ? totalPrice + (totalTax * totalPrice)/100  - paid : 0,
            paid: paid,
            type: "Sale order",
          };
          

          console.log(newData)

          let newDa = data
          newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);
    newDa.data.sales ? newDa.data.sales.push(newData) : (newDa.data.sales = [newData]);
    console.log(newDa.data.Transactions)
    updateData(newDa, data?.data.uid)
    resetForm()
    
    }
    function handleSale(){
        const newData = {
            name: Name ? Name : "",
            phone_no: phone_no ? phone_no : "",
            BillingAdd,
            ShippingAdd,
            invoice_number: invoice_number ? invoice_number : "",
            invoice_date: invoice_date ? invoice_date : "",
            state_of_supply: state_of_supply.state ? state_of_supply.state : "",
            payment_type: paymentType ? paymentType : "",
            transactionType: "Sale",
            items: rows ? rows : "",
            round_off: round_off ? round_off : "",
            amount: rows.reduce((total, row) => total + (row.amount || 0), 0),
            profit: profit ? profit : "",
            tax: totalTax,
            description: Description ? Description : "",
            pending: rows.reduce((total, row) => total + (row.amount || 0), 0) - paid,
            paid: paid,
            type: "sale",
            image: ImageList ? ImageList[0].url : "",
          };
          let newDa = data;
          newData.items.map((ele) => {
            const foundItem = newDa.data.items.find((ele1) => ele1.Name === ele.item);
            if (foundItem) {
              foundItem.stock = foundItem.stock
                ? parseInt(foundItem.stock) - parseInt(ele.qty)
                : -parseInt(ele.qty);
            }
          });
          newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);
    newDa.data.sales ? newDa.data.sales.push(newData) : (newDa.data.sales = [newData]);
    if (newData.payment_type == "credit") {
        newDa.data.sale_pending
            ? (newDa.data.sale_pending += parseFloat(newData.total))
            : (newDa.data.sale_pending = parseFloat(newData.total));
    
        newDa.data.to_collect
            ? (newDa.data.to_collect += parseFloat(newData.pending))
            : (newDa.data.to_collect = parseFloat(newData.pending));
    
        let party = newDa.data.parties.find(
            (ele) => ele.partyName === Name || ele.name === Name
        );
    
        party?.credit
            ? (party.credit += parseFloat(newData.pending))
            : (party.credit = parseFloat(newData.pending));
    } else {
        console.log("CASH IN HAND INCREASED");
        newDa.data.cash_in_hands
            ? (newDa.data.cash_in_hands += parseFloat(newData.total))
            : (newDa.data.cash_in_hands = parseFloat(newData.total));
        console.log(newDa.data);
    }
    
    newDa.data.total_sales
        ? (newDa.data.total_sales += parseFloat(newData.total))
        : (newDa.data.total_sales = parseFloat(newData.total));
    
    console.log(newDa.data.Transactions);


    
      updateData(newDa, data?.data.uid)
      alert(`${saleType} is Addes`)
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
    useEffect(()=>{
        console.log(saleType)
    },[saleType])
    function handleModals(s) {
        console.log(s)
        if (s === 'Sale Type') {
            console.log('inside if')
            setSaleTypeModal(!saleTypeModal);
        } else {
            console.log('inside else')
            setSaleTypeModal(false);
            
            if (!saleType) {
                console.log('inside eles id')
                alert('Please select Sale type');
                return;
            }
            
            s === 'Cart Details' ? renderCart(): null
            s === 'Party Details' ? setPartyModal(!partymodal) : setPartyModal(false);
            s === 'Invoice Details' ? setInvoiceModal(!invoicemodal) : setInvoiceModal(false)
            s === 'Payment Details' ? setPaymentModal(!paymentModal) : setPaymentModal(false);
            s === 'Packing and Delivery details' ? setPackageModal(!packageModal) : setPackageModal(false)
            
        }
    }
    
    function renderCart(){
        console.log('ho')
        navigation.navigate('saleitem', {
            type: saleType
        })

    }
    function handleSubmit(){
       
        saleType === 'Estimate' ? handleSubmitEsitmation() : null
        saleType === 'Sales Order' ? handleSubmitSaleOrder() : null
        saleType === 'Delievery Challan' ? handleSubmitChallan() : null
        saleType === 'Sales Returns' ? handleSubmitCreditNote() : null
        saleType === 'Sale' ? handleSale() : null
        
        
    }
    
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
    }, [saleType, party, invoice_number, invoice_date, selectedPaymentType, selectedState]);
    
    const checkAllValuesSet = () => {
        setAllValuesSet({
            saleType: !!saleType,
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
                    height: 150,
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
                        height: 580
                    }}
                >
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 8
                    }}>Sale Details</Text>
    
                    {/* Sections */}
                    <DetailsSection title="Sale Type" />
                    <DetailsSection title="Party Details" />
                    <DetailsSection title="Invoice Details" />
                    <DetailsSection title="Payment Details" />
                    <DetailsSection title="Packing and Delivery details" />
                    <DetailsSection title="Cart Details" />
    
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
                        alignItems: 'center',
                        padding: 8
                        
                    }}>
                        <TouchableOpacity style={{
                            height: 70
                        }}>
                        <MaterialCommunityIcons name="file-image-plus" size={32} color="gray" style={{
                            marginHorizontal: 'auto'
                        }} />
                        <Text style={{
                            marginTop: 10,
                            alignText: 'center'
                        }}>Attachment</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={handleSubmit} style={{
                        padding: 12,
                        // backgroundColor: '#BAD8FF',
                        borderWidth: 1,
                        borderColor: "#D9D9D9",
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Save & New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit} style={{
                        padding: 12,
                        // backgroundColor: '#BAD8FF',
                        borderWidth: 1,
                        borderColor: "#D9D9D9",
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Save</Text>
                    </TouchableOpacity>
                    </View>
                   
                </View>
            </LinearGradient>
    
            {/* AddSale Button */}
            <AddSalebt />
    
            {/* Modals */}
            <PartyModal modalVisible={partymodal} setModalVisible={setPartyModal} value={value} partyData={partyData} handlePartyChange={handlePartyChange} party={party} />
            <InvoiceModal modalVisible={invoicemodal} setModalVisible={setInvoiceModal} invoice_number={invoice_number} setInvoiceNumer={setInvoiceNumer} invoice_date={invoice_date} setInvoiceDate={setInvoiceDate} open2={open2} setOpen2={setOpen2} />
            <PaymentModal modalVisible={paymentModal} setModalVisible={setPaymentModal} saleType={saleType} setBillingAddress={setBillingAddress} selectedPaymentType={selectedPaymentType} paymentTypes={paymentTypes} setSelectedPaymentType={setSelectedPaymentType} setRoundOff={setRoundOff} taxes={taxes} totalTax={totalTax} setTotalTax={setTotalTax} setPaid={setPaid} />
            <PackageModal modalVisible={packageModal} setModalVisible={setPackageModal} saleType={saleType} setShippingAddress={setShippingAddress} selectedState={selectedState} setSelectedState={setSelectedState} state_of_supply={state_of_supply} states={states} />
            <SaleTypeModal modalVisible={saleTypeModal} setModalVisible={setSaleTypeModal} saleTypes={saleTypes} saleType={saleType} setSaleType={setSaleType}/>
            <CartModal modalVisible={cart} setModalVisible={setCart} rows={rows}/>
        </>
    );
    
}
