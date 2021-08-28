
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
        position: 'relative'
    },
    backIcon: {
        position: 'absolute',
        top: 0,
        left: 0
    }
}));

export default useStyles;