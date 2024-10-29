import { View, Text, TouchableOpacity, Pressable, TextInput} from 'react-native' 
import {useState, useEffect} from 'react'
import { useGlobalState } from '../components/providers/GlobalStateProvider'
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import ExpenseCategoryModal from '../components/modals/ExpenseCategoryModal';
import AddItemExModal from '../components/modals/AddItemExModal';
export default function AddExpenses(){
  const { data,updateData } = useGlobalState()
    const [rows, setRows] = useState([
        {
          index: 1,
          item: "",
          qty: "",
          price: "",
          amount: "",
        },
      ]);
      const [totalAmount, setTotalAmount] = useState(0);
      const [Name, setName] = useState({ done: true });
      const [invoice_date, setInvoiceDate] = useState(new Date())
      const [invoice_number, setInvoiceNumer] = useState()
      const [Description, setDescription] = useState(); 
      const [addExpenseCategory, setAddExpenseCategory] = useState(false);
      const [addExpenseitem, setAddExpenseitem] = useState(false); 
      const [ExpenseItem, setExpenseitem] = useState({
    name: "",
    hsn: "",
    price: "",
    taxrate: 0,
  });
  const [inputFocus, setInputFocus] = useState(false);
  const [categoryName, setCategoryName] = useState('')
  const [categoryType, setCategoryType] = useState()
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false)
  const expenseType = [{
    label: 'Direct Expense', value: 'Direct Expense'
  },
{
  label: 'InDirect Expense', value: 'Indirect Expense'
}]
  useEffect(()=>{
    generateInvoiceNumber(data.data.Transactions)
  },[])
  function addexpense() {
    const newData = {
        Category: Name.value ? Name.value : "",
        invoice_number: invoice_number ? invoice_number : "",
        invoice_date: invoice_date ? invoice_date : "",
        transactionType: "",
        Type: "Expense",
        items: rows ? rows : "",
        total: totalAmount ? totalAmount : "",
        description: Description ? Description : "",
      };
  }

  function generateInvoiceNumber(data1){
    const existing = new Set(data1.map((item) => item.invoice_number));
    let invoice;
    do {
      invoice = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    } while (existing.has(invoice));
    setInvoiceNumer(invoice);
  }
  function handleSubmitCatType() {
    const newData = {
      name: categoryName ? categoryName : "",
      type: categoryType ? categoryType : "",
    };

    let newDa = data;
    newDa.data.expenseCategory
      ? newDa.data.expenseCategory.push(newData)
      : (newDa.data.expenseCategory = [newData]);
    // setData(newDa);
    setOpen(!open)
    updateData(newDa, data.data.uid)
    setChange(!change);
    setCategoryName("");
    setCategoryType("");
  }
    return <>
    <TouchableOpacity onPress={()=>setOpen(!open)} >
      <Text>Open Modal</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setOpen2(!open2)} >
      <Text>Open Modal to add row</Text>
    </TouchableOpacity>
    {/* {rows.map((row, index)=> {
      return<>
      <Text key={index}>{row.item}</Text>
      </>
    })} */}
    <ExpenseCategoryModal modalVisible={open} setModalVisible={setOpen} dataType={expenseType} categoryName={categoryName} setCategoryName={setCategoryName} categoryType={categoryType} setCategoryType={setCategoryType} handleSubmitCatType={handleSubmitCatType}/>
    <AddItemExModal modalVisible={open2} setModalVisible={setOpen2} rows={rows} setRows={setRows}/>
    </>
}