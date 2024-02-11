import React from 'react';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import './Places.css';

export const Places = () => {

    const highlightPlaces = ["FRA", "SGP", "GBR", "USA","RUS","CHN","MYS","IDN","VNM","THA","PHL","AUS","ESP","PRT","CHE","NLD","BEL","ITA","DEU","ARE","KHM"];
    const markers = [ // Declare the "markers" variable using the "const" keyword
        {name: "Singapore", coordinates: [103.8198, 1.3521], markerOffset: -15},
        {name: "London", coordinates: [-0.1276, 51.5074], markerOffset: -15},
        {name:"Hong Kong", coordinates: [114.1095, 22.3964], markerOffset: -15},
        {name:"Camarillo", coordinates: [-119.0376, 34.2164], markerOffset: -15},
        {name:"Lyon", coordinates: [4.8357, 45.7640], markerOffset: 25},
    ];

    return (
        <div>
            <NavigationBar />
            <div className='places-general'>
                <div className='places-map-box'>
                    <ComposableMap projection="geoMercator" width={800} height={400}>
                        <Geographies geography="/map/features.json">
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const isHighlighted = highlightPlaces.indexOf(geo.id) !== -1;
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill={isHighlighted ? "#F1E5AC" : "#D6D6DA"}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                        
                        {markers.map(({ name, coordinates, markerOffset }) => (
                            <Marker key={name} coordinates={coordinates}>
                                <circle r={7} fill="goldenrod" stroke="#fff" strokeWidth={2} />
                                <text
                                    textAnchor="middle"
                                    y={markerOffset}
                                    style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                                >
                                    {name}
                                </text>
                            </Marker>
                        ))
                        }
                        
                    </ComposableMap>
                    <h1>hello</h1>
                </div>

            </div>
        </div>
    );
};

export default Places;