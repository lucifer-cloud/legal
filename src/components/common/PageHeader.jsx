import React from 'react';

const PageHeader = ({ title, currentPage, homeLink = "/" }) => {
  return (
    <div className="page_header">
      <div className="page_header_content">
        <div className="container">
          <h2 className="heading">{title}</h2>
          <ul className="breadcrumb">
            <li><a href={homeLink}>Home</a></li>
            <li className="active">{currentPage}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
