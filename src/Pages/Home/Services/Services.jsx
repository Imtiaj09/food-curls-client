import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold dark:text-violet-400">Food Service</p>
        <h2 className="text-5xl font-semibold">Introduction to Turkish Food</h2>
        <p className="mb-6 mt-4">
          Turkish food and Turkish cuisine are often both rich and savory, a
          true fusion
          <br />
          and refinement of Middle Eastern, Central Asian, Greek,
          <br />
          and Eastern European cuisine due to the legacy of the Ottoman Empire.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
