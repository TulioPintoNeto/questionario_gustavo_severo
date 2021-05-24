const byAge = () => {
  const age = parseFloat(document.getElementById("childAge").value);
  switch (true) {
    case age < 5:
      return null;
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
    actual: "section-term",
    next: () => "section-user-data",
  },
  {
    actual: "section-user-data",
    next: () => byAge(),
  },
];

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
  if (target.value === "Outro") {
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

      const schoolingInput = document.getElementById("schooling");
      const skinColorInput = document.getElementById("skinColor");
      const incomeRefuseInput = document.getElementById("incomeRefuse");

      createQuestions();

      $("#income").mask("#.##0,00", { reverse: true });

      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
            if (form.checkValidity() === true) {
              scrollTo(0, 0);
              form.parentNode.classList.add("d-none");
              console.log(form.parentNode.id);
              const nextId = pageOrder.find(
                ({ actual }) => actual === form.parentNode.id
              ).next();
              if (nextId) {
                const mapiLogoClasses = document.getElementById('mapi-logo').classList;
                if (nextId.includes('pedsql')) {
                  mapiLogoClasses.remove(`d-none`);
                } else {
                  mapiLogoClasses.add(`d-none`);
                }
                document.getElementById(nextId).classList.remove("d-none");
              }
            }
          },
          false
        );
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
