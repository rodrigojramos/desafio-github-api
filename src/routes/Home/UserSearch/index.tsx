import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './styles.css';

export default function UserSearch() {
    return(
        <main>
            <div className="card-container">
                <div>
                    <h2>Encontre um perfil Github</h2>
                </div>
                <div>
                    <input type="text" placeholder="Usuário Github"
                    />
                </div>
                <div>
                    <Link to="/search/informations">
                        <button type="submit">Encontrar</button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </main>
    )
}