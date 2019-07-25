import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;

    button {
      background: #7159c1;
      border: 0;
      padding: 10px;
      border-radius: 4px;
      color: #fff;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.08, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #ccc;

    button {
      border: 0;
      background: #fff;
      padding: 6px;
      color: #7159c1;

      svg {
        
      }
    }
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    margin-top: 5px;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
    button {
      border: 0;
      background: #fff;
      padding: 6px;
      color: #7159c1;
    }
  }
`;

export const Total = styled.div`
  span {
    font-size: 12px;
    margin-right: 5px;
    color: #999;
  }

  strong {
    font-size: 25px;
    color: #333;
  }
`;
