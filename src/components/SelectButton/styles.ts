import styled from "styled-components";

type ButtonProps = {
  selected: boolean;
};

export const Container = styled.button<ButtonProps>`
  width: 202px;
  height: 48px;

  border-radius: 8px;
  border: none;

  background-color: ${({ theme, selected }) =>
    selected ? theme.COLORS.PRIMARY : theme.COLORS.GRAY};

  color: ${({ theme }) => theme.COLORS.WHITE};
  font: 600 1.25rem "Mulish", sans-serif;

  &:not(:first-child) {
    margin-left: 16px;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;
