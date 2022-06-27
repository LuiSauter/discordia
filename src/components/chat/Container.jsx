import { Menu } from '../../assets/icons/action'
import { useToggle } from '../../hooks/useToggle'

const Container = ({ children, header = 'Discordia', aside = false }) => {
  const { toggleMenu, activeMenu } = useToggle()
  return (
    <section className={`bg-discord_hover h-full w-full overflow-y-hidden relative flex flex-col md:pl-60 ${activeMenu && 'ml-[230px] sm:ml-[250px] min-w-[400px] scale-95 rounded-xl md:ml-0 md:scale-100 md:min-w-min md:rounded-none transition-all duration-100'} transform transition-transform duration-100`}>
      {activeMenu && <div className='absolute top-0 left-0 w-full h-full bg-discord_nav_server opacity-80 z-10 cursor-pointer md:hidden' onClick={toggleMenu} />}
      <header className='px-4 w-full border-b-2 border-discord_nav_server/50 hover:bg-discord_hover flex flex-row items-center justify-start gap-4 text-white transition-all'>
        <button onClick={toggleMenu} className='md:hidden hover:bg-discord_inputChat transition-colors duration-75 ease-out rounded-md px-2 py-[6px]'>
          <Menu />
        </button>
        <h3 className='text-white text-base font-bold my-3'>{header}</h3>
      </header>
      <main className='h-full w-full overflow-hidden flex flex-row relative text-white'>
        {children}
        {aside && <aside className='hidden w-[350px] p-5 lg:flex flex-col flex-shrink-0 h-full bg-discord_hover transition-all duration-150 border-l border-discord_gray/20'>
          <h3 className='w-full font-bold text-lg pb-5'>{aside}</h3>
          <p className='text-center'>
            <h4 className='font-bold'>Por ahora está todo tranquilo...</h4>
            <span className='font-light text-discord_gray text-sm leading-tight'>Cuando un amigo empiece a realizar una actividad, como jugar o hablar por voz, ¡te lo mostraremos aquí!</span>
          </p>
        </aside>}
      </main>
    </section>
  )
}

export default Container