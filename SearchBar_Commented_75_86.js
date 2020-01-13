import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // #2.2 changing this to an arrow function automatically binds the 'this' to the correct instance of the class
    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.term);
    }

    // this will break on 'this.state.term' because this is basically 'undefined'
    // #2.1 could fix this by binding in a constructor
    // onFormSubmit(event) {
    //     event.preventDefault();

    //     console.log(this.state.term);
    // }
    
    // #1.2
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/* #2.3 fix is calling an arrow function directly here */}
                {/* <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} 
                            // could force input on change to be UPPERCASE
                            // onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} 
                        />
                        {/* #1.2 */}
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* #1.3 alternate way of handling input changes (i.e. arrow function) */}
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;