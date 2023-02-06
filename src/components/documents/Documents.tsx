import './documents.scss';

import Certificate from '../../assets/img/certificate.jpg';

function Documents() {
    return (
        <section className="documents">
            <div className="documents__container container">
                <div className="documents__text text-wp--padding">
                    <h2 className="documents__title title-wp--line">Les documents</h2>
                    <p className="documents__description">
                        Nos chiots ont un ensemble complet de documents, certificat d engagement et de connaissance,
                        carnet de santé vaccination. Certificat de cession du vétérinaire et certificat de naissance
                        pour
                        les LOF.
                    </p>
                </div>

                <div className="documents__image-wp">
                    <img className="documents__image" src={Certificate} />
                </div>
            </div>
        </section>
    )
}

export default Documents;