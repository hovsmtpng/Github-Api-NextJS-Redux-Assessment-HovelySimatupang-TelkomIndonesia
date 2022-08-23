
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from "react-hook-form";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 500,
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const SearchUserGithub = props => {

    const { handleSubmit } = useForm();

    const { open, setOpen, handleChange, setLoading, isSearch, setSearch } = props;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlestartSearch = () => setSearch(true);

    return (
        <div>
        <Modal
            size="lg"
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <Stack direction="row" spacing={1}>
                    <TextField fullWidth label="User Github" name="username" onChange={(e)=>handleChange(e)}/>
                    <Button size="small" variant="contained" color="info" onClick={handlestartSearch}>Search</Button>
                    <Button size="small" variant="contained" color="error" onClick={() => handleClose()}>Close</Button>
                </Stack>
            </Box>
            </Fade>
        </Modal>
        </div>
    );
}

export default SearchUserGithub;
