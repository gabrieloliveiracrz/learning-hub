import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {
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
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário' />
                <footer>
                    <button type='submit'> Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                
            </div>
        </article>
    )
}