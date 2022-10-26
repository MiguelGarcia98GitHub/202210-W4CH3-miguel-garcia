export function King({
    name,
    family,
    age,
    kingdomYears,
    imageURL,
    status,
}: {
    name: string;
    family: string;
    age: string;
    kingdomYears: string;
    imageURL: string;
    status: string;
}) {
    const handleClick = () => {
        const talkMessage = "Rey: Vais a morir todos";
        console.log(talkMessage);
        const comunicacionesHTMLElement: HTMLElement =
            document.querySelector(".box__wrapper")!;
        comunicacionesHTMLElement.innerHTML = `<div class="box__container">
            <p class="box__container__message">Rey: Vais a morir todos</p>
        </div>`;
        setTimeout(() => {
            comunicacionesHTMLElement.innerHTML = "";
        }, 2000);
    };

    return (
        <li className="character col">
            <div className="card character__card">
                <img
                    src={imageURL}
                    alt={name}
                    className="character__picture card-img-top"
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
                                {status === "alive" ? (
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
                            {/* <li>Arma: XXX</li>
                            <li>Destreza: X</li>
                            <li>Peloteo: X</li> */}
                            {/* <li>Asesora a: {advisedPerson} </li> */}
                            {/* <li>Sirve a: X</li> */}
                        </ul>
                        <div className="character__actions">
                            <button
                                className="character__action btn"
                                onClick={handleClick}
                            >
                                habla
                            </button>
                            <button className="character__action btn">
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i className="emoji">👑</i>
            </div>
            <div className="box__wrapper"></div>
        </li>
    );
}
