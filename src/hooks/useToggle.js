import { useContext } from "react"
import { ToggleContext } from "../context/ToggleContext"

export const useToggle = () => {
  const { activeMenu, toggleMenu, showModal, toggleModal } = useContext(ToggleContext)
  return { activeMenu, toggleMenu, showModal, toggleModal }
}