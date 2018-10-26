import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Header } from '../../components/shared/Header'

export class BookingShowScreen extends React.Component {
    handleCreateBooking = () => {
        this.props.navigation.navigate('BookingsScreen')
    }
  render() {
    return (
			<View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
				<Header/>
				<View style={{flex: 2, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <Text>New booking</Text>
                    <Text>Date</Text>
                    <Text>Details</Text>
                    <TouchableOpacity onPress={this.handleCreateBooking}>
                        <Text style={{textAlign: 'center', backgroundColor: 'black', color: 'white', width: 100, borderRadius: 10, padding: 10}}>Create</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingsScreen')}>
                        <Text>Chancel</Text>
                    </TouchableOpacity>
				</View>
				
			</View>
    );
  }
}
