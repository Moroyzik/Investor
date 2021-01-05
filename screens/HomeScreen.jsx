import React, {useState, useEffect} from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";


import { SectionList } from "react-native";
import styled from "styled-components/native";
import { SectionTitle, Appointment } from "../components/index";

const HomeScreen = (props) => {
  const [data, setData] = useState(null)
  const { navigation } = props;

  useEffect(() => {
    axios.get('https://trycode.pw/c/3VXJZ.json').then(({data}) => {
      setData(data)
    })
  }, [])

  return (
    <Container>
      <SectionList
        sections={data}
        keyExtractor={(index) => index}
        renderItem={({ item }) => (
          <Appointment navigate={navigation.navigate} item={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
};

export default HomeScreen;

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  background: #2a86ff;
  position: absolute;
  right: 35px;
  bottom: 35px;
`;

const Container = styled.View`
  flex: 1;
`;
