import React, { useState } from "react"
import { View, Text } from "react-native"
import { Container } from "../styles/Layout"
import { Button } from "../styles/Button"
import TimePicker from '../components/TimePicker';

const CreateTimer = ({ navigation }) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
  });

  return (
    <Container>
      <Text>Timer Interval</Text>
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
