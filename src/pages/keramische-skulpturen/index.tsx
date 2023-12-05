import styled from "@emotion/styled"
import { Typography, Box } from '@mui/material';

import Header from "components/header.comp";
import { GalleryComponent } from "./components/gallery.component";

import { dogsData, ducksData, fliesData, foxesData, haresData, ownsData, torttleData } from "./images";
import { Footer } from "components/footer.comp";


export const SculpturePage = () => {
    return (
        <SculptureSection>
            <Header />
            <SculptureLabel>MEINE SKULPTUREN</SculptureLabel>
            <Box sx={{
                margin: '30px',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <SculptureDescription>Durch die 100% Handarbeit gleicht keine Figur der anderen, somit jedes einzelne Stück ist ein Unikat. Durch Verwendung hochwertiger Tonmassen und Brennen der Figuren bei bis zu 1.280° C sind diese absolut Frostfest und somit für Außenbereich geeignet.</SculptureDescription>
            <SculptureSubTitle>Die Herstellung einer Figur dauert mindestens 8 Wochen. Auf Wunsch können Proben für Farben und Oberflächen zusätzlich vorher erstellt werden, damit die Figur am Ende ihrer Vorstellung entspricht.</SculptureSubTitle>
            <Box sx={{
                margin: '100px 0',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <GalleryComponent
                label="FUCHS"
                animals={[
                    {
                        name: '"Romantiker"',
                        description: "Der große Fuchs",
                        weight: "14,5kg",
                        size: "62 x 40 x 44 cm",
                    },
                    {
                        name: '"Luciano"',
                        description: "Der kleine Fuchs",
                        weight: "3,4 kg",
                        size: "22 x 30 x 32 cm",
                    }
                ]}
                photos={foxesData}
            />
            <Box sx={{
                margin: '100px 0',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <GalleryComponent
                label="PUDEL"
                animals={[
                    {
                        weight: "14kg",
                        size: "58x42x44 cm",
                    },
                ]}
                photos={dogsData}
            />
            <Box sx={{
                margin: '100px 0',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <GalleryComponent
                label="SCHMETTERLING"
                animals={[
                    {
                        name: '"Josefina"',
                        weight: "1 kg",
                        size: "12 x 16 x 20  cm",
                    },
                ]}
                photos={fliesData}
            />
            <Box sx={{
                margin: '100px 0',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <GalleryComponent
                label="HASE"
                animals={[
                    {
                        name: '"Tom"',
                        description: 'Der große Hase',
                        weight: "6.3 kg",
                        size: "32 x 30 x 22 cm",
                    },
                    {
                        name: '"Clara und Cleo"',
                        description: 'Der kleine Hase',
                        weight: "3 kg",
                        size: "34 x 16 x 18 cm",
                    },
                ]}
                photos={haresData}
            />
            <Box sx={{
                margin: '100px 0',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <GalleryComponent
                label="ENTE"
                animals={[
                    {
                        name: '"Maria"',
                        weight: "2,5 kg",
                        size: "23 x 15 x 30 cm",
                    },
                ]}
                photos={ducksData}
            />
            <Box sx={{
                margin: '100px 0',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <GalleryComponent
                label="EULE"
                animals={[
                    {
                        name: '"Coco"',
                        weight: "2,5 kg",
                        size: "25 x 16 x 30cm",
                    },
                ]}
                photos={ownsData}
            />
                        <Box sx={{
                margin: '100px 0',
                width: '50%',
                borderBottom: '3px solid #f28611',
            }}>
            </Box>
            <GalleryComponent
                label="SCHILDKRÖTE"
                animals={[
                    {
                        name: '"Candy"',
                        weight: "5 kg",
                        size: "15 x 25 x 34cm",
                    },
                ]}
                photos={torttleData}
            />
            <Footer />
        </SculptureSection>
    )
}

const SculptureSection = styled("section")({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})

const SculptureLabel = styled(Typography)({
    fontFamily: "Montserrat, sans-serif, google",
    fontSize: '40px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#5a6e7b',
    marginTop: '80px',
})

const SculptureDescription = styled(Typography)({
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
    marginTop: '20px',
    width: '45%'
})

const SculptureSubTitle = styled(Typography)({
    color: '#5a6e7b',
    fontSize: '16px',
    lineHeight: '1.75em',
    width: '45%',
    marginTop: '50px'
})