import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const RecentTransaction = () => {
  let data = [1, 2, 3, 4];
  const navigation = useNavigation()
  const renderItem = () => {
    return (
      <View style={styles.transactionCard}>
        <View style={styles.transactionDetails}>
          <View>
            <Text style={{ textAlign: 'left', fontSize: 14 }}>5 Items</Text>
          </View>
          <View style={styles.traderInfo}>
            <View style={styles.traderAvatar}>
              <Text style={styles.traderAvatarText}>A</Text>
            </View>
            <View>
              <Text style={styles.traderName}>Trader Name</Text>
              <Text style={styles.traderId}>#MR2407</Text>
            </View>
          </View>
          <View style={styles.labels}>
            <View style={styles.label}><Text>Wholesale</Text></View>
            <View style={styles.label}><Text>Return</Text></View>
          </View>
          <View style={styles.dateAndTime}>
            <Text>Thurs, 12 July</Text>
            <Text>11:00 AM</Text>
          </View>
        </View>
        <View style={styles.transactionAmountContainer}>
          <View style={styles.actionIcons}>
            <TouchableOpacity>
              <Feather name="clock" size={18} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="eye" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.transactionAmount}>
            <Text style={styles.amountText}>Refund</Text>
            <Text style={styles.amountValue}>₹920</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recent Transaction</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('transactions')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Display a FlatList */}
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  viewAllText: {
    fontWeight: '600',
    fontSize: 12,
  },
  transactionCard: {
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    marginRight: 16, // To create spacing between items
    width: Dimensions.get('window').width * 0.85, // Each card takes up 85% of screen width
  },
  transactionDetails: {
    width: '65%',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    padding: 8,
    shadowColor: '#A1A1A1',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.21,
    shadowRadius: 6.4,
    elevation: 1,
  },
  traderInfo: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    gap: 10,
    marginVertical: 4,
  },
  traderAvatar: {
    borderRadius: 50,
    padding: 14,
    backgroundColor: '#00308F',
  },
  traderAvatarText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  traderName: {
    fontSize: 20,
    fontWeight: '500',
  },
  traderId: {
    fontSize: 20,
    fontWeight: '500',
  },
  labels: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    gap: 10,
    marginVertical: 4,
  },
  label: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
  dateAndTime: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  transactionAmountContainer: {
    backgroundColor: '#00308F',
    width: '35%',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: 'center',
  },
  actionIcons: {
    flexDirection: 'row',
    // justifyContent: '',
    justifyContent: 'space-between',
    padding: 8,
    gap: 52
  },
  transactionAmount: {
    marginTop: 24,
    alignItems: 'center',
  },
  amountText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
  },
  amountValue: {
    fontWeight: '500',
    color: 'white',
    fontSize: 20,
  },
  flatListContent: {
    paddingBottom: 16, // Add padding if needed
  },
});

export default RecentTransaction;
