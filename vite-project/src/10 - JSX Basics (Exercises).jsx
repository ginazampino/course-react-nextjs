import React from 'react';

function App() {
    // Create a div with the class large and the id largeDiv with the text Hi:
    /*
      return (
          <div className="large" id="largeDiv">
              Hi
          </div>
      );
    */
    // Remove the text hi
    // Add a label with the for prop set to inputId and any text
    // Add an input with hthe id inputId, type number, and value of 3 as a number

    return (
        <>
            <label htmlFor="inputId">Number</label>
            <input id="inputId" type="number" value={3}></input>
        </>
    );

    // If you want to be able to change the number, you need to set use "defaultValue" instead of "value".
}

export default App;
