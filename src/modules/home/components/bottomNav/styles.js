
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    bottomNav: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        maxWidth: 480,
        margin: '0 -12px 0 -12px',
        background: '#eee'
    },
}));

export default useStyles;