
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    purchaseHistoryPage : {
        padding: '12px'
    },
    pageTitle: {
        display: 'inline-block',
        lineHeight: '48px',
        verticalAlign: 'middle'
    },
    backIcon: {
        fontSize: '40px !important',
        paddingRight: 8,
    },
}));

export default useStyles;