import styled from "styled-components";

export const StyledCardTech = styled.div`
  color: #fff;
  background-color: var(--grey-3);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;

  p {
    font-size: 1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.7rem;
    font-weight: 500;
  }

  svg {
    height: 15px;
    width: 15px;
    color: #fff;
  }
  button {
    cursor: pointer;
    background-color: var(--grey-3);
    border: none;
  }
`;

export const ContainerTrash = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;
