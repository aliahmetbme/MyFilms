import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const useFetch = (URL) => {
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
            const response = await axios.get(URL)
            setData(response.data.results)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    return {data, loading, error}

}


