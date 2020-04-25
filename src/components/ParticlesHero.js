import React, { Component } from 'react';
import Particles from 'react-particles-js';


class ParticlesHero extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <div>
            <Particles
                params={{
                     "particles": {
                        "number": {
                          "value": 50,
                          "density": {
                            "enable": true,
                            "value_area": 700 // Denser the smaller the number.
                          }
                        },
                        "color": { // The color for every node, not the connecting lines.
                          "value": "#20FC8F" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
                        },
                        "shape": {
                            "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
                            "stroke": { // The border
                              "width": 1,
                              "color": "##20FC8F"
                            }
                        },
                        "opacity": {
                          "value": 0.5,
                          "random": true
                        },
                        "size": {
                          "value": 6,
                          "random": true
                        },
                        "line_linked": {
                          "enable": true,
                          "distance": 200, // The radius before a line is added, the lower the number the more lines.
                          "color": "#20FC8F",
                          "opacity": 0.5,
                          "width": 2
                        },
                        "move": {
                          "enable": true,
                          "speed": 2,
                          "direction": "bottom", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
                          "random": true,
                          "straight": false, // Whether they'll shift left and right while moving.
                          "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
                          "bounce": false, 
                          "attract": { // Make them start to clump together while moving.
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "bubble"
                      },
            }} />
            </div>
        );
    }
}

export default ParticlesHero;