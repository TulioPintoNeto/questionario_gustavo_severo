const formDataAnswers = new FormData();
const baseUrl = "https://questionario-gustavo-severo.herokuapp.com";
// const baseUrl = "http://localhost:3000";

const byAge = () => {
    const age = getAge(document.getElementById("childBirthDate").value);
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
            const childBirthDate = document.getElementById("childBirthDate");
            const followingTrueInput = document.getElementById("followingTrue");
            const followingFalseInput =
                document.getElementById("followingFalse");

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
            childBirthDate.addEventListener("change", (event) =>
                handleChildBirthDateChange(event.target)
            );
            followingTrueInput.addEventListener("change", (event) =>
                handleFollowingChange(event.target)
            );
            followingFalseInput.addEventListener("change", (event) =>
                handleFollowingChange(event.target)
            );
        },
        false
    );
})();
