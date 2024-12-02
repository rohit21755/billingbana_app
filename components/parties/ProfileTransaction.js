import { useState } from "react";
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';

export default function ProfileTransaction({transactions}) {
    const [selected, setSelected] = useState('all');
    console.log('profile Transactions',transactions.length)
    function handleChange(s) {
        setSelected(s);
    }

    return (<>
        <View style={{
            padding: 6,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            {/* All Transactions */}
            <TouchableOpacity 
                onPress={() => handleChange('all')} 
                style={{
                    flex: 1, // Equal width for all TouchableOpacity components
                    alignItems: 'center', // Center the text inside the button
                    paddingBottom: 6, // Add some padding to the bottom for underline spacing
                    borderBottomWidth: selected === 'all' ? 2 : 0, // Underline for selected type
                    borderBottomColor: selected === 'all' ? '#00308F' : 'transparent' // Change color when selected
                }}
            >
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>All (10)</Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>$ 100</Text>
            </TouchableOpacity>

            {/* Paid Transactions */}
            <TouchableOpacity 
                onPress={() => handleChange('paid')} 
                style={{
                    flex: 1, // Equal width for all TouchableOpacity components
                    alignItems: 'center', // Center the text inside the button
                    paddingBottom: 6, // Add some padding to the bottom for underline spacing
                    borderBottomWidth: selected === 'paid' ? 2 : 0, // Underline for selected type
                    borderBottomColor: selected === 'paid' ? '#00308F' : 'transparent' // Change color when selected
                }}
            >
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>Paid (10)</Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>$ 100</Text>
            </TouchableOpacity>

            {/* Unpaid Transactions */}
            <TouchableOpacity 
                onPress={() => handleChange('unpaid')} 
                style={{
                    flex: 1, // Equal width for all TouchableOpacity components
                    alignItems: 'center', // Center the text inside the button
                    paddingBottom: 6, // Add some padding to the bottom for underline spacing
                    borderBottomWidth: selected === 'unpaid' ? 2 : 0, // Underline for selected type
                    borderBottomColor: selected === 'unpaid' ? '#00308F' : 'transparent' // Change color when selected
                }}
            >
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>Unpaid (10)</Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 14
                }}>$ 100</Text>
            </TouchableOpacity>
        </View>
                <ScrollView style={{
                    padding: 6,
                    
                }}>
                    {transactions.map((transaction, index)=>{
                        return<>
                        <View style={{
                        borderRadius: 8,
                        backgroundColor: '#BAD8FF',
                        padding: 6,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                gap: 7
                            }}>
                                <Text style={{
                                    color: '#808080'
                                }}>Total</Text>
                                <Text>$200</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                gap: 7
                            }}>
                                <Text style={{
                                    color: '#808080'
                                }}>Bal.</Text>
                                <Text>$200</Text>
                            </View>
                            
                        </View>
                        <Text style={{
                            fontWeight: '500'
                        }}>6 Items</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                          
                                <Text style={{
                                    // color: '#808080'
                                    fontSize: 10,
                                    
                                }}>24 July,24 3:15 PM</Text>
                               
                            <View style={{
                                flexDirection: 'row',
                                gap: 7
                            }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    padding: 2
                                }}>
                                    <Text style={{
                                        color: 'green'
                                    }}>Paid</Text>
                                </View>
                                <Text>#200</Text>
                            </View>
                            
                        </View>
                    </View>
                        </>
                    })}
                    

                </ScrollView>
        </>
        
    );
}
