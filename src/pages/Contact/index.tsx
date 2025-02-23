import { useEffect, useState } from "react";
import { siteName } from "../../config";

const Contact = () => {

    const [ title ] = useState('Contato');

    useEffect(() => {

        document.title = siteName + title;

    }, []);

    return(
        <>
            <h1>{ title }</h1>

            <section className="mt-3">
                <div>
                    <div>Email: juninhoc4p@gmail.com</div>
                    <div className="mt-3">LinkedIn: <a href="https://www.linkedin.com/in/luiz-junior-503969227/" target="_blank">Luiz junior</a></div>
                    <div className="mt-3">Github: <a href="https://github.com/LuizJunior007">LuizJunior007</a></div>
                </div>
            </section>
        </>
    );

}

export default Contact;