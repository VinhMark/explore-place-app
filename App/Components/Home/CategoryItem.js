import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../../Shared/Colors';

export default function CategoryItem({ category }) {
  return (
    <View
      style={{
        padding: 5,
        margin: 5,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: Colors.white,
      }}
    >
      <Image source={category.icon} style={{ width: 50, height: 50 }} />
      <Text style={{ fontSize: 13, fontFamily: 'raleway' }}>{category.name}</Text>
    </View>
  );
}
