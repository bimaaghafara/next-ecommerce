
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    homePage : {
        padding: '12px',
        paddingBottom: 0
    },
    favoriteIcon: {
        fontSize: '40px !important',
        paddingRight: 8,
    },
    searchTextField : {
        width: 'calc(100% - 48px)',
        '& input + fieldset': {
            borderRadius: 99,
        },
    }
}));

export default useStyles;