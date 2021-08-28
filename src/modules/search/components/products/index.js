/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';

const Products = ({ products }) => {
    const styles = useStyles();

    const onClickWishlist = (e, product) => {
        e.stopPropagation();
        console.log('wishlist', product);
    }

    return (
        <List className={styles.products}>
            {products.map((product, i) => (
                <ListItem
                    key={i}
                    className={styles.product}
                    button
                    onClick={(e) => console.log(product)}
                >
                    <ListItemAvatar>
                        <Avatar variant="square" className={styles.productAvatar}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url('${product.imageUrl}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={product.title} secondary={product.price} />
                </ListItem>
            ))}
      </List>
    );
};

export default Products;