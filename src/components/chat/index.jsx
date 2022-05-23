import React from 'react'

const Chat = () => {
  return (
    <section className='bg-discord_hover h-full min-h-screen w-full overflow-hidden relative flex flex-col md:pl-60 transition-all duration-150'>
      <header className='py-3 px-4 w-full border-b-2 border-discord_nav_server/50 hover:bg-discord_hover flex flex-row items-center justify-between text-white transition-all'>
        <h3 className='text-white text-base font-bold'>Developers</h3>
      </header>
      <main className='h-full overflow-hidden flex flex-row relative text-white'>
        <div className='w-full overflow-hidden flex flex-col relative justify-end'>
          <div className='w-full h-full overflow-y-auto mb-16'>
            {largeText}
          </div>
          <div className='h-16 w-full bg-discord_server absolute bottom-0 left-0'>sticky</div>
        </div>
        <aside className='hidden w-56 lg:flex flex-shrink-0 h-full bg-discord_channels_bg transition-all duration-150'>
          ass
        </aside>
      </main>
    </section>
  )
}

export default Chat

const largeText = ` leading-normal
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

leading-relaxed
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

leading-loose
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
leading-normal
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

leading-relaxed
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

leading-loose
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
leading-normal
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

leading-relaxed
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

leading-loose
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.`
