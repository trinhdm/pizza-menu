import type { FC } from 'react'
import { redirect } from 'next/navigation'
// import styles from './page.module.css'


const Home: FC = () => redirect(`/${process.env.RESOURCE}`)

export default Home
