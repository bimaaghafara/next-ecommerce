
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    homePage : {
        padding: '12px',
        paddingBottom: 0
    },
    favoriteIcon: {
        fontSize: '27px !important',
    },
    searchTextField : {
        padding: 4,
        width: 'calc(100% - 51px)',
        '& input + fieldset': {
            borderRadius: 99,
        },
    }
}));

export default useStyles;