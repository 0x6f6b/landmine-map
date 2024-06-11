"use client";
import GoogleMap from "google-maps-react-markers";
import { useRef, useState } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const SeedLandmine = ({
  mineType,
  landUse,
  killed,
  date,
  lat,
  lng,
}: {
  mineType: string | null;
  landUse: string | null;
  killed: number;
  date: Date;
  lat: number;
  lng: number;
}) => (
  <HoverCard openDelay={250}>
    <HoverCardTrigger>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#BB271A"
      >
        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
      </svg>
    </HoverCardTrigger>
    <HoverCardContent>
      <div>
        {mineType && <h3 className="text-base font-bold">{mineType}</h3>}
        {landUse && landUse !== "Unknown" && (
          <p className="text-sm">{landUse}</p>
        )}
        <p className="text-sm">
          {killed} killed on {date.toLocaleDateString()}
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

const UserLandmine = ({
  reportedBy,
  date,
  lat,
  lng,
}: {
  reportedBy: string;
  date: Date;
  lat: number;
  lng: number;
}) => (
  <HoverCard openDelay={250}>
    <HoverCardTrigger>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="3d8c40"
      >
        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
      </svg>
    </HoverCardTrigger>
    <HoverCardContent>
      <div>
        <h3 className="text-base font-bold">Reported by {reportedBy}</h3>
        <p className="text-sm">Reported on {date.toLocaleDateString()}</p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

const Map = ({
  userLandmines,
  seedLandmines,
}: {
  userLandmines: {
    reportedBy: {
      uid: string;
      email: string;
      name: string;
    };
    id: string;
    type: string | null;
    lat: number;
    lng: number;
    landUse: string | null;
    killed: number;
    date: Date;
  }[];

  seedLandmines: {
    id: string;
    type: string | null;
    lat: number;
    lng: number;
    landUse: string | null;
    killed: number;
    date: Date;
  }[];
}) => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  return (
    <div style={{ height: "80vh", width: "90%" }}>
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS as string}
        defaultCenter={{
          lat: 12.5657,
          lng: 104.991,
        }}
        defaultZoom={7}
        mapMinHeight="80vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log("Map moved", map)}
      >
        {seedLandmines.map((landmine) => (
          <SeedLandmine
            key={landmine.id}
            lat={landmine.lat}
            lng={landmine.lng}
            mineType={landmine.type}
            landUse={landmine.landUse}
            killed={landmine.killed}
            date={landmine.date}
          />
        ))}
        {userLandmines.map((landmine) => (
          <UserLandmine
            key={landmine.id}
            lat={landmine.lat}
            lng={landmine.lng}
            reportedBy={landmine.reportedBy.name}
            date={landmine.date}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
