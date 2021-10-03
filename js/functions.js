function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(`${dateString} 00:00`);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function mockFill() {
    document.getElementById("parentName").value = "Tulio Pinto Neto";
    document.getElementById("age").value = "28";
    document.getElementById("schooling").value = "Fundamental Completo";
    document.getElementById("income").value = "1000";
    document.getElementById("relatives").value = "Pai";
    document.getElementById("skinColor").value = "Branca";
    document.getElementById("city").value = "Porto Alegre";
    document.getElementById("state").value = "RS";
    document.getElementById("childName").value = "Luiza";
    const childBirthDate = document.getElementById("childBirthDate");
    childBirthDate.value = "2021-03-03";
    handleChildBirthDateChange(childBirthDate);
    document.getElementById("procedureAge").value = "0";
    document.getElementById("followingFalse").checked = true;

    for (const [key, value] of Object.entries(pedsqlQuestions)) {
        value.forEach((value, tableIndex) => {
            const indexs = { key, tableIndex };
            value.questions.forEach((question, index) => {
                const ref = `pedsql_${indexs.key}_${
                    indexs.tableIndex + 1
                }-${index}`;
                document.getElementById(ref).checked = true;
            });
        });
    }

    let questionIndex = 0;
    for (const [key, value] of Object.entries(pthsiQuestions)) {
        value.questions.forEach(({ question, answers }) => {
            const ref = `pthsi_${questionIndex + 1}`;
            document.getElementById(ref).checked = true;
            questionIndex++;
        });
    }
}

function submitForm() {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "*/*");

    var answersObject = {};
    formDataAnswers.forEach(function (value, key) {
        if (key != "following") {
            answersObject[key] = value;
        }
    });
    var answersJson = JSON.stringify(answersObject);

    const options = {
        method: "POST",
        body: answersJson,
        mode: "cors",
        headers: headers,
    };

    fetch(`${baseUrl}/form/${byAge()}`, options);
}
function persistForm(form) {
    const formData = new FormData(form);

    for (let pair of formData.entries()) {
        const regex = /_[0-9-]+_/gm;
        const treatedName = pair[0].replaceAll(regex, "_").replaceAll("-", "_");
        switch (treatedName) {
            case "income":
                formDataAnswers.set(
                    treatedName,
                    pair[1].replaceAll(".", "").replaceAll(",", ".")
                );
                break;
            default:
                formDataAnswers.set(treatedName, pair[1]);
        }
    }
}

function changeRoute(newRouteId) {
    const newRoute = pageOrder.find(({ current }) => current() === newRouteId);
    title.innerHTML = newRoute.title || "";

    const mapiLogoClasses = document.getElementById("mapi-logo").classList;
    if (newRoute.current()?.includes("pedsql")) {
        mapiLogoClasses.remove(`d-none`);
    } else {
        mapiLogoClasses.add(`d-none`);
    }

    document.getElementById(newRoute.current()).classList.remove("d-none");
}

function resetBeforeNavigate(form) {
    scrollTo(0, 0);
    form.parentNode.classList.add("d-none");

    return pageOrder.find(({ current }) => current() === form.parentNode.id);
}

function handleSchoolingChange(target) {
    const formGroupClasses = target.parentNode.classList;
    const schoolingOther = document.getElementById("schoolingOther");
    if (target.value.includes("Incompleto")) {
        formGroupClasses.remove("col-md-6");
        formGroupClasses.add("col-md-3");
        schoolingOther.parentNode.classList.remove("d-none");
        schoolingOther.required = true;
    } else {
        formGroupClasses.remove("col-md-3");
        formGroupClasses.add("col-md-6");
        schoolingOther.parentNode.classList.add("d-none");
        schoolingOther.required = false;
    }
}

function handleSkinColorChange(target) {
    const formGroupClasses = target.parentNode.classList;
    const skinColorOther = document.getElementById("skinColorOther");
    if (target.value === "Outra") {
        formGroupClasses.remove("col-md-6");
        formGroupClasses.add("col-md-3");
        skinColorOther.parentNode.classList.remove("d-none");
        skinColorOther.required = true;
    } else {
        formGroupClasses.remove("col-md-3");
        formGroupClasses.add("col-md-6");
        skinColorOther.parentNode.classList.add("d-none");
        skinColorOther.required = false;
    }
}

function handleIncomeRefuseChange(target) {
    incomeInput = document.getElementById("income");

    incomeInput.value = "";
    incomeInput.disabled = target.checked;
    incomeInput.required = !target.checked;
}

function handleChildBirthDateChange(target) {
    const selectInput = document.getElementById("procedureAge");
    selectInput.innerHTML = "";
    selectInput.disabled = true;

    const domOptionChoose = createElement("option", "Escolha uma opção...");
    domOptionChoose.selected = true;
    domOptionChoose.value = "";
    domOptionChoose.disabled = true;
    domOptionChoose.id = "procedureAgeChooseOption";
    selectInput.appendChild(domOptionChoose);

    if (target.value[0] !== "2") return;

    const age = getAge(target.value);
    const maxAge = Math.min(age, 18);

    for (var i = 0; i <= maxAge; i++) {
        const option = createElement("option", i);
        selectInput.appendChild(option);
    }

    selectInput.disabled = false;
}

function handleFollowingChange(target) {
    const followingRow = document.getElementById("following-row");
    let required;

    if (target.value === "true") {
        followingRow.classList.remove("d-none");
        required = true;
    }
    if (target.value === "false") {
        followingRow.classList.add("d-none");
        required = false;
    }

    followingRow.children[0].children.followingCity.required = required;
    followingRow.children[1].children.followingState.required = required;
    followingRow.children[2].children.followingType.required = required;
}
