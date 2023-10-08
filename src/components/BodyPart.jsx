import { Stack, Typography } from "@mui/material"
import Icon from "../assets/icons/gym.png"

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className="bodyPart-card"
        sx={{
            borderTop : bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
        }}
        onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top:'1800', left:'100', behavior:'smooth'})
        }}
        
    >
        <img src={Icon} alt=""  style={{ width:'70px', height:'70px'}}/>
        <Typography  fontSize='21px' fontWeight='bold'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart
