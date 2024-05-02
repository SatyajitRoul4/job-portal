import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box, Divider, Avatar, Grow } from '@mui/material';

const JobCard = ({ job }) => {
  const { jobRole, location, minJdSalary, maxJdSalary, jobDetailsFromCompany, minExp, companyName, companyLink } = job;
  const minSalary = minJdSalary === null ? 0 : minJdSalary
  const maxSalary = maxJdSalary === null ? '+' : `- ${maxJdSalary}`

  return (
    <Grow in={true} timeout={500}>

      <Card style={{ width: '100%', maxWidth: 300, margin: '0 auto', borderRadius: 10, marginBottom: 16, overflowY: 'hidden' }}>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="flex-start">
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
                src={companyLink}
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
            <div>
              <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
                {companyName}
              </Typography>
              <Typography variant="subtitle2" sx={{ ml: 2 }}>
                {jobRole ? jobRole.charAt(0).toUpperCase() + jobRole.slice(1) : ''}
              </Typography>
              <Typography variant="subtitle2" sx={{ ml: 2 }} color="textSecondary">
                {location || 'India'}
              </Typography>
            </div>
          </Box>


          <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
            Estimated Salary: ₹{minSalary} {maxSalary} LPA ✅
          </Typography>

          <Typography variant="h8" color="textSecondary" sx={{ mt: 1, fontWeight: '600' }}>
            About Company:
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" sx={{ fontWeight: '900' }}>
            About us
          </Typography>

          <Typography variant="body2" color="textSecondary" sx={{ maxHeight: '200px', overflow: 'hidden', position: 'relative', paddingRight: '1rem' }}>
            {jobDetailsFromCompany}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '130px',
                background: 'linear-gradient(transparent, rgba(255, 255, 255, 0.7))', // Adjust the opacity by changing the last value (0.7)
                pointerEvents: 'none',
              }}
            />
            <Button
              variant="text"
              size="small"
              sx={{
                position: 'absolute',
                bottom: '5px',
              }}
            >
              Show More
            </Button>

          </Typography>



          <Divider sx={{ mt: 2, mb: 1 }} />

          <Typography variant="subtitle2" color="textSecondary">
            Minimum Experience: {minExp || 0} years
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="contained" sx={{
            backgroundColor: 'rgb(57, 227, 179)',
            color: 'black',
            '&:hover': {
              backgroundColor: 'rgb(29, 171, 131)', // Change to your desired color
            },
          }} size="large" fullWidth>
            ⚡ Easy Apply
          </Button>
        </CardActions>
      </Card>
    </Grow>


  );
};

export default JobCard;