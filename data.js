/* ============================================================
   BANCO DE CONTEÚDO — App de Estudo DPE-RJ
   Fase 1 (MVP): prioridades máximas da Banca I.
   Modo de cobrança por questão: 'lei' | 'caso' | 'juris'
   ATENÇÃO: conteúdo jurídico gerado para estudo. Confira as
   fontes citadas antes de considerar como verdade definitiva.
   ============================================================ */
window.APP_DATA = {
  meta: {
    concurso: "XXIX Concurso — DPE-RJ",
    banca: "FGV",
    fase: "Objetiva · Bancas I e II"
  },

  // Cada unidade = um tópico da trilha; cada lição = um bloco de questões.
  units: [
    /* ---------------------------------------------------------- 1. SUCESSÕES */
    {
      id: "sucessoes",
      titulo: "Sucessões",
      materia: "Direito Civil",
      icone: "⚱️",
      cor: "roxo",
      descricao: "Ordem de vocação hereditária, herdeiros necessários, representação.",
      licoes: [
        {
          id: "sucessoes-1",
          titulo: "Ordem de vocação e herdeiros necessários",
          questoes: [
            {
              id: "suc-1",
              modo: "lei",
              fonte: "CC, art. 1.845",
              enunciado: "São considerados herdeiros necessários, cuja existência garante a reserva da legítima:",
              alternativas: [
                "os descendentes, os ascendentes e os colaterais até o 4º grau",
                "os descendentes, os ascendentes e o cônjuge",
                "apenas os descendentes e os ascendentes",
                "os descendentes, o cônjuge e os irmãos",
                "qualquer herdeiro indicado em testamento"
              ],
              correta: 1,
              explicacao: "Pelo art. 1.845 do Código Civil, são herdeiros necessários os descendentes, os ascendentes e o cônjuge. Os colaterais NÃO são necessários — por isso podem ser afastados por testamento (art. 1.850)."
            },
            {
              id: "suc-2",
              modo: "lei",
              fonte: "CC, art. 1.846",
              enunciado: "Havendo herdeiros necessários, qual parcela da herança lhes pertence de pleno direito (legítima)?",
              alternativas: [
                "um terço do patrimônio líquido",
                "a totalidade, salvo disposição em contrário",
                "metade dos bens da herança",
                "dois terços do patrimônio bruto",
                "a parcela que o testador livremente fixar"
              ],
              correta: 2,
              explicacao: "Art. 1.846 do CC: pertence aos herdeiros necessários, de pleno direito, a metade dos bens da herança, constituindo a legítima. A outra metade é a parte disponível."
            },
            {
              id: "suc-3",
              modo: "caso",
              fonte: "CC, art. 1.829, I",
              enunciado: "João, casado sob o regime da COMUNHÃO UNIVERSAL de bens, falece deixando filhos e a esposa. Quanto à sucessão dos bens deixados:",
              alternativas: [
                "a esposa concorre com os filhos, recebendo quinhão igual ao deles",
                "a esposa não concorre com os descendentes, cabendo a herança aos filhos",
                "a esposa é a única herdeira, excluindo os filhos",
                "os filhos herdam apenas a metade disponível",
                "a herança é dividida meio a meio entre esposa e filhos"
              ],
              correta: 1,
              explicacao: "EXCEÇÃO importante do art. 1.829, I: o cônjuge concorre com os descendentes, SALVO se casado na comunhão universal, na separação obrigatória, ou na comunhão parcial sem bens particulares. Na comunhão universal a viúva já é meeira, e não concorre como herdeira."
            },
            {
              id: "suc-4",
              modo: "lei",
              fonte: "CC, art. 1.851 e 1.853",
              enunciado: "Sobre o direito de representação na sucessão, é correto afirmar que:",
              alternativas: [
                "ocorre na linha reta ascendente, chamando-se os avós no lugar do pai",
                "na linha colateral, dá-se em favor dos filhos de irmãos do falecido",
                "aplica-se a qualquer parente, sem limite de grau",
                "beneficia o cônjuge do herdeiro pré-morto",
                "só existe quando há testamento expresso nesse sentido"
              ],
              correta: 1,
              explicacao: "Na linha reta o direito de representação só se dá na DESCENDENTE, nunca na ascendente (art. 1.852). Na linha colateral, limita-se aos filhos de irmãos do falecido, quando concorrerem com irmãos deste (art. 1.853)."
            },
            {
              id: "suc-5",
              modo: "lei",
              fonte: "CC, arts. 1.961 e 1.964",
              enunciado: "A deserdação, que priva o herdeiro necessário de sua legítima, exige:",
              alternativas: [
                "simples declaração verbal do autor da herança perante duas testemunhas",
                "testamento, com expressa declaração de causa prevista em lei",
                "decisão judicial anterior à abertura da sucessão",
                "acordo entre os demais herdeiros",
                "apenas a prática de ato de ingratidão, independentemente de formalidade"
              ],
              correta: 1,
              explicacao: "A deserdação só pode ser ordenada em testamento, com expressa declaração da causa (art. 1.964), e as causas são taxativas (arts. 1.962 e 1.963). Sem testamento válido indicando a causa legal, não há deserdação."
            }
          ]
        }
      ]
    },

    /* ---------------------------------------------- 2. RESPONSABILIDADE CIVIL */
    {
      id: "resp-civil",
      titulo: "Responsabilidade Civil",
      materia: "Direito Civil",
      icone: "⚖️",
      cor: "verde",
      descricao: "Ato ilícito, culpa, risco, responsabilidade objetiva e por terceiros.",
      licoes: [
        {
          id: "resp-civil-1",
          titulo: "Elementos e responsabilidade objetiva",
          questoes: [
            {
              id: "rc-1",
              modo: "lei",
              fonte: "CC, art. 186",
              enunciado: "Segundo o Código Civil, comete ato ilícito aquele que, por ação ou omissão voluntária, negligência ou imprudência, viola direito e causa dano a outrem:",
              alternativas: [
                "somente se o dano for exclusivamente patrimonial",
                "ainda que exclusivamente moral",
                "apenas quando houver dolo específico",
                "desde que o dano ultrapasse o valor legal mínimo",
                "somente em relações contratuais"
              ],
              correta: 1,
              explicacao: "Art. 186 do CC: há ato ilícito 'ainda que exclusivamente moral'. O dispositivo consagra a reparabilidade autônoma do dano moral, independentemente de prejuízo patrimonial."
            },
            {
              id: "rc-2",
              modo: "lei",
              fonte: "CC, art. 927, parágrafo único",
              enunciado: "A regra geral da responsabilidade civil é a subjetiva (baseada na culpa). Constitui EXCEÇÃO prevista no próprio Código Civil, com responsabilidade objetiva:",
              alternativas: [
                "todo e qualquer dano causado em acidente de trânsito",
                "a atividade que, por sua natureza, implicar risco para os direitos de outrem",
                "os danos decorrentes de inadimplemento contratual simples",
                "os prejuízos causados por caso fortuito externo",
                "qualquer dano moral, por presunção legal"
              ],
              correta: 1,
              explicacao: "Art. 927, parágrafo único: haverá obrigação de reparar o dano, independentemente de culpa, quando a atividade normalmente desenvolvida implicar, por sua natureza, risco para os direitos de outrem. É a cláusula geral de responsabilidade objetiva pelo risco."
            },
            {
              id: "rc-3",
              modo: "lei",
              fonte: "CC, art. 187",
              enunciado: "O titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pela boa-fé, pelos bons costumes ou pelo fim econômico ou social:",
              alternativas: [
                "atua no exercício regular de direito, não respondendo por danos",
                "também comete ato ilícito (abuso de direito)",
                "responde apenas se houver intenção de prejudicar",
                "fica isento por ausência de previsão legal",
                "responde somente na esfera penal"
              ],
              correta: 1,
              explicacao: "Art. 187 do CC: o abuso de direito é espécie de ato ilícito. Independe de intenção de prejudicar — o critério é objetivo-finalístico (exceder os limites da boa-fé, dos bons costumes ou do fim social/econômico)."
            },
            {
              id: "rc-4",
              modo: "caso",
              fonte: "CC, arts. 932, I e 933",
              enunciado: "O filho menor de Ana, sob sua autoridade e companhia, causa dano a um vizinho. Sobre a responsabilidade de Ana:",
              alternativas: [
                "só responde se comprovada sua culpa na vigilância",
                "responde independentemente de culpa própria (objetiva)",
                "não responde, pois a responsabilidade é pessoal do menor",
                "responde apenas subsidiariamente ao patrimônio do menor",
                "responde somente se o dano for doloso"
              ],
              correta: 1,
              explicacao: "Os pais respondem pelos filhos menores sob sua autoridade e companhia (art. 932, I). E o art. 933 torna essa responsabilidade OBJETIVA: as pessoas do art. 932 respondem ainda que não haja culpa de sua parte."
            },
            {
              id: "rc-5",
              modo: "juris",
              fonte: "Teoria da perda de uma chance",
              enunciado: "A teoria da perda de uma chance, acolhida pela jurisprudência, indeniza:",
              alternativas: [
                "o dano final integralmente, como se o resultado tivesse ocorrido",
                "a oportunidade séria e real perdida, e não o resultado final incerto",
                "somente danos morais, jamais patrimoniais",
                "apenas quando a chance perdida era de 100%",
                "exclusivamente em contratos de resultado"
              ],
              correta: 1,
              explicacao: "Indeniza-se a chance perdida em si (desde que séria e real), e não o resultado final — que é incerto. O valor da indenização é proporcional à probabilidade da chance, não ao dano final."
            }
          ]
        }
      ]
    },

    /* ------------------------------------------- 3. FAMÍLIA E REGIME DE BENS */
    {
      id: "familia-regime",
      titulo: "Família e Regime de Bens",
      materia: "Direito Civil",
      icone: "💍",
      cor: "rosa",
      descricao: "Regimes de bens, separação obrigatória, outorga e pacto antenupcial.",
      licoes: [
        {
          id: "familia-regime-1",
          titulo: "Regimes de bens e suas exceções",
          questoes: [
            {
              id: "fr-1",
              modo: "lei",
              fonte: "CC, art. 1.640",
              enunciado: "Não havendo convenção, ou sendo ela nula ou ineficaz, qual regime vigora entre os cônjuges?",
              alternativas: [
                "separação total de bens",
                "comunhão universal de bens",
                "comunhão parcial de bens",
                "participação final nos aquestos",
                "o regime escolhido pelo juiz no caso concreto"
              ],
              correta: 2,
              explicacao: "Art. 1.640 do CC: à falta de pacto (ou sendo nulo), vigora o regime da comunhão parcial de bens — o regime legal supletivo do direito brasileiro."
            },
            {
              id: "fr-2",
              modo: "lei",
              fonte: "CC, art. 1.641",
              enunciado: "É OBRIGATÓRIO o regime da separação de bens no casamento, dentre outras hipóteses:",
              alternativas: [
                "de qualquer pessoa maior de 60 anos",
                "da pessoa maior de 70 anos",
                "de quem já foi casado anteriormente",
                "de estrangeiros residentes no país",
                "de quem possui patrimônio superior ao teto legal"
              ],
              correta: 1,
              explicacao: "Art. 1.641, II, do CC: impõe-se a separação obrigatória de bens à pessoa maior de 70 anos. É exceção à liberdade de escolha do regime. (Também se aplica a quem casar com inobservância de causa suspensiva e a quem depender de suprimento judicial para casar.)"
            },
            {
              id: "fr-3",
              modo: "juris",
              fonte: "Súmula 377/STF; STJ, EREsp 1.623.858/MG",
              enunciado: "No regime da separação LEGAL (obrigatória) de bens, quanto aos bens adquiridos onerosamente na constância do casamento, o entendimento atual (Súmula 377/STF, à luz do STJ) é que:",
              alternativas: [
                "nada se comunica, por ser regime de separação",
                "comunicam-se, desde que comprovado o esforço comum na aquisição",
                "comunicam-se automaticamente, independentemente de esforço comum",
                "comunicam-se todos os bens, inclusive os anteriores ao casamento",
                "a comunicação depende de autorização judicial"
              ],
              correta: 1,
              explicacao: "Súmula 377 do STF: na separação legal comunicam-se os aquestos (adquiridos onerosamente na constância do casamento). ATENÇÃO à evolução: o STJ (EREsp 1.623.858/MG) passou a exigir a PROVA DO ESFORÇO COMUM — a comunhão NÃO é automática. Por isso a correta condiciona a comunicação ao esforço comum; apresentá-la como automática (regra sem a ressalva) é a pegadinha."
            },
            {
              id: "fr-4",
              modo: "lei",
              fonte: "CC, art. 1.647",
              enunciado: "Um dos cônjuges pretende vender um imóvel do casal. A outorga (autorização) do outro cônjuge é dispensável:",
              alternativas: [
                "em qualquer regime, se o bem for particular",
                "no regime da separação absoluta de bens",
                "somente na comunhão universal",
                "nunca, sendo sempre exigida",
                "apenas com autorização judicial prévia"
              ],
              correta: 1,
              explicacao: "Art. 1.647, caput: nenhum cônjuge pode, sem autorização do outro, alienar bens imóveis, EXCETO no regime da separação absoluta. Essa é a exceção legal expressa à exigência de outorga conjugal."
            },
            {
              id: "fr-5",
              modo: "lei",
              fonte: "CC, art. 1.653",
              enunciado: "Quanto à forma do pacto antenupcial, é NULO o pacto:",
              alternativas: [
                "feito por escritura pública, se não registrado em 30 dias",
                "que não for feito por escritura pública",
                "celebrado por instrumento particular com duas testemunhas",
                "que estipule o regime da comunhão universal",
                "firmado menos de um ano antes do casamento"
              ],
              correta: 1,
              explicacao: "Art. 1.653 do CC: é nulo o pacto antenupcial se não for feito por escritura pública, e ineficaz se não lhe seguir o casamento. A forma pública é requisito de validade."
            }
          ]
        }
      ]
    },

    /* ---------------------------------- 4. EXECUÇÃO E IMPENHORABILIDADE (CPC) */
    {
      id: "impenhorabilidade",
      titulo: "Execução e Impenhorabilidade",
      materia: "Direito Processual Civil",
      icone: "💸",
      cor: "azul",
      descricao: "Letra de lei pura: bens impenhoráveis, exceções e ordem de penhora.",
      licoes: [
        {
          id: "impenhorabilidade-1",
          titulo: "Impenhorabilidade e suas exceções legais",
          questoes: [
            {
              id: "imp-1",
              modo: "lei",
              fonte: "CPC, art. 833",
              enunciado: "Nos termos do CPC, são ABSOLUTAMENTE impenhoráveis, em regra:",
              alternativas: [
                "os veículos automotores de qualquer valor",
                "os vencimentos, subsídios, soldos e salários (com ressalvas legais)",
                "os bens imóveis de valor superior a 500 salários mínimos",
                "as aplicações financeiras de renda fixa",
                "as cotas de sociedade empresária"
              ],
              correta: 1,
              explicacao: "Art. 833, IV, do CPC: são impenhoráveis os vencimentos, subsídios, soldos, salários, remunerações e proventos, ressalvado o § 2º. É a regra da impenhorabilidade das verbas de natureza salarial."
            },
            {
              id: "imp-2",
              modo: "lei",
              fonte: "CPC, art. 833, § 2º",
              enunciado: "A impenhorabilidade dos salários e da quantia depositada em poupança (até 40 salários mínimos) NÃO se aplica, por exceção legal expressa:",
              alternativas: [
                "à execução de dívida de cartão de crédito, dada a natureza alimentar do débito",
                "ao pagamento de prestação alimentícia, independentemente de sua origem",
                "à cobrança de honorários advocatícios contratuais, por sua natureza alimentar",
                "à execução fiscal de tributos federais, estaduais e municipais",
                "à cobrança de despesas condominiais do imóvel de residência"
              ],
              correta: 1,
              explicacao: "Art. 833, § 2º, do CPC: a impenhorabilidade dos incisos IV e X não se aplica à penhora para pagamento de PRESTAÇÃO ALIMENTÍCIA, independentemente de sua origem, bem como a importâncias que excedam 50 salários mínimos mensais. É a exceção clássica cobrada em prova."
            },
            {
              id: "imp-3",
              modo: "juris",
              fonte: "Lei 8.009/90, art. 3º; Súmula 549/STJ",
              enunciado: "Sobre o bem de família legal (Lei 8.009/90), qual situação constitui EXCEÇÃO que admite a penhora do imóvel residencial?",
              alternativas: [
                "dívida trabalhista de qualquer natureza contra o proprietário",
                "obrigação decorrente de fiança em contrato de locação",
                "dívida de cartão de crédito do titular",
                "empréstimo pessoal sem garantia real",
                "dívida de honorários contratuais"
              ],
              correta: 1,
              explicacao: "A impenhorabilidade do bem de família é a regra, mas o art. 3º da Lei 8.009/90 traz exceções. O STJ, na Súmula 549, firmou que é penhorável o bem de família do fiador de contrato de locação. Também são exceções, p. ex., a pensão alimentícia e o IPTU do próprio imóvel."
            },
            {
              id: "imp-4",
              modo: "lei",
              fonte: "CPC, art. 833, X",
              enunciado: "A quantia depositada em caderneta de poupança é impenhorável até o limite de:",
              alternativas: [
                "10 salários mínimos",
                "40 salários mínimos",
                "100 salários mínimos",
                "20 salários mínimos",
                "não há limite legal"
              ],
              correta: 1,
              explicacao: "Art. 833, X, do CPC: é impenhorável a quantia depositada em caderneta de poupança, até o limite de 40 salários mínimos. Acima disso, admite-se a penhora do excedente."
            },
            {
              id: "imp-5",
              modo: "lei",
              fonte: "CPC, art. 835",
              enunciado: "Segundo a ordem preferencial de penhora do CPC, o primeiro bem a ser penhorado é, em regra:",
              alternativas: [
                "os bens imóveis urbanos, dada a segurança da garantia registral",
                "o dinheiro, em espécie ou em depósito/aplicação financeira",
                "os veículos de via terrestre, pela facilidade de apreensão e alienação",
                "os títulos da dívida pública com cotação em mercado",
                "os semoventes e os bens móveis em geral"
              ],
              correta: 1,
              explicacao: "Art. 835, I e § 1º, do CPC: a penhora observa preferencialmente a ordem legal, e o dinheiro (em espécie ou em depósito/aplicação) tem prioridade — é considerado prioritário sobre os demais bens da lista."
            }
          ]
        }
      ]
    },

    /* ------------------------------- TUTELA COLETIVA E PROCESSO ESTRUTURAL */
    {
      id: "tutela-coletiva",
      titulo: "Tutela Coletiva e Processo Estrutural",
      materia: "Direito Processual Civil",
      banca: "I",
      icone: "👥",
      cor: "indigo",
      descricao: "ACP, legitimidade da Defensoria, coisa julgada coletiva e processos estruturais.",
      licoes: [
        {
          id: "tutela-coletiva-1",
          titulo: "Legitimidade, coisa julgada e processo estrutural",
          questoes: [
            {
              id: "tc-1", modo: "juris", fonte: "LACP, art. 5º, II; STF, ADI 3943",
              enunciado: "Uma associação questiona a legitimidade da Defensoria Pública para propor ação civil pública. Conforme o STF (ADI 3943):",
              alternativas: [
                "a Defensoria não tem legitimidade, pois o rol constitucional dos legitimados à ACP é taxativo",
                "a Defensoria tem legitimidade para a ACP, desde que a tutela possa beneficiar grupo que contenha pessoas necessitadas/vulneráveis",
                "a Defensoria só tem legitimidade se TODOS os beneficiados comprovarem individualmente a pobreza",
                "a legitimidade depende de pertinência temática aferida mediante autorização judicial prévia",
                "a Defensoria só pode atuar em ACP na condição de fiscal da ordem jurídica"
              ],
              correta: 1,
              explicacao: "A Lei 11.448/07 incluiu a Defensoria no rol do art. 5º da LACP, e o STF (ADI 3943) declarou a constitucionalidade dessa legitimidade. O condicionante: a atuação deve guardar pertinência com sua missão — beneficiar, ao menos em parte, grupo de pessoas necessitadas/vulneráveis. NÃO se exige que todos os beneficiados sejam hipossuficientes."
            },
            {
              id: "tc-2", modo: "lei", fonte: "CDC, art. 103, I",
              enunciado: "Em ação coletiva sobre direitos DIFUSOS, a sentença de improcedência por INSUFICIÊNCIA DE PROVAS:",
              alternativas: [
                "faz coisa julgada erga omnes, impedindo qualquer nova ação coletiva sobre o mesmo fato",
                "não impede que qualquer legitimado proponha nova ação, com nova prova (coisa julgada secundum eventum probationis)",
                "só pode ser desconstituída mediante ação rescisória proposta por legitimado coletivo",
                "permite a repropositura apenas pelo mesmo legitimado que ajuizou a primeira demanda",
                "converte-se automaticamente em procedência após cinco anos"
              ],
              correta: 1,
              explicacao: "Art. 103, I, do CDC: nos direitos difusos a sentença faz coisa julgada erga omnes, EXCETO se a improcedência for por insuficiência de provas — hipótese em que qualquer legitimado pode intentar outra ação com nova prova. É a coisa julgada secundum eventum probationis, marca do processo coletivo."
            },
            {
              id: "tc-3", modo: "lei", fonte: "CDC, art. 103, §2º; art. 94",
              enunciado: "Julgada IMPROCEDENTE a ação coletiva sobre direitos individuais homogêneos, quanto às vítimas e sucessores:",
              alternativas: [
                "todos ficam impedidos de ajuizar ações individuais, por força da coisa julgada erga omnes",
                "os interessados que NÃO intervieram como litisconsortes podem propor suas ações de indenização individuais",
                "as ações individuais em curso são extintas sem resolução do mérito, por litispendência",
                "só podem demandar individualmente após a desconstituição do julgado coletivo por rescisória",
                "a improcedência os beneficia por transporte in utilibus"
              ],
              correta: 1,
              explicacao: "Art. 103, §2º, do CDC: em caso de improcedência, os interessados que não tiverem intervindo no processo coletivo como litisconsortes (art. 94) podem propor ação individual. A coisa julgada coletiva só beneficia (nunca prejudica) o indivíduo — o transporte in utilibus opera apenas em caso de PROCEDÊNCIA (art. 103, §3º)."
            },
            {
              id: "tc-4", modo: "juris", fonte: "STF, Tema 1075 (RE 1.101.937)",
              enunciado: "Sobre o limite territorial da coisa julgada na ACP (art. 16 da LACP, com a redação da Lei 9.494/97), o STF (Tema 1075) decidiu que:",
              alternativas: [
                "a limitação é constitucional: a sentença só vale nos limites da competência territorial do juízo prolator",
                "o art. 16 é inconstitucional: a eficácia erga omnes da decisão não se limita à competência territorial do órgão que a proferiu",
                "a limitação territorial subsiste apenas para os direitos difusos e coletivos em sentido estrito",
                "a eficácia nacional depende de homologação da sentença pelo Superior Tribunal de Justiça",
                "a decisão vale somente para os associados relacionados na petição inicial"
              ],
              correta: 1,
              explicacao: "Tema 1075 do STF: é inconstitucional o art. 16 da LACP (redação da Lei 9.494/97). A apuração da abrangência da coisa julgada se dá pelos limites objetivos e subjetivos do pedido, e não pela competência territorial do juízo — a decisão em ACP pode ter eficácia em todo o território nacional."
            },
            {
              id: "tc-5", modo: "caso", fonte: "ADPF 347 (estado de coisas inconstitucional)",
              enunciado: "O chamado 'processo estrutural', de que a ADPF 347 (sistema prisional) é exemplo, caracteriza-se por:",
              alternativas: [
                "resolver litígios bipolares entre autor e réu por meio de uma única decisão definitiva e imutável, típica do processo individual",
                "enfrentar violações estruturais de direitos por meio de decisões flexíveis e escalonadas, com implementação supervisionada e diálogo institucional",
                "autorizar o juiz a substituir integralmente o administrador público na formulação e na execução das políticas públicas",
                "concentrar o julgamento no gabinete do relator, vedando a participação de amici curiae e a realização de audiências públicas",
                "aplicar-se apenas a conflitos patrimoniais entre particulares"
              ],
              correta: 1,
              explicacao: "O processo estrutural lida com litígios policêntricos, causados por falhas estruturais de políticas públicas (ex.: o 'estado de coisas inconstitucional' do sistema prisional reconhecido na ADPF 347). Trabalha com decisões em cascata (flexíveis, revisáveis), supervisão da implementação, audiências públicas e diálogo entre instituições — em vez de uma única ordem estática."
            },
            {
              id: "tc-6", modo: "juris", fonte: "STJ, EDcl no REsp 1.712.163 (custos vulnerabilis)",
              enunciado: "A intervenção da Defensoria Pública como 'custos vulnerabilis' significa que ela:",
              alternativas: [
                "atua como curadora especial do réu revel citado por edital, na forma do art. 72 do CPC, e somente nessa condição",
                "intervém de forma autônoma, em nome próprio, como guardiã dos interesses dos vulneráveis, mesmo quando as partes têm advogados constituídos",
                "substitui o Ministério Público como fiscal da ordem jurídica sempre que houver vulnerável no processo",
                "só pode intervir quando nomeada pelo juiz e se as partes não tiverem advogado constituído",
                "atua exclusivamente na esfera criminal, em favor do acusado hipossuficiente"
              ],
              correta: 1,
              explicacao: "O STJ (EDcl no REsp 1.712.163, entre outros) admitiu a intervenção da Defensoria como custos vulnerabilis: intervenção institucional AUTÔNOMA, em nome próprio, para tutelar os interesses de grupos vulneráveis — cabível mesmo quando as partes estão representadas por advogados. Não se confunde com a curadoria especial (art. 72 do CPC) nem com o custos legis do MP. Tema transversal em todo o edital da DPE-RJ."
            }
          ]
        }
      ]
    },

    /* --------------------------------------------------- 5. CDC — VÍCIO/FATO */
    {
      id: "cdc-responsabilidade",
      titulo: "CDC — Responsabilidade e Prazos",
      materia: "Direito do Consumidor",
      icone: "🛒",
      cor: "laranja",
      descricao: "Fato x vício, prazos de decadência/prescrição e arrependimento.",
      licoes: [
        {
          id: "cdc-responsabilidade-1",
          titulo: "Prazos e responsabilidade no CDC",
          questoes: [
            {
              id: "cdc-1",
              modo: "lei",
              fonte: "CDC, art. 26",
              enunciado: "O direito de reclamar por VÍCIO aparente ou de fácil constatação caduca (decadência) em:",
              alternativas: [
                "30 dias para produtos duráveis e 90 para não duráveis",
                "30 dias para não duráveis e 90 dias para duráveis",
                "5 anos, em qualquer caso",
                "1 ano, contado da entrega",
                "90 dias para qualquer produto ou serviço"
              ],
              correta: 1,
              explicacao: "Art. 26 do CDC: o prazo decadencial é de 30 dias para produtos/serviços NÃO duráveis e 90 dias para os DURÁVEIS. Conta-se, no vício aparente, da entrega efetiva do produto ou término do serviço."
            },
            {
              id: "cdc-2",
              modo: "lei",
              fonte: "CDC, art. 27",
              enunciado: "A pretensão à reparação pelos danos causados por FATO do produto ou do serviço (acidente de consumo) prescreve em:",
              alternativas: [
                "90 dias",
                "5 anos",
                "3 anos",
                "10 anos",
                "1 ano"
              ],
              correta: 1,
              explicacao: "Art. 27 do CDC: prescreve em 5 anos a pretensão à reparação pelos danos por fato do produto/serviço, iniciando a contagem do conhecimento do dano e de sua autoria. Não confundir fato (prescrição, art. 27) com vício (decadência, art. 26)."
            },
            {
              id: "cdc-3",
              modo: "lei",
              fonte: "CDC, art. 49",
              enunciado: "O direito de arrependimento, que permite desistir do contrato em 7 dias, aplica-se especificamente:",
              alternativas: [
                "a qualquer compra de produto durável, inclusive presencial no estabelecimento",
                "à contratação fora do estabelecimento comercial (ex.: internet, telefone, domicílio)",
                "somente aos serviços bancários e de crédito consignado",
                "apenas aos produtos com vício ou defeito aparente",
                "unicamente aos contratos de aquisição de bens imóveis"
              ],
              correta: 1,
              explicacao: "Art. 49 do CDC: o prazo de reflexão de 7 dias vale quando a contratação ocorre FORA do estabelecimento comercial (compras a distância — internet, telefone, a domicílio). Os valores pagos são devolvidos monetariamente atualizados."
            },
            {
              id: "cdc-4",
              modo: "lei",
              fonte: "CDC, art. 14, § 4º",
              enunciado: "A responsabilidade do fornecedor por fato do serviço é objetiva. Constitui EXCEÇÃO legal, com apuração mediante CULPA (responsabilidade subjetiva):",
              alternativas: [
                "os serviços prestados por instituições financeiras",
                "a responsabilidade pessoal dos profissionais liberais",
                "os serviços públicos essenciais",
                "os contratos de transporte",
                "os serviços de telecomunicação"
              ],
              correta: 1,
              explicacao: "Art. 14, § 4º, do CDC: a responsabilidade PESSOAL dos profissionais liberais será apurada mediante verificação de culpa. É a única exceção expressa de responsabilidade subjetiva no sistema de fato do serviço do CDC."
            },
            {
              id: "cdc-5",
              modo: "lei",
              fonte: "CDC, art. 6º, VIII",
              enunciado: "A inversão do ônus da prova em favor do consumidor (art. 6º, VIII, do CDC):",
              alternativas: [
                "é automática em toda ação consumerista",
                "depende de decisão do juiz, presente a verossimilhança OU a hipossuficiência",
                "só ocorre se houver expressa previsão contratual",
                "exige, cumulativamente, verossimilhança E hipossuficiência",
                "é vedada quando o fornecedor for microempresa"
              ],
              correta: 1,
              explicacao: "Art. 6º, VIII: a inversão é 'ope judicis' (a critério do juiz), quando for verossímil a alegação OU quando o consumidor for hipossuficiente — requisitos alternativos, segundo a doutrina e o STJ, não cumulativos."
            }
          ]
        }
      ]
    },

    /* --------------------------------------------------- 6. PLANOS DE SAÚDE */
    {
      id: "planos-saude",
      titulo: "Planos de Saúde",
      materia: "Direito do Consumidor",
      icone: "🏥",
      cor: "ciano",
      descricao: "Súmulas do STJ, cláusulas abusivas e cobertura (rol da ANS, TEA).",
      licoes: [
        {
          id: "planos-saude-1",
          titulo: "Jurisprudência e cobertura",
          questoes: [
            {
              id: "ps-1",
              modo: "juris",
              fonte: "Súmula 608 do STJ",
              enunciado: "Sobre a aplicação do Código de Defesa do Consumidor aos planos de saúde, o STJ (Súmula 608) firmou que:",
              alternativas: [
                "o CDC não se aplica a contratos de plano de saúde, regidos apenas pela Lei 9.656/98",
                "aplica-se o CDC, salvo os contratos administrados por entidades de autogestão",
                "o CDC só se aplica aos planos individuais e familiares, excluídos os coletivos",
                "aplica-se o CDC apenas aos contratos firmados após a Lei dos Planos de Saúde",
                "aplica-se somente a Lei 9.656/98, afastada a incidência do CDC"
              ],
              correta: 1,
              explicacao: "Súmula 608 do STJ: aplica-se o CDC aos contratos de plano de saúde, SALVO os administrados por entidades de autogestão. A autogestão é a exceção — nela não incide o CDC."
            },
            {
              id: "ps-2",
              modo: "juris",
              fonte: "Súmula 302 do STJ",
              enunciado: "É considerada ABUSIVA, segundo a Súmula 302 do STJ, a cláusula de plano de saúde que:",
              alternativas: [
                "prevê reajuste por faixa etária",
                "limita no tempo a internação hospitalar do segurado",
                "estabelece carência para partos",
                "exclui doenças preexistentes declaradas",
                "prevê coparticipação do beneficiário"
              ],
              correta: 1,
              explicacao: "Súmula 302 do STJ: é abusiva a cláusula contratual de plano de saúde que limita no TEMPO a internação hospitalar do segurado. A necessidade da internação é definição médica, não do plano."
            },
            {
              id: "ps-3",
              modo: "juris",
              fonte: "Lei 9.656/98; Lei 14.454/2022",
              enunciado: "Quanto ao rol de procedimentos da ANS, após a Lei 14.454/2022, é correto afirmar que:",
              alternativas: [
                "o rol é taxativo, vedada a cobertura de procedimentos não listados, ainda que prescritos pelo médico",
                "o rol é referência básica, admitida a cobertura de procedimento fora dele quando preenchidos critérios legais",
                "o rol foi extinto pela nova lei, cabendo exclusivamente ao médico assistente definir a cobertura",
                "a cobertura fora do rol independe de qualquer requisito ou comprovação de eficácia",
                "o rol só vincula os planos coletivos empresariais e por adesão"
              ],
              correta: 1,
              explicacao: "A Lei 14.454/2022 estabeleceu que o rol da ANS é referência básica (não meramente taxativo em termos absolutos): admite-se a cobertura de tratamento não listado quando houver comprovação de eficácia (à luz das ciências da saúde) ou recomendação por órgão técnico competente, preenchidos os critérios legais."
            },
            {
              id: "ps-4",
              modo: "juris",
              fonte: "Cobertura do TEA (tema do edital)",
              enunciado: "No tratamento do Transtorno do Espectro Autista (TEA) por planos de saúde, o entendimento consolidado é no sentido de:",
              alternativas: [
                "limitar as sessões de terapia ao número mínimo previsto no rol da ANS, salvo contratação ampliada",
                "assegurar a cobertura das terapias prescritas, vedada a limitação do número de sessões",
                "excluir a cobertura de métodos sem previsão contratual expressa, como o ABA",
                "condicionar a cobertura à idade do beneficiário e ao grau de suporte",
                "transferir o custo integral do tratamento ao poder público"
              ],
              correta: 1,
              explicacao: "A ANS afastou o limite de sessões para as terapias de beneficiários com TEA, e a jurisprudência assegura a cobertura das terapias multidisciplinares prescritas pelo médico assistente (ex.: método ABA), sendo abusiva a limitação quantitativa. Tema expressamente citado no edital da DPE-RJ."
            },
            {
              id: "ps-5",
              modo: "juris",
              fonte: "Súmula 597 do STJ",
              enunciado: "Sobre a carência em situações de urgência/emergência, o STJ (Súmula 597) considera abusiva a cláusula que:",
              alternativas: [
                "prevê qualquer prazo de carência, mesmo para procedimentos eletivos",
                "impõe carência superior a 24 horas para urgência e emergência",
                "dispensa totalmente a carência",
                "estabelece carência de 24 meses para doenças preexistentes",
                "limita a carência a 180 dias para partos"
              ],
              correta: 1,
              explicacao: "Súmula 597 do STJ: é abusiva a cláusula que prevê carência para atendimento de URGÊNCIA ou EMERGÊNCIA quando ultrapassado o prazo máximo de 24 horas contado da contratação. Nesses casos, a carência longa não prevalece."
            }
          ]
        }
      ]
    },

    /* ---------------------------------------- DIREITO EMPRESARIAL (Banca I) */
    {
      id: "empresarial",
      titulo: "Direito Empresarial",
      materia: "Direito Empresarial",
      banca: "I",
      icone: "🏢",
      cor: "dourado",
      descricao: "Títulos de crédito (LUG × CC), locação empresarial e falência.",
      licoes: [
        {
          id: "empresarial-1",
          titulo: "Títulos de crédito e locação empresarial",
          questoes: [
            {
              id: "emp-1", modo: "lei", fonte: "LUG, art. 30; CC, art. 897",
              enunciado: "No regime da Lei Uniforme de Genebra (LUG), aplicável às letras de câmbio e notas promissórias, o aval PARCIAL é:",
              alternativas: [
                "vedado em qualquer hipótese",
                "admitido (permite-se o aval parcial)",
                "admitido apenas com autorização judicial",
                "convertido automaticamente em aval total",
                "nulo de pleno direito"
              ],
              correta: 1,
              explicacao: "Distinção clássica: na LUG (art. 30) admite-se o aval parcial. Já no Código Civil (art. 897, parágrafo único) o aval parcial é VEDADO. Como a LUG é norma especial para letra de câmbio e nota promissória, nesses títulos prevalece a possibilidade do aval parcial."
            },
            {
              id: "emp-2", modo: "lei", fonte: "CC, art. 899, §2º",
              enunciado: "Sobre a natureza do aval em relação à obrigação avalizada, é correto afirmar que o aval:",
              alternativas: [
                "é acessório e segue a sorte da obrigação avalizada, inclusive quanto às causas de nulidade",
                "é autônomo: subsiste ainda que nula a obrigação avalizada, salvo se a nulidade decorrer de vício de forma",
                "só é válido se a obrigação principal for válida e exigível ao tempo do vencimento",
                "admite benefício de ordem em favor do avalista, tal como ocorre na fiança",
                "depende de instrumento contratual apartado, com poderes especiais"
              ],
              correta: 1,
              explicacao: "Art. 899, §2º, do CC: subsiste a responsabilidade do avalista ainda que nula a obrigação avalizada, salvo se a nulidade for por vício de forma. É a autonomia do aval — diferente da fiança, que é acessória e admite benefício de ordem."
            },
            {
              id: "emp-3", modo: "lei", fonte: "CC, art. 1.647, III",
              enunciado: "A prestação de aval (ou fiança) por pessoa casada exige a autorização do outro cônjuge (outorga), EXCETO no regime da:",
              alternativas: [
                "comunhão parcial de bens",
                "separação absoluta de bens",
                "comunhão universal de bens",
                "participação final nos aquestos",
                "separação obrigatória de bens"
              ],
              correta: 1,
              explicacao: "Art. 1.647, III, do CC: nenhum cônjuge pode, sem autorização do outro — exceto no regime da separação absoluta —, prestar fiança ou aval. A separação absoluta é a única exceção legal à outorga conjugal."
            },
            {
              id: "emp-4", modo: "lei", fonte: "Lei 8.245/91, art. 51, §5º",
              enunciado: "A ação renovatória do contrato de locação empresarial (Lei 8.245/91) deve ser proposta:",
              alternativas: [
                "a qualquer tempo durante a vigência do contrato, desde que comprovado o ponto empresarial",
                "no interregno de um ano, no máximo, até seis meses, no mínimo, anteriores ao fim do prazo do contrato",
                "somente após o término do prazo contratual, no prazo decadencial de seis meses",
                "até 30 dias antes do fim do contrato, mediante notificação extrajudicial prévia",
                "no máximo até dois anos antes do fim do prazo do contrato em vigor"
              ],
              correta: 1,
              explicacao: "Art. 51, §5º, da Lei 8.245/91: a renovatória deve ser proposta no interregno de um ano, no máximo, até seis meses, no mínimo, anteriores à finalização do prazo do contrato em vigor. É prazo DECADENCIAL — perde-se o direito à renovação se não observado."
            },
            {
              id: "emp-5", modo: "lei", fonte: "Lei 8.245/91, art. 51",
              enunciado: "Entre os requisitos do direito à renovação compulsória (art. 51 da Lei 8.245/91), o contrato a renovar deve ser escrito, por prazo determinado, e o prazo mínimo (somados os contratos sucessivos) deve ser de:",
              alternativas: [
                "3 anos ininterruptos",
                "5 anos ininterruptos",
                "10 anos consecutivos",
                "2 anos ininterruptos",
                "18 meses consecutivos"
              ],
              correta: 1,
              explicacao: "Art. 51 da Lei 8.245/91: exige-se contrato escrito e por prazo determinado, prazo mínimo do contrato (ou soma dos contratos escritos e sucessivos) de 5 anos, e exploração do mesmo ramo pelo prazo mínimo de 3 anos (accessio temporis)."
            },
            {
              id: "emp-6", modo: "lei", fonte: "Lei 11.101/05, arts. 83 e 84",
              enunciado: "Na falência (Lei 11.101/05), qual crédito ocupa o primeiro lugar na ordem de classificação dos créditos CONCURSAIS?",
              alternativas: [
                "os créditos com garantia real, até o limite do valor do bem gravado, qualquer que seja o montante",
                "os créditos trabalhistas (até 150 salários mínimos por credor) e os decorrentes de acidente de trabalho",
                "os créditos tributários, independentemente da natureza e do tempo de constituição",
                "os créditos quirografários de fornecedores essenciais à atividade do falido",
                "as multas contratuais e as penas pecuniárias, dada a sua natureza sancionatória"
              ],
              correta: 1,
              explicacao: "Art. 83 da Lei 11.101/05: entre os concursais, vêm primeiro os créditos trabalhistas (limitados a 150 salários mínimos por credor) e os de acidente de trabalho; depois os com garantia real (até o limite do bem), os tributários e assim por diante. Antes de todos eles, porém, pagam-se os créditos EXTRACONCURSAIS (art. 84)."
            }
          ]
        }
      ]
    },

    /* ---------------------------- INFÂNCIA, JUVENTUDE E IDOSO (Banca I) */
    {
      id: "infancia-idoso",
      titulo: "Infância, Juventude e Idoso",
      materia: "Criança, Adolescente e Idoso",
      banca: "I",
      icone: "🧒",
      cor: "petroleo",
      descricao: "ECA protetivo: conselho tutelar, acolhimento, adoção e pessoa idosa.",
      licoes: [
        {
          id: "infancia-idoso-1",
          titulo: "Proteção integral, conselho tutelar e adoção",
          questoes: [
            {
              id: "inf-1", modo: "lei", fonte: "ECA, art. 4º; CF, art. 227",
              enunciado: "O princípio da prioridade absoluta (art. 4º do ECA e art. 227 da CF) assegura à criança e ao adolescente:",
              alternativas: [
                "atendimento preferencial condicionado à disponibilidade orçamentária e à reserva do possível",
                "primazia em receber proteção e socorro, precedência no atendimento e preferência na formulação de políticas e na destinação de recursos",
                "prioridade restrita às áreas de saúde e educação, núcleo essencial dos direitos sociais",
                "atendimento em igualdade de condições com os demais grupos vulneráveis, sem precedência",
                "prioridade apenas quando já configurada situação de risco reconhecida pelo Conselho Tutelar"
              ],
              correta: 1,
              explicacao: "Art. 4º, parágrafo único, do ECA: a prioridade absoluta compreende a primazia em receber proteção e socorro, a precedência no atendimento nos serviços públicos, a preferência na formulação de políticas sociais e a destinação privilegiada de recursos. Decorre da doutrina da proteção integral (art. 227 da CF)."
            },
            {
              id: "inf-2", modo: "caso", fonte: "ECA, arts. 131 e 136",
              enunciado: "Sobre o Conselho Tutelar, é correto afirmar que:",
              alternativas: [
                "é órgão auxiliar do Poder Judiciário, com função jurisdicional na aplicação de medidas protetivas",
                "é órgão permanente e autônomo, NÃO jurisdicional, encarregado de zelar pelos direitos da criança e do adolescente",
                "pode aplicar, inclusive, a medida socioeducativa de internação em caso de ato infracional grave",
                "tem atribuição para decretar, de ofício, a destituição do poder familiar dos pais negligentes",
                "é composto por membros de livre nomeação e exoneração pelo chefe do Executivo municipal"
              ],
              correta: 1,
              explicacao: "Art. 131 do ECA: o Conselho Tutelar é órgão permanente e autônomo, NÃO jurisdicional. Seus membros são eleitos (art. 139). Medidas como internação e destituição do poder familiar são de competência do Judiciário, não do Conselho — que aplica medidas de proteção e requisita serviços."
            },
            {
              id: "inf-3", modo: "caso", fonte: "ECA, arts. 39, 41 e 45",
              enunciado: "Quanto à adoção no ECA, é correto afirmar que ela:",
              alternativas: [
                "é revogável enquanto o adotado for menor de idade, desde que atendido o seu melhor interesse",
                "é medida excepcional e irrevogável, atribui a condição de filho e desliga o adotado dos vínculos com pais e parentes, salvo os impedimentos matrimoniais",
                "mantém os vínculos com a família biológica para fins sucessórios e alimentares, extinguindo apenas o poder familiar",
                "pode ser realizada por procuração com poderes especiais, se os adotantes residirem no exterior",
                "dispensa o consentimento do adotando maior de 12 anos, suprido pela vontade dos adotantes"
              ],
              correta: 1,
              explicacao: "A adoção é medida excepcional e irrevogável (art. 39, §1º), atribui a condição de filho (art. 41) e rompe os vínculos com pais e parentes, salvo os impedimentos matrimoniais. É vedada por procuração (art. 39, §2º) e exige o consentimento do adolescente maior de 12 anos (art. 45, §2º)."
            },
            {
              id: "inf-4", modo: "caso", fonte: "ECA, art. 101, §1º",
              enunciado: "O acolhimento institucional, como medida de proteção, caracteriza-se por ser:",
              alternativas: [
                "medida definitiva de proteção, prioritária em relação à reintegração à família de origem",
                "medida provisória e excepcional, como transição para a reintegração familiar ou colocação em família substituta",
                "aplicável diretamente pelo Conselho Tutelar, independentemente de controle judicial posterior",
                "cabível por prazo indeterminado, com reavaliação facultativa a critério da equipe técnica",
                "equivalente à perda automática do poder familiar dos genitores"
              ],
              correta: 1,
              explicacao: "Art. 101, §1º, do ECA: o acolhimento institucional é medida PROVISÓRIA e EXCEPCIONAL, usada como forma de transição para a reintegração familiar ou, não sendo possível, colocação em família substituta. A situação deve ser reavaliada no máximo a cada 3 meses (art. 19, §1º), e não implica privação de liberdade."
            },
            {
              id: "inf-5", modo: "lei", fonte: "Lei 10.741/03, art. 1º",
              enunciado: "O Estatuto da Pessoa Idosa (Lei 10.741/03) assegura seus direitos às pessoas com idade igual ou superior a:",
              alternativas: [
                "50 anos",
                "60 anos",
                "65 anos",
                "70 anos",
                "55 anos"
              ],
              correta: 1,
              explicacao: "Art. 1º da Lei 10.741/03: o Estatuto destina-se a regular os direitos das pessoas com idade igual ou superior a 60 anos. (Atenção à pegadinha: a gratuidade no transporte coletivo urbano é assegurada aos maiores de 65 anos — art. 39 do Estatuto e art. 230, §2º, da CF.)"
            },
            {
              id: "inf-6", modo: "caso", fonte: "ECA, art. 142, p. ú.; CPC, art. 72, I; LC 80/94, art. 4º, XVI",
              enunciado: "Nas ações da infância e juventude, quando os interesses da criança ou do adolescente colidirem com os de quem os representa (ou faltar representante), atua como curador(a) especial:",
              alternativas: [
                "o Ministério Público",
                "a Defensoria Pública",
                "o próprio juiz da causa",
                "o Conselho Tutelar",
                "um advogado indicado pela família"
              ],
              correta: 1,
              explicacao: "Arts. 142, parágrafo único, do ECA e 72, I, do CPC: dá-se curador especial ao incapaz sempre que seus interesses colidirem com os do representante ou faltar representação. Essa curatela especial é função institucional da Defensoria Pública (art. 4º, XVI, da LC 80/94)."
            }
          ]
        }
      ]
    },

    /* ============================================================
       BANCA II — CRIMINAL (jurisprudência STF/STJ)
       Fonte: apostila "Compilado de Súmulas e Teses Criminais".
       ============================================================ */

    /* ---------------------------------------- 7. PROCESSO PENAL (juris) */
    {
      id: "proc-penal-juris",
      titulo: "Processo Penal — Jurisprudência",
      materia: "Direito Processual Penal",
      banca: "II",
      icone: "🔎",
      cor: "indigo",
      descricao: "Reconhecimento, ANPP, prova digital e Tribunal do Júri (STF/STJ).",
      licoes: [
        {
          id: "proc-penal-juris-1",
          titulo: "Súmulas e teses de Processo Penal",
          questoes: [
            {
              id: "pp-1", modo: "juris", fonte: "STJ, Tema 1258",
              enunciado: "A vítima reconheceu o acusado apenas por uma foto exibida na delegacia, sem que se observasse o procedimento do art. 226 do CPP. Segundo o STJ (Tema 1258), esse reconhecimento:",
              alternativas: [
                "é válido, pois o art. 226 do CPP traz mera recomendação, sujeita à livre valoração judicial",
                "é inválido e não serve de lastro para a condenação nem para a prisão preventiva ou a pronúncia",
                "vale para fundamentar a prisão preventiva e o recebimento da denúncia, mas não a condenação",
                "é válido desde que ratificado em juízo pela mesma vítima, ainda que sem novas provas",
                "só é nulo se a defesa comprovar prejuízo concreto e arguir o vício na primeira oportunidade"
              ],
              correta: 1,
              explicacao: "Tema 1258 do STJ: as regras do art. 226 do CPP são de observância obrigatória, no inquérito e em juízo. O reconhecimento fotográfico/pessoal inválido não pode servir de lastro à condenação nem a decisões de menor rigor probatório (prisão preventiva, recebimento da denúncia, pronúncia)."
            },
            {
              id: "pp-2", modo: "juris", fonte: "STJ, Tema 1303 (ANPP)",
              enunciado: "O Ministério Público recusa-se a propor ANPP alegando que o investigado não confessou durante o inquérito. Conforme o STJ (Tema 1303):",
              alternativas: [
                "a confissão no inquérito é requisito prévio indispensável ao ANPP",
                "a confissão não é exigência prévia; pode ser formalizada no momento da assinatura do acordo",
                "o ANPP só é cabível após o recebimento da denúncia",
                "a ausência de confissão torna o ANPP definitivamente incabível",
                "somente o juiz pode suprir a falta de confissão"
              ],
              correta: 1,
              explicacao: "Tema 1303 do STJ: a confissão na fase de inquérito não é exigência do art. 28-A do CPP para o cabimento do ANPP, sendo inválida a recusa baseada em sua ausência. A confissão pode ser formalizada na assinatura do acordo, perante o próprio MP, dado o caráter negocial do instituto."
            },
            {
              id: "pp-3", modo: "juris", fonte: "STJ, Súmula 676",
              enunciado: "Recebido o auto de prisão em flagrante, o juiz, sem qualquer provocação, converte a prisão em preventiva. Segundo a Súmula 676 do STJ:",
              alternativas: [
                "é possível, pois o juiz atua como garante da ordem pública",
                "não é possível: após a Lei 13.964/19, é vedado ao juiz converter de ofício o flagrante em preventiva",
                "é possível apenas em crimes hediondos",
                "é possível desde que ouça o Ministério Público depois",
                "a conversão de ofício substitui a representação da autoridade policial"
              ],
              correta: 1,
              explicacao: "Súmula 676 do STJ: em razão da Lei 13.964/19 (Pacote Anticrime), não é mais possível ao juiz, de ofício, decretar ou converter a prisão em flagrante em preventiva. Exige-se requerimento do MP, do assistente/querelante ou representação da autoridade policial."
            },
            {
              id: "pp-4", modo: "juris", fonte: "STF, Tema 977",
              enunciado: "Preso em flagrante, o suspeito tem o celular apreendido. A autoridade policial acessa as conversas do aparelho sem autorização judicial nem consentimento. Conforme o STF (Tema 977):",
              alternativas: [
                "o acesso é livre, pois o aparelho foi legalmente apreendido",
                "o acesso aos dados exige consentimento livre do titular ou prévia decisão judicial",
                "o acesso independe de autorização em qualquer flagrante",
                "somente os metadados podem ser acessados sem ordem judicial",
                "o consentimento posterior da defesa convalida o acesso"
              ],
              correta: 1,
              explicacao: "Tema 977 do STF: a mera apreensão do celular não autoriza o acesso ao seu conteúdo. Tratando-se de aparelho apreendido (art. 6º do CPP) ou por ocasião do flagrante, o acesso aos dados condiciona-se ao consentimento expresso do titular ou à prévia decisão judicial fundamentada (arts. 7º, III, e 10, §2º, do Marco Civil da Internet)."
            },
            {
              id: "pp-5", modo: "juris", fonte: "STF, Tema 1087 (Júri)",
              enunciado: "No Tribunal do Júri, os jurados absolvem o réu por quesito genérico (tese de clemência constante em ata). O MP apela sustentando decisão manifestamente contrária à prova. Segundo o STF (Tema 1087):",
              alternativas: [
                "não cabe qualquer recurso, pois a absolvição por quesito genérico é soberana, imotivada e insuscetível de revisão",
                "cabe a apelação (art. 593, III, 'd'), mas não haverá novo júri se a tese de clemência acolhida for compatível com a Constituição e os precedentes",
                "o tribunal deve sempre determinar novo júri, pois a soberania dos veredictos não alcança decisão contrária à prova",
                "cabe recurso em sentido estrito, e não apelação, por se tratar de decisão do conselho de sentença",
                "a absolvição por clemência é sempre nula, por ausência de fundamentação"
              ],
              correta: 1,
              explicacao: "Tema 1087 do STF: cabe apelação (art. 593, III, 'd', do CPP) quando a decisão do júri, amparada em quesito genérico, for tida como manifestamente contrária à prova. Contudo, o tribunal não determinará novo júri quando houver, em ata, tese de clemência acolhida pelos jurados que seja compatível com a Constituição, os precedentes vinculantes do STF e as circunstâncias fáticas."
            },
            {
              id: "pp-6", modo: "juris", fonte: "STF, Súmula Vinculante 14",
              enunciado: "O defensor requer acesso aos elementos de prova já documentados em investigação conduzida pela polícia judiciária. Conforme a Súmula Vinculante 14:",
              alternativas: [
                "o acesso pode ser negado enquanto durar a investigação, por força do sigilo do inquérito",
                "é direito do defensor ter acesso amplo aos elementos de prova já documentados que digam respeito à defesa",
                "o acesso depende de prévia autorização do Ministério Público, presidente da investigação",
                "o defensor só tem acesso aos autos após o oferecimento da denúncia",
                "o acesso restringe-se às diligências ainda em andamento, não documentadas"
              ],
              correta: 1,
              explicacao: "Súmula Vinculante 14 do STF: é direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório de órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa. Não alcança diligências em andamento ainda não documentadas."
            }
          ]
        },
        {
          id: "proc-penal-juris-2",
          titulo: "Provas ilícitas, prisões e busca",
          questoes: [
            {
              id: "ppp-1", modo: "juris", fonte: "STF, Tema 998",
              enunciado: "Em visita social a estabelecimento prisional, realiza-se revista íntima vexatória, com desnudamento do visitante. Segundo o STF (Tema 998):",
              alternativas: [
                "a revista é válida como medida de rotina, justificada pela segurança do estabelecimento prisional",
                "a revista íntima vexatória é inadmissível e a prova assim obtida é ilícita, salvo decisão judicial no caso concreto",
                "a revista é lícita se houver mero consentimento verbal do visitante no momento do ingresso",
                "a prova obtida é válida, pois o interesse público de segurança prevalece sobre a intimidade",
                "o desnudamento é permitido para qualquer visitante maior e capaz de consentir"
              ],
              correta: 1,
              explicacao: "Tema 998 do STF: é inadmissível a revista íntima vexatória, com desnudamento ou exames invasivos destinados a humilhar; a prova assim obtida é ilícita. Determinou-se a instalação de scanners corporais e, na impossibilidade, revista motivada, em local adequado, sem exposição humilhante."
            },
            {
              id: "ppp-2", modo: "juris", fonte: "STF, Tema 280",
              enunciado: "A polícia ingressa em domicílio sem mandado, alegando flagrante de tráfico. Conforme o STF (Tema 280), a entrada forçada é lícita apenas quando:",
              alternativas: [
                "houver denúncia anônima específica, dispensada qualquer outra justificativa posterior",
                "amparada em fundadas razões, justificadas a posteriori, que indiquem situação de flagrante dentro da casa",
                "for realizada em período diurno, independentemente da demonstração de motivo",
                "houver autorização verbal de vizinhos ou do síndico do condomínio",
                "o morador não estiver presente no imóvel no momento da diligência"
              ],
              correta: 1,
              explicacao: "Tema 280 do STF: a entrada forçada em domicílio sem mandado, mesmo à noite, só é lícita quando amparada em fundadas razões — justificadas a posteriori — que indiquem flagrante delito no interior da casa, sob pena de responsabilidade do agente e de nulidade das provas."
            },
            {
              id: "ppp-3", modo: "juris", fonte: "STF, Súmula 145",
              enunciado: "Um agente policial induz o suspeito à prática do crime e, ao mesmo tempo, adota providências que tornam impossível sua consumação. Conforme a Súmula 145 do STF:",
              alternativas: [
                "há crime consumado, respondendo o agente normalmente",
                "não há crime, por se tratar de flagrante preparado (crime impossível)",
                "há tentativa punível",
                "o crime é putativo por erro de tipo",
                "o policial responde como coautor"
              ],
              correta: 1,
              explicacao: "Súmula 145 do STF: não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação (flagrante preparado/provocado — crime impossível). Difere do flagrante esperado, em que a polícia apenas aguarda a prática do crime, hipótese válida."
            },
            {
              id: "ppp-4", modo: "juris", fonte: "STF, Tema 661",
              enunciado: "Sobre as sucessivas renovações de interceptação telefônica, o STF (Tema 661) firmou que:",
              alternativas: [
                "são vedadas após a primeira prorrogação, dado o prazo máximo legal de 30 dias",
                "são lícitas, desde que verificados os requisitos legais e a decisão e as prorrogações sejam devidamente motivadas",
                "dispensam nova decisão judicial a partir da segunda renovação, bastando o requerimento policial",
                "só valem por 15 dias improrrogáveis, contados da efetivação da medida",
                "independem de demonstração de necessidade quando se tratar de crime hediondo"
              ],
              correta: 1,
              explicacao: "Tema 661 do STF: são lícitas as sucessivas renovações de interceptação telefônica, desde que verificados os requisitos do art. 2º da Lei 9.296/96 e demonstrada a necessidade da medida, com a decisão inicial e as prorrogações devidamente motivadas, ainda que de forma sucinta."
            }
          ]
        }
      ]
    },

    /* ---------------------------------------- 8. EXECUÇÃO PENAL (juris) */
    {
      id: "exec-penal-juris",
      titulo: "Execução Penal — Jurisprudência",
      materia: "Direito de Execução Penal",
      banca: "II",
      icone: "⛓️",
      cor: "petroleo",
      descricao: "Falta grave, progressão, remição e falta de vagas (LEP, STF/STJ).",
      licoes: [
        {
          id: "exec-penal-juris-1",
          titulo: "Súmulas e teses de Execução Penal",
          questoes: [
            {
              id: "ep-1", modo: "juris", fonte: "STF, Tema 423 e SV 58",
              enunciado: "O apenado obtém progressão ao regime semiaberto, mas não há vaga em estabelecimento adequado. Conforme o STF (Tema 423 e Súmula Vinculante 58):",
              alternativas: [
                "deve permanecer no regime fechado até surgir vaga em estabelecimento adequado",
                "a falta de estabelecimento penal adequado não autoriza mantê-lo em regime mais gravoso",
                "a progressão fica suspensa até a comprovação de vaga, sem direito a medidas alternativas",
                "cabe apenas indenização pelos danos, mantido o cumprimento no regime mais gravoso",
                "deve ser transferido para estabelecimento penal federal de segurança máxima"
              ],
              correta: 1,
              explicacao: "SV 58 e Tema 423 do STF: a falta de estabelecimento penal adequado não autoriza a manutenção do condenado em regime mais gravoso. Havendo déficit de vagas, admitem-se medidas como saída antecipada, monitoração eletrônica ou prisão domiciliar."
            },
            {
              id: "ep-2", modo: "juris", fonte: "STJ, Súmulas 534, 535 e 441",
              enunciado: "O apenado comete falta grave. Sobre os efeitos no cálculo dos benefícios, é correto afirmar que a falta grave:",
              alternativas: [
                "interrompe o prazo para o livramento condicional",
                "interrompe o prazo para a progressão de regime, reiniciando a contagem",
                "interrompe o prazo para comutação de pena e indulto",
                "não produz qualquer efeito sobre os prazos",
                "acarreta automaticamente a regressão ao regime fechado, sem procedimento"
              ],
              correta: 1,
              explicacao: "Súmula 534 do STJ: a falta grave interrompe o prazo para a progressão de regime, reiniciando-se do cometimento. Em contrapartida, NÃO interrompe o prazo do livramento condicional (Súmula 441) nem o de comutação de pena ou indulto (Súmula 535)."
            },
            {
              id: "ep-3", modo: "juris", fonte: "STJ, Tema 1357",
              enunciado: "O condenado é aprovado no ENEM (ou ENCCEJA), com certificação de conclusão do ensino médio. Segundo o STJ (Tema 1357):",
              alternativas: [
                "não há remição, pois a lei exige a frequência efetiva a curso de ensino formal",
                "é cabível a remição da pena, pois a aprovação configura esforço educacional apto a remir",
                "a remição depende de atividade laborativa concomitante ao estudo autônomo",
                "a remição por estudo só é cabível nos regimes aberto e de livramento condicional",
                "a remição é vedada aos reincidentes e aos condenados por crime hediondo"
              ],
              correta: 1,
              explicacao: "Tema 1357 do STJ: é cabível a remição da pena pela aprovação no ENEM ou no ENCCEJA com certificação do ensino médio, pois configura esforço educacional autônomo apto a justificar a remição, independentemente de frequência formal a curso."
            },
            {
              id: "ep-4", modo: "juris", fonte: "STF, Tema 941",
              enunciado: "A prática de falta grave é apurada em audiência de justificação, na presença do defensor e do Ministério Público. Conforme o STF (Tema 941):",
              alternativas: [
                "ainda assim é indispensável o prévio PAD instaurado pelo diretor do estabelecimento prisional",
                "a oitiva em audiência de justificação afasta a necessidade de prévio PAD e supre eventual deficiência de defesa técnica",
                "a audiência não substitui o PAD, sob pena de nulidade do reconhecimento da falta",
                "o PAD só é dispensável se o apenado confessar a falta na presença do defensor",
                "a competência para apurar é exclusiva da autoridade administrativa penitenciária"
              ],
              correta: 1,
              explicacao: "Tema 941 do STF: a oitiva do condenado pelo Juízo da Execução, em audiência de justificação com defensor e MP, afasta a necessidade de prévio Procedimento Administrativo Disciplinar (PAD) e supre eventual ausência ou insuficiência de defesa técnica no PAD."
            },
            {
              id: "ep-5", modo: "juris", fonte: "STJ, Tema 1169",
              enunciado: "Condenado por crime hediondo sem resultado morte, reincidente não específico, requer progressão de regime. Conforme o STJ (Tema 1169), aplica-se o percentual de:",
              alternativas: [
                "60% (inciso VII do art. 112 da LEP)",
                "40% (inciso V), por analogia in bonam partem",
                "50% (inciso VI do art. 112 da LEP)",
                "70% (inciso VIII do art. 112 da LEP)",
                "16% (inciso I do art. 112 da LEP)"
              ],
              correta: 1,
              explicacao: "Tema 1169 do STJ: a Lei 13.964/19 não previu percentual para o reincidente NÃO específico em crime hediondo sem morte. Diante da omissão e da legalidade penal, impõe-se a analogia in bonam partem, aplicando-se (inclusive retroativamente) o inciso V do art. 112 da LEP — lapso de 40%."
            },
            {
              id: "ep-6", modo: "juris", fonte: "STJ, Súmula 533",
              enunciado: "Para reconhecer a prática de falta disciplinar na execução penal, a Súmula 533 do STJ exige:",
              alternativas: [
                "apenas a comunicação formal da falta ao apenado, com registro no prontuário",
                "instauração de procedimento administrativo pelo diretor, com defesa por advogado ou defensor",
                "sentença penal condenatória transitada em julgado, quando a falta constituir crime",
                "decisão fundamentada do juízo da execução, dispensada a defesa técnica",
                "mera anotação da ocorrência no prontuário disciplinar do preso"
              ],
              correta: 1,
              explicacao: "Súmula 533 do STJ: para o reconhecimento de falta disciplinar é imprescindível a instauração de procedimento administrativo pelo diretor do estabelecimento, assegurado o direito de defesa, a ser exercido por advogado constituído ou defensor público nomeado."
            }
          ]
        },
        {
          id: "exec-penal-juris-2",
          titulo: "Atualizações 2025-2026",
          questoes: [
            {
              id: "epp-1", modo: "juris", fonte: "STJ; Lei 14.843/24",
              enunciado: "A Lei 14.843/24 passou a exigir o exame criminológico obrigatório para a progressão de regime. Segundo o STJ, essa alteração:",
              alternativas: [
                "aplica-se retroativamente a todos os apenados",
                "é novatio legis in pejus e não retroage para atingir fatos praticados sob a lei anterior",
                "tem natureza meramente procedimental, de aplicação imediata a todos",
                "revogou a Súmula Vinculante 26 do STF",
                "dispensa qualquer motivação judicial"
              ],
              correta: 1,
              explicacao: "STJ (Inf. Ed. Extraordinária 24/25): a exigência de exame criminológico obrigatório (Lei 14.843/24, art. 112, §1º, da LEP) tem natureza penal e configura novatio legis in pejus; não retroage para atingir fatos anteriores (art. 5º, XL, da CF; art. 2º do CP). A ANADEP questiona a lei na ADI 7663."
            },
            {
              id: "epp-2", modo: "juris", fonte: "STJ; LEP arts. 50, VI e 39, V",
              enunciado: "O apenado rompe a tornozeleira eletrônica de monitoração. Conforme a jurisprudência do STJ:",
              alternativas: [
                "não há consequência disciplinar, por ausência de previsão legal expressa",
                "configura falta grave (arts. 50, VI, e 39, V, da LEP), sujeitando-o inclusive à regressão",
                "acarreta automaticamente a regressão definitiva de regime, dispensada a oitiva do apenado",
                "é mera irregularidade administrativa, sanável com a reposição do equipamento",
                "gera apenas advertência escrita, sem repercussão nos benefícios da execução"
              ],
              correta: 1,
              explicacao: "O STJ entende que o rompimento da tornozeleira, o descarregamento da bateria e a inobservância do perímetro configuram falta grave (arts. 50, VI, e 39, V, da LEP). A Lei 14.843/24 ampliou as hipóteses de monitoração e as consequências facultativas da violação, a critério do juízo da execução."
            },
            {
              id: "epp-3", modo: "juris", fonte: "STJ, Inf. 872/25; STF, HC 183.610",
              enunciado: "Apenada mãe de criança pequena, condenada por associação para o tráfico, requer a progressão especial de regime (1/8 da pena, art. 112, §3º, da LEP). Conforme o STJ, a vedação de 'não ter integrado organização criminosa':",
              alternativas: [
                "abrange também a associação para o tráfico e a associação criminosa, por serem crimes de concurso necessário",
                "restringe-se à organização criminosa da Lei 12.850/13, não alcançando a associação para o tráfico, sob pena de analogia in malam partem",
                "impede o benefício a qualquer condenada por tráfico, dada a gravidade abstrata do delito",
                "só se aplica aos apenados do sexo masculino, por interpretação sistemática",
                "foi revogada tacitamente pela Lei 13.769/18, que instituiu a progressão especial"
              ],
              correta: 1,
              explicacao: "STJ (Inf. 872/25) e STF (HC 183.610): a vedação do art. 112, §3º, V, da LEP restringe-se à condenação por organização criminosa (Lei 12.850/13), não alcançando a associação criminosa (art. 288 do CP) nem a associação para o tráfico (art. 35 da Lei 11.343/06), sob pena de analogia in malam partem."
            },
            {
              id: "epp-4", modo: "juris", fonte: "STJ, Inf. 872/25",
              enunciado: "O apenado foi preso preventivamente, solto em liberdade provisória e, depois, preso para cumprir a pena definitiva. Conforme o entendimento majoritário do STJ, a data-base para benefícios da execução é:",
              alternativas: [
                "a data da primeira prisão preventiva, ainda que seguida de liberdade provisória, computado todo o intervalo",
                "a data da última prisão (para cumprimento da pena), computando-se o período cautelar apenas para detração",
                "a data do trânsito em julgado da condenação para ambas as partes, marco da pretensão executória",
                "a data do fato criminoso, por aplicação da lei penal mais benéfica",
                "a data do oferecimento da denúncia pelo Ministério Público"
              ],
              correta: 1,
              explicacao: "STJ (Inf. 872/25): a data-base para concessão de benefícios na execução é a da última prisão efetiva, quando houve liberdade provisória entre a prisão cautelar e o cumprimento definitivo. O período cautelar conta apenas para detração. (Há tese contrária da Defensoria, mais benéfica, que adota a prisão cautelar como marco.)"
            }
          ]
        }
      ]
    },

    /* ---------------------------------------- 9. PENAL E LEIS ESPECIAIS */
    {
      id: "penal-juris",
      titulo: "Penal e Leis Especiais",
      materia: "Direito Penal",
      banca: "II",
      icone: "🚨",
      cor: "vermelho",
      descricao: "Tráfico privilegiado, Maria da Penha e crimes sexuais (STF/STJ).",
      licoes: [
        {
          id: "penal-juris-1",
          titulo: "Súmulas e teses de Penal e leis especiais",
          questoes: [
            {
              id: "pe-1", modo: "juris", fonte: "STF, Súmula Vinculante 63",
              enunciado: "O réu é condenado por tráfico privilegiado (art. 33, §4º, da Lei 11.343/06). Conforme a Súmula Vinculante 63 do STF:",
              alternativas: [
                "o crime é hediondo, sujeitando-se aos lapsos mais rigorosos de progressão de regime",
                "o tráfico privilegiado não é hediondo, afastando os parâmetros mais rigorosos de progressão e livramento",
                "o crime é hediondo apenas para fins de livramento condicional e indulto",
                "a natureza hedionda depende da quantidade e da natureza da droga apreendida",
                "o benefício exige o trânsito em julgado da condenação para ser reconhecido"
              ],
              correta: 1,
              explicacao: "Súmula Vinculante 63 do STF: o tráfico privilegiado (art. 33, §4º, da Lei 11.343/06) não configura crime hediondo, afastando-se os parâmetros mais rigorosos de progressão de regime e de livramento condicional."
            },
            {
              id: "pe-2", modo: "juris", fonte: "STJ, Súmulas 589 e 600",
              enunciado: "Em crime praticado contra a mulher no âmbito das relações domésticas, a defesa invoca o princípio da insignificância. Conforme a Súmula 589 do STJ:",
              alternativas: [
                "aplica-se a insignificância se o dano patrimonial for de pequeno valor e a vítima não desejar a persecução",
                "é inaplicável o princípio da insignificância a crimes ou contravenções contra a mulher no âmbito doméstico",
                "a insignificância depende de perícia que ateste a inexpressividade do prejuízo causado",
                "aplica-se quando houver reconciliação do casal e reparação integral do dano antes da denúncia",
                "aplica-se se a vítima deixar de oferecer representação no prazo legal"
              ],
              correta: 1,
              explicacao: "Súmula 589 do STJ: é inaplicável o princípio da insignificância aos crimes ou contravenções praticados contra a mulher no âmbito das relações domésticas. Lembre ainda a Súmula 600: a violência doméstica não exige coabitação entre autor e vítima."
            },
            {
              id: "pe-3", modo: "juris", fonte: "STJ, Súmula 542; STF, Tema 713",
              enunciado: "Nos crimes de lesão corporal praticados contra a mulher no âmbito doméstico e familiar, a ação penal é:",
              alternativas: [
                "pública condicionada à representação da vítima",
                "pública incondicionada",
                "privada, mediante queixa",
                "pública condicionada à requisição do Ministro da Justiça",
                "condicionada à audiência do art. 16 da Lei Maria da Penha"
              ],
              correta: 1,
              explicacao: "Súmula 542 do STJ e Tema 713 do STF: a ação penal relativa à lesão corporal resultante de violência doméstica contra a mulher é pública INCONDICIONADA — independe de representação da ofendida."
            },
            {
              id: "pe-4", modo: "juris", fonte: "STJ, Tema 1249",
              enunciado: "Sobre as medidas protetivas de urgência (MPUs) da Lei Maria da Penha, o STJ (Tema 1249) fixou que elas:",
              alternativas: [
                "só valem enquanto tramitar inquérito ou ação penal, extinguindo-se automaticamente com o arquivamento",
                "têm natureza de tutela inibitória, não se subordinam a inquérito/processo e vigoram por prazo indeterminado enquanto persistir o risco",
                "caducam automaticamente em seis meses, salvo prorrogação expressa pelo juízo competente",
                "extinguem-se necessariamente com a absolvição do acusado ou o arquivamento do inquérito",
                "dependem sempre de boletim de ocorrência prévio e de revisão judicial obrigatória a cada seis meses"
              ],
              correta: 1,
              explicacao: "Tema 1249 do STJ: as MPUs têm natureza de tutela inibitória; sua vigência não se subordina à existência (atual ou futura) de BO, inquérito ou processo, e devem ser fixadas por prazo indeterminado, vinculadas à persistência da situação de risco. A absolvição ou o arquivamento não acarreta, por si, sua extinção."
            },
            {
              id: "pe-5", modo: "juris", fonte: "STJ, Súmula 588",
              enunciado: "Praticado crime com violência ou grave ameaça contra a mulher no ambiente doméstico, quanto à pena, a Súmula 588 do STJ estabelece que:",
              alternativas: [
                "cabe substituição por pena restritiva de direitos, se o réu for primário",
                "é impossível substituir a pena privativa de liberdade por restritiva de direitos",
                "a substituição depende da concordância da vítima",
                "cabe substituição apenas por prestação pecuniária",
                "a pena deve ser sempre convertida em multa"
              ],
              correta: 1,
              explicacao: "Súmula 588 do STJ: a prática de crime ou contravenção contra a mulher com violência ou grave ameaça no ambiente doméstico impossibilita a substituição da pena privativa de liberdade por restritiva de direitos."
            },
            {
              id: "pe-6", modo: "juris", fonte: "STJ, Súmula 593",
              enunciado: "Quanto ao estupro de vulnerável (vítima menor de 14 anos), a Súmula 593 do STJ afirma que o crime se configura:",
              alternativas: [
                "somente se comprovada violência real ou grave ameaça, aferidas conforme as circunstâncias concretas do caso",
                "com a conjunção carnal ou ato libidinoso com menor de 14 anos, sendo irrelevantes o consentimento e a experiência anterior da vítima",
                "apenas se a vítima não tiver experiência sexual anterior nem discernimento para consentir",
                "salvo se comprovado relacionamento amoroso entre vítima e agente, que afasta a vulnerabilidade",
                "somente mediante representação da vítima ou de seu representante legal"
              ],
              correta: 1,
              explicacao: "Súmula 593 do STJ: o estupro de vulnerável configura-se com a conjunção carnal ou prática de ato libidinoso com menor de 14 anos, sendo irrelevante eventual consentimento da vítima, sua experiência sexual anterior ou a existência de relacionamento amoroso com o agente."
            }
          ]
        },
        {
          id: "penal-juris-2",
          titulo: "Atualizações 2025-2026",
          questoes: [
            {
              id: "pep-1", modo: "juris", fonte: "STJ, Inf. 860/25; CP art. 30",
              enunciado: "'A' contrata 'B', mediante paga, para matar 'C'. Sobre a qualificadora da paga ou promessa de recompensa (art. 121, §2º, I, do CP), o STJ entende que ela:",
              alternativas: [
                "comunica-se automaticamente ao mandante, por integrar a descrição típica do homicídio mercenário",
                "não se comunica automaticamente ao mandante, por ser circunstância de caráter pessoal/subjetiva (art. 30 do CP)",
                "aplica-se apenas ao mandante, nunca ao executor que recebeu o pagamento",
                "é elementar do crime e, por isso, comunica-se sempre a todos os concorrentes",
                "torna o crime de competência do juiz singular, afastando o Tribunal do Júri"
              ],
              correta: 1,
              explicacao: "STJ (Inf. 860/25): a qualificadora da paga ou promessa de recompensa não é elementar do homicídio, mas circunstância de caráter subjetivo. Por força do art. 30 do CP, não se comunica automaticamente ao mandante — só incide sobre ele se comprovado motivo pessoal torpe próprio."
            },
            {
              id: "pep-2", modo: "juris", fonte: "STJ, Inf. 887/26; CPP art. 207",
              enunciado: "Uma médica comunica à polícia que sua paciente teria provocado o próprio aborto, dando origem à ação penal. Conforme o STJ:",
              alternativas: [
                "a prova é lícita, pois o médico tem o dever legal de comunicar crimes de que tenha conhecimento",
                "a prova é ilícita por violação do sigilo profissional (art. 207 do CPP), contaminando as provas derivadas",
                "a prova é válida se houver posterior confirmação por perícia independente",
                "o sigilo médico não se aplica aos crimes contra a vida, por ponderação de interesses",
                "cabe apenas nulidade relativa, dependente da comprovação de prejuízo concreto"
              ],
              correta: 1,
              explicacao: "STJ (Inf. 887/26 e Ed. Extraordinária 24/25): a comunicação de fatos protegidos pelo sigilo médico — notadamente em casos de aborto — é prova ilícita (art. 207 do CPP; art. 5º, LVI, da CF) e contamina por derivação as provas subsequentes (teoria dos frutos da árvore envenenada), levando ao trancamento/impronúncia."
            },
            {
              id: "pep-3", modo: "juris", fonte: "STJ, Inf. Ed. Extraordinária 30/26",
              enunciado: "A qualificadora do homicídio pelo emprego de arma de fogo de uso restrito ou proibido (art. 121, §2º, VIII, do CP) aplica-se ao uso de arma de uso PERMITIDO com a numeração raspada? Conforme o STJ:",
              alternativas: [
                "sim, pois a equiparação prevista no Estatuto do Desarmamento estende-se a todos os efeitos penais",
                "não; a equiparação do Estatuto do Desarmamento vale só para punir posse/porte, não para qualificar o homicídio",
                "sim, por interpretação teleológica voltada à maior proteção do bem jurídico vida",
                "somente se a arma, além da numeração suprimida, for de calibre de uso restrito",
                "sim, pois a numeração suprimida agrava qualquer crime praticado com a arma"
              ],
              correta: 1,
              explicacao: "STJ (Inf. Ed. Extraordinária 30/26): a qualificadora do art. 121, §2º, VIII, é taxativa. A equiparação da arma de uso permitido com numeração suprimida a arma de uso restrito (art. 16, §1º, I, da Lei 10.826/03) é ficção jurídica para punir posse/porte, não se estendendo ao CP para qualificar o homicídio, sob pena de analogia in malam partem."
            },
            {
              id: "pep-4", modo: "juris", fonte: "Lei 15.384/26 (vicaricídio)",
              enunciado: "A Lei 15.384/26 acrescentou a 'violência vicária' à Lei Maria da Penha e criou o crime autônomo de vicaricídio (art. 121-B do CP). Esse novo tipo consiste, em síntese, em:",
              alternativas: [
                "causar dano emocional à mulher mediante uso de inteligência artificial ou recurso tecnológico que altere a sua imagem ou a sua voz, no contexto doméstico",
                "matar descendente, ascendente, dependente ou pessoa sob responsabilidade da mulher, com o fim de causar-lhe sofrimento, punição ou controle, em contexto de violência doméstica",
                "descumprir reiteradamente medidas protetivas de urgência impostas em favor da mulher, causando-lhe sofrimento",
                "abandonar descendente ou dependente da mulher, expondo-o a perigo concreto, com o fim de atingi-la",
                "constranger a mulher a comparecer a audiência mediante grave ameaça"
              ],
              correta: 1,
              explicacao: "Lei 15.384/26: inseriu a violência vicária no art. 7º da Lei Maria da Penha e criou o vicaricídio (art. 121-B do CP) — matar descendente, ascendente, dependente, enteado ou pessoa sob responsabilidade da mulher com o fim específico de causar-lhe sofrimento, punição ou controle, no contexto de violência doméstica. É crime hediondo e de competência do júri; por especialidade, prevalece sobre o homicídio."
            }
          ]
        }
      ]
    },

    /* ---------------------------------------- 10. CRIMINOLOGIA */
    {
      id: "criminologia",
      titulo: "Criminologia",
      materia: "Criminologia",
      banca: "II",
      icone: "🧠",
      cor: "roxo",
      descricao: "Escolas, labeling, criminologia crítica e teoria agnóstica da pena.",
      licoes: [
        {
          id: "criminologia-1",
          titulo: "Escolas e criminologia crítica",
          questoes: [
            {
              id: "crim-1", modo: "caso", fonte: "Escolas penais",
              enunciado: "A Escola Positiva (Lombroso, Ferri, Garófalo), em contraste com a Escola Clássica, caracterizou-se por:",
              alternativas: [
                "centrar a análise no delito como ente jurídico e no livre-arbítrio",
                "deslocar o foco para o criminoso, sob viés determinista e com pretensão científica",
                "negar qualquer influência de fatores biológicos ou sociais",
                "defender que a pena tem função exclusivamente retributiva",
                "rejeitar o estudo empírico do fenômeno criminal"
              ],
              correta: 1,
              explicacao: "A Escola Clássica (Beccaria, Carrara) via o crime como ente jurídico e partia do livre-arbítrio, com pena retributiva. A Escola Positiva deslocou o foco para o criminoso, sob perspectiva determinista e método empírico (Lombroso/antropológico, Ferri/sociológico, Garófalo/jurídico)."
            },
            {
              id: "crim-2", modo: "caso", fonte: "Labeling approach",
              enunciado: "Segundo a teoria do etiquetamento (labeling approach), o que define a criminalidade não é apenas a conduta em si, mas:",
              alternativas: [
                "a predisposição biológica e psicológica do agente, identificável por características individuais",
                "a reação social e o processo de rotulação que seleciona e estigmatiza certos indivíduos como criminosos",
                "a gravidade objetiva do resultado produzido e o desvalor imanente da própria conduta",
                "a intensidade do dolo e o grau de culpabilidade revelados pelo agente",
                "o grau de aparelhamento dos órgãos oficiais de repressão ao crime"
              ],
              correta: 1,
              explicacao: "O labeling approach (interacionismo simbólico; Becker, Lemert) desloca a análise para a reação social: o desvio resulta do processo de rotulação. A 'desviação secundária' surge quando o indivíduo assume o papel imposto pela etiqueta. Dialoga com a crítica à seletividade penal."
            },
            {
              id: "crim-3", modo: "caso", fonte: "Criminologia crítica",
              enunciado: "A criminologia crítica sustenta, quanto ao sistema penal, que ele:",
              alternativas: [
                "atua de forma igualitária sobre todas as classes sociais, conforme o merecimento individual",
                "é estruturalmente seletivo, recaindo preferencialmente sobre os grupos vulneráveis",
                "elimina progressivamente a cifra oculta por meio do aumento do aparato repressivo",
                "é neutro e meramente técnico na seleção das condutas criminalizadas",
                "reduz a criminalidade pela severidade e pela certeza das penas"
              ],
              correta: 1,
              explicacao: "A criminologia crítica denuncia a seletividade estrutural do sistema penal, que criminaliza preferencialmente condutas e pessoas dos estratos vulneráveis (criminalização secundária), reproduzindo desigualdades. É a matriz teórica afinada à atuação da Defensoria Pública."
            },
            {
              id: "crim-4", modo: "caso", fonte: "Cifra oculta",
              enunciado: "A expressão 'cifra oculta' (ou cifra negra) da criminalidade designa:",
              alternativas: [
                "o número de condenações transitadas em julgado registradas anualmente nas estatísticas oficiais",
                "a diferença entre a criminalidade real e a que chega ao conhecimento oficial dos órgãos de persecução",
                "o total de presos provisórios sem condenação definitiva no sistema penitenciário",
                "o índice de reincidência dos egressos do sistema prisional em cinco anos",
                "os crimes cuja punibilidade foi extinta pela prescrição antes da denúncia"
              ],
              correta: 1,
              explicacao: "A cifra oculta é a parcela da criminalidade real que não chega ao conhecimento (ou registro) oficial dos órgãos de controle, permanecendo invisível às estatísticas — o que revela a seletividade e os limites do sistema de justiça criminal."
            },
            {
              id: "crim-5", modo: "caso", fonte: "Teoria agnóstica da pena",
              enunciado: "A teoria agnóstica (negativa) da pena, afinada à redução de danos na execução penal, sustenta que:",
              alternativas: [
                "a pena cumpre efetivamente as funções declaradas de retribuição e de ressocialização",
                "as funções declaradas da pena não se realizam, cabendo ao juiz conter e reduzir os danos do poder punitivo",
                "a pena deve ser maximizada, para reforçar a prevenção geral negativa (intimidação)",
                "a execução penal deve priorizar a neutralização seletiva dos condenados perigosos",
                "o cárcere é instrumento eficaz de reinserção social do condenado"
              ],
              correta: 1,
              explicacao: "A teoria agnóstica da pena (Zaffaroni) parte do ceticismo quanto às funções declaradas (retribuição/prevenção) e propõe uma pauta de contenção e redução de danos do poder punitivo — linha desenvolvida na execução penal por Rodrigo Roig (teoria redutora de danos), examinador da Banca II."
            },
            {
              id: "crim-6", modo: "caso", fonte: "Funções da pena",
              enunciado: "No debate sobre as funções da pena, a chamada prevenção especial NEGATIVA corresponde à ideia de:",
              alternativas: [
                "reeducar e reinserir socialmente o condenado por meio da execução da pena",
                "neutralizar/inocuizar o condenado, retirando-o do convívio para impedir novos crimes",
                "intimidar a coletividade pela ameaça abstrata da cominação penal",
                "reafirmar simbolicamente a validade da norma violada perante a sociedade",
                "compensar retributivamente o mal do crime com o mal da pena"
              ],
              correta: 1,
              explicacao: "A prevenção especial desdobra-se em positiva (ressocialização) e negativa (neutralização/inocuização do condenado). A criminologia crítica denuncia que, na prática, prevalece a neutralização seletiva, esvaziando o discurso ressocializador."
            }
          ]
        }
      ]
    },

    /* ============================================================
       BANCA III — PÚBLICO
       Fonte: Conteúdo Programático + análise da Banca 3 + legislação
       (CF, LC 80/94, Lei 8.987/95, Lei 14.026/20, Convenção Americana).
       ============================================================ */

    /* ---------------------------------------- 11. DIREITO CONSTITUCIONAL */
    {
      id: "constitucional",
      titulo: "Direito Constitucional",
      materia: "Direito Constitucional",
      banca: "III",
      icone: "📜",
      cor: "azul",
      descricao: "Direitos fundamentais, controle de constitucionalidade e saúde.",
      licoes: [
        {
          id: "constitucional-1",
          titulo: "Direitos fundamentais e controle",
          questoes: [
            {
              id: "const-1", modo: "lei", fonte: "CF, art. 5º, LXXIV",
              enunciado: "A Constituição assegura a assistência jurídica integral e gratuita. Segundo o art. 5º, LXXIV, o Estado a prestará:",
              alternativas: [
                "a todos os cidadãos, indistintamente",
                "aos que comprovarem insuficiência de recursos",
                "apenas em causas criminais",
                "somente mediante requisição judicial",
                "exclusivamente às pessoas jurídicas sem fins lucrativos"
              ],
              correta: 1,
              explicacao: "Art. 5º, LXXIV, da CF: o Estado prestará assistência jurídica integral e gratuita aos que comprovarem insuficiência de recursos. É o fundamento constitucional da Defensoria Pública."
            },
            {
              id: "const-2", modo: "lei", fonte: "CF, art. 102, §2º; Lei 9.868/99",
              enunciado: "A decisão de mérito proferida em Ação Direta de Inconstitucionalidade (ADI), em regra, produz efeitos:",
              alternativas: [
                "apenas entre as partes (inter partes) e ex nunc",
                "erga omnes, vinculantes e, em regra, ex tunc (retroativos)",
                "erga omnes, mas sem efeito vinculante",
                "somente para o futuro, jamais retroativos",
                "restritos ao órgão que editou a norma"
              ],
              correta: 1,
              explicacao: "A decisão de mérito em ADI/ADC tem eficácia contra todos (erga omnes) e efeito vinculante em relação ao Judiciário e à Administração (art. 102, §2º, CF). Em regra opera ex tunc, podendo o STF modular os efeitos (art. 27 da Lei 9.868/99)."
            },
            {
              id: "const-3", modo: "juris", fonte: "STF, Tema 793 (RE 855.178)",
              enunciado: "Em ação para fornecimento de medicamento pelo SUS, quanto à legitimidade passiva dos entes federativos, o STF (Tema 793) fixou que:",
              alternativas: [
                "somente a União é responsável",
                "os entes federativos (União, Estados e Municípios) são solidariamente responsáveis",
                "apenas o Município do domicílio do paciente responde",
                "a responsabilidade é subsidiária do Estado",
                "a demanda exige litisconsórcio passivo necessário dos três entes"
              ],
              correta: 1,
              explicacao: "Tema 793 do STF: em razão da competência comum (art. 23, II, CF), os entes federativos são solidariamente responsáveis nas demandas de saúde; o autor pode acionar qualquer um deles, cabendo ao juiz direcionar o cumprimento e o ressarcimento conforme a repartição de competências do SUS."
            },
            {
              id: "const-4", modo: "lei", fonte: "CF, art. 5º, LXIX",
              enunciado: "Qual remédio constitucional protege direito líquido e certo, não amparado por habeas corpus ou habeas data, lesado por ato ilegal de autoridade pública?",
              alternativas: [
                "habeas corpus",
                "mandado de segurança",
                "ação popular",
                "mandado de injunção",
                "habeas data"
              ],
              correta: 1,
              explicacao: "Art. 5º, LXIX, da CF: conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, contra ilegalidade ou abuso de poder de autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público."
            },
            {
              id: "const-5", modo: "lei", fonte: "CF, art. 6º",
              enunciado: "São direitos sociais expressamente previstos no art. 6º da Constituição:",
              alternativas: [
                "a propriedade privada e a livre iniciativa econômica",
                "a educação, a saúde, a moradia e a assistência aos desamparados",
                "o voto direto e secreto e a nacionalidade",
                "a ampla defesa, o contraditório e o devido processo legal",
                "a liberdade de expressão e o direito de reunião pacífica"
              ],
              correta: 1,
              explicacao: "Art. 6º da CF: são direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância e a assistência aos desamparados."
            },
            {
              id: "const-6", modo: "juris", fonte: "CF, art. 97; Súmula Vinculante 10",
              enunciado: "Pela cláusula de reserva de plenário (art. 97 da CF) e a Súmula Vinculante 10, um órgão fracionário de tribunal:",
              alternativas: [
                "pode declarar a inconstitucionalidade de lei por maioria simples dos seus integrantes presentes",
                "não pode declarar a inconstitucionalidade de lei, ou afastar sua incidência, sem decisão do plenário ou órgão especial",
                "nunca pode apreciar questões constitucionais, reservadas ao plenário em qualquer hipótese",
                "decide livremente, pois a reserva de plenário foi superada pela sistemática dos precedentes",
                "só observa a reserva de plenário no âmbito do controle concentrado"
              ],
              correta: 1,
              explicacao: "Art. 97 da CF e Súmula Vinculante 10: viola a cláusula de reserva de plenário a decisão de órgão fracionário que afasta a incidência de lei/ato do poder público, ainda que sem declarar expressamente a inconstitucionalidade. A declaração exige maioria absoluta do plenário ou do órgão especial."
            }
          ]
        }
      ]
    },

    /* ---------------------------------------- 12. DIREITO ADMINISTRATIVO */
    {
      id: "administrativo",
      titulo: "Direito Administrativo",
      materia: "Direito Administrativo",
      banca: "III",
      icone: "🏗️",
      cor: "grafite",
      descricao: "Princípios, serviços públicos, concessões e saneamento (letra de lei).",
      licoes: [
        {
          id: "administrativo-1",
          titulo: "Serviços públicos e concessões",
          questoes: [
            {
              id: "adm-1", modo: "lei", fonte: "CF, art. 37, caput",
              enunciado: "O art. 37, caput, da CF submete a Administração Pública aos seguintes princípios expressos:",
              alternativas: [
                "legalidade, moralidade, eficiência, razoabilidade e motivação",
                "legalidade, impessoalidade, moralidade, publicidade e eficiência",
                "supremacia, autotutela, continuidade e proporcionalidade",
                "legalidade, economicidade, transparência e boa-fé",
                "impessoalidade, isonomia, celeridade e segurança jurídica"
              ],
              correta: 1,
              explicacao: "Art. 37, caput, da CF: a Administração obedece aos princípios de Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência ('LIMPE'). A eficiência foi acrescida pela EC 19/98."
            },
            {
              id: "adm-2", modo: "lei", fonte: "Lei 8.987/95, art. 37",
              enunciado: "A retomada do serviço pelo poder concedente, durante o prazo da concessão, por interesse público, mediante lei autorizativa e prévia indenização, denomina-se:",
              alternativas: [
                "caducidade",
                "encampação",
                "reversão",
                "caução",
                "intervenção"
              ],
              correta: 1,
              explicacao: "Art. 37 da Lei 8.987/95: encampação é a retomada do serviço durante o prazo da concessão, por interesse público, mediante lei autorizativa específica e prévia indenização. Difere da caducidade (art. 38), que decorre da inexecução pela concessionária."
            },
            {
              id: "adm-3", modo: "lei", fonte: "Lei 8.987/95, art. 6º, §1º",
              enunciado: "Segundo a Lei 8.987/95, considera-se serviço adequado o que satisfaz as condições de:",
              alternativas: [
                "gratuidade, universalidade e uniformidade absoluta das tarifas em todo o território nacional",
                "regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas",
                "exclusividade da prestação, irreversibilidade dos bens afetados e prioridade do concessionário",
                "garantia de lucratividade máxima ao concessionário, vedada a revisão tarifária pelo poder concedente",
                "discricionariedade tarifária plena, afastado o controle da agência reguladora"
              ],
              correta: 1,
              explicacao: "Art. 6º, §1º, da Lei 8.987/95: serviço adequado é o que satisfaz as condições de regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia na prestação e modicidade das tarifas."
            },
            {
              id: "adm-4", modo: "juris", fonte: "STJ; Lei 8.987/95, art. 6º, §3º",
              enunciado: "Quanto ao corte de serviço público essencial (água/energia) por inadimplemento, o entendimento consolidado do STJ é que:",
              alternativas: [
                "é vedado em qualquer hipótese, por força do princípio da continuidade dos serviços públicos essenciais",
                "é possível para débito atual, precedido de aviso; mas é vedado por débitos pretéritos/consolidados, cobrados por vias ordinárias",
                "é livre, independentemente de aviso prévio, como exercício regular de direito do concessionário",
                "só é possível mediante prévia autorização judicial, ouvido o titular da unidade consumidora",
                "é permitido inclusive por débito de consumo do morador anterior do imóvel"
              ],
              correta: 1,
              explicacao: "O STJ admite o corte por inadimplemento de conta atual, desde que precedido de aviso (art. 6º, §3º, II, da Lei 8.987/95). Contudo, veda o corte fundado em débitos pretéritos/consolidados — que devem ser cobrados pelas vias ordinárias — e por débito de consumo de morador anterior."
            },
            {
              id: "adm-5", modo: "lei", fonte: "Lei 14.026/2020 (marco do saneamento)",
              enunciado: "A Lei 14.026/2020 (novo marco legal do saneamento básico) atribuiu a competência para editar normas de referência do setor a:",
              alternativas: [
                "cada Município, individualmente, como titular do serviço",
                "Agência Nacional de Águas e Saneamento Básico (ANA)",
                "o Ministério das Cidades, por meio de portarias setoriais",
                "as companhias estaduais de saneamento básico conveniadas",
                "o BNDES, na condição de agente financiador do setor"
              ],
              correta: 1,
              explicacao: "A Lei 14.026/2020 ampliou as competências da ANA (Agência Nacional de Águas e Saneamento Básico), atribuindo-lhe a edição de normas de referência para a regulação do saneamento. O marco prioriza a prestação regionalizada e a universalização (metas de 99% de água e 90% de esgoto até 2033)."
            },
            {
              id: "adm-6", modo: "lei", fonte: "Lei 12.305/2010, art. 9º",
              enunciado: "A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) estabelece a seguinte ordem de prioridade na gestão de resíduos:",
              alternativas: [
                "disposição final ambientalmente adequada, reciclagem, reutilização, redução e não geração",
                "não geração, redução, reutilização, reciclagem, tratamento e disposição final ambientalmente adequada",
                "incineração com recuperação energética, reciclagem e disposição em aterro sanitário",
                "reciclagem, redução, reutilização e disposição final, nessa ordem de preferência",
                "coleta seletiva universal e exportação dos rejeitos não recicláveis"
              ],
              correta: 1,
              explicacao: "Art. 9º da Lei 12.305/2010: na gestão de resíduos observa-se a ordem de prioridade — não geração, redução, reutilização, reciclagem, tratamento e disposição final ambientalmente adequada dos rejeitos. Assenta-se na responsabilidade compartilhada pelo ciclo de vida dos produtos e na logística reversa."
            }
          ]
        }
      ]
    },

    /* ---------------------------------------- 13. DIREITOS HUMANOS */
    {
      id: "direitos-humanos",
      titulo: "Direitos Humanos",
      materia: "Direitos Humanos",
      banca: "III",
      icone: "🕊️",
      cor: "verde",
      descricao: "Sistema Interamericano, tratados, convencionalidade e tortura.",
      licoes: [
        {
          id: "direitos-humanos-1",
          titulo: "Sistema internacional de proteção",
          questoes: [
            {
              id: "dh-1", modo: "juris", fonte: "STF, RE 466.343; CF, art. 5º, §3º",
              enunciado: "Segundo o STF, os tratados internacionais de direitos humanos aprovados SEM o rito do art. 5º, §3º, da CF ingressam no ordenamento com status:",
              alternativas: [
                "de lei ordinária, revogável por lei posterior",
                "supralegal (acima da lei, abaixo da Constituição)",
                "de emenda constitucional, em qualquer caso",
                "constitucional, independentemente do rito de aprovação",
                "infralegal, subordinado às leis internas"
              ],
              correta: 1,
              explicacao: "STF (RE 466.343): os tratados de direitos humanos não aprovados pelo rito qualificado têm status supralegal (acima da lei, abaixo da Constituição). Se aprovados pelo rito do art. 5º, §3º (dois turnos, 3/5 em cada Casa), equivalem a emenda constitucional."
            },
            {
              id: "dh-2", modo: "lei", fonte: "Convenção Americana, arts. 61 e 62",
              enunciado: "No sistema interamericano, quem pode submeter um caso contencioso diretamente à Corte Interamericana de Direitos Humanos?",
              alternativas: [
                "qualquer indivíduo vítima da violação, desde que esgotados os recursos internos",
                "apenas a Comissão Interamericana e os Estados-partes que reconheceram a competência da Corte",
                "somente o Estado apontado como violador, em reconhecimento da própria responsabilidade",
                "qualquer organização não governamental legalmente reconhecida em Estado-membro da OEA",
                "a Assembleia Geral da OEA, por deliberação da maioria dos Estados"
              ],
              correta: 1,
              explicacao: "Arts. 61 e 62 da Convenção Americana: somente os Estados-partes e a Comissão Interamericana podem submeter caso à Corte IDH — o indivíduo não tem acesso direto (peticiona à Comissão). A jurisdição contenciosa depende de reconhecimento pelo Estado."
            },
            {
              id: "dh-3", modo: "lei", fonte: "Convenção Americana, art. 46",
              enunciado: "Como regra de admissibilidade de petição perante a Comissão Interamericana, exige-se:",
              alternativas: [
                "o recolhimento prévio de custas perante a Secretaria da Comissão",
                "o prévio esgotamento dos recursos internos, salvo exceções (demora injustificada, falta de devido processo, obstáculo de acesso)",
                "a prévia anuência do Estado denunciado ao processamento da petição individual",
                "decisão judicial transitada em julgado em todas as instâncias internas, inclusive extraordinárias, sem exceção",
                "que a vítima seja nacional do Estado denunciado e resida em seu território na data da petição"
              ],
              correta: 1,
              explicacao: "Art. 46 da Convenção Americana: exige-se o prévio esgotamento dos recursos internos (princípio da subsidiariedade). O art. 46.2 traz exceções: inexistência de devido processo, impedimento de acesso aos recursos ou demora injustificada na decisão."
            },
            {
              id: "dh-4", modo: "juris", fonte: "Corte IDH (caso Almonacid Arellano)",
              enunciado: "O 'controle de convencionalidade' consiste em:",
              alternativas: [
                "verificar a compatibilidade das leis exclusivamente com a Constituição Federal",
                "aferir a compatibilidade das normas internas com os tratados internacionais de direitos humanos",
                "controlar a validade das convenções e dos acordos coletivos de trabalho",
                "submeter os tratados à revisão periódica pelo Poder Legislativo",
                "condicionar a vigência dos tratados à aprovação em referendo popular"
              ],
              correta: 1,
              explicacao: "Controle de convencionalidade é a verificação da compatibilidade das normas internas com os tratados de direitos humanos (parâmetro de convencionalidade). É exercido no plano internacional (Corte IDH) e interno (juízes nacionais), conforme a jurisprudência da Corte IDH (caso Almonacid Arellano vs. Chile)."
            },
            {
              id: "dh-5", modo: "juris", fonte: "Protocolo de Istambul (ONU)",
              enunciado: "O Protocolo de Istambul, referência no enfrentamento à tortura, destina-se a:",
              alternativas: [
                "instituir tribunais internacionais especializados no julgamento do crime de tortura",
                "estabelecer diretrizes para a investigação e a documentação eficazes da tortura e de tratamentos cruéis",
                "autorizar a extradição de acusados de tortura independentemente de tratado bilateral",
                "obrigar os Estados a tipificar o crime de tortura no direito interno, sob pena de sanção",
                "regulamentar as revistas e as visitas íntimas nos estabelecimentos prisionais"
              ],
              correta: 1,
              explicacao: "O Protocolo de Istambul é o Manual para investigação e documentação eficazes da tortura e outros tratamentos cruéis, desumanos ou degradantes (ONU). Orienta a perícia e a documentação de sinais de tortura, conectando-se ao sistema de prevenção (MNPCT)."
            },
            {
              id: "dh-6", modo: "caso", fonte: "Interseccionalidade (K. Crenshaw)",
              enunciado: "No marco dos direitos humanos, a 'interseccionalidade' designa:",
              alternativas: [
                "a soma aritmética de discriminações isoladas, que devem ser analisadas separadamente por cada marcador",
                "a sobreposição de marcadores de opressão (raça, gênero, classe etc.) que se combinam e produzem discriminações específicas",
                "a divisão de competências entre os tribunais nacionais e as cortes internacionais",
                "a intersecção de tratados internacionais que protegem simultaneamente um mesmo grupo vulnerável",
                "a hierarquia entre direitos fundamentais em caso de colisão no caso concreto"
              ],
              correta: 1,
              explicacao: "A interseccionalidade (Kimberlé Crenshaw) analisa como marcadores de opressão — raça, gênero, classe, sexualidade, deficiência — se sobrepõem e se articulam, produzindo formas específicas e agravadas de discriminação, exigindo proteção diferenciada dos grupos vulnerabilizados."
            }
          ]
        }
      ]
    },

    /* ---------------------------------- 14. PRINCÍPIOS INSTITUCIONAIS DA DP */
    {
      id: "defensoria",
      titulo: "Princípios Institucionais da Defensoria",
      materia: "Princípios Institucionais da Defensoria",
      banca: "III",
      icone: "🛡️",
      cor: "dourado",
      descricao: "Art. 134 da CF, LC 80/94, princípios, prerrogativas e funções (letra de lei).",
      licoes: [
        {
          id: "defensoria-1",
          titulo: "Modelo constitucional e LC 80/94",
          questoes: [
            {
              id: "dp-1", modo: "lei", fonte: "CF, art. 134 (EC 80/2014)",
              enunciado: "Segundo o art. 134 da CF (redação da EC 80/2014), a Defensoria Pública é instituição:",
              alternativas: [
                "vinculada ao Poder Judiciário, incumbida do apoio às partes hipossuficientes do processo",
                "permanente, essencial à função jurisdicional do Estado, expressão e instrumento do regime democrático",
                "auxiliar do Ministério Público na defesa da ordem jurídica e dos necessitados",
                "de natureza privada e de interesse público, mantida mediante convênio com o Estado",
                "integrante da advocacia pública, ao lado das procuradorias dos entes federados"
              ],
              correta: 1,
              explicacao: "Art. 134 da CF (EC 80/2014): a Defensoria Pública é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe, como expressão e instrumento do regime democrático, a orientação jurídica, a promoção dos direitos humanos e a defesa dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados."
            },
            {
              id: "dp-2", modo: "lei", fonte: "LC 80/94, art. 3º",
              enunciado: "São princípios institucionais da Defensoria Pública, expressos na LC 80/94:",
              alternativas: [
                "a hierarquia, a subordinação e a disciplina",
                "a unidade, a indivisibilidade e a independência funcional",
                "a legalidade, a eficiência e a publicidade",
                "a autonomia, a soberania e a supremacia",
                "a impessoalidade, a moralidade e a economicidade"
              ],
              correta: 1,
              explicacao: "Art. 3º da LC 80/94: são princípios institucionais da Defensoria Pública a unidade, a indivisibilidade e a independência funcional."
            },
            {
              id: "dp-3", modo: "lei", fonte: "CF, art. 134, §2º (EC 45/2004)",
              enunciado: "A autonomia funcional e administrativa e a iniciativa de proposta orçamentária foram asseguradas às Defensorias Públicas Estaduais por meio da:",
              alternativas: [
                "EC 19/1998",
                "EC 45/2004",
                "EC 80/2014",
                "Lei 8.987/1995",
                "EC 1/1969"
              ],
              correta: 1,
              explicacao: "A EC 45/2004 inseriu o §2º no art. 134 da CF, assegurando às Defensorias Públicas Estaduais autonomia funcional e administrativa e a iniciativa de sua proposta orçamentária. A autonomia da DPU e da DPDF veio depois (EC 74/2013)."
            },
            {
              id: "dp-4", modo: "lei", fonte: "LC 80/94, art. 44, I; CPC art. 186",
              enunciado: "Constitui prerrogativa do membro da Defensoria Pública, prevista na LC 80/94:",
              alternativas: [
                "receber intimação pelo diário oficial, com prazo em dobro apenas na esfera criminal",
                "receber intimação pessoal, com vista dos autos, e dispor de prazo em dobro",
                "atuar em qualquer juízo independentemente de designação do Defensor Público-Geral",
                "recusar-se a prestar assistência jurídica, sem motivação, por razões de foro íntimo",
                "exercer a advocacia privada fora das atribuições institucionais"
              ],
              correta: 1,
              explicacao: "Art. 44, I, da LC 80/94: é prerrogativa do Defensor Público receber intimação pessoal, com vista dos autos, em qualquer processo e grau de jurisdição, contando-se os prazos em dobro (também art. 186 do CPC)."
            },
            {
              id: "dp-5", modo: "lei", fonte: "LC 80/94, art. 4º (LC 132/2009)",
              enunciado: "Entre as funções institucionais da Defensoria Pública (art. 4º da LC 80/94) inclui-se:",
              alternativas: [
                "promover, privativamente, a ação penal pública nos crimes praticados contra pessoas vulneráveis",
                "promover ação civil pública e outras ações coletivas para tutelar interesses difusos, coletivos e individuais homogêneos dos necessitados",
                "julgar, mediante delegação, os conflitos de menor complexidade entre particulares hipossuficientes",
                "exercer o controle externo da atividade policial e a correição dos órgãos do Poder Judiciário",
                "editar atos normativos com força de lei para disciplinar a gratuidade de justiça"
              ],
              correta: 1,
              explicacao: "Art. 4º da LC 80/94 (com a LC 132/2009): é função institucional promover a ação civil pública e todas as espécies de ações capazes de propiciar a adequada tutela dos direitos difusos, coletivos e individuais homogêneos dos necessitados. A atuação como 'custos vulnerabilis' é reconhecida pela jurisprudência do STJ."
            },
            {
              id: "dp-6", modo: "caso", fonte: "CF, art. 5º, LXXIV; assistência jurídica",
              enunciado: "A 'assistência jurídica integral' prestada pela Defensoria é conceito mais amplo que a assistência judiciária porque:",
              alternativas: [
                "restringe-se ao patrocínio de causas perante o Poder Judiciário, com isenção de custas",
                "abrange também a orientação e a consultoria jurídica extrajudicial, além da atuação em juízo",
                "só alcança as causas em que o juiz já tenha deferido a gratuidade de justiça",
                "exclui a educação em direitos, reservada aos órgãos do Poder Executivo",
                "limita-se ao processo penal, em que a defesa técnica é indeclinável"
              ],
              correta: 1,
              explicacao: "A assistência judiciária refere-se ao patrocínio da causa em juízo. A assistência jurídica integral (art. 5º, LXXIV, CF) é mais ampla: abrange a orientação e a consultoria jurídica, a atuação extrajudicial, a educação em direitos e a resolução de conflitos. Já a gratuidade de justiça é a isenção de custas processuais."
            }
          ]
        }
      ]
    }
  ]
};

/* Paleta por unidade (usada no CSS via data-cor) */
window.APP_CORES = ["roxo", "verde", "rosa", "azul", "laranja", "ciano"];
