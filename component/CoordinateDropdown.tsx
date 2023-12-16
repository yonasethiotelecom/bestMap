// components/CoordinateDropdown.tsx
import { useState } from 'react';

type Location = {
  name: string;
  coordinates: [number, number];
};

const allLocations: Location[] =  [
  { name: 'National Museum of Ethiopia', coordinates: [9.0227, 38.7460] },
  { name: 'Meskel Square', coordinates: [9.0366, 38.7564] },
  { name: 'Bole International Airport', coordinates: [8.9779, 38.7991] },
  { name: 'Holy Trinity Cathedral', coordinates: [9.0087, 38.7616] },
  { name: 'Addis Ababa University', coordinates: [9.0084, 38.7489] },
  { name: 'Ethnological Museum', coordinates: [9.0222, 38.7465] },
  { name: 'Unity Park', coordinates: [9.0273, 38.7613] },
  { name: 'Piazza', coordinates: [9.0227, 38.7460] },
  { name: 'African Union Headquarters', coordinates: [9.0357, 38.7504] },
  { name: 'Entoto Mountain', coordinates: [9.0007, 38.7619] },
  { name: 'Addis Mercato', coordinates: [9.0146, 38.7916] },
  { name: "St. George's Cathedral", coordinates: [9.0086, 38.7856] },
  { name: 'National Palace', coordinates: [9.0081, 38.7745] },
  { name: 'Yekatit 12 Monument', coordinates: [9.0038, 38.7433] },
  { name: 'Addis Ababa Stadium', coordinates: [9.0275, 38.7412] },
  { name: 'Menelik II Square', coordinates: [9.0099, 38.7625] },
  { name: 'United Nations Economic Commission for Africa (UNECA)', coordinates: [9.0359, 38.7485] },
  { name: 'AU Conference Center and Office Complex', coordinates: [9.0369, 38.7508] },
  { name: 'Addis Ababa City Hall', coordinates: [9.0083, 38.7618] },
  { name: 'Hilton Addis Ababa', coordinates: [9.0380, 38.7615] },
];

const CoordinateDropdown: React.FC<any> = ({getSearchResults}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCoordinates, setSelectedCoordinates] = useState<any>([]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedName = e.target.value;
    setSelectedLocation(selectedName);

    const foundLocation = allLocations.find(location => location.name === selectedName);
    if (foundLocation) {
      setSelectedCoordinates(foundLocation.coordinates);
      getSearchResults(foundLocation.coordinates)
    
    } else {
      setSelectedCoordinates([]);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <label htmlFor="location" className="mb-2 text-lg font-semibold">
        Select a Location:
      </label>
      <select
        id="location"
        onChange={handleLocationChange}
        value={selectedLocation}
        className="p-2  border-2 block border-black-300 rounded-md  "
      >
        <option value="">Select...</option>
        {allLocations.map((location, index) => (
          <option key={index} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>

      {selectedCoordinates.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Coordinates for {selectedLocation}:</h3>
          <p>Latitude: {selectedCoordinates[0]}</p>
          <p>Longitude: {selectedCoordinates[1]}</p>
        </div>
      )}
    </div>
  );
};

export default CoordinateDropdown;
