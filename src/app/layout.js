import './globals.css'
import Header from "./Header";
import LoginScreen from "./LoginScreen";
import {authOptions} from "@/libs/authOptions";
import {getServerSession} from "next-auth";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rank Tracker',
  description: 'Track SEO Rank',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        {!session && (
          <LoginScreen />
        )}
        {session && (
          <div className="max-w-lg mx-auto">
            <Header />
            {children}
          </div>
        )}
      </body>
    </html>
  )
}
