import React, { Component } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import './home.css'
// import example from './demoImg.jpg'

/**
 * Index holding the index page, displaying
 * one recipe from each category. This feature is
 * not yet completed.
 */
export default class Index extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       recipe_title: '',
//       recipe_cat: ''
//     }
//   }

//   componentDidMount() {
//     axios.get('/recept')
//     .then(res => {
//         console.log(res)
//         this.setState({ 
//           recipe_title: res.data.recipe_title,
//           recipe_cat: res.data.recipe_cat
//          })
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

    render() {
        return (
            <div className="content">
             </div>
        )
    }
}

//             <br/>
//             <p className="welc"></p>
//                 <br/>
//                 <div className="gallery-home">
//                   <img src={example} alt="frukost" width="600" height="400"/>
//                   <div className="r-titel">{this.state.recipe_title}</div>
//                 </div>
//                 <div className="gallery-home">
//                   <img src={example} alt="lunch" width="600" height="400"/>
//                   <div className="r-titel">{this.state.recipe_title}</div>
//                 </div>
//                 <div className="gallery-home">
//                   <img src={example} alt="middag" width="600" height="400"/>
//                   <div className="r-titel">{this.state.recipe_title}</div>
//                 </div>                
//                 <div className="gallery-home">
//                   <img src={example} alt="dessert" width="600" height="400"/>
//                   <div className="r-titel">{this.state.recipe_title}</div>
//                 </div>
//                 <div className="gallery-home">
//                   <img src={example} alt="barnfavoriter" width="600" height="400"/>
//                   <div className="r-titel">{this.state.recipe_title}</div>
//                 </div>
//                 <div className="gallery-home">
//                  <img src={example} alt="special" width="200" height="400"/>
//                  <div className="r-titel">{this.state.recipe_title}</div>
//                 </div>
