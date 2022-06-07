import { createContext, useEffect, useState } from "react";

export const ToggleContext = createContext({})

export const ToggleContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggleMenu = () => setActiveMenu(!activeMenu)
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      if (typeof document !== 'undefined') {
        const dialog = document.getElementById('dialog-server')
        showModal ? dialog.showModal() : dialog.close()
      }
    }
    return () => {
      cleanup = false
    }
  }, [showModal])


  return (<ToggleContext.Provider value={{ activeMenu, toggleMenu, showModal, toggleModal }}>{children}</ToggleContext.Provider>)
}