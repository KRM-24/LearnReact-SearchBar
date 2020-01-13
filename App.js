import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    // onSearchSubmit(term) {
    //     // console.log(term);

    //     // the .then captures the 'promise' received from axios, allows a function to be called once the async axios finishes the request/GET
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID 67bb72b93646f63e54e8a8522cad20a26936170426016056d4eeb86faa3f78c2' 
    //         }
    //     })
    //     .then((response) => {
    //         console.log(response.data.results);
    //     });
    // }

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 67bb72b93646f63e54e8a8522cad20a26936170426016056d4eeb86faa3f78c2' 
            }
        });

        console.log(response.data.results);
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;
