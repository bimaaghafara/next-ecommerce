
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    productNotFound: {
        padding: 12
    },
    sorry: {
        marginBottom: 6,
    },
    homepageLink : {
        color: 'blue',
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
    },
}));

export default useStyles;