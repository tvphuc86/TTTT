import React from 'react';

function CategoryFilter() {
  return (
    <>
      <div className="brand-filter">
        <span className="title">Category</span>
        <div className="list-brand">
          <button style={{ fontSize: '1em', padding: '10px' }}>
            All Category
          </button>
          <button>
            {' '}
            <img
              src="https://media.istockphoto.com/id/1057455004/vi/vec-to/c%E1%BA%A7m-tay-logo-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-th%C3%B4ng-minh-c%E1%BA%A7m-tay.jpg?s=612x612&w=0&k=20&c=o3CzeaNDGl0yKDIyrjDLljwRL3K-mhPYBdO9-U-qmZc="
              alt=''
            />
          </button>
          <button>
            {' '}
            <img
              src="https://t3.ftcdn.net/jpg/02/49/82/50/360_F_249825007_f5dzNTBuUZoV5nERUWTlPDoU3cvLIBzn.jpg"
alt=''
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default CategoryFilter;
