import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Gabriel Ferreira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem et cum itaque natus eos eaque, aperiam labore ad sunt. Odio beatae fugiat ipsa voluptatum quos accusamus consequatur praesentium dolore!"
      />
    </div>
  )
}