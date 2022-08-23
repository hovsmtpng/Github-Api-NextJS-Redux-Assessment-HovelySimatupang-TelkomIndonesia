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
import { getRepos } from '../api/getRepos';

import { userGet } from '../redux/store/actions/userAction'
import { repositoryGet } from '../redux/store/actions/reposAction'

import { LoadingScreen } from './components/loadingScreen';

export default function Index() {

  const dispatch = useDispatch();

  const user = useSelector(state => state);
  const dataUser = user.user.user || "";

  const repos = useSelector(state => state);
  const dataRepos = repos.repos.repos || "";

  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [userGithub, setuserGithub] = useState({});
  const [usernames, setUsernames] = useState(false)

  const [showRepo, setshowRepo] = useState('')

  const [formInput, setformInput] = useState('')

  const handleChange = useCallback((e)=>{
      const { name, value } = e.target;
      setformInput(value)
  }, [setformInput])

  const ShowListRepo = useCallback(()=> {
    setshowRepo(true)
  })
  
  useEffect(async () => {
    if(isSearch){
      setLoading(true)
      const res = await getUser(formInput)
      setuserGithub(res)
      setUsernames(res.login)
      if(userGithub){
          dispatch(userGet(userGithub))
          if(usernames){
            dispatch(repositoryGet(usernames))
          }
      }
      setLoading(false) 
      setSearch(false)
      setModalVisible(false)
    }
  },[isSearch, setLoading, formInput, userGithub, usernames])

  if(isLoading) return <LoadingScreen/>

  return (
    <>
    <Container maxWidth="md">
      <Box
      sx={{
        maxWidth: '100%',
      }}
      >
        <Typography align="center" variant="h4" gutterBottom
          style={{
              paddingTop:'20px',
              fontWeight:'bold' // this does the magic
          }}
        >
          Github Repository
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
          Next JS, Redux, Axios & Material UI
        </Typography>
      </Box>

      <Box
      sx={{
        // width: 500,
        maxWidth: '100%',
      }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}
            style={{
                paddingTop:'15px',
                textAlign:'center' // this does the magic
            }}
        >
        <Button size="large" variant="contained" color="info" align="center" onClick={() => setModalVisible(true)}>Search User</Button>
        </Grid>
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
        OpenRepoFunction={ShowListRepo}
        />
        {dataRepos && showRepo && (
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dataRepos.map((data) => (
              <Grid item xs={2} sm={4} md={4} key={data}>
              <RepositoryCard repo={data}></RepositoryCard>
            </Grid>
            ))}
          </Grid>
        </Box>
        )}
        </>
      )}
    </Container>
    </>
  )
}
