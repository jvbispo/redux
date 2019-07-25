import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  li {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
      padding: 20px 20px;
    }

    > strong {
      margin-top: 5px;
      line-height: 20px;
      color: #333;
    }

    > span {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 5px 5px 0;
      border-radius: 4px;
      background: #7159c1;
      padding: 0 12px 0 0;
      color: #fff;
      border: 0;
      margin-top: auto;
      overflow: hidden;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.04, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        padding: 12px;
        margin: 0;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
