import {useEffect, useState} from 'react'
import axios from 'axios'

export const useFetch = (URL, params) => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData()
    },[])

    async function fetchData(){
        try{
            setLoading(true)
            const response = await axios.get(URL, {
                params: params,
                headers: {
                  'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWExMDBlNTY4ZWUzYjI0NjdmMDRlZTcyYzA1ODMxNSIsInN1YiI6IjY0YTI5MzA0ZThkMDI4MDEzOTE1YzJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HJJ_fSLA0UJ4jyNJSGnHs7tT01LTTqunViGcHIextpE' 
                }
            })
            setData(response.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
            console.log(error)
        }
    }

    return {data, loading, error}

}


