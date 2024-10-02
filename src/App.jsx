import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guedonotfound.png',
      name: 'Gabriel Guedes',
      role: "Rock"
    },
    content: [
      {type : 'paragraph', content: 'Fala galeraa 👋'},
      {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type : 'link', content: 'jane.design/doctorcare'},     
    ],
    publishedAt: new Date('2024-09-28 19:45:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/vraulista.png',
      name: 'João Henrique',
      role: "Estudante"
    },
    content: [
      {type : 'paragraph', content: 'Fala galeraa 👋'},
      {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type : 'link', content: 'jane.design/doctorcare'},     
    ],
    publishedAt: new Date('2024-10-01 19:45:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}