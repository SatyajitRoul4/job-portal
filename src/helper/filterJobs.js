export const filterJobs = (jobs, selectedValues) => {
    console.log("selected values: ", selectedValues);
    return jobs.filter(job => {
        if (!job) {
            console.error("Job object is undefined.");
            return false;
        }
        if (!selectedValues || Object.keys(selectedValues).length === 0) {
            console.error("Selected values object is undefined or empty.");
            return false;
        }
        return Object.entries(selectedValues).every(([category, selectedItems]) => {
            if (category === 'Job Roles') {
                return selectedItems.some(role => role.value.toLowerCase() === job.jobRole?.toLowerCase());
            } else if (category === 'Job Locations') {
                return selectedItems.some(location => location.value.toLowerCase() === job.location?.toLowerCase());
            } else if (category === 'Search Company') {
                return selectedItems.some(company => company.value.toLowerCase() === job?.companyName?.toLowerCase());
            } else if (category === 'Job Types') {
                return selectedItems.some(jobType => jobType.value.toLowerCase() === job.jobType?.toLowerCase());
            } else if (category === 'Min Base Pay') {
                return selectedItems.some(minBasePay => parseInt(minBasePay.value.replace('L', ''), 10) < job.minJdSalary);
            } else if (category === 'Experience') {
                if (job.minExp === null || job.minExp === undefined) {
                    console.log("Job has undefined or null minExp");
                    return false;
                }
                return selectedItems.some(experience => parseInt(experience.value, 10) <= parseInt(job.minExp));
            } else {
                return true;
            }
        }) && Object.values(selectedValues).every(value => Array.isArray(value) && value.length > 0);
    });
};
