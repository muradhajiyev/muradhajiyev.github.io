/*jshint esversion: 6 */
(function(){
    "use strict";

    let index = 0;
    let interval = null;
    let delayTime = 250;
    let elements = {};

    window.onload = function() {
        elements = {
            startButton : document.getElementById("start"),
            stopButton : document.getElementById("stop"),
            textArea : document.getElementById("text-area"),
            animationSelectBox: document.getElementById("animation"),
            fontsizeSelectBox: document.getElementById("fontsize"),
            turboCheckBox: document.getElementById("turbo")
        };

        elements.startButton.onclick = onStart;
        elements.stopButton.onclick = onStop;
        elements.animationSelectBox.onchange = onAnimationChange;
        elements.fontsizeSelectBox.onchange = onFontSizeChange;
        elements.turboCheckBox.onchange = onTurboChange;

        onFontSizeChange();
    };

    function onStart() {
        index = 0;
        startAnimation();
    }

    function onStop() {
        toggleStartStopButtons();
        clearInterval(interval);
        interval = null;
        print(ANIMATIONS[selectedAnimation()]);
    }

    function onAnimationChange() {
        if (interval === null){
            print(ANIMATIONS[selectedAnimation()]);
        }
    }

    function onFontSizeChange() {
        const fontEl = elements.fontsizeSelectBox;
        const fontSize = fontEl.options[fontEl.selectedIndex].value;
        elements.textArea.style.fontSize = fontSize.toLowerCase();
    }

    function onTurboChange() {
        elements.turboCheckBox.enabled = !elements.turboCheckBox.enabled;
        const isActive = elements.turboCheckBox.enabled;
        if (isActive){
            clearInterval(interval);
            interval = null;
            delayTime = 50;
            startAnimation();
        }else{
            clearInterval(interval);
            interval = null;
            delayTime = 250;
            startAnimation();
        }
    }

    /* start Animation depend on selected animation type */
    function startAnimation() {
        const animation = animate(selectedAnimation());

        if (interval === null && index === 0) {
            toggleStartStopButtons();
        }

        if (interval === null) {
            interval = setInterval(animation, delayTime);
        }
    }

    /* print content in text area */
    function print(content) {
        elements.textArea.textContent = content;
    }

    function animate(animationType) {
        return function(){
            const animation = ANIMATIONS[animationType].split("=====\n");

            if (animation.length > 0){
                index = index % animation.length;
                const frame = animation[index++];
                print(frame);
            }
        };
    }

    function toggleStartStopButtons() {
        elements.stopButton.disabled = !elements.stopButton.disabled;
        elements.startButton.disabled = !elements.startButton.disabled;
    }

    function selectedAnimation() {
        const el = elements.animationSelectBox;
        return el.options[el.selectedIndex].value;
    }
})();








