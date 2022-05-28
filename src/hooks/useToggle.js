import { useContext } from "react"
import { ToggleContext } from "../context/ToggleContext"

export const useToggle = () => {
  const { activeMenu, toggleMenu } = useContext(ToggleContext)
  return { activeMenu, toggleMenu }
}