import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  Button
} from 'react-native';
import { SearchBar } from '@rneui/themed';
import CardGuest from './CardGuest';
import Lisbon2 from '../assets/lisbon.png';
import { API_URL } from '../HttpService';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CardPageG from './CardPageG';

export default function FirstPageG() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInfo = () => {
    const data = {
      searchQuery: searchQuery,
    };

    console.log("DATA", data)

    axios
      .post(API_URL + '/search', data)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log('Error occurred during search:', error);
      });
  };

  const navigateInfo=() =>{
    navigation.navigate('Blog')
}

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Guest Page</Text>
      </View>
      <View>
        <Text style={styles.findTitle}>Find your place</Text>
      </View>

      <SearchBar
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        containerStyle={styles.searchBar}
        inputStyle={styles.searchBarInput}
        onSubmitEditing={handleSearchInfo}
      />
      <TouchableOpacity style={styles.blogBTN} onPress={navigateInfo}>
        <Text>Go to Blog</Text>
      </TouchableOpacity>
      
      {/* Render the search results */}
      {searchResults.map((result, index) => (
        
        <CardGuest 
          key={index}
          title={result.title}
          description={result.description}
          poza={result.image}
          page={'TemplateG'}
          
          
        />
      
        
        
       
      )
      
      )}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 50,
  },
  findTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
    marginLeft: 100,
  },
  searchBar: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 40,
  },
  searchBarInput: {
    color: '#FFFFFF',
  },
  blogBTN: {
    width: "30%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    bottom: 155,
    left:110
    
},
});
