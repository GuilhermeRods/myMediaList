import styled from 'styled-components'

const Line = styled.div`
  width: 70%;
  height: 2px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`

export default Line
