import "./popUp.scss";

import React, { useState } from "react";
import { createPortal } from "react-dom";

import {
    phones,
    body,
    BodyClasses,
    modalRoot,
} from "../generalData/generalData";

import close from "../../assets/img/close.svg";

function Btn({ clazz }: { clazz: string }) {
    const [popUpShow, setPopUpShow] = useState<boolean>(1);

    const onTogglePopUp = (show: boolean) => {
        setPopUpShow(show);

        show
            ? body.toggleClass(BodyClasses.OverflowHidden, true)
            : body.toggleClass(BodyClasses.OverflowHidden, false);
    };

    const popUp = (
        <PopUp
            closePopUp={() => {
                onTogglePopUp(false);
            }}
        />
    );

    return (
        <>
            <button
                className={`${clazz} button`}
                onClick={() => {
                    onTogglePopUp(true);
                }}
            >
                <strong className="button__text">Connecte-toi avec nous</strong>
            </button>
            {popUpShow ? createPortal(popUp, modalRoot) : null}
        </>
    );
}

function PopUp({ closePopUp }: { closePopUp: () => void }) {
    interface FormDataConfig {
        name: string;
        phone: string;
        message: string;
    }

    enum Inputs {
        Name = "name",
        Phone = "phone",
        Message = "message",
    }

    const [formData, updateFormData]: [
        FormDataConfig,
        React.Dispatch<React.SetStateAction<FormDataConfig>>
    ] = useState({
        name: "",
        phone: "",
        message: "",
    });

    function updateInputValue(input: string, value: string) {
        updateFormData({
            ...formData,
            [input]: value,
        });
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        new Promise((resolve, reject) => {
            let data = new FormData();

            let key: keyof FormDataConfig;

            for (key in formData) {
                const fieldValue = formData[key];

                if (fieldValue.length >= 1) {
                    data.append(key, fieldValue);
                } else {
                    reject();
                }
            }

            resolve(data);
        })
            .then((data: any) => {
                fetch("assets/services/mail.php", {
                    method: "POST",
                    body: data,
                }).then(() => {
                    document.location.href = document.location.href;
                });
            })
            .catch(() => {
                console.log("Complete all fields!");
            });
    }

    return (
        <div className="pop-up pop-up--show">
            <div className="pop-up__scroll container-fluid">
                <div className="pop-up__inner">
                    <div className="pop-up__close">
                        <img
                            className="pop-up__close-icon"
                            src={close}
                            onClick={closePopUp}
                            alt=""
                        />
                    </div>

                    <h2 className="pop-up__title">Contactez-nous!</h2>
                    <p className="pop-up__description">
                        Appelez-nous{" "}
                        <a className="pop-up__link" href={"tel:" + phones[0]}>
                            {phones[0]}
                        </a>
                        ,{" "}
                        <a className="pop-up__link" href={"tel:" + phones[1]}>
                            {phones[1]}
                        </a>
                        <br /> ou laisser un message
                    </p>
                    <form
                        className="pop-up__form"
                        onSubmit={(e) => {
                            onSubmit(e);
                        }}
                    >
                        <input
                            className="pop-up__input"
                            name="name"
                            type="text"
                            value={formData.name}
                            placeholder="Nom et prénom"
                            minLength={1}
                            required
                            onChange={(e) => {
                                updateInputValue(Inputs.Name, e.target.value);
                            }}
                        />
                        <input
                            className="pop-up__input"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            placeholder="Numéro de téléphone"
                            minLength={1}
                            required
                            onChange={(e) => {
                                updateInputValue(Inputs.Phone, e.target.value);
                            }}
                        />
                        <textarea
                            className="pop-up__textarea"
                            name="message"
                            value={formData.message}
                            placeholder="Message"
                            minLength={1}
                            required
                            onChange={(e) => {
                                updateInputValue(
                                    Inputs.Message,
                                    e.target.value
                                );
                            }}
                        ></textarea>
                        <button className="pop-up__button button" type="submit">
                            <strong className="button__text">
                                Envoyer un message
                            </strong>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Btn;
