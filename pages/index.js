import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import SearchOverlay from "./components/SearchOverlay";
import GUserProfile from "./components/GithubUserProfile/UserProfile";
import RepositoryCard from "./components/Repository/Repository";

import Typography from '@mui/material/Typography';

import { getUser } from '../api/getUser';
import { userGet } from '../redux/store/actions/userAction'

import { LoadingScreen } from './components/loadingScreen';

export default function Index() {

  const dispatch = useDispatch();

  const user = useSelector(state => state);
  const dataUser = user.user.user || "";

  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [userGithub, setuserGithub] = useState({});

  const [formInput, setformInput] = useState('')

  const handleChange = useCallback((e)=>{
      const { name, value } = e.target;
      setformInput(value)
  }, [setformInput])

  // const fetchuserGithub = async() => {
  //     // console.log(formInput)
  //     const res = await getUser(formInput)
  //     setuserGithub([res])
  //     if(userGithub.length){
  //         dispatch(userGet(userGithub))
  //     }
  //     setLoading(false) 
  //     // setSearch(false)
  // }

  console.log("formInput",formInput)
  useEffect(async () => {
    console.log("isSearch",isSearch)
    if(isSearch){
      setLoading(true)
      const res = await getUser(formInput)
      setuserGithub(res)
      if(userGithub){
          dispatch(userGet(userGithub))
      }
      setLoading(false) 
      setSearch(false)
      setModalVisible(false)
    }
  },[isSearch, setLoading, formInput, userGithub])

  // if(isLoading) return <LoadingScreen/>

  return (
    <>
    <Container maxWidth="md">
      <Box
      sx={{
        maxWidth: '100%',
      }}
      >
        <Typography align="center" variant="h4" gutterBottom>
          Github Repository
        </Typography>
      </Box>

      <Box
      sx={{
        // width: 500,
        maxWidth: '100%',
      }}
      >
      <Stack direction="row" spacing={2}>
        <Button size="small" variant="contained" color="info" align="center" onClick={() => setModalVisible(true)}>Search User</Button>
      </Stack>
      <SearchOverlay
        open={modalVisible}
        setOpen={setModalVisible}
        setLoading={setLoading}
        isLoading={isLoading}
        setformInput={setformInput}
        formInput={formInput}
        handleChange={handleChange}
        setSearch={setSearch}
        isSearch={isSearch}

      />
    </Box>
    </Container>
    <Container>

    {dataUser.id && (
        <>
        <GUserProfile 
        data={dataUser}
        // OpenRepoFunction={OpenListRepo}
        />
        <Box sx={{ flexGrow: 1 }}>
          {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {repository.map((data) => (
              <Grid item xs={2} sm={4} md={4} key={data}>
              <RepositoryCard repo={data}></RepositoryCard>
            </Grid>
            ))}
          </Grid> */}
        </Box>
        </>
      )}
    </Container>
    </>
  )
}
