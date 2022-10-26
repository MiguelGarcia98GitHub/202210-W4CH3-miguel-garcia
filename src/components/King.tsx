import { useState } from "react";
import { IKing } from "../models/interfaces";

export function King({
    name,
    family,
    age,
    status,
    customMessage,
    imageURL,
    kingdomYears,
}: IKing) {
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleSpeak = () => {
        const comunicacionesHTMLElement: HTMLElement = document.querySelector(
            `#${name}`
        )!;
        comunicacionesHTMLElement.style.display = "block";
        comunicacionesHTMLElement.innerHTML = `<div class="box__container" id=${name}>
            <p class="box__container__message">${name}: ${customMessage} </p>
        </div>`;
        setTimeout(() => {
            comunicacionesHTMLElement.style.display = "none";
        }, 2000);
    };

    const handleDeath = () => {
        setCurrentStatus(false);
        const imageHTMLElement: HTMLElement = document.querySelector(
            `#${family}`
        )!;

        imageHTMLElement.style.transform = "rotate(180deg)";
    };

    return (
        <li className="character col">
            <div className="card character__card">
                <img
                    src={imageURL}
                    alt={name}
                    className="character__picture card-img-top"
                    id={family}
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {name} - familia {family}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>Edad: {age} años</li>
                            <li>
                                Estado:
                                {currentStatus ? (
                                    <i className="fas fa-thumbs-up"></i>
                                ) : (
                                    <i className="fas fa-thumbs-down"> </i>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="character__overlay">
                        <ul className="list-unstyled">
                            <li>Años de reinado: {kingdomYears} </li>
                        </ul>
                        <div className="character__actions">
                            <button
                                className="character__action btn"
                                onClick={handleSpeak}
                            >
                                habla
                            </button>
                            <button
                                className="character__action btn"
                                onClick={handleDeath}
                            >
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i className="emoji">👑</i>
            </div>
            <div className="box__wrapper" id={name}></div>
        </li>
    );
}
