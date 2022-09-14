import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './styles.css';

export default function Home() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi(){
      const response = await api.get('trips');
      setTrips(response.data);

      console.log(response.data);
    }

    loadApi();

  },[]);

 return (
   <div>
    <div className="box">
      {trips.map(trip => (
        <li key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong>{trip.title}</strong>
          <span>Status: {trip.status ? 'Disponivel' : 'Indisponível'}</span>
        
        <button
          type="button"
          onClick={() => {}}
        >
          <div>
            <MdFlightTakeoff size={16} color="#FFF" />
          </div>
          <span>SOLICITAR RESERVA</span>
        </button>
        </li>

      ))}
    </div>
   </div>
 );
}