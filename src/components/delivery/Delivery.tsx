import "./delivery.scss";

import React from "react";

import Btn from "../popUp/PopUp";

function Delivery({ setRef }: { setRef: React.RefObject<HTMLElement> }) {
    const DeliveryInfo = ({
        children,
    }: {
        children: string | (string | JSX.Element)[];
    }) => (
        <li className="delivery__item">
            <p>{children}</p>
        </li>
    );

    const mapUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360271.803567689!2d-0.33243448098447104!3d45.133965430280085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480007b6068a4c31%3A0x7290c85214cb40a5!2s%C3%89levage%20de%20Spitz%20nain%20Pomeranian.%20Livraison%20dans%20toute%20la%20France.%20MIGNON%20OFFORTUNE!5e0!3m2!1sru!2sfr!4v1670023507209!5m2!1sru!2sfr";

    return (
        <section className="delivery" ref={setRef}>
            <div className="container">
                <div className="delivery__general">
                    <iframe
                        className="delivery__map"
                        src={mapUrl}
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="delivery__text text-wp--padding">
                        <h2 className="delivery__title">
                            Comment pouvez-vous obtenir un chiot?
                        </h2>
                        <ul className="delivery__list">
                            <DeliveryInfo>
                                Nous sommes situés à{" "}
                                <b>La Roche-Chalais 24490, France</b> et livrons
                                personnellement les chiots dans la plupart des
                                villes accessibles en voiture avec frais de
                                déplacement payés.
                            </DeliveryInfo>

                            <DeliveryInfo>
                                Nous préférons recevoir les futurs propriétaires
                                a la maison pour une plus grande confiance de l
                                acheteur.
                            </DeliveryInfo>
                        </ul>
                    </div>
                </div>

                <div className="delivery__get-in-touch">
                    <Btn clazz="delivery__button" />
                </div>
            </div>
        </section>
    );
}

export default Delivery;
