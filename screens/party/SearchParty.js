import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useGlobalState } from '../../components/providers/GlobalStateProvider';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
const SearchParty = () => {
  const [searchText, setSearchText] = useState('');
  const { data } = useGlobalState();
  const [partyData, setPartyData] = useState([]);
    const navigation = useNavigation()
  useEffect(() => {
    setPartyData2();
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

  const filterParties = () => {
    if (!searchText) return [];
    return partyData.filter(party =>
      party.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const handlePartySelect = (party) => {
    console.log("Selected Party:", party);
    navigation.navigate('partyprofile', { profile : party})

  };

  const renderSection = (title, data, onPress) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPress(item.data)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noResultText}>No result in {title}</Text>
      )}
    </View>
  );

  const filteredParties = filterParties();

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
        }}>Search party</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search Parties..."
        value={searchText}
        onChangeText={setSearchText}
      />
      {searchText.length > 0 && (
        renderSection('Parties', filteredParties, handlePartySelect)
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
    fontSize: 18,
    fontWeight: 'bold',
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

export default SearchParty;
