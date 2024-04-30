import { Container } from "react-bootstrap";
import { Body_InfiniteLooper } from "./index.style";
import { useCallback, useEffect, useRef, useState } from "react";

export function InfiniteLooper({ speed, direction, children }) {

    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();
        const { width: parentWidth } = outerRef.current.getBoundingClientRect();
        const instanceWidth = width / innerRef.current.children.length;
        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }
    }, [looperInstances]);
    useEffect(() => {
        setupInstances();
    }, []);

    return (
        <Body_InfiniteLooper>
            <Container className="looper" ref={outerRef}>
                <div className="looper__innerList" ref={innerRef}>
                    <div className="gradient" />
                    {[...Array(looperInstances)].map((_, index) => (
                        <div
                            key={index}
                            className="looper__listInstance"
                            style={{
                                animationDuration: `${speed}s`,
                                animationDirection: direction === "right" ? "reverse" : "normal",
                                animationPlayState: 'running'
                            }}
                        >
                            {children}
                        </div>
                    ))}
                </div>
            </Container>
        </Body_InfiniteLooper>
    )
}