import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Playlist from './components/playlist/playlist';
import Footer from './components/footer/footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setArtists([]);
      return;
    }

    const fetchArtists = async () => {
      try {
        const response = await fetch(`http://localhost:3000/artists?genred_like=${searchTerm}`);
        const data = await response.json();
        const filteredArtists = data.filter((artist) =>
          artist.name.toLowerCase().includes(searchTerm)
        );
        setArtists(filteredArtists);
      } catch (error) {
        console.error("Erro ao buscar artistas:", error);
      }
    };

    fetchArtists();
  }, [searchTerm]);

  return (
    <div>
      <Sidebar />
      <Header setSearchTerm={setSearchTerm} />
      <Playlist artists={artists} />
      <Footer />
    </div>
  );
}

export default App;
