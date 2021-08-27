
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    loginPage : {
        padding: "32px 12px"
    },
    loginBox: {
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: '32px 12px',
        maxWidth: 360,
        margin: 'auto'
    },
    loginTitle: {
        marginBottom: 24
    },
    textField: {
        margin: '12px 0',
        width: '100%'
    },
    signinButtonWrapper: {
        marginBottom: 42
    },
    signinButton: {
        background: '#eee',
        float: 'right',
        margin: '4px 0',
        background: '#333',
        color: '#fff',
        width: '120px',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#333e',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#333e',
        },
    },
    socialButtonWrapper: {
        margin: '12px 0',
        textAlign: 'center'
    },
    socialButton: {
        textTransform: 'none',
        width: '80%'
    },
    googleButton : {
        background: '#007DFF',
        '&:hover': {
            backgroundColor: '#007DFFee',
            boxShadow: 'none',
        },
        '&:active': {
            backgroundColor: '#007DFFee',
            boxShadow: 'none',
        },

    }
}));

export default useStyles;