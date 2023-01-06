import React , {createContext, useState} from "react";

//création du context
export const Context = createContext();


//les langues supportées sur notre site
const supportedLangs = [
    'EN', 
    'FR', 
    'ES'
]

//nous recuperrons la langue du site et on la change en majuscule
let browserLang = navigator.language.slice(0,2).toLocaleUpperCase();


//Si browerLang n'est pas dans la liste nous mettons le site en anglais
if(supportedLangs.indexOf(browserLang) === -1) {
    console.log('not supported');
    browserLang = 'EN';
} 



const ContextProvider = props => {

    const [lang, setLang] = useState(browserLang)

    //fonction qui au click va changer la langue
    const toggleLang = changeLang => {

        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;