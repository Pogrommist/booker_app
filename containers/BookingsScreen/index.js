import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Header } from "../../components/shared/Header";
import { BookingsEntityScreen } from "../../components/BookingsEntityScreen";
import {
  fetchBookingsAction,
  destroyBooking,
  clearBookings
} from "../../redux/actions/bookings";
import { width } from '../../components/shared/sharedStyles'

class BookingsScreen extends React.Component {
  componentDidMount() {
    const { onFetchBookingsAction } = this.props
    onFetchBookingsAction();
  }
  componentWillUnmount() {
    clearBookings()
  }

  handleAddBooking = () => {
    const { navigation } = this.props
    navigation.navigate("BookingCreateScreen");
  };
  render() {
    const { bookings, onDestroyBooking, user, isLoading } = this.props;
    return (
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Header />
        { isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : (
          <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 3,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "green",
              width
            }}
          >
            <Text>My bookings</Text>
            <TouchableOpacity onPress={this.handleAddBooking}>
              <Text>+ Add</Text>
            </TouchableOpacity>
          </View>

          {bookings.map(booking => (
            <BookingsEntityScreen
              booking={booking}
              key={booking.id}
              onDestroy={onDestroyBooking}
              id={booking.id}
            />
          ))}
        </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  bookings: state.bookings,
  headers: state.auth.token,
  bookingsStore: state,
  user: state.auth,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  onFetchBookingsAction() {
    return dispatch(fetchBookingsAction());
  },
  onDestroyBooking(id) {
    return dispatch(destroyBooking(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsScreen);
