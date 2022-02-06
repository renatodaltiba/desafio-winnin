import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 12px;
`;

export const InfoPostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 12px;
`;

export const Photo = styled.img`
  width: 77px;
  height: 77px;

  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 8px;
  margin-right: 17px;

  object-fit: fill;
`;
export const InfoPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
`;
export const TitleWrapper = styled.div``;
export const Title = styled.h3`
  font: 600 1.25rem "Mulish", sans-serif;
  color: ${({ theme }) => theme.COLORS.BLACK};

  @media (max-width: 960px) {
    max-width: 30ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const PublicationTime = styled.div`
  font: 400 1rem "Mulish", sans-serif;
  color: ${({ theme }) => theme.COLORS.TEXT};

  a {
    color: ${({ theme }) =>
      theme.TITLE === "light" ? theme.COLORS.PRIMARY : theme.COLORS.WARNING};

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const Domain = styled.a`
  font: 700 1rem "Mulish", sans-serif;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
