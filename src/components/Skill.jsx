import React from 'react';

function Skill(props) {
  return (
    <section className="skill">
      <h2>Skill</h2>
      <h2>{props.title}</h2>

      <div className="skill-text">
        <ul>
          <li>HTML</li>
          <li>CSS(SASS)</li>
          <li>JavaScript(jQuery/React)</li>
          <li>Git</li>
          <li>Adobe XD</li>
          <li>Figma</li>
        </ul>
      </div>

    </section>
  );
}

export default Skill;