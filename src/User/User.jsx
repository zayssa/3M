import { Typography, Box, Avatar } from '@mui/material';

const User = ({avatar, name, about}) => {
    return (
        <Box sx={{ display: { md: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', marginLeft: 20 } }} >
            <Box>
                <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
                <Typography color="gray">{about}</Typography>
            </Box>
            <Avatar aria-label="recipe" src={avatar} sx={{ marginLeft: 2 }}></Avatar>
        </Box>
    )
}

export default User;