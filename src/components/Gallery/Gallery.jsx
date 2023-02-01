import React from 'react';
import { Card, Skeleton } from "./index";
import styles from "./galery.module.scss";
import useFetch from "../../hooks/useFetch";
import { lodgingsUrl } from "../../urls";

const Gallery = () => {
  const { data, isWatingFetch, error } = useFetch(lodgingsUrl);

  return (
    <div className={styles.gallery}>
      {error && error.message}
      {isWatingFetch && <Skeleton size={9} />}
      {data.map((logement) => {
        return <Card key={logement.id} logement={logement} />;
      })}
    </div>
  );
};

export default Gallery;