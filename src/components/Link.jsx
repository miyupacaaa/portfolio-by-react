import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

function Link(props) {
  return (
    <section className="link">
      <h2>Link</h2>
      <h2>{props.title}</h2>

      <div className="link-text">
        <a href ="https://github.com/miyupacaaa"><GitHubIcon /></a>
      </div>

    </section>
  );
}

export default Link;