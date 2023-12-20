
import { useCallback, useEffect, useRef, useState } from 'react';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle, Tooltip, useMap,ZoomControl, useMapEvent ,} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Image from 'next/image'


import { Button } from "@/components/ui/button"
import Modal from 'react-modal';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import L, {LatLngTuple } from 'leaflet';

import { getDistance } from 'geolib';
import{sites,Site} from '@/lib/data'
import{SearchField} from './searchField'
import Swal from 'sweetalert2';
import { Compass, Search, TimerReset } from 'lucide-react';
import Link from 'next/link';
import { MapBoxProvider } from 'leaflet-geosearch';

const zoom = 15
const radius=250;


function MapPlaceholder() {
  return (
    <p>
      Map of London.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}

const nearbyCoordinates:Site[] = sites;


  const findNearestDistance = (firstNode: any[]): number => {
   
    let nearestDistance = Infinity;
    const tolerance = 0.001; // Adjust the tolerance value as needed
  
    for (const markerCoord of nearbyCoordinates) {
      const distance = getDistance(
        { latitude: firstNode[0], longitude: firstNode[1] },
        { latitude: Number(markerCoord.Uni_Latitude), longitude:  Number(markerCoord.Uni_Longitude) }
      );
     
      // Subtract the radius of the circle from the distance
      const Radius = radius; // radius of the circle (adjust as needed)
      const distanceFromCircle = Math.max(distance - Radius, 0);
  
      // If the distance is very close to zero, consider it as zero
      const finalDistance = distanceFromCircle < tolerance ? 0 : distanceFromCircle;
  
      if (finalDistance < nearestDistance) {
        nearestDistance = finalDistance;
      }
    }
  
    return nearestDistance;
  };

  interface NetworkInformation extends EventTarget {
    readonly effectiveType: string;
  }
  
  interface NavigatorWithConnection extends Navigator {
    readonly connection?: NetworkInformation;
  }

  //@ts-ignore
function LocationMarker() {
  const [position, setPosition] = useState<LatLngTuple | null>(null);
  const [nerestDistance ,setNerestDistance]=useState<number>(0)



const [flage ,setFlage] =useState(true)
 

  const map = useMapEvents({
    dblclick() {
      map.locate();
      setFlage(false)
      
    },


    
    async locationfound(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      
       setNerestDistance(findNearestDistance([e.latlng.lat, e.latlng.lng]))
console.log("abezakew"+nerestDistance )
if(flage==true){
      Swal.fire({
        title: nerestDistance  == 0
          ?  `5G network available in this area ` 
          : `No 5G network coverage available in this area`,
        icon: 'info',
        showConfirmButton: false,
        timer: 10000, // 10 seconds
        showCloseButton: true,
  
        
      });

    }else{
    setFlage(true)
    }
     
      map.flyTo(e.latlng, map.getZoom());
      

    },
  });



  useEffect(() => {
  
    const nav: NavigatorWithConnection = navigator as NavigatorWithConnection;
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setNerestDistance(findNearestDistance([latitude, longitude]));
         
          map.flyTo([latitude, longitude], map.getZoom());
       
          
        },
        (error) => {
          console.log(error.message); // Log any geolocation error messages for debugging
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, [map]);


  

  return position === null ? null : (

    <>
    <Marker
      draggable={false}
      position={position}
      icon={
        new L.Icon({
          iconUrl: '/googleicon.png', // Update the path to '/logo192.png' in the public folder
          iconRetinaUrl: "/googleicon.png",
          iconSize: [25, 41],
          iconAnchor: [12.5, 41],
          popupAnchor: [0, -41],
          shadowUrl: MarkerShadow.src,
          shadowSize: [41, 41],
        })
      }
    >
  {/*     <Popup> Nearest distance from 5G Network: {nerestDistance} meters</Popup> */}

 {/*  <Popup>  {nerestDistance ==0?'5G network available in this area':'No 5G network coverage available in this area'} </Popup> */}
      


      <Tooltip opacity={1}> {nerestDistance ==0?'5G network available in this area':'No 5G network coverage available in this area'}</Tooltip>
      
    </Marker>
    

</>

  );
}










export default function Map() {
  const fillBlueOptions = { fillColor: "#0072BC" };
  const [center, setCenter] = useState<LatLngTuple>([9.03306, 38.76487]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
const [zoomLevel, setZoomLevel] = useState(15);
const [flag,setFlag]=useState(false)
const [modalIsOpen, setIsOpen] = useState(false);


const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');

const [position2, setPosition2] = useState<LatLngTuple | null>(null);


const handleFindPosition = async (map:any,searchTerm:any) => {

  console.log("yonas mulugeta")
  

  const locationResponse = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}`
  );
  const locationData = await locationResponse.json();

  console.log('Location Object:', locationData);



map.setView([parseFloat(locationData[0].lat), parseFloat(locationData[0].lon)],15)
  setPosition2([parseFloat(locationData[0].lat), parseFloat(locationData[0].lon)]);
  
};



function DisplayPosition({ map }:{map:any}) {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
{/*       latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '} */}
      <button onClick={onClick}><TimerReset size={40} color="#8DC63F" strokeWidth={1} /></button>
    </p>
  )
}













function FindPosition({ map }:{map:any}) {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {

    map.locate();
  
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
    {/*   latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '} */}
      <button onClick={onClick}>      <Compass size={40} color="#8DC63F" strokeWidth={1} /></button>
    </p>
  )
}









function MyComponent() {
  const map = useMap();
  map.on('zoomend', () => {
    console.log("map.getZoom()"+map.getZoom())
    setZoomLevel(map.getZoom());
  });
  return null;
}


const [map, setMap] = useState(null)







const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const query = e.target.value;
  setSearchTerm(query);


  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&city=${query}&country=Ethiopia&state=Addis Ababa`
    );
    const data = await response.json();
    setSearchResults(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  

  }}

  const handleOptionClick =  (index:number,map:any) => {

   
    // Filter the result based on ID
    const filtered :any= searchResults.filter((result:any) => result.id === index);
   if( filtered.length > 0){
  

    map.flyTo([parseFloat(filtered.lat), parseFloat(filtered.lon)], 13);
   }
  
  
  };



 

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  //  subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
 
  
    },
  };

  return (
<div className=' flex flex-col '>

<div> 

<div className=' flex  justify-between  items-center    w-full'  style={{backgroundColor:'#FFFFFF'}}>
        
        <div  style={{  margin: '10px', padding: '10px' }} className=' max-sm:hidden' >
        <Link href="/">
            <Image src='/photoDagm3.png' alt='5G' width={163} height={42} />
            </Link>
       </div>

        <div style={{ color: '#8DC63F', margin: '10px', textAlign: 'center' }}>

    <div className='flex  justify-center  items-center gap-4  max-sm:flex-col '>
      <div className='flex  justify-between items-center w-full '>
      <div  style={{  margin: '10px', padding: '10px' }} className=' sm:hidden' >
        <Link href="/">
            <Image src='/photoDagm3.png' alt='5G' width={163} height={42} />
            </Link>
       </div>
    <h1  className=' text-[1.8rem] max-md:text-sm'  style={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Check Network coverage</h1>
    </div>
    <div className='flex gap-4'>



    <div>
<button className="btn" onClick={() => {
  const modal = document.getElementById('my_modal_4');
  if (modal) {
    //@ts-ignore
    modal.showModal();
  }
}}> <div className="flex items-center">
<span className='whitespace-nowrap'>Advanced Search</span>
<Search size={28} color="#8DC63F" strokeWidth={2.75} />
</div></button>
<dialog id="my_modal_4" className="modal">
<form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
  <div className="modal-box  w-11/12 max-w-5xl   ">



  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    

  <div className='flex flex-col   justify-start items-center mx-auto   gap-4 '>
  <label htmlFor="citySearch" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
    Select a city in Ethiopia (Addis Ababa):
  </label>

  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    className="input input-bordered input-success w-full max-w-xs  sticky top-0"
    onChange={handleInputChange}
  />

<div className="h-48">
 <ul className="m-2 text-red-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {map ? (
    <>
      {searchResults.map((result: any) => (

        
        <li
          key={result.place_id}
          value={result.display_name}
          className="border-b-2 border-gray-300 py-2 px-3 cursor-pointer text-black hover:text-red-500 active:text-blue-600"
          onClick={() => handleFindPosition(map, result.display_name)}
        >
         
          <form method="dialog">
      
      <button className="btn"> {result.display_name}</button>
    </form>
       
        </li>
      ))}
    </>
  ) : null}
</ul>
</div>  
</div>  
    <div className="modal-action ">
    {/*   <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
 */}
    </div>
  </div>
</dialog>
</div>


  

    {map ? <FindPosition map={map} /> : null}
    {map ? <DisplayPosition map={map} /> : null}
    </div>
    </div>
 
   
    <h2 className=' max-md:hidden' style={{ fontSize: '1.1rem' }}>Our 5G coverage is rapidly expanding, bringing lightning-fast speeds to every corner of the nation!</h2>
</div>
       
        
   
         
</div>



</div>


{flag?(<>








</>):(<>
    <div >
     

      <MapContainer
     
          className='flex h-screen mx-auto  z-0'
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        attributionControl={false}
        placeholder={<MapPlaceholder />}
        //@ts-ignore
        ref={setMap}
       
      >
       
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          subdomains="abc"
            
          maxZoom={19}
          bounds={[
            [3.402, 32.997], 
            [14.894, 48.001] 
          ]}
        />
 <SearchField/>
 {position2 && <Marker position={position2} icon={
              new L.Icon({
              iconUrl: '/icongg.png', 
             iconRetinaUrl: '/icongg.png',
                iconSize: [30, 27],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: MarkerShadow.src,
                shadowSize: [41, 41],
              })
            } />}


< MyComponent/>
 {zoomLevel >= 17 ? (<>

        {nearbyCoordinates.map((markerCoord, index) => (
            <>
          
          <Circle center={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]} pathOptions={fillBlueOptions}  fillOpacity={0.2} radius={radius} key={index} opacity={0}>
           <Tooltip opacity={1}>     SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} </Tooltip> 
           
          </Circle>
          <Marker
            key={index}
            position={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]}
            icon={
              new L.Icon({
              iconUrl: '/5G Logo.png', 
             iconRetinaUrl: '/5G Logo.png',
                iconSize: [38, 27],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: MarkerShadow.src,
                shadowSize: [41, 41],
              })
            }
          >
             <Tooltip opacity={1}>SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone}</Tooltip> 
          {/*  <Popup >
           SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} 
      
    
    
       </Popup> */}
          </Marker>
          
          </>
          
        ))}


