import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import player1 from './img/player1.webp';
import player2 from './img/player2.webp';
import player3 from './img/player3.webp';
import { useState } from 'react';
import PlayerCard from './PlayerCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({data}) {

    return (
        <div className='PlayerList'>
            <h1>축구선수 이상형 찾기</h1>
            <p>당신의 선택은???</p>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    data.map((pl, idx) => (
                        <PlayerCard key={pl.id} {...pl} Item={Item}/>
                    ))
                }
            </Grid>
            </Box>
        </div>
    );
}