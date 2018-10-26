import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../../containers/LoginScreen'
import RegistrationScreen from '../../containers/RegistrationScreen'
import BookingsScreen from '../../containers/BookingsScreen'
import { BookingCreateScreen } from '../../components/BookingCreateScreen'

const Router = createStackNavigator({
  Home: { screen: LoginScreen },
  RegistrationScreen: { screen: RegistrationScreen},
  BookingsScreen: { screen: BookingsScreen},
  BookingCreateScreen: { screen: BookingCreateScreen}
});

export default Router
