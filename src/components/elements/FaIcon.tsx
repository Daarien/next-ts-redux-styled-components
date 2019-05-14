import React from 'react'
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Size = "sm" | "lg" | "1x";
type FaProps = {
  icon: "faClock" | "chevron-right" | string;
  size?: Size;
}

export function FaIcon({icon, size }: FaProps) {
  return <FontAwesomeIcon icon={faClock} size={size} />;
}