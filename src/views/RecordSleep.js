import React, { useState } from "react"
import { Container } from "../styles/Layout"
import { Button } from "../styles/Button"
import { Input } from "../styles/Form"
import useStore from "../hooks/useStore"

const RecordSleep = ({ navigation }) => {
  const { dispatch } = useStore()
  const [formData, setFormData] = useState({
    time: "",
    amount: "",
    notes: "",
  })

  const handleInput = (text, field) => {
    setFormData({
      ...formData,
      [field]: text,
    })
  }

  const saveSleep = () => {
    dispatch({ type: "create-sleep-record", payload: formData })
    navigation.navigate("Dashboard")
  }

  return (
    <Container>
      <Input
        onChangeText={text => handleInput(text, "time")}
        placeholder='Time'
        placeholderTextColor='#353535'
      />
      <Input
        onChangeText={text => handleInput(text, "amount")}
        placeholder='Hours Slept'
        placeholderTextColor='#353535'
      />
      <Input
        onChangeText={text => handleInput(text, "notes")}
        placeholder='Notes'
        placeholderTextColor='#353535'
      />
      <Button onClick={saveSleep}>Save</Button>
    </Container>
  )
}

export default RecordSleep
