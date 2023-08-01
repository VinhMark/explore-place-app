import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import PlaceDetail from '../Components/Home/PlaceDetail/PlaceDetail';

export default function HomeNavigate() {
  const Stack = createStackNavigator();
  const isAndroid = true;
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name='home-screen' component={Home} />
      <Stack.Screen
        name='place-detail'
        component={PlaceDetail}
        screenOptions={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
