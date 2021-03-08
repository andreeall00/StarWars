import React from 'react'
import './Home.css'


export default function Home({t}) {
    //const title={"en": "Welcome", "ro": "Buna", "fr": "Bienvenu", "sp": "Bienvenido"}
    return (
        <div className="home">
            <h1 style={{textAlign: "center"}}>{t("welcome")}!</h1>
            <img height="100%" width="100%" src="https://mister-s.com/wp-content/uploads/2015/12/star_wars_vii-02.jpg" alt="Star Wars"></img>
        </div>
    );
}