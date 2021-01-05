import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Badge from "./Badge";

const Appointment = ({navigate, item}) => {
    const {user, diagnosis, active, time} = item;

    return (
        <GroupItem onPress={() => navigate("Patient", item)}>
            <Avatar
                source={{
                    uri: user.avatar,
                }}
            />

            <View style={{flex: 1}}>
                <FullName>{user.fullName}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <Badge active={active}>{time}</Badge>
        </GroupItem>
    );
};

Appointment.defaultProps = {
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


export default Appointment;
