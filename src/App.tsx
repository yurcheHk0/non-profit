import React from "react";

import Header from "./components/Header";
import Home from "./components/Content/Home";
import Footer from "./components/Footer";

import styles from './App.module.scss';

function App() {
  return <div className={`${styles.app}`}>
      <header>
          <Header />
      </header>
      <main>
          <Home />
      </main>
      <footer>
          <Footer />
      </footer>
    </div>;
}

export default App;
