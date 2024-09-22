import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/93164702?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Ferreira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>



                <time
                    title='22 de Setembro às 9:05h'
                    dateTime='2024-09-22 09:05:20'
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz  </p>no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}