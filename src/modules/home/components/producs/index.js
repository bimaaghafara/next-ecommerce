/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Products = () => {
    const styles = useStyles();
    const products = useSelector((state) => state.products);

    const onClickWishlist = (e, product) => {
        e.stopPropagation();
        console.log('wishlist', product);
    }

    return (
        <div className={styles.products}>
            {products.map((product, i) => (
                <div key={i}>
                    <Card className={styles.products} onClick={() => console.log(product)}>
                        <CardActionArea>
                            <CardMedia
                                className={styles.productImage}
                                image={product.imageUrl}
                                title={product.title}
                            />
                            <CardContent>
                                <IconButton
                                    className={styles.wishlistIcon}
                                    aria-label="add to favorites"
                                    onClick={(e) => onClickWishlist(e, product)}
                                >
                                    <FavoriteIcon />
                                </IconButton>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
      </div>
    );
};

export default Products;