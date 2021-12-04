import React from 'react';
import './Results.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../components/useGoogleSearch';
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import Logo from '../images/logo.png';
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
function Results() {
    const [{ term }, dispatch] = useStateValue();

    // LIVE API CALL
    const { data } = useGoogleSearch(term);

    // console.log(data)
    return (
        <div className="resultsPage">
            <div className="resultsPage__header">
              <Link to="/">
                <img
                  className="resultsPage__logo"
                  src={Logo}
                  alt="Elgoog logo"
                />
              </Link>
              <div className="resultsPage__headerBody">
                <Search hideButtons />

                <div className="resultsPage_options">
                  <div className="resultsPage_optionsLeft">
                    <div className="resultsPage_option">
                        <SearchIcon />
                        <Link to="/all">All</Link>
                    </div>
                    <div className="resultsPage_option">
                      <DescriptionIcon />
                      <Link to="/news">News</Link>
                    </div>
                    <div className="resultsPage_option">
                      <ImageIcon />
                      <Link to="/images">Images</Link>
                    </div>
                    <div className="resultsPage_option">
                      <LocalOfferIcon />
                      <Link to="/shopping">Shopping</Link>
                    </div>
                    <div className="resultsPage_option">
                      <RoomIcon />
                      <Link to="/maps">Maps</Link>
                    </div>
                    <div className="resultsPage_option">
                      <MoreVertIcon />
                      <Link to="/more">More</Link>
                    </div>
                  </div>
            
                  <div className="resultsPage_optionsRight">
                    <div className="resultsPage_option">
                      <Link to="/settings">Settings</Link>
                    </div>
                    <div className="resultsPage_option">
                      <Link to="/tools">Tools</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {term && (
              <div className="resultsPage__results">
                <p className="resultsPage__resultCount">
                  About {data?.searchInformation.formattedTotalResults} results (
                  {data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>

              {data?.items.map((item) => (
                <div className="resultsPage__result">
                  <a href={item.link + "?q=" + term}>
                    {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && (
                        <img
                          className="resultsPage__resultImage"
                          src={item.pagemap?.cse_image[0]?.src}
                          alt=""
                        />
                      )}
                    {item.displayLink}
                  </a>
                  <a className="resultsPage__resultTitle" href={item.link+ "?q=" + term}>
                    <h2>{item.title}</h2>
                  </a>
                  <p className="resultsPage__resultSnippet">{item.snippet}</p>
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Results