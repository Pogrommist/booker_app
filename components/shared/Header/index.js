import React from 'react';
import { View, Image, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import logo from './logo.png'

import { width } from '../sharedStyles'

export class Header extends React.Component {

  render() {
    return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<Image source={logo} style={styles.image}/>
				</TouchableWithoutFeedback>
			</View>

    );
  }
}

const styles = StyleSheet.create({
	container: {
		width,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
  image: {
		flex: 0,
		height: 200,
		width: 200,
	}

});
