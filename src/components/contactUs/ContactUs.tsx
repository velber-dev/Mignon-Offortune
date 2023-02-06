import './contactUs.scss';

import ContactUsImage from '../../assets/img/contact-us__image.jpg';
import Btn from '../popUp/PopUp';

function ContactUs() {
    return (
        <section className="contact-us">
            <div className="contact-us__container container">
                <div className="contact-us__image-wp">
                    <img className="contact-us__image" src={ContactUsImage} />
                </div>

                <div className="contact-us__text text-wp--padding">
                    <h2 className="contact-us__title title-wp--line">
                        Offrez-vous<br />
                        un nouvel ami!
                    </h2>
                    <p className="contact-us__description">
                        Si vous décidez de vous procurer un nouveau membre de la famille, écrivez-nous, appelez-nous
                        pour connaître les chiots disponibles à l'achat. Et si c'est exactement "votre bébé", alors le
                        prix vous conviendra.<br /><br />
                        Avec nous, vous pouvez acheter non seulement un chiot de petite taille, qui a besoin d'un
                        maximum de soins, mais aussi un bébé adulte qui est déjà adapté à la vie de famille et a
                        beaucoup appris, qui sera immédiatement prêt de vous accompagner lors de voyages et promenades.
                    </p>
                    <Btn clazz="contact-us__button" />
                </div>
            </div>
        </section>
    )
}

export default ContactUs;