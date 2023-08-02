import { View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { UserLocationContext } from '../../Context/UserLocationContext';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function GoogleMapViewFull() {
  const [mapRegion, setMapRegion] = useState([]);
  const { location } = useContext(UserLocationContext);

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

  return (
    <View>
      {location && (
        <MapView
          style={{ width: '100%', height: '100%' }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title='You' coordinate={mapRegion} />
        </MapView>
      )}
    </View>
  );
}
