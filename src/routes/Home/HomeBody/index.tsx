import { Link } from 'react-router-dom';
import './styles.css';

export default function HomeBody() {
    return(
        <main>
            <div className="card-content">
                <div className="title-card">
                    <h2>Desafio Github API</h2>
                    <h3>DevSuperior - Escola de programação</h3>
                </div>
                <div className="button-card">
                    <Link to="/search">
                        <button type="submit">Começar</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}