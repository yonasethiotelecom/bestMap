import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch';
import 'node_modules/leaflet-geosearch/dist/geosearch.css';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';

import { useEffect, useState } from 'react';
import L from "leaflet";

export const SearchField = () => {
    const provider = new OpenStreetMapProvider({
      params: {
        countrycodes: 'et',
      },
    });
  


    const searchControlOptions = {
      notFoundMessage: 'Sorry, that address could not be found.',
      style: 'button',
      provider: provider,
      showMarker: true,
      marker: {
        icon: new L.Icon({
         
          iconUrl: '/icongg.png', // Update the path to '/logo192.png' in the public folder
          iconRetinaUrl: "/icongg.png",
          iconSize: [20, 41],
          iconAnchor: [12.5, 41],
          popupAnchor: [0, -41],
          shadowUrl: MarkerShadow.src,
          shadowSize: [41, 41],
        }),
    
      },
    
    };
  
    const map = useMap();
  //@ts-ignore
    useEffect(() => {
        //@ts-ignore
      const searchControl = new GeoSearchControl(searchControlOptions);
        
      map.addControl(searchControl);
  
     
  
      return () => map.removeControl(searchControl);
    }, []);
  
    return null;
  };