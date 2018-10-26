import React from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Form from '../shared/Form'
import { Header } from '../../components/shared/Header'
import { signUpAction } from '../../redux/actions/auth'

export class RegistrationScreen extends React.Component {
  handleRegistration = data => {
    signUpAction(data)
    // this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Header />
				<Text>Registration</Text>
				<Form onSubmit={this.handleRegistration} submitText='Register'/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
