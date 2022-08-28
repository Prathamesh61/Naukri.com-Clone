import axios from "axios";
export function getJobs(params = {}) {

    return axios("https://arcane-oasis-06780.herokuapp.com/data?", {
        params: {
            Location_like: params.location,
            _page: params.page,
            _limit: params.limit,
            JobExperienceRequired_like: params.experience,
            JobTitle_like: params.q
        }
    })
}