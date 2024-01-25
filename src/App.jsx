import { Header } from './components/header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam a reprehenderit, quaerat aut, fugiat, eveniet ipsum culpa animi dicta unde dolor perspiciatis! Aliquid doloremque architecto, quae sequi alias inventore!" 
          />
          <Post 
            author="Dérick Trennepohl" 
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

