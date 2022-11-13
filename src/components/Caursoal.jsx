/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';

// const Caursoal = (props)=>{

//     console.log(props);
//     return <h1>Caursoal</h1>
// }

class Caursoal extends Component {
    state = {
        active : 0 ,
    };

    static defaultProps = {
      images : [`http://pets-images.dev-apis.com/pets/none.jpg`]
    }
    
  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img key={photo} 
                 src={photo}
                 className ={index == active ? "active" : ""}  
                 alt="animal"
                 data-index = {index}
                 onClick={(e)=>{
                  this.setState({active: +e.target.dataset.index})
                 }} 

            />
          ))}
        </div>
      </div>
    );
  }
}

export default Caursoal;
