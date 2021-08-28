import Link from 'next/link';
import useStyles from './styles';

const ProductNotFound = () => {
    const styles = useStyles();

    const homepageLink = () => (
        <Link href="/">
            <a className={styles.homepageLink}>Homepage</a>
        </Link>
    );

    return (
        <div className={styles.productNotFound}>
            <h2 className={styles.sorry}>Sorry :(</h2>
            <div>We couldn`t find that product.</div>
            <div>Try searching or go to {homepageLink()}. </div> 
        </div>
    );
}

export default ProductNotFound;