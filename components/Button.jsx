import React from "react";
import styled from "styled-components/native";

const Button = ({ children, color }) => {
  return (
    <ButtonWrapper color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  color: "#2a86ff",
};

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => props.color};
  text-align: center;
  height: 45px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export default Button;
