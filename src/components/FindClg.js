import React, { useState } from 'react';
import '../style/FindClg.css';
import '../style/CommonSecMedia.css';


function FindCollegeSection({ meritList }) {
    const [results, setResults] = useState([]);
    const [studentMark, setStudentMark] = useState('');
    const [branchName, setBranchName] = useState('all');
    const [collegeName, setCollegeName] = useState('all');
    const [collegeType, setCollegeType] = useState('all');
    const [studentCategory, setStudentCategory] = useState('default');
    const [cityName, setCityName] = useState('all');

    const handleSearch = () => {
        const filteredResults = meritList.filter((item) => {
            const isOpenCategory = studentCategory === 'OPEN';
            const categoryScore = isOpenCategory ? parseInt(item.OPEN) : parseInt(item[studentCategory]);

            if (isOpenCategory && item.OPEN !== '0') {
                return studentMark > categoryScore - 2;
            } else if (categoryScore > 0) {
                return studentMark > categoryScore - 2;
            }

            return false;
        }).filter((item) => (
            (cityName === 'all' || cityName === item.CITY_NAME) &&
            (branchName === 'all' || branchName === item.COURSE_NAME) &&
            (collegeType === 'all' || collegeType === item.COLLEGE_TYPE) &&
            (collegeName === 'all' || collegeName === item.COLLEGE_NAME)
        ));

        setResults(filteredResults);
    };

    const uniqueCityNames = [...new Set(meritList.map(item => item.CITY_NAME))];
    const uniqueCollegeNames = [...new Set(meritList.map(item => item.COLLEGE_NAME))];
    const uniqueCollegeTypes = [...new Set(meritList.map(item => item.COLLEGE_TYPE))];
    const uniqueCourseNames = [...new Set(meritList.map(item => item.COURSE_NAME))];

    return (
        <section>
            <div id="find_college">
                <div id="find_college">
                    <div className="find_college_title">
                        <h2>Let's Verify It</h2>
                    </div>
                    <div className="find_college_input">
                        <div>
                            <label htmlFor="branch_name">Your Marks</label>
                            <br />
                            <input type="number" min="0" max="300" id="student_mark" placeholder="Ex. 276" value={studentMark} onChange={(e) => setStudentMark(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="branch_name">Branch Name</label>
                            <br />
                            <select name="branch_name" id="branch_name" value={branchName}
                                onChange={(e) => setBranchName(e.target.value)}>
                                {/* <!-- option from script --> */}
                                <option key={'all'} value={'all'}>All</option>
                                {uniqueCourseNames.map((course, index) => (
                                    <option key={index} value={course}>{course}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="college_name">College Name</label>
                            <br />
                            <select name="college_name" id="college_name" value={collegeName}
                                onChange={(e) => setCollegeName(e.target.value)}>
                                {/* <!-- option from script --> */}
                                <option key={'all'} value={'all'}>All</option>
                                {uniqueCollegeNames.map((college, index) => (
                                    <option key={index} value={college}>{college}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="college_type">College Type</label>
                            <br />
                            <select name="college_type" id="college_type" value={collegeType}
                                onChange={(e) => setCollegeType(e.target.value)}>
                                <option key={'all'} value={'all'}>All</option>
                                {uniqueCollegeTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="student_category">Category</label>
                            <br />
                            <select name="student_category" id="student_category" value={studentCategory}
                                onChange={(e) => setStudentCategory(e.target.value)}>
                                <option value="default">Select Your Category</option>
                                <option value="OPEN">OPEN</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                                <option value="SEBC">SEBC</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="city_name">City Name</label>
                            <br />
                            <select name="city_name" id="city_name" value={cityName}
                                onChange={(e) => setCityName(e.target.value)}>
                                {/* <!-- option from script --> */}
                                <option key={'all'} value={'all'}>All</option>
                                {uniqueCityNames.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="find_college_search">
                        <button id="notification" onClick={handleSearch}>Search</button>
                    </div>
                    <div className="find_college_success">
                        <h2>Here are the results</h2>
                        <div id="find_college_output">

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row d-felx justify-content-ceneter">
                    {results.map((article) => (
                        <div className="col-md-3 mb-4" key={article._id}>
                            <div className="card">
                                {<img src={article.urlImag} alt={article.title} className="card-img-top" />}
                                <div className="card-body">
                                    <h5 className="card-title">{article.COLLEGE_NAME}</h5>
                                    <p className="card-text">{article.COLLEGE_TYPE}</p>
                                    <p className="card-text">{article.COURSE_NAME}</p>
                                    <a href={article.WEBSITE_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Link
                                    </a>
                                    {/* <p>{console.log(article)}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default FindCollegeSection;