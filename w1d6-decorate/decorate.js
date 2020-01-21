window.onload = function() {
    "use strict"; //use strict mode

    //get relevant HTML elements using their ids // onubstrusive
    const textArea = this.document.getElementById("textArea");
    const decorateBtn = this.document.getElementById("decorateBtn");
    const chkbox = this.document.getElementById("bling");
    const igpay = this.document.getElementById("igpay");
    const malkovitch = this.document.getElementById("malkovitch");

    //* Method definitions *//

    const startGrowing = () => {
        this.setInterval(growBigger, 500);
    };
    const growBigger = () => {
        //textArea.style.fontSize = "2rem";
        let oldfontsize = textArea.style.fontSize;
        if (!oldfontsize) oldfontsize = "12pt";
        let newfontsize = this.parseInt(oldfontsize) + 2;
        textArea.style.fontSize = newfontsize + "pt";
    };

    const decorate = () => {
        if (chkbox.checked) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            this.window.document.body.style.background =
                "url(hundred-dollar-bill.jpg)";
        } else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
            this.window.document.body.style.background = "white";
        }
    };

    const isvowel = elem => {
        const vowels = ["a", "e", "i", "o", "u"];
        return vowels.find(v => v === elem.toLowerCase());
    };
    const formatWord = word => {
        const n = word.length;
        if (word && n > 0) {
            for (let i = 0; i < n; i++) {
                if (isvowel(word.charAt(i))) {
                    word = word.substring(i) + word.substring(0, i) + "-ay";
                    break;
                }
            }
            return word;
        }
    };
    const igpayFunc = () => {
        const lines = textArea.value.split("\n");
        const formatted = lines
            .map(line =>
                line
                    .split(" ")
                    .map(word => formatWord(word))
                    .join(" ")
            )
            .join("\n");
        textArea.value = formatted.trim();
    };

    const replaceFive = word => {
        if (word && word.length > 0) {
            if (word.length >= 5) return "Malkovich";
        }
        return word;
    };
    const malkovitchFunc = () => {
        const lines = textArea.value.split("\n");
        const formatted = lines
            .map(line =>
                line
                    .split(" ")
                    .map(word => replaceFive(word))
                    .join(" ")
            )
            .join("\n");
        textArea.value = formatted.trim();
    };
    //Use by reference
    decorateBtn.onclick = startGrowing;
    chkbox.onchange = decorate;
    igpay.onclick = igpayFunc;
    malkovitch.onclick = malkovitchFunc;
};