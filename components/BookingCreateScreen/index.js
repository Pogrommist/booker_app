import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Header } from '../../components/shared/Header'

export class BookingCreateScreen extends React.Component {
  state = { date:"2016-05-15" } 

  render() {
    const time = [
        { time: '09:00', disabled: false},
        { time: '09:30', disabled: true},
        { time: '10:00', disabled: true},
        { time: '10:30', disabled: false},
        { time: '11:00', disabled: false},
        { time: '11:30', disabled: false},

    ]
    return (
			<View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
				<Header/>
				<View style={{flex: 2, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Text>Current date: {this.state.date}</Text>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                    {time.map(item => {
                        return (item.disabled ? <Text style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', color: 'white', backgroundColor: 'black', width: 50, height: 50}}>{item.time}</Text> : <Text style={{flex: 1, width: 50, height: 50}}>{item.time}</Text>)
                    })}
                </View>
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingShowScreen')}>
                        <Text>Create</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingsScreen')}>
                        <Text>Chancel</Text>
                    </TouchableOpacity>
				</View>
				
			</View>
    );
  }
}
