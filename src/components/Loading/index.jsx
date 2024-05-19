import { Container, Image } from "react-bootstrap";
import { Body_Loading } from "./index.style";

import logo from "/assets/icons/logo.webp";
import keyboard from "/assets/icons/keyboard.png";
import { useEffect, useState } from "react";

import { MdTouchApp } from "react-icons/md";
import { BsFillMouseFill } from "react-icons/bs";
import { GiKeyboard } from "react-icons/gi";

export function Loading(props) {
    const [loaded, setLoaded] = useState("loading");

    function handleEnter() {
        props.setIsLoading(false);
        props.handleToggleSong();
    }

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
        const timeout = setTimeout(() => {
            setLoaded("loaded")
        }, 2000)
    }, [])

    const detectKeyDown = (e) => {
        props.isLoading ? "" : (e.key === " " ? "" : handleEnter())
    }

    return (
        <Body_Loading>
            <Container className={`logo-container ${loaded}`} onClick={() => { handleEnter() }}>
                <Image src={logo} alt={logo} className="logo" draggable={false} />
                {loaded === "loading" ?
                    (
                        <></>
                    ) : (
                        <div className="press-container">
                            <MdTouchApp size={"28px"} className="mobile-icon" />
                            <Image src={keyboard} alt={keyboard} className="desktop-icon keyboard" draggable={false}/>
                        </div>
                    )
                }
            </Container>
        </Body_Loading>
    );
}