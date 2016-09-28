// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// Import Components
import Footer from './components/footer.component';
import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';
import Progress from './components/progress.component';


// Import Progress Component
// Component Class
class App extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
          <div>
            <Search />
            <Details title={'Track title'} />
            <Player  />
          </div>
        );
    }

}

// Render to ID content in the DOM
ReactDOM.render(
    <App/ > ,
    document.getElementById('content')
);
