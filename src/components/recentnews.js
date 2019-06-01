import React, { Component } from 'react';


class RecentNews extends Component {
  constructor(props){
    super(props)
      this.state = {
        hubbleNews: [],
        isLoaded: false,
      }
  }

// componentDidMount() {
//     fetch('https://bypasscors.herokuapp.com/api/?url=http://hubblesite.org/api/v3/news')
//     .then(response => response.json())
//     .then(json => {
//       this.setState({
//         hubbleNews: json,
//         isLoaded: true,})
//
//       }
//     )
// }


render(){

  let { hubbleNews, isLoaded } = this.state

  if (!isLoaded) {
    return <h1>Loading.....</h1>
      }

  else {


  return(
    <div className="recentnews">
      {hubbleNews.map((hubble) =>
      <p key= {hubble.id}>{hubble.name}</p>)

      }
        </div>

      )
    }
  }
}


export default RecentNews
