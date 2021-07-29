import React, { useEffect, useState } from "react";
import { Icon } from "rsuite";

export const ScrollButton = () => {

    const [visible, setVisible] = useState(false);

    const scrollStyle = {
        position: "fixed",
        right: "60px",
        bottom: "15px",
        cursor: "pointer"
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        onScroll();
    });

    const onScroll = () => {
        if (window.scrollY > 200) {
            setVisible(true);
            return;
        }
        setVisible(false);
    }

    return (
        <>
            {visible && (
                <div style={scrollStyle} onClick={() => window.scroll(0, 0)} >
                    <Icon icon="arrow-circle-up" size="5x" />
                </div>
            )}
        </>
    )
}