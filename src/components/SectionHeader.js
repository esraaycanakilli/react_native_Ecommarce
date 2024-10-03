import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../themes/Colors';

export default function SectionHeader({title, count}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'Center',}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.textSee}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  count: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
    opacity: 0.5,
    marginLeft: 10,
  },
  textSee: {
    fontSize: 14,
    color: Colors.blue,
    fontWeight: '400',
  },
});
