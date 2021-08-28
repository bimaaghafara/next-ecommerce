/* eslint-disable react-hooks/exhaustive-deps */
import useStyles from './styles';
import { useRouter } from 'next/router';
import ProductNotFound from './components/productNotFound';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ProductPage = () => {
    const styles = useStyles();
    const router = useRouter();
    const data = router && router.query && router.query.data;
    let product;
    try {
        product = JSON.parse(data);
        console.log(product);
    } catch {
        return <ProductNotFound />
    }

    return (
        <div className={styles.productPage}>
            <div
                className={styles.productImage}
                style={{ backgroundImage: `url('${product.imageUrl}')` }}
            >
                <IconButton className={styles.backIcon} onClick={router.back}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ProductPage;