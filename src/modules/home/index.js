import React from 'react';
import Head from 'next/head';
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';
import useStyles from './styles';
import Categories from './components/categories';
import Products from './components/products';
import BottomNav from './components/bottomNav';

const HomePage = (props) => {
    const styles = useStyles();
    const router = useRouter();

    return (
        <div className={styles.homePage}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home Page" />
            </Head>
            <div>
                {/* <FavoriteIcon className={styles.favoriteIcon}/> */}
                <IconButton onClick={() => router.push('/wishlist')}>
                    <FavoriteIcon className={styles.favoriteIcon}  />
                </IconButton>
                <TextField
                    className={styles.searchTextField}
                    id="search-input"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>,
                    }}
                    onClick={() => router.push('/search')}
                />
            </div>
            <Categories />
            <Products />
            <BottomNav />
        </div>
    )
}

export default HomePage;