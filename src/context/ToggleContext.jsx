import { createContext, useState } from "react";

export const ToggleContext = createContext({})

export const ToggleContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false)

  const toggleMenu = () => setActiveMenu(!activeMenu)
  return (<ToggleContext.Provider value={{ activeMenu, toggleMenu }}>{children}</ToggleContext.Provider>)
}