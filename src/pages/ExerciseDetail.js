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
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const fetchExerciseData = 'https://exercisedb.p.rapidapi.com';
      const YouTubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com/channel/about';

      const exerciseDetailData = await fetchData(`${fetchExerciseData}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${YouTubeSearchURL}/search?q=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideoData);



    };
    fetchExerciseDetail();

  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}  />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail