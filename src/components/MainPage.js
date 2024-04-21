import React from 'react';
import logo from '../assets/hero.png';
import '../script/script'

const MainPage = ({ meritList, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Hello {meritList.length}</h1>
      <div className="card" style={{ width: '800px' }}>
        {meritList.map((article) => (
          <div className="col-md-4 mb-4" key={article._id}>
            <div className="card">
              {<img src={logo} alt={article.title} className="card-img-top" />}
              <div className="card-body">
                <h5 className="card-title">{article.COLLEGE_NAME}</h5>
                <p className="card-text">{article.COLLEGE_TYPE}</p>
                <a href={'https://www.google.com'} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  {article.EWS}
                </a>
                <p>{console.log(article)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
