/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import useStyles from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import ProductNotFound from './components/productNotFound';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useWishlist } from 'src/modules/wishlist/useWishlist';

const ProductContent = ({ product }) => {
    const styles = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const { isWishlist, handleAddToWishlist } = useWishlist(product);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleBuy = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        setAlertMessage('Success add to cart!');
        setShowAlert(true);
    }

    return (
        <div className={styles.productPage}>
            <Head>
                <title>Product</title>
                <meta name="description" content="Product Page" />
            </Head>
            <Snackbar
                open={showAlert} autoHideDuration={2500}
                onClose={() => setShowAlert(false)}
            >
                <MuiAlert elevation={6} variant="filled" onClose={() => setShowAlert(false)} severity="success">
                    {alertMessage}
                </MuiAlert>
            </Snackbar>
            <div
                className={styles.productImage}
                style={{ backgroundImage: `url('${product.imageUrl}')` }}
            >
                <IconButton className={styles.backIcon} onClick={router.back}>
                    <ArrowBackIcon />
                </IconButton>
                <IconButton className={styles.shareIcon} onClick={() => {
                    setAlertMessage('Success share!');
                    setShowAlert(true);
                }}>
                    <ShareIcon />
                </IconButton>
            </div>
            <div>
                <Typography className={styles.productName} variant="h5">
                    {product.title}
                </Typography>
                <IconButton className={styles.wishlistButton} onClick={handleAddToWishlist}>
                    {isWishlist() ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
                </IconButton>
            </div>
            <div>
                <Typography className={styles.productDesc} variant="body1" align="justify">
                    {product.description}
                </Typography>
            </div>
            <div style={{ width: '100%', height: 56 }} />
            <div className={styles.stickyBottom}>
                <Button
                    className={styles.buyButton}
                    variant="contained"
                    color="primary"
                    onClick={handleBuy}
                    disabled={showAlert && alertMessage && alertMessage.includes('cart')}
                >
                    Buy
                </Button>
                <Typography className={styles.productPrice} variant="h5">
                    {product.price}
                </Typography>
            </div>
        </div>
    )
}

const ProductPage = () => {
    const router = useRouter();
    const data = router && router.query && router.query.data;
    let product;
    try {
        product = JSON.parse(data);
        return <ProductContent product={product} />
    } catch {
        return <ProductNotFound />
    }
};

export default ProductPage;