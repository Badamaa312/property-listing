"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import data from "../../mock/data.json";
import { SearchDropDown } from "../search/SearchDropDown";

export const Map = ({ lat, long }) => {
  const mapRef = useRef(null);

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
  }, []);

  return (
    <div className="w-[600px] h-[1000px]" ref={mapRef}>
      {data.properties.lat}
    </div>
  );
};
