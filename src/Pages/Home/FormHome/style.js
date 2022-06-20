import styled from "styled-components";

export const StyledFormHome = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;

  span {
    color: red;
    font-size: 0.685rem;
    font-weight: 200;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;

  width: 100%;
  background-color: var(--grey-2);
  border-radius: 4px;
  border: 2px solid var(--grey-1);

  input {
    background-color: var(--grey-2);
    width: 90%;
    border: none;
    color: var(--grey-1);
    padding: 5px;
    &:focus {
      background-color: var(--grey-2);
    }
  }

  svg {
    color: var(--grey-1);
    font-size: 1rem;
  }
`;
