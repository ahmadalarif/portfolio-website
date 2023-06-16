import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export default function Navigation () {
    const router = useRouter();


    useEffect(() => {
        let dir = router.locale == "ar" ? "rtl" : "ltr";
        let lang = router.locale == "ar" ? "ar" : "en";
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").setAttribute("lang", lang);
    }, [router.locale]);

    return (
        <div className="flex sm:justify-center space-x-1 py-20">
            
                <Link href="/">
                    
                </Link>
                <div className="navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">

                            </Link>
                        </li>
                    </ul>
                    <LocaleSwitcher />
                </div>
            </div>
    );
}