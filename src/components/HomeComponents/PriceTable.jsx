import React, { useState, useMemo, useEffect } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

// Import JSON data
import cropPricesData from '../../assets/table.json';

const CropPriceTable = () => {
  const [cropPrices, setCropPrices] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    setCropPrices(cropPricesData);
  }, []);

  // Extract unique states and districts for the dropdown filters
  const states = useMemo(() => [...new Set(cropPrices.map(crop => crop.State_Name))], [cropPrices]);
  const districts = useMemo(() => 
    selectedState ? [...new Set(cropPrices.filter(crop => crop.State_Name === selectedState).map(crop => crop.District_Name))] : [], 
    [cropPrices, selectedState]
  );

  const sortedCropPrices = useMemo(() => {
    let sortableCrops = [...cropPrices];
    if (sortConfig.key !== null) {
      sortableCrops.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCrops;
  }, [cropPrices, sortConfig]);

  const filteredCropPrices = useMemo(() => {
    return sortedCropPrices.filter(crop =>
      (selectedState === '' || crop.State_Name === selectedState) &&
      (selectedDistrict === '' || crop.District_Name === selectedDistrict) &&
      (crop.Crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.District_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.State_Name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [sortedCropPrices, searchTerm, selectedState, selectedDistrict]);

  const paginatedCropPrices = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredCropPrices.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredCropPrices, currentPage]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === 'ascending' ? <ArrowUp size={16} /> : <ArrowDown size={16} />;
    }
    return <ArrowUpDown size={16} />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredCropPrices.length / rowsPerPage);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Crop Prices</h2>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search crops, state, or district..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedDistrict(''); // Reset district when state changes
          }}
        >
          <option value="">All States</option>
          {states.map(state => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          className="p-2 border rounded"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          disabled={!selectedState} // Disable district filter if no state is selected
        >
          <option value="">All Districts</option>
          {districts.map(district => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('Crop')}>
                Crop {getSortIcon('Crop')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('Area')}>
                Area {getSortIcon('Area')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('Production')}>
                Production {getSortIcon('Production')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Season
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Crop Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                State
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                District
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedCropPrices.map((crop) => (
              <tr key={crop.Crop_Year + crop.Crop + crop.District_Name}>
                <td className="px-6 py-4 whitespace-nowrap">{crop.Crop}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.Area}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.Production}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.Season}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.Crop_Year}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.State_Name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{crop.District_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="p-2 border rounded"
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 border rounded"
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CropPriceTable;
