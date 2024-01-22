import { Post } from './Post'

export function App() {
  return (
    <div>
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

