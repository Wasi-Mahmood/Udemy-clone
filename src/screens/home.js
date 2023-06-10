import React, {useEffect, useState,useRef} from "react";
import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";

import {
    NavLink,    
} from "react-router-dom";

function HomePage(){

    useEffect(()=>{
        document.title = "Udemy";
    })

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    console.log("🚀 ~ file: home.js:17 ~ HomePage ~ searchResults:", searchResults)
    const [showSearchResults, setShowSearchResults] = useState(false);
    const searchResultsRef = useRef();




    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            tutor: {
                ID: 1,
                name: "Wasi Mahmood",
                username: "Wasi",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",            
            poster: Course1
        },
        {
            ID: 2,
            title: "Creating a beautiful Portrait Illustration. Learning new Technics and Tricks.",
            tutor: {
                ID: 2,
                name: "Affan ",
                username: "Affan",
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "1 hr 13 min",            
            poster: Course2
        }
    ]);

    const [topTutors, setTopTutors] = useState([
        {
                ID: 1,
                name: "Wasi Mahmood",
                username: "Wasi",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Rabia Maryam",
            username: "Rabia",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },        
        {
            ID: 3,
            name: "Haris Zafar",
            username: "Haris",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
        },
        {
            ID: 4,
            name: "Syed Maaz",
            username: "Maaz",
            dp: "http://placeimg.com/100/100/people?tutors-" + 4,
        },
        {
            ID: 5,
            name: "Affan Ahmad",
            username: "Affan",
            dp: "http://placeimg.com/100/100/people?tutors-" + 5,
        },        
        {
            ID: 6,
            name: "Xavi Hernandez",
            username: "Xavi",
            dp: "http://placeimg.com/100/100/people?tutors-" + 6,
        }
    ]);

    //Live Tutors List
    var tutorList = [];
    for(let i = 0; i < 8; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i}  className="bl" />
            </button>
        );
    }

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topTutors[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                        <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                    </div>
                </div>                
            </a>
        );
    }

    // const handleSearch = (event) => {
    //     event.preventDefault();
    //     const results = popularCourse.filter((course) =>
    //       course.title.toLowerCase().includes(searchValue.toLowerCase())
    //     );
    //     setSearchResults((prevResults) => [...prevResults, ...results]);
    //     setSearchValue('');
    //   };
    

    const handleSearch = (event) => {
        event.preventDefault();
        const results = popularCourse.filter((course) =>
          course.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(results);
        setShowSearchResults(true);
        setSearchValue('');
      };




      const handleClickOutside = (event) => {
        if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
          setSearchResults([]);
          setShowSearchResults(false);

        }
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    



    return (
      <div className="home-page rel">


        <div className="SearchBar">
        <form action="#" className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            className="search-input"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      {/* Display search results */}
      {showSearchResults && (
        <div
          className="search-results"
          style={{
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '16px',
            marginTop: '16px',
            overflow: 'auto',
            maxHeight: '200px', // Adjust the max height as needed
          }}
          ref={searchResultsRef}
        >
             {searchResults.map((result) => (
                <div className="search-results11">
            <NavLink to={`/course/${result.ID}`} className="search-results" key={`search-results-${result.ID}`}>
              {/* Display the matching results and allow user to click on the object */}
              <h3>{result.title}</h3>
              {/* <p>Tutor: {result.tutor.name}</p> */}
              {/* Add additional details or styling as needed */}
            </NavLink>
            </div>
          ))}
        </div>
      )}

        
        {/**Tutors Live Now */}
        <div className="section rel">
          <h2 className="title s24 fontb">
            Streaming <span className="fontn">Now</span>
          </h2>
          <div className="tutors rel flex">{tutorList}</div>
        </div>

        {/**Popular Courses */}
        <div className="section section-b rel">
          <h2 className="title s24 fontb">
            Popular <span className="fontn">This Week</span>
          </h2>
          <div className="courses rel flex">{courseList}</div>
        </div>

        {/**Top Tutors */}
        <div className="section section-b rel">
          <h2 className="title s24 fontb">
            Top <span className="fontn">Tutors</span>
          </h2>
          <div className="top-tutors rel flex">{topTutorsList}</div>
        </div>
      </div>
    );
}

export default HomePage;