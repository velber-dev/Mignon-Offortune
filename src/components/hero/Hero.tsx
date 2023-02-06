import './hero.scss';

import useImageSize from '../../hooks/useImageSize';

import heroImage from '../../assets/img/hero__image.jpg';
import Btn from '../popUp/PopUp';

function Hero() {
    const {imageSize, imageRef} = useImageSize(0.93);

    return (
        <>
            <section className="hero">
                <div className="hero__container container">
                    <div className="hero__text text-wp--padding">
                        <h6 className="hero__subtitle">Chenil de Spitz Poméranien</h6>
                        <h1 className="hero__title">
                            MIGNON <br />
                            OFFORTUNE
                        </h1>
                        <p className="hero__description">Nos animaux de compagnie vous donneront du bonheur!</p>
                        <ul className="hero__list">
                            <li className="hero__item">
                                <p className="hero__item-text">La santé et les soins passent avant tout</p>
                            </li>
                            <li className="hero__item">
                                <p className="hero__item-text">Couleurs variées</p>
                            </li>
                            <li className="hero__item">
                                <p className="hero__item-text">Livraison dans toute la France</p>
                            </li>
                        </ul>
                        <Btn clazz="hero__button" />
                    </div>
                    <div className="hero__image-wp" ref={imageRef} style={{'height': `${imageSize}px`}}>
                        <img className="hero__image" src={heroImage} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;