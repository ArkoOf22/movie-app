import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`

export const Content = styled.div`
  display: flex;
  width: 100%auto;
  max-width: var(max-Width);
  padding: 0 20px;

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }

  .link {
    text-decoration: none;
    cursor: pointer;
  }
`
