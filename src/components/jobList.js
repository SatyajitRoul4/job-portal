import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/action';
import JobCard from './JobCard';
import Navbar from './NavBar';

const JobList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [allJobs, setAllJobs] = useState([]);
  const jobs = useSelector(state => state.jobs.jobs);
  const loading = useSelector(state => state.jobs.loading);
  const error = useSelector(state => state.jobs.error);

  const limit = 10;
  const offset = (page - 1) * limit;

  useEffect(() => {
    dispatch(fetchJobs(limit, offset));
  }, [dispatch, limit, offset]);

  useEffect(()=>{
    console.log('Loading the next page ',page)
  },[page])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const totalHeight = document.documentElement.offsetHeight;
  
      if (windowHeight + scrollTop >= totalHeight - 10) {
        console.log('Reached near the end of the page');
        setPage(prevPage => prevPage + 1);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);
  

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchJobs(limit, offset));
    }
  }, [page, dispatch, limit, offset]);

  useEffect(() => {
    setAllJobs(prevJobs => [...prevJobs, ...jobs]);
  }, [jobs]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
        {allJobs?.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default JobList;
// ⨯