import styles from "./work.module.scss";

const Work = () => {
  return (
    <section id='work' className={styles.work_container}>
      <h2>My Work</h2>
      <div className={styles.work_cards}>
        <div className={styles.work_card}>
          <img src='/emarket.png' alt='emarket frontpage' />

          <h3>Emarket</h3>
          <p>
            Emarket provides a platform for users to both sell and browse a wide
            range of items.
          </p>
          <a href='https://react-emarket.netlify.app'>
            <button>Netlify</button>
          </a>
          <a href='https://github.com/KennTorg/JSFrameworks'>
            <button>Github</button>
          </a>
        </div>
        <div className={styles.work_card}>
          <img src='/oah.png' alt='oah! frontpage' />

          <h3>Online Auction House!</h3>
          <p>
            This web application allowing logged-in users to both list items for
            sale and participate in bidding.
          </p>
          <a href='https://sp2-auction.netlify.app/'>
            <button>Netlify</button>
          </a>
          <a href='https://github.com/KennTorg/Auction_House'>
            <button>Github</button>
          </a>
        </div>
        <div className={styles.work_card}>
          <img src='/holidaze.png' alt='holidaze frontpage' />

          <h3>Holidaze</h3>
          <p>
            Users have the option to register as either a venue manager or a
            regular user. You can also make bookings and effectively manage your
            own venues.
          </p>
          <a href='https://holidaze-pe2-noroff.netlify.app'>
            <button>Netlify</button>
          </a>
          <a href='https://github.com/KennTorg/project-exam-2'>
            <button>Github</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
