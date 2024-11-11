import Footer from "../components/Footer";
import EventsList from '../components/EventsList'
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (city) => {
    navigate(`/events?city=${city}`);
  };

  return (
    <>
      <main className="homePage">
        <section className="content">
          <div className="btnGroup">
            <button onClick={() => handleClick('Karlsruhe')}>Карлсруе</button>
            <button onClick={() => handleClick('Stuttgart')}>Штутгарт</button>
            <button onClick={() => handleClick('Freiburg')}>Фрайбург</button>
          </div>
            <h1>home page</h1>
        </section>
      </main>
    </>
  );
}



function EventsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city');

  // Use the 'city' parameter to customize the page content or analytics
  console.log(`User came from: ${city}`);

  // ... Rest of your Events page content

  return (
    <div>
      <h1>Events in {city}</h1>
      {/* ... Event listings, etc. */}
    </div>
  );
}