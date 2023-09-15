import { Grid } from '@mui/material';
import * as React from 'react';
import Item from './Grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = ({id, img, Item}) => {

    const [count, setCount] = useState(0);

    return (
        
        <Grid item xs={4} className='player'>
          <Item>
            <img src={img} height="500"/>
            <div>기호 {id}번</div>
            <span><button onClick={() => { setCount(count + 1); }}>💗</button></span>
            <span>{count}</span>
            <br/>
            <Link id='detail' to={`/detail/${id}`}>자세히 보자잉</Link>
          </Item>
        </Grid>

    )

}

export default PlayerCard;