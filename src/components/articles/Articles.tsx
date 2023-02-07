import './articles.scss';

import { useState } from "react";

function Article({ title, children }: {
    title: string,
    children: string
}) {
    const [show, setShow] = useState<boolean>(false);

    const onShowArticle = () => {
        setShow(show => !show);
    }

    return (
        <li className="articles__article" data-show={show}>
            <h3 className="articles__article-title">{title}</h3>
            <p className="articles__article-description">{children}</p>
            <button className="articles__article-button button" onClick={onShowArticle}>
                <strong className="button__text">{show ? 'Cacher' : 'Lis'}</strong>
            </button>
        </li>
    )
}

function Articles() {
    return (
        <section className="articles">
            <div className="container">
                <h2 className="articles__title title-wp--line">
                    Informations utiles
                </h2>

                <ul className="articles__list">
                    <Article title="Quels sont les soins quotidiens d'un chiot et d'un chien adulte?">
                        Chez les chiots jusqu'à 5-6 mois, le pelage est très différent du pelage d'un chien adulte,
                        il est plus doux et duveteux. Il est préférable de peigner ce double poil 1 fois tous les
                        3-4 jours. Encore une fois, si le chiot est petit et ne marche pas dehors, le pelage reste
                        propre pendant longtemps. Un tel chiot peut être lavé une fois par mois et assurez-vous de
                        le sécher avec un sèche-cheveux. Si le chien marche dans la rue, il est préférable de le
                        laver une fois toutes les deux semaines. Aux soins, on taille les ongles toutes les 2-3
                        semaines.
                    </Article>
                    <Article title="Les chats et les chiens. Comment s'entendent-ils, se font-ils des amis et s'entendent-ils dans la même maison? Comment rendre les rencontres faciles.">
                        Les caractéristiques de garder un chat et un chien dans la même maison dépendent de leur
                        caractère, ainsi que des actions du propriétaire dans le but d'établir des relations
                        amicales entre les animaux. Si les animaux domestiques parviennent à se faire des amis, une
                        forte amitié peut naître entre eux - ils joueront, mangeront et passeront beaucoup de temps
                        ensemble. Afin de ne pas provoquer de conflits entre animaux de compagnie, il est recommandé
                        de les équiper de lieux de repos et de nourriture séparés qu'ils ont choisis.
                    </Article>
                </ul>
            </div>
        </section>
    )
}

export default Articles;