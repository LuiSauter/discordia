import { useEffect, useRef } from 'react'
import Portal from '../Portal'

const Modal = ({ children, showModal = false, classSytle = 'bg-white p-5' }) => {
  const refModal = useRef(null)

  let cleanup = true
  useEffect(() => {
    if (cleanup) {
      showModal ? refModal.current.showModal() : refModal.current.close()
    }
    return () => {
      cleanup = false
    }
  }, [showModal])


  return (
    <Portal wrapperId='portal-root'>
      <dialog ref={refModal} id='dialog-server' className={`${classSytle} scrollbar-hidden w-full sm:w-[440px] h-min rounded-md select-none overflow-y-auto overflow-x-hidden`}>
        {children}
      </dialog>
    </Portal >
  )
}

export default Modal
