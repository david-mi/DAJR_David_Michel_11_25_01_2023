
import React from 'react';
import styles from "./starIcon.module.scss";
import { StarIconPropTypes } from "./propTypes";

/**
 * @param {Object} props
 * @param {string} props.className
 */

const StarIcon = ({ className }) => {
  return (
    <svg className={styles[className]} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_26_172)">
        <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060" />
      </g>
      <defs>
        <clipPath id="clip0_26_172">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

StarIcon.propTypes = StarIconPropTypes;

export default StarIcon;