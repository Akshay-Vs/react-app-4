import React from "react";
import "./styles.scss";
const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="search-bar-container">
        <input className="search-bar" placeholder="Search..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
            fill="black"
            fill-opacity="0.38"
          />
        </svg>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        className="filter"
      >
        <path
          d="M23.827 0H1.17324C0.132319 0 -0.392925 1.26299 0.344624 2.00054L9.375 11.0323V21.0938C9.375 21.4761 9.56157 21.8345 9.87485 22.0538L13.7811 24.7872C14.5518 25.3267 15.625 24.7799 15.625 23.8271V11.0323L24.6556 2.00054C25.3916 1.26445 24.87 0 23.827 0Z"
          fill="black"
          fill-opacity="0.38"
        />
      </svg>
    </div>
  );
};

export default FilterBar;