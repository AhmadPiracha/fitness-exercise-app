import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'

import Details from '../components/Details'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const ExerciseDbURL = 'https://exercisedb.p.rapidapi.com';
      const YouTubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${ExerciseDbURL}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${YouTubeSearchURL}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExerciseData = await fetchData(`${ExerciseDbURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(`${ExerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExerciseData);

    };
    fetchExerciseDetail();

  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises equipmentExercises={equipmentExercises}
        targetMuscleExercises={targetMuscleExercises} />
    </Box>
  )
}

export default ExerciseDetail