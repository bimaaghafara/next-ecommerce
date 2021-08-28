
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    products : {
        marginTop: 24,
    },
    productImage: {
        paddingBottom: '40%',
    },
    productName: {
        textAlign: 'center',
        padding: 12
    },
    wishlistIcon: {
        float: 'right'
    }
}));

export default useStyles;