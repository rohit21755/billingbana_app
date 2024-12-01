import { View, Text, TouchableOpacity, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useGlobalState } from '../components/providers/GlobalStateProvider';
import axios from 'axios';
export default function DraftTransactions(
) {
    const { data } = useGlobalState();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false)
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
            return <View style={{
                borderWidth: 1,
                borderColor: '#D9D9D9',
                borderRadius: 10,
                padding: 8,
                marginBottom: 10
            }}>
                <Text>{ele.saleType}</Text>
                <Text>{ele.invoice_number}</Text>
                <Text>{ele.invoice_date}</Text>
                <TouchableOpacity style={{padding: 2, borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginTop: 5, width: 47}} onPress={()=>deleteTransaction(index)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        })    
        }
        
    </View>}
    
    </>
    
}