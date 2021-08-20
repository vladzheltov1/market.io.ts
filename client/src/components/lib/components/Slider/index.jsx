import React, { useEffect, useState } from "react";
import { Icon } from "rsuite";
import "./style.scss";

/**
 * The slider needs to be fixed!
 */
export const Slider = ({
    content = [],
    interval = 5000,
    height = 200
}) => {
    const [activeSlide, setActiveSlide] = useState({ item: null, index: 0 });

    var cancelStep = false;

    useEffect(() => {
        if (content.length === 0) {
            return;
        }
        // Getting the first slide active.
        setActiveSlide({ item: content[0], index: 0 });

        // Starting a timer to make the slider work automatically.
        setInterval(() => changeSlide(1), interval);

        // eslint-disable-next-line
    }, [])

    const changeSlide = (step) => {

        if (cancelStep) {
            cancelStep = false;
            console.log("Skip step");
            return;
        }

        console.log({ cancelStep })

        let nextItem;
        let nextIndex;

        if (step > 0 && !content[activeSlide.index + 1]) {
            nextIndex = 0;
            console.log("Right border reached.");
        }
        else if (step < 0 && activeSlide.index === 0) {
            nextIndex = content.length - 1;
            console.log("Left border reached.");
        }
        else {
            nextIndex = activeSlide.index + step;
            console.log("Normal step.");
        }

        console.log(`Current index is ${activeSlide.index}`);
        console.log(`Next index is ${nextIndex}`);

        nextItem = content[nextIndex];

        setActiveSlide({ item: nextItem, index: nextIndex });
    }

    const malualChange = (step) => {
        changeSlide(step);
        cancelStep = true;
    }

    return (
        <div className="slider" style={{ height }}>
            <div className="slider__button-group">
                <button className="slider__button" id="slider__button--left" onClick={() => malualChange(-1)}><Icon icon="angle-left" /></button>
                <button className="slider__button" id="slider__button--right" onClick={() => malualChange(1)}><Icon icon="angle-right" /></button>
            </div>
            <div className="slider__current--slide">
                {activeSlide.item}
            </div>
        </div>
    )
}