import React from 'react';
import { Autocomplete, Chip, Grid, InputLabel, TextField } from '@mui/material';
import { experience, Roles, numberOfEmployees, minimumBasePay, locations, jobTypes, techStack } from '../helper/utils';

  const Navbar = ({selectedValues,setSelectedValues}) => {

  const handleDelete = (category, id) => {
    setSelectedValues(prevState => {
      const updatedCategory = prevState[category].filter(item => item.id !== id);
      return { ...prevState, [category]: updatedCategory };
    });
  };

  const options = {
    'Experience': experience,
    'No. of Employees': numberOfEmployees,
    'Job Roles': Roles,
    'Min Base Pay': minimumBasePay,
    'Job Locations': locations,
    'Job Types': jobTypes,
    'Tech Stacks': techStack,
  };

  return (
    <div style={{ padding: 20}}>
      <Grid container spacing={2} alignItems="center">
        {Object.entries(options).map(([category, items]) => (
          <Grid item key={category}>
            <div style={{ }}>
              <InputLabel id={`demo-multiple-chip-label-${category}`}>{category}</InputLabel>
              <Autocomplete
                multiple
                size='small'
                id={`autocomplete-${category}`}
                disableClearable={true}
                options={items}
                getOptionLabel={(option) => option.value}
                value={selectedValues[category] || []}
                onChange={(event, newValue) => setSelectedValues(prevState => ({ ...prevState, [category]: newValue }))}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      key={index}
                      label={option.value}
                      onDelete={() => handleDelete(category, option.id)}
                    />
                  ))
                }
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Navbar;
