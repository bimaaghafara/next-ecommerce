import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

import classNames from 'classnames';
import useStyles from './styles';

const LoginPage = () => {
    const styles = useStyles();
    const router = useRouter();
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
                    <Button className={styles.signinButton} variant="contained" onClick={() => router.push('/')}>Sign In</Button>
                </div>
                <div className={styles.socialButtonWrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.socialButton}
                        startIcon={<div>f</div>}
                        onClick={() => router.push('/')}
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
                        onClick={() => router.push('/')}
                    >
                        Sign In with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;