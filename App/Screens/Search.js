import { View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import GoogleMapViewFull from '../Components/Search/GoogleMapViewFull';
import SearchBar from '../Components/Search/SearchBar';
import { UserLocationContext } from '../Context/UserLocationContext';
import GlobalApi from '../Services/GlobalApi';
import BusinessList from '../Components/Search/BusinessList';

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    getSearchByTextPlace('restaurant');
  }, []);

  const getSearchByTextPlace = (value) => {
    GlobalApi.searchByText(value).then((res) => setPlaceList(res.data.results));
  };

  return (
    <View>
      <View style={{ position: 'absolute', zIndex: 20 }}>
        <SearchBar setSearchText={(value) => getSearchByTextPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />

      <View style={{ position: 'absolute', zIndex: 20, bottom: 0 }}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
}
