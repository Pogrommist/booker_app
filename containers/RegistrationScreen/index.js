import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { connect } from 'react-redux'
import Form from "../../components/shared/Form";
import { Header } from '../../components/shared/Header'
import { signUpAction } from '../../redux/actions/auth'
import { width } from '../../components/shared/sharedStyles'

export class RegistrationScreen extends React.Component {
  handleRegistration = data => {
    const { onSignUpAction } = this.props
    onSignUpAction(data)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
        <Header />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Registration</Text>
            <Form onSubmit={this.handleRegistration} submitText="Register"/>
          </View>
				</TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignUpAction(data) { return dispatch(signUpAction(data)) }
});

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },
  formContainer: {
    display: 'flex',
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    width,
  },
  title: {
    marginBottom: 20,
    fontWeight: "800",
    fontSize: 20
  },
  button: {
    fontWeight: '800'
  }
});


export default connect(null, mapDispatchToProps)(RegistrationScreen)
