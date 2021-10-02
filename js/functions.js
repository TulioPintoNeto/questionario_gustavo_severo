function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function submitForm() {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "*/*");

    var answersObject = {};
    formDataAnswers.forEach(function (value, key) {
        answersObject[key] = value;
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
    if (target.value === "true") {
        followingRow = document.getElementById("following-row");
        followingRow.classList.remove("d-none");
    }

    if (target.value === "false") {
        followingRow = document.getElementById("following-row");
        followingRow.classList.add("d-none");
    }
}
