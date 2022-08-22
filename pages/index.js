import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { userGet } from '../redux/store/actions/userAction'
import { repositoryGet } from '../redux/store/actions/reposAction'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

export default function Index() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  useEffect(()=>{
    dispatch(userGet('hovsmtpng'));
  })

  return (
    <Container maxWidth="lg">
      <Box
      sx={{
        maxWidth: '100%',
      }}
      >
        <Typography align="center" variant="h4" gutterBottom>
          Github Repository By Hovely Simatupang
        </Typography>
      </Box>

      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      >
      <Stack direction="row" spacing={2}>
        <TextField fullWidth label="User Github" id="SearchUser" />
        <Button size="small" variant="contained" color="info">Search</Button>
      </Stack>
    </Box>
  </Container>
  )
}
