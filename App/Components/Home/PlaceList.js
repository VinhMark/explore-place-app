import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';
import PlaceItemBig from './PlaceItemBig';
import { useNavigation } from '@react-navigation/native';

export default function PlaceList({ placeList }) {
  const navigator = useNavigation();

  const onPlaceClick = (item) => {
    navigator.navigate('place-detail', item);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'raleway-bold',
          marginTop: 10,
        }}
      >
        Found {placeList.length} places
      </Text>

      <FlatList
        data={placeList}
        vertical={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onPlaceClick(item)}>
            {index % 4 === 0 ? <PlaceItemBig place={item} /> : <PlaceItem place={item} />}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
