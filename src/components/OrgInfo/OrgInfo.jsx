import React from 'react';
import styles from './OrgInfo.module';

const OrgInfo = ({ content }) => {
  return (
    <section>
      <h1 className={`fz-heading-1 ${styles.title}`}>{content.title}</h1>
      <p className={styles.desc}>
        {content.description} <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        quasi et nesciunt commodi perferendis similique totam ex maxime, harum
        consectetur quia deleniti officia consequuntur a ad. Corrupti
        praesentium sapiente totam repudiandae ea, eius adipisci provident ut
        quasi voluptatem ex minima cupiditate itaque quas, veniam tempora, unde
        explicabo illum tempore optio? Atque aliquam, beatae saepe dicta autem
        explicabo, quam quidem laboriosam necessitatibus incidunt voluptatibus
        molestiae sunt hic. Id esse harum, iste inventore amet tenetur
        reprehenderit culpa explicabo dolores quae quam error vitae ducimus,
        veniam quos. Numquam itaque consequatur dignissimos. Temporibus dolorem
        nemo impedit maiores a vero deleniti distinctio, qui error eaque modi,
        inventore possimus perferendis tempora consequuntur obcaecati iusto
        vitae? Itaque, illo id earum mollitia minus error modi maiores, cumque
        sunt autem laborum culpa, adipisci sed eum dolores perspiciatis
        consectetur nemo voluptates officia. Aspernatur cupiditate quam aut illo
        temporibus, odit fugiat, itaque possimus quod consequatur eveniet enim
        iste quis modi repudiandae impedit excepturi mollitia, atque unde
        voluptates! Dolorum incidunt eum quisquam neque blanditiis molestias
        tempore quia, quaerat odit similique distinctio placeat autem earum
        suscipit inventore deserunt perferendis vero quidem nobis officiis
        mollitia! Distinctio magnam quaerat, ullam tempore assumenda mollitia
        recusandae laborum hic debitis eligendi libero pariatur iusto, magni
        quis veritatis esse similique sequi voluptatem nobis iste dolorum. Velit
        rem eum inventore sapiente laborum cupiditate quas consectetur molestias
        et tempora unde iste necessitatibus animi, repellat placeat.
        Voluptatibus, libero facere. Voluptas molestias ipsum distinctio error
        quod amet earum repellat perferendis? Sint nobis deleniti corrupti
      </p>
    </section>
  );
};

export default OrgInfo;
