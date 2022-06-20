import styled from "styled-components";

export const StyledWelcomeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 10px 10px;
  border-bottom: 1px solid var(--grey-2);

  p {
    font-size: 1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.7rem;
    font-weight: 600;
    width: 150px;
  }
`;
