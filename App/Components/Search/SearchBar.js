import { View, Text, Dimensions, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../Shared/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View>
      <LinearGradient
        colors={[Colors.white, 'transparent']}
        style={{
          padding: 20,
          width: Dimensions.get('screen').width,
        }}
      >
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontFamily: 'raleway-bold', fontSize: 35 }}>Discover</Text>
          <Image
            source={require('./../../../assets/placeholder.jpg')}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: Colors.white,
            borderRadius: 5,
            padding: 10,
            marginTop: 5,
          }}
        >
          <Ionicons name='search' size={24} color={Colors.darkGray} />
          <TextInput
            placeholder='Search'
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
            style={{ backgroundColor: Colors.white, width: '80%', height: 40 }}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
