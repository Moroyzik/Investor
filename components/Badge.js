import React from 'react';
import styled from "styled-components/native";

const getColor = ({active, color}) => {
    const colors = {
        green: {
            background: 'rgba(132, 210, 105, 0.21)',
            color: '#61bb42',
        },
        active: {
            background: '#2a86ff',
            color: '#fff',
        },
        default: {
            background: '#e9f5ff',
            color: '#4294ff',
        }
    }

    if (active) {
        return colors.active
    } else if (color && colors[color]) {
        return colors.green
    } else {
       return colors.default
    }
}

export default styled.Text`
  background: ${(props) => getColor(props).background};
  border-radius: 18px;
  font-weight: 600;
  color: ${(props) => getColor(props).color};
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  width: 70px;
  height: 32px;
`;