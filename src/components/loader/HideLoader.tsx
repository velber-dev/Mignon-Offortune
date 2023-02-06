import { body, BodyClasses } from "../generalData/generalData";

function HideLoader() {
    const loaderEl: HTMLElement = document.querySelector(".loader-wp") as HTMLElement,
        loaderAnimationClass: string = "loader-wp--opacity--0";
    
    if(!loaderEl) {
        throw new Error('There is no loader with "loader-wp" class on the page!');
    }

    const delay: number = 1500,
        transition: number = 250;

    setTimeout(() => {
        loaderEl.classList.add(loaderAnimationClass);

        setTimeout(() => {
            loaderEl.remove();
            body.toggleClass(BodyClasses.OverflowHidden, false);
        }, transition);
    }, delay);
}

export default HideLoader;