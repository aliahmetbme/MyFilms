import axios from "axios";

export async function fetchData(URL, params) {
    try {
        const response = await axios.get(URL, {
            params: params,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWExMDBlNTY4ZWUzYjI0NjdmMDRlZTcyYzA1ODMxNSIsInN1YiI6IjY0YTI5MzA0ZThkMDI4MDEzOTE1YzJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HJJ_fSLA0UJ4jyNJSGnHs7tT01LTTqunViGcHIextpE'
            }
        });

        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}
