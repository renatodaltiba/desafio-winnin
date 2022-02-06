import styled from "styled-components";
import { TabList } from "react-tabs";
export const Container = styled.div`
  padding: 0 57px;

  @media (max-width: 960px) {
    padding: 0 22px;
  }
`;

export const ButtonsWrapper = styled(TabList)`
  width: 100%;

  margin: 21px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ListPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 21px;
`;

export const ContainerSpinner = styled.div`
  width: 100%;

  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
