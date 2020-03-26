import React, { useState } from "react"
import { Text } from "react-native"
import { Input } from "../styles/Form"
import { Container } from "../styles/Layout"
import { Button } from "../styles/Button"
import useStore from "../hooks/useStore"

const CreateBaby = ({ navigation, route }) => {
  const babyToEdit = route.params || null
  const initialState = babyToEdit || {
    name: "",
    gender: "",
    birthDate: "",
    timeOfBirth: "",
    image: null,
  }
  const [formData, setFormData] = useState(initialState)
  const { dispatch } = useStore()

  const handleInput = (text, field) => {
    setFormData({
      ...formData,
      [field]: text,
    })
  }

  const handleSubmit = () => {
    dispatch({ type: "create-baby", payload: formData })
    navigation.navigate("ListBabies")
  }

  return (
    <Container>
      <Input
        onChangeText={text => handleInput(text, "name")}
        value={formData.name}
        placeholder='Name'
        placeholderTextColor='#353535'
      />
      <Input
        onChangeText={text => handleInput(text, "gender")}
        value={formData.gender}
        placeholder='Gender'
        placeholderTextColor='#353535'
      />
      <Input
        onChangeText={text => handleInput(text, "birthDate")}
        value={formData.birthDate}
        placeholder='Birth Date'
        placeholderTextColor='#353535'
      />
      <Input
        onChangeText={text => handleInput(text, "timeOfBirth")}
        value={formData.timeOfBirth}
        placeholder='Time of Birth'
        placeholderTextColor='#353535'
      />
      <Button onPress={handleSubmit}>
        <Text>Make a Baby 👶</Text>
      </Button>
    </Container>
  )
}

export default CreateBaby
