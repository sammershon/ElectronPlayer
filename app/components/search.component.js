// Import React
import React from 'react';

// Import React's Autocomplete component
import Autocomplete from 'react-autocomplete';

// Create Search component class
class Search extends React.Component{

  render() {
    // Return JSX via render()
    return (
      <div className="search">
        {/*Autocomplete usage with value and behavior handled via this.props*/}
        <Autocomplete
         ref="autocomplete"
         inputProps={{title: "Title"}}
         value={this.props.autoCompleteValue}
         {/*Array of tracks is passed in to items*/}
         items={this.props.tracks}
         {/*Single value selected*/}
         getItemValue={(item) => item.title}
         {/*What happens when an item is selected*/}
         onSelect={this.props.handleSelect}
         {/*What happens when keystrokes are received*/}
         onChange={this.props.handleChange}
         {/*How items are redered.*/}
         renderItem={this.handleRenderItem.bind(this)}
       />
      </div>
    );
  }

}

// Export Search
export default Search
