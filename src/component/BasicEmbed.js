import React, { useRef, useEffect } from "react";

const { tableau } = window;

function BasicEmbed() {
    const ref = useRef(null);
    const url = 'https://public.tableau.com/views/JSAPI-Superstore/Overview';

    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "90vh",
        });
    };

    useEffect(initViz, []);

    return <div ref={ref} />;

}

export default BasicEmbed;