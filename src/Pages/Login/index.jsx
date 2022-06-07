import { Fragment, useEffect } from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import Presentation from './Presentation'

const Login = () => {

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      document.querySelector('html').style.position = 'relative'
    }
    return () => {
      cleanup = false
    }
  }, [])

  return (
    <Fragment>
      <Header />
      <Hero />
      <Presentation />
    </Fragment>
  )
}

export default Login