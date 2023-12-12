"use client"
import { useState } from "react"
import Image from 'next/image'
import styles from './page.module.css'
import Modal from './components/Modal'

export default function Home() {
  const [modalControl, setModalControl] = useState<boolean>(false)

 
console.log(modalControl)
  return (
    <div className="container">
      <button onClick={()=>setModalControl(true)}>Show Modal</button>
      {modalControl && <Modal onClose={()=>setModalControl(false)} />}
    </div>
  )
}
