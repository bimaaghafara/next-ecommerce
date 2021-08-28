
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    searchPage : {
        padding: '12px'
    },
    backIcon: {
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