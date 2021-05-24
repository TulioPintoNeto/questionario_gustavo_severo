function createBoldElement(text) {
  const bElement = document.createElement("b");
  const node = document.createTextNode(text);
  bElement.appendChild(node);
  return bElement;
}

function createItalicElement(text) {
  const iElement = document.createElement("i");
  const arrayName = text.split("/b/");

  arrayName.forEach((value, index) => {
    if (index % 2 == 0) {
      const node = document.createTextNode(value);
      iElement.appendChild(node);
    } else {
      const node = createBoldElement(value);
      iElement.appendChild(node);
    }
  });

  return iElement;
}

function createTableElement(indexs, { title, questions }) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const trOfTHead = document.createElement("tr");
  const firstTd = document.createElement("td");
  const firstTdContent = createBoldElement(title);

  firstTd.appendChild(firstTdContent);
  trOfTHead.appendChild(firstTd);

  pedsqlConfig.scale.forEach((value) => {
    const td = document.createElement("td");
    const tdContent = createBoldElement(value);
    td.appendChild(tdContent);
    trOfTHead.appendChild(td);
  });

  thead.appendChild(trOfTHead);
  table.appendChild(thead);

  console.log(questions);
  questions.forEach((question, index) => {
    const tr = document.createElement('tr');
    const firstTd = document.createElement('td');
    const node = document.createTextNode(`${index}. ${question}`);
    
    firstTd.appendChild(node);
    tr.appendChild(firstTd);

    for(let i = 0; i <= 4; i++) {
      const td = document.createElement('td');
      const div = document.createElement('div');
      const input = document.createElement('input');

      div.classList.add('form-check');
      input.classList.add('form-check-input', 'position-static');
      input.type = 'radio';
      const ref = `pedsql-${indexs.key}-${indexs.tableIndex}-${index}`;
      input.name = ref;
      input.id = ref;
      input.value = i;

      div.appendChild(input);
      td.appendChild(div);
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  return table;
}

function createQuestions() {
  for (const [key, value] of Object.entries(pedsqlQuestions)) {
    const form = document.getElementById("pedsql-" + key).children[0];
    const iElement = createItalicElement(pedsqlConfig.name);

    form.appendChild(iElement);

    value.forEach((value, tableIndex) => {
      const table = createTableElement({key, tableIndex}, value);

      form.appendChild(table);
    });
  }
}
