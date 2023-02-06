import "./aboutUs.scss";

import React from "react";

import Paws from "../../assets/img/paws.svg";
import AboutUsImage from "../../assets/img/about-us__image.jpg";

function AboutUs({ setRef }: { setRef: React.RefObject<HTMLElement> }) {
    return (
        <section className="about-us" ref={setRef}>
            <div className="about-us__container container">
                <img src={Paws} alt="" className="about-us__paws" />
                <h2 className="about-us__text about-us__title text-wp--padding">
                    Avec des chiens pour la vie
                </h2>
                <h3 className="about-us__text about-us__subtitle text-wp--padding title-wp--line">
                    Crèche familiale
                </h3>

                <div className="about-us__image-wp text-wp--padding">
                    <img
                        className="about-us__image"
                        src={AboutUsImage}
                        alt=""
                    />
                </div>

                <p className="about-us__text about-us__description text-wp--padding">
                    Notre chenil est situé dans une maison avec un parc de
                    2600m2 pour la promenade des chiens. Nos animaux de
                    compagnie peuvent profiter de l'air, du soleil et gambader
                    en toute liberté et sécurité.
                    <br />
                    <br />
                    Pour la sécurité de nos chiots, des parcs sont aménagés dans
                    le chenil pour que les petits ne s'enfuient pas et ne se
                    blessent pas, ils sont très mobiles.
                    <br />
                    <br />
                    Bien sûr, nos chiens ont leur propre salle bain, salon de
                    toilettage et effectuons diverses procédures de toilettage
                    avant leur départ
                    <br />
                    <br />
                    Nous sommes toujours heureux de recevoir les futurs
                    propriétaires chez nous pour voir leur futur petit
                    compagnon. Vous pouvez donc voir dans quelles conditions
                    merveilleuses nos petits chiots grandissent.
                </p>
            </div>
        </section>
    );
}

export default AboutUs;
