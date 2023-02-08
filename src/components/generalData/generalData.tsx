import React, { createRef } from "react";
import logo from "../../assets/img/logo.svg";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

enum BodyClasses {
    OverflowHidden = "overflow--hidden",
    HiddenMenu = "HM--show",
}

const body = {
    el: document.querySelector("body") as HTMLElement,
    toggleClass: function (clazz: BodyClasses, state: boolean) {
        const elementClasses = this.el.classList;

        state ? elementClasses.add(clazz) : elementClasses.remove(clazz);
    },
};

const phones = ["+33 6 80 96 65 96", "+33 6 82 16 33 95"];

function windowScrollTo(position: number) {
    const windowMaxWidth992: boolean =
        window.matchMedia("(max-width: 992px)").matches;

    const extraIndent = windowMaxWidth992 ? 90 : 135;

    window.scroll({
        top: position - extraIndent,
        left: 0,
        behavior: "smooth",
    });
}

interface Sections {
    [key: string]: {
        name: string;
        ref: React.RefObject<HTMLElement>;
    }
}

class Navbar {
    static sections: Sections = {
        aboutUs: {
            name: "À propos de nous",
            ref: createRef(),
        },
        gallery: {
            name: "Galerie",
            ref: createRef(),
        },
        benefits: {
            name: "Nos avantages",
            ref: createRef(),
        },
        delivery: {
            name: "Livraison",
            ref: createRef(),
        },
    };

    static Links({
        extaFunction = false,
    }: {
        extaFunction?: false | (() => void);
    }) {
        function onScrollToSection(section: React.RefObject<HTMLElement>) {
            const sectionPosition = section.current?.offsetTop ?? 0;

            if (!extaFunction) {
                body.el.classList.remove("HM--show");
            } else {
                extaFunction();
            }

            windowScrollTo(sectionPosition);
        }

        const Link = ({
            name,
            section,
        }: {
            name: string;
            section: React.RefObject<HTMLElement>;
        }) => (
            <a
                className="nav__link"
                onClick={() => {
                    onScrollToSection(section);
                }}
            >
                {name}
            </a>
        );

        let links = [];
        
        let i = 0;

        for (let key in Navbar.sections) {
            i++;

            links.push(
                <Link
                    name={Navbar.sections[key].name}
                    section={Navbar.sections[key].ref}
                    key={i}
                />
            );
        }

        return <>{links}</>;
    }

    static getRef(section: keyof Sections) {
        return Navbar.sections[section].ref;
    }
}

export { logo, phones, Navbar, body, BodyClasses, modalRoot };
