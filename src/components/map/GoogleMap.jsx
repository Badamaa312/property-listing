"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { PropertyOnMap } from "./PropertyOnMap";
import data from "../../mock/data.json";

export const Map = ({}) => {
  const mapRef = useRef(null);

  const [searchValue, setSearchValue] = useState("");

  const filteredProperty = data.properties.filter((property) =>
    property?.City?.toLowerCase().includes(searchValue)
  );

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // init marker

      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 43.642693,
        lng: -79.3871189,
        // lat: properties.lat,
        // lng: properties.long,
      };

      // map option

      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJSID",
      };

      // setup the map

      const map = new Map(mapRef.current, mapOptions);
      // put up a marker

      const marker = new Marker({
        map: map,
        position: position,
      });
    };
    initMap();
    setSearchValue();
  }, [searchValue]);

  return (
    <div className="w-[600px] h-[1000px]" ref={mapRef}>
      {filteredProperty.map((property) => {
        return <PropertyOnMap property={property} />;
      })}
    </div>
  );
};
