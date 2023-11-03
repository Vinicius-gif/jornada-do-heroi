'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { HeroesContext } from '@/app/contexts/HeroesContext';
import Loading from '../Loading';

export default function CardHero({thumb, name, power, onClick}) {

  const { loading } = React.useContext(HeroesContext);

  return (
    <Card sx={{ maxWidth: 200 }} onClick={onClick}>
      <CardActionArea>
        {
          loading ? <Loading/>
            :
            <CardMedia
              component="img"
              height="30"
              image={thumb}
              alt="hero photo"
            />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {power}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
