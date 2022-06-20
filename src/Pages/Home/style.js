import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);
  padding: 20px;
  max-width: 400px;
  justify-self: center;
  margin: 0 auto;

  h3 {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--grey-0);
  }
  label {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--grey-0);

    align-self: flex-start;
  }

  button {
    align-self: center;
    width: 100%;
    border: none;
    border-radius: 8px;
  }

  p {
    color: var(--grey-1);
    margin: 20px 0px;
  }
`;

export const Logo = styled.img`
  width: 8rem;
  margin: 1rem 0;
`;
