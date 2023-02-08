import "./benefits.scss";

import React from "react";

import benefitsIcon from "../../assets/img/benefitsIcons/benefitsIcons";

function Benefit({
    title,
    children,
}: {
    title: keyof typeof benefitsIcon;
    children: string;
}) {
    return (
        <li className="benefits__benefit">
            <div className="benefits__benefit-title-wp">
                <div className="benefits__benefit-icon-wp">
                    {benefitsIcon[title]}
                </div>

                <h3 className="benefits__benefit-title">{title}</h3>
            </div>
            <p className="benefits__benefit-description">{children}</p>
        </li>
    );
}

function Benefits({ setRef }: { setRef: React.RefObject<HTMLElement> }) {
    return (
        <section className="benefits" ref={setRef}>
            <div className="container">
                <h2 className="benefits__title title-wp--line">
                    Qu'est-ce qu'ils
                    <br />
                    obtiennent nos chiots
                </h2>

                <ul className="benefits__list">
                    <Benefit title="Aliments">
                        Nos chiens mangent des croquettes premium et, grâce à
                        une alimentation complète, grandissent sans problèmes
                        gastro-intestinaux.
                    </Benefit>

                    <Benefit title="Vermifugation">
                        Le traitement de divers types de vers est indispensable
                        pour les chiots dès leur plus jeune âge.
                    </Benefit>

                    <Benefit title="Santé">
                        Tous nos chiots sont protégés contre les infections avec
                        les vaccins les plus fiables en temps opportun.
                    </Benefit>

                    <Benefit title="Aimer">
                        Nos chiens adultes vivent avec nous dans la maison et
                        les petits chiots nous les surveillons 24 heures sur 24.
                    </Benefit>

                    <Benefit title="Développement physique">
                        De vastes espaces pour petits dans notre maison
                        permettent à nos chiots de développer leur niveau
                        physique et leur vie en communoté.
                    </Benefit>

                    <Benefit title="Psyché">
                        Les chiots restent avec leur manam pour leur bon
                        équilibre psychique en contact permanent avec les autres
                        animeaux dans la maison jusqu&#8217;a leur départ
                    </Benefit>
                </ul>
            </div>
        </section>
    );
}

export default Benefits;
