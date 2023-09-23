import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { optionsExercise, fetchData, optionsPart} from "../api/FetchData";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

export function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const bodyList = async () => {
      const bodyData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        optionsPart
      );
      console.log(bodyData)
      setBodyParts(["all", ...bodyData]);
    };

    const exerciseFunction = async () => {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=400",
        optionsExercise
      );
      setExercises(exerciseData)
    }
    bodyList();
    exerciseFunction();

  }, []);

  const handleSearch = async () => {
    if (search) {
      console.log(search);
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=400",
        optionsExercise
      );
      console.log("excercise", exerciseData);
      const searchExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchExercise);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
}
