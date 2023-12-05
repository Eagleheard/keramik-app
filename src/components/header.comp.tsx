import * as React from 'react';
import styled from "@emotion/styled"
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import logo from 'assets/logo.png';


function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#2d6584" }}>
            <LogoBox>
                <img src={logo} alt="logotype" />
            </LogoBox>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/" className="navLink header-link">
                                    <Typography textAlign="center">Home</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/keramische-skulpturen" className="navLink header-link">
                                    <Typography textAlign="center">Keramische Skulpturen</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/malerei" className="navLink">
                                    <Typography textAlign="center">Malerei</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/prozess" className="navLink">
                                    <Typography textAlign="center">Prozess</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/über-tatyana" className="navLink">
                                    <Typography textAlign="center">ÜBER TATYANA</Typography>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                        <HeaderButton to='/' className="navLink header-link" onClick={handleCloseNavMenu}>

                                Home
                        </HeaderButton>
                        <HeaderButton to='/keramische-skulpturen' className="navLink" onClick={handleCloseNavMenu}>
                                Keramische Skulpturen
                        </HeaderButton>
                        <HeaderButton to='/malerei' className="navLink" onClick={handleCloseNavMenu}>
                                Malerei
                        </HeaderButton>
                        <HeaderButton to='/prozess' className="navLink" onClick={handleCloseNavMenu}>
                                Prozess
                        </HeaderButton>
                        <HeaderButton to='/über-tatyana' className="navLink" onClick={handleCloseNavMenu}>
                                ÜBER TATYANA
                        </HeaderButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;

const LogoBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f28611',
    padding: '90px 0 70px 0',
    width: '100%'
})

const HeaderButton = styled(NavLink)({
    fontFamily: 'Cabin',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    color: '#000',
    display: 'block',
    padding: '10px 11px',
    ":hover": { color: "white" },
    "::active": { color: "white" }
})