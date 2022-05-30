import { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render () {
        return (
            <div className="row">
              <div className="input-field">
                <input 
                    placeholder="search" 
                    type="search" 
                    className="validate" 
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
              </div>
            </div>
        )
    }
}

export { Search };