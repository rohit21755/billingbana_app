import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { useGlobalState } from '../providers/GlobalStateProvider'
export default function AllTransactions(){
    const { data } = useGlobalState()
    const [view, setView] = useState({
        index: null,   
        show: false    
    });
    const toggleView = (index) => {
        if (view.index === index) {
            setView({ index, show: !view.show });
        } else {
            setView({ index, show: true });
        }
    }
    const type = {
        
    }
    console.log(data.data.Transactions)
    function label(){

    }
    console.log(data.data.Transactions)
   
    // function formatDate(dateString) {
    //     let date;
    
    //     // Ensure the input is a string first
    //     if (typeof dateString === 'string') {
    //         // Try to parse ISO format or convert common date formats (e.g., dd/mm/yyyy, dd-mm-yyyy)
    //         if (!isNaN(Date.parse(dateString))) {
    //             date = new Date(dateString);
    //         } else {
    //             // Handle custom date formats like 'dd/mm/yyyy' or 'dd-mm-yyyy'
    //             const parts = dateString.split(/[\/\-]/);  // Split by '/' or '-'
    
    //             if (parts.length === 3) {
    //                 const day = parseInt(parts[0], 10);
    //                 const month = parseInt(parts[1], 10) - 1;  // Month is 0-indexed in JS
    //                 const year = parseInt(parts[2], 10);
    //                 date = new Date(year, month, day);
    //             } else {
    //                 throw new Error('Invalid date format');
    //             }
    //         }
    //     } else {
    //         console.log( 'error')
    //     }
    
    //     // Verify that the date is valid
    //     if (isNaN(date.getTime())) {
    //         throw new Error('Invalid date');
    //     }
    
    //     // Extract day of the week, day, and month in desired format
    //     const options = { weekday: 'short', day: 'numeric', month: 'long' };
    //     return date.toLocaleDateString('en-GB', options);
    // }
    function countItems(item) {
        console.log(item)
        let num = 0;
        if (Array.isArray(item)) {
            item.map((i) => {
                if(i.index > 0) {
                    num += i.qty;
                }
            });
        } else {
            console.error("Input is not an array");
        }
        
        return num;
    }
    return(<>
    <ScrollView style={{
        padding: 16,
        backgroundColor: 'white'
    }}>
        {data.data.Transactions.map((t,index)=>{
            const itemArray = t.items
            // console.log("hello",itemArray.length)
            return<>
            <View key={index} style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#D9D9D9',
            marginVertical: 5,
        
        
        }}>
            <View style={{
                width: '65%',
                padding: 8
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    <Text style={{
                        fontSize: 10,
                        color: 'gray'
                    }}>{countItems(t.items)} Items</Text>
                    <View>
                    <Text style={{
                        fontSize: 10,
                        color: 'gray'
                    }}>{t.invoice_date || t.date}</Text>
                    <Text style={{
                        fontSize: 12,
                        color: 'gray'
                    }}>11:00AM</Text>
                    </View>
                    
                </View>
                <View style={{
                flexDirection: 'row',
                
                gap: 10,
                marginVertical: 4
            }}>
                <View style={{
                    borderRadius: 50,
                    padding: 14,
                    backgroundColor: '#00308F'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white'
                    }}>A</Text>
                </View>
                <View style={{

                }}>
                    <View style={{
                        
                    }}><Text style={{
                        fontSize: 14,
                        fontWeight: 500
                    }}>{t.name}</Text></View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 500
                    }}>#MR2407</Text>
                </View>
            </View>
            <View style={{
            borderRadius: 7,
            width: 50,
            padding:3,
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor: '#F7FFAE'            
        }}>
             <Text>Offline</Text>
        </View>
            </View>
            <View style={{
            backgroundColor: '#00308F',
            borderTopEndRadius: 10, 
            borderBottomEndRadius: 10,
            width: '35%',
            height: '100%',
            padding: 6
        }}>
            { view.index === index && view.show ? (
                <>
                <View style={{
                flexDirection: 'row' ,
                justifyContent: 'flex-end'
            }}>
                <TouchableOpacity onPress={()=>toggleView(index)}><Feather name="eye-off" size={18} color="white" /></TouchableOpacity>
            
            </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    padding: 4
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'white'
                    }}>Sale</Text>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'white'
                    }}>{t.sale}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    padding: 4
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'white'
                    }}>Profit</Text>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'white'
                    }}>{t.profit}</Text>
                </View>
                
                <View style={{
                flexDirection: 'row' ,
                justifyContent: 'flex-end',
                marginTop: 14
            }}>
                <TouchableOpacity><Feather name="clock" size={18} color="white" /></TouchableOpacity>
            
            </View></>
            ) : (
            <><View style={{
                flexDirection: 'row' ,
                justifyContent: 'flex-end'
            }}>
                <TouchableOpacity onPress={()=>toggleView(index)}><Feather name="eye" size={18} color="white" /></TouchableOpacity>
            
            </View>
            <View style={{
                padding: 14,
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: '#AEFFDD',
                    fontSize: 20,
                    // fontWeight: 'bold'
                }}>Sale</Text>
                <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    color: '#AEFFDD'
                }}>1000</Text>
            </View>
            <View style={{
                flexDirection: 'row' ,
                justifyContent: 'flex-end'
            }}>
                <TouchableOpacity><Feather name="clock" size={18} color="white" /></TouchableOpacity>
            
            </View></>)}

        </View>
        </View>
            </>
        })}
        
        
    </ScrollView>
    </>)
}