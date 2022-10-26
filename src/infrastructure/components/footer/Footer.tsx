import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <address>ISDI Coders</address>
            <p>{new Date().toLocaleDateString()}</p>
        </footer>
    );
}
