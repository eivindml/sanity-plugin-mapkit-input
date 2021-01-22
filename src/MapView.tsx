import React, { useEffect, useState } from "react";
import { Map, useMap } from "react-mapkit";
import config from "config:mapkit-input";
import {
  PatchEvent,
  set,
  setIfMissing
} from "part:@sanity/form-builder/patch-event";

interface MapViewProps {
  type: {
    name: string;
  };
  value: any;
  onChange(value: any): void;
}

export const MapView = (props: MapViewProps) => {
  const { mapkit, map, mapProps } = useMap();
  const [annotation, setAnnotation] = useState(null);

  /** Update value in Sanity, when the marker is moved. */
  const handleChange = (lng: number, lat: number) => {
    props.onChange(
      PatchEvent.from([
        setIfMissing({
          _type: props.type.name
        }),
        set(lat, ["lat"]),
        set(lng, ["lng"])
      ])
    );
  };

  /** Update annotation when value is updated. Default to config lat/lng. */
  useEffect(() => {
    if (!map || !mapkit) return;

    const coordinate =
      !props.value || !props.value.lng || !props.value.lat
        ? config.defaultCoordinate
        : props.value;

    const annotation = createAnnotation(mapkit, coordinate);

    annotation.addEventListener("drag-end", function () {
      handleChange(
        annotation.coordinate.longitude,
        annotation.coordinate.latitude
      );
    });

    setAnnotation(annotation);
  }, [map, mapkit, props.value]);

  /** Update the map when the annotation is updated. */
  useEffect(() => {
    if (!map || !annotation) return;
    map.removeAnnotations(map.annotations);
    map.showItems([annotation], {
      animate: true
    });
  }, [map, annotation]);

  return <Map {...mapProps} />;
};

export function createAnnotation(mapkit: any, value: any) {
  if (mapkit === undefined) return null;

  const annotation = new mapkit.MarkerAnnotation(
    new mapkit.Coordinate(value.lat, value.lng),
    {
      color: config.color,
      glyphText: config.glyphText,
      draggable: true,
      selected: true
    }
  );

  return annotation;
}
