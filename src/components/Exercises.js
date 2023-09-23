/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fetchData, optionsExercise } from "../api/FetchData";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { ExerciseCard } from "./ExerciseCard";

export function Exercises({ setExercises, exercises, bodyPart }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  useEffect(()=>{
     console.log(exercises)
  },[exercises])
  useEffect(() => {
    const exerciseFilter = async () => {
      if (bodyPart === "all") {
        const exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=400",
          optionsExercise
        );
        setExercises(exerciseData);
      } else {
        const exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          optionsExercise
          );
          console.log("bodyPart", exerciseData)
        setExercises(exerciseData);
      }
    };

    exerciseFilter();
  }, [bodyPart]);

  // pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}
