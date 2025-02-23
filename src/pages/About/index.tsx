import { useState } from "react";
import { useEffect } from "react";
import { siteName } from "../../config";

const About = () => {

    const [ title ] = useState('Sobre');

    useEffect(() => {

        document.title = siteName + title; 

    }, []);

    return(
        <>
            <h1>{ title }</h1>
            <section className="mt-3">
                <div>
                    <p>Esse projeto foi desenvolvido por mim, com fins de aprendizado para colocar em prática o que aprendi em react.</p>
                </div>
            </section>
        </>
    );

}

export default About;