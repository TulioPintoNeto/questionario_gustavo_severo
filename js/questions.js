const pedsqlConfig = {
  name: "Durante o /b/ÚLTIMO MÊS/b/, o seu filho / a sua filha tem tido /b/dificuldade/b/ com cada uma das coisas abaixo?",
  scale: [
    "Nunca",
    "Quase nunca",
    "Algumas vezes",
    "Muitas vezes",
    "Quase sempre",
  ],
};

const pedsqlQuestions = {
  "13-18": [
    {
      title: "CAPACIDADE FÍSICA (dificuldades...)",
      questions: [
        "Andar mais de um quarteirão",
        "Correr",
        "Praticar esportes ou fazer exercícios físicos",
        "Levantar alguma coisa pesada",
        "Tomar banho de banheira ou de chuveiro sozinho/a",
        "Ajudar nas tarefas domésticas",
        "Sentir dor",
        "Ter pouca energia ou disposição",
      ],
    },
    {
      title: "ASPECTO EMOCIONAL (dificuldades...)",
      questions: [
        "Sentir medo ou ficar assustado/a",
        "Ficar triste",
        "Ficar com raiva",
        "Dormir mal",
        "Se preocupar com o que vai acontecer com ele / ela",
      ],
    },
    {
      title: "ATIVIDADES SOCIAIS (dificuldades...)",
      questions: [
        "Conviver com outros adolescentes",
        "Os outros adolescentes não quererem ser amigos dele / dela",
        "Os outros adolescentes implicarem com seu filho / sua filha",
        "Não conseguir fazer coisas que outros adolescentes da mesma idade fazem",
        "Acompanhar o ritmo dos outros adolescentes",
      ],
    },
    {
      title: "ATIVIDADE ESCOLAR (dificuldades...)",
      questions: [
        "Prestar atenção na aula",
        "Esquecer as coisas (esquecer o que aprendeu, esquecer de fazer as tarefas escolares, etc.)",
        "Acompanhar a turma nas tarefas escolares",
        "Faltar à aula por não estar se sentindo bem",
        "Faltar à aula para ir ao médico ou ao hospital",
      ],
    },
  ],
  "8-12": [
    {
      title: "CAPACIDADE FÍSICA (dificuldades...)",
      questions: [
        "Andar mais de um quarteirão",
        "Correr",
        "Praticar esportes ou fazer exercícios físicos",
        "Levantar alguma coisa pesada",
        "Tomar banho de banheira ou de chuveiro sozinho/a",
        "Ajudar nas tarefas domésticas",
        "Sentir dor",
        "Ter pouca energia ou disposição",
      ],
    },
    {
      title: "ASPECTO EMOCIONAL (dificuldades...)",
      questions: [
        "Sentir medo ou ficar assustado/a",
        "Ficar triste",
        "Ficar com raiva",
        "Dormir mal",
        "Se preocupar com o que vai acontecer com ele / ela",
      ],
    },
    {
      title: "ATIVIDADES SOCIAIS (dificuldades...)",
      questions: [
        "Conviver com outras crianças",
        "As outras crianças não quererem ser amigos dele / dela",
        "As outras crianças implicarem com o seu filho / a sua filha",
        "Não conseguir fazer coisas que outras crianças da mesma idade fazem",
        "Acompanhar a brincadeira com outras crianças",
      ],
    },
    {
      title: "ATIVIDADE ESCOLAR (dificuldades...)",
      questions: [
        "Prestar atenção na aula",
        "Esquecer as coisas (esquecer o que aprendeu, esquecer de fazer as tarefas escolares, etc.)",
        "Acompanhar a turma nas tarefas escolares",
        "Faltar à aula por não estar se sentindo bem",
        "Faltar à aula para ir ao médico ou ao hospital",
      ],
    },
  ],
  "5-7": [
    {
      title: "CAPACIDADE FÍSICA (dificuldades...)",
      questions: [
        "Andar mais de um quarteirão",
        "Correr",
        "Praticar esportes ou fazer exercícios físicos",
        "Levantar alguma coisa pesada",
        "Tomar banho de banheira ou de chuveiro sozinho/a",
        "Ajudar nas tarefas domésticas, como apanhar os brinquedos",
        "Sentir dor",
        "Ter pouca energia ou disposição",
      ],
    },
    {
      title: "ASPECTO EMOCIONAL (dificuldades...)",
      questions: [
        "Sentir medo ou ficar assustado/a",
        "Ficar triste",
        "Ficar com raiva",
        "Dormir mal",
        "Se preocupar com o que vai acontecer com ele / ela",
      ],
    },
    {
      title: "ATIVIDADES SOCIAIS (dificuldades...)",
      questions: [
        "Conviver com outras crianças",
        "As outras crianças não quererem ser amigos dele / dela",
        "As outras crianças implicarem com o seu filho / a sua filha",
        "Não conseguir fazer coisas que outras crianças da mesma idade fazem",
        "Acompanhar a brincadeira com outras crianças",
      ],
    },
    {
      title: "ATIVIDADE ESCOLAR (dificuldades...)",
      questions: [
        "Prestar atenção na aula",
        "Esquecer as coisas (esquecer o que aprendeu, esquecer de fazer as tarefas escolares, etc.)",
        "Acompanhar a turma nas atividades escolares",
        "Faltar à aula por não estar se sentindo bem",
        "Faltar à aula para ir ao médico ou ao hospital",
      ],
    },
  ],
  "2-4": [
    {
      title: "CAPACIDADE FÍSICA (dificuldades...)",
      questions: [
        "Andar",
        "Correr",
        "Participar de brincadeiras ativas ou fazer exercícios físicos",
        "Levantar alguma coisa pesada",
        "Tomar banho",
        "Ajudar a apanhar os brinquedos",
        "Sentir dor",
        "Ter pouca energia ou disposição",
      ],
    },
    {
      title: "ASPECTO EMOCIONAL (dificuldades...)",
      questions: [
        "Sentir medo ou ficar assustado/a",
        "Ficar triste",
        "Ficar com raiva",
        "Dormir mal",
        "Ficar preocupado/a",
      ],
    },
    {
      title: "ATIVIDADES SOCIAIS (dificuldades...)",
      questions: [
        "Brincar com outras crianças",
        "As outras crianças não quererem ser amigos dele / dela",
        "As outras crianças implicarem com o seu filho / a sua filha",
        "Não conseguir fazer coisas que outras crianças da mesma idade fazem",
        "Acompanhar a brincadeira com outras crianças",
      ],
    },
    {
      extra:
        "*Por favor, responda a esta parte se seu filho / sua filha vai à escola ou à creche",
      title: "ATIVIDADE ESCOLAR (dificuldades...)",
      questions: [
        "Fazer as mesmas atividades escolares / pré-escolares que as outras crianças da turma",
        "Faltar à aula / creche por não estar se sentindo bem",
        "Faltar à aula / creche para ir ao médico ou ao hospital",
      ],
    },
  ],
};

const pthsiQuestions = {
  "1-7": {
    titles: ["Sintomas Físicos"],
    questions: [
      {
        question: "1. Nas últimas 4 semanas, com que frequência seu filho acordou no meio da noite?",
        answers: ["Nunca", "Uma vez por semana", "2-3 vezes por semana", "4-5 vezes por semana", "6-7 vezes por semana"]
      },
      {
        question: "2. Nas últimas 4 semanas, com que frequência seu filho sufocou ou engasgou durante o sono?",
        answers: ["Nunca", "Uma vez por semana", "2-3 vezes por semana", "4-5 vezes por semana", "6-7 vezes por semana"]
      },
      {
        question: "3. Nas últimas 4 semanas, com que frequência seu filho precisou de ajuda para respirar durante o sono?",
        answers: ["Nunca", "Uma vez por semana", "2-3 vezes por semana", "4-5 vezes por semana", "6-7 vezes por semana"]
      },
      {
        question: "4. Nas últimas 4 semanas, com que frequência seu filho teve dificuldade para respirar enquanto estava acordado?",
        answers: ["Nunca", "Uma vez por semana", "2-3 vezes por semana", "4-5 vezes por semana", "6-7 vezes por semana"]
      },
      {
        question: "5. O meu filho parece ser menos saudável do que outras crianças que conheço.",
        answers: ["Totalmente verdadeiro", "Mais verdadeiro do que falso", "Não sei", "Mais falso do que verdadeiro", "Totalmente falso"]
      },
      {
        question: "6. O meu filho nunca esteve gravemente doente.",
        answers: ["Totalmente verdadeiro", "Mais verdadeiro do que falso", "Não sei", "Mais falso do que verdadeiro", "Totalmente falso"]
      },
      {
        question: "7. Eu me preocupo mais com a saúde do meu filho do que as outras pessoas se preocupam com a saúde dos seus filhos.",
        answers: ["Totalmente verdadeiro", "Mais verdadeiro do que falso", "Não sei", "Mais falso do que verdadeiro", "Totalmente falso"]
      },
    ],
  },

  "8-14": {
    titles: [
      "Atendimentos Médicos / Custos",
      "Nos últimos três meses, quantas vezes, aproximadamente, seu filho ou filha...",
    ],
    questions: [
      {
        question: "8. foi ao médico (pneumologista ou otorrinolaringologista) por problemas relacionados à traqueostomia?",
        answers: ["Nenhuma", "1-3 vezes", "4-6 vezes", "7-9 vezes", ">9 vezes"]
      },
      {
        question: "9. foi a um serviço de emergência por problemas relacionados à traqueostomia?",
        answers: ["Nenhuma", "1-3 vezes", "4-6 vezes", "7-9 vezes", ">9 vezes"]
      },
      {
        question: "10. foi hospitalizado por problemas relacionados à traqueostomia?",
        answers: ["0 vezes", "1 vez", "2 vezes", "3 vezes", "≥ 4 vezes ou hospitalizado cronicamente"]
      },
      {
        question: "11. Quantas horas por dia você sente necessidade de cuidados de enfermagem em casa?",
        answers: ["0-4", "4-8", "8-12", "12-16", "16-24"]
      },
      {
        question: "12. Quantas horas por dia você recebe cuidados de enfermagem em casa?",
        answers: ["0-4", "4-8", "8-12", "12-16", "16-24"]
      },
      {
        question: "13. Quantos dias por semana você sente necessidade de cuidados de enfermagem em casa?",
        answers: ["Nunca", "Uma vez por semana", "2-3 vezes por semana", "4-6 vezes por semana", "Todos os dias"]
      },
      {
        question: "14. Quantos dias por semana você recebe cuidados de enfermagem em casa?",
        answers: ["Nunca", "Uma vez por semana", "2-3 vezes por semana", "4-6 vezes por semana", "Todos os dias"]
      },
    ],
  },

  "15-17": {
    titles: ["Estresse e como lidar com as dificuldades / Visão do cuidador sobre a perspectiva da criança"],
    questions: [
      {
        question: "15. Para seu filho, o quanto é difícil ou incômodo não poder nadar no verão?",
        answers: ["Nem um pouco difícil / incômodo", "Um pouco difícil / incômodo", "Moderadamente difícil / incômodo", "Muito difícil / incômodo", "Extremamente difícil / incômodo", "Não se aplica"]
      },
      {
        question: "16. Para seu filho, o quanto é difícil ou incômodo não poder brincar na banheira?",
        answers: ["Nem um pouco difícil / incômodo", "Um pouco difícil / incômodo", "Moderadamente difícil / incômodo", "Muito difícil / incômodo", "Extremamente difícil / incômodo", "Não se aplica"]
      },
      {
        question: "17. Para seu filho, o quanto é difícil ou o quanto ele se sente incomodado pelo jeito que a voz dele soa?",
        answers: ["Nem um pouco difícil / incômodo", "Um pouco difícil / incômodo", "Moderadamente difícil / incômodo", "Muito difícil / incômodo", "Extremamente difícil / incômodo", "Não se aplica"]
      },
    ],
  },

  "18-23": {
    titles: ["Estresse e como lidar com as dificuldades / cuidadores"],
    questions: [
      {
        question: "18. Como você descreveria sua qualidade de vida em geral?",
        answers: ["Excelente", "Muito boa", "Boa", "Regular", "Ruim"]
      },
      {
        question: "19. Com que frequência você consegue realizar afazeres domésticos?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "20. Com que frequência você fica apreensivo ou preocupado com a segurança do seu filho durante a troca da cânula da traqueostomia?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "21. Com que frequência você fica apreensivo ou preocupado com a segurança do seu filho durante a aspiração da cânula de traqueostomia?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "22. Com que frequência você fica apreensivo ou preocupado com a capacidade do seu filho de respirar?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "23. Na última semana, com que frequência você conseguiu sair de dentro de casa com seu filho (para afazeres ou lazer)?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
    ],
  },

  "24-34": {
    titles: ["Durante as últimas 4 semanas, com que frequência..."],
    questions: [
      {
        question: "24. Você ficou apreensivo ou preocupado com a saúde física do seu filho?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "25. Você ficou apreensivo ou preocupado com o bem-estar emocional ou comportamento do seu filho?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "26. Você sentiu alguma limitação em atender suas próprias necessidades por causa da saúde física do seu filho?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "27. A condição do seu filho tem afetado a sua saúde?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "28. Você sentiu alguma limitação em atender suas próprias necessidades por causa do bem-estar emocional ou comportamento do seu filho?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "29. A condição do seu filho tem afetado seu estado emocional?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "30. A condição do seu filho tem afetado seu relacionamento conjugal/amoroso?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "31. A condição do seu filho tem afetado seu sono?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "32. A condição do seu filho tem interrompido as variadas atividades do cotidiano da família? (refeições, assistir TV, sair de casa)",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "33. Você precisou da ajuda de profissional de saúde habilitado?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      },
      {
        question: "34. Você obteve ajuda de profissional de saúde habilitado?",
        answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
      }
    ],
  }
};