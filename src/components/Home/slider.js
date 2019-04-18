import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./card"

// var React = require('react');
// var Slider = require('react-slick');
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1}
    return (
      <Slider {...settings} className="paddingTop">
        {/* <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div> */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    )
  }
}
export default SimpleSlider;