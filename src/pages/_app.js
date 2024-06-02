import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Ubuntu,Tajawal } from "next/font/google"
import { useRouter } from "next/router.js"

const font1 = Ubuntu({
  subsets:['latin'],
  weight:'400',
  letterSpacing: 'widest',
})

const font2 = Tajawal({
  subsets:['arabic'],
  weight:'500',
})



function App ({ Component, pageProps }) {

  const { locale } = useRouter()

  
  return (
    //create a conditional statement based on the current locale
    <main
    className = {`${locale === "en" ?
        font1.className :
        font2.className
      }`}
        >
  <Component {...pageProps} />
  </main>
  )
}
export default appWithTranslation(App);