import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions/user';

class UserFetch extends Component {

  static navigationOptions = {
    title: 'Fetch Data + Redux',
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }

  goView2 = (value) => {
    this.props.navigation.navigate('View2',{})
  }

  fetchUserDataHandler = () => {
    this.props.fetchData();
  }

  log = () => {
    console.log(this.props.userData);
  }

  render() {
    return (
        <View style={ styles.container }>
          <Button title = 'Fetch Data'
                  style = { styles.placeButton }
                  onPress = { ()=>this.fetchUserDataHandler() }
          />
          <Button title = 'Log'
                  style = { styles.placeButton }
                  onPress = { ()=>this.log() }
          />
          <Text>{this.props.userData.bio}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding : 8
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    userData : state.users.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchUserData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFetch)
