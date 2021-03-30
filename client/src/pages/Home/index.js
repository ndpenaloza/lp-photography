import { Component } from 'react';
import Navbar from '../../components/Navbar';

class Home extends Component {
  render() {
    return(
      <div>
        <header>
          <Navbar/>
        <h1>
          This is the home page
        </h1>
        </header>
        <main>
        </main>
      </div>
    )
  }
}

export default Home;