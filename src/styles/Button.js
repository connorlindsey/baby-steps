import React from "react"
import styled from "styled-components/native"

const StyledButton = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${props => props.secondary ? "#F4F5F5" : "#31bfb7"};
  height: 40px;
  margin-bottom: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  font-size: 16px;
  color: #1f1f21;
  text-transform: uppercase;
  letter-spacing: .75px;
`

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <ButtonText>{props.children}</ButtonText>
    </StyledButton>
  )
}

export { Button }
