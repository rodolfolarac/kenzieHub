import styled from "styled-components";

export const StyledScreenAdd = styled.div`
  width: 300px;
  background-color: var(--grey-3);
  color: #fff;
  position: absolute;
  top: 34%;
  left: 50%;
  padding: 20px;
  transform: translateX(-50%);
  border-radius: 8px;
`;

export const StyledHead = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  p {
    font-size: 0.875rem;
    font-weight: 700;
  }

  svg {
    font-weight: 600;
    color: var(--grey-1);
    cursor: pointer;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    font-size: 0.7rem;
  }

  input,
  select {
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 10px;
  }
`;
