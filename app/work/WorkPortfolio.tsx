"use client";
import {useEffect,useState} from 'react';
import {Proof} from '../ContentSections';
import {proofClients} from '../proof-data';
export function WorkPortfolio(){const [client,setClient]=useState('Inventive AI');useEffect(()=>{const c=new URLSearchParams(location.search).get('client');if(c&&proofClients.some(p=>p.name===c))setClient(c)},[]);return <Proof client={client} setClient={setClient}/>}
