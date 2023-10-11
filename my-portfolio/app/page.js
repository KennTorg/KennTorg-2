import React from "react";

import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Work from "./components/work";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";

import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Header />
      <Welcome />
      <About />
      <Work />
      <ContactForm />
      <Footer />
    </div>
  );
}
