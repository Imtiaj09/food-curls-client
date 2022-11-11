import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AllServices from "./AllServices";

const FoodServices = () => {
  const [services, setServices] = useState([]);
  useTitle("Services");

  useEffect(() => {
    fetch("https://food-curls-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-3xl mb-10 font-bold dark:text-violet-400">
          All Food Service
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <AllServices key={service._id} service={service}></AllServices>
        ))}
      </div>
    </div>
  );
};

export default FoodServices;
