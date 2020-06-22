import { FaRegTimesCircle } from 'react-icons/fa'
import styled from 'styled-components'

const CloseIcon = styled(FaRegTimesCircle)`
  position: absolute;
  cursor: pointer;
  color: ${(props) => props.color};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
`

export default CloseIcon
