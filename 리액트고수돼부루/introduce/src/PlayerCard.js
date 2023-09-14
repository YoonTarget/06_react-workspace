import { Grid } from '@mui/material';
import * as React from 'react';
import Item from './Grid';
import { useState } from 'react';

const PlayerCard = ({id, name, team, position, feature, img, Item}) => {

    const [count, setCount] = useState(0);

    return (
        
        <Grid item xs={4} className='player'>
          <Item>
            <img src={img} height="500"/>
            <div>{name}</div>
            <div>{team}</div>
            <span><button onClick={() => {setCount(count + 1)}}>💗</button></span>
            <span>{count}</span>
          </Item>
        </Grid>

    )

}

export default PlayerCard;