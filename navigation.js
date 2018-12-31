function navigation(option) {
    for (let ol of option.from.querySelectorAll('ol')) {

        /* ############ */
        let cResult = [];
        for (let c of ol.children) { // target LI
            if (!c.id && c.nodeName == 'LI') {
                let whe = [];
                console.log(c);
                for (let d of c.children) {
                    console.log(d);
                    for (let i = 0; i < option.list.length; i++) {
                        if (d.nodeName.toLowerCase() == option.list[i]) {
                            whe.push(d.nodeName.toLowerCase());
                            if (JSON.stringify(option.list) == JSON.stringify(whe)) {
                                c.setAttribute('id', option.from.nodeName + c.nodeName + Math.random());
                                cResult.push(c);
                            }
                        }
                    }
                }
            }
        }
        /* ############ */


        if (cResult.length) {
            ol.setAttribute('id', option.from.nodeName + ol.nodeName + Math.random());

            let intoOlParent;
            if (ol.parentElement.nodeName == "LI") {
                if (ol.parentElement.id) {
                    intoOlParent = document.getElementById(option.into.nodeName + ol.parentElement.id);
                } else {
                    continue;
                }
            } else {
                intoOlParent = option.into;
            }
            const intoOl = intoOlParent.appendChild(document.createElement('OL'))
            intoOl.setAttribute('id', option.into.nodeName + ol.id);

            for (let li of cResult) {
                const intoLi = intoOl.appendChild(document.createElement('LI'))
                intoLi.setAttribute('id', option.into.nodeName + li.id);

                const h1 = intoLi.appendChild(document.createElement('H1'));
                const a = h1.appendChild(document.createElement('A'));
                a.setAttribute('href', '#' + li.id);
                a.innerText = li.children[0].textContent;

                for (let s of option.descendent) {
                    for (let e of li.children) {
                        if (e.nodeName == s.toUpperCase()) {
                            e.setAttribute('id', option.from.nodeName + e.nodeName + Math.random());
                            const a_ = intoLi.appendChild(document.createElement('A'));
                            a_.setAttribute('href', '#' + e.id);
                            const btn = a_.appendChild(document.createElement('BUTTON'))
                            btn.setAttribute('type', 'button');
                            btn.innerText = '#' + e.textContent;
                        }
                    }
                }
            }
        }
    }
}
