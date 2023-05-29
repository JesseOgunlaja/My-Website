import Meta from "@/components/Meta";
import styles from "@/styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const sentFormCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sentForm="));

    if (sentFormCookie && sentFormCookie.split("=")[1] === "1") {
      setSubmitted(true);
    }
  }, []);

  function submitForm(e) {
    e.preventDefault();
    const now = new Date();
    const expires = new Date(now.getTime() + 60 * 60 * 1000);
    const expiresString = expires.toUTCString();
    document.cookie = `sentForm=1; expires=${expiresString}; path=/`;
    setSubmitted(true);

    emailjs
      .sendForm(
        "service_qt8bik7",
        "template_ck5qh7r",
        form.current,
        "SWBcr0pFf3wH4zk_K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <Meta title="Contact Me" />
      {submitted ? (
        <p className={styles.endMessage}>Thanks for submitting a message</p>
      ) : (
        <div className={styles.container}>
          <h4 className={styles.contact}>Contact Me</h4>
          <form onSubmit={submitForm} ref={form} className={styles.form}>
            <div className={styles.name}>
              <input
                name="first_name"
                className={styles.firstname}
                required
                type="text"
                placeholder="First Name"
              />
              <input
                name="last_name"
                className={styles.lastname}
                required
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              name="email"
              className={styles.email}
              type="text"
              placeholder="Email"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              className={styles.message}
            ></textarea>
            <input className={styles.submit} type="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default contact;