</>):( zoomLevel >= 15 ? (<>



  {nearbyCoordinates.map((markerCoord, index) => (
            <>
          
          <Circle center={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]} pathOptions={fillBlueOptions}  fillOpacity={0.2} radius={radius} key={index} opacity={0}>
           <Tooltip opacity={1}>     SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} </Tooltip> 
           
          </Circle>
          <Marker
            key={index}
            position={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]}
            icon={
              new L.Icon({
                iconUrl: '/5G Logo.png', 
                iconRetinaUrl: '/5G Logo.png',
                   iconSize: [25, 20],
                   iconAnchor: [8.5, 22],
                   popupAnchor: [0, -22],
                   shadowUrl: MarkerShadow.src,
                   shadowSize: [22, 22],
              })
            }
          >
             <Tooltip opacity={1}>SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone}</Tooltip> 
         {/*   <Popup >
           SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} 
      
    
    
       </Popup> */}
          </Marker>
          
          </>
          
        ))}





</>


):( zoomLevel >= 14 ? (<>



{nearbyCoordinates.map((markerCoord, index) => (
            <>
          
          <Circle center={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]} pathOptions={fillBlueOptions}  fillOpacity={0.2} radius={radius} key={index} opacity={0}>
          <Tooltip opacity={1}>SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} </Tooltip> 
           
          </Circle>
          <Marker
            key={index}
            position={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]}
            icon={
              new L.Icon({
                iconUrl: '/5G Logo.png', 
                iconRetinaUrl: '/5G Logo.png',
                   iconSize: [22, 17],
                   iconAnchor: [8.5, 15],
                   popupAnchor: [0, -22],
                   shadowUrl: MarkerShadow.src,
                   shadowSize: [20, 20],
              })
            }
          >
             <Tooltip opacity={1}>SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone}</Tooltip> 
        {/*    <Popup >
           SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} 
      
    
    
       </Popup> */}
          </Marker>
          
          </>
          
        ))}




