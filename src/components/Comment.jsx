import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

import { Avatar } from '../components/Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabrieloliveiracrz.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Ferreira</strong>
                            <time
                                title='22 de Setembro às 9:05h'
                                dateTime='2024-09-22 09:05:20'
                            >
                                Cerca há 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}