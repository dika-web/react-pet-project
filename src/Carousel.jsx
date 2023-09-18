import { Component } from "react";
import React from "react";
// import useBreedList from "./useBreedList";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProp = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
    console.log(this);
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal"
            />
          ))}
        </div>
      </div>
    );
  }
}

// function CarouselParent ({animal}) {
//     const [breedList] = useBreedList(animal)

//     return <Carousel breedList={breedList}/>
// }

export default Carousel;
