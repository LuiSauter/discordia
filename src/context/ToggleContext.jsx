import { createContext, useState } from "react";

export const ToggleContext = createContext({})

export const ToggleContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggleMenu = () => setActiveMenu(!activeMenu)
  const toggleModal = () => setShowModal(!showModal)

  return (<ToggleContext.Provider value={{ activeMenu, toggleMenu, showModal, toggleModal }}>{children}</ToggleContext.Provider>)
}