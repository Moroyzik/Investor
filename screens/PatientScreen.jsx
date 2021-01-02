import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Foundation } from "@expo/vector-icons";

import { Button } from "../components";

const PatientScreen = ({ navigation }) => {
  return (
    <View style={{ felx: 1 }}>
      <Container>
        <PatientFullname>
          {navigation.getParam("user").fullName}
        </PatientFullname>
        <GrayPhone>+7 (999) 444-22-33</GrayPhone>
        <PatientButtons>
          <ButtonView>
            <Button>Формула зубов</Button>
          </ButtonView>

          <ButtonPhoneView>
            <Button color="#84d269">
              <Foundation name="telephone" size={28} color="white" />
            </Button>
          </ButtonPhoneView>
        </PatientButtons>
      </Container>

      <PatientAppointments></PatientAppointments>
    </View>
  );
};

const Container = styled.View`
  padding: 25px;
`;

const ButtonView = styled.View`
  flex: 1;
`;

const PatientAppointments = styled.View`
  flex: 1;
  background: #8b979f;
`;

const ButtonPhoneView = styled.View`
  margin-left: 10px;
  width: 45px;
`;

const PatientButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const PatientFullname = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 5px;
`;

const GrayPhone = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

export default PatientScreen;
