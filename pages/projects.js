import Link from "next/link";
import styles from "@/styles/Projects.module.css";
import Meta from "@/components/Meta";

const projects = () => {
  return (
    <div>
      <style jsx>{``}</style>
      <Meta title="My Projects" />
      <div className={styles.container}>
        <div className={styles.links}>
            <Link className={styles.link} href={"/memoryGame"}>
          <div className={styles.game}>
              Memory Game
            <img className={styles.img} src="/memoryGame.png" />
          </div>
            </Link>
          <Link className={styles.link} href={"/ticTacToe"}>
          <div className={styles.game}>
            Tic Tac Toe
          <img className={styles.img} src="/ticTacToe.png"/>
          </div>
          </Link>
          <Link className={styles.link} href={"/calculator"}>
          <div className={styles.game}>
            Calculator
          <img className={styles.img} src="/calculator.png"/>
          </div>
          </Link>
          <Link className={styles.link} href={"/quizGame"}>
          <div className={styles.game}>
            Quiz Game
          </div>
          <img className={[`${styles.game} ${styles.quizGame}`]} src="/quiz.png"/>
          </Link>
          <Link className={styles.link} href={"/rockPaperScissors"}>
          <div className={styles.game}>
            Rock Paper Scissors
          <img className={styles.img} src="/rps.png"/>
          </div>
          </Link>
          <Link className={styles.link} href={"/hangman"}>
          <div className={styles.game}>
            Hangman
          <img className={styles.img} src="/hangman.png"/>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default projects;
