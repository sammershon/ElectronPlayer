// Import React
import React from 'react';

// Import ClassNames
import ClassNames from 'classnames';

// Player component class
class Player extends React.Component {

  render(){
    // Dynamic class names with ClassNames
    const playPauseClass = ClassNames({
      'fa fa-play-circle': this.props.playStatus == 'PLAYING' ? false : true,
      'fa fa-pause-circle': this.props.playStatus == 'PLAYING' ? true : false
    });

    // Return JSX
    return(
      <div className="player">
        {/*Rewind Button*/}
        <div className="player__backward">
          <button onClick={this.props.backward}><i className="fa fa-fast-backward"></i></button>
        </div>
        <div className="player__main">
          {/*Stop Button*/}
          <button onClick={this.props.stop}><i className="fa fa-stop-circle"></i></button>
          {/*Play/Pause Button*/}
          <button onClick={this.props.togglePlay}><i className={playPauseClass}></i></button>
          {/*Random Track Button*/}
          <button onClick={this.props.random}><i className="fa fa-step-forward"></i></button>
        </div>
        {/*Forward Button*/}
        <div className="player__forward">
          <button onClick={this.props.forward}><i className="fa fa-fast-forward"></i></button>
        </div>
      </div>
    )
  }

}

export default Player
