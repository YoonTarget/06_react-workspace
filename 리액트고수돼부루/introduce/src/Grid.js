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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {
                data.map((pl, idx) => (
                    <PlayerCard key={pl.id} {...pl} Item={Item}/>
                ))
            }
            {/* <Grid item xs={4}>
                <Item className='player'>
                    <img src={player1} height="500"/>
                    <div>손흥민</div>
                    <div>토트넘 핫스퍼</div>
                    <span><button onClick={() => {setCount(count + 1)}}>💗</button></span>
                    <span>{count}</span>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item className='player'>
                    <img src={player2} height="500"/>
                    <div>이강인</div>
                    <div>파리 생제르망</div>
                    <span><button onClick={() => {setCount(count + 1)}}>💗</button></span>
                    <span>{count}</span>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item className='player'>
                    <img src={player3} height="500"/>
                    <div>김민재</div>
                    <div>바이에른 뮌헨</div>
                    <span><button onClick={() => {setCount(count + 1)}}>💗</button></span>
                    <span>{count}</span>
                </Item>
            </Grid> */}
        </Grid>
        </Box>
    );
}