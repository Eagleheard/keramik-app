import { FC } from 'react';

import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import { QuiltedImageList } from "./image-list.component"

interface IGallery {
    label: string;
    animals: {
        name?: string;
        description?: string;
        weight: string;
        size: string
    }[];
    photos: {
        img: string;
        title: string;
        rows?: number;
        cols?: number;
    }[]
}


export const GalleryComponent: FC<IGallery> = ({ label, animals, photos }) => {
    return (
        <GalleryBox>
            <QuiltedImageList itemData={photos} />
            <Box>
                <AnimalLabel>{label}</AnimalLabel>
                {animals.map((animal) =>
                    <AnimalBox key={animal.name}>
                        <Box sx={{ display: 'flex', textAlign: 'center' }}>
                            <AnimalName>{animal.name}</AnimalName> {animal.description ? <AnimalDescription>{animal.description}</AnimalDescription> : null}
                        </Box>
                        <AnimalDescription>Gewicht ca. {animal.weight}</AnimalDescription>
                        <AnimalDescription>{`Größe: ${animal.size} (H/B/T)`}</AnimalDescription>
                    </AnimalBox>
                )}
            </Box>
        </GalleryBox>
    )
}

const GalleryBox = styled(Box)({
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
})

const AnimalLabel = styled(Typography)({
    fontSize: '24px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#f28611',
})

const AnimalDescription = styled(Typography)({
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
})

const AnimalName = styled("b")({
    color: '#5a6e7b',
    fontSize: '20px',
    lineHeight: '1.75em',
})

const AnimalBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0'
})