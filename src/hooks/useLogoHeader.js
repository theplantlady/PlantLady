import React, {useEffect, useState} from 'react';


const useLogoHeader = () => {
    const [isTop, setIsTop] = useState(true); // Track if the page is at the top

    useEffect(() => {
        const logo = document.querySelector('.logo');
        const tallLogo = document.querySelector('.tall-logo');
        const navCont = document.querySelector('.nav-cont');
        const isScrolled = () => {
            const scrollTop = window.scrollY;
            if (scrollTop >= 250) {
                tallLogo?.classList.add('hidden');
                logo?.classList.remove('hidden');
                logo?.classList.remove('invisible');
                // navCont?.classList.remove('justify-end');
                // navCont?.classList.add('justify-between');
                }
            else if (scrollTop < 50) {
                    tallLogo?.classList.remove('hidden');
                    logo?.classList.add('hidden');
                logo?.classList.add('invisible');
                // navCont?.classList.add('justify-end');
                // navCont?.classList.remove('justify-between');
            }
            setIsTop(window.scrollY === 0);
        };
        window.addEventListener("scroll", isScrolled);
        return () => {
            window.removeEventListener("scroll", isScrolled);
        };
    });
    return { isTop };
};

export default useLogoHeader;