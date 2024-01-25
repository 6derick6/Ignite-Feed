import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/6derick6.png" />
                    <div className={styles.authorInfo}>
                        <strong>Dérick Trennepohl</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='24 de Janeiro às 22:18h' dateTime='2024-01-24 22:18:39'>Publicado há 1hr</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href=''>jane.design/doctorcare</a></p>
                <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}