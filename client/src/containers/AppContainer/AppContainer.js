import { connect } from 'react-redux';
import { setDestination, setOrigin, setInteractionType, setCurrentRoute, setRouteResponse } from '../../actions/index';
import App from '../../components/App/App';


const mapStateToProps = state => ({
  currentLocation: state.currentLocation,
  destination: state.destination,
  origin: state.origin,
  interactionType: state.interactionType,
  currentRoute: state.currentRoute,
  routeResponse: state.routeResponse,
});

const mapDispatchToProps = dispatch => ({
  changeDestination: (destination) => {
    dispatch(setDestination(destination));
  },

  changeOrigin: (origin) => {
    // Dispatch is handled by thunk middleware (see setOrigin action creator)
    setOrigin(origin);
  },

  changeInteractionType: (interactionType) => {
    dispatch(setInteractionType(interactionType));
  },

  changeRoute: (routeIndex) => {
    dispatch(setCurrentRoute(routeIndex));
  },

  changeRouteResponse: (routeResponse) => {
    // Dispatch is handled by thunk middleware (see setRouteResponse action creator)
    setRouteResponse(routeResponse);
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
