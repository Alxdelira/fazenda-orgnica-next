import Link from 'next/link';
import styles from './styles.module.scss';

const ApiCard = [
    {
        id: 1,
        imagem: './assets/img/1.png',
        titulo: 'Produção de Uva',
        descricaco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        produto: 'uva'
    },
    {
        id: 2,
        imagem: './assets/img/2.png',
        titulo: 'Gado de Corte',
        descricaco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        produto: 'boi'
    },
    {
        id: 3,
        imagem: './assets/img/3.png',
        titulo: 'Produção de Laranja',
        descricaco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        produto: 'laranja'
    },
    {
        id: 4,
        imagem: './assets/img/4.png',
        titulo: 'Caprinos',
        descricaco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        produto: 'bode'
    },
    {
        id: 5,
        imagem: './assets/img/5.png',
        titulo: 'Produção de ovos',
        descricaco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        produto: 'ovos'
    },
    {
        id: 6,
        imagem: './assets/img/6.png',
        titulo: 'Produção de Tomate',
        descricaco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        produto: 'tomate'
    },
    {
        id: 7,
        imagem: './assets/img/7.png',
        titulo: 'Hortifruti',
        descricaco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        produto: 'hortifruti'
    },
   
];

export default function Cards  () {
    return (
        <div className={styles.cards}>
            {ApiCard.map((item) => (
                <div key={item.id} className={styles.card}>
                    <div className={styles.cardsTitulo}>
                        <img className={styles.imagem} src={item.imagem} alt={`imagem de ${item.titulo}`} />
                        <p className={styles.titulo}>{item.titulo}</p>
                    </div>
                    <div className={styles.content}>
                        <p>{item.descricaco}</p>
                    </div>
                    <div className={styles.button}>
                        <Link  href={`/produto/${item.produto}`} className={styles.buttonText}>
                            Saiba mais
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

 

