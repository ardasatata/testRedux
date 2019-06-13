import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';

class viewUtama extends Component {
  state = {
    placeName: '',
    places: []
  }

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

  render() {
    return (
        <View style={ styles.container }>
          <View style = { styles.inputContainer }>
            <TextInput
              placeholder = "Seach Places"
              style = {styles.placeInput}
              value = {this.state.placeName}
              onChangeText = {this.placeNameChangeHandler}
              />
            <Button title = 'Add'
                    style = { styles.placeButton }
                    onPress = { this.placeSubmitHandler }
            />
          </View>
          <Button title = 'View2'
                  style = { styles.placeButton }
                  onPress = { ()=>this.goView2() }
          />
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
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(viewUtama)
