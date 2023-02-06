import './ourPuppies.scss';

import useImageSize from '../../hooks/useImageSize';

import OurPuppiesImage from '../../assets/img/our-puppies__image.jpg';

function OurPuppies() {
    const {imageSize, imageRef} = useImageSize();

    return (
        <section className="our-puppies">
            <div className="our-puppies__container container">
                <div className="our-puppies__text text-wp--padding">
                    <h2 className="our-puppies__title title-wp--line">Nos Spitz Poméranien</h2>
                    <p className="our-puppies__description">
                        Maintenant, nous offrons des chiots de cette race sur le marché car il n'est pas facile de
                        choisir un bon spitz de qualite. Tous nos reproducteurs sont reconnus par un organisme
                        international <strong>Fédération Cynologique Internationale et lof français</strong>.
                    </p>
                </div>

                <div className="our-puppies__image-wp">
                    <img className="our-puppies__image" src={OurPuppiesImage} ref={imageRef} style={{'height': `${imageSize}px`}} />
                </div>
            </div>
        </section>
    )
}

export default OurPuppies;