// 10 - JSX Basics
import React from 'react';

function App() {
    /* 
      10 - JSX Basics

      - JSX is compiled into JavaScript.
      - HTML element, props, and children are passed as arguments to React.createElement().
      - React.createElement() returns a React element.
      - A React element is an object that represents a DOM element.
      - JSX is preferable to React.createElement() because it is easier to read and write.
      - React.createElement() is difficult to handle nested elements.
    
    */
    return <h1 id="Test">Heading</h1>;
    return React.createElement('h1', { id: 'Test' }, 'Heading');
    return (
        <h1 id="Test">
            Heading <span>Span</span>
        </h1>
    );
    return React.createElement(
        'h1',
        { id: 'Test' },
        'Heading',
        React.createElement('span', null, 'Span')
    );
    /*
    
      10 - JSX Basics

      - Demonstrating JSX attributes.

    */
    return (
        <label
            // Passing in data types other than strings:
            id={1}
            // Defining attributes with 2+ words:
            tabIndex="0"
            // Exceptions to the 2+ words rule:
            data-color="red"
            aria-label="Accessible"
            // Defining inline styles with an object:
            style={{ backgroundColor: 'red', color: 'white' }}
            // Adding attributes that are reserved in JavaScript:
            className="primary" // class
            htmlFor="id" // for
        >
            Label text
        </label>
    );
    /*

      10 - JSX Basics

      - Experimenting with false(y) values.

    */

    <div>
        Hi
        <div>div: {0}</div>
    </div>;
}

export default App;
