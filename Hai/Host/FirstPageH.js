import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import { API_URL } from '../HttpService';

export default function FirstPageHost({route}) {
  const navigation = useNavigation();
  const {username} = route.params;
  
  const [selectedDates, setSelectedDates] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardTitle, setCardTitle] = useState('');
  const [cardImage, setCardImage] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardLocation,setCardLocation]=useState('');
  const [username2, setUsername] = useState(username);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    fetchCards();
  }, []);
  

  const fetchCards = async () => {
    try {
      const response = await axios.get(API_URL + '/get_cards');
      const data = response.data;
      const cards = data['cards']
      setCards(cards);
    } catch (error) {
      console.log('Error fetching cards:', error);
    }
  };

  const filteredCards = cards.filter((card) => card.username === username);

  

  const handleDateSelection = (date) => {
    const selected = { ...selectedDates };

    // Toggle the selection of the date
    if (selected[date]) {
      delete selected[date];
    } else {
      selected[date] = { selected: true };
    }

    setSelectedDates(selected);
  };

  const handleCardCreation = () => {
    setIsModalVisible(true);
  };

  // React Native code

// ...
  const goToTemplate = (cardTitle,cardDescription,cardImage)=>{
    navigation.navigate('TemplateH',{location:cardLocation,title:cardTitle,description:cardDescription, image:cardImage})
  }

const handleSaveCard = async () => {
  try {
    const response = await axios.post(API_URL + '/add_card', {
      title: cardTitle,
      description: cardDescription,
      image: cardImage,
      username:username2,
      location:cardLocation
    });
    console.log('Card saved:', response.data);
    // Reset the card details and close the modal
    setCardTitle('');
    setCardImage('');
    setCardDescription('');
    setUsername('');
    setCardLocation('');
    setIsModalVisible(false);
    // Fetch the updated cards from the backend API
    fetchCards();
  } catch (error) {
    console.log('Error saving card:', error);
  }
};


  
  
  const handleImageSelection = async () => {
    const options = {
      title: 'Select Image',
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };
  
    try {
      const response = await ImagePicker.launchImageLibraryAsync(options);
      if (!response.cancelled) {
        console.log("RESPONSE URI IMAGE", response.assets[0].uri)
        setCardImage(response.assets[0].uri);
      }
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome  {username}</Text>
        <Text style={styles.booked}>Your Booked Periods</Text>
        <Calendar
          style={styles.calendar}
          current={'2023-06-01'}
          markedDates={{
            ...selectedDates,
            '2023-06-15': { selected: true, marked: true },
            '2023-06-16': { selected: true, marked: true },
            '2023-06-17': { selected: true, marked: true },
            '2023-06-18': { selected: true, marked: true },
          }}
          onDayPress={(day) => handleDateSelection(day.dateString)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleCardCreation}
        >
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>

        <Modal visible={isModalVisible} animationType="slide">
          <SafeAreaView>
            <ScrollView contentContainerStyle={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Title:</Text>
                <TextInput
                  style={styles.input}
                  value={cardTitle}
                  onChangeText={setCardTitle}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Description:</Text>
                <TextInput
                  style={styles.input}
                  value={cardDescription}
                  onChangeText={setCardDescription}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Locatie:</Text>
                <TextInput
                  style={styles.input}
                  value={cardLocation}
                  onChangeText={setCardLocation}
                 /> 
              </View>
              <TouchableOpacity
                style={styles.selectImageButton}
                onPress={handleImageSelection}
              >
                <Text style={styles.selectImageButtonText}>Select Image</Text>
              </TouchableOpacity>
              {cardImage !== '' && (
                <Image
                  source={{ uri: cardImage }}
                  style={styles.selectedImage}
                />
              )}
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveCard}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
        </Modal>
        
        
        {filteredCards.map((card, username) => {
          // <View key={index} style={styles.cardContainer}>
          //   <ImageBackground
          //     source={{ uri: cardImage }}
          //     style={styles.cardImage}
          //   >
          //     <Text style={styles.cardTitle}>{cardTitle}</Text>
          //     <Text style={styles.cardDescription}>{cardDescription}</Text>
          //   </ImageBackground>
          // </View>
          console.log("CARD", card)
          return (
          <TouchableOpacity onPress={()=>goToTemplate(card['title'],card['description'],card['image'],card['location'])}>
          <View key={username} style={styles.cardContainer}>
            <ImageBackground
              source={{ uri: card['image'] }}
              style={styles.cardImage}
            >
              
            </ImageBackground>
            <Text style={styles.cardTitle}>{card['title']}</Text>
            <Text style={styles.cardDescription}>{card['description']}</Text>
            <Text style={styles.cardLocation}>Location:{card['location']}</Text>
          </View>
          </TouchableOpacity>
          
        )})}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#4FD3DA'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:20,
    paddingLeft:40,
    position:'relative'
  },
  booked: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft:60,
    fontWeight:'bold',
    color:'white',
    paddingLeft:25

  },
  calendar: {
    marginBottom: 20,
    marginTop:10
  },
  addButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    padding: 20,
  },
  closeButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  selectImageButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  selectImageButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    width:350,
    height:400,
    borderRadius:12,
    marginVertical:12,
    marginHorizontal:-5,
    backgroundColor:'white',
    flex:1,
    flexGrow:1,
    borderWidth:0.5,
    shadowColor: '#171717',
    shadowOffset:{widht:-2, height:5

    },


    
    
  },
  cardImage: {
    height:250,
    marginBottom:0,
    marginTop:50

  },
  cardTitle: {
    color:'#00000',
    fontSize:22,
    fontWeight:'bold',
    position:'absolute',
    marginTop:4,
    Bottom:10,
    marginLeft:10
    

  },
  cardDescription: {
    color:'#00000',
    fontSize:15,
    fontWeight:'italic',
    marginTop:4,
    Bottom:10,
    marginLeft:10
  },
  cardLocation:{
    color:'#00000',
    fontSize:15,
    fontWeight:'bold',
    position:'absolute',
    right:10,
    top:10
  

  }
});
