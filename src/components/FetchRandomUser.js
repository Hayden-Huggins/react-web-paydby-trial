import React from 'react'

export default class FetchRandomUser extends React.Component{

    state={
        loading: true,
        person: null
    }

    // making asyncronus API call to API endpoint
    async componentDidMount(){
        const url = "https://www.mocky.io/v2/5b9751e5300000332a0bd52d";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data, loading: false})
        console.log(data);
        console.log(this.state.person.data.first_name);
    }

    render(){
        return <div>
            {/* If loading then show a loading state, if found a person show persons data */}
            {this.state.loading || !this.state.person ? (
            <div>loading...</div>) : (<div>{this.state.person.data.first_name}</div>)}
        </div>
    }
}

