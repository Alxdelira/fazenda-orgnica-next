import styles from "./styles.module.scss";

export default function Titulo({titulo}) {
    return (
        <>
        <div className={styles.container}>
            <img className={styles.imagem} src="/assets/img/image9.png" alt="fundo" />
            <img className={styles.logo} src="/assets/img/logo.svg" alt="Logo" />
            <h1 className={styles.titulo}>{titulo}</h1>
        </div>
        </>
    );
}