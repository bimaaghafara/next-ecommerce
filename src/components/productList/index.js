/* eslint-disable @next/next/no-img-element */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import { useRouter } from 'next/router';

const ProductList = ({ products }) => {
    const styles = useStyles();
    const router = useRouter();

    return (
        <List>
            {products.map((product, i) => (
                <ListItem
                    key={i}
                    className={styles.product}
                    button
                    onClick={() => router.push({
                        pathname: '/product',
                        query: { data: JSON.stringify(product) },
                    })}
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

export default ProductList;