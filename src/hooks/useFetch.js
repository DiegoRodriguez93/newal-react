import React,{useEffect, useState} from 'react';
import axios from 'axios';

export default function useFetch(url){

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchUrl(){

        const response = await axios(url);

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
            setLoading(false);
        });

        /* setData(response.data); */
        

    }

    useEffect( () => {
        fetchUrl();
    }, [])

    return [data, loading];

}