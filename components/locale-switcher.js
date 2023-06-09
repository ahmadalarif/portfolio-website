import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher () {
    const router = useRouter();

    const { locales, locale: activeLocale } = router;

    const otherLocales = locales?.filter(
        (locale) => locale !== activeLocale && locale !== "default"
    );

    return (
        <span className="cursor-progress">
            {otherLocales?.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                    <span key={"locale-" + locale}>
                        <Link href={{ pathname, query }} as={asPath} locale={locale} className="heroButton font-['Cairo'] text-base">
                        
                                {locale === "en" ? "English" : locale === "ar" ? "عربى" : null}
                            
                        </Link>
                    </span>
                );
            })}
        </span>
    );
}
