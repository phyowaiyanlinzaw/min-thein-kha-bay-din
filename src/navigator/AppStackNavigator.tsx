import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './type';
import HomeScreen from '../screens/HomeScreen';
import NumberScreen from '../screens/NumberScreen';
import ResultScreen from '../screens/ResultScreen';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NumberScreen"
        component={NumberScreen}
        options={{
          headerStyle: {
            backgroundColor: '#64748b',
          },
          headerTintColor: '#fff',
          headerTitle: () => (
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Number Screen
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={({route}) => ({
          headerTitle: () => (
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              {route.params.answerNo}
            </Text>
          ),
          headerStyle: {
            backgroundColor: '#64748b',
          },
          headerTintColor: '#fff',
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
