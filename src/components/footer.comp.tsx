import { Box, Typography } from "@mui/material"

import logo from 'assets/logo-mini.png';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f28611',
                padding: "60px 0",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%'
            }}
        >
            <img src={logo} alt="logo pic" />
            <Box sx={{
                marginTop: '50px',
                width: '40%',
                borderBottom: '2px solid #000000',
            }}>
            </Box>
            <Box>
                <Typography sx={{
                    fontFamily: "Montserrat",
                    fontSize: '18px',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    color: '#3f3c45',
                    marginTop: '50px'
                }}>
                    KONTAKT
                </Typography>
                <Typography sx={{
                    fontFamily: "Montserrat",
                    color: '#3f3c45',
                    fontSize: '15px',
                    lineHeight: '1.75em',
                    marginTop: '20px'
                }}>
                    Tel. +49 9120 1819330
                </Typography>
                <Typography sx={{
                    fontFamily: "Montserrat",
                    color: '#3f3c45',
                    fontSize: '15px',
                    lineHeight: '1.75em',
                }}>
                    Tel. Mobil: +49 1579 2337600
                </Typography>
                <Typography sx={{
                    fontFamily: "Montserrat",
                    color: '#3f3c45',
                    fontSize: '15px',
                    lineHeight: '1.75em',
                }}>
                    Entenberger Hauptstraße 31, 91227 Leinburg
                </Typography>
                    <Typography sx={{
                        fontFamily: "Montserrat",
                        color: '#3f3c45',
                        fontSize: '15px',
                        lineHeight: '1.75em',
                    }}>
                        kritata@yahoo.com
                    </Typography>
            </Box>
        </Box>
    )
}