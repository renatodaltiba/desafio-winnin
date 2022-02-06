import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 91px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const TitlePage = styled.h2`
  font: 700 2.37rem "Mulish", sans-serif;

  color: ${({ theme }) => theme.COLORS.WHITE};

  span {
    color: ${({ theme }) => theme.COLORS.WARNING};
  }
`;

export const IconChecked = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchContainer = styled.div`
  position: absolute;

  right: 0;

  padding: 0 57px;

  @media (max-width: 960px) {
    padding: 0 22px;
  }
`;
