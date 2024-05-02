import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, CardMedia } from '@mui/material';
import { companyNames, companyLinks } from '../helper/utils';

const JobCard = ({ job }) => {
  const { jobRole, location, jobDetailsFromCompany, minExp } = job;

  const companyObjects = companyNames.map((name, index) => ({
    name,
    link: companyLinks[index]
  }));

  const randomIndex = Math.floor(Math.random() * companyObjects.length);
  const randomCompany = companyObjects[randomIndex];

  return ( 
    <div style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="h2" variant="h5">
            {jobRole}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Location: {location}
          </Typography>
          <Typography variant="body1">
            {jobDetailsFromCompany}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="100"
          image={randomCompany.link}
          alt={randomCompany.name}
          sx={{ alignSelf: 'center' }}
        />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">
            Company: {randomCompany.name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Experience: {minExp}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Easy Apply</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default JobCard;
