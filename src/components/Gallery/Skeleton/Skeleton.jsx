import React from 'react';
import SkeletonCard from "./Card/Card";
import { SkeletonPropTypes } from "./propTypes";

/**
 * Skeleton to display while waiting for fetch data
 * 
 * @param {Object} props
 * @param {number} props.length
 */


const Skeleton = ({ length }) => {
  const skeletonArray = new Array(length).fill("");

  return (
    <>
      {skeletonArray.map(() => {
        return <SkeletonCard key={Math.random()} />;
      })}
    </>
  );
};

Skeleton.propTypes = SkeletonPropTypes;

export default Skeleton;