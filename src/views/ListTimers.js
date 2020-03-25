import React from "react"
import { View, Button, Text } from "react-native"

const ListTimers = ({ navigation }) => {
  return (
    <View>
      <Text>ListTimers</Text>
      <Button title='Record' onPress={() => navigation.navigate("RecordFeeding")} />
    </View>
  )
}

export default ListTimers
