import styled from "@emotion/styled"
import { Box, Button, Typography } from "@mui/material"

import Header from "components/header.comp"

import figures from 'assets/figures.jpg';
import foxes from 'assets/foxes.png';
import picture from 'assets/picture.png';
import { Footer } from "components/footer.comp";
import { NavLink } from "react-router-dom";


export const HomePage = () => {
    return (
        <HomeSection>
            <Header />
            <Box sx={{
                padding: '80px 10px',
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <HomeLabel>Individuelle Keramik Stücke direkt von <br />Künstlerin</HomeLabel>
                <HomeDesc>
                    Gefertigte Keramik Aller Art über Skulpturen, Gartenobjekten und Gebrauchsgegenstände wie Schalen <br /> oder kleines Plastik
                </HomeDesc>
                <Box sx={{
                    marginTop: '50px',
                    width: '50%',
                    borderBottom: '3px solid #f28611',
                }}>
                </Box>
                <Box sx={{ marginTop: '100px', width: '100%' }}>
                    <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=509x10000:format=png/path/s8b44992da4141ed0/image/ie8c05b77de822cd6/version/1631565225/image.png" alt="Tatyana" />
                    <Typography sx={{
                        fontSize: '24px',
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: '#f28611',
                    }}>TATYANA KRIVENKO</Typography>
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        lineHeight: '1.75em',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: '#f28611',
                        marginTop: '10px'
                    }}>
                        BESITZERIN VON KUNSTATELIER ENTENBERGER KUNSTHÜTTE
                    </Typography>
                    <Typography sx={{
                        color: '#5a6e7b',
                        fontSize: '20px',
                        lineHeight: '1.75em',
                        marginTop: "60px"
                    }}>
                        Entenberger Kunsthütte ist eigene Werkstatt,  Kunstatelier und <br /> Kunstladen von einziger freischaffender Künstlerin.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            fontFamily: "Montserrat, sans-serif, google",
                            backgroundColor: "#177490",
                            borderRadius: '50px',
                            padding: '10px 20px',
                            border: '2px solid #177490',
                            marginTop: "60px",
                            ":hover": {
                                backgroundColor: '#177490'
                            }
                        }}
                    >
                        <NavLink to="/über-tatyana" className="navLink">
                            mehr über Tatyana
                        </NavLink>
                    </Button>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-around',
                        width: '100%',
                        marginTop: '50px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}>
                            <img src={foxes} alt="foxes" />
                            <Button
                                variant="outlined"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif, google",
                                    marginTop: "30px",
                                    color: '#f28611',
                                    fontSize: '18px',
                                    borderColor: '#f28611',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderRadius: '5px',
                                    ":hover": {
                                        borderColor: '#f28611',
                                    }
                                }}>
                                <NavLink to="/keramische-skulpturen" className="navLink">
                                    Keramische Skulpturen
                                </NavLink>
                            </Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={picture} alt="pic" />
                            <Button
                                variant="outlined"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif, google",
                                    marginTop: "30px",
                                    color: '#f28611',
                                    fontSize: '18px',
                                    borderColor: '#f28611',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderRadius: '5px',
                                    ":hover": {
                                        borderColor: '#f28611',
                                    }
                                }}>
                                <NavLink to="/malerei">
                                    Malerei
                                </NavLink>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        marginTop: "200px"
                    }}>
                        <img src={figures} alt='all-figures-pic' />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </HomeSection >
    )
}

const HomeSection = styled("section")({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})

const HomeLabel = styled(Typography)({
    fontFamily: "Montserrat, sans-serif, google",
    fontSize: '40px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#5a6e7b',
})

const HomeDesc = styled(Typography)({
    fontFamily: "Montserrat, sans-serif, google",
    marginTop: '30px',
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
})