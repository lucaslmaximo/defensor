/* ============================================================
   ENAM — Exame Nacional da Magistratura

   Este arquivo NÃO contém questões: contém a ESTRUTURA da trilha
   (blocos, unidades e lições) e, em cada lição, a lista `refs`
   com os ids das questões no banco da DPE-RJ (data.js).

   O app resolve essas referências no boot (`resolverRefs` em
   app.js), clonando cada questão com o prefixo "enam-". Assim:
   - o texto da questão tem UMA fonte de verdade (data.js): corrigir
     um enunciado corrige nas duas provas;
   - os ids são distintos, então progresso, revisão espaçada e
     caderno de erros ficam separados por prova.

   A seleção seguiu o mapa das 6 edições da ENAM (1º, reaplicação,
   2º, 2025.1, 2025.2 e 2026.1), priorizando os temas que a FGV
   repete em TODAS as provas. Ficaram de fora as questões cuja
   resposta depende da ótica da Defensoria (curadoria especial,
   custos vulnerabilis, prerrogativas institucionais) e o bloco de
   Execução Penal, que a ENAM não cobra.

   Para acrescentar uma questão: escreva-a em data.js e cite o id
   dela na lição desejada aqui. Um ref que não existir faz o app
   avisar no console em vez de sumir silenciosamente da trilha.
   ============================================================ */
window.APP_DATA_ENAM = {
  meta: {
    concurso: "ENAM — Magistratura",
    banca: "FGV",
    fase: "Objetiva · 8 blocos",
    /* A FGV não agrupa os blocos, e agrupá-los por área (público /
       privado / penal) obrigaria a reordenar a trilha — a ordem
       oficial intercala a Humanística entre o Administrativo e os
       Direitos Humanos. Então há um grupo só, e a trilha segue a
       ordem em que a prova apresenta os blocos. */
    grupos: {
      enam: { nome: "Ordem da prova", tema: "8 blocos fixos da FGV" }
    }
  },

  // De onde vêm as questões e qual prefixo os clones recebem.
  herdaDe: "APP_DATA",
  prefixo: "enam-",

  units: [
    /* ------------------------------------------- 1. CONSTITUCIONAL */
    {
      id: "enam-const",
      titulo: "Controle, direitos fundamentais e poder constituinte",
      materia: "Direito Constitucional",
      banca: "enam",
      icone: "📕",
      descricao: "Controle de constitucionalidade, direitos fundamentais e poder constituinte — o bloco mais previsível da prova.",
      licoes: [
        {
          id: "enam-const-1",
          titulo: "Controle de constitucionalidade",
          refs: ["pcs-3", "pcs-4", "pcs-5", "pcs-6", "const-2", "const-6", "pcs-7"]
        },
        {
          id: "enam-const-2",
          titulo: "Direitos e garantias fundamentais",
          refs: ["const-4", "const-5", "const-1", "const-3", "seg-5", "seg-6", "seg-7"]
        },
        {
          id: "enam-const-3",
          titulo: "Poder constituinte e tratados",
          refs: ["pcs-1", "pcs-2", "trat-1", "trat-5", "trat-3"]
        }
      ]
    },

    /* ------------------------------------------- 2. ADMINISTRATIVO */
    {
      id: "enam-adm",
      titulo: "Atos, licitações, improbidade e responsabilidade",
      materia: "Direito Administrativo",
      banca: "enam",
      icone: "🏛️",
      descricao: "Improbidade e licitações caem em todas as edições; atos, serviços públicos e responsabilidade do Estado completam o bloco.",
      licoes: [
        {
          id: "enam-adm-1",
          titulo: "Princípios, atos e controle judicial",
          refs: ["prin-1", "ata-1", "ata-2", "ata-3", "prin-4", "prin-6"]
        },
        {
          id: "enam-adm-2",
          titulo: "Licitações, improbidade e controle externo",
          refs: ["ata-4", "ata-5", "prin-7", "prin-2", "prin-5"]
        },
        {
          id: "enam-adm-3",
          titulo: "Serviços públicos e poder de polícia",
          refs: ["adm-2", "adm-3", "adm-4", "adm-5", "adm-6", "ata-6"]
        },
        {
          id: "enam-adm-4",
          titulo: "Responsabilidade civil do Estado",
          refs: ["rce-1", "rce-2", "rce-3", "rce-4", "rce-5", "rce-6"]
        }
      ]
    },

    /* ------------------------------------- 3. FORMAÇÃO HUMANÍSTICA */
    {
      id: "enam-hum",
      titulo: "Precedentes, acesso à justiça e sociologia",
      materia: "Formação Humanística",
      banca: "enam",
      icone: "🎓",
      descricao: "Bloco ainda incompleto: falta ética da magistratura, CNJ e mediação. Veja as lacunas no LEIA-ME.",
      licoes: [
        {
          id: "enam-hum-1",
          titulo: "Precedentes, hermenêutica e acesso à justiça",
          refs: ["cj-5", "cj-6", "pg-7", "aj-1"]
        },
        {
          id: "enam-hum-2",
          titulo: "Gênero, raça e sociologia jurídica",
          refs: ["cri2-3", "cri2-4", "pol-6"]
        }
      ]
    },

    /* ---------------------------------------- 4. DIREITOS HUMANOS */
    {
      id: "enam-dh",
      titulo: "Sistemas de proteção e convencionalidade",
      materia: "Direitos Humanos",
      banca: "enam",
      icone: "🌎",
      descricao: "Sistema Interamericano e controle de convencionalidade são o núcleo duro — caem em praticamente todas as provas.",
      licoes: [
        {
          id: "enam-dh-1",
          titulo: "Sistema Interamericano e convencionalidade",
          refs: ["dh-2", "dh-3", "dh-4", "trat-4", "trat-6", "trat-7"]
        },
        {
          id: "enam-dh-2",
          titulo: "Sistema global da ONU",
          refs: ["sg-1", "sg-2", "sg-3", "sg-4", "sg-5"]
        },
        {
          id: "enam-dh-3",
          titulo: "Grupos vulnerabilizados e igualdade",
          refs: ["gv-1", "gv-2", "gv-3", "gv-5", "dh-6"]
        },
        {
          id: "enam-dh-4",
          titulo: "DESC e políticas públicas",
          refs: ["desc-1", "desc-2", "desc-6", "desc-7"]
        }
      ]
    },

    /* ------------------------------------- 5. PROCESSUAL CIVIL */
    {
      id: "enam-pc",
      titulo: "Do conhecimento à execução",
      materia: "Direito Processual Civil",
      banca: "enam",
      icone: "📐",
      descricao: "Competência e mandado de segurança em todas as edições; tutela coletiva, execução e precedentes na maioria.",
      licoes: [
        {
          id: "enam-pc-1",
          titulo: "Gratuidade, provas e tutela provisória",
          refs: ["gj-1", "gj-2", "gj-4", "gj-5", "gj-6", "gj-7"]
        },
        {
          id: "enam-pc-2",
          titulo: "Coisa julgada e rescisória",
          refs: ["cj-1", "cj-2", "cj-3", "cj-4"]
        },
        {
          id: "enam-pc-3",
          titulo: "Recursos, reclamação e remessa necessária",
          refs: ["rec-1", "rec-2", "rec-3", "rec-5", "rec-6", "rec-7"]
        },
        {
          id: "enam-pc-4",
          titulo: "Tutela coletiva e ação civil pública",
          refs: ["tc-2", "tc-3", "tc-4"]
        },
        {
          id: "enam-pc-5",
          titulo: "Execução, penhora e possessórias",
          refs: ["imp-1", "imp-2", "imp-3", "imp-4", "imp-5", "exe-1", "exe-2", "exe-3", "dr-7"]
        }
      ]
    },

    /* ------------------------------------------------- 6. CIVIL */
    {
      id: "enam-civil",
      titulo: "Parte geral, contratos, família e direitos reais",
      materia: "Direito Civil",
      banca: "enam",
      icone: "⚖️",
      descricao: "O bloco mais extenso: contratos, regime de bens, direitos reais e parte geral aparecem em todas as provas.",
      licoes: [
        {
          id: "enam-civil-1",
          titulo: "Parte geral, capacidade e personalidade",
          refs: ["pg-1", "pg-2", "pg-3", "pg-4", "pg-5", "pg-6", "cur-1", "cur-2", "cur-3"]
        },
        {
          id: "enam-civil-2",
          titulo: "Obrigações, contratos e responsabilidade civil",
          refs: ["oc-1", "oc-2", "oc-3", "oc-4", "oc-5", "oc-6", "rc-1", "rc-2", "rc-3", "rc-4", "rc-5"]
        },
        {
          id: "enam-civil-3",
          titulo: "Família e regime de bens",
          refs: ["fr-1", "fr-2", "fr-3", "fr-4", "fr-5", "gaf-1", "gaf-5"]
        },
        {
          id: "enam-civil-4",
          titulo: "Sucessões",
          refs: ["suc-1", "suc-2", "suc-3", "suc-4", "suc-5", "suc2-3", "suc2-6", "suc2-7"]
        },
        {
          id: "enam-civil-5",
          titulo: "Direitos reais, condomínio e vizinhança",
          refs: ["dr-1", "dr-2", "dr-3", "dr-4", "dr-5", "dr-6", "dr2-3", "dr2-4", "dr2-5", "dr2-6", "dr2-7"]
        },
        {
          id: "enam-civil-6",
          titulo: "Consumidor e proteção de dados",
          refs: ["rel-1", "rel-3", "rel-6", "cdc-1", "cdc-2", "cdc-5", "dig-4", "dig-5", "pub-2"]
        }
      ]
    },

    /* -------------------------------------------- 7. EMPRESARIAL */
    {
      id: "enam-emp",
      titulo: "Títulos, sociedades e crise da empresa",
      materia: "Direito Empresarial",
      banca: "enam",
      icone: "💼",
      descricao: "Recuperação, falência e sociedades caem em todas as edições. Faltam nome empresarial e duplicata.",
      licoes: [
        {
          id: "enam-emp-1",
          titulo: "Títulos de crédito e locação empresarial",
          refs: ["emp-1", "emp-2", "emp-3", "emp-4", "emp-5", "emp-6"]
        },
        {
          id: "enam-emp-2",
          titulo: "Sociedades e recuperação judicial",
          refs: ["soc-1", "soc-2", "soc-3", "soc-4", "soc-5", "soc-6", "soc-7"]
        }
      ]
    },

    /* -------------------------------------------------- 8. PENAL */
    {
      id: "enam-penal",
      titulo: "Teoria do crime, crimes em espécie e processo",
      materia: "Direito Penal",
      banca: "enam",
      icone: "🔨",
      descricao: "Teoria do crime, crimes patrimoniais e contra a Administração caem em todas as provas; o processo penal vem embutido.",
      licoes: [
        {
          id: "enam-penal-1",
          titulo: "Teoria geral do crime",
          refs: ["tcr-1", "tcr-2", "tcr-3", "tcr-4", "tcr-5", "tcr-6"]
        },
        {
          id: "enam-penal-2",
          titulo: "Crimes contra o patrimônio",
          refs: ["esp-1", "esp-2", "esp-3", "esp-4", "esp-5"]
        },
        {
          id: "enam-penal-3",
          titulo: "Crimes contra a Administração Pública",
          refs: ["dig2-4", "dig2-5", "dig2-6"]
        },
        {
          id: "enam-penal-4",
          titulo: "Crimes contra a dignidade sexual",
          refs: ["dig2-1", "dig2-2", "dig2-3", "dig2-7", "pe-6"]
        },
        {
          id: "enam-penal-5",
          titulo: "Dosimetria, pena e prescrição",
          refs: ["pen-1", "pen-2", "pen-3", "pen-4", "pen-5", "pen-6", "pen-7", "mul-1"]
        },
        {
          id: "enam-penal-6",
          titulo: "Crimes em espécie e leis especiais",
          refs: ["esp-6", "lex-6", "lex-7", "arm-6", "arm-7"]
        },
        {
          id: "enam-penal-7",
          titulo: "Processo penal: prisões, competência e júri",
          refs: ["cau-1", "cau-3", "cau-6", "comp-1", "comp-2", "comp-5", "comp-6", "comp-7", "pp-3", "ppp-2"]
        },
        {
          id: "enam-penal-8",
          titulo: "Criminologia",
          refs: ["crim-1", "crim-2", "pol-3", "pol-4", "pol-5"]
        }
      ]
    }
  ]
};
