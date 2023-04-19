import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/layouts/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header title='My Page' />
      <main>
        <h1>Home</h1>
      </main>
    </>
  )
}
