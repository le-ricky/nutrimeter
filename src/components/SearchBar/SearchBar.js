import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchBarSubmit(this.state.term)
    }

    onButtonSubmit = () => {
        this.props.onSearchBarSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input 
                            type='text'
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                    <button className="ui button primary" onClick={this.onButtonSubmit}>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;