import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_go, characters }) => {
    if(alter_go === characters)return(<></>);
    return <p>{ characters }</p>
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_go,
    first_appearance,
    characters,
 }) => {

    const heroImage = `/assets/heroes/${ id }.jpg`;

    const charactersByHero = (<p>{ characters }</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImage } alt="{ superhero }" className="card-img"/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_go }</p>

                        <CharactersByHero characters={ characters } alter_go={ alter_go} />
                        
                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>

                        <Link to={ `/heroe/${ id }` }>
                            Mas..
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
