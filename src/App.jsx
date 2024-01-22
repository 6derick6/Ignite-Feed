import { Header } from './components/header'
import { Post } from './Post'
import './global.css'


export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam a reprehenderit, quaerat aut, fugiat, eveniet ipsum culpa animi dicta unde dolor perspiciatis! Aliquid doloremque architecto, quae sequi alias inventore!" 
      />
      <Post 
        author="Dérick Trennepohl" 
        content="Um novo post muito legal"
      />
    </div>
  )
}

