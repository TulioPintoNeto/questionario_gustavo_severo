function createElement(type, text) {
    const newElement = document.createElement(type);
    const node = document.createTextNode(text);
    newElement.appendChild(node);
    return newElement;
}

function createItalicElement(text) {
    const iElement = document.createElement("i");
    const arrayName = text.split("/b/");

    arrayName.forEach((value, index) => {
        if (index % 2 == 0) {
            const node = document.createTextNode(value);
            iElement.appendChild(node);
        } else {
            const node = createElement("b", value);
            iElement.appendChild(node);
        }
    });

    return iElement;
}

function createFakeTitle(text) {
    const fakeTitle = createElement("p", text);
    fakeTitle.classList.add("h5", "mb-3");
    return fakeTitle;
}

function createRadioDiv(ref) {
    const div = document.createElement("div");
    const input = document.createElement("input");

    div.classList.add("form-check");
    input.classList.add("form-check-input");
    input.type = "radio";
    input.name = ref;
    input.id = ref;

    return { div, input };
}

function createTableElement(indexs, { extra, title, questions }) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const trOfTHead = document.createElement("tr");
    const firstTd = document.createElement("td");
    const firstTdContent = createElement("b", title);

    firstTd.appendChild(firstTdContent);
    trOfTHead.appendChild(firstTd);

    pedsqlConfig.scale.forEach((value) => {
        const td = document.createElement("td");
        const tdContent = createElement("b", value);
        td.appendChild(tdContent);
        trOfTHead.appendChild(td);
    });

    thead.appendChild(trOfTHead);
    table.appendChild(thead);

    questions.forEach((question, index) => {
        const tr = document.createElement("tr");
        const firstTd = document.createElement("td");
        const node = document.createTextNode(`${index}. ${question}`);

        tr.classList.add("form-group");

        firstTd.appendChild(node);
        tr.appendChild(firstTd);

        for (let scaleIndex = 1; scaleIndex <= 5; scaleIndex++) {
            const td = document.createElement("td");
            const ref = `pedsql-${indexs.key}-${
                indexs.tableIndex + 1
            }-${index}`;
            const { div, input } = createRadioDiv(ref);

            input.classList.add("position-static", "mx-1");
            input.value = scaleIndex;
            if (!extra) {
                input.required = true;
            }

            div.appendChild(input);
            td.appendChild(div);
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    return table;
}

function createPedsqlQuestions() {
    for (const [key, value] of Object.entries(pedsqlQuestions)) {
        const form = document.getElementById("shadow-pedsql-" + key);
        const iElement = createItalicElement(pedsqlConfig.name);

        form.appendChild(iElement);

        value.forEach((value, tableIndex) => {
            const table = createTableElement({ key, tableIndex }, value);

            if (value.extra) {
                const extra = createElement("b", value.extra);
                form.appendChild(extra);
            }
            form.appendChild(table);
        });
    }
}

function createPthsiQuestions() {
    let questionIndex = 0;
    for (const [key, value] of Object.entries(pthsiQuestions)) {
        const form = document.getElementById("shadow-pthsi-" + key);

        value.titles.forEach((title) => {
            const titleElement = createFakeTitle(title);

            form.appendChild(titleElement);
        });

        value.questions.forEach(({ question, answers }) => {
            const pElement = createElement("p", "");
            const boldElement = createElement("b", question);
            pElement.classList.add("mt-4", "mb-3");
            pElement.appendChild(boldElement);
            form.appendChild(pElement);
            answers.forEach((answer, answerIndex) => {
                const ref = `pthsi-${questionIndex + 1}`;

                const { div, input } = createRadioDiv(ref);
                const label = createElement("label", answer);

                input.value = answerIndex + 1;
                input.required = true;

                div.appendChild(input);
                div.appendChild(label);
                form.appendChild(div);
            });

            questionIndex++;
        });
    }
}
