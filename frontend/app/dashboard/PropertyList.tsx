import React from "react";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    propertyType: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },
  {
    id: 2,
    propertyType: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },
  {
    id: 3,
    propertyType: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },
  {
    id: 4,
    propertyType: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },
  {
    id: 5,
    propertyType: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },
  {
    id: 6,
    propertyType: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },
];

const PropertyList: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-8">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          propertyType={property.propertyType}
          model={property.model}
          location={property.location}
          area={property.area}
          price={property.price}
          availability={property.availability}
        />
      ))}
    </div>
  );
};

export default PropertyList;
