import { useState } from "react"
import { LogoHome } from "../../assets/icons/presentation/LogoHome"
import Container from "../../components/chat/Container"

const AddFriend = () => {
  const [formState, setFormState] = useState({ username: '' })

  const handleChange = (e) => {
    setFormState({ username: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <Container header='Amigos' aside='Activo ahora'>
      <section className='flex flex-col h-full w-full'>
        <article className='w-full px-8 py-5 flex flex-col gap-3 border-b border-discord_gray/20'>
          <h2 className='font-bold text-base'>AÑADIR AMIGO</h2>
          <span className="text-sm text-discord_gray font-light">Puedes añadir a un amigo con su Discord Tag. ¡Distingue entre mAyÚsCuLaS y MiNúScUlAs!</span>
          <form onSubmit={handleSubmit} className='flex flex-row justify-between w-full mt-2 py-2 px-3 focus-within:ring-1 ring-sky-400 bg-discord_nav_server rounded-md'>
            <input type="text" placeholder="Introduce un nombre de usuario" value={formState.username} onChange={handleChange} className="w-full bg-inherit outline-none pr-2" />
            <button className="w-min bg-discord_blue_btn py-1 px-3 rounded-md whitespace-nowrap">Enviar solicitud de amistad</button>
          </form>
        </article>
        <div className='w-full min-w-[300px] h-full grid place-content-center place-items-center'>
          <figure className='relative w-72 md:w-96 h-auto'>
            <LogoHome />
          </figure>
        </div>
      </section>
    </Container>
  )
}

export default AddFriend