import { useState } from 'react'
import { useSelector } from 'react-redux'
import { serverImages } from '../../assets/data/serverImages'
import { useToggle } from '../../hooks/useToggle'
import { createServer } from '../../services'
import Modal from '../Modal'

const CreateServer = () => {
  const { toggleModal, showModal } = useToggle()
  const [formState, setFormState] = useState({ serverName: '', image: '' })
  const { data } = useSelector(state => state.user)
  const handleChange = (e) => {
    setFormState(prevState => ({ ...prevState, image: e.target.value }))
  }

  const handleInputText = (e) => {
    setFormState(prevState => ({ ...prevState, serverName: e.target.value.trim() }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createServer({ ...formState, userId: data._id }).then(data => {
      if (data === 201 && typeof document !== 'undefined') {
        window.location.reload()
      }
    })
  }

  return (
    <Modal showModal={showModal}>
      <header className='grid place-content-center place-items-center'>
        <h2 className='text-2xl font-bold py-1'>Personaliza tu servidor</h2>
        <p className='text-slate-500 text-sm text-center'>Dale una personalidad propia a tu nuevo servidor con un nombre y un icono. Siempre puedes cambiarlo más tarde.</p>
        <span className='font-medium pt-3'>Selecciona una imagen:</span>
        <div className='flex flex-row relative w-full h-auto justify-center items-center gap-1 py-4'>
          {Object.keys(serverImages).map((imgkey, index) => (
            <label key={index} className='cursor-pointer hover:scale-105 transition-all duration-150 ease-out'>
              <figure className={`${formState.image === imgkey && 'ring-2 ring-discord_blue_btn scale-105'} rounded-xl p-1 h-auto flex flex-col justify-center items-center relative`}>
                <input type="radio" name='server-image' value={imgkey} className='hidden' onChange={handleChange} />
                <img src={serverImages[imgkey]} alt={imgkey} className='w-20 h-auto mb-3 rounded-full' />
                <figcaption className='font-medium'>{imgkey}</figcaption>
              </figure>
            </label>
          ))}
        </div>
      </header>
      <section>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <h3 className='text-slate-600 text-xs font-semibold py-2'>NOMBRE DEL SERVIDOR</h3>
          <input onInput={handleInputText} type="text" required autoFocus minLength={1} className='px-4 py-2 text-slate-600 outline-none bg-sky-200/60 rounded-md' />
          <span className='text-gray-400 text-xs pt-2'>Al crear un servidor, aceptas las Directivas de la comunidad de discordia</span>
          <footer className='w-full flex flex-row justify-between pt-7'>
            <button type='button' onClick={toggleModal} className='px-8 py-2 rounded-md'>Cancelar</button>
            <button type='submit' disabled={formState.image === '' || formState.serverName === ''} className='bg-discord_blue_btn disabled:opacity-80 disabled:hover:bg-discord_blue_btn px-8 py-2 text-white rounded-md hover:bg-discord_blue transition-colors duration-150 ease-out'>Crear</button>
          </footer>
        </form>
      </section>
    </Modal>
  )
}

export default CreateServer
