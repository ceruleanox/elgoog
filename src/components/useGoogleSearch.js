import { useState, useEffect } from 'react';
// import API_KEY from '../keys';
// import { searchTerms } from '../data/searchTerms.json';

const CONTEXT_KEY = "f8f6f5229fa039441";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    let modSearch = term.toLowerCase();

    if (modSearch.includes('caucasian')) {
        modSearch = modSearch.replace('caucasian','');
    } else if (modSearch.includes('computer scientist')) {
        modSearch = modSearch + ' Black female'.replaceAll(" ", "+");
    } else if (modSearch.includes('doctor')) {
        modSearch = modSearch + ' female'.replaceAll(" ", "+");
    } else if (modSearch.includes('nurse')) {
        modSearch = modSearch + ' male'.replaceAll(" ", "+");
    } else if (modSearch.includes('lawyer')) {
        modSearch = modSearch + ' asian'.replaceAll(" ", "+");
    } else if (modSearch.includes('ballerina')) {
        modSearch = modSearch + ' African American'.replaceAll(" ", "+");
    } else if (modSearch.includes('model')) {
        modSearch = modSearch + ' plus size'.replaceAll(" ", "+");
    } else if (modSearch.includes('hiring')) {
        modSearch = modSearch + ' veteran military heroes'.replaceAll(" ", "+");
    } else if (modSearch.includes('reads')) {
        modSearch = modSearch + ' disabilitty characters'.replaceAll(" ", "+");
    } else if (modSearch.includes('who\'s who')) {
        modSearch = modSearch + ' leader queer'.replaceAll(" ", "+");
    } else if (modSearch.includes('tiktok')) {
        modSearch = modSearch + ' older adults connecting 80-year'.replaceAll(" ", "+");
    } 
    
    useEffect( () => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${modSearch}`
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
