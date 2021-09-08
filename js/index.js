const formDataAnswers = new FormData();
// const baseUrl = "https://questionario-gustavo-severo.herokuapp.com/";
const baseUrl = "http://localhost:3000";
// const thisUrl = "https://validapthsi-hcpa.com.br/";
const thisUrl = "http://127.0.0.1:5500";

const byAge = () => {
    const age = parseFloat(document.getElementById("childAge").value);
    switch (true) {
        case age === 0:
            return "pedsql-0";
        case age === 1:
            return "pedsql-1";
        case age <= 4:
            return "pedsql-2-4";
        case age <= 7:
            return "pedsql-5-7";
        case age <= 12:
            return "pedsql-8-12";
        case age <= 18:
            return "pedsql-13-18";
        default:
            return null;
    }
};

const pageOrder = [
    {
        current: () => "section-term",
        next: () => "section-user-data",
    },
    {
        current: () => "section-user-data",
        next: () => byAge(),
    },
    {
        title: "Questionário sobre qualidade de vida - PedsQL",
        back: () => "section-user-data",
        current: () => byAge(),
        next: () => "pthsi-1-7",
    },
    {
        title: "Pediatric Tracheotomy Health Status Instrument (PTHSI)",
        back: () => byAge(),
        current: () => "pthsi-1-7",
        next: () => "pthsi-8-14",
    },
    {
        title: "Pediatric Tracheotomy Health Status Instrument (PTHSI)",
        back: () => "pthsi-1-7",
        current: () => "pthsi-8-14",
        next: () => "pthsi-15-17",
    },
    {
        title: "Pediatric Tracheotomy Health Status Instrument (PTHSI)",
        back: () => "pthsi-8-14",
        current: () => "pthsi-15-17",
        next: () => "pthsi-18-23",
    },
    {
        title: "Pediatric Tracheotomy Health Status Instrument (PTHSI)",
        back: () => "pthsi-15-17",
        current: () => "pthsi-18-23",
        next: () => "pthsi-24-34",
    },
    {
        title: "Pediatric Tracheotomy Health Status Instrument (PTHSI)",
        back: () => "pthsi-18-23",
        current: () => "pthsi-24-34",
        next: () => "final",
    },
    {
        title: "Finalizado!",
        current: () => "final",
    },
];

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

    console.log("sended");
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

(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            const forms = document.getElementsByClassName("needs-validation");
            const buttons = document.getElementsByClassName("back-button");
            const radioInputs = document.getElementsByClassName(
                "position-static form-check-input"
            );

            const schoolingInput = document.getElementById("schooling");
            const skinColorInput = document.getElementById("skinColor");
            const incomeRefuseInput = document.getElementById("incomeRefuse");

            createPedsqlQuestions();
            createPthsiQuestions();

            $("#income").mask("#.##0,00", { reverse: true });

            Array.prototype.filter.call(forms, function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        form.classList.add("was-validated");

                        if (form.checkValidity() === true) {
                            const next = resetBeforeNavigate(form).next();

                            if (next === "final") {
                                persistForm(event.target);
                                submitForm();
                                changeRoute(next);
                            } else if (next) {
                                persistForm(event.target);
                                changeRoute(next);
                            }
                        }
                    },
                    false
                );
            });

            Array.prototype.filter.call(buttons, function (button) {
                button.addEventListener("click", function (event) {
                    const form = button.parentNode.parentNode;
                    resetBeforeNavigate(form);
                    const previous = resetBeforeNavigate(form).back();
                    if (previous) {
                        changeRoute(previous);
                    }
                });
            });

            Array.prototype.filter.call(radioInputs, function (input) {
                input.addEventListener("change", function (event) {
                    const form = input.id.includes("pedsql")
                        ? document.getElementById(byAge()).children[0]
                        : null;

                    if (form.classList.contains("was-validated")) {
                        const invalidMsg = document.querySelectorAll(
                            `#${form.parentNode.id} .invalid-feedback:not(.automatically)`
                        )[0];

                        if (invalidMsg) {
                            form.checkValidity()
                                ? invalidMsg.classList.add("d-none")
                                : invalidMsg.classList.remove("d-none");
                        }
                    }
                });
            });

            skinColorInput.addEventListener("change", (event) =>
                handleSkinColorChange(event.target)
            );
            schoolingInput.addEventListener("change", (event) =>
                handleSchoolingChange(event.target)
            );
            incomeRefuseInput.addEventListener("change", (event) =>
                handleIncomeRefuseChange(event.target)
            );
        },
        false
    );
})();
