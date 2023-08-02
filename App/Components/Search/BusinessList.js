import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../Shared/Colors';
import BusinessItem from './BusinessItem';
import { useNavigation } from '@react-navigation/native';

export default function BusinessList({ placeList }) {
  const navigator = useNavigation();

  return (
    <View>
      <LinearGradient
        colors={['transparent', Colors.white]}
        style={{ padding: 20, width: Dimensions.get('screen').width }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={placeList}
          renderItem={({ item, index }) =>
            index < 6 && (
              <TouchableOpacity
                onPress={() => navigator.navigate('search-place-detail', { place: item })}
              >
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
}
