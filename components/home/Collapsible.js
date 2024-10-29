import {View , Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useGlobalState } from '../providers/GlobalStateProvider';
export default function Collapsible() {
    const [isOpen, setIsOpen] = useState(false);
    const {data} = useGlobalState()
    return(<>
    <View
    style={{
        padding: 16,
        marginTop: 10,
    }}>
     <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    height: 80, // Set a fixed height for the container
  }}>
    {[
      { title: 'Sale', value: `₹${ 0}` },
      { title: 'Profit', value: `₹${data?.data.sales?.reduce((acc, obj) => acc + (obj.profit || 0), 0) || 0}` },
      { title: 'Purchase', value: `₹${data?.total_purchase || 0}` }
    ].map((item, index) => (
      <View key={index} style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 28,
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
        shadowColor: '#A3A2A2',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 5.4,
        elevation: 10,
      }}>
        <Text style={{
          fontWeight: '600',
          textAlign: 'left'
        }}>{item.title}</Text>
        <Text style={{
          fontSize: 16,
          flexWrap: 'wrap'
        }}>{item.value}</Text>
      </View>
    ))}
  </View>
     {isOpen && (<View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    height: 80, // Set a fixed height for the container
    marginTop: 10
  }}>
    {[
      { title: 'Sale', value: `₹${ 0}` },
      { title: 'Profit', value: `₹${data?.data.sales?.reduce((acc, obj) => acc + (obj.profit || 0), 0) || 0}` },
      { title: 'Purchase', value: `₹${data?.total_purchase || 0}` }
    ].map((item, index) => (
      <View key={index} style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 28,
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
        shadowColor: '#A3A2A2',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 5.4,
        elevation: 10,
      }}>
        <Text style={{
          fontWeight: '600',
          textAlign: 'left'
        }}>{item.title}</Text>
        <Text style={{
          fontSize: 16,
          flexWrap: 'wrap'
        }}>{item.value}</Text>
      </View>
    ))}
  </View>)}
     <View style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        
     }}>
        <TouchableOpacity onPress={()=>setIsOpen(!isOpen)} style={{
            backgroundColor: '#00308F',
            paddingHorizontal: 8,
            paddingVertical: 1,
            borderRadius: 12,
            position: 'absolute',
            top: 8
        }}><Text style={{
            color: 'white',
            fontSize: 12
        }}>{isOpen? 'Less': 'More'}</Text></TouchableOpacity>
     </View>
     </View>
    </>)
}