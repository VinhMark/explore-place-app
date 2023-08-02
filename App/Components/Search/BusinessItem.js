import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../../Shared/Colors';
import { AntDesign } from '@expo/vector-icons';

export default function BusinessItem({ place }) {
  return (
    <View
      style={{
        width: 140,
        overflow: 'hidden',
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 10,
        margin: 5,
      }}
    >
      {place?.photos?.length > 0 ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo' +
              '?maxwidth=400' +
              '&photo_reference=' +
              place?.photos[0]?.photo_reference +
              '&key=AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0',
          }}
          style={{ width: 120, height: 80, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require('./../../../assets/placeholder.jpg')}
          style={{ width: 120, height: 80, borderRadius: 15 }}
        />
      )}

      <Text numberOfLines={2} style={{ fontFamily: 'raleway-bold', fontSize: 16, marginTop: 5 }}>
        {place?.name}
      </Text>

      <Text numberOfLines={3} style={{ fontSize: 14, marginBottom: 5, color: Colors.darkGray }}>
        {place?.formatted_address}
      </Text>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <AntDesign name='star' size={20} color={Colors.yellow} />
        <Text>{place?.rating}</Text>
      </View>
    </View>
  );
}
