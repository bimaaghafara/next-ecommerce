
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    homePage : {
        padding: "12px"
    },
    favoriteIcon: {
        fontSize: 40,
        paddingRight: 4,
    },
    searchTextField : {
        width: 'calc(100% - 44px)',
        '& input + fieldset': {
            borderRadius: 99,
        },
    }
}));

export default useStyles;