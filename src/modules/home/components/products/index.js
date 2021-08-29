/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { useRouter } from 'next/router';
import { useWishlist } from 'src/modules/wishlist/useWishlist';

const ProductCard = ({ product }) => {
    const styles = useStyles();
    const router = useRouter();
    const { isWishlist, handleAddToWishlist } = useWishlist(product);

    return (
        <>
            <Card onClick={() => router.push({
                pathname: '/product',
                query: { data: JSON.stringify(product) },
            })}>
                <CardActionArea>
                    <CardMedia
                        className={styles.productImage}
                        image={product.imageUrl}
                        title={product.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <IconButton
                className={styles.wishlistIcon}
                aria-label="add to favorites"
                onClick={handleAddToWishlist}
            >
                {isWishlist() ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
            </IconButton>
        </>
    )
}

const Products = () => {
    const styles = useStyles();
    const products = useSelector((state) => state.products || []);

    return (
        <div className={styles.products}>
            {products.map((product, i) => (
                <div key={i} className={styles.product}>
                    <ProductCard product={product} />
                </div>
            ))}
      </div>
    );
};

export default Products;