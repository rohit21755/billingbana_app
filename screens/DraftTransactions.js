import { View, Text, TouchableOpacity, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useGlobalState } from '../components/providers/GlobalStateProvider';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
export default function DraftTransactions(
) {
    const { data, setDraftPurchaseTransactions, setDraftSaleTransactions } = useGlobalState();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        console.log(transactions)
    },[transactions])
    async function getData(){
        setLoading(true)
        await axios.get(`https://bb-websockets.onrender.com/api/accounts/${data?.data.uid}/transactions`)
        .then((response)=>{
            console.log(response.data.transactions)
            setTransactions(response.data.transactions)
        })
        .catch((error)=>{
            console.log(error)
        })
        console.log(transactions)
        setLoading(false)
    }
    function deleteTransaction(id){
        axios.delete(`https://bb-websockets.onrender.com/api/accounts/${data?.data.uid}/transactions/${id}`)
        .then((response)=>{
            console.log(response.data)
            getData()
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    function handleEditTrsaction(ele, index){
        console.log(ele)
        if(ele.purchaseType === 'Purchase order' || ele.purchaseType === 'Purchase returns'){
          
            setDraftPurchaseTransactions(ele)
            
            navigation.navigate('addpurchaseform')
            // deleteTransaction(index)
            
        }
        else if (ele.saleType === 'Sales Order' || ele.saleType === 'Delievery Challan' || ele.saleType === 'Sales Returns' || ele.saleType === 'Sale' || ele.saleType === 'Estimate'){
           
            setDraftSaleTransactions(ele)
            
            navigation.navigate('addsaleform')
            // deleteTransaction(index)
        }
        else {
            alert('Invalid Transaction Type')
        }
    }
    return<>
    <View style={{
        paddingHorizontal: 16,
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,

    }}>
        <View style={{
            flexDirection: 'row',
            gap:8,
            marginBottom: 10
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}>Draft Transactions</Text>
        </View>

    </View>
    {loading ? <ActivityIndicator size="large" color="#0E2F7E" /> : <View style={{
        padding: 16
    }}>
        {transactions.map((ele, index)=>{
            return <TouchableOpacity onPress={()=>handleEditTrsaction(ele, index)} style={{
                borderWidth: 1,
                borderColor: '#D9D9D9',
                borderRadius: 10,
                padding: 8,
                marginBottom: 10
            }}>
                <Text>{ele.saleType || ele.purchaseType}</Text>
                <Text>{ele.invoice_number}</Text>
                <Text>{ele.invoice_date}</Text>
                <TouchableOpacity style={{padding: 2, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginTop: 5, width: 47}} onPress={()=>deleteTransaction(index)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        })    
        }
        
    </View>}
    
    </>
    
}