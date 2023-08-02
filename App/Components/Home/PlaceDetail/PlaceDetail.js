import { Text, TouchableOpacity, Platform, Linking, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import PlaceDetailItem from './PlaceDetailItem';
import Colors from '../../../Shared/Colors';
import GoogleMapView from '../GoogleMapView';

export default function PlaceDetail() {
  const param = useRoute().params;
  const [place, setPlace] = useState(null);

  useEffect(() => {
    setPlace(param.place);
  }, []);

  const onDirectionClick = () => {
    const url = Platform.select({
      ios: `maps:${place.geometry.location.lat},${place.geometry.location.lng}?q=${
        place?.vicinity || place?.formatted_address
      }`,
      android: `geo:${place.geometry.location.lat},${place.geometry.location.lng}?q=${place.vicinity}`,
    });

    Linking.openURL(url);
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.white, flex: 1 }}>
      <PlaceDetailItem place={place} onDirectionClick={onDirectionClick} />
      <GoogleMapView placeList={[place]} />

      <TouchableOpacity
        onPress={() => onDirectionClick()}
        style={{
          backgroundColor: Colors.primary,
          padding: 15,
          alignContent: 'center',
          alignItems: 'center',
          margin: 8,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            fontFamily: 'raleway',
            color: Colors.white,
            textAlign: 'center',
          }}
        >
          Get Direction on Google Map
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
