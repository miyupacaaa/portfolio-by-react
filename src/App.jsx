import React from 'react';
// import './assets/styles/style.css';
import { Header, About, Skill, Work, Link, Footer } from './components';
import Container from '@material-ui/core/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Container maxWidth="md">
          <About title={"自己紹介"} />
          <Skill title={"スキル/ツール"} />
          <Work title={"つくったもの"} />
          <Link title={"リンク"} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
