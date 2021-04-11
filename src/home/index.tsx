import React from 'react';
import Card from './components/card';
import {ltpStatus} from '././../constants';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    main_card:{
        display:'flex',
        gap:'1rem',
        flexWrap:'wrap',
    },
});
function Home(){
    const classes = useStyles();
    const price:number = 890.5;
    const logoURL:string = "https://images.unsplash.com/photo-1543643723-19cc65407699?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const ltpValue:number = 895;
    const ltpPercentage:number = 0.8;
    const ltpstatus:ltpStatus = ltpStatus.negative;
    return(
        <div className={classes.main_card}>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
            <Card title="Cipla" price={price} logoURL={logoURL} ltpValue={ltpValue} ltpPercentage={ltpPercentage} ltpStatus={ltpstatus}/>
        </div>
    );
}

export default Home;

