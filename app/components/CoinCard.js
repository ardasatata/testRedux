import React from 'react';
import {
  View,
  Text,
  StyleSheet, TouchableOpacity,
} from 'react-native';

// const CoinCard = ({
//   id, coin_name, price_usd, percent_change_24h,
// }) => (
//   <TouchableOpacity>
//     <View style={styles.listItem}>
//       <Text>{ id }</Text>
//       <Text>{ coin_name }</Text>
//       <Text>{ price_usd }</Text>
//       <Text>{ percent_change_24h }</Text>
//     </View>
//   </TouchableOpacity>
// );

const CoinCard = props => (
  <TouchableOpacity>
    <View style={styles.listItem}>
      <Text>{ props.id }</Text>
      <Text>{ props.coin_name }</Text>
      <Text>{ props.price_usd }</Text>
      <Text>{ props.percent_change_24h }</Text>
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
});

export default CoinCard;