</>):(
  
  
  zoomLevel >= 13 ? (<>




{nearbyCoordinates.map((markerCoord, index) => (
            <>
          
          <Circle center={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]} pathOptions={fillBlueOptions}  fillOpacity={0.2} radius={radius} key={index} opacity={0}>
            <Tooltip opacity={1}>SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone}</Tooltip> 
           
          </Circle>
          <Marker
            key={index}
            position={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]}
            icon={
              new L.Icon({
                iconUrl: '/5G Logo.png', 
                iconRetinaUrl: '/5G Logo.png',
                   iconSize: [20, 15],
                   iconAnchor: [6.5, 8],
                   popupAnchor: [0, -8],
                   shadowUrl: MarkerShadow.src,
                   shadowSize: [8, 8],
              })
            }
          >
             <Tooltip opacity={1}>SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone}</Tooltip> 
          {/*  <Popup >
           SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} 
      
    
    
       </Popup> */}
          </Marker>
          
          </>
          
        ))}



 </>):(zoomLevel >= 12 ?(<>
 
 

  {nearbyCoordinates.map((markerCoord, index) => (
            <>
          
          <Circle center={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]} pathOptions={fillBlueOptions}  fillOpacity={0.2} radius={radius} key={index} opacity={0}>
          {/*   <Tooltip opacity={1}>Tooltip for CircleMarker</Tooltip> */}
           
          </Circle>
          <Marker
            key={index}
            position={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]}
            icon={
              new L.Icon({
                iconUrl: '/5G Logo.png', 
                iconRetinaUrl: '/5G Logo.png',
                iconSize: [15, 10],
                iconAnchor: [5.5, 4.5],
                popupAnchor: [0, -4.5],
                shadowUrl: MarkerShadow.src,
                shadowSize: [10, 10],
              })
            }
          >
             <Tooltip opacity={1}>SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone}</Tooltip> 
         {/*   <Popup >
           SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} 
      
    
    
       </Popup> */}
          </Marker>
          
          </>
          
        ))}

 
 
 </>):(zoomLevel >= 11 ?(<>

  {nearbyCoordinates.map((markerCoord, index) => (
            <>
          
          <Circle center={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]} pathOptions={fillBlueOptions}  fillOpacity={0.2} radius={radius} key={index} opacity={0}>
          {/*   <Tooltip opacity={1}>Tooltip for CircleMarker</Tooltip> */}
           
          </Circle>
          <Marker
            key={index}
            position={[Number(markerCoord.Uni_Latitude),Number(markerCoord.Uni_Longitude)]}
            icon={
              new L.Icon({
                iconUrl: '/5G Logo.png', 
                iconRetinaUrl: '/5G Logo.png',
                   iconSize: [10, 8],
                   iconAnchor: [2.5, 5],
                   popupAnchor: [0, -22],
                   shadowUrl: MarkerShadow.src,
                   shadowSize: [10, 10],
              })
            }
          >
         {/*   <Popup >
           SiteID : {markerCoord.SiteID}  <br />
           Region : {markerCoord.Region}  <br />
           zone : {markerCoord.zone} 
      
    
    
       </Popup> */}
          </Marker>
          
          </>
          
        ))}

 </>):(<>
  <Marker
           
            position={center}
            icon={
              new L.Icon({
              iconUrl: '/5G Logo.png', 
             iconRetinaUrl: '/5G Logo.png',
                iconSize: [38, 27],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: MarkerShadow.src,
                shadowSize: [41, 41],
              })
            }
          ></Marker>
 
 </>)))))

)      }

        <LocationMarker />
      
      </MapContainer>
      </div>
      </>)
}

    </div>
  );
}