import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ProductList from 'src/components/productList';
import { useRouter } from 'next/router';

const PurchaseHistoryPage = () => {
    const styles = useStyles();
    const router = useRouter();
    const products = useSelector((state) => state.productsCart || []);

    return (
        <div className={styles.purchaseHistoryPage}>
            <div>
                <IconButton className={styles.backIcon} onClick={router.back}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography className={styles.pageTitle} variant="h5">
                    Purchase History
                </Typography>
            </div>
            <ProductList products={products} />
        </div>
    );
};

export default PurchaseHistoryPage;