import {useState, useEffect} from 'react'
import { Box, Button, Stack,  TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions );

      console.log(bodyPartsData)

      setBodyParts(["all", ...bodyPartsData]);
    }

    fetchExercisesData();

  }, [])

  const handleSearch = async() => {

    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions );
      // console.log(exercisesData)

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
     
      console.log(searchedExercises)

      setSearch('');
      setExercises(searchedExercises)
    }
  }


  return (
    <Stack alignItems='center' mt='40px' justifyContent='center' p='20px'>
      <Typography 
        fontWeight={700}
        sx={{ fontSize:{  lg:'40px', xs:'30px'}}}
        mb="50px"
        textAlign="center"
      
      >
        Awesome Exercises You <br/>
        Should Know 
      </Typography>
      <Box position='relative' mb="72px">
        <TextField 
            sx={{ 
              input:{ 
                fontWeight:'700', 
                border:"none", 
                borderRadius:'30px',
              }, 
              width: {lg:'800px', xs:"300px"},
              backgroundColor: 'white'
            }}
            height="70px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Your Favorite Exercise'
            type='text'
        
        />
        <Button className='search-btn'
            sx={{
              bgcolor:"#FF2625",
              color:"#ffff",
              textTransform:"none",
              width: { lg:"170px", xs:"100px"},
              fontSize: { lg:"20px", xs:"15px"},
              height:"56px",
              position:"absolute",
              right:'0'
            }}
            onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

      <Box sx={{ position:"relative", width:"100%", p:'20px'}}>
        <HorizontalScrollBar  data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>

      </Box>

    </Stack>
  )
}

export default SearchExercises
