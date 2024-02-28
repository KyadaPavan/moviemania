import React from "react";
import styles from "@/app/styles/common.module.css";
import Moviecard from "@/app/components/Moviecard";

const movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9aa2216fd9msha15b7900cc59ac3p16f7e4jsn874a659d3777',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem) => {
                return <Moviecard key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
