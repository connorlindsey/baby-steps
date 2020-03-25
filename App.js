import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import CreateBaby from "./src/views/CreateBaby"
import CreateTimer from "./src/views/CreateTimer"
import Dashboard from "./src/views/Dashboard"
import ListBabies from "./src/views/ListBabies"
import ListTimers from "./src/views/ListTimers"
import RecordFeeding from "./src/views/RecordFeeding"
import Summary from "./src/views/RecordFeeding"
import { StateProvider } from './src/hooks/store.js';

const Stack = createStackNavigator()

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Dashboard' component={Dashboard} options={{ title: "Home"}} />
          <Stack.Screen name='CreateTimer' component={CreateTimer} options={{ title: "New Timer"}} />
          <Stack.Screen name='CreateBaby' component={CreateBaby} options={{ title: "New Baby"}} />
          <Stack.Screen name='RecordFeeding' component={RecordFeeding} options={{ title: "Feeding"}} />
          <Stack.Screen name='ListBabies' component={ListBabies} options={{ title: "Baby Info"}} />
          <Stack.Screen name='ListTimers' component={ListTimers} options={{ title: "Timers"}} />
          <Stack.Screen name='Summary' component={Summary} options={{ title: "Summary"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  )
}
