import React from 'react';
import styles from "./collapses.module.scss";
import Collapse from "../../Collapse/Collapse";
import { aboutData } from "./data";

const Collapses = () => {
  return (
    <section className={styles.collapses}>
      {aboutData.map(({ name, content }) => {
        return (
          <Collapse
            key={name}
            name={name}
            content={content}
          >
            <p>{content}</p>
          </Collapse>
        );
      })}
    </section>
  );
};

export default Collapses;