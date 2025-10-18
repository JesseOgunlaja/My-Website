import styles from "@/styles/main.module.css";
import Projects from "./Projects";
import Spinner from "./Spinner";

const Main = () => {
  return (
    <main className={styles.main}>
      <section>
        <p>
          <span>
            <span>Startup Builder</span>
            <span>
              &
              <Spinner />
            </span>
          </span>
          <span>
            <span>Fullstack Developer</span>
          </span>
        </p>
        <p>
          I&apos;m Jesse Ogunlaja, a fullstack developer and startup builder - I
          founded Streamthing, a startup to implement real-time features on the
          web. I build startups which attempt to solve problems real people are
          facing.
        </p>
      </section>
      <Projects />
    </main>
  );
};

export default Main;
