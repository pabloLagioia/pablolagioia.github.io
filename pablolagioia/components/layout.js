import Head from 'next/head'
import Navbar from './navbar'
import Profile from './profile'
import { useState } from 'react'
import { useRouter } from 'next/router';

export default function Layout({ children }) {

  const [theme, setTheme] = useState('dark')

  const isDarkThemeUsed = () => theme === 'dark'
  const isHome = () => pathname === "/"
  const toggleTheme = () => setTheme(isDarkThemeUsed() ? 'light' : 'dark')
  const { pathname } = useRouter()

  return (
    <section className={`${theme} flex no-padding full-height`}>
      <label className='toggle-theme' onClick={toggleTheme}>
        <input type="checkbox" value={isDarkThemeUsed() ? true : false}/> Dark
      </label>
      <Head>
        <title>Pablo Lagioia</title>
        <meta name="description" content="Pablo Lagioia's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Profile large={isHome()} />
      <main className={`${isHome() ? "hidden" : ""} full-height-scrollable flex-grow-1`}>{children}</main>
    </section>
  )
}