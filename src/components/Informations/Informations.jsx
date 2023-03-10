import React from 'react';
import styles from "./informations.module.scss";
import { Title, Location, Host, Tags, Rating, Description, Equipments } from "./index";
import Collapse from "../Collapse/Collapse";
import "../../types";
import { InformationsPropTypes } from "./propTypes";

/**
 * Display all informations from the current lodging
 * 
 * @param {Object} props
 * @param {Lodging} props.lodging
 */

const Informations = ({ lodging }) => {
  const { title, location, host, tags, rating, description, equipments } = lodging;

  return (
    <div className={styles.informations}>
      <Title title={title} />
      <Location location={location} />
      <Host host={host} />
      <Tags tags={tags} />
      <Rating rating={rating} />
      <Collapse name="Description">
        <Description description={description} />
      </Collapse>
      <Collapse name="Équipements">
        <Equipments equipments={equipments} />
      </Collapse>
    </div>
  );
};

Informations.propTypes = InformationsPropTypes;

export default Informations;