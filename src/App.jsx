import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem et cum itaque natus eos eaque, aperiam labore ad sunt. Odio beatae fugiat ipsa voluptatum quos accusamus consequatur praesentium dolore!"
          />
          <Post
            author="Gabriel Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem et cum itaque natus eos eaque, aperiam labore ad sunt. Odio beatae fugiat ipsa voluptatum quos accusamus consequatur praesentium dolore!"
          />
        </main>
      </div>
    </div>
  )
}