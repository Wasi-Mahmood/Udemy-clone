import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function MyCoursesPage(){

const [MyCourses, setMyCourses] = useState([])
console.log("🚀 ~ file: mycourses.js:6 ~ MyCoursesPage ~ MyCourses:", MyCourses)
const [showComponent, setShowComponent] = useState(false);


    useEffect(()=>{
        document.title = "My Courses";
    })


    // Retrieve the courses from local storage on page load
    useEffect(() => {
    const storedCourses = localStorage.getItem("MyCourses");
    if (storedCourses) {
      setMyCourses(JSON.parse(storedCourses));
    }
    }, []);


    var courseList =[]
    for(let i=0 ; i<MyCourses.length; i++){
        courseList.push(

            <div className="course-page rel flex">
            <div className="course-info rel">
              <div className="tutor rel aic flex">
                <div className="pic">
                  <img src={MyCourses[i].tutor.dp} className="bl" alt="Tutor" />
                </div>
                <div className="meta rel">
                  <h2 className="s15 name fontb c333">{MyCourses[i].tutor.name}</h2>
                  <h2 className="s13 uname fontn c777">Course Tutor</h2>
                </div>
              </div>
      
              <div className="course-meta">
                <h2 className="s24 title fontb c333">{MyCourses[i].title}</h2>
                <p
                  className="s18 about fontn c777"
                  dangerouslySetInnerHTML={{ __html: MyCourses[i].about }}
                />
      
                <div className="section section-b rel">
                  <h2 className="title s24 fontb">
                    Course <span className="fontn">Achievements</span>
                  </h2>
                  <div className="course-stats aic flex">
                    <div className="stats-box flex">
                      <div className="ico ico-points s24 icon-shield" />
                      <h2 className="val s15 c333 fontb">1800</h2>
                      <h2 className="lbl s13 c777">points</h2>
                    </div>
                    <div className="stats-box flex">
                      <div className="ico ico-battery s24 icon-battery-90" />
                      <h2 className="val s15 c333 fontb">45.3%</h2>
                      <h2 className="lbl s13 c777">complete</h2>
                    </div>
                    <div className="stats-box flex">
                      <div className="ico ico-battery s24 icon-battery-90" />
                      <h2 className="val s15 c333 fontb">+26</h2>
                      <h2 className="lbl s13 c777">level</h2>
                    </div>
                  </div>
                </div>
      
                {/* <div className="section section-b rel">
                  <h2 className="title s24 fontb">
                    Course <span className="fontn">Details</span>
                  </h2>
                  <div className="course-videos aic flex">{}</div>
                </div> */}
              </div>
            </div>
      
              <div className="course-preview rel">
                <div className="player rel">
                  <video poster={MyCourses[i].poster} />
                  <div className="ctrls abs aic flex">
                    <button className="icon-pause s24 pp" />
                    <div className="timer rel fontn s15 cfff">
                      02:54 / 09:55
                    </div>
      
                    
                    <div className="slider rel">
                      <div className="prog rel">
                        <div className="bar rel">
                          <div className="knob abs" />
                        </div>
                      </div>
                    </div>
      
                    
                    <button className="icon-volume-100 s24 vol" />
                    <button className="icon-full-screen-enter2 s24 fs" />
                  </div>
                </div>
                </div>

                </div>

        
        )
    }








useEffect(() => {
    setTimeout(() => {
        setShowComponent(true)
    }, 1000);

}, [])


if(!showComponent){
    return (<div>LOADING ...</div>)
}


    return (

       <div>
        {courseList}
        <div className="search-results11">
            {/* <NavLink to={`/course/${MyCourses[0].ID}`} className="search-results" key={`search-results-${MyCourses[0].ID}`}> */}
              {/* Display the matching results and allow user to click on the object */}
              {/* <h3>{MyCourses[0].title}</h3> */}
              {/* <p>Tutor: {result.tutor.name}</p> */}
              {/* Add additional details or styling as needed */}
            {/* </NavLink> */}
          </div>
        
       </div>


    // <div>
    //     <h1>MESSI</h1>
    // </div>
    )
    
}

export default MyCoursesPage;