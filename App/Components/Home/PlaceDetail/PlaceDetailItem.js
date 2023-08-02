import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../../../Shared/Colors';
import Share from '../../../Services/Share';

export default function PlaceDetailItem({ place, onDirectionClick }) {
  return (
    <View>
      <Text style={{ fontSize: 20, fontFamily: 'raleway-bold' }}>{place?.name}</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          marginTop: 5,
        }}
      >
        <AntDesign name='star' size={20} color={Colors.yellow} />
        <Text>{place?.rating}</Text>
      </View>

      {/* Image */}
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
          style={{ width: '100%', height: 200, borderRadius: 15, marginTop: 10 }}
        />
      ) : (
        <Image
          source={require('./../../../../assets/placeholder.jpg')}
          style={{ width: '100%', height: 200, borderRadius: 15 }}
        />
      )}

      <Text style={{ fontSize: 16, marginTop: 10, color: Colors.darkGray }}>
        {place?.vicinity || place?.formatted_address}
      </Text>
      <Text style={{ fontFamily: 'raleway' }}>
        {place?.opening_hours?.open_now ? '(Open)' : '(Closed)'}
      </Text>

      <View style={{ marginTop: 10, flexDirection: 'row', display: 'flex', gap: 10 }}>
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            backgroundColor: Colors.gray,
            width: 110,
            padding: 3,
            borderRadius: 40,
            justifyContent: 'center',
          }}
        >
          <Ionicons name='navigate-circle-outline' size={24} color={'black'} />
          <Text style={{ fontFamily: 'raleway', fontSize: 16 }}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            place.vicinity = place.vicinity || place?.formatted_address;
            return Share.SharePlace(place);
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            backgroundColor: Colors.gray,
            width: 110,
            padding: 3,
            borderRadius: 40,
            justifyContent: 'center',
          }}
        >
          <Ionicons name='share-outline' size={24} color={'black'} />
          <Text style={{ fontFamily: 'raleway', fontSize: 16 }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
