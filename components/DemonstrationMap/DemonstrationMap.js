'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import styles from './DemonstrationMap.module.scss';

const center = [51.505, 0];
const defaultZoom = 2;

function toRadians(x) {
  return (x * Math.PI) / 180;
}

function getTileURL(lat, lon, zoom) {
  const xtile = parseInt(Math.floor(((lon + 180) / 360) * (1 << zoom)));
  const ytile = parseInt(
    Math.floor(
      ((1 -
        Math.log(Math.tan(toRadians(lat)) + 1 / Math.cos(toRadians(lat))) /
          Math.PI) /
        2) *
        (1 << zoom),
    ),
  );
  return '' + zoom + '/' + xtile + '/' + ytile;
}

function DisplayPosition({ map }) {
  const [position, setPosition] = React.useState(() => map.getCenter());
  const [zoom, setZoom] = React.useState(() => map.getZoom());

  const onZoom = React.useCallback(() => {
    setZoom(map.getZoom());
  }, [map]);

  const onMove = React.useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  React.useEffect(() => {
    map.on('move', onMove);
    map.on('zoom', onZoom);
    return () => {
      map.off('move', onMove);
      map.off('zoom', onZoom);
    };
  }, [map, onMove, onZoom]);

  return (
    <div className={styles.crosshair}>
      <div className={styles.crosshairVertical} />
      <div className={styles.crosshairHorizontal} />
      <div className={styles.locationInformation}>
        <strong className={styles.tileURL}>
          {getTileURL(position.lat, position.lng, zoom)}
        </strong>
        <em className={styles.tileURLExplainer}>zoom / x / y</em>
        <span>LAT: {position.lat.toFixed(3)}</span>
        <span>LNG: {position.lng.toFixed(3)}</span>
      </div>
    </div>
  );
}

function HelperMap() {
  const [map, setMap] = React.useState(null);

  const displayMap = React.useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={defaultZoom}
        scrollWheelZoom={true}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    [],
  );

  return (
    <div className={styles.mapContainer}>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
}

export default function DemonstrationMap() {
  return (
    <div className={styles.container}>
      <HelperMap />
    </div>
  );
}
