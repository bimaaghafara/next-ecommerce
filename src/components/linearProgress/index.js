import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './styles';

export default function LinearDeterminate() {
  const styles = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.linearProgress}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
