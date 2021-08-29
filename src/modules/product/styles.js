
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    productPage : {
        padding: '12px'
    },
    productImage: {
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBottom: '75%',
        position: 'relative',
        marginBottom: 18,
    },
    backIcon: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    shareIcon: {
        position: 'absolute !important',
        top: 0,
        right: 0
    },
    productName: {
        width: 'calc(100% - 48px)',
        display: 'inline-block',
        marginBottom: '12px !important',
    },
    wishlistButton: {
        display: 'inline-block',
        float: 'right',
        marginTop: '-12px !important',
    },
    stickyBottom: {
        height: 56,
        width: '100%',
        maxWidth: 480,
        position: 'fixed',
        bottom: 0,
        background: '#eee',
        width: '100%',
        marginLeft: -12,
        padding: 12
    },
    productPrice: {
        float: 'right',
        paddingRight: 16,
    },
    buyButton: {
        float: 'right',
        width: 125
    },
}));

export default useStyles;