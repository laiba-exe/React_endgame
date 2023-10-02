import React, { useEffect, useState } from 'react';

function Youtube() {
  // State to store fetched data
  const [data, setData] = useState([]);
  
  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7164/api/Account/GetUsers'); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Render your data here */}
    </div>
  );
}

export default Youtube;
