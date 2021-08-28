import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles';

const BottomNav = () => {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div style={{ width: '100%', height: 56 }} />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={styles.bottomNav}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Feed" icon={<ViewListIcon />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  );
}

export default BottomNav;