import NavBar from './components/NavBar'
import './globals.css'
import { Rubik } from 'next/font/google'


const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Anreise Assistent',
  description: 'Anreise Assistent für das Hotel STRAND am Königshafen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={rubik.className}>
        
        {children}
        </body>
    </html>
  )
}
