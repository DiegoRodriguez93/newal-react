import React,{useEffect, useState} from 'react';
import axios from 'axios';

export default function useFetch(url){

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchUrl(){

        const response = await axios(url);

        setData(response.data);
        setLoading(false);

    }

    useEffect( () => {
        fetchUrl();
    }, [])

    return [data, loading];

}