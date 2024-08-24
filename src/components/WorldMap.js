import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { Tooltip } from 'react-tooltip';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

const WorldMap = () => {

    function generateCoordinates(data) {
        const cityCoordinates = {
            'El Paso': [-106.4850, 31.7619],
            'Stockton': [-121.2908, 37.9577],
            'Plano': [-96.6989, 33.0198],
            'Oakland': [-122.2711, 37.8044],
            'Seattle': [-122.3321, 47.6062],
            'Kansas City': [-94.5786, 39.0997],
            'St. Paul': [-93.0900, 44.9537],
            'Washington': [-77.0369, 38.9072],
            'Las Vegas': [-115.1398, 36.1699],
            'San Antonio': [-98.4936, 29.4241],
            'Wichita': [-97.3375, 37.6872],
            'Hialeah': [-80.2781, 25.8576],
            'Houston': [-95.3698, 29.7604],
            'Dallas': [-96.7970, 32.7767],
            'San Jose': [-121.8863, 37.3382],
            'Boston': [-71.0589, 42.3601],
            'Laredo': [-99.5075, 27.5306],
            'Cincinnati': [-84.5120, 39.1031],
            'Austin': [-97.7431, 30.2672],
            'Detroit': [-83.0458, 42.3314],
            'Chula Vista': [-117.0842, 32.6401],
            'Fort Worth': [-97.3308, 32.7555],
            'Aurora': [-104.8319, 39.7294],
            'Henderson': [-114.9817, 36.0395],
            'Jacksonville': [-81.6557, 30.3322],
            'San Francisco': [-122.4194, 37.7749],
            'Colorado Springs': [-104.8214, 38.8339],
            'Memphis': [-90.0488, 35.1495],
            'Corpus Christi': [-97.3964, 27.8006],
            'Chicago': [-87.6298, 41.8781],
            'Tucson': [-110.9747, 32.2226],
            'Toledo': [-83.5552, 41.6528],
            'Lexington': [-84.5037, 38.0406],
            'Santa Ana': [-117.8678, 33.7455],
            'Jersey City': [-74.0776, 40.7282],
            'Columbus': [-82.9988, 39.9612],
            'Los Angeles': [-118.2437, 34.0522],
            'Denver': [-104.9903, 39.7392],
            'Atlanta': [-84.3880, 33.7490],
            'Newark': [-74.1724, 40.7357],
            'Bakersfield': [-119.0187, 35.3733],
            'Riverside': [-117.3961, 33.9533],
            'Gilbert': [-111.7890, 33.3528],
            'Tulsa': [-95.9928, 36.1539],
            'Minneapolis': [-93.2650, 44.9778],
            'Buffalo': [-78.8784, 42.8864],
            'Greensboro': [-79.7910, 36.0726],
            'Nashville': [-86.7816, 36.1627],
            'Garland': [-96.6389, 32.9126],
            'St. Louis': [-90.1994, 38.6270],
            'Orlando': [-81.3792, 28.5383],
            'San Diego': [-117.1611, 32.7157],
            'Chattanooga': [-85.3097, 35.0456],
            'New York': [-74.0060, 40.7128],
            'Baltimore': [-76.6122, 39.2904],
            'Oklahoma City': [-97.5164, 35.4676],
            'St. Petersburg': [-82.6403, 27.7676],
            'Honolulu': [-157.8583, 21.3069],
            'Phoenix': [-112.0740, 33.4484],
            'Charlotte': [-80.8431, 35.2271],
            'Tampa': [-82.4572, 27.9506],
            'Portland': [-122.6765, 45.5234],
            'Glendale': [-112.1850, 33.5387],
            'Philadelphia': [-75.1652, 39.9526],
            'Lincoln': [-96.6753, 40.8136],
            'Miami': [-80.1918, 25.7617],
            'Arlington': [-97.1081, 32.7357],
            'Indianapolis': [-86.1581, 39.7684],
            'Cleveland': [-81.6944, 41.4993],
            'Fort Wayne': [-85.1394, 41.0793],
            'Anaheim': [-117.9143, 33.8366],
            'Raleigh': [-78.6382, 35.7796],
            'Madison': [-89.4012, 43.0731],
        };
        
      
        return data.map(city => ({
          ...city,
          coordinates: cityCoordinates[city.city] || [0, 0] // Default to [0, 0] if city not found
        }));
      }

  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(null);
  


  useEffect(() => {
    axios
      .get("http://localhost:8080/geographcustomers")
      .then((response) => {
        setData(generateCoordinates(response.data.geographicalDistribution));
      })
      .catch((error) => {
        console.log(error);
        setData("Error");
      });
  }, []);

  return (
    <>
      {data && (
        <ComposableMap>
        <ZoomableGroup center={[-95, 40]} zoom={3}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {data.map((city) => (
            <Marker key={city.city} coordinates={city.coordinates}>
              <circle 
                r={Math.sqrt(city.numberOfCustomers) * 2} 
                fill="#F53"
                stroke="#FFF"
                strokeWidth={1}
                onMouseEnter={() => {
                  setTooltipContent(`${city.city}: ${city.numberOfCustomers} customers`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                data-tooltip-id="city-tooltip"
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      )}
      <Tooltip id="city-tooltip" content={tooltipContent} />
    </>
  );
};

export default WorldMap;