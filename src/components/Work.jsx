import React from 'react';

function Work(props) {
  return (
    <section className="work">
      <h2>Work</h2>
      <h2>{props.title}</h2>
      <ul>
          <li>ReactとFirebaseを使った掲示板</li>
          <li>Reactを使ったポートフォリオ(ここ)</li>
        </ul>
    </section>
  );
}

export default Work;