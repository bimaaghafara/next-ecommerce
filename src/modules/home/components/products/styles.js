
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    products: {
        margin: '24px 0',
    },
    product: {
        position: 'relative',
        marginTop: 18
    },
    productImage: {
        paddingBottom: '40%',
    },
    productName: {
        textAlign: 'center',
        padding: 12
    },
    wishlistIcon: {
        bottom: 0,
        right: 0,
        position: 'absolute'
    }
}));

export default useStyles;