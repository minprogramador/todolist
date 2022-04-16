import React from 'react';
import styles from './Footer.module.css';

interface Props {

}

const Footer = (props:Props) => {
    return (
        <footer className={styles.footer}>
            <p>
                <span>React + TS Todo @ 2022</span>
            </p>
        </footer>
    )
};

export default Footer;