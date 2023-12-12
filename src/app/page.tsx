import Image from 'next/image'
import styles from './page.module.css'
import Modal from './components/Modal'

export default function Home() {
  return (
    <div className="container">
      <button>Show Modal</button>
      <Modal />
    </div>
  )
}
