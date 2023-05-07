import styled from "styled-components";

export const TopHeaderStyle = styled.div`
  background-color: #cc3333;
  color: #fff8ee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4rem;
  height: 3rem;
`;

export const PhoneStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10rem;
`;

export const LinkStyle = styled.a`
  color: #fff8ee;
  text-decoration: none;
`;

export const MainHeaderStyle = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LogoStyle = styled.img`
  height: 20vh;
`;

export const LinkStyle2 = styled.a`
  text-decoration: none;
`;

export const ButtonStyle = styled.button`
  color: #2a435d;
  border: none;
  background-color: inherit;
  font-weight: bolder;
  font-size: large;
  :hover {
    cursor: pointer;
    color: #000000;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;
