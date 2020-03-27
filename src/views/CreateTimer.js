import React, { useState } from "react"
import { View, Text } from "react-native"
import { Container } from "../styles/Layout"
import { Button } from "../styles/Button"
import TimePicker from "../components/TimePicker"

const CreateTimer = ({ route, navigation }) => {
  const timerToEdit = route.params || null
  const initialState = timerToEdit || {
    hours: 0,
    minutes: 0,
  }
  const [time, setTime] = useState(initialState)

  return (
    <Container>
      <Text style={{ fontSize: 24, marginBottom: -8, marginTop: 24, fontFamily: "m-500" }}>
        Timer Interval
      </Text>
      <TimePicker
        selectedHours={time.hours}
        selectedMinutes={time.minutes}
        onChange={(hours, minutes) => setTime({ hours, minutes })}
      />
      <Button onPress={() => navigation.navigate("ListTimers")}>Create Timer</Button>
    </Container>
  )
}

export default CreateTimer
