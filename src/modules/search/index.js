/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';
import ProductList from 'src/components/productList';

const SearchPage = () => {
    const styles = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const searchTextFieldRef = useRef();
    const [querySearch, setQuerySearch] = useState('');

    const getProducts = async () => {
        // handling products data when ssr redirect / reload page
        const res = await fetch('https://private-4639ce-ecommerce56.apiary-mock.com/home');
        const data = await res.json();
        const products = data && data[0] && data[0].data && data[0].data.productPromo;
        dispatch({ type: 'SET_PRODUCTS', payload: products });
    }

    useEffect(() => {
        // autofocus search text field when did mount
        searchTextFieldRef.current.focus();
        if (!(products && products.length)) getProducts()
    }, []);

    return (
        <div className={styles.searchPage}>
            <Head>
                <title>Search</title>
                <meta name="description" content="Search Page" />
            </Head>
            <div>
                <IconButton className={styles.backIcon} onClick={router.back}>
                    <ArrowBackIcon />
                </IconButton>
                <TextField
                    inputRef={searchTextFieldRef}
                    className={styles.searchTextField}
                    id="search-input"
                    variant="outlined"
                    size="small"
                    value={querySearch}
                    onChange={(e) => setQuerySearch(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>,
                    }}
                />
            </div>
            <div>
                <ProductList
                    products={
                        products.filter(product => {
                            const title = product.title.toLowerCase();
                            const query = querySearch.toLowerCase();
                            return query && title.includes(query);
                        })
                    }
                />
            </div>
        </div>
    );
};

export default SearchPage;