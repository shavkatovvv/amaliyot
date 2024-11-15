import React from 'react'
import { Header } from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
