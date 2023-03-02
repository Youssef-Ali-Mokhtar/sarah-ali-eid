import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.jpg';
import { useWindowSize } from '@react-hook/window-size';


const pages = [{id:'intro', name:'مقدمة'}, 
               {id:'qualifications', name:'خبرات'}, 
               {id:'contact', name:'تواصل'}];

function Navbar({ drawerHandler }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [ width ] = useWindowSize();


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {width >= 900 && <img className="logo" src={logo}/>}
          <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Cairo',
              fontWeight: 500,
              fontSize: 20,
              margin:'5px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            سارة علي عيد
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={drawerHandler}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

          </Box>

          {width < 900 && <img className="logo" src={logo}/>}

          <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Cairo',
              fontSize:20,
              fontWeight: 500,
              margin:'5px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            سارة علي عيد
          </Typography>

          

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'end' } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Cairo', fontSize:'18px' }}
              >
                <a href={`#${page.id}`}>{page.name}</a>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;