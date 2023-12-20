import React, { useState } from "react";

import heart from "../assets/images/iconeCoeur.png";
import star from "../assets/images/iconeEtoile.png";
import Gaia from "../assets/images/gaiaImg.jpg";

import styles from "../styles/Card.module.scss";

function Card() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleFavoriteClick = () => {
    setFavoriteCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.ProfileCard}>
      <div className={styles.ProfilePicture}>
        <img className={styles.Gaia} src={Gaia} alt="Petit chien" />
      </div>

      <div className={styles.Details}>
        <h1>Gaïa</h1>
        <h2>Berger Australien</h2>
        <p className={styles.Ed}>Actrice d'Ed dans le Roi Lion</p>

        <div className={styles.Line}></div>

        <div className={styles.Icones}>
          <div className={styles.LikeContainer} onClick={handleLikeClick}>
            <span className={styles.LikeCounter}>{likeCount}</span>
            <img className={styles.Heart} src={heart} alt="Petit coeur" />
          </div>

          <div className={styles.LikeContainer} onClick={handleFavoriteClick}>
            <span className={styles.FavoriteCounter}>{favoriteCount}</span>
            <img className={styles.Star} src={star} alt="Petite etoile" />
          </div>
        </div>
        <p>
          Gaïa est une boule d'énergie. Elle adore les câlins et surtout, faire
          des bêtises !
        </p>
      </div>
    </div>
  );
}

export default Card;
