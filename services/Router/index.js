import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../../containers/LoginScreen'
import RegistrationScreen from '../../containers/RegistrationScreen'

const Router = createStackNavigator({
  Home: { screen: LoginScreen },
  RegistrationScreen: { screen: RegistrationScreen}
});

export default Router
