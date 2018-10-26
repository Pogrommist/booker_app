import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import FormTextInput from '../FormTextInput'

function Form(props) {
  return (
		<View
			padding={20}
			keyboardShouldPersistTaps={'handled'}
			style={styles.container}
			>
      <View>
				<Text style={styles.label}>Email</Text>
				<Field
					name={'email'}
					component={FormTextInput}
					placeholder='Email'
					style={styles.field}
					underlineColorAndroid="transparent"
				/>
			</View>
			<View>
				<Text style={styles.label}>Password</Text>
				<Field
					name={'password'}
					component={FormTextInput}
					secureTextEntry={true}
					placeholder='Password'
					style={styles.field}
					underlineColorAndroid="transparent"
				/>

			</View>
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.button}>{props.submitText}!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 200,
		height: 320,
		alignItems: 'center',
		flexDirection: 'column',
	},
  field: {
		height: 50,
		width: 200,
		borderColor: '#000',
		borderWidth: 2,
		borderRadius: 10,
		fontSize: 18,
		padding: '5%',
		alignSelf: 'stretch',
		marginTop: 10,
		marginBottom: 10
	},
	label: {
		textAlign: 'center',
		fontSize: 16

	},
	button: {
		textAlign: 'center',
		backgroundColor: 'black',
		color: 'white',
		width: 100,
		padding: 10,
		marginTop: 10,
		fontSize: 20
	}
});

export default reduxForm({ form: 'signIn' })(Form);
