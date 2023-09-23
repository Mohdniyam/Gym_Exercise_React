import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Details } from "../components/Details";
import { ExerciseVideos } from "../components/ExerciseVideos";
import { SimilarExercises } from "../components/SimilarExercises";

import { optionsExercise, fetchData} from "../api/FetchData";
import {youtubeOptions } from "../api/FetchData"
import { useParams } from "react-router-dom";

export function ExerciseInfo() {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id }  = useParams();
  console.log(id)

  useEffect(()=>{
    const fetchExerciseData =  async() => {
       const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
       const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, optionsExercise);
       setExerciseDetail(exerciseDetailData);
       const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
       setExerciseVideos(exerciseVideosData.contents);

       const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, optionsExercise);
       setTargetMuscleExercises(targetMuscleExercisesData);
 
       const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, optionsExercise);
       setEquipmentExercises(equimentExercisesData);
      
    }
    fetchExerciseData()
  },[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  );
}
