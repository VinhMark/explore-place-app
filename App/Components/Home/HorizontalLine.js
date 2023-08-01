import { View } from 'react-native';
import React from 'react';
import Colors from '../../Shared/Colors';

export default function HorizontalLine() {
  return (
    <View>
      <View style={{ borderWidth: 0.3, marginTop: 10, borderColor: Colors.gray }}></View>
    </View>
  );
}
