import { ObjectDTO } from '../../models/object';
import './styles.css';

type Props = {
    object: ObjectDTO;
  };

export default function CardInformation({object}: Props) {
    return(
        <main>
            <div className="informations-container">
                <div className="img-informations">
                    <img src={object.avatar_url} alt={object.name} />
                </div>
                <div className="informations-content">
                    <h3>Informações</h3>
                    <div className="information-item">
                        <h4>Perfil:</h4>
                        <a href={object.url}>{object.url}</a>
                    </div>
                    <div className="information-item">
                        <h4>Seguidores:</h4>
                        <p>{object.followers}</p>
                    </div>
                    <div className="information-item">
                        <h4>Localidade:</h4>
                        <p>{object.location}</p>
                    </div>
                    <div className="information-item">
                        <h4>Nome:</h4>
                        <p>{object.name}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}