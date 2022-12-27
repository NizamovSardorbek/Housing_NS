import React from "react";
import { Icons } from "../../Filter/style";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  type,
  icon,
  onChange,
  value,
  defaultValue,
  placeholder,
  name,
  width,
  height,
}) => {
  return (
    <Wrapper>
      <Icon>{<Icons.Houses/>}</Icon>
      <Container
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        type={type}
        width={width}
        height={height}
        icon={icon}
      />
    </Wrapper>
  );
};

export default Input;
