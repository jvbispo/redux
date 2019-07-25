import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: opacity 0.2s;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 5px;

  &:hover {
    opacity: 0.7;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5px;
    strong {
      font-size: 10px;
    }
    span {
      font-size: 10px;
    }
  }
`;
