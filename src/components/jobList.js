import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/action';
import JobCard from './JobCard';
import Navbar from './NavBar';
import { Grid } from '@mui/material';
import { filterJobs } from '../helper/filterJobs';
import { debounce } from 'lodash';
import { companyNames, companyLinks } from '../helper/utils';

const JobList = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [allJobs, setAllJobs] = useState([]);
  const jobs = useSelector(state => state.jobs.jobs);
  const loading = useSelector(state => state.jobs.loading);
  const error = useSelector(state => state.jobs.error);

  const limit = 10;
  const offset = (page - 1) * limit;

  useEffect(() => {
    if (JSON.stringify(selectedValues) === '{}') {
      dispatch(fetchJobs(limit, offset));
    }
  }, [dispatch, selectedValues]);

  useEffect(() => {
    const hasFilterCleared = Object.values(selectedValues).some(value => Array.isArray(value) && value.length === 0);
    if (hasFilterCleared) {
      dispatch(fetchJobs(limit, offset));
    }
    const filteredJobs = filterJobs(allJobs, selectedValues);
    setAllJobs(filteredJobs);
  }, [selectedValues]);


  useEffect(() => {
    const handleScroll = debounce(() => {
      const windowHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const totalHeight = document.documentElement.offsetHeight;

      if (windowHeight + scrollTop >= totalHeight - 10) {
        console.log('Reached near the end of the page');
        setPage(prevPage => prevPage + 1);
      }
    }, 400);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (page > 1) {
      dispatch(fetchJobs(limit, offset));
    }
  }, [page, dispatch, limit, offset]);

  useEffect(() => {
    if (Object.values(selectedValues).some(value => value.length > 0)) {
      const filteredJobs = filterJobs(jobs, selectedValues);
      const filteredJobsWithCompanyInfo = filteredJobs.map(job => {
        const randomIndex = Math.floor(Math.random() * companyNames.length);
        return {
          ...job,
          companyName: companyNames[randomIndex],
          companyLink: companyLinks[randomIndex]
        };
      });
      setAllJobs(prevJobs => [...prevJobs, ...filteredJobsWithCompanyInfo]);
    } else {
      const jobsWithCompanyInfo = jobs.map(job => {
        const randomIndex = Math.floor(Math.random() * companyNames.length);
        return {
          ...job,
          companyName: companyNames[randomIndex],
          companyLink: companyLinks[randomIndex]
        };
      });
      setAllJobs(prevJobs => [...prevJobs, ...jobsWithCompanyInfo]);
    }
  }, [jobs, selectedValues]);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'hidden'}}>
      <Navbar selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
      <Grid container spacing={2} justifyContent="flex-start">
        {allJobs.length === 0 && <p style={{ margin: 'auto', marginTop: 2 }}>No jobs found</p>}
        {allJobs.map(job => (
          <Grid key={job.id} item xs={12} sm={6} md={4} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default JobList;
// ⨯