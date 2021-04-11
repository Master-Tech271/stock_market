import React from 'react';
import SimpleCard from './card';
import { CardType } from '../../../type';
function Card(props: CardType){
    return <SimpleCard title={props.title} price={props.price} logoURL={props.logoURL} ltpValue={props.ltpValue} ltpPercentage={props.ltpPercentage} ltpStatus={props.ltpStatus}/>
}

export default Card;