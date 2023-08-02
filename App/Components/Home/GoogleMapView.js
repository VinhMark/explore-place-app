import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext';
import PlaceMarker from './PlaceMarker';

export default function GoogleMapView({ placeList }) {
  const [mapRegion, setMapRegion] = useState({});

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  if (!location) {
    return <Text>Loading.....</Text>;
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', fontFamily: 'raleway-bold' }}>
        Top Near By Places
      </Text>

      <View>
        <MapView
          style={{ width: '100%', height: 200 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title='You' coordinate={mapRegion} />

          {/* Show 5 marker */}
          {placeList.map((item, index) => index < 5 && <PlaceMarker item={item} key={index} />)}
        </MapView>
      </View>
    </View>
  );
}
