import './styles.css';

export default function Informations() {
    return(
        <main>
            <div className="informations-container">
                <div className="img-informations">
                    <p>IMAGEM</p>
                </div>
                <div className="informations-content">
                    <h3>Informações</h3>
                    <div className="information-item">
                        <h4>Perfil:</h4>
                    </div>
                    <div className="information-item">
                        <h4>Seguidores:</h4>
                    </div>
                    <div className="information-item">
                        <h4>Localidade:</h4>
                    </div>
                    <div className="information-item">
                        <h4>Nome:</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}