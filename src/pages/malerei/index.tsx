import styled from "@emotion/styled"
import { Box, ImageList, ImageListItem, Typography } from "@mui/material"

import Header from "components/header.comp"
import { imagesData } from "./images"
import { Footer } from "components/footer.comp"

export const GalleryPage = () => {
    return (
        <GallerySection>
            <Header />
            <Box sx={{
                padding: '80px 10px',
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <GalleryLabel>ÖLBILDER</GalleryLabel>
                <Box sx={{
                    marginTop: '50px',
                    width: '50%',
                    borderBottom: '3px solid #f28611',
                }}>
                </Box>
                <GalleryDesc>
                    Hier finden Sie Öl / Acryl /Aquarellbilder die Bestellt werden können, sowie <br /> gefertigte Bilder. <br />
                    Das ist vor allem fette pastose Maltechnik, die mit einem Spachtel auf <br /> Leinwand/Papier aufgetragen wird
                </GalleryDesc>
                <Box sx={{
                    marginTop: '50px',
                    width: '50%',
                    borderBottom: '3px solid #f28611',
                }}>
                </Box>
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
        </GallerySection>
    )
}

const GallerySection = styled("section")({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})


const GalleryLabel = styled(Typography)({
    fontFamily: "Montserrat, sans-serif, google",
    fontSize: '40px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#5a6e7b',
})

const GalleryDesc = styled(Typography)({
    marginTop: '30px',
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
})