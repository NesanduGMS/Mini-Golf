// Map.jsx
import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highmaps';
import mapDataAustralia from '@highcharts/map-collection/countries/au/au-all.topo.json';
import { useNavigate } from 'react-router-dom';

// City data with coordinates and region keys
const cities = [
  { name: 'Sydney', regionKey: 'au-nsw', lat: -33.8688, lon: 151.2093 },
  { name: 'Melbourne', regionKey: 'au-vic', lat: -37.8136, lon: 144.9631 },
  { name: 'Brisbane', regionKey: 'au-qld', lat: -27.4698, lon: 153.0251 },
  { name: 'Perth', regionKey: 'au-wa', lat: -31.9505, lon: 115.8605 },
  { name: 'Adelaide', regionKey: 'au-sa', lat: -34.9285, lon: 138.6007 },
  { name: 'Hobart', regionKey: 'au-tas', lat: -42.8821, lon: 147.3272 },
  { name: 'Canberra', regionKey: 'au-act', lat: -35.2809, lon: 149.13 },
  { name: 'Launceston', regionKey: 'au-tas', lat: -41.4332, lon: 147.1441 }, // Added Launceston (Tasmania)
];

// Ensure that each region has the correct hc-key
const regionData = [
  ['au-nsw', 1], // New South Wales
  ['au-vic', 1], // Victoria
  ['au-qld', 1], // Queensland
  ['au-wa', 1], // Western Australia
  ['au-sa', 1], // South Australia
  ['au-tas', 1], // Tasmania
  ['au-act', 1], // Australian Capital Territory
  ['au-nt', 1], // Northern Territory (included even if there’s no city displayed)
];

const Map = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Prepare the data for city markers
    const cityData = cities.map((city) => ({
      name: city.name,
      lat: city.lat,
      lon: city.lon,
    }));

    // Create the Highcharts map
    Highcharts.mapChart('map-container', {
      chart: {
        map: mapDataAustralia,
      },
      title: {
        text: null, // No title
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom',
        },
      },
      colorAxis: {
        min: 0,
        max: 1,
        stops: [
          [0, '#00843D'], // Green (Australian cricket team jersey green)
          [1, '#FFCC00'], // Gold (Australian cricket team jersey gold)
        ],
      },
      series: [
        {
          // Map regions data with correct regionKey to prevent white state
          data: regionData,
          name: 'Regions',
          states: {
            hover: {
              color: '#FFD700', // Bright gold on hover
            },
          },
          dataLabels: {
            enabled: false, // Disable province names
          },
        },
        {
          // Cities markers data
          type: 'mappoint',
          name: 'Cities',
          color: '#FF0000', // Marker color: Red
          data: cityData,
          marker: {
            radius: 6, // Marker size
            fillColor: '#FF0000', // Marker fill color
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            color: '#000000', // City name color
            style: {
              fontWeight: 'bold',
            },
          },
          point: {
            events: {
              click: function () {
                navigate(`/${this.name}`);
              },
            },
          },
        },
      ],
    });
  }, [navigate]);

  return (
    <div className="relative w-full bg-gray-100" style={{ height: '100vh' }}>
      {/* Highcharts Map Container */}
      <div id="map-container" style={{ width: '100%', height: '90vh' }}></div>

      {/* Yellow Box on the Right Bottom */}
      <div
        className="absolute right-0 bottom-10 m-4 p-4 rounded-md"
        style={{
          backgroundColor: '#FFCC00',
          color: '#000',
          width: '150px',
          maxWidth: '90%',  // Ensure it doesn’t exceed the screen size
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: add a shadow for better visibility
        }}
      >
        <strong>Legend:</strong>
        <div style={{ marginTop: '5px' }}>Australia Map</div>
      </div>
    </div>
  );
};

export default Map;
