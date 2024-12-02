import { View, Text, TouchableOpacity, Image} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useGlobalState } from '../providers/GlobalStateProvider';
import { Feather } from '@expo/vector-icons';
export default function Item() {
    const {data} = useGlobalState()
    return<>
    <View style={{
        padding: 16,
        flexDirection: 'row',
        // gap:12
        justifyContent: 'space-between',
         
    }}>
        <View style={{
            padding: 12,
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
            width: '45%',
        }}>
            <Text>0</Text>
            <Text>No. of Items</Text>
            
        </View>
        <View style={{
            padding: 12,
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
            width: '45%',
        }}>
            <Text>2000</Text>
            <Text>Stock Value</Text>
            
        </View>

    </View>
    <View style={{
        padding:16
    }}>

        {data?.data.items.map((item, index)=>{
            return(
                <View
                key={index}
  style={{
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 8,
  }}
>
  <View
    style={{
      width: '20%',
    }}
  >
    <Image
      source={require('../../assets/images/item1.png')}
      style={{
        width: '100%',
        height: 60,
        resizeMode: 'contain',
      }}
    />
  </View>

  <View
    style={{
      flex: 1,
      paddingLeft: 8,
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          flex: 1, // Ensures the text takes the remaining space
        }}
        numberOfLines={1} // Optional: Ensures long names are truncated
      >
        {item.Name}
      </Text>
      <TouchableOpacity>
        <Feather name="info" size={18} color="black" />
      </TouchableOpacity>
    </View>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingRight: 8, // Adjust spacing as needed
      }}
    >
      <Text>Qty: {item.stock}</Text>
      <Text>Stock Value: 0</Text>
    </View>
  </View>
</View>

            )
        })
        }
        
    </View>
    </>
}