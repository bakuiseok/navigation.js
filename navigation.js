function navigation(option) {
    for (let ol of option.from.querySelectorAll('ol')) {
        /* #### */
        let cResult = [];
        for (let li of ol.children) {
            if (!li.id && li.nodeName == 'LI') {
                let matchElement = [];
                for (let e of li.children) {
                    for (let i = 0; i < option.list.length; i++) {
                        if (e.nodeName.toLowerCase() == option.list[i]) {
                            matchElement.push(e.nodeName.toLowerCase());
                            if (JSON.stringify(option.list) == JSON.stringify(matchElement)) {
                                li.setAttribute('id', option.from.nodeName + li.nodeName + Math.random());
                                cResult.push(li);
                            }
                        }
                    }
                }
            }
        }
        /* #### */
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
            intoOl.setAttribute('class', option.class.ol);
            /* #### #### */
            for (let li of cResult) {
                const intoLi = intoOl.appendChild(document.createElement('LI'))
                intoLi.setAttribute('id', option.into.nodeName + li.id);
                intoLi.setAttribute('class', option.class.li);

                let div = intoLi.appendChild(document.createElement('div'));
                div.setAttribute('class', option.class.div_listHeading);

                let a = div.appendChild(document.createElement('A'));
                a.setAttribute('href', '#' + li.id);
                a.setAttribute('class', option.class.a_listHeading);
                a.innerText = li.children[0].textContent;
                /* #### #### #### */
                if (option.hasDescendent) {
                    for (let d of option.descendent) {
                        let i = 0;
                        for (let e of li.children) {
                            if (i < option.list.length
                                && e.nodeName == option.list[i].toUpperCase()) {
                                continue;
                            } else {
                                if (e.nodeName == d.toUpperCase()) {
                                    e.setAttribute('id', option.from.nodeName + e.nodeName + Math.random());

                                    const span = intoLi.appendChild(document.createElement('SPAN'));
                                    span.setAttribute('class', option.class.span_descendent);

                                    const a = span.appendChild(document.createElement('A'))
                                    a.setAttribute('href', '#' + e.id);
                                    a.setAttribute('class', option.class.a_descendent);
                                    a.innerText = e.textContent;
                                }
                            }
                            i++;
                        }
                    }
                }
                /* #### #### #### */
            }
            /* #### #### */
        }
        /* #### */
    }
}
