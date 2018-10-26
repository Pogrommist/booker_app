import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Form from "../../components/shared/Form";
import { Header } from "../../components/shared/Header";
import { signInAction } from "../../redux/actions/auth";

import { width } from '../../components/shared/sharedStyles'

class LoginScreen extends React.Component {
  handleLogin = data => {
    this.props.onSignInAction(data)
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
        <Header />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login</Text>
            <Form onSubmit={this.handleLogin} submitText="Login"/>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("RegistrationScreen")}
            >
              <Text style={styles.button}>SignUp</Text>
            </TouchableOpacity>
          </View>
				</TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignInAction(data) { return dispatch(signInAction(data)) }
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

export default connect(null, mapDispatchToProps)(LoginScreen);
