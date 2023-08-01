import { Image, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Colors from '../../Shared/Colors';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('./../../../assets/logo.png')} style={styles.logo} />

      <View style={styles.searchBar}>
        <TextInput placeholder='Search' style={styles.searchInput} />
      </View>

      <Image source={require('./../../../assets/user.png')} style={styles.userImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    flexGrow: 1,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {},
  userImage: {
    width: 50,
    height: 50,
  },
});
