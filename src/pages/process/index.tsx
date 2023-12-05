import styled from "@emotion/styled"
import { Box, ImageList, ImageListItem, Typography } from "@mui/material"

import Header from "components/header.comp"
import { imagesData } from "./images"
import { Footer } from "components/footer.comp"

export const ProcessPage = () => {
    return (
        <ProcessSection>
            <Header />
            <Box sx={{
                padding: '80px 10px',
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <ProcessLabel>DIE HERSTELLUNG NEUER KUNSTWERKE</ProcessLabel>
                <Box sx={{
                    marginTop: '50px',
                    width: '50%',
                    borderBottom: '3px solid #f28611',
                }}>
                </Box>
                <ProcessDesc>
                    In der Herstellung einer neuen keramischen Skulptur steckt eine menge harter Arbeit, viel Geduld und vor allem Kreativität mit drin. Der Aufwand der dabei betrieben wird, ist enorm! Daher dauert es  je nach Größe und Komplexität von mindestens zwei Monaten bis zu einem Jahr! Wichtig dabei ist, die Kombination aus feiner Kunsthandwerk und eigener Kreativität.

                    Alle Figuren sind reine Handarbeit, irgendwo wird mein Fingerabdruck zu finden sein.
                </ProcessDesc>
            </Box>
            <ProcessSubTitle>DIE EINZELSCHRITTE</ProcessSubTitle>
            <Box sx={{ display: 'flex', alignItems: 'start', width: '80%' }}>
                <ProcessList>
                    <ProcessListItem>1) Farbige Skizzen am Papier</ProcessListItem>
                    <ProcessListItem>2) Kleine Skizzen im Volumen</ProcessListItem>
                    <ProcessListItem>3) Aufbauen des großes Modells</ProcessListItem>
                    <ProcessListItem>4) Herstellung von Gipsformen ( es können bis 40 Stückchen entstehen).</ProcessListItem>
                    <ProcessListItem>5) Bearbeitung der Form</ProcessListItem>
                    <ProcessListItem>6) Aufbauen der Skulptur aus der Tonmasse in der Gipsform</ProcessListItem>
                    <ProcessListItem>7) Bearbeitung der Oberfläche von Modell</ProcessListItem>
                    <ProcessListItem>8) Proben für passende Glasuren, Engoben, Metallsalzen und andere Materialien</ProcessListItem>
                    <ProcessListItem>9) Brände ( Bus zum 2 oder 3)</ProcessListItem>
                    <ProcessListItem>9) Austrocknen Zeit</ProcessListItem>
                    <ProcessListItem>10) Schrühbrand</ProcessListItem>
                    <ProcessListItem>11) Bearbeitung der Scherbe nach dem Schrühbrand</ProcessListItem>
                    <ProcessListItem>12) Vorbereitung für Glasurbrand,  Auftragen von Engoben, Farben, Salzen und Glasuren auf die Scherbe mit verschiedenen Techniken <br />
                        ( Einreiben, spritzen, sprühen, streichen und so weiter...) es dauert so lange als ob ein ölbild zu malen....</ProcessListItem>
                    <ProcessListItem>13) Glasurbrand</ProcessListItem>
                    <ProcessListItem>14) Bearbeitung nach Glasurbrand</ProcessListItem>
                    <ProcessListItem>15) Fertigstellung</ProcessListItem>
                    <ProcessListItem>16) Abgabe</ProcessListItem>
                </ProcessList>
            </Box>
            <Box sx={{ width: '80%', marginBottom: '100px' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {imagesData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Footer />
        </ProcessSection>
    )
}

const ProcessSection = styled("section")({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})


const ProcessLabel = styled(Typography)({
    fontFamily: "Montserrat, sans-serif, google",
    fontSize: '40px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#5a6e7b',
})

const ProcessDesc = styled(Typography)({
    marginTop: '30px',
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
})

const ProcessSubTitle = styled(Typography)({
    fontSize: '24px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#f28611',
})

const ProcessList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: '20px 0',
    textAlign: 'start',
})

const ProcessListItem = styled('li')({
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
})