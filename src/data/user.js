import { Component } from "react"

class user extends Component
{
    async componentDidMount(){
        const url = "https://www.mocky.io/v2/5b9751e5300000332a0bd52d";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data})};
}

export default user