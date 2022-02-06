import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 8px;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  color: ${({ theme }) => theme.COLORS.WHITE};
  font: 600 1.25rem "Mulish", sans-serif;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
