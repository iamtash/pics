import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
    state = { list: [] }
    
    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID cc5d2593dd12b09a7925fb9c8ff2836609a2f333cfb2cffb5320ff9ea61614b3'
                }
            })
        console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App