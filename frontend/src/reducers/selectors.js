const stringSimilarity = require("string-similarity");

export const listingsSelector = (state) => {
    state.jobs
      .forEach(
        job =>
          (job.resumeMatch =
            stringSimilarity.compareTwoStrings(
              job.jobDescription,
              state.currentResume
            ) * 100)
      )
    state.jobs.sort((a, b) => b.resumeMatch - a.resumeMatch);
    return state
};
