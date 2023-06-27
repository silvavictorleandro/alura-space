import styles from "./Rodape.module.scss"
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";


import React from 'react'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__links}>
        <a href="/" className={styles.rodape__link}><img src={facebook} className={styles.rodape__imagem}></img></a>
        <a href="/" className={styles.rodape__link}><img src={twitter} className={styles.rodape__imagem}></img></a>
        <a href="/" className={styles.rodape__link}><img src={instagram} className={styles.rodape__imagem}></img></a>
      </div>
      <div>
        <p className={styles.rodape__texto}>Desenvolvidor por Alura.</p>
      </div>
    </footer>
  )
}
