import type {GeoJSONSourceRaw, FillLayer} from 'react-map-gl';

import MAP_STYLE from './map-style-basic.json';

const clubAreas: GeoJSONSourceRaw = {
  type: 'geojson',
  data: '/dataFiles/pointAreas.geojson'
};

const fillLayer: FillLayer = {
  id: 'clubAreas-fill',
  source: 'clubAreas',
  type: 'fill',
  paint: {
    'fill-color': ['get', 'color'],
    // 'fill-color': '#4E3FC8',
    // 'fill-opacity': 0.7
    'fill-opacity': [
      'step', 
      ['zoom'], //input 0
      0.8, // output 0
      12, 0.6,
      13, 0.4 // input1, output1
    ]
  },
};


// Make a copy of the map style
export default {
  ...MAP_STYLE,
  sources: {
    ...MAP_STYLE.sources,
    ['clubAreas']: clubAreas
  },
  layers: [...MAP_STYLE.layers, fillLayer]
};