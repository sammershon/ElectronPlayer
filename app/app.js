// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Components
import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';
import Progress from './components/progress.component';
import Footer from './components/footer.component';

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
            {/* Added Progress component*/}
            <Progress
              position={'0.3'}
              elapsed={'00:00'}
              total={'0:40'}/>
          </div>
        );
    }

}

// Render to ID content in the DOM
ReactDOM.render(
    <App/ > ,
    document.getElementById('content')
);
