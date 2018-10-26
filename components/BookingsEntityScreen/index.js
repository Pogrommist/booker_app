import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  moment from 'moment'
import { width } from '../shared/sharedStyles'

export class BookingsEntityScreen extends React.Component {
  handleDestroy = () => {
    const { onDestroy, id } = this.props
    onDestroy(id)
  }
  render() {
    const { name, booking_date, status } = this.props.booking
    return (
      <View style={{flex: 3, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', backgroundColor: 'yellow', width}}>
		    <Text>{name}</Text>
        <Text>{moment.utc(booking_date).format("DD.MM.YY HH:mm")}</Text>
        <Text>{status}</Text>
        <TouchableOpacity onPress={this.handleDestroy}>
          <Text>x</Text>
        </TouchableOpacity>
     </View>
    );
  }
}


