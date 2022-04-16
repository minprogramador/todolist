import React from 'react';
import './App.css';
import styles from './App.module.css';
//components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <div>
     <Header/>
     <main className={styles.main}>
     <h1>
       Conteudo...
     </h1>
     </main>
    <Footer/>
     
   </div>
  );
}

export default App;
