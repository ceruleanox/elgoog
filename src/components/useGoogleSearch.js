import { useState, useEffect } from 'react';
//import API_KEY from '../keys';
//import { searchTerms } from '../data/searchTerms.json';

const CONTEXT_KEY = "f8f6f5229fa039441";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    let modSearch = ''

    if (term.includes('computer scientist')) {
        modSearch = 'Black female'.replaceAll(" ", "+");
    }
    useEffect( () => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${secrets.API_KEY}&cx=${CONTEXT_KEY}&q=${term}+${modSearch}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();
    }, [term])   

    return { data }
}

// ceruleanox

export default useGoogleSearch