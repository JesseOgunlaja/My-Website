import Link from "next/link";
import styles from "@/styles/Projects.module.css";
import Image from 'next/image'
import Meta from "@/components/Meta";

const projects = () => {
  return (
    <div>
      <style jsx>{``}</style>
      <Meta title="My Projects" />
      <div className={styles.container}>
        <div className={styles.links}>
            <Link className={[`${styles.link} ${styles.hidden}`]} href={"/memoryGame"}>
          <div className={styles.game}>
              Memory Game
            <Image height="350"width="350" className={styles.img} src="/memory.png" />
          </div>
            </Link>
          <Link className={styles.link} href={"/ticTacToe"}>
          <div className={[`${styles.game} ${styles.ticTacToe}`]}>
            Tic Tac Toe
          <Image width="276" height="250" className={styles.img} src="/ticTacToe.png"/>
          </div>
          </Link>
          <Link className={styles.link} href={"/calculator"}>
          <div className={styles.game}>
            Calculator
          <Image height="250" width="158" className={styles.img} src="/calculator.png"/>
          </div>
          </Link>
          <Link className={styles.link} style={{flexDirection: 'column'}} href={"/quizGame"}>
          <div className={styles.game}>
            Quiz Game
          </div>
          <Image height="350"width="350" className={[`${styles.game} ${styles.quizGame}`]} src="/quiz.png"/>
          </Link>
          <Link className={[`${styles.link} ${styles.hidden}`]} href={"/rockPaperScissors"}>
          <div className={styles.game}>
            Rock Paper Scissors
          <Image width="258" height="262" className={styles.img} src="/rps.png"/>
          </div>
          </Link>
          <Link className={[`${styles.link} ${styles.hidden}`]} href={"/hangman"}>
          <div className={styles.game}>
            Hangman
            <Image height="250" width="218" src="/hangman.jpg"/>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default projects;
