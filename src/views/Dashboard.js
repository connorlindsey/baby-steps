import React from "react"
import { View, Button, Text } from "react-native"
import useStore from "../hooks/useStore"

const Dashboard = ({ navigation }) => {
  const store = useStore();

  return (
    <View>
      <Text>dashboard</Text>
      <Button title='CreateTimer' onPress={() => navigation.navigate("CreateTimer")} />
      <Button title='ListBabies' onPress={() => navigation.navigate("ListBabies")} />
      <Button title='ListTimers' onPress={() => navigation.navigate("ListTimers")} />
      <Button title='RecordFeeding' onPress={() => navigation.navigate("RecordFeeding")} />
      <Button title='Summary' onPress={() => navigation.navigate("Summary")} />
    </View>
  )
}

export default Dashboard
