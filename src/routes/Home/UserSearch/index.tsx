import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardInformation from '../../../components/CardInformation';
import { ObjectDTO } from '../../../models/object';
import * as objectService from "../../../services/object-service";
import './styles.css';

type FormData = {
    username: string;
}

export default function UserSearch() {

    const [user, setUser] = useState("");
    const [error, setError] = useState();

    const [obj, setObj] = useState<ObjectDTO>();

    function handleUserChange(event: any) {
        setUser(event.target.value);
    }

    function handleBtnOnClick(event: any) {
        event.preventDefault();

        objectService
        .findyByUser(user)
        .then((response) => {
            setObj(response.data);
        })
        .catch((error) => {
            setError(error.response.data);
            setObj(undefined);
        });
    }

    return(
        <main>
            <div className="card-container">
                <div>
                    <h2>Encontre um perfil Github</h2>
                </div>
                <form>
                    <div>
                        <input 
                            name="user"
                            value={user}
                            type="text" 
                            placeholder="Usuário Github"
                            onChange={handleUserChange}
                        />
                    </div>
                    <div>
                        <Link to="/search/informations">
                            <button onClick={handleBtnOnClick} type="submit">Encontrar</button>
                        </Link>
                    </div>
                </form>
            </div>
            {(obj && <CardInformation object={obj} />) ||
            (error && <h1 className="error-message">Erro ao buscar usuário</h1>)}
        </main>
    )
}