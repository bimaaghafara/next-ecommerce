import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import classNames from 'classnames';
import useStyles from './styles';
import { signInWithGoogle, signInWithFacebook } from "src/services/firebase";

const LoginPage = () => {
    const styles = useStyles();
    const router = useRouter();

    const onLogin = () => {
        Cookies.set('isLogin', JSON.stringify(true), { expires: 1 });
        router.push('/');
    }

    const handleSignInWithGoogle = () => signInWithGoogle({
        onSuccess: (res) => {
            const user = {
                email: res.user.email,
                name: res.user.displayName
            };
            Cookies.set('isLogin', JSON.stringify(true), { expires: 1 });
            Cookies.set('user', JSON.stringify(user), { expires: 1 });
            router.push('/');
        }
    });

    const handleSignInWithFacebook = () => signInWithFacebook({
        onSuccess: (res) => {
            console.log(res)
            // const user = {
            //     email: res.user.email,
            //     name: res.user.displayName
            // };
            // Cookies.set('isLogin', JSON.stringify(true), { expires: 1 });
            // Cookies.set('user', JSON.stringify(user), { expires: 1 });
            // router.push('/');
        }
    }); 

    return (
        <div className={styles.loginPage}>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login Page" />
            </Head>
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
                        onClick={handleSignInWithFacebook}
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
                        onClick={handleSignInWithGoogle}
                    >
                        Sign In with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;