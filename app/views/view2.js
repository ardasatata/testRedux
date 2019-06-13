import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { deletePlace } from '../actions/place';

class view2 extends Component {
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

  placeDestroyHandler = (key) =>{
    console.log('delete');
    this.props.delete(key);
  }

  placesOutput = () => {
    return (
        <FlatList style = { styles.listContainer }
                  data = { this.props.places }
                  keyExtractor={(item, index) => index.toString()}
                  renderItem = { info => (
                      <ListItem
                          placeName={ info.item.value }
                          onPressButton={()=>this.placeDestroyHandler(info.item.key)}
                      />
                  )}
        />
    )
  }

  render() {
    return (
        <View style={ styles.container }>
          <View style = { styles.inputContainer }>
          </View>
          <View style = { styles.listContainer }>
            { this.placesOutput() }
          </View>
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

/**
 * @param {String} state state saat ini.
 */
const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (key) => {
      dispatch(deletePlace(key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(view2)
