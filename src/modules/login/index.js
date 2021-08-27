import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import classNames from 'classnames';
import useStyles from './styles';

const LoginPage = () => {
    const styles = useStyles();
    const router = useRouter();

    const onLogin = () => {
        Cookies.set('isLogin', JSON.stringify(true), { expires: 1 });
        router.push('/');
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <Typography className={styles.loginTitle} variant="h5" gutterBottom align="center">
                    Login
                </Typography>
                <div>
                    <TextField className={styles.textField} id="usernamee" label="Username" variant="outlined" />
                </div>
                <div>
                    <TextField className={styles.textField} id="password" type="password" label="Password" variant="outlined" />
                </div>
                <div className={styles.signinButtonWrapper}>
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Remember Me"
                    />
                    <Button className={styles.signinButton} variant="contained" onClick={onLogin}>Sign In</Button>
                </div>
                <div className={styles.socialButtonWrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.socialButton}
                        startIcon={<div>f</div>}
                        onClick={onLogin}
                    >
                        Sign In with Facebook
                    </Button>
                </div>
                <div className={styles.socialButtonWrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classNames(styles.socialButton, styles.googleButton)}
                        startIcon={<div>G</div>}
                        onClick={onLogin}
                    >
                        Sign In with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;