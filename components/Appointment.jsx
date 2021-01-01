import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";

const Group = ({ user, diagnosis, active, time, navigate }) => {
  return (
    <GroupItem onPress={() => navigate('Patient')}>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />

      <View style={{ flex: 1 }}>
        <FullName>{user.fullName}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>

      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  );
};

Group.defaultProps = {
  groupTitel: "Untitled",
  items: [],
};

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const GrayText = styled.Text`
  color: #8b979f;
`;

const GroupDate = styled.Text`
  background: ${(props) => (props.active ? "#2a86ff" : "#e9f5ff")};
  border-radius: 18px;
  font-weight: 600;
  color: #4294ff;
  color: ${(props) => (props.active ? "#fff" : "#4294ff")};
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  width: 70px;
  height: 32px;
`;

export default Group;
