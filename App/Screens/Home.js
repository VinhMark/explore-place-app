import { StyleSheet, ScrollView, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Home/Header';
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
import { UserLocationContext } from '../Context/UserLocationContext';

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('restaurant');
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      getNearBySearch(category);
    }
  }, [location, category]);

  const getNearBySearch = (type) => {
    setIsLoading(true);
    setPlaceList([]);
    GlobalApi.nearByPlace(location.coords.latitude, location.coords.longitude, type).then((res) => {
      setPlaceList(res.data.results);
    });

    setIsLoading(false);
  };

  return (
    <ScrollView style={styles.home}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList setCategory={setCategory} />
      <View style={{ paddingBottom: 30 }}>
        {isLoading ? (
          <Text>Loading....</Text>
        ) : (
          placeList.length > 0 && <PlaceList placeList={placeList} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    padding: 20,
  },
});
