import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box, Divider, Avatar } from '@mui/material';
import { companyLinks, companyNames } from '../helper/utils';

const JobCard = ({ job }) => {
  const { jobRole, location, minJdSalary, maxJdSalary, jobDetailsFromCompany, minExp } = job;

  const companyObjects = companyNames.map((name, index) => ({
    name,
    link: companyLinks[index]
  }));

  const randomIndex = Math.floor(Math.random() * companyObjects.length);
  const randomCompany = companyObjects[randomIndex];
  const minSalary = minJdSalary === null ? 0 : minJdSalary
  const maxSalary = maxJdSalary === null ? '+' : `- ${maxJdSalary}`

  return (
    <Card style={{ width: '100%', maxWidth: 300, margin: '0 auto', borderRadius: 10, marginBottom: 16 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            sx={{
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Avatar
              src={randomCompany.link}
              alt="Company Logo"
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
              }}
              variant="square"
            />
          </Box>
        </Box>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {randomCompany.name}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {jobRole ? jobRole.charAt(0).toUpperCase() + jobRole.slice(1) : ''}
        </Typography>

        <Typography variant="subtitle2" color="textSecondary">
          {location || 'India'}
        </Typography>

        <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
          Estimated Salary: ₹{minSalary} {maxSalary} LPA ✅
        </Typography>

        <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
          About Company
        </Typography>

        <Typography variant="body2" color="textSecondary">
          {jobDetailsFromCompany}
        </Typography>

        <Divider sx={{ mt: 2, mb: 1 }} />

        <Typography variant="subtitle2" color="textSecondary">
          Minimum Experience: {minExp || 0} years
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Easy Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;