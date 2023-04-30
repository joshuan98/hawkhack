import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import env from './config.json'
import { CountryType } from './Location';

interface MapProps {
  location: CountryType
}

export default function Map({ location }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = env.MAPBOX_APIKEY

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: new mapboxgl.LngLat(parseFloat(location.long), parseFloat(location.lat)),
      zoom: 12,
    });

    return () => {
      map.remove();
    };
  }, [location.lat, location.long]);

  return <div ref={mapContainerRef} style={{ height: '100vh', width: '100%' }} />;
}
