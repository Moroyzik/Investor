import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Foundation, Feather, FontAwesome5 } from "@expo/vector-icons";

import { Button, Badge } from "../components";

const PatientScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <PatientFullname>
          {navigation.getParam("user").fullName}
        </PatientFullname>
        <GrayPhone>{navigation.getParam("user").phone}</GrayPhone>

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

      <PatientAppointments>
        <Container>
          <AppointmentCard>
            <MoreButton>
              <Feather name="more-vertical" size={20} color="black" />
            </MoreButton>

            <AppointmentCardRow>
              <FontAwesome5 name="tooth" size={20} color="black" />
              <AppointmentContent>Зуб: 12</AppointmentContent>
            </AppointmentCardRow>

            <AppointmentCardLabel>
              <Foundation name="clipboard-pencil" size={20} color="black" />
              <AppointmentContent>Диагноз: повторный осмотр</AppointmentContent>
            </AppointmentCardLabel>

            <AppointmentCardRow
              style={{ marginTop: 15, justifyContent: "space-between" }}
            >
              <Badge style={{ width: 155 }} active>
                11.10.2021 - 15:40
              </Badge>
              <Badge color="green">1500 р</Badge>
            </AppointmentCardRow>
          </AppointmentCard>
        </Container>
      </PatientAppointments>
    </View>
  );
};

const AppointmentCard = styled.View`
  padding: 20px;
  border-radius: 10px;
  background: white;
  margin-bottom: 15px;
`;

const AppointmentCardRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

const MoreButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 100;
  right: 15px;
  top: 15px;
`;

const AppointmentCardLabel = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const AppointmentContent = styled.Text`
  padding-left: 15px;
  font-size: 16px;
`;

const Container = styled.View`
  padding: 25px;
`;

const ButtonView = styled.View`
  flex: 1;
`;

const PatientAppointments = styled.View`
  flex: 1;
  background: #dcecf6;
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
