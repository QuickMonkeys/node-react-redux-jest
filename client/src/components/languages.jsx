import React from 'react';

export default class Languages extends React.Component {
    
    constructor() {
        super()
    }
    
    componentDidMount() {
        
       console.log('Languages - componentDidMount');
            $.getJSON( "languages", function( data ) {
                this.setState({tasks: data}, this.bindPanel);
                this.props.actions.populate(data);
            }.bind(this));
        
    }
    
    createRow(item) {
        return  <tr key={item.position}>
                    <td>{item.position}</td>
                    <td>{item.language}</td>
                    <td>{item.rating}</td>
                </tr>
    }
    
    createHeader(total, filtered) {
        return  <thead>
                    <tr>
                        <th colSpan="3">Total: {filtered} of {total}</th>
                    </tr>
        
                    <tr>
                        <th>Position</th>
                        <th>Language</th>
                        <th>Rating</th>
                    </tr>
                </thead>
    }
    
    render() {

        let { data, total } = this.props;
        const rows = data.map((m) => this.createRow(m));
        
        return  <table className="table">
                    {this.createHeader(total, data.length)}
                    <tbody>
                        {rows.length == 0 
                            ? <tr><td colSpan="3" style={{textAlign:'center'}}>{total == 0 ? 'Loading...' : 'Nothing to show.'}</td></tr>
                            : rows}
                    </tbody>
                </table>;
    }
}