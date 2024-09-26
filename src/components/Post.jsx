import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/vraulista.png" />

                    <div className={styles.authorInfo}>
                        <strong>João Henrique</strong>
                        <span>Estudante</span>
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
                <p>
                    <a href="">#novoprojeto</a>
                    <a href=""> #nlw </a>
                    <a href=""> #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário' />
                <footer>
                    <button type='submit'> Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}