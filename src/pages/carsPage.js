import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import carService from "../services/cars.service";

const CarsPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const { data } = await carService.getAll();
      data?.data && setCars(data.data);
    };
    getCars();
  }, []);

  return (
    <div>
      <div className="container">
        {cars?.map((car) => (
          <div key={car.id}>{car.model}</div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
