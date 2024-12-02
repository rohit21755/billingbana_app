import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useGlobalState } from '../components/providers/GlobalStateProvider';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const { data } = useGlobalState();
  const [partyData, setPartyData] = useState([]);
  const [items, setItems] = useState([]);
  const navigation = useNavigation()
  useEffect(() => {
    setPartyData2();
    setItemsData();
  }, []);

  function setPartyData2() {
    if (data?.data.parties) {
      const updatedPartyData = data.data.parties.map(p => ({
        name: p.partyName,
        data: p,
      }));
      setPartyData(updatedPartyData);
    }
  }

  function setItemsData() {
    if (data?.data.items) {
      const updatedItems = data.data.items.map(i => ({
        name: i.Name,
        data: i,
      }));
      setItems(updatedItems);
    }
  }

  const screens = [
    { name: "Home", to: "Home" },
    { name: "Parties", to: "Parties" },
    { name: "Profile", to: "profile" },
    { name: "Add New Party", to: "addnewparty" },
    { name: "Transactions", to: "transactions" },
    { name: "All Items", to: "allitems" },
    { name: "Add Item", to: "additem" },
    { name: "Add Sale", to: "addsaleform" },
    { name: "Payment In", to: "paymentin" },
    { name: "Payment Out", to: "paymentout" },
    { name: "Add Purchase Form", to: "addpurchaseform" },
    { name: "Add Expenses", to: "addexpense" },
  ];

  const filterArray = (array, key) => {
    if (!searchText) return [];
    return array.filter(item => item[key].toLowerCase().includes(searchText.toLowerCase()));
  };

  const handleParty = (party) => {
    console.log("Selected Party:", party)
    navigation.navigate('partyprofile', { profile : party})
  };

  const handleItem = (item) => {
    console.log("Selected Item:", item);
  };

  const handleScreens = (screen) => {
    navigation.navigate(screen.to);
  };

  const filteredParties = filterArray(partyData, 'name');
  const filteredItems = filterArray(items, 'name');
  const filteredScreens = filterArray(screens, 'name');

  const renderSection = (title, data, onPress, key) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPress(item.data || item)}>
              <Text style={styles.itemText}>{item[key]}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noResultText}>No result in {title}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{
        padding: 12,
        flexDirection: 'row',
        gap: 10,
      }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><AntDesign name="left" size={20} color="black" /></TouchableOpacity>
        
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}>Search</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      {searchText.length > 0 && (
        <>
          {renderSection('Parties', filteredParties, handleParty, 'name')}
          {renderSection('Items', filteredItems, handleItem, 'name')}
          {renderSection('Screens', filteredScreens, handleScreens, 'name')}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
   color: 'grey',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 4,
  },
  noResultText: {
    fontSize: 16,
    color: '#999',
  },
});

export default SearchScreen;
