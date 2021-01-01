import React from "react";
import { SectionTitle, Appointment } from "../components/index";
import { StyleSheet, Text, View, Image, SectionList } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    title: "14 сентября",
    data: [
      {
        time: "15:30",
        diagnosis: "пульпит",
        active: true,
        user: {
          fullName: "Дима Морозов",
          avatar:
            "https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&w=1000&q=80",
        },
      },
      {
        time: "17:30",
        diagnosis: "повторный осмотр",
        user: {
          fullName: "Халк Николаев",
          avatar:
            "https://images.immediate.co.uk/production/volatile/sites/3/2017/10/TRB1420_comp_v422.1056-8e99dab.jpg?quality=90&resize=768,574",
        },
      },
    ],
  },
  {
    title: "18 сентября",
    data: [
      {
        time: "09:30",
        diagnosis: "удаление зуба",
        user: {
          fullName: "Василий Петров",
          avatar:
            "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
        },
      },
      {
        time: "14:30",
        diagnosis: "повторный осмотр",
        user: {
          fullName: "Илон Маск",
          avatar:
            "https://cdn.sm-news.ru/wp-content/uploads/2020/11/25/3b3f3b3e0e60d3adc8223a3d15a4ea6f05c45f57.jpg",
        },
      },
    ],
  },
  {
    title: "18 сентября",
    data: [
      {
        time: "09:30",
        diagnosis: "удаление зуба",
        user: {
          fullName: "Василий Петров",
          avatar:
            "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
        },
      },
      {
        time: "14:30",
        diagnosis: "повторный осмотр",
        user: {
          fullName: "Илон Маск",
          avatar:
            "https://cdn.sm-news.ru/wp-content/uploads/2020/11/25/3b3f3b3e0e60d3adc8223a3d15a4ea6f05c45f57.jpg",
        },
      },
    ],
  },
  {
    title: "18 сентября",
    data: [
      {
        time: "09:30",
        diagnosis: "удаление зуба",
        user: {
          fullName: "Василий Петров",
          avatar:
            "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
        },
      },
      {
        time: "14:30",
        diagnosis: "повторный осмотр",
        user: {
          fullName: "Илон Маск",
          avatar:
            "https://cdn.sm-news.ru/wp-content/uploads/2020/11/25/3b3f3b3e0e60d3adc8223a3d15a4ea6f05c45f57.jpg",
        },
      },
    ],
  },
  {
    title: "18 сентября",
    data: [
      {
        time: "09:30",
        diagnosis: "удаление зуба",
        user: {
          fullName: "Василий Петров",
          avatar:
            "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
        },
      },
      {
        time: "14:30",
        diagnosis: "повторный осмотр",
        user: {
          fullName: "Илон Маск",
          avatar:
            "https://cdn.sm-news.ru/wp-content/uploads/2020/11/25/3b3f3b3e0e60d3adc8223a3d15a4ea6f05c45f57.jpg",
        },
      },
    ],
  },
];

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(index) => index}
        renderItem={({ item }) => <Appointment navigate={navigation.navigate} {...item} />}
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
