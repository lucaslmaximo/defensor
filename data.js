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

    /* ---------------------------------- OBRIGAÇÕES E CONTRATOS (CIVIL) */
    {
      id: "obrigacoes-contratos",
      titulo: "Obrigações e Contratos",
      materia: "Direito Civil",
      banca: "I",
      icone: "✍️",
      cor: "verde",
      descricao: "Solidariedade, adimplemento substancial, cláusula penal e locação.",
      licoes: [
        {
          id: "obrigacoes-contratos-1",
          titulo: "Obrigações e contratos: regras e exceções",
          questoes: [
            {
              id: "oc-1", modo: "lei", fonte: "CC, art. 265",
              enunciado: "Sobre a obrigação solidária, o Código Civil dispõe que a solidariedade:",
              alternativas: [
                "presume-se sempre que houver pluralidade de devedores vinculados à mesma obrigação",
                "não se presume: resulta da lei ou da vontade das partes",
                "só pode decorrer de expressa previsão legal, vedada a solidariedade convencional",
                "aplica-se apenas às obrigações indivisíveis, por sua própria natureza",
                "depende de homologação judicial quando estipulada em contrato de adesão"
              ],
              correta: 1,
              explicacao: "Art. 265 do CC: a solidariedade NÃO SE PRESUME — resulta da lei ou da vontade das partes. É regra de prova frequente: havendo vários devedores sem previsão de solidariedade, a obrigação divide-se (art. 257). Não confundir com a solidariedade legal do CDC (art. 7º, parágrafo único), que decorre da lei."
            },
            {
              id: "oc-2", modo: "juris", fonte: "STJ, REsp 1.622.555 (adimplemento substancial)",
              enunciado: "Sobre a teoria do adimplemento substancial, o STJ consolidou que ela:",
              alternativas: [
                "impede qualquer medida judicial do credor sempre que paga mais da metade das parcelas do contrato",
                "obsta a resolução por inadimplemento mínimo, mas não se aplica à busca e apreensão na alienação fiduciária (DL 911/69)",
                "extingue a dívida remanescente quando cumprida parcela significativa da obrigação",
                "aplica-se somente aos contratos de consumo, por decorrer da boa-fé objetiva do CDC",
                "autoriza o juiz a reduzir de ofício o saldo devedor à proporção do descumprimento"
              ],
              correta: 1,
              explicacao: "O adimplemento substancial (derivado da boa-fé objetiva) impede a RESOLUÇÃO do contrato quando o descumprimento é ínfimo — restando ao credor a via da cobrança. Mas o STJ (REsp 1.622.555, repetitivo) afastou sua aplicação à busca e apreensão do DL 911/69: na alienação fiduciária, exige-se o pagamento INTEGRAL para restituir o bem. Tema do edital (ação de busca e apreensão)."
            },
            {
              id: "oc-3", modo: "lei", fonte: "CC, arts. 478 e 479",
              enunciado: "Na resolução por onerosidade excessiva (art. 478 do CC), decorrente de acontecimentos extraordinários e imprevisíveis, o réu pode evitar a resolução do contrato:",
              alternativas: [
                "consignando em juízo o valor originalmente pactuado entre as partes",
                "oferecendo-se a modificar equitativamente as condições do contrato",
                "prestando caução idônea equivalente ao valor integral da prestação",
                "exigindo do autor a prova da diminuição efetiva do próprio patrimônio",
                "denunciando o contrato com antecedência mínima de trinta dias"
              ],
              correta: 1,
              explicacao: "Art. 479 do CC: a resolução por onerosidade excessiva poderá ser evitada se o réu se oferecer a modificar EQUITATIVAMENTE as condições do contrato — privilegia-se a conservação do negócio (princípio da preservação dos contratos), em vez da sua extinção."
            },
            {
              id: "oc-4", modo: "lei", fonte: "CC, art. 413",
              enunciado: "Quanto à cláusula penal, o Código Civil determina que o juiz:",
              alternativas: [
                "somente pode reduzi-la mediante requerimento expresso do devedor, formulado na contestação",
                "DEVE reduzi-la equitativamente se a obrigação foi cumprida em parte ou se o montante é manifestamente excessivo",
                "não pode alterá-la, por força da obrigatoriedade dos contratos (pacta sunt servanda)",
                "deve limitá-la a dez por cento do valor da obrigação, como nas dívidas de consumo",
                "só a reduz nos contratos de adesão, presumida a vulnerabilidade do aderente"
              ],
              correta: 1,
              explicacao: "Art. 413 do CC: a penalidade DEVE ser reduzida equitativamente pelo juiz se a obrigação principal tiver sido cumprida em parte ou se o montante for manifestamente excessivo. O STJ trata a norma como de ordem pública — a redução pode se dar até de ofício. Lembre também o art. 412: a cláusula penal não pode exceder o valor da obrigação principal."
            },
            {
              id: "oc-5", modo: "lei", fonte: "CC, art. 476",
              enunciado: "A exceção de contrato não cumprido (art. 476 do CC) significa que, nos contratos bilaterais:",
              alternativas: [
                "qualquer contratante pode suspender o cumprimento se houver receio de insolvência da outra parte",
                "nenhum contratante, antes de cumprida a sua obrigação, pode exigir o implemento da do outro",
                "o contratante pontual pode exigir judicialmente o cumprimento em dobro da prestação inadimplida",
                "ambas as partes podem resolver o contrato de pleno direito, sem necessidade de interpelação",
                "o devedor pode purgar a mora a qualquer tempo, até a assinatura da sentença"
              ],
              correta: 1,
              explicacao: "Art. 476 do CC (exceptio non adimpleti contractus): nos contratos bilaterais, nenhum dos contratantes, antes de cumprida a sua obrigação, pode exigir o implemento da do outro. A hipótese de diminuição patrimonial superveniente com risco à contraprestação é regra diversa (art. 477 — exigência de garantia)."
            },
            {
              id: "oc-6", modo: "lei", fonte: "Lei 8.245/91, art. 33",
              enunciado: "Preterido no seu direito de preferência na venda do imóvel locado, o locatário poderá haver o imóvel para si, DESDE QUE:",
              alternativas: [
                "notifique o alienante em até 30 dias da ciência da venda, independentemente de averbação",
                "deposite o preço em até 6 meses do registro e o contrato esteja averbado na matrícula 30 dias antes da venda",
                "comprove a locação por qualquer meio, ainda que o contrato seja verbal e não registrado",
                "ajuíze ação anulatória da venda no prazo decadencial de 2 anos, contado da escritura",
                "prove que o adquirente conhecia a locação, dispensados o depósito e a averbação"
              ],
              correta: 1,
              explicacao: "Art. 33 da Lei 8.245/91: o locatário preterido pode reclamar perdas e danos OU haver para si o imóvel, se depositar o preço e despesas em até 6 MESES do registro da venda E o contrato de locação estiver AVERBADO na matrícula do imóvel pelo menos 30 dias antes da alienação. Sem a averbação, resta apenas a indenização."
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

    /* ------------------------------- COISA JULGADA E PRECEDENTES */
    {
      id: "coisa-julgada",
      titulo: "Coisa Julgada e Precedentes",
      materia: "Direito Processual Civil",
      banca: "I",
      icone: "🔏",
      cor: "roxo",
      descricao: "A especialidade do examinador: coisa julgada, rescisória e precedentes.",
      licoes: [
        {
          id: "coisa-julgada-1",
          titulo: "Coisa julgada, rescisória e precedentes",
          questoes: [
            {
              id: "cj-1", modo: "lei", fonte: "CPC, art. 502",
              enunciado: "Denomina-se coisa julgada MATERIAL, nos termos do art. 502 do CPC:",
              alternativas: [
                "a imutabilidade da sentença dentro do processo, quando esgotados os recursos internos",
                "a autoridade que torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso",
                "a eficácia natural da sentença, produzida desde a publicação, mesmo pendente recurso",
                "a estabilidade da tutela antecipada antecedente não impugnada por recurso do réu",
                "a preclusão máxima das questões processuais decididas na fase de saneamento"
              ],
              correta: 1,
              explicacao: "Art. 502 do CPC: coisa julgada material é a autoridade que torna imutável e indiscutível a decisão de MÉRITO não mais sujeita a recurso — projeta-se para fora do processo. A coisa julgada FORMAL é a imutabilidade dentro do processo (preclusão máxima), que atinge também as sentenças sem resolução de mérito. A tutela antecipada estabilizada (art. 304) NÃO faz coisa julgada."
            },
            {
              id: "cj-2", modo: "lei", fonte: "CPC, art. 503, §§1º e 2º",
              enunciado: "A resolução de questão PREJUDICIAL, decidida expressa e incidentemente no processo, faz coisa julgada:",
              alternativas: [
                "em nenhuma hipótese, pois a coisa julgada limita-se ao dispositivo da sentença",
                "se houver contraditório prévio e efetivo (não em caso de revelia) e o juízo tiver competência para resolvê-la como questão principal",
                "sempre, desde que mencionada na fundamentação da sentença transitada em julgado",
                "somente quando ambas as partes requererem expressamente, na inicial e na contestação, a extensão do julgado",
                "apenas nos procedimentos de jurisdição voluntária, por economia processual"
              ],
              correta: 1,
              explicacao: "Art. 503, §1º, do CPC: a questão prejudicial decidida expressa e incidentemente faz coisa julgada SE (i) da sua resolução depender o julgamento do mérito, (ii) houver contraditório prévio e efetivo — NÃO se aplicando no caso de revelia — e (iii) o juízo tiver competência para resolvê-la como questão principal. Não se aplica se houver restrições probatórias no processo (§2º). Inovação do CPC/2015, dispensando a antiga ação declaratória incidental."
            },
            {
              id: "cj-3", modo: "lei", fonte: "CPC, art. 506",
              enunciado: "Quanto aos limites subjetivos, a sentença faz coisa julgada:",
              alternativas: [
                "entre as partes e contra os terceiros que tinham ciência inequívoca da demanda",
                "entre as partes entre as quais é dada, não prejudicando terceiros (podendo, porém, beneficiá-los)",
                "erga omnes, alcançando indistintamente todos os que não participaram do processo",
                "entre as partes e os seus advogados, solidariamente responsáveis pelo resultado",
                "apenas em relação ao autor, podendo o réu rediscutir a matéria em nova ação"
              ],
              correta: 1,
              explicacao: "Art. 506 do CPC: a sentença faz coisa julgada às partes entre as quais é dada, NÃO PREJUDICANDO terceiros. O CPC/2015 suprimiu o 'nem beneficiando' do código anterior — admite-se que terceiros sejam beneficiados pela coisa julgada alheia. A eficácia erga omnes/ultra partes é própria do processo COLETIVO (art. 103 do CDC)."
            },
            {
              id: "cj-4", modo: "lei", fonte: "CPC, art. 975",
              enunciado: "O prazo para a propositura da ação rescisória é de:",
              alternativas: [
                "2 anos, contados do trânsito em julgado de cada capítulo autônomo da decisão",
                "2 anos do trânsito da última decisão do processo; se fundada em prova nova, conta-se da descoberta (teto de 5 anos)",
                "5 anos, contados da publicação da decisão rescindenda, qualquer que seja o fundamento invocado",
                "1 ano, prorrogável até o primeiro dia útil seguinte, se o termo cair em férias forenses",
                "4 anos, quando fundada em vício de citação, contados da ciência do vício pela parte"
              ],
              correta: 1,
              explicacao: "Art. 975 do CPC: o direito à rescisão extingue-se em 2 anos contados do trânsito em julgado da ÚLTIMA decisão proferida no processo. Fundada em prova nova (art. 966, VII), o termo inicial é a descoberta da prova, observado o teto de 5 anos do trânsito (§2º). Vício de citação enseja querela nullitatis (art. 525, §1º, I), que não se sujeita a prazo."
            },
            {
              id: "cj-5", modo: "lei", fonte: "CPC, art. 927",
              enunciado: "São de observância obrigatória pelos juízes e tribunais, nos termos do art. 927 do CPC, entre outros:",
              alternativas: [
                "todos os acórdãos unânimes dos tribunais de justiça, ainda que não sumulados",
                "os acórdãos em IRDR e em incidente de assunção de competência e os julgados em recursos repetitivos",
                "as decisões monocráticas dos relatores nos tribunais superiores, após a publicação",
                "os enunciados administrativos e as notas técnicas aprovados pelo Conselho Nacional de Justiça",
                "os pareceres vinculantes da Advocacia-Geral da União aprovados pelo Presidente"
              ],
              correta: 1,
              explicacao: "Art. 927 do CPC: vinculam os juízes e tribunais as decisões do STF em controle concentrado, as súmulas vinculantes, os acórdãos em incidente de assunção de competência e em IRDR, os julgamentos de recursos extraordinário e especial repetitivos, as súmulas do STF (matéria constitucional) e do STJ (infraconstitucional) e a orientação do plenário ou órgão especial a que estiverem vinculados."
            },
            {
              id: "cj-6", modo: "caso", fonte: "CPC, arts. 489, §1º, VI, e 927, §1º",
              enunciado: "Um juiz pretende deixar de aplicar precedente vinculante ao caso concreto. Ele:",
              alternativas: [
                "não pode, em nenhuma hipótese, sob pena de reclamação e responsabilidade funcional",
                "pode, desde que demonstre fundamentadamente a distinção do caso (distinguishing) ou a superação do entendimento",
                "pode, por livre convencimento motivado, bastando indicar a sua discordância doutrinária",
                "pode, se o precedente tiver sido firmado por maioria apertada no tribunal de origem",
                "só pode após suscitar incidente de revisão da tese perante o próprio tribunal"
              ],
              correta: 1,
              explicacao: "Art. 489, §1º, VI, do CPC: não é fundamentada a decisão que deixa de seguir precedente invocado pela parte 'sem demonstrar a existência de distinção no caso em julgamento ou a superação do entendimento'. O afastamento legítimo exige DISTINGUISHING (caso materialmente distinto) ou demonstração de OVERRULING — mera discordância pessoal não basta e enseja reclamação (art. 988)."
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
        },
        {
          id: "cdc-responsabilidade-2",
          titulo: "Superendividamento (Lei 14.181/2021)",
          questoes: [
            {
              id: "sup-1", modo: "lei", fonte: "CDC, art. 54-A, §1º",
              enunciado: "Para o CDC (art. 54-A, §1º, incluído pela Lei 14.181/2021), o superendividamento é a impossibilidade manifesta de o consumidor:",
              alternativas: [
                "pessoa natural ou jurídica, pagar as dívidas civis e empresariais vencidas há mais de um ano da contratação",
                "pessoa natural, de boa-fé, pagar a totalidade de suas dívidas de consumo exigíveis e vincendas, sem comprometer o mínimo existencial",
                "pessoa natural, ainda que de má-fé, pagar as dívidas vencidas, comprometendo o sustento familiar",
                "pessoa natural, pagar apenas as dívidas já vencidas, excluídas as parcelas vincendas",
                "pessoa jurídica de pequeno porte, pagar as dívidas contraídas na atividade empresarial"
              ],
              correta: 1,
              explicacao: "Art. 54-A, §1º, do CDC: superendividamento é a impossibilidade manifesta de o consumidor PESSOA NATURAL, DE BOA-FÉ, pagar a totalidade de suas dívidas de consumo, exigíveis E vincendas, sem comprometer o mínimo existencial. Três filtros: só pessoa física, só de boa-fé, e inclui dívidas futuras."
            },
            {
              id: "sup-2", modo: "lei", fonte: "CDC, art. 54-A, §3º",
              enunciado: "As regras de prevenção e tratamento do superendividamento NÃO se aplicam:",
              alternativas: [
                "às dívidas contraídas com instituições financeiras, regidas por legislação própria",
                "às dívidas contraídas mediante fraude ou má-fé e às oriundas de produtos e serviços de luxo de alto valor",
                "às dívidas de serviços essenciais continuados, como água, energia elétrica e telefonia",
                "a qualquer dívida superior a cinquenta salários mínimos, dado o vulto da obrigação",
                "às dívidas contraídas por consumidor idoso ou analfabeto, sujeitas a regime próprio"
              ],
              correta: 1,
              explicacao: "Art. 54-A, §3º, do CDC: a proteção não se aplica às dívidas contraídas mediante fraude ou má-fé, aos contratos celebrados com o propósito de não pagar e à aquisição de produtos e serviços de LUXO DE ALTO VALOR. Dívidas bancárias e de serviços essenciais estão normalmente incluídas."
            },
            {
              id: "sup-3", modo: "lei", fonte: "CDC, art. 104-A",
              enunciado: "No processo de repactuação de dívidas do superendividado, o plano de pagamento apresentado em audiência terá prazo máximo de:",
              alternativas: [
                "3 anos, prorrogáveis por igual período mediante decisão fundamentada",
                "5 anos, preservados o mínimo existencial e as garantias originais",
                "10 anos, contados da homologação judicial do acordo global",
                "2 anos, improrrogáveis, sob pena de vencimento antecipado das parcelas",
                "8 anos, limitado o desconto a 30% da renda mensal do consumidor"
              ],
              correta: 1,
              explicacao: "Art. 104-A do CDC: a pedido do consumidor superendividado, o juiz instaura processo de repactuação com audiência conciliatória e plano de pagamento com prazo MÁXIMO DE 5 ANOS, preservados o mínimo existencial e as garantias e formas de pagamento originalmente pactuadas."
            },
            {
              id: "sup-4", modo: "lei", fonte: "CDC, art. 104-A, §2º",
              enunciado: "O credor citado que não comparece à audiência de repactuação, nem envia procurador com poderes para transigir, sujeita-se a:",
              alternativas: [
                "extinção da dívida, convertida em perdas e danos em favor do consumidor",
                "suspensão da exigibilidade do seu crédito e interrupção dos encargos da mora",
                "multa de até 10% sobre o valor do crédito, revertida ao fundo do consumidor",
                "inclusão compulsória no plano judicial, com deságio mínimo de 30% do crédito",
                "perda das garantias contratuais, mantida a exigibilidade do valor principal"
              ],
              correta: 1,
              explicacao: "Art. 104-A, §2º, do CDC: a ausência injustificada do credor (ou de procurador com poderes especiais para transigir) na audiência acarreta a SUSPENSÃO DA EXIGIBILIDADE do débito e a INTERRUPÇÃO DOS ENCARGOS DA MORA — sanção processual que força a participação na conciliação."
            },
            {
              id: "sup-5", modo: "lei", fonte: "CDC, art. 54-C",
              enunciado: "No fornecimento de crédito ao consumidor, é VEDADO, entre outras condutas:",
              alternativas: [
                "oferecer crédito consignado a aposentados, dada a natureza alimentar do benefício",
                "anunciar crédito com expressões como 'sem juros' ou 'gratuito' e assediar consumidor idoso ou vulnerável na contratação",
                "cobrar juros remuneratórios superiores a 1% ao mês, limite legal das operações de consumo",
                "conceder crédito sem garantia real ou fidejussória ao consumidor de baixa renda",
                "renegociar dívidas diretamente com o consumidor superendividado, sem a assistência de advogado ou defensor"
              ],
              correta: 1,
              explicacao: "Art. 54-C do CDC: é vedado, na oferta de crédito, fazer referência a crédito 'sem juros', 'gratuito', 'sem acréscimo' ou com 'taxa zero', ocultar os riscos da contratação, e assediar ou pressionar o consumidor — principalmente se idoso, analfabeto, doente ou em estado de vulnerabilidade."
            },
            {
              id: "sup-6", modo: "caso", fonte: "Doutrina do superendividamento",
              enunciado: "Na classificação doutrinária, o superendividado 'passivo' é aquele que:",
              alternativas: [
                "acumula dívidas por consumo desmedido e gestão imprudente do orçamento, sem fato externo que o justifique",
                "se endivida em razão de fatos supervenientes e imprevistos ('acidentes da vida'), como desemprego, doença ou divórcio",
                "contrai dívidas já sabendo que não poderá pagá-las, agindo com má-fé contratual",
                "figura como garantidor de dívidas alheias, sem proveito econômico próprio",
                "permanece inerte nas ações de cobrança, sofrendo os efeitos da revelia"
              ],
              correta: 1,
              explicacao: "Superendividado ATIVO é o que se endivida por consumo excessivo (gestão imprudente); PASSIVO é o atingido por 'acidentes da vida' — desemprego, doença, divórcio, morte na família. Ambos são protegidos SE de boa-fé; o devedor de má-fé fica fora do regime (art. 54-A, §3º)."
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
        },
        {
          id: "proc-penal-juris-3",
          titulo: "Recursos e Habeas Corpus",
          questoes: [
            {
              id: "rhc-1", modo: "juris", fonte: "STF, Súmulas 693 e 695",
              enunciado: "NÃO cabe habeas corpus, segundo as súmulas do STF:",
              alternativas: [
                "impetrado por quem não seja advogado, dada a exigência de capacidade postulatória",
                "contra condenação a pena de multa ou quando já extinta a pena privativa de liberdade",
                "em favor de pessoa jurídica, salvo nos crimes ambientais de autoria coletiva",
                "contra decisão proferida por turma recursal dos juizados especiais criminais",
                "no curso do inquérito policial, antes do recebimento da denúncia pelo juízo"
              ],
              correta: 1,
              explicacao: "Súmula 693 do STF: não cabe HC contra decisão condenatória a pena de multa (ou processo cuja pena única cominada seja pecuniária); Súmula 695: não cabe quando já extinta a pena privativa de liberdade — pois o HC tutela a liberdade de LOCOMOÇÃO. Qualquer pessoa pode impetrá-lo (sem advogado), cabe no inquérito, e contra turma recursal julga o TJ/TRF (entendimento que superou a Súmula 690)."
            },
            {
              id: "rhc-2", modo: "lei", fonte: "CPP, art. 617; STF, Súmula 160",
              enunciado: "Em recurso EXCLUSIVO da defesa, o tribunal:",
              alternativas: [
                "pode agravar a pena se reconhecer, de ofício, circunstância não apreciada na sentença",
                "não pode agravar a pena nem piorar, de qualquer modo, a situação do réu (vedação da reformatio in pejus)",
                "pode reconhecer nulidade contra o réu, ainda que não arguida no recurso da acusação",
                "pode corrigir a dosimetria para cima, desde que fundamente o erro aritmético do juízo",
                "fica limitado ao efeito devolutivo, podendo, porém, compensar agravantes omitidas"
              ],
              correta: 1,
              explicacao: "Art. 617 do CPP: no recurso exclusivo da defesa, a pena não pode ser agravada (ne reformatio in pejus). A Súmula 160 do STF completa: é NULA a decisão que acolhe, contra o réu, nulidade não arguida no recurso da acusação. Há ainda a reformatio in pejus INDIRETA: anulada a sentença em recurso da defesa, a nova decisão não pode impor pena superior à anterior."
            },
            {
              id: "rhc-3", modo: "juris", fonte: "STF, Súmulas 705 e 708",
              enunciado: "O réu manifesta renúncia ao direito de apelar, sem assistência do defensor, que pretende recorrer. Nessa hipótese:",
              alternativas: [
                "prevalece a vontade expressa do réu, titular do direito de recorrer, arquivando-se o feito",
                "a renúncia desassistida não impede o conhecimento da apelação interposta pelo defensor",
                "o juiz deve designar audiência para ratificação pessoal da renúncia em cartório",
                "a apelação só será conhecida se o réu constituir novo defensor em cinco dias",
                "instaura-se incidente de sanidade mental para aferir a validade da renúncia"
              ],
              correta: 1,
              explicacao: "Súmula 705 do STF: a renúncia do réu ao direito de apelação, manifestada sem a assistência do defensor, não impede o conhecimento da apelação por este interposta — prevalece a manifestação mais favorável à defesa. Correlata, a Súmula 708: é nulo o julgamento da apelação se, após a renúncia do único defensor, o réu não foi previamente intimado para constituir outro."
            },
            {
              id: "rhc-4", modo: "juris", fonte: "LC 80/94, art. 44, I; STF/STJ",
              enunciado: "Quanto aos prazos recursais no processo penal, é correto afirmar que:",
              alternativas: [
                "a Defensoria e o Ministério Público dispõem, ambos, da prerrogativa do prazo em dobro para recorrer",
                "a Defensoria tem prazo em dobro e intimação pessoal, prerrogativa que não se estende ao Ministério Público",
                "o prazo em dobro da Defensoria vale apenas na esfera cível, não alcançando o processo penal",
                "os prazos correm da juntada do mandado aos autos, como no processo civil",
                "a intimação pessoal do defensor público dispensa a contagem em dobro do prazo"
              ],
              correta: 1,
              explicacao: "A LC 80/94 (art. 44, I) assegura ao defensor público intimação pessoal e prazo em dobro 'em qualquer processo e grau de jurisdição' — inclusive no penal (STF/STJ pacíficos). O MP NÃO tem prazo em dobro no processo penal. E atenção à Súmula 710 do STF: no processo penal, os prazos contam da INTIMAÇÃO, e não da juntada do mandado aos autos."
            },
            {
              id: "rhc-5", modo: "lei", fonte: "CPP, art. 609, parágrafo único",
              enunciado: "Os embargos infringentes e de nulidade, no processo penal (art. 609, parágrafo único, do CPP):",
              alternativas: [
                "podem ser opostos por qualquer das partes, inclusive a acusação, contra acórdão não unânime",
                "são recurso exclusivo da defesa, cabível contra decisão de segundo grau não unânime e desfavorável ao réu",
                "cabem contra qualquer acórdão unânime que confirme a condenação de primeiro grau",
                "limitam-se às decisões do Tribunal do Júri tomadas por maioria de votos dos jurados",
                "foram tacitamente revogados pelo CPC/2015, que aboliu os embargos infringentes cíveis"
              ],
              correta: 1,
              explicacao: "Art. 609, parágrafo único, do CPP: quando não unânime a decisão de segunda instância desfavorável ao réu, cabem embargos infringentes (mérito) e de nulidade, no prazo de 10 dias, restritos à matéria da divergência — recurso EXCLUSIVO da defesa. A COCRIM/DPE-RJ invoca essa lógica até na seara infracional, contra a técnica de julgamento ampliado do art. 942 do CPC."
            },
            {
              id: "rhc-6", modo: "juris", fonte: "STF, Súmula 713",
              enunciado: "No julgamento da apelação contra decisão do Tribunal do Júri, o efeito devolutivo:",
              alternativas: [
                "é amplo e integral, devolvendo ao tribunal o conhecimento de toda a matéria da causa",
                "é adstrito aos fundamentos da interposição indicados pelo recorrente (Súmula 713/STF)",
                "permite ao tribunal reformar diretamente o mérito do veredicto dos jurados",
                "autoriza a correção da dosimetria apenas em favor da acusação recorrente",
                "abrange somente as nulidades absolutas, cognoscíveis de ofício em qualquer grau"
              ],
              correta: 1,
              explicacao: "Súmula 713 do STF: o efeito devolutivo da apelação contra decisões do Júri é ADSTRITO aos fundamentos da sua interposição (art. 593, III, do CPP — hipóteses taxativas). Pela soberania dos veredictos, o tribunal não substitui o mérito decidido pelos jurados: se a decisão for manifestamente contrária à prova, determina novo júri (uma única vez)."
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
              id: "ep-1", modo: "juris", fonte: "STF, Tema 423 e SV 56",
              enunciado: "O apenado obtém progressão ao regime semiaberto, mas não há vaga em estabelecimento adequado. Conforme o STF (Tema 423 e Súmula Vinculante 56):",
              alternativas: [
                "deve permanecer no regime fechado até surgir vaga em estabelecimento adequado",
                "a falta de estabelecimento penal adequado não autoriza mantê-lo em regime mais gravoso",
                "a progressão fica suspensa até a comprovação de vaga, sem direito a medidas alternativas",
                "cabe apenas indenização pelos danos, mantido o cumprimento no regime mais gravoso",
                "deve ser transferido para estabelecimento penal federal de segurança máxima"
              ],
              correta: 1,
              explicacao: "SV 56 e Tema 423 do STF: a falta de estabelecimento penal adequado não autoriza a manutenção do condenado em regime mais gravoso, observados os parâmetros do RE 641.320. Havendo déficit de vagas, admitem-se saída antecipada, monitoração eletrônica ou prisão domiciliar. (Atenção: algumas apostilas grafam 'SV 58' por erro material — o número correto, citado inclusive no edital, é SV 56.)"
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
        },
        {
          id: "exec-penal-juris-3",
          titulo: "Regras internacionais e ADPF 347",
          questoes: [
            {
              id: "epi-1", modo: "lei", fonte: "Regras de Bangkok (ONU, 2010)",
              enunciado: "As Regras de Bangkok (ONU, 2010) estabelecem diretrizes específicas para:",
              alternativas: [
                "o tratamento de todos os reclusos, fixando padrões mínimos universais de encarceramento",
                "o tratamento de mulheres presas e a aplicação de medidas não privativas de liberdade às mulheres infratoras",
                "a proteção de crianças e adolescentes privados de liberdade em unidades socioeducativas",
                "a transferência internacional de pessoas presas entre os Estados signatários",
                "o uso da força e de armas de fogo pelos funcionários responsáveis pela aplicação da lei"
              ],
              correta: 1,
              explicacao: "As Regras de Bangkok tratam especificamente das MULHERES presas e das medidas não privativas de liberdade para mulheres infratoras (gênero, maternidade, saúde). Não confundir com as Regras de MANDELA (padrões mínimos para o tratamento de presos em geral, 2015). Ambas constam expressamente do edital da DPE-RJ."
            },
            {
              id: "epi-2", modo: "lei", fonte: "Regras de Mandela (ONU, 2015)",
              enunciado: "As Regras Mínimas das Nações Unidas para o Tratamento de Presos (Regras de Mandela, 2015) preveem, entre outras garantias:",
              alternativas: [
                "a jornada máxima de trabalho prisional de quatro horas diárias, sempre remunerada",
                "a proibição do confinamento solitário indefinido ou prolongado (superior a 15 dias consecutivos)",
                "o direito à visita íntima mensal, insuscetível de qualquer restrição disciplinar",
                "a progressão obrigatória de regime após o cumprimento de um sexto da pena",
                "a separação dos presos exclusivamente pela natureza do crime praticado"
              ],
              correta: 1,
              explicacao: "Regras 43 e 44 de Mandela: são proibidos o confinamento solitário INDEFINIDO e o PROLONGADO (assim entendido o superior a 15 dias consecutivos), além de outras práticas equiparadas a tortura ou tratamento cruel. Progressão de regime é instituto da lei brasileira, não das Regras."
            },
            {
              id: "epi-3", modo: "juris", fonte: "STF, ADPF 347",
              enunciado: "Na ADPF 347, o STF reconheceu, quanto ao sistema penitenciário brasileiro:",
              alternativas: [
                "a inconstitucionalidade da execução penal em regime fechado, a ser extinto progressivamente",
                "o 'estado de coisas inconstitucional', determinando, entre outras medidas, a realização de audiências de custódia",
                "a impossibilidade de o Judiciário interferir em políticas penitenciárias, por separação de poderes",
                "apenas a responsabilidade civil objetiva da União pelos danos morais causados aos detentos",
                "a soltura imediata de todos os presos provisórios com prisão superior a noventa dias"
              ],
              correta: 1,
              explicacao: "ADPF 347: o STF reconheceu o ESTADO DE COISAS INCONSTITUCIONAL do sistema prisional — violação massiva e estrutural de direitos fundamentais. Na cautelar (2015), determinou as audiências de custódia e o descontingenciamento do FUNPEN; no mérito (2023), impôs a elaboração de planos de ação (origem do Plano Pena Justa). É o exemplo paradigmático de processo estrutural."
            },
            {
              id: "epi-4", modo: "juris", fonte: "STF, Tema 365 (RE 580.252)",
              enunciado: "Quanto aos danos causados a presos por condições degradantes de encarceramento (superlotação), o STF (Tema 365) fixou que:",
              alternativas: [
                "não há dever de indenizar, aplicando-se a cláusula da reserva do possível ante a escassez de recursos",
                "o Estado responde objetivamente (art. 37, §6º), devendo reparar inclusive os danos morais comprovadamente causados",
                "a reparação deve ocorrer preferencialmente por remição de pena, vedada a indenização em dinheiro",
                "a indenização depende da prova de culpa individualizada do diretor do estabelecimento",
                "somente os presos provisórios fazem jus à reparação, dada a presunção de inocência"
              ],
              correta: 1,
              explicacao: "Tema 365 do STF: é dever do Estado manter padrões mínimos de humanidade nos presídios; comprovado o dano (inclusive moral) decorrente da falta de condições legais de encarceramento, responde objetivamente (art. 37, §6º, da CF). A Corte afastou a 'reserva do possível' e rejeitou a proposta de reparação por remição — a indenização é em dinheiro."
            },
            {
              id: "epi-5", modo: "juris", fonte: "Corte IDH, caso Plácido de Sá Carvalho (RJ)",
              enunciado: "No caso do Instituto Penal Plácido de Sá Carvalho (RJ), a Corte Interamericana de Direitos Humanos determinou:",
              alternativas: [
                "a interdição total do estabelecimento e a transferência imediata de todos os presos",
                "o cômputo em dobro de cada dia de pena cumprido em condições degradantes, como compensação da violação",
                "o pagamento de indenização individual em dinheiro a cada interno da unidade",
                "a nulidade de todas as condenações impostas aos internos da unidade fluminense",
                "a proibição de novas prisões preventivas no estado até a eliminação do déficit de vagas"
              ],
              correta: 1,
              explicacao: "Corte IDH, medidas provisórias no caso do IPPSC/RJ (2018): diante das condições degradantes, determinou-se o CÔMPUTO EM DOBRO de cada dia de privação de liberdade ali cumprido — salvo, para os condenados por crimes contra a vida ou a integridade física, a exigência de exame individualizado. O STJ aplicou a decisão em controle de convencionalidade (RHC 136.961). Caso fluminense — favorito para a prova da DPE-RJ."
            },
            {
              id: "epi-6", modo: "lei", fonte: "Convenção Americana, art. 5.6",
              enunciado: "Nos termos da Convenção Americana sobre Direitos Humanos (art. 5º), as penas privativas de liberdade devem ter por finalidade essencial:",
              alternativas: [
                "a retribuição proporcional ao mal causado pelo delito",
                "a reforma e a readaptação social dos condenados",
                "a neutralização dos indivíduos considerados perigosos",
                "a prevenção geral, pela intimidação da coletividade",
                "a reparação integral dos danos causados às vítimas"
              ],
              correta: 1,
              explicacao: "Art. 5.6 da Convenção Americana: 'as penas privativas da liberdade devem ter por finalidade essencial a reforma e a readaptação social dos condenados'. O mesmo art. 5º garante o tratamento digno da pessoa presa e a intranscendência da pena (não pode passar da pessoa do delinquente)."
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
        },
        {
          id: "penal-juris-3",
          titulo: "Teoria do crime",
          questoes: [
            {
              id: "tcr-1", modo: "lei", fonte: "CP, art. 18, I",
              enunciado: "Age com dolo EVENTUAL o agente que:",
              alternativas: [
                "prevê o resultado como possível, mas acredita sinceramente que ele não ocorrerá",
                "prevê o resultado como possível e, ainda assim, assume o risco de produzi-lo, anuindo à sua ocorrência",
                "não prevê o resultado que era objetivamente previsível a qualquer pessoa prudente",
                "quer diretamente o resultado típico e dirige toda a sua conduta à produção dele",
                "confia na própria habilidade para evitar o resultado que previu como certo"
              ],
              correta: 1,
              explicacao: "Art. 18, I, do CP: há dolo eventual quando o agente ASSUME O RISCO de produzir o resultado previsto (teoria do assentimento). A pegadinha clássica é a culpa CONSCIENTE: nela o agente também prevê o resultado, mas acredita sinceramente que ele não ocorrerá — não o aceita."
            },
            {
              id: "tcr-2", modo: "lei", fonte: "CP, art. 20",
              enunciado: "O erro de tipo essencial INEVITÁVEL (invencível):",
              alternativas: [
                "exclui apenas o dolo, subsistindo a punição por culpa, se prevista em lei",
                "exclui o dolo e a culpa, tornando o fato atípico",
                "isenta o agente de pena, mantendo a tipicidade e a ilicitude do fato",
                "reduz a pena de um sexto a um terço, conforme o grau de evitabilidade",
                "não afeta o dolo, pois o desconhecimento da lei é inescusável"
              ],
              correta: 1,
              explicacao: "Art. 20 do CP: o erro de tipo sempre exclui o DOLO. Se INEVITÁVEL, exclui também a culpa (fato atípico); se EVITÁVEL, permite a punição por crime culposo, se previsto em lei. Não confundir com o erro de PROIBIÇÃO (art. 21): inevitável isenta de pena; evitável reduz de 1/6 a 1/3."
            },
            {
              id: "tcr-3", modo: "lei", fonte: "CP, arts. 14, p. ú., e 15",
              enunciado: "O agente que, voluntariamente, interrompe a execução do crime já iniciada (desistência voluntária):",
              alternativas: [
                "responde pela tentativa do crime, com a pena reduzida de um a dois terços",
                "responde apenas pelos atos já praticados, afastada a tentativa ('ponte de ouro')",
                "fica isento de qualquer pena, ainda que os atos praticados constituam crime",
                "responde pelo crime consumado, se a interrupção decorreu de circunstância externa",
                "tem a pena atenuada pelo arrependimento posterior, se reparar o dano causado"
              ],
              correta: 1,
              explicacao: "Art. 15 do CP: na desistência voluntária (e no arrependimento eficaz), o agente só responde pelos ATOS JÁ PRATICADOS — é a 'ponte de ouro'. Afasta-se a tentativa (que exige interrupção por circunstâncias ALHEIAS à vontade, art. 14, II, com redução de 1/3 a 2/3). A voluntariedade não precisa ser espontânea."
            },
            {
              id: "tcr-4", modo: "lei", fonte: "CP, art. 25",
              enunciado: "Configura legítima defesa a conduta de quem:",
              alternativas: [
                "reage a agressão já encerrada, em desforço imediato pela ofensa à honra ou ao patrimônio",
                "usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem",
                "sacrifica bem jurídico de terceiro inocente para salvar-se de perigo atual que não provocou",
                "repele agressão futura e incerta, com base em fundado temor de sua ocorrência",
                "atua no estrito cumprimento de dever legal imposto pela função pública"
              ],
              correta: 1,
              explicacao: "Art. 25 do CP: legítima defesa exige agressão INJUSTA, ATUAL OU IMINENTE, a direito próprio ou alheio, repelida com os meios necessários usados com moderação. Agressão passada (vingança) ou futura/incerta não autorizam. Sacrificar bem de terceiro diante de perigo é estado de necessidade (art. 24) — excludente diversa."
            },
            {
              id: "tcr-5", modo: "lei", fonte: "CP, art. 70",
              enunciado: "No concurso FORMAL PRÓPRIO (perfeito) de crimes, o agente:",
              alternativas: [
                "com uma só conduta e desígnios autônomos, sujeita-se à soma das penas (cúmulo material)",
                "com uma só conduta pratica dois ou mais crimes, aplicando-se a pena mais grave aumentada de 1/6 até 1/2",
                "mediante mais de uma conduta, pratica crimes da mesma espécie em condições semelhantes",
                "pratica novo crime depois do trânsito em julgado de condenação anterior, como reincidente",
                "responde sempre por crime único, quando os delitos atingirem o mesmo bem jurídico"
              ],
              correta: 1,
              explicacao: "Art. 70 do CP: no concurso formal PRÓPRIO (uma conduta, dois ou mais crimes, sem desígnios autônomos) aplica-se a pena mais grave aumentada de 1/6 a 1/2 (exasperação). Havendo DESÍGNIOS AUTÔNOMOS (formal impróprio), somam-se as penas. Várias condutas + crimes da mesma espécie em condições semelhantes = continuidade delitiva (art. 71)."
            },
            {
              id: "tcr-6", modo: "lei", fonte: "CP, art. 13, §2º",
              enunciado: "Nos crimes omissivos IMPRÓPRIOS (comissivos por omissão), a omissão é penalmente relevante quando o omitente:",
              alternativas: [
                "tinha mera possibilidade física de agir, ainda que sem qualquer dever jurídico específico",
                "devia e podia agir para evitar o resultado, por ser garantidor (dever legal, assunção voluntária ou ingerência)",
                "presenciou o fato criminoso e deixou de comunicá-lo imediatamente à autoridade policial",
                "descumpriu dever genérico de solidariedade, punível como omissão de socorro agravada",
                "podia agir sem risco pessoal, hipótese que configura o crime de omissão de socorro"
              ],
              correta: 1,
              explicacao: "Art. 13, §2º, do CP: no crime comissivo por omissão, o omitente responde pelo RESULTADO porque devia e podia agir — posição de GARANTIDOR: (a) dever legal de cuidado, proteção ou vigilância; (b) assunção voluntária da responsabilidade de impedir o resultado; (c) ingerência (criação do risco com o comportamento anterior). Sem posição de garante, a omissão gera, no máximo, crime omissivo próprio (ex.: omissão de socorro)."
            }
          ]
        },
        {
          id: "penal-juris-4",
          titulo: "Lei de Drogas",
          questoes: [
            {
              id: "ld-1", modo: "juris", fonte: "STF, Tema 506 (RE 635.659)",
              enunciado: "Sobre o porte de maconha para consumo próprio, o STF (Tema 506) decidiu que a conduta:",
              alternativas: [
                "permanece criminosa, mas com penas restritivas de direitos aplicadas pelo Jecrim",
                "não é infração penal, presumindo-se usuário quem porta até 40 g ou seis plantas fêmeas, salvo indícios de traficância",
                "foi integralmente legalizada, vedada inclusive a apreensão da substância pela polícia",
                "só deixa de ser punível se a quantidade não exceder 25 g, limite fixado expressamente em lei",
                "descriminaliza o porte de qualquer droga para uso pessoal, por extensão analógica"
              ],
              correta: 1,
              explicacao: "Tema 506 do STF: o porte de cannabis para consumo próprio deixou de ser infração penal (o art. 28 segue válido para as demais drogas). Presume-se usuário quem porta até 40 g ou 6 plantas fêmeas — presunção RELATIVA, afastável diante de elementos concretos de traficância. A droga continua sujeita a apreensão, e a tese vale até o Congresso disciplinar a matéria."
            },
            {
              id: "ld-2", modo: "lei", fonte: "Lei 11.343/06, art. 28",
              enunciado: "Quem adquire ou porta droga (diversa da maconha) para consumo pessoal sujeita-se, nos termos do art. 28 da Lei de Drogas, a:",
              alternativas: [
                "pena de detenção de seis meses a dois anos, substituível por restritivas de direitos",
                "advertência, prestação de serviços à comunidade ou medida educativa — nunca pena privativa de liberdade",
                "multa administrativa aplicada diretamente pela autoridade policial, sem processo",
                "reclusão de um a três anos, quando se tratar de reincidente específico na conduta",
                "internação compulsória para tratamento, mediante requerimento do Ministério Público"
              ],
              correta: 1,
              explicacao: "Art. 28 da Lei 11.343/06: as penas são advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso — em NENHUMA hipótese há pena privativa de liberdade. Em caso de descumprimento, admoestação verbal e multa (§6º)."
            },
            {
              id: "ld-3", modo: "lei", fonte: "Lei 11.343/06, art. 33, §4º",
              enunciado: "A causa de diminuição do tráfico privilegiado (art. 33, §4º) exige que o agente, CUMULATIVAMENTE:",
              alternativas: [
                "seja primário OU tenha bons antecedentes, bastando o preenchimento de qualquer um desses requisitos alternativos",
                "seja primário, tenha bons antecedentes e não se dedique a atividades criminosas nem integre organização criminosa",
                "seja menor de 21 anos e tenha confessado espontaneamente a prática do tráfico",
                "tenha sido flagrado com pequena quantidade, qualquer que seja o seu histórico criminal",
                "colabore voluntariamente com a investigação, identificando os demais coautores"
              ],
              correta: 1,
              explicacao: "Art. 33, §4º: redução de 1/6 a 2/3 desde que o agente seja primário, de bons antecedentes, não se dedique às atividades criminosas nem integre organização criminosa — requisitos CUMULATIVOS. Preenchidos, o tráfico privilegiado não é hediondo (SV 63) e admite regime aberto e substituição por restritivas (SV 59)."
            },
            {
              id: "ld-4", modo: "lei", fonte: "Lei 11.343/06, art. 28, §2º",
              enunciado: "Para distinguir o porte para consumo pessoal do tráfico, o juiz atenderá, nos termos do art. 28, §2º:",
              alternativas: [
                "exclusivamente à quantidade de droga apreendida, conforme tabela fixada em regulamento do Poder Executivo",
                "à natureza e à quantidade da droga, ao local e às condições da ação e às circunstâncias pessoais e antecedentes do agente",
                "à confissão do agente, elemento indispensável para o enquadramento como usuário",
                "ao laudo toxicológico definitivo, que classificará o grau de dependência química",
                "apenas aos antecedentes criminais, presumindo-se o tráfico em caso de reincidência"
              ],
              correta: 1,
              explicacao: "Art. 28, §2º: o juiz considera a natureza e a quantidade da substância, o local e as condições da ação, as circunstâncias sociais e pessoais e a conduta e os antecedentes do agente — análise CONJUNTA, sem quantidade fixa em lei (a presunção de 40 g do Tema 506 vale apenas para a maconha, e é relativa)."
            },
            {
              id: "ld-5", modo: "juris", fonte: "STJ, Súmulas 587 e 607",
              enunciado: "Quanto às majorantes do art. 40 da Lei de Drogas, o STJ consolidou que:",
              alternativas: [
                "ambas as majorantes exigem a efetiva transposição da fronteira estadual ou nacional",
                "a interestadualidade dispensa a efetiva transposição de fronteira entre estados, bastando a demonstração inequívoca dessa intenção",
                "a transnacionalidade só incide com a consumação da saída da droga do território nacional",
                "as majorantes do art. 40 são incompatíveis com o reconhecimento do tráfico privilegiado",
                "a interestadualidade incide sempre que a droga tiver sido adquirida em outro estado, mesmo sem intenção de difusão interestadual"
              ],
              correta: 1,
              explicacao: "Súmula 587 do STJ: para a majorante interestadual (art. 40, V) é DESNECESSÁRIA a efetiva transposição de fronteira entre estados, bastando a demonstração inequívoca da intenção. Na mesma linha, a Súmula 607: a transnacional (art. 40, I) configura-se com a prova da destinação internacional, ainda que não consumada a transposição."
            },
            {
              id: "ld-6", modo: "juris", fonte: "STF, Temas 626 e 959",
              enunciado: "Sobre as vedações abstratas da Lei de Drogas aos acusados de tráfico, o STF declarou inconstitucionais:",
              alternativas: [
                "somente a vedação à liberdade provisória, mantida a proibição de substituição da pena por restritivas de direitos",
                "a vedação à conversão da pena em restritivas de direitos e a vedação à liberdade provisória, impondo análise caso a caso",
                "apenas a vedação ao livramento condicional dos condenados reincidentes específicos",
                "as penas mínimas cominadas ao tráfico, por ofensa à proporcionalidade em abstrato",
                "a própria criminalização do tráfico privilegiado, convertido em infração administrativa"
              ],
              correta: 1,
              explicacao: "Tema 626 do STF: é inconstitucional a vedação abstrata à conversão da pena em restritivas de direitos (arts. 33, §4º, e 44 da Lei 11.343/06). Tema 959: é inconstitucional a expressão 'e liberdade provisória' do art. 44. Em ambos, o STF rejeitou proibições automáticas: a análise deve ser feita caso a caso pelo juiz."
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
        },
        {
          id: "administrativo-2",
          titulo: "Responsabilidade civil do Estado",
          questoes: [
            {
              id: "rce-1", modo: "lei", fonte: "CF, art. 37, §6º",
              enunciado: "Nos termos do art. 37, §6º, da CF, as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem:",
              alternativas: [
                "subjetivamente, exigida a demonstração de culpa individualizada do agente causador do dano",
                "objetivamente pelos danos que seus agentes, nessa qualidade, causarem a terceiros, com regresso nos casos de dolo ou culpa",
                "objetivamente, com fundamento na teoria do risco integral, vedada qualquer excludente",
                "objetivamente apenas as de direito público; as concessionárias respondem mediante culpa",
                "objetivamente apenas perante os usuários do serviço público, respondendo mediante culpa perante os não usuários"
              ],
              correta: 1,
              explicacao: "Art. 37, §6º, da CF: responsabilidade OBJETIVA (teoria do risco administrativo — admite excludentes, ao contrário do risco integral) pelos danos que os agentes, NESSA QUALIDADE, causarem a terceiros, assegurado o regresso contra o responsável nos casos de dolo ou culpa. O STF estende a proteção também a terceiros NÃO usuários (RE 591.874)."
            },
            {
              id: "rce-2", modo: "juris", fonte: "STF, Tema 592",
              enunciado: "Um detento morre em estabelecimento prisional. Conforme o STF (Tema 592), o Estado:",
              alternativas: [
                "não responde, pois a morte no interior do presídio decorre, em regra, de fato de terceiro ou da própria vítima",
                "responde objetivamente, por inobservância do dever específico de proteção, salvo se comprovar que não podia evitar o resultado",
                "responde subjetivamente, exigida a prova de negligência concreta dos agentes penitenciários",
                "responde com base no risco integral, ainda que o resultado fosse imprevisível e inevitável",
                "responde apenas em caso de morte por homicídio, excluídas as mortes naturais e os suicídios"
              ],
              correta: 1,
              explicacao: "Tema 592 do STF: em caso de inobservância do dever específico de proteção previsto no art. 5º, XLIX, da CF, o Estado é responsável (objetivamente) pela morte de detento. A responsabilidade é afastada quando o Estado comprova que a morte não podia ser evitada (rompimento do nexo causal) — não é risco integral."
            },
            {
              id: "rce-3", modo: "juris", fonte: "STF, Tema 940 (dupla garantia)",
              enunciado: "A vítima de dano causado por agente público pretende ajuizar a ação indenizatória diretamente contra o servidor. Conforme o STF (Tema 940):",
              alternativas: [
                "é possível, à escolha da vítima, demandar o agente público, o Estado ou ambos, em litisconsórcio facultativo",
                "não é possível: a ação deve ser proposta contra o ente público, e o agente responde apenas em regresso (dupla garantia)",
                "é possível, desde que demonstrado o dolo ou a fraude do agente na conduta lesiva",
                "é obrigatório o litisconsórcio passivo entre o agente público e o ente estatal",
                "só é possível após o trânsito em julgado da ação contra o Estado, de forma subsidiária"
              ],
              correta: 1,
              explicacao: "Tema 940 do STF (tese da dupla garantia): a ação indenizatória deve ser ajuizada contra o Estado ou a pessoa jurídica prestadora do serviço; o agente público responde somente em ação de REGRESSO. A regra protege a vítima (patrimônio estatal solvente) e o agente (não responde diretamente perante o particular)."
            },
            {
              id: "rce-4", modo: "juris", fonte: "STJ; Decreto 20.910/32",
              enunciado: "A pretensão indenizatória contra a Fazenda Pública prescreve, segundo o entendimento consolidado do STJ, em:",
              alternativas: [
                "3 anos, aplicando-se o prazo da reparação civil do Código Civil, norma posterior",
                "5 anos (Decreto 20.910/32), por ser norma especial que prevalece sobre o prazo trienal do Código Civil",
                "10 anos, prazo geral aplicável às pretensões pessoais sem regra específica",
                "2 anos, contados da data da ciência inequívoca do dano pela vítima lesada",
                "não prescreve, por se tratar de responsabilidade fundada diretamente na Constituição"
              ],
              correta: 1,
              explicacao: "STJ (tese repetitiva): aplica-se o prazo QUINQUENAL do art. 1º do Decreto 20.910/32 às ações indenizatórias contra a Fazenda Pública, por ser norma especial, afastando o prazo de 3 anos do art. 206, §3º, V, do Código Civil."
            },
            {
              id: "rce-5", modo: "caso", fonte: "Teoria do risco administrativo",
              enunciado: "Em matéria de responsabilidade objetiva do Estado (teoria do risco administrativo), a culpa CONCORRENTE da vítima:",
              alternativas: [
                "exclui integralmente a responsabilidade estatal, rompendo o nexo de causalidade",
                "não exclui a responsabilidade, mas atenua o valor da indenização, na proporção da contribuição causal",
                "é irrelevante, pois o risco administrativo não admite excludentes nem atenuantes",
                "transfere a responsabilidade ao agente público que concorreu para o resultado",
                "converte a responsabilidade objetiva em subjetiva, exigindo prova da culpa estatal"
              ],
              correta: 1,
              explicacao: "No risco administrativo, a culpa EXCLUSIVA da vítima, o caso fortuito/força maior e o fato exclusivo de terceiro rompem o nexo e excluem a responsabilidade. Já a culpa CONCORRENTE não exclui — apenas atenua o quantum indenizatório, na medida da contribuição causal de cada parte."
            },
            {
              id: "rce-6", modo: "lei", fonte: "CF, art. 5º, LXXV",
              enunciado: "Quanto aos danos causados por atos JURISDICIONAIS, a regra é a irresponsabilidade do Estado, EXCETO:",
              alternativas: [
                "quando a decisão for integralmente reformada em grau de recurso, com inversão da sucumbência",
                "no erro judiciário e na prisão além do tempo fixado na sentença (art. 5º, LXXV, da CF)",
                "quando a parte demonstrar prejuízo econômico decorrente da demora na tramitação",
                "em qualquer condenação criminal seguida de absolvição por insuficiência de provas",
                "quando o juiz interpretar a lei de forma diversa da jurisprudência dominante"
              ],
              correta: 1,
              explicacao: "Regra: o Estado não responde por atos jurisdicionais típicos. Exceções constitucionais (art. 5º, LXXV): o ERRO JUDICIÁRIO e a prisão ALÉM DO TEMPO fixado na sentença. Também responde quando o juiz age com dolo ou fraude (art. 143 do CPC). Reforma em recurso e divergência interpretativa não geram, por si, indenização."
            }
          ]
        },
        {
          id: "administrativo-3",
          titulo: "Atos administrativos e licitações",
          questoes: [
            {
              id: "ata-1", modo: "caso", fonte: "Doutrina; Lei 9.784/99",
              enunciado: "São ATRIBUTOS do ato administrativo:",
              alternativas: [
                "competência, finalidade, forma, motivo e objeto do ato praticado",
                "presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade",
                "legalidade, impessoalidade, moralidade, publicidade e eficiência",
                "vinculação, discricionariedade, hierarquia e poder disciplinar",
                "anulabilidade, revogabilidade e convalidação compulsória"
              ],
              correta: 1,
              explicacao: "Atributos (qualidades) do ato: presunção de legitimidade/veracidade, imperatividade, autoexecutoriedade e, para parte da doutrina, tipicidade. A pegadinha clássica é confundir com os ELEMENTOS/requisitos (competência, finalidade, forma, motivo e objeto — art. 2º da Lei 4.717/65) ou com os princípios do art. 37 da CF."
            },
            {
              id: "ata-2", modo: "juris", fonte: "STF, Súmula 473; Lei 9.784/99, arts. 53-54",
              enunciado: "Quanto ao desfazimento dos atos administrativos, é correto afirmar que a Administração:",
              alternativas: [
                "só pode anular ou revogar os próprios atos mediante prévia autorização do Poder Judiciário",
                "anula os atos ilegais (efeitos ex tunc) e revoga os inconvenientes (ex nunc), respeitados os direitos adquiridos",
                "revoga os atos ilegais com efeitos retroativos (ex tunc) à data da sua prática",
                "pode revogar inclusive os atos vinculados e os que geraram direitos adquiridos",
                "anula os atos ilegais com efeitos apenas prospectivos, preservando o período anterior"
              ],
              correta: 1,
              explicacao: "Súmula 473 do STF: a Administração pode ANULAR seus atos ilegais (ex tunc) e REVOGAR os inconvenientes ou inoportunos (ex nunc), respeitados os direitos adquiridos. Atenção ao prazo: o direito de anular atos com efeitos favoráveis ao administrado decai em 5 anos, salvo comprovada má-fé (art. 54 da Lei 9.784/99)."
            },
            {
              id: "ata-3", modo: "lei", fonte: "Lei 9.784/99, art. 55",
              enunciado: "A convalidação do ato administrativo defeituoso (art. 55 da Lei 9.784/99) é possível quando:",
              alternativas: [
                "o vício recair sobre a finalidade ou o motivo do ato, mediante justificativa superveniente do agente público",
                "os defeitos forem sanáveis (competência ou forma) e não houver lesão ao interesse público nem prejuízo a terceiros",
                "houver o decurso de dois anos da prática do ato, qualquer que seja a natureza do vício",
                "o ato tiver sido praticado com desvio de poder, desde que comprovada a boa-fé do agente",
                "o beneficiário renunciar expressamente aos efeitos já produzidos"
              ],
              correta: 1,
              explicacao: "Art. 55 da Lei 9.784/99: em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos com defeitos SANÁVEIS podem ser convalidados. São sanáveis, em regra, os vícios de competência (salvo exclusiva) e de forma (salvo essencial); vícios de finalidade, motivo e objeto não se convalidam."
            },
            {
              id: "ata-4", modo: "lei", fonte: "Lei 14.133/2021, art. 28",
              enunciado: "São modalidades de licitação previstas na Lei 14.133/2021:",
              alternativas: [
                "tomada de preços e convite, além do pregão e da concorrência",
                "pregão, concorrência, concurso, leilão e diálogo competitivo",
                "pregão, regime diferenciado de contratações, consulta e chamamento",
                "concorrência, leilão, carta-convite e manifestação de interesse",
                "apenas o pregão eletrônico, unificadas as demais modalidades"
              ],
              correta: 1,
              explicacao: "Art. 28 da Lei 14.133/2021: as modalidades são pregão, concorrência, concurso, leilão e o DIÁLOGO COMPETITIVO (novidade). A tomada de preços e o convite, da antiga Lei 8.666/93, foram EXTINTOS — distrator clássico de prova."
            },
            {
              id: "ata-5", modo: "lei", fonte: "Lei 14.133/2021, arts. 6º, XLII, e 32",
              enunciado: "O diálogo competitivo, modalidade criada pela Lei 14.133/2021, destina-se a contratações que envolvam:",
              alternativas: [
                "contratações de pequeno valor, dispensadas a publicação de edital e a fase de julgamento",
                "inovação tecnológica ou necessidade cuja solução exija adaptação das alternativas disponíveis no mercado",
                "bens comuns, cujos padrões de qualidade sejam objetivamente definidos pelo edital",
                "a alienação de bens móveis e imóveis inservíveis, mediante lances públicos sucessivos",
                "a escolha de trabalho técnico, científico ou artístico mediante a instituição de prêmios"
              ],
              correta: 1,
              explicacao: "Art. 32 da Lei 14.133/2021: o diálogo competitivo cabe em contratações que envolvam inovação tecnológica ou técnica, impossibilidade de satisfação da necessidade sem adaptação das soluções de mercado, ou impossibilidade de definição precisa das especificações. Os distratores descrevem outras modalidades: pregão (bens comuns), leilão (alienação) e concurso (prêmios)."
            },
            {
              id: "ata-6", modo: "caso", fonte: "CTN, art. 78; doutrina",
              enunciado: "O poder de polícia ADMINISTRATIVA caracteriza-se por:",
              alternativas: [
                "aplicar sanções disciplinares aos servidores públicos por infrações funcionais",
                "condicionar e restringir o exercício de direitos e atividades privadas em favor do interesse público",
                "editar decretos e regulamentos para a fiel execução das leis administrativas",
                "escalonar e rever a atuação dos órgãos subordinados da Administração",
                "investigar e reprimir infrações penais, com o apoio da força pública"
              ],
              correta: 1,
              explicacao: "Poder de polícia (art. 78 do CTN): condiciona e limita o exercício de direitos, bens e atividades dos particulares em prol da coletividade. Difere do poder disciplinar (servidores), do regulamentar (decretos) e do hierárquico (subordinação). A repressão a infrações penais é polícia JUDICIÁRIA. O STF (Tema 532) admite delegar atos de consentimento e fiscalização a estatais de direito privado prestadoras de serviço público."
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
        },
        {
          id: "direitos-humanos-2",
          titulo: "Grupos vulnerabilizados",
          questoes: [
            {
              id: "gv-1", modo: "lei", fonte: "CF, art. 5º, §3º; Decreto 6.949/2009",
              enunciado: "Qual tratado de direitos humanos foi aprovado pelo rito qualificado do art. 5º, §3º, da CF, possuindo status equivalente ao de emenda constitucional?",
              alternativas: [
                "a Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica)",
                "a Convenção da ONU sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo",
                "o Pacto Internacional sobre Direitos Civis e Políticos, ratificado em 1992",
                "a Convenção da ONU contra a Tortura e Outros Tratamentos Cruéis ou Degradantes",
                "a Convenção sobre a Eliminação de Todas as Formas de Discriminação contra a Mulher"
              ],
              correta: 1,
              explicacao: "A Convenção sobre os Direitos das Pessoas com Deficiência (e seu Protocolo Facultativo) foi o primeiro tratado aprovado pelo rito do art. 5º, §3º (dois turnos, 3/5 dos votos em cada Casa) — Decreto 6.949/2009 —, tendo status de emenda constitucional. Os demais tratados citados, anteriores, têm status supralegal."
            },
            {
              id: "gv-2", modo: "juris", fonte: "STF, ADPF 186",
              enunciado: "Sobre as ações afirmativas com recorte racial no acesso ao ensino superior, o STF (ADPF 186) decidiu que elas:",
              alternativas: [
                "são inconstitucionais, por violarem o princípio da igualdade formal entre os candidatos",
                "são constitucionais, como instrumento de igualdade material e de superação de desigualdades históricas",
                "são válidas apenas se combinadas com critério socioeconômico, vedado o critério racial isolado",
                "dependem de lei federal específica, sendo vedada a instituição por ato universitário",
                "são admitidas somente nas instituições privadas, por força da autonomia contratual"
              ],
              correta: 1,
              explicacao: "ADPF 186: o STF, por unanimidade, declarou constitucionais as cotas raciais em universidades, como concretização da igualdade MATERIAL (art. 3º, I e III, da CF) e políticas de reparação de desigualdades históricas. Não se exigiu lei específica nem combinação obrigatória com critério socioeconômico."
            },
            {
              id: "gv-3", modo: "juris", fonte: "STF, ADO 26 e MI 4733",
              enunciado: "Diante da omissão do Congresso em criminalizar a homotransfobia, o STF (ADO 26 e MI 4733) decidiu que essas condutas:",
              alternativas: [
                "não podem ser punidas, por força da reserva absoluta de lei penal em sentido formal",
                "enquadram-se, até que sobrevenha lei específica, nos tipos da Lei do Racismo (Lei 7.716/89), como racismo social",
                "configuram apenas injúria qualificada, afastada a aplicação da Lei do Racismo",
                "devem ser punidas como contravenção penal de perturbação, até deliberação do Congresso",
                "geram apenas responsabilidade civil e administrativa, vedada a analogia in malam partem"
              ],
              correta: 1,
              explicacao: "ADO 26 e MI 4733: o STF reconheceu a mora legislativa e determinou que a homotransfobia se enquadra, até edição de lei própria, nos crimes da Lei 7.716/89 — conceito de racismo SOCIAL, não limitado à raça biológica. A Corte afastou a objeção de analogia in malam partem, tratando-a como interpretação conforme."
            },
            {
              id: "gv-4", modo: "juris", fonte: "STF, HC coletivo 143.641",
              enunciado: "No HC coletivo 143.641, o STF determinou a substituição da prisão preventiva por domiciliar para gestantes e mães de crianças de até 12 anos, EXCETO:",
              alternativas: [
                "nos crimes de tráfico de drogas em qualquer modalidade, dada a natureza equiparada a hedionda do delito imputado",
                "nos crimes com violência ou grave ameaça, nos praticados contra os próprios descendentes ou em situações excepcionalíssimas",
                "nas hipóteses de reincidência da acusada, qualquer que seja a natureza do novo delito",
                "quando a mulher não comprovar renda lícita nem residência fixa no distrito da culpa",
                "quando a criança estiver sob os cuidados de outro familiar em condições adequadas"
              ],
              correta: 1,
              explicacao: "HC coletivo 143.641 (2ª Turma do STF): substituição da preventiva por prisão domiciliar às gestantes, puérperas e mães de crianças até 12 anos ou de pessoas com deficiência, EXCETO nos crimes praticados com violência ou grave ameaça, contra os próprios descendentes, ou em situações excepcionalíssimas devidamente fundamentadas. Marco da tutela coletiva em matéria penal — atuação da Defensoria."
            },
            {
              id: "gv-5", modo: "lei", fonte: "Convenção 169 da OIT",
              enunciado: "A Convenção 169 da OIT, aplicável aos povos indígenas e tribais (incluídas as comunidades quilombolas), assegura-lhes o direito:",
              alternativas: [
                "de veto vinculante a qualquer empreendimento situado nas proximidades de seus territórios",
                "à consulta prévia, livre e informada sobre medidas administrativas e legislativas capazes de afetá-los diretamente",
                "à representação parlamentar própria, com cadeiras reservadas no Congresso Nacional",
                "à propriedade plena, alienável e penhorável das terras tradicionalmente ocupadas",
                "de somente serem julgados por tribunais compostos por integrantes da própria comunidade"
              ],
              correta: 1,
              explicacao: "Arts. 6º e 7º da Convenção 169 da OIT: direito à CONSULTA prévia, livre e informada (de boa-fé e por meio das instituições representativas) sempre que previstas medidas capazes de afetá-los diretamente. Consulta não equivale a veto. A jurisprudência estende a proteção às comunidades quilombolas como 'povos tribais'."
            },
            {
              id: "gv-6", modo: "lei", fonte: "Lei 9.474/97, art. 1º, III",
              enunciado: "A lei brasileira de refúgio (Lei 9.474/97) adota conceito ampliado de refugiado, reconhecendo também quem:",
              alternativas: [
                "migra por razões exclusivamente econômicas, em busca de melhores condições de vida",
                "é obrigado a deixar seu país devido a grave e generalizada violação de direitos humanos",
                "é condenado criminalmente no exterior e busca escapar do cumprimento da pena",
                "deixa o país de origem em razão de desastres naturais, como deslocado climático",
                "possui visto humanitário concedido discricionariamente pelo governo brasileiro"
              ],
              correta: 1,
              explicacao: "Art. 1º, III, da Lei 9.474/97: além do fundado temor de perseguição (Convenção de 1951), é refugiado quem, devido a GRAVE E GENERALIZADA VIOLAÇÃO DE DIREITOS HUMANOS, é obrigado a deixar seu país — conceito ampliado inspirado na Declaração de Cartagena. Migração econômica e desastres naturais não estão abrangidos pela lei (podem ensejar acolhida humanitária, instituto diverso)."
            }
          ]
        },
        {
          id: "direitos-humanos-3",
          titulo: "Sistema global (ONU)",
          questoes: [
            {
              id: "sg-1", modo: "lei", fonte: "Sistema ONU (treaty bodies)",
              enunciado: "No sistema global (ONU), os chamados órgãos CONVENCIONAIS (treaty bodies) de direitos humanos são:",
              alternativas: [
                "os órgãos criados com base na Carta da ONU, a exemplo do Conselho de Direitos Humanos",
                "comitês criados pelos próprios tratados para monitorar o seu cumprimento (ex.: Comitê de Direitos Humanos)",
                "tribunais internacionais permanentes, com jurisdição penal obrigatória e universal",
                "as agências especializadas, como a OIT e a Organização Mundial da Saúde",
                "as organizações não governamentais com estatuto consultivo junto ao ECOSOC"
              ],
              correta: 1,
              explicacao: "Órgãos CONVENCIONAIS (treaty bodies) são os comitês instituídos pelos próprios tratados para monitorar seu cumprimento (Comitê de Direitos Humanos/PIDCP, Comitê DESC, CEDAW, CAT etc.), por relatórios periódicos e, quando aceito, petições individuais. Órgãos EXTRACONVENCIONAIS decorrem da Carta da ONU — como o Conselho de Direitos Humanos e seus procedimentos especiais."
            },
            {
              id: "sg-2", modo: "lei", fonte: "Conselho de Direitos Humanos da ONU",
              enunciado: "A Revisão Periódica Universal (RPU), conduzida pelo Conselho de Direitos Humanos da ONU, consiste:",
              alternativas: [
                "no julgamento vinculante de petições individuais apresentadas contra os Estados",
                "no exame periódico da situação de direitos humanos de todos os Estados-membros, por avaliação entre pares",
                "na inspeção anual restrita aos países submetidos a sanções do Conselho de Segurança",
                "na revisão das sentenças proferidas pelos tribunais constitucionais nacionais",
                "na auditoria das contribuições financeiras dos Estados ao sistema das Nações Unidas"
              ],
              correta: 1,
              explicacao: "A RPU é mecanismo do Conselho de Direitos Humanos em que TODOS os Estados-membros da ONU têm sua situação de direitos humanos examinada periodicamente pelos demais Estados (peer review), com recomendações. Não é órgão judicial: não julga petições nem impõe sanções."
            },
            {
              id: "sg-3", modo: "lei", fonte: "DUDH (1948)",
              enunciado: "A Declaração Universal dos Direitos Humanos (1948), quanto à sua natureza jurídica originária:",
              alternativas: [
                "é um tratado multilateral ratificado pelo Brasil, com hierarquia supralegal desde 2008",
                "é resolução da Assembleia Geral — não um tratado —, hoje amplamente reconhecida como direito costumeiro",
                "possui força vinculante imediata, com sanções aplicadas pela Corte Internacional de Justiça",
                "vincula apenas os Estados que a incorporaram por lei interna específica",
                "foi revogada e substituída integralmente pelos Pactos Internacionais de 1966"
              ],
              correta: 1,
              explicacao: "A DUDH foi adotada como RESOLUÇÃO da Assembleia Geral (não é tratado e não foi 'ratificada'). Sem força vinculante formal na origem, seu conteúdo é hoje amplamente reconhecido como direito internacional costumeiro. Os Pactos de 1966 a densificaram juridicamente, sem revogá-la — juntos formam a 'Carta Internacional de Direitos Humanos'."
            },
            {
              id: "sg-4", modo: "lei", fonte: "PIDCP e PIDESC (1966)",
              enunciado: "Os dois Pactos Internacionais de 1966 dividem os direitos humanos em:",
              alternativas: [
                "direitos de primeira e de segunda geração, com idêntico regime de exigibilidade",
                "civis e políticos (exigibilidade imediata) e econômicos, sociais e culturais (realização progressiva)",
                "direitos individuais e transindividuais, conforme a titularidade do bem jurídico protegido",
                "direitos absolutos e relativos, segundo a possibilidade de restrição estatal",
                "normas de jus cogens e normas de soft law, conforme o seu grau de imperatividade"
              ],
              correta: 1,
              explicacao: "PIDCP (civis e políticos): obrigações de respeito e garantia imediatas. PIDESC (econômicos, sociais e culturais): implementação PROGRESSIVA, 'até o máximo dos recursos disponíveis' (art. 2.1) — o que não elimina obrigações mínimas imediatas (núcleo essencial e vedação do retrocesso). A diferença de regime é o ponto cobrado."
            },
            {
              id: "sg-5", modo: "lei", fonte: "Estatuto de Roma; CF, art. 5º, §4º",
              enunciado: "O Tribunal Penal Internacional (Estatuto de Roma), a cuja jurisdição o Brasil se submete (art. 5º, §4º, da CF), caracteriza-se por:",
              alternativas: [
                "julgar Estados soberanos por violações de direitos humanos, com jurisdição obrigatória",
                "ser complementar às jurisdições nacionais, julgando indivíduos (não Estados) pelos crimes mais graves",
                "substituir integralmente os tribunais nacionais sempre que houver crime internacional",
                "atuar como instância recursal das cortes constitucionais dos Estados-partes",
                "processar apenas chefes de Estado em exercício, afastadas as demais autoridades"
              ],
              correta: 1,
              explicacao: "O TPI julga INDIVÍDUOS (não Estados) por genocídio, crimes contra a humanidade, crimes de guerra e agressão, sob o princípio da COMPLEMENTARIDADE: só atua quando o Estado não quer ou não pode processar. A irrelevância da função oficial afasta imunidades de chefes de Estado, mas não restringe o Tribunal a eles."
            },
            {
              id: "sg-6", modo: "lei", fonte: "OPCAT; Lei 12.847/2013",
              enunciado: "O Protocolo Facultativo à Convenção da ONU contra a Tortura (OPCAT) levou o Brasil a criar:",
              alternativas: [
                "a Comissão Nacional da Verdade, destinada a apurar as violações do período autoritário",
                "o Mecanismo Nacional de Prevenção e Combate à Tortura, cujos peritos visitam locais de privação de liberdade",
                "o Conselho Nacional de Justiça, com atribuição correicional sobre o sistema prisional",
                "a Ouvidoria Nacional de Direitos Humanos, órgão vinculado ao Ministério Público Federal",
                "o Departamento Penitenciário Nacional, órgão gestor do fundo penitenciário federal"
              ],
              correta: 1,
              explicacao: "O OPCAT exige mecanismos preventivos nacionais de visitação. A Lei 12.847/2013 instituiu o Sistema Nacional de Prevenção e Combate à Tortura, com o MNPCT — peritos com acesso a quaisquer locais de privação de liberdade, e o Comitê Nacional (CNPCT). Tema do edital ('órgãos nacionais e internacionais de monitoramento') e conectado ao Protocolo de Istambul."
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
        },
        {
          id: "defensoria-2",
          titulo: "Acesso à justiça e modelos de assistência",
          questoes: [
            {
              id: "aj-1", modo: "caso", fonte: "Cappelletti e Garth, Acesso à Justiça",
              enunciado: "Na clássica sistematização de Cappelletti e Garth, as três 'ondas renovatórias' do acesso à justiça são:",
              alternativas: [
                "gratuidade universal, duplo grau obrigatório e execução célere das decisões judiciais",
                "assistência aos pobres, tutela dos interesses coletivos e o novo enfoque de acesso (meios alternativos e simplificação)",
                "informatização do processo, criação de súmulas vinculantes e instalação de juizados de pequenas causas",
                "acesso físico aos tribunais, publicidade dos julgamentos e fundamentação das decisões",
                "constitucionalização, internacionalização e privatização da prestação jurisdicional"
              ],
              correta: 1,
              explicacao: "As três ondas de Cappelletti e Garth: (1ª) assistência judiciária aos pobres; (2ª) representação dos interesses difusos e coletivos; (3ª) o 'novo enfoque de acesso à justiça' — meios alternativos de solução de conflitos, simplificação de procedimentos e reforma das instituições. Base teórica de toda a matéria institucional (Ponto V do edital)."
            },
            {
              id: "aj-2", modo: "caso", fonte: "Modelos de assistência jurídica",
              enunciado: "O modelo brasileiro de assistência jurídica pela Defensoria Pública corresponde ao sistema:",
              alternativas: [
                "judicare, em que advogados privados atendem os pobres e são remunerados pelo Estado caso a caso",
                "salaried staff (agentes públicos remunerados pelo Estado, organizados em carreira própria)",
                "pro bono, fundado no dever honorífico e caritativo da advocacia privada",
                "misto obrigatório, com rodízio compulsório e gratuito entre os advogados inscritos na OAB",
                "de seguros de despesas jurídicas, custeado por contribuições periódicas dos usuários"
              ],
              correta: 1,
              explicacao: "O Brasil adotou o modelo do SALARIED STAFF: agentes públicos (defensores) remunerados pelos cofres públicos, em carreira organizada — modelo público institucional consagrado no art. 134 da CF. No judicare, advogados privados são pagos pelo Estado caso a caso; no pro bono, a assistência é honorífica. A análise do desenvolvimento do salaried staff na América Latina consta do edital."
            },
            {
              id: "aj-3", modo: "lei", fonte: "CPC, arts. 98 e 99",
              enunciado: "Sobre a gratuidade de justiça (arts. 98 e 99 do CPC), é correto afirmar que:",
              alternativas: [
                "a pessoa jurídica jamais pode obtê-la, ainda que demonstre a impossibilidade de pagar as despesas",
                "a alegação de insuficiência de pessoa natural presume-se verdadeira, só cabendo indeferir se houver elementos em contrário",
                "exige a comprovação documental prévia da renda, inclusive para a pessoa natural",
                "extingue a obrigação pelos honorários de sucumbência, que não podem mais ser cobrados",
                "depende de requerimento em petição autônoma, vedada a formulação incidental"
              ],
              correta: 1,
              explicacao: "Art. 99, §3º, do CPC: presume-se verdadeira a alegação de insuficiência deduzida por PESSOA NATURAL; o juiz só indefere se houver nos autos elementos que evidenciem a falta dos pressupostos (§2º). Pessoa jurídica pode obter o benefício, demonstrando a impossibilidade (Súmula 481/STJ). Os honorários de sucumbência ficam sob condição suspensiva por 5 anos (art. 98, §3º) — não são extintos de imediato."
            },
            {
              id: "aj-4", modo: "caso", fonte: "História da Defensoria no RJ",
              enunciado: "No desenvolvimento histórico da assistência jurídica no Brasil, o Estado do Rio de Janeiro destaca-se por:",
              alternativas: [
                "ter criado a sua Defensoria somente após a EC 80/2014, seguindo o modelo federal",
                "ter sido pioneiro na estruturação da Defensoria Pública, que serviu de referência ao modelo constitucional de 1988",
                "ter adotado originalmente o modelo judicare, com advogados dativos pagos por certidão",
                "ter mantido a Defensoria como órgão vinculado à Secretaria de Justiça até os dias atuais",
                "ter delegado a assistência judiciária à OAB, mediante convênio remunerado por ato praticado"
              ],
              correta: 1,
              explicacao: "O Rio de Janeiro é o berço da Defensoria Pública brasileira: a estruturação pioneira da carreira fluminense (desde os cargos de defensor público de meados do século XX e a consolidação na LC estadual 06/1977) serviu de referência ao desenho do art. 134 da CF/88. Tema central na obra de Diogo Esteves, examinador da Banca III."
            },
            {
              id: "aj-5", modo: "lei", fonte: "LC 80/94, art. 4º-A",
              enunciado: "A LC 80/94 (art. 4º-A, incluído pela LC 132/2009) assegura aos assistidos da Defensoria Pública, entre outros direitos:",
              alternativas: [
                "a livre escolha, a qualquer tempo, do defensor público de sua preferência na unidade",
                "o patrocínio de seus direitos e interesses pelo DEFENSOR NATURAL e a qualidade e eficiência do atendimento",
                "o atendimento domiciliar obrigatório e prioritário a todas as pessoas maiores de sessenta anos",
                "a dispensa incondicionada de custas em qualquer processo, sem análise de renda",
                "a indenização automática pelos prejuízos decorrentes do indeferimento da assistência"
              ],
              correta: 1,
              explicacao: "Art. 4º-A da LC 80/94: são direitos dos assistidos a informação, a qualidade e a eficiência do atendimento, o direito de ter sua pretensão revista em caso de recusa de atuação e o patrocínio pelo DEFENSOR NATURAL (vedada a designação casuística). Defensor natural não se confunde com livre escolha do profissional."
            },
            {
              id: "aj-6", modo: "lei", fonte: "EC 80/2014; ADCT, art. 98",
              enunciado: "A EC 80/2014, marco do modelo constitucional da Defensoria, estabeleceu, entre outras inovações:",
              alternativas: [
                "a transformação da Defensoria em órgão do Poder Judiciário, com autonomia administrativa",
                "o prazo de 8 anos para haver defensores em todas as unidades jurisdicionais, priorizando as regiões de maior exclusão social",
                "a equiparação remuneratória automática e imediata entre defensores públicos e membros do Ministério Público",
                "a exclusividade da Defensoria para o ajuizamento de ações coletivas em favor de vulneráveis",
                "a criação da Defensoria Pública Nacional, com hierarquia sobre os órgãos estaduais"
              ],
              correta: 1,
              explicacao: "A EC 80/2014 deu seção própria à Defensoria, reescreveu o art. 134 (expressão e instrumento do regime democrático), mandou aplicar-lhe princípios do art. 93 e inseriu o art. 98 do ADCT: no prazo de 8 anos, defensores públicos em todas as unidades jurisdicionais, priorizadas as regiões com maiores índices de exclusão social e adensamento populacional."
            }
          ]
        }
      ]
    }
  ]
};

/* Paleta por unidade (usada no CSS via data-cor) */
window.APP_CORES = ["roxo", "verde", "rosa", "azul", "laranja", "ciano"];
