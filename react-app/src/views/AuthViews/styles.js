import styled from 'styled-components'
import img from '../../assets/images/logo.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
export const FormContainer = styled.form`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 50px;
  color: var(--pantone);
  font-weight: 500;
  letter-spacing: -0.04em;
  margin: 0;
`;
export const Subtitle = styled.h3`
  font-size: 28px;
  color: var(--tertiaryBlack);
  font-weight: 400;
  letter-spacing: -0.04em;
  margin: 15px 0;
`;
export const Logo = styled.div`
  background-image: url("${img}");
  width: 350px;
  height: 130px;
`;
export const Anchor = styled.a`
  color: var(--crimson);
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
`