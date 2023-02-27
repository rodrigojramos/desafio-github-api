import './styles.css';

export default function UserSearch() {
    return(
        <main>
            <div className="card-container">
                <div>
                    <h2>Encontre um perfil Github</h2>
                </div>
                <div>
                    <input type="text" placeholder="Usuário Github"/>
                </div>
                <div>
                    <button type="submit">Encontrar</button>
                </div>
            </div>
        </main>
    )
}