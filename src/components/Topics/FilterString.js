import React, { Component } from 'react';

class FilterString extends Component {
    constructor (){
        super(); 

        this.state = {
         names: ['James','Gabe', 'Jacob', 'Destiny', 'Tyler' ],
         userInput: " ",
         filteredNames: []
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterNames(userInput){
        let names = this.state.names;
        let filteredNames = [];

        for ( let i = 0; i < names.length; i++ ){
            if(names[i].includes(userInput) ){
                filteredNames.push(names[i]);
            }
        }
            this.setState ({ filteredNames: filteredNames});

    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.names, null) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton"  onClick={ () => this.filterNames(this.state.userInput) }> Filter</button>
                <span className="resultsBox filterObjectRB">Filtered Names: { JSON.stringify(this.state.filteredNames, null) }</span>
            </div>
        )
    }
}

export default FilterString;