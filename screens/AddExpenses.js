import { View, Text, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { useGlobalState } from '../components/providers/GlobalStateProvider';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import ExpenseCategoryModal from '../components/modals/ExpenseCategoryModal';
import AddItemExModal from '../components/modals/AddItemExModal';
import DropDownPicker from 'react-native-dropdown-picker';
import AddExpenseItem from '../components/modals/AddExpeseItem';
import DatePicker from 'react-native-date-picker';
import Entypo from '@expo/vector-icons/Entypo';

export default function AddExpenses() {
  const { data, updateData } = useGlobalState();
  const [rows, setRows] = useState([
    { index: 0, item: "", qty: "", price: "", amount: "" },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [Name, setName] = useState({ done: true });
  const [invoice_date, setInvoiceDate] = useState(new Date());
  const [invoice_number, setInvoiceNumer] = useState();
  const [Description, setDescription] = useState();
  const [addExpenseCategory, setAddExpenseCategory] = useState(false);
  const [addExpenseitem, setAddExpenseitem] = useState(false);
  const [expenseCategory, setExpenseCategory] = useState();
  const [ExpenseItem, setExpenseitem] = useState({
    name: "",
    hsn: "",
    price: "",
    taxrate: 0,
  });
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false)
  const [selectCat, setSelectCat] = useState(false);
  const [catData, setCatData] = useState([]);
  const [itemData, setItemData] = useState([])
  const [addNewItem, setAddNewItem] = useState(false)
  // Add dependencies to the useEffect hook
  useEffect(() => {
    if (data?.data?.Transactions) {
      generateInvoiceNumber(data.data.Transactions);
    }
    if (data?.data?.expenseCategory) {
      genrateCategoryData();
    }
    if(data?.data.expenseItem){
      genrateItemData()
    }
  }, [data.data.Transactions, data.data.expenseCategory]); 

  function genrateCategoryData() {
    if (data?.data?.expenseCategory) {
      const categoryData = data.data.expenseCategory.map((p) => ({
        label: p.name,
        value: p.name,
      }));
      setCatData(categoryData);
    }
  }
  function genrateItemData(){
    if (data?.data?.expenseItem) {
      const itemData2 = data.data.expenseItem.map((p) => ({
        label: p.name,
        value: {name: p.name, price: p.price}
      }));
      setItemData(itemData2);
    }
  }

  function generateInvoiceNumber(data1) {
    const existing = new Set(data1.map((item) => item.invoice_number));
    let invoice;
    do {
      invoice = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    } while (existing.has(invoice));
    setInvoiceNumer(invoice);
  }
  function handleSubmit() {
   
    setRows((prevRows) => prevRows.filter((_, index) => index !== 0))
    console.log(rows)
    const newData = {
      Category: expenseCategory || "",
      invoice_number: invoice_number ? invoice_number : "",
      invoice_date: invoice_date ? invoice_date : "",
      transactionType: "",
      Type: "Expense",
      items: rows ? rows : "",
      total: totalAmount ? totalAmount : "",
      description: Description ? Description : "",
    };
    console.log(newData.total)

    let newDa = data;

    newDa.data.expense ? newDa.data.expense.push(newData) : (newDa.data.expense = [newData]);
    newDa.data.Transactions
      ? newDa.data.Transactions.push(newData)
      : (newDa.data.Transactions = [newData]);
      newDa.data.total_expense
      ? (newDa.data.total_expense += parseFloat(newData.total))
      : (newDa.data.total_expense = parseFloat(newData.total));


    updateData(newDa, data.data.uid)


  }

  return (
    <>
      <View style={{ padding: 12 }}>
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
          onChangeText={setInvoiceNumer}
        />
        <DropDownPicker
          open={selectCat}
          value={expenseCategory}
          items={catData}
          setOpen={setSelectCat}
          setValue={setExpenseCategory}
          placeholder={expenseCategory || "Select Expense Category"}
          containerStyle={{ width: '100%' }}
          style={{ backgroundColor: 'white', zIndex: 1000, marginTop: 10 }}
          dropDownContainerStyle={{
            backgroundColor: 'white',
            zIndex: 2000, 
          }}
        />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 6,
          marginBottom: 10
        }}>
          <TouchableOpacity onPress={()=> setOpen2(!open2)}><Text style={{
            color: "blue",
            fontSize: 14
          }}>Add Categroy</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={{
          width: '100%',
          borderWidth: 1,
          borderColor: 'gray',
          height: 48,
          borderRadius: 10,
          paddingHorizontal: 14,
          marginVertical: 10,
          alignContent: 'center',
          // alignItems: 'center'
          flexDirection: 'row',
          justifyContent: 'space-between'
        
        }}
        onPress={()=> setAddExpenseitem(!addExpenseCategory)}
        >
          <Text style={{
            // alignSelf: 'center'.
            marginVertical: 'auto',
            fontSize: 14
          }}>Add Items</Text>
          <Text style={{
            // alignSelf: 'center'.
            marginVertical: 'auto',
            fontSize: 14
          }}>{rows.length - 1}</Text>
        </TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 6,
          marginBottom: 10
        }}>
          <TouchableOpacity onPress={()=>setAddNewItem(!addNewItem)}><Text style={{
            color: "blue",
            fontSize: 14
          }}>Add Expense Items</Text></TouchableOpacity>
        </View>
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
                            onPress={() => setOpen3(true)}
                        >
                            <Entypo name="calendar" size={18} color="black" />
                            <Text style={{
                                fontSize: 15
                            }}>{invoice_date.toDateString()}</Text>
                        </TouchableOpacity>
                   

                    <DatePicker
                        modal
                        open={open3}
                        date={invoice_date}
                        onConfirm={(date) => {
                            setOpen3(false);
                            setInvoiceDate(date);
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
          placeholder='Description'
          value={Description}
          onChangeText={setDescription}
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
        onPress={handleSubmit}
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
        onPress={handleSubmit}
    >
        <Text>Save</Text>
    </TouchableOpacity>
</View>
      </View>
      <AddItemExModal modalVisible={addExpenseitem} itemdata={itemData} setModalVisible={setAddExpenseitem} rows={rows} setRows={setRows} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>
      <AddExpenseItem modalVisible={addNewItem} setModalVisible={setAddNewItem}/>
      <ExpenseCategoryModal modalVisible={open2} setModalVisible={setOpen2}/>
    </>
  );
}
