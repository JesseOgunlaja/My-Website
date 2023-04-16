import styles from "@/styles/About.module.css";
import Meta from "@/components/Meta";

const about = () => {
  return (
    <div>
      <Meta title="About Me" />
      <div className={styles.aboutMe}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.paragraph}>
          <div className={styles.text}>
          I started coding in year 3, but all I did was scratch. It was a good
          introduction for me as it taught me basic programming principles such
          as variables and so on. After a bit, I moved on to C++ which is
          avoided due to it being extremely hard. However, I did not know this
          at the time. I built a lot of small beginner apps such as an adventure
          game and a chatbot which helped to further my knowledge on more
          programming principles such as conditionals and variable types. After
          a while ,I became bored of C++ and wanted to make something that you
          could properly see, like a website. I then started learning HTML and
          CSS. After some time, I learnt JavaScript, which didn’t take too long
          seeming as some of it was identical to C++. After a while I wanted to
          further my JavaScript knowledge, so I learnt React which allowed me to
          create a lot of apps such as a memory game and a calculator. I was
          happy as to where I was, but I still wanted to further my knowledge,
          so I learnt TypeScript and the Next JS. Typescript is JavaScript but
          with extra features such as being able to make statically typed
          variables allowing type safety and improved IntelliSense. Next JS
          allows you to easily create page routes and is what I’m using to make
          this website.
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
