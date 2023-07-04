import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react';

interface IGoogleMaps {
  lat: number;
  lng: number;
  zoom: number;
  classNameProps: string;
}

const GoogleMaps = ({ lat, lng, zoom, classNameProps }: IGoogleMaps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyBkyI3Cq4E3dn2HaH32MT9O-M6XpfdO1Ls',
      version: 'weekly',
    });

    loader
      .load()
      .then(() => {
        const map = new google.maps.Map(mapContainer.current!, {
          center: { lat: lat, lng: lng },
          zoom: zoom,
        });

        new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map,
          title: 'FotoMiranda',
          icon: {
            url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png',
            scaledSize: new google.maps.Size(20, 25),
          },
        });
      })
      .catch(() => {
        console.warn('Google Maps API não está dispoível.');
      });
  }, [lat, lng, zoom]);

  return <div ref={mapContainer} className={classNameProps} />;
};

export default GoogleMaps;
