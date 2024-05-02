export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});


export const fetchJobs = (limit, offset) => {
  return (dispatch) => {
    dispatch(fetchJobsRequest());
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: limit,
        offset: offset,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchJobsSuccess(data?.jdList));
    })
    .catch((error) => {
      dispatch(fetchJobsFailure(error.message));
    });
  };
};

