import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tourss: tourData
  };
  removeTour = id => {
    const { tourss } = this.state;
    const deletedTours = tourss.filter(tourIt => tourIt.id !== id);
    this.setState({
      tourss: deletedTours
    });
  };
  render() {
    const { tourss } = this.state;

    return (
      <section className="tourlist">
        {tourss.map(item => (
          <Tour key={item.id} tour={item} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
