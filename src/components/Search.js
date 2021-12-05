import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from './reducer';
import { Link } from 'react-router-dom';

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue(); 
    const [input, setInput] = useState("");
    const navigate = useNavigate();
 
    const search = (e) => {
        e.preventDefault(); 

        console.log('search request has been submitted for >>', input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });

        navigate('/search');
    };


    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={ e => setInput(e.target.value)} />
                <MicIcon />
            </div>

        {!hideButtons ? (
            <div className="search__buttons">
                <Button 
                  type="submit" 
                  onClick={search} 
                  variant="outlined"
                >
                  Elgoog Search
                </Button>
                <Link to="/" className="lucky" onClick={ () => { 
     window.location.href = 'https://seattle-lgbtq.netlify.app/'; 
     return null; }}>
                <Button 
                    type="submit" 
                    variant="outlined"
                >
                    I'm Feeling Lucky
                </Button>
                </Link>
            </div>
        ) : (
            <div className="search__buttons">
                <Button 
                  className="search__buttonsHidden" 
                  type="submit" 
                  onClick={search} 
                  variant="outlined"
                >
                  Google Search
                </Button>
                <Button 
                  className="search__buttonsHidden" 
                  variant="outlined"
                >
                  I'm Feeling Lucky
                </Button>
            </div>
        )}

        </form>
    );

}

export default Search
