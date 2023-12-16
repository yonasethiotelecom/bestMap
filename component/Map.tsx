import L, { LatLngExpression } from 'leaflet';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { getDistance } from 'geolib';
import search from './CoordinateDropdown'

interface MapProps {
  latitude: number;
  longitude: number;
  cenlatitude: number;
  cenlongitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude , cenlatitude, cenlongitude}) => {
  const [coord, setCoord] = useState<LatLngExpression>([latitude, longitude]);
  const [cencoord, setcenCoord] = useState<LatLngExpression>([cenlatitude, cenlongitude]);
  const [markers, setMarkers] = useState<LatLngExpression[]>([]);



  

  useEffect(() => {
    const calculateNearbyCoordinates = () => {
      const nearbyCoordinates: LatLngExpression[] =  [
        [9.0227, 38.7460], // National Museum of Ethiopia
        [9.0366, 38.7564], // Meskel Square
        [8.9779, 38.7991], // Bole International Airport
        [9.0087, 38.7616], // Holy Trinity Cathedral
        [9.0084, 38.7489], // Addis Ababa University
        [9.0222, 38.7465], // Ethnological Museum
        [9.0273, 38.7613], // Unity Park
        [9.0227, 38.7460], // Piazza
        [9.0357, 38.7504], // African Union Headquarters
        [9.0007, 38.7619], // Entoto Mountain
        [9.0146, 38.7916], // Addis Mercato
        [9.0086, 38.7856], // St. George's Cathedral
        [9.0081, 38.7745], // National Palace
        [9.0038, 38.7433], // Yekatit 12 Monument
        [9.0275, 38.7412], // Addis Ababa Stadium
        [9.0099, 38.7625], // Menelik II Square
        [9.0359, 38.7485], // United Nations Economic Commission for Africa (UNECA)
        [9.0369, 38.7508], // AU Conference Center and Office Complex
        [9.0083, 38.7618], // Addis Ababa City Hall
        [9.0380, 38.7615], // Hilton Addis Ababa
    ];
    

      /* for (let i = 1; i <= 10; i++) {
        const distance = Math.floor(Math.random() * 10) * 0.01;
        const lat = latitude + distance;
        const lng = longitude + distance;
        nearbyCoordinates.push([lat, lng]);
      } */

      setMarkers(nearbyCoordinates);
    };

    calculateNearbyCoordinates();
  }, [latitude, longitude]);

  

  const findNearestDistance = (): number => {
    const firstNode: any = coord;
    let nearestDistance = Infinity;
    const tolerance = 0.001;
  
    for (const markerCoord of markers as []) {
      const distance = getDistance(
        { latitude: firstNode[0], longitude: firstNode[1] },
        { latitude: markerCoord[0], longitude: markerCoord[1] }
      );
  
      // Subtract the radius of the circle from the distance
      const circleRadius = 100; // radius of the circle (adjust as needed)
      const distanceFromCircle = Math.max(distance - circleRadius, 0);
  
      const finalDistance = distanceFromCircle < tolerance ? 0 : distanceFromCircle;
  
      if (finalDistance < nearestDistance) {
        nearestDistance = finalDistance;
      }
    }
  
    return nearestDistance;
  };
  const calculateRadius = (zoom: number): number => {
   
    return zoom * 10; 
  };
  return (
    <div>
   
      <p>Nearest Distance: {findNearestDistance()} meters</p>
      <MapContainer
        style={{
          height: '100vh',
          width: '100vw'
        }}
        center={cencoord}
        zoom={13}
        maxZoom={18}
        attributionControl={false}
      /*   scrollWheelZoom={false} */
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render the initial marker */}
        <Marker
             icon={
                new L.Icon({
                /*   iconUrl: '/logo192.png', // Update the path to '/logo192.png' in the public folder
                  iconRetinaUrl: '/logo192.png', */
                  iconUrl: MarkerIcon.src,
                  iconRetinaUrl: MarkerIcon.src,
                  iconSize: [25, 41],
                  iconAnchor: [12.5, 41],
                  popupAnchor: [0, -41],
                  shadowUrl: MarkerShadow.src,
                  shadowSize: [41, 41],
                })
          }
          position={cencoord}
        >
          <Popup>
            yonas mulugeta<br />   asrar asrar .
          </Popup>
        </Marker>

        {/* Render the nearby markers */}
        {markers.map((markerCoord :any, index) => (
            <>
       <CircleMarker
       key={index}
       center={markerCoord}
       radius={calculateRadius(1)}
       fillColor="blue"
       fillOpacity={0.1}
       opacity={0}
       color="blue"

       

     >
      
      
     </CircleMarker>

     <Marker
            key={index}
            position={markerCoord}
            icon={
              new L.Icon({
              iconUrl: '/network-5g-svgrepo-com.svg', 
             iconRetinaUrl: '/network-5g-svgrepo-com.svg',
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: MarkerShadow.src,
                shadowSize: [41, 41],
              })
            }
          >
           <Popup>
         Circle {index + 1}
         <br />
         Distance: {getDistance(
                  { latitude:  (coord as any)[0] , longitude:  (coord as any)[1] },
                  { latitude: markerCoord[0], longitude: markerCoord[1] }
                ) } meters
       </Popup>
          </Marker>
          
          </>
          
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;