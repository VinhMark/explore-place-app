import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Search from '../Screens/Search';
import PlaceDetail from '../Components/Home/PlaceDetail/PlaceDetail';

export default function SearchNavigate() {
  const Stack = createStackNavigator();
  const isAndroid = true;
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name='search-screen' component={Search} options={{ headerShown: false }} />
      <Stack.Screen
        name='search-place-detail'
        component={PlaceDetail}
        screenOptions={{
          presentation: 'modal',
        }}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
}
