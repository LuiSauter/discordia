import { createPortal } from 'react-dom'

const Portal = ({ children, wrapperId = 'portal-root' }) => {
  return createPortal(children, document.getElementById(wrapperId))
}

export default Portal