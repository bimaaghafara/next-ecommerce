
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    linearProgress: {
        width: '100%',
        position: 'sticky',
        top: 0,
        height: 0,
        zIndex: 1
    },
}));

export default useStyles;