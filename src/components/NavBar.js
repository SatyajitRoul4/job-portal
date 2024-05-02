import React, { useState } from 'react';
import { Select, MenuItem, Chip, OutlinedInput, Grid, InputLabel, IconButton } from '@mui/material';
import { experience, Roles, numberOfEmployees, minimumBasePay, locations, jobTypes, techStack } from '../helper/utils';


const Navbar = () => {
  const [selectedValues, setSelectedValues] = useState({});

  const handleChange = (event, category) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [category]: event.target.value
    }));
    console.log(selectedValues);
  };

  const handleDelete = (category, id) => {
    console.log("calling handle dleete",category, id);
    setSelectedValues(prevState => {
      const updatedCategory = prevState[category].filter(item => item.id !== id);
      return { ...prevState, [category]: updatedCategory };
    });
    // Perform further actions with updated selected values
  };

  const options = {
    Experience: experience,
    Roles: Roles,
    'Number of Employees': numberOfEmployees,
    'Minimum Base Pay': minimumBasePay,
    Locations: locations,
    'Job Types': jobTypes,
    'Tech Stack': techStack,
  };

  return (
    <div>
      <Grid container spacing={1}>
        {Object.entries(options).map(([category, items]) => (
          <Grid item xs={8} sm={4} md={3} lg={2} key={category}>
            <div style={{ marginBottom: 10 }}>
            <InputLabel id="demo-multiple-chip-label">{category}</InputLabel>
              <Select
                labelId={`${category}-label`}
                id={`${category}-chip`}
                multiple
                value={selectedValues[category] || []}
                onChange={(event) => handleChange(event, category)}
                input={<OutlinedInput id={`${category}-select-multiple-chip`} />}
                renderValue={(selected) => (
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {selected.map((value) => (
                      <Chip
                        key={value.id}
                        label={value.value}
                        clickable
                        style={{ margin: 1 }}
                        deleteIcon={<IconButton size='small' sx={{height: 20}}
                          onMouseDown={(event) => event.stopPropagation()}
                        >⨯</IconButton>}
                        onDelete={() => handleDelete(category, value.id)}
                      />
                    ))}
                  </div>
                )}
                style={{ minWidth: 200 }}
              >
                {items.map((option) => (
                  <MenuItem key={`${category}-${option.id}`} value={option}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Navbar;
