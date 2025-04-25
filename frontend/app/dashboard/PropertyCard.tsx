import React from "react";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
  propertyType: string;
  model: string;
  location: string;
  area: string;
  price: string;
  availability: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  propertyType,
  model,
  location,
  area,
  price,
  availability,
}) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden mb-6">
      <div className="p-6">
        <div className="grid grid-cols-6 gap-8">
          <div>
            <p className="text-[#666] text-xs font-medium mb-1.5">
              Property Type
            </p>
            <p className="text-[#333] text-sm">{propertyType}</p>
          </div>

          <div>
            <p className="text-[#666] text-xs font-medium mb-1.5">Model</p>
            <p className="text-[#333] text-sm">{model}</p>
          </div>

          <div>
            <p className="text-[#666] text-xs font-medium mb-1.5">Location</p>
            <p className="text-[#333] text-sm">{location}</p>
          </div>

          <div>
            <p className="text-[#666] text-xs font-medium mb-1.5">Area</p>
            <p className="text-[#333] text-sm">{area}</p>
          </div>

          <div>
            <p className="text-[#666] text-xs font-medium mb-1.5">Price</p>
            <p className="text-[#333] text-sm">{price}</p>
          </div>

          <div>
            <p className="text-[#666] text-xs font-medium mb-1.5">
              Availability
            </p>
            <p className="text-[#00a082] text-sm">{availability}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#00a082] flex justify-between items-center px-6 py-3">
        <button className="flex items-center gap-2 text-white text-sm">
          <MapPin size={18} className="text-white" />
          <span>View Property Map</span>
        </button>

        <button className="bg-[#f8b133] text-white text-sm px-5 py-1.5 rounded-full hover:bg-[#e6a022] transition-colors">
          View Property Full Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
