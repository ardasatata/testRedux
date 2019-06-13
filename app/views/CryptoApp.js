import React, { Component } from 'react';
import {
  StyleSheet, View, Button, Text,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { FetchCoinData } from '../actions/coin'
import CoinCard from '../components/CoinCard'

class CryptoApp extends Component {

  componentWillMount(): void {
    this.props.fetchCoinData(10);
  }

  fetchCoinDataHandler = () => {
    this.props.fetchCoinData(10);
  }

  renderCoinCard = () => {
    const {coins} = this.props;
    console.log(coins)
    return this.props.coins.map((coin,index)=>
        <CoinCard
            key={index}
            coin_name={coin.name}
            price_usd={coin.price_usd}
            percent_change_24h={coin.percent_change_24h}
        />)
  }


  render() {
    return (
        <View style={ styles.container }>
          <Button title = 'Fetch Data'
                  style = { styles.placeButton }
                  onPress = { ()=>this.fetchCoinDataHandler() }
          />
          <Button title = 'Log'
                  style = { styles.placeButton }
                  onPress = { ()=>this.log() }
          />
          <ScrollView>
            {this.renderCoinCard()}
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  coinContainer: {
    width:'100%',
    padding: 8,
  },
  container: {
    width:'100%',
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 8,
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});

const mapStateToProps = state => ({
  coins: state.coins.data,
});

const mapDispatchToProps = dispatch => ({
  fetchCoinData: (limit) => {
    dispatch(FetchCoinData(limit));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(CryptoApp);
