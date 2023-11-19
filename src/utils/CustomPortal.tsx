import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface CustomPortalProps {
  children: ReactNode
}

const CustomPortal: React.FC<CustomPortalProps> = ({ children }) => {
  // The element to portal children to
  const modalRoot = document.getElementById('custom-portal')

  // Return null if 'custom-portal' doesn't exist
  if (!modalRoot) return null

  return ReactDOM.createPortal(children, modalRoot)
}

export default CustomPortal
