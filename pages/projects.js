import Link from "next/link"
import styles from '@/styles/Projects.module.css'
import Meta from "@/components/Meta"

const projects = () => {
  return (
    <div>
      <Meta title="My Projects"/>
      <div className={styles.container}>
      <div className={styles.links}>
        <Link className={styles.link} href={'/memoryGame'}>Memory Game</Link>
        <Link className={styles.link} href={'/ticTacToe'}>Tic Tac Toe</Link>
        <Link className={styles.link} href={'/calculator'}>Calculator</Link>
        <Link className={styles.link} href={'/quizGame'}>Quiz Game</Link>
        <Link className={styles.link} href={'/rockPaperScissors'}>Rock Paper Scissors</Link>
        <Link className={styles.link} href={'/hangman'}>Hangman</Link>
      </div>
      </div>
    </div>
  )
}

export default projects