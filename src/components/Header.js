import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../themes/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
        const navigation=useNavigation()
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Entypo name="shopping-bag" style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('MyCart')}>
        <MaterialCommunityIcons
          name="cart"
          style={[
            styles.icons,
            {borderWidth: 1},
            {borderColor: Colors.backgroundLight},
            {fontSize: 20},
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 16,
  },
  icons: {
    fontSize: 18,
    color: Colors.backgroundMedium,
    backgroundColor: Colors.backgroundLight,
    padding: 12,
    borderRadius: 10,
  },
});
