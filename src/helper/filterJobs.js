export const filterJobs = (jobs, selectedValues) => {
    console.log("selected values: ", selectedValues)
    return jobs.filter(job => {
      return Object.entries(selectedValues).every(([category, selectedItems]) => {
        switch (category) {
          case 'Job Roles':
            return selectedItems.some(role => role.value.toLowerCase() === job.jobRole.toLowerCase());
          case 'Job Locations':
            return selectedItems.some(location => location.value.toLowerCase() === job.location.toLowerCase());
          case 'Job Types':
            return selectedItems.some(jobType => jobType.value.toLowerCase() === job.jobType.toLowerCase());
          case 'Min Base Pay':
            return selectedItems.some(minBasePay => parseInt(minBasePay.value.replace('L', ''), 10) < job.maxJdSalary);
          case 'Experience':
            return selectedItems.some(experience => parseInt(experience.value, 10) >= job.minExp);
          default:
            return true;
        }
      });
    });
};