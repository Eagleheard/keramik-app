import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

import Header from "components/header.comp"
import { Footer } from "components/footer.comp"

import profileImage from 'assets/profile.jpg';

export const ProfilePage = () => {
    return (
        <ProfileSection>
            <Header />
            <Box sx={{
                padding: '80px 10px',
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <ProfileLabel>ÜBER TATYANA</ProfileLabel>
                <Box sx={{
                    marginTop: '50px',
                    width: '50%',
                    borderBottom: '3px solid #f28611',
                }}>
                </Box>
            </Box>
            <img src={profileImage} alt="tatyana" />
            <PhotoDescription>Hallo ihr lieben… Liebe Freunde</PhotoDescription>
            <ProfileDescription>
                Mein Name ist Tatyana Krivenko, ich bin professionelle Künstlerin der monumentalen und dekorativen Kunst.  Ich stamme  aus der Stadt Nowosibirsk, dort habe ich in der russischen Metropole studiert und Baukunst Akademie in 1998  abgeschlossen, hatte  Praxis in der Lomonosov-Porzellanfabrik in St. Petersburg



                In 2014 habe ich aus ernsten Gründen meine Heimat verlassen, lebe und arbeite in Deutschland.



                Im Dezember 2019 habe ich „Entenberger Kunsthütte „ gegründet.
            </ProfileDescription>
            <Footer />
        </ProfileSection>
    )
}

const ProfileSection = styled("section")({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})


const ProfileLabel = styled(Typography)({
    fontFamily: "Montserrat, sans-serif, google",
    fontSize: '40px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#5a6e7b',
})

const PhotoDescription = styled(Typography)({
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
    marginTop: '20px'
})

const ProfileDescription = styled(Typography)({
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
    width: '55%',
    margin: '50px 0'
})