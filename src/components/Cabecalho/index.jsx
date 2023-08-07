import Link from "next/link";
import styles from "./styles.module.scss";


export default function Cabecalho() {
    return (
        <>
            <ul className={styles.menu}>
                <li className={styles.tags}>
                    <Link
                        href="/"
                        className={styles.link}
                    >
                        Home
                    </Link>
                </li>
                <li className={styles.tags}>
                    <Link href="/produtos"
                        className={styles.link}
                    >
                        Produtos
                    </Link>
                </li>
                <li className={styles.tags}>
                    <Link href="/sobre"
                        className={styles.link}
                    >
                        Quem Somos!
                    </Link>
                </li>
            </ul>
        </>
    );
}