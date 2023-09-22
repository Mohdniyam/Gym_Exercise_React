import React, { useEffect } from "react";
import { fetchData, optionsExercise } from "../api/FetchData";
import { Box, Stack, Typography } from "@mui/material";
import { ExerciseCard } from "./ExerciseCard";

export function Exercises({ setExercises, exercises, bodyPart }) {
  useEffect(() => {}, []);
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
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
}
