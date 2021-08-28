
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    wishlistPage : {
        padding: '12px'
    },
    pageTitle: {
        display: 'inline-block',
        lineHeight: '48px',
        verticalAlign: 'middle',
        padding: 4
    },
    backIcon: {
        fontSize: '40px !important',
        paddingRight: 8,
    },
}));

export default useStyles;