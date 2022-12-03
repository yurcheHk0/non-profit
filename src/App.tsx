import React from "react";

import { isMobile } from "react-device-detect";

import Header from "./components/Header";
import Home from "./components/Content/Home";
import Footer from "./components/Footer";

import styles from './App.module.scss';

function App() {
  return <div className={`${styles.app} ${isMobile ? styles.mobile : ''}`}>
      <header>
          <Header />
      </header>
      <main className={styles.main}>
          <Home />
      </main>
      <footer>
          <Footer />
      </footer>
    </div>;
}

export default App;
