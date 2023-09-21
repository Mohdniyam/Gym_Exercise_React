import React, { useEffect } from "react";
import { fetchData, optionsExercise } from "../api/FetchData";

export function Exercises({ setExercises, exercises, bodyPart }) {
  useEffect(() => {}, []);
  return <div>{console.log(exercises)}</div>;
}
