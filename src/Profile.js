import React from "react";
import './Profile.css';

const data = [
    {
        id: 1,
        imgSrc: "../images/JackCouchPotato.jpg",
        name: "Jacko",
        skills: []
    },
    {
        id: 2,
        imgSrc: "http://placekitten.com/200/300",
        //"https://www.lighthouselabs.ca/uploads/team_member/avatar/134/medium_JuanPhoto.png",
        name: "Puss in Boots",
        skills: ["JavaScript", "HTML"],
        alert: "Devilishly Handsome"
    }
];

const BuildContent = (arData, id) => {
    let alert = <p></p>
    if (arData.alert) {
        alert = <p className="alert">Warning! {arData.alert}.</p>
    }

    let image = <img src={arData.imgSrc} alt="Whoops Missing" />
    let userName = <h4>{arData.name}</h4>
    let skills = <p>No Skills</p>
    if (arData.skills.length > 0) {
        let skillsList = arData.skills.map((skillValue, i) => {
            return <li key={i}>{skillValue}</li>
        })
        skills = <span>Skills:<ul>{skillsList}</ul></span>
    }

    return (<div className='profile' key={id}>
        {alert}
        {image}
        {userName}
        {skills}
    </div>);
}

function Profile() {
    let dynContent = [];
    data.map((x, idx) => {
        dynContent.push(BuildContent(x, idx));
    })

    return (
        <React.Fragment>
            <h1 className="page-head">React-Dynamic Content Build</h1>
            <div className="profiles">{dynContent}</div>
        </React.Fragment>
    );
}

export default Profile;