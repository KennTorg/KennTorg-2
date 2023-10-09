import styles from "./welcome.module.scss";

const Welcome = () => {
  return (
    <section id='home'>
      <div className={styles.welcome_message}>
        <h1>Hey, Welcome!</h1>
        <h2>My name is Kennet Torgersen</h2>
        <h2>This is my portfolio.</h2>
      </div>
    </section>
  );
};

export default Welcome;
