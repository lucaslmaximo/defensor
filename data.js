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
    fase: "Objetiva · Bancas I, II e III"
  },

  // Cada unidade = um tópico da trilha; cada lição = um bloco de questões.
  units: [
    /* ---------------------------------------- PARTE GERAL (CIVIL) */
    {
      id: "parte-geral",
      titulo: "Parte Geral do Direito Civil",
      materia: "Direito Civil",
      banca: "I",
      icone: "📖",
      cor: "grafite",
      descricao: "Prescrição e decadência, negócios jurídicos, personalidade e desconsideração.",
      licoes: [
        {
          id: "parte-geral-1",
          titulo: "Prescrição, invalidades e personalidade",
          questoes: [
            {
              id: "pg-1", modo: "lei", fonte: "CC, arts. 205 e 206, §3º, V",
              enunciado: "A pretensão de reparação civil (responsabilidade extracontratual) prescreve em:",
              alternativas: [
                "dez anos, pois a reparação civil não tem prazo próprio e se submete sempre ao prazo geral e residual do art. 205 do Código Civil",
                "três anos: há prazo específico que afasta o geral de dez anos, o qual é residual e só incide na falta de previsão menor",
                "cinco anos, prazo que o Código Civil reserva de modo uniforme às pretensões condenatórias entre particulares, aí incluída a reparação de danos",
                "dois anos, prazo que o Código Civil fixa para toda pretensão indenizatória, seja ela de origem contratual ou extracontratual",
                "não se sujeita a prazo prescricional, por envolver lesão a direito da personalidade, que a doutrina reputa imprescritível"
              ],
              correta: 1,
              explicacao: "O art. 206, §3º, V, do CC fixa em 3 anos a prescrição da pretensão de reparação civil. O prazo de 10 anos do art. 205 é residual: só incide quando a lei não fixa prazo menor. Atenção à exceção do STJ: no inadimplemento CONTRATUAL aplica-se o prazo de 10 anos (EREsp 1.280.825) — os 3 anos valem para a responsabilidade extracontratual."
            },
            {
              id: "pg-2", modo: "lei", fonte: "CC, arts. 3º e 198, I",
              enunciado: "Quanto ao curso do prazo prescricional em face de menores de idade:",
              alternativas: [
                "a prescrição corre normalmente contra qualquer menor de idade, que se acha resguardado pela atuação de seu representante ou assistente legal",
                "a prescrição não corre contra nenhum menor de dezoito anos, pois a incapacidade civil, absoluta ou relativa, impede o curso do prazo",
                "a prescrição não corre contra o menor de dezesseis anos (absolutamente incapaz), mas corre contra o que tem entre dezesseis e dezoito",
                "a prescrição fica suspensa até que o titular complete vinte e um anos, idade da antiga maioridade civil do Código de 1916",
                "apenas a decadência, e não a prescrição, deixa de correr contra os menores que sejam absolutamente incapazes"
              ],
              correta: 2,
              explicacao: "Art. 198, I, c/c art. 3º do CC: não corre a prescrição contra os absolutamente incapazes — hoje, apenas os menores de 16 anos. O relativamente incapaz (16 a 18) não tem essa proteção: contra ele a prescrição corre, restando-lhe ação regressiva contra o assistente que der causa à perda do prazo (art. 195)."
            },
            {
              id: "pg-3", modo: "lei", fonte: "CC, arts. 167 e 169",
              enunciado: "Sobre o negócio jurídico simulado, é correto afirmar que:",
              alternativas: [
                "é anulável no prazo decadencial de quatro anos, contado da data em que se celebrou o negócio simulado",
                "é válido e eficaz entre as próprias partes, sendo inoponível apenas perante terceiros de boa-fé prejudicados",
                "convalesce e se torna plenamente válido se não for impugnado no prazo prescricional de dez anos",
                "é nulo (vício alegável a qualquer tempo), mas subsiste o negócio dissimulado, se válido na substância e na forma",
                "é juridicamente inexistente, não produzindo efeito algum, nem mesmo quanto ao eventual negócio que se dissimulou"
              ],
              correta: 3,
              explicacao: "Art. 167 do CC: é NULO o negócio simulado, mas subsistirá o que se dissimulou, se válido na substância e na forma (simulação relativa). Art. 169: o nulo não é suscetível de confirmação nem convalesce pelo decurso do tempo. O prazo de 4 anos é dos negócios ANULÁVEIS (art. 178) — desde 2002 a simulação é causa de nulidade, não de anulabilidade."
            },
            {
              id: "pg-4", modo: "lei", fonte: "CC, arts. 171, II, e 178, I",
              enunciado: "Assinada uma confissão de dívida sob coação, o negócio jurídico é:",
              alternativas: [
                "nulo de pleno direito e insuscetível de confirmação, por faltar-lhe manifestação livre de vontade",
                "anulável em quatro anos contados do dia em que cessar a coação — e não da data da celebração",
                "anulável no prazo decadencial de quatro anos, contado sempre da assinatura do instrumento de confissão",
                "plenamente válido e eficaz, desde que a dívida objeto da confissão realmente exista e seja exigível",
                "ineficaz enquanto não sobrevier a homologação judicial da confissão de dívida firmada pelas partes"
              ],
              correta: 1,
              explicacao: "Coação gera ANULABILIDADE (art. 171, II). O prazo é de 4 anos (art. 178), mas o termo inicial da coação é peculiar: conta do dia em que ela cessar (art. 178, I). Nos demais defeitos (erro, dolo, fraude contra credores, estado de perigo e lesão), conta do dia em que se realizou o negócio (inciso II)."
            },
            {
              id: "pg-5", modo: "lei", fonte: "CC, art. 50; CDC, art. 28, §5º",
              enunciado: "Sobre a desconsideração da personalidade jurídica no direito brasileiro:",
              alternativas: [
                "basta a mera insolvência ou o simples inadimplemento da pessoa jurídica para desconsiderá-la, em qualquer espécie de relação jurídica",
                "o CDC condiciona a desconsideração à prova do desvio de finalidade ou da confusão patrimonial, nos mesmos termos exigidos pelo Código Civil",
                "a desconsideração acarreta a dissolução e a extinção definitiva da pessoa jurídica cujo abuso de personalidade se reconheceu",
                "somente pode ser decretada em ação autônoma proposta em face dos sócios, jamais de forma incidental no curso do processo",
                "no Código Civil vige a teoria maior (abuso por desvio de finalidade ou confusão); no CDC, a teoria menor: basta a personalidade ser obstáculo ao ressarcimento"
              ],
              correta: 4,
              explicacao: "Art. 50 do CC (teoria maior): abuso da personalidade caracterizado por desvio de finalidade ou confusão patrimonial. Art. 28, §5º, do CDC (teoria menor, STJ, REsp 279.273): basta o obstáculo ao ressarcimento. A desconsideração é episódica — não extingue a pessoa jurídica, apenas estende os efeitos de certas obrigações aos sócios/administradores, e pode ser requerida incidentalmente (CPC, arts. 133-137)."
            },
            {
              id: "pg-6", modo: "lei", fonte: "CC, art. 11; Enunciado 4 da I Jornada",
              enunciado: "Os direitos da personalidade são intransmissíveis e irrenunciáveis. Quanto ao seu exercício:",
              alternativas: [
                "não admite nenhuma espécie de limitação, sequer a voluntária, por se tratar de direito absolutamente indisponível",
                "pode ser cedido de forma definitiva e irrevogável, desde que a cessão se faça por escritura pública",
                "pode sofrer limitação voluntária (como na cessão de uso da imagem), desde que não seja permanente nem geral",
                "só pode ser objeto de limitação mediante decisão judicial específica e devidamente fundamentada",
                "comporta renúncia válida por seu titular sempre que essa renúncia for onerosa, isto é, remunerada"
              ],
              correta: 2,
              explicacao: "Art. 11 do CC: salvo os casos previstos em lei, os direitos da personalidade são intransmissíveis e irrenunciáveis, e seu exercício não pode sofrer limitação voluntária. A doutrina (Enunciado 4 da I Jornada de Direito Civil) tempera a literalidade: admite-se limitação voluntária do EXERCÍCIO, desde que não permanente nem geral — é o que legitima, por exemplo, os contratos de licença de uso de imagem."
            },
            {
              id: "pg-7", modo: "lei", fonte: "LINDB, art. 6º; CF, art. 5º, XXXVI",
              enunciado: "Uma lei nova entra em vigor alterando o regime jurídico de certo contrato. Essa lei:",
              alternativas: [
                "aplica-se imediatamente, inclusive desfazendo efeitos já produzidos sob a lei anterior",
                "tem efeito imediato e geral, mas deve respeitar o ato jurídico perfeito, o direito adquirido e a coisa julgada",
                "pode retroagir livremente, desde que o diga de forma expressa, ainda que prejudique direito adquirido",
                "jamais alcança contratos em curso, qualquer que seja o aspecto regulado",
                "só entra em vigor após regulamentação pelo Executivo"
              ],
              correta: 1,
              explicacao: "Art. 6º da LINDB: a lei em vigor tem efeito imediato e geral, respeitados o ato jurídico perfeito, o direito adquirido e a coisa julgada — proteção que também é constitucional (art. 5º, XXXVI, da CF). Retroatividade exige previsão expressa E não pode ofender essa tríade."
            }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------- 1. SUCESSÕES */
    {
      id: "sucessoes",
      titulo: "Sucessões",
      materia: "Direito Civil",
      banca: "I",
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
        },
        {
          id: "sucessoes-2",
          titulo: "Renúncia, exclusão, colação e inventário",
          questoes: [
            {
              id: "suc2-1", modo: "lei", fonte: "CC, arts. 1.804 e 1.806",
              enunciado: "Sobre a renúncia da herança, é correto afirmar que:",
              alternativas: [
                "pode ser feita verbalmente perante o inventariante e duas testemunhas idôneas, reduzindo-se a termo nos autos do inventário em até trinta dias para produzir efeitos perante terceiros",
                "deve constar expressamente de instrumento público ou termo judicial, presumindo-se que o renunciante nunca foi herdeiro, com efeitos retroativos à abertura da sucessão",
                "admite condição ou termo, desde que expressamente aprovados pelo juiz do inventário após a oitiva dos demais herdeiros interessados",
                "pode ser parcial, limitada a alguns bens da herança",
                "retira o quinhão do renunciante, que passa a integrar a meação do cônjuge"
              ],
              correta: 1,
              explicacao: "Art. 1.806: a renúncia exige forma solene (escritura pública ou termo nos autos), não admitindo forma verbal. Art. 1.804, parágrafo único: renunciada a herança, tem-se o renunciante por nunca havê-la possuído — efeito retroativo. E a renúncia é ato indivisível: não cabe renúncia parcial nem sob condição/termo (art. 1.808)."
            },
            {
              id: "suc2-2", modo: "lei", fonte: "CC, arts. 1.810 e 1.811",
              enunciado: "Quando o herdeiro renuncia à herança, o direito de representação em favor de seus descendentes:",
              alternativas: [
                "opera normalmente: os netos herdam por representação do renunciante, recebendo por estirpe exatamente o quinhão que a ele caberia se não houvesse renunciado, tal como ocorre na hipótese de premoriência do herdeiro",
                "não se aplica: ninguém pode suceder representando herdeiro renunciante, mas os filhos do renunciante podem herdar por direito próprio (por cabeça), se forem os únicos da classe, ou por sua conta",
                "fica suspenso até a partilha final dos bens",
                "transfere-se automaticamente ao cônjuge do renunciante",
                "depende de autorização judicial específica"
              ],
              correta: 1,
              explicacao: "Art. 1.811: não se representa o renunciante — a representação existe na premoriência e na exclusão por indignidade/deserdação, não na renúncia. Mas os descendentes do renunciante não ficam desamparados: podem herdar por direito próprio e por cabeça (art. 1.810), se chamados na sua classe. Diferença fina que a FGV explora."
            },
            {
              id: "suc2-3", modo: "lei", fonte: "CC, arts. 1.814 e 1.816",
              enunciado: "Sobre a exclusão do herdeiro por indignidade:",
              alternativas: [
                "opera de forma automática com a simples prática do ato de indignidade, independentemente de sentença, bastando a prova do fato no curso do próprio inventário",
                "depende de sentença em ação própria, e seus efeitos são pessoais: os descendentes do excluído herdam por representação, como se ele fosse morto",
                "atinge também os descendentes do herdeiro indigno, que ficam igualmente privados da herança em razão do caráter familiar da sanção civil",
                "só pode ser pedida pelo Ministério Público",
                "impede o excluído de administrar os bens que os filhos herdarem em seu lugar"
              ],
              correta: 1,
              explicacao: "Art. 1.815: a exclusão exige sentença (ação em até 4 anos da abertura da sucessão). Art. 1.816: os efeitos são pessoais — os descendentes do indigno herdam por representação, como se ele fosse morto antes da abertura. Ressalva importante: o excluído não terá direito ao usufruto ou à administração dos bens que couberem a seus filhos, nem à sucessão eventual deles (parágrafo único)."
            },
            {
              id: "suc2-4", modo: "lei", fonte: "CC, arts. 2.002 e 2.003",
              enunciado: "A colação, no inventário, consiste no dever de:",
              alternativas: [
                "trazer à partilha todos os bens do espólio, inclusive os que o falecido alienou em vida a terceiros, cujos negócios ficam sujeitos a redução pelo inventariante",
                "os descendentes que concorrem à sucessão conferirem o valor das doações que receberam em vida do ascendente, para igualar as legítimas dos herdeiros necessários",
                "pagar as dívidas deixadas pelo falecido antes de qualquer partilha, na ordem legal de preferência dos credores habilitados",
                "reservar a quota do herdeiro ausente até seu aparecimento",
                "restituir em espécie todos os bens doados, sob pena de sonegação"
              ],
              correta: 1,
              explicacao: "Arts. 2.002 a 2.003: colação é o retorno (conferência) do valor das doações feitas em vida aos descendentes, para igualar as legítimas. Presume-se que a doação de pais a filhos é adiantamento da legítima (art. 544). Fica dispensada a colação quando o doador determinou que a doação saísse da parte disponível (art. 2.005). Pela regra atual (art. 2.004), colaciona-se o valor ao tempo da doação, não o bem em espécie."
            },
            {
              id: "suc2-5", modo: "lei", fonte: "CC, art. 1.992",
              enunciado: "O herdeiro que sonega bens da herança — ocultando-os dolosamente do inventário — sofre a pena de:",
              alternativas: [
                "multa civil de dez por cento sobre o valor dos bens ocultados, revertida proporcionalmente em favor dos demais herdeiros prejudicados",
                "perder o direito que sobre os bens sonegados lhe cabia, além de responder pela sua restituição ou pelo equivalente",
                "responder apenas na esfera criminal pela ocultação dolosa, sem qualquer consequência de natureza sucessória no inventário",
                "ter suspensa a sua condição de herdeiro por cinco anos",
                "pagar em dobro o valor dos bens, revertido ao Estado"
              ],
              correta: 1,
              explicacao: "Art. 1.992: a pena de sonegados é a perda do direito sobre os bens sonegados (não sobre toda a herança). Se o sonegador for o inventariante, será removido (art. 1.993). A pena só se aplica após a declaração de que não existem outros bens a inventariar — antes disso, não há sonegação caracterizada (STJ)."
            },
            {
              id: "suc2-6", modo: "lei", fonte: "CPC, art. 610, §1º; CC, art. 2.015",
              enunciado: "O inventário e a partilha podem ser feitos por escritura pública, em cartório, quando:",
              alternativas: [
                "houver herdeiro menor de idade, desde que devidamente assistido pelos pais e com a concordância expressa do Ministério Público no ato notarial",
                "todos os interessados forem capazes e concordes e não houver testamento — hipótese em que a via extrajudicial é uma faculdade, e não obrigatória",
                "o valor total do espólio inventariado não ultrapassar o teto legal de mil salários mínimos vigentes na data da abertura",
                "houver acordo dos herdeiros, ainda que exista incapaz entre eles",
                "o inventariante requerer, independentemente de consenso"
              ],
              correta: 1,
              explicacao: "Art. 610, §1º, do CPC: escritura pública se todos capazes e concordes e sem testamento — com participação obrigatória de advogado. É via facultativa (o STJ admite inclusive inventário extrajudicial havendo testamento, se todos capazes/concordes e com autorização judicial ou do juízo sucessório). Havendo incapaz ou litígio, a via judicial é obrigatória."
            },
            {
              id: "suc2-7", modo: "juris", fonte: "CC, art. 1.829, I; STJ, REsp 1.368.123",
              enunciado: "No regime da comunhão parcial de bens, concorrendo o cônjuge sobrevivente com os descendentes, o cônjuge:",
              alternativas: [
                "herda em concorrência com os descendentes sobre a totalidade dos bens deixados pelo falecido, comuns e particulares, além da sua meação",
                "não concorre em hipótese alguma com os descendentes, ficando apenas com a meação que já lhe pertencia por força do regime de bens",
                "concorre com os descendentes apenas quanto aos bens particulares do falecido, não sobre os bens comuns (dos quais já é meeiro)",
                "concorre com os descendentes apenas sobre os bens comuns do casal, ficando os bens particulares reservados só aos descendentes",
                "herda a totalidade dos bens, excluindo os descendentes"
              ],
              correta: 2,
              explicacao: "Art. 1.829, I: na comunhão parcial, havendo bens particulares do falecido, o cônjuge concorre com os descendentes SOBRE ESSES bens particulares (posição consolidada no STJ, REsp 1.368.123). Sobre os bens comuns ele já tem a meação — não herda em concorrência. É um dos pontos mais cobrados de sucessões: separar meação (metade que já é do cônjuge) de herança (concorrência sobre os particulares)."
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
      banca: "I",
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
      banca: "I",
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
        },
        {
          id: "familia-regime-2",
          titulo: "Guarda, alimentos e filiação",
          questoes: [
            {
              id: "gaf-1", modo: "lei", fonte: "CC, art. 1.584, §2º",
              enunciado: "Não havendo acordo entre os genitores quanto à guarda do filho:",
              alternativas: [
                "o juiz aplicará a guarda unilateral em favor da mãe, por presunção legal fundada no melhor interesse da criança de tenra idade, salvo prova de inaptidão materna",
                "será aplicada a guarda compartilhada, mesmo sem consenso — salvo se um dos genitores declarar que não deseja a guarda ou se um deles for inapto ao exercício do poder familiar",
                "a guarda compartilhada só é possível mediante acordo dos genitores homologado em juízo, pois pressupõe convivência harmoniosa entre eles",
                "o juiz decidirá sempre pela guarda alternada, com residências sucessivas",
                "a guarda ficará com quem detiver melhores condições financeiras"
              ],
              correta: 1,
              explicacao: "Art. 1.584, §2º, do CC (redação da Lei 13.058/2014): a guarda compartilhada é a REGRA, aplicável inclusive sem consenso entre os pais. Exceções: genitor que declara não desejar a guarda ou inaptidão para o poder familiar. Não confunda compartilhada (decisões conjuntas) com alternada (revezamento de residência), que não tem previsão legal como regra."
            },
            {
              id: "gaf-2", modo: "lei", fonte: "Lei 12.318/2010, arts. 2º e 6º",
              enunciado: "Caracterizada a alienação parental, o juiz poderá, conforme a gravidade:",
              alternativas: [
                "apenas advertir formalmente o alienador na primeira ocorrência, pois a aplicação das demais medidas legais depende do ajuizamento de ação autônoma específica, com instrução probatória própria",
                "decretar automaticamente a perda do poder familiar do genitor alienador, sanção máxima que a lei reserva para os casos em que a conduta se mostrar reiterada ou grave",
                "aplicar medidas cumulativas ou não — da advertência à ampliação da convivência em favor do genitor alienado, multa, acompanhamento psicológico, alteração da guarda para compartilhada ou sua inversão —, sem prejuízo da responsabilidade civil ou criminal",
                "somente encaminhar as partes à mediação familiar obrigatória, etapa prévia que a lei exige antes de qualquer providência judicial",
                "suspender de imediato e por prazo indeterminado todo e qualquer contato entre a criança e o genitor apontado como alienador"
              ],
              correta: 2,
              explicacao: "Art. 6º da Lei 12.318/2010 traz rol progressivo de medidas (I a VII). A perda do poder familiar NÃO está entre elas — a Lei 14.340/2022 substituiu a antiga suspensão da autoridade parental por medidas menos drásticas nesse rol. Alienação parental é ato de interferência na formação psicológica promovido por quem tenha a criança sob sua autoridade (art. 2º)."
            },
            {
              id: "gaf-3", modo: "lei", fonte: "CPC, art. 528, §§3º e 7º; STJ, Súmula 309",
              enunciado: "No cumprimento de sentença de alimentos pelo rito da prisão:",
              alternativas: [
                "podem ser cobradas pelo rito prisional todas as prestações vencidas e não pagas, ainda que antigas, dado o caráter alimentar e urgente da verba executada",
                "o débito que autoriza a prisão é o das 3 (três) prestações anteriores ao ajuizamento e das que vencerem no curso do processo; a prisão é cumprida em regime fechado, separado dos presos comuns",
                "a prisão civil do devedor de alimentos pode durar até um ano, prorrogável por igual período enquanto persistir o inadimplemento voluntário",
                "o pagamento parcial da dívida impede a decretação da prisão",
                "prestações antigas não podem mais ser cobradas por nenhum rito"
              ],
              correta: 1,
              explicacao: "Art. 528, §7º, do CPC (positivou a Súmula 309/STJ): débito atual = 3 prestações anteriores ao ajuizamento + vincendas. Prisão de 1 a 3 meses, regime fechado, preso separado dos comuns (§§3º e 4º). As prestações mais antigas não se perdem: cobram-se pelo rito da expropriação (§8º) — só não autorizam prisão. E o cumprimento da pena não exime o devedor das prestações (§5º)."
            },
            {
              id: "gaf-4", modo: "lei", fonte: "Lei 11.804/2008, arts. 2º e 6º",
              enunciado: "Sobre os alimentos gravídicos:",
              alternativas: [
                "exigem a prova pericial da paternidade ainda durante a gestação, mediante exame de DNA realizado por técnica não invasiva a partir do sangue materno, sem o qual o pedido deve ser liminarmente indeferido por ausência de pressuposto legal específico da ação",
                "são fixados diante de indícios de paternidade, cobrem as despesas do período de gravidez (alimentação, assistência médica, parto) e, após o nascimento com vida, convertem-se em pensão alimentícia em favor da criança até eventual revisão",
                "cessam automaticamente com o parto, cabendo ao representante da criança ajuizar nova ação de alimentos para o período posterior ao nascimento",
                "só podem ser pedidos após o sexto mês de gestação, quando presumida a viabilidade do nascituro",
                "são devidos exclusivamente pelo suposto pai, vedado considerar recursos da gestante"
              ],
              correta: 1,
              explicacao: "Lei 11.804/2008: basta a convicção por INDÍCIOS de paternidade (art. 6º) — sem exame invasivo na gestação. Os alimentos referem-se à parcela das despesas da gravidez (art. 2º) e consideram as possibilidades de AMBOS os genitores. Após o nascimento com vida, convertem-se automaticamente em pensão em favor do filho (art. 6º, parágrafo único), sem necessidade de nova ação."
            },
            {
              id: "gaf-5", modo: "juris", fonte: "STF, Tema 622 (RE 898.060)",
              enunciado: "Quanto à filiação socioafetiva e à biológica, o STF fixou que:",
              alternativas: [
                "a paternidade socioafetiva, quando consolidada na posse do estado de filho, prevalece sempre sobre a biológica, extinguindo qualquer pretensão fundada na origem genética",
                "a paternidade biológica, por decorrer do vínculo genético, prevalece sempre sobre a socioafetiva, que fica desconstituída com o resultado do exame de DNA",
                "a paternidade socioafetiva, declarada ou não em registro público, não impede o reconhecimento do vínculo de filiação concomitante baseado na origem biológica, com todos os efeitos jurídicos próprios — admitida a multiparentalidade",
                "o reconhecimento judicial do vínculo biológico concomitante gera apenas efeitos patrimoniais e alimentares, jamais efeitos registrais ou de nome",
                "a multiparentalidade é vedada no direito brasileiro"
              ],
              correta: 2,
              explicacao: "Tese do Tema 622/STF: as duas filiações podem COEXISTIR (multiparentalidade), com efeitos plenos — nome, alimentos e herança em relação a todos os pais. Não há hierarquia abstrata entre socioafetividade e biologia. Consequência prática: o filho pode ter dois pais no registro e cobrar alimentos de ambos."
            },
            {
              id: "gaf-6", modo: "lei", fonte: "Lei 8.560/92, art. 2º-A, parágrafo único; STJ, Súmula 301",
              enunciado: "Na ação de investigação de paternidade, a recusa do suposto pai em se submeter ao exame de DNA:",
              alternativas: [
                "implica confissão ficta dos fatos alegados e a consequente procedência automática do pedido investigatório, independentemente de outras provas",
                "é direito absoluto do investigado, amparado na garantia de não produzir prova contra si, nada podendo o juiz extrair do seu silêncio",
                "autoriza o juiz a determinar a condução coercitiva do investigado para a coleta compulsória do material genético necessário ao exame",
                "gera presunção relativa de paternidade, a ser apreciada em conjunto com o contexto probatório — não podendo, sozinha, fundamentar a procedência",
                "transfere aos avós paternos o dever de se submeterem ao exame, presumindo-se a paternidade se também eles se recusarem"
              ],
              correta: 3,
              explicacao: "Súmula 301/STJ e art. 2º-A, parágrafo único, da Lei 8.560/92: a recusa gera presunção juris tantum, apreciada com as demais provas (relacionamento à época da concepção etc.). Ninguém é obrigado a fornecer material genético (direito à integridade), mas o silêncio tem custo probatório. A presunção é relativa: exige contexto, não vale isolada."
            },
            {
              id: "gaf-7", modo: "juris", fonte: "CC, art. 1.698; STJ, Súmula 596",
              enunciado: "A obrigação alimentar dos avós em relação aos netos:",
              alternativas: [
                "é solidária com a dos pais, podendo o credor alimentar escolher livremente contra quem demandar, como ocorre com os alimentos devidos à pessoa idosa",
                "tem natureza complementar e subsidiária: só se configura demonstrada a impossibilidade total ou parcial dos genitores de cumprir a obrigação",
                "inexiste no ordenamento brasileiro, pois a obrigação alimentar decorrente do parentesco limita-se à relação direta entre pais e filhos",
                "é automática quando o pai atrasa qualquer prestação",
                "limita-se aos avós paternos"
              ],
              correta: 1,
              explicacao: "Súmula 596/STJ: a obrigação avoenga é complementar e subsidiária — pressupõe o esgotamento (total ou parcial) da capacidade dos pais. Não é solidária: primeiro se demanda dos genitores. Exceção da solidariedade existe, sim, quando o CREDOR é pessoa idosa (Estatuto, art. 12) — cuidado para não inverter os polos."
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
                "deve reduzi-la equitativamente se a obrigação foi cumprida em parte ou se o montante é manifestamente excessivo",
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

    /* ---------------------------------- POSSE E DIREITOS REAIS (CIVIL) */
    {
      id: "posse-reais",
      titulo: "Posse e Direitos Reais",
      materia: "Direito Civil",
      banca: "I",
      icone: "🏠",
      cor: "petroleo",
      descricao: "Usucapião especiais, bem de família, direito de laje e proteção possessória.",
      licoes: [
        {
          id: "posse-reais-1",
          titulo: "Usucapião, bem de família e posse",
          questoes: [
            {
              id: "dr-1", modo: "lei", fonte: "CC, art. 1.240-A",
              enunciado: "Sobre a usucapião familiar (por abandono de lar), é correto afirmar:",
              alternativas: [
                "exige posse ininterrupta de cinco anos sobre imóvel urbano, qualquer que seja a sua metragem, usado para moradia do usucapiente",
                "aplica-se tanto a imóveis urbanos de até 250m² quanto a imóveis rurais de até cinquenta hectares abandonados pelo ex-cônjuge",
                "exige posse exclusiva por dois anos de imóvel urbano de até 250m² antes dividido com ex-cônjuge que abandonou o lar, usado para moradia, sem outro imóvel do usucapiente",
                "pode ser invocada repetidas vezes pelo mesmo possuidor, a cada nova separação de que resulte abandono do lar conjugal",
                "dispensa o efetivo abandono do lar, bastando a mera separação de fato do casal para que o prazo comece a correr"
              ],
              correta: 2,
              explicacao: "Art. 1.240-A do CC: é o menor prazo de usucapião do sistema (2 anos), e acumula requisitos — imóvel URBANO de até 250m², copropriedade com ex-cônjuge/companheiro que ABANDONOU o lar, moradia própria ou da família, ausência de outro imóvel e reconhecimento único ao mesmo possuidor (§1º)."
            },
            {
              id: "dr-2", modo: "lei", fonte: "CF, art. 191; CC, art. 1.239",
              enunciado: "A usucapião especial rural (pro labore) exige:",
              alternativas: [
                "posse mansa e pacífica pelo prazo de dez anos, acompanhada de justo título e boa-fé do possuidor, nos mesmos moldes exigidos para a usucapião ordinária de imóveis urbanos",
                "posse ininterrupta de cinco anos, sem oposição, de área rural de até cinquenta hectares, tornada produtiva pelo trabalho do possuidor ou de sua família, que nela more, sem outro imóvel",
                "apenas a posse quinquenal da área rural, dispensada a exigência de que a terra seja tornada produtiva pelo trabalho",
                "posse de cinco anos somada à comprovação de renda familiar mensal inferior a um salário mínimo vigente",
                "posse quinquenal precedida do cadastramento do possuidor perante o cartório de registro de imóveis da comarca"
              ],
              correta: 1,
              explicacao: "CF, art. 191, e CC, art. 1.239: a modalidade dispensa justo título e boa-fé, mas soma requisitos — 5 anos + até 50ha + produtividade pelo trabalho + moradia + não ser proprietário de outro imóvel (rural ou urbano). Lembre a exceção absoluta: imóveis PÚBLICOS não se adquirem por usucapião (CF, arts. 183, §3º, e 191, parágrafo único)."
            },
            {
              id: "dr-3", modo: "lei", fonte: "CC, art. 1.238, parágrafo único",
              enunciado: "Na usucapião extraordinária, o prazo de quinze anos cai para dez quando:",
              alternativas: [
                "o possuidor apresentar justo título devidamente registrado no cartório de imóveis competente",
                "o imóvel objeto da posse pertencer ao poder público e encontrar-se em estado de abandono",
                "houver autorização expressa e por escrito do antigo proprietário para a permanência do possuidor",
                "o possuidor houver estabelecido no imóvel sua moradia habitual ou nele realizado obras e serviços produtivos, sempre sem exigir justo título e boa-fé",
                "o possuidor for pessoa idosa, com deficiência ou pertencente a grupo de especial vulnerabilidade social"
              ],
              correta: 3,
              explicacao: "Art. 1.238, parágrafo único, do CC. A usucapião extraordinária dispensa justo título e boa-fé nas duas faixas (15 ou 10 anos com posse-trabalho). Não confunda: a ORDINÁRIA (art. 1.242) exige justo título e boa-fé (10 anos, reduzíveis a 5), e a especial urbana (art. 1.240) exige 5 anos + 250m² + moradia + não ter outro imóvel."
            },
            {
              id: "dr-4", modo: "juris", fonte: "Lei 8.009/90, art. 3º, VII; STF, Tema 1127",
              enunciado: "Quanto à penhora do bem de família do FIADOR de contrato de locação:",
              alternativas: [
                "é vedada em qualquer hipótese, por atingir o direito fundamental à moradia do fiador e de sua família",
                "só é válida na locação residencial, não se admitindo a constrição quando a fiança garante locação comercial",
                "só é válida na locação comercial, dado o caráter empresarial do contrato afiançado pelo garantidor",
                "é válida na locação residencial e na comercial, por exceção legal à impenhorabilidade (STF), sem alcançar o bem de família do próprio locatário devedor",
                "alcança inclusive o imóvel residencial do locatário inadimplente, e não apenas o do fiador garantidor"
              ],
              correta: 3,
              explicacao: "Art. 3º, VII, da Lei 8.009/90 excepciona a impenhorabilidade por obrigação decorrente de fiança em locação. O STF (Tema 1127, RE 1.307.334) declarou constitucional a penhora do bem de família do fiador em locação residencial OU comercial. O paradoxo é assumido pela jurisprudência: o fiador pode perder a moradia; o locatário devedor principal, não."
            },
            {
              id: "dr-5", modo: "lei", fonte: "CC, art. 1.510-A",
              enunciado: "O direito real de laje:",
              alternativas: [
                "atribui ao titular da laje uma fração ideal do terreno e das áreas comuns da construção-base sobre a qual se assenta",
                "constitui unidade imobiliária autônoma na projeção da construção-base (espaço aéreo ou subsolo), com matrícula própria e sem fração ideal do terreno",
                "configura mera detenção precária, tolerada pelo proprietário da construção-base enquanto lhe convier",
                "pressupõe a prévia instituição formal de um condomínio edilício sobre todo o prédio-base",
                "não pode ser alienado nem gravado de forma autônoma pelo seu titular, por ser acessório da construção-base"
              ],
              correta: 1,
              explicacao: "Art. 1.510-A do CC (incluído pela Lei 13.465/2017): o titular da laje pode usar, gozar e dispor de unidade distinta daquela da construção-base, com matrícula própria (§3º). O §4º é a pegadinha clássica: a instituição da laje NÃO implica atribuição de fração ideal de terreno. Instituto criado para a realidade das comunidades — tema caro à Defensoria."
            },
            {
              id: "dr-6", modo: "lei", fonte: "CC, art. 1.210, §§1º e 2º",
              enunciado: "Sobre a autotutela e a defesa da posse:",
              alternativas: [
                "o desforço imediato pode ser exercido a qualquer tempo depois do esbulho, ainda que muito após a perda da posse",
                "somente o proprietário do bem, e não o mero possuidor, pode valer-se do desforço possessório imediato",
                "a alegação de propriedade pelo réu impede a reintegração do possuidor que não seja proprietário da coisa",
                "a autotutela da posse por força própria é integralmente vedada no direito brasileiro, cabendo apenas a via judicial",
                "o possuidor turbado ou esbulhado pode manter-se ou restituir-se por força própria, contanto que o faça logo e sem excesso, e a alegação de propriedade não o obsta"
              ],
              correta: 4,
              explicacao: "Art. 1.210, §1º, do CC: a reação deve ser imediata (contanto que o faça logo) e proporcional (atos que não vão além do indispensável). §2º: não obsta à manutenção ou reintegração a alegação de propriedade ou de outro direito sobre a coisa — é a separação entre os juízos possessório e petitório."
            },
            {
              id: "dr-7", modo: "lei", fonte: "CPC, arts. 554, §1º, e 565",
              enunciado: "Em ação possessória proposta contra grande número de pessoas (litígio coletivo pela posse):",
              alternativas: [
                "todos os ocupantes da área devem ser citados pessoalmente, um a um, sob pena de nulidade absoluta do processo",
                "a citação de todos os ocupantes é dispensada em razão da urgência que caracteriza a tutela possessória coletiva",
                "citam-se pessoalmente os ocupantes achados no local e por edital os demais, com intimação do Ministério Público e, havendo hipossuficientes, da Defensoria Pública",
                "o processo tramita validamente sem qualquer participação do Ministério Público ou da Defensoria Pública",
                "o juiz nomeia um administrador provisório com poderes para representar em juízo o conjunto dos ocupantes"
              ],
              correta: 2,
              explicacao: "Art. 554, §1º, do CPC. E quando o esbulho ou turbação coletivos tiverem mais de ano e dia (força velha), o art. 565 impõe audiência de mediação prévia à concessão da liminar, também com intimação da Defensoria Pública se houver hipossuficientes (§2º) — dispositivos centrais para a defesa possessória de comunidades vulneráveis."
            }
          ]
        },
        {
          id: "posse-reais-2",
          titulo: "REURB, condomínio e vizinhança",
          questoes: [
            {
              id: "dr2-1", modo: "lei", fonte: "Lei 13.465/2017, arts. 13 e 15",
              enunciado: "A Regularização Fundiária Urbana (REURB) prevista na Lei 13.465/2017 divide-se em duas modalidades. Assinale a correta:",
              alternativas: [
                "REURB-S, aplicável a núcleos ocupados por população de alta renda, custeada integralmente pelos beneficiários da regularização",
                "REURB-E, destinada a núcleos de interesse social, com gratuidade dos atos registrais assegurada aos ocupantes de baixa renda",
                "REURB-S, de interesse social, para núcleos ocupados por população de baixa renda, e REURB-E, de interesse específico, para os demais casos",
                "REURB-C, de interesse coletivo, cabível apenas quando o núcleo urbano estiver localizado sobre bens da União ou dos Estados",
                "REURB-J, de natureza judicial, que exige sempre o ajuizamento de ação própria para a titulação dos ocupantes da área"
              ],
              correta: 2,
              explicacao: "Art. 13 da Lei 13.465/2017: REURB-S (interesse social — população de baixa renda, assim declarada pelo Município) e REURB-E (interesse específico — os demais). A distinção importa: na REURB-S há gratuidade dos emolumentos e custas registrais aos beneficiários (art. 13, §1º), enquanto na REURB-E os custos correm por conta dos ocupantes. Tema central da atuação da Defensoria em conflitos fundiários urbanos."
            },
            {
              id: "dr2-2", modo: "lei", fonte: "Lei 13.465/2017, art. 23",
              enunciado: "A legitimação fundiária, instrumento criado pela Lei 13.465/2017, consiste em:",
              alternativas: [
                "contrato de promessa de compra e venda firmado entre o Município e cada um dos ocupantes do núcleo urbano informal",
                "forma originária de aquisição da propriedade a quem detiver área pública ou privada como sua, em núcleo urbano informal consolidado até dezembro de 2016",
                "espécie de usucapião administrativa que depende do transcurso de cinco anos de posse mansa e pacífica do ocupante",
                "direito real de uso concedido a título precário, revogável a qualquer tempo pela administração pública concedente",
                "mera autorização de uso do solo urbano, sem transferência de propriedade, renovável a cada período de dez anos"
              ],
              correta: 1,
              explicacao: "Art. 23 da Lei 13.465/2017: a legitimação fundiária é forma ORIGINÁRIA de aquisição de direito real de propriedade, conferida por ato do poder público a quem ocupa núcleo urbano informal consolidado existente em 22/12/2016. Por ser originária, extingue ônus anteriores (não se confunde com usucapião nem depende de prazo de posse). Diferencia-se da legitimação de POSSE (art. 25), que é ato meramente declaratório e pode converter-se em propriedade."
            },
            {
              id: "dr2-3", modo: "lei", fonte: "CC, art. 1.336, §1º; STJ, Súmula 260",
              enunciado: "Sobre a cobrança de despesas condominiais e as sanções ao condômino inadimplente:",
              alternativas: [
                "o condômino em atraso sujeita-se a multa moratória de até vinte por cento sobre o débito, além dos juros pactuados",
                "as despesas condominiais têm natureza pessoal e não acompanham a unidade quando esta é transferida a novo adquirente",
                "a multa moratória por atraso no pagamento das cotas está limitada a dois por cento sobre o débito, e a convenção não pode elevá-la",
                "o condomínio pode privar o inadimplente do uso das áreas comuns, como piscina e salão de festas, previsto na convenção",
                "a assembleia pode impor multa por conduta antissocial de até o quíntuplo do valor da cota, mediante deliberação de metade dos condôminos"
              ],
              correta: 2,
              explicacao: "Art. 1.336, §1º, do CC: a multa por inadimplemento das cotas condominiais é de, no máximo, 2% — bem abaixo dos 10% do CC/1916, e a convenção não pode ampliá-la. A obrigação é propter rem (acompanha a unidade). O STJ veda o corte do uso de áreas comuns como meio de coerção. A multa por conduta antissocial (art. 1.337, p.ú.) chega ao décuplo do valor da cota e exige deliberação de 3/4 dos demais condôminos — não metade."
            },
            {
              id: "dr2-4", modo: "lei", fonte: "CC, art. 1.331, §§1º e 2º",
              enunciado: "No condomínio edilício, quanto às partes de uso comum e às unidades autônomas:",
              alternativas: [
                "as áreas comuns podem ser livremente alienadas por qualquer condômino, desde que mantida a destinação original do prédio",
                "o abrigo de veículos (vaga de garagem) pode sempre ser alienado a estranhos ao condomínio, independentemente do que dispuser a convenção",
                "o solo, a estrutura do prédio e as demais partes comuns são de propriedade exclusiva do condomínio, pessoa jurídica autônoma",
                "as unidades autônomas podem ser alienadas e gravadas livremente pelos titulares, mas as partes comuns são inalienáveis em separado e indivisíveis",
                "cada condômino pode exigir a divisão física das áreas comuns proporcionalmente à fração ideal de sua unidade autônoma"
              ],
              correta: 3,
              explicacao: "Art. 1.331, §§1º e 2º, do CC: as unidades autônomas são alienáveis e gravávies livremente; as partes comuns são inalienáveis separadamente e indivisíveis (não se pode desmembrá-las das unidades). A vaga de garagem só pode ser alienada ou alugada a estranho se a convenção não vedar (§1º, parte final). O condomínio edilício não é dono das áreas comuns — estas pertencem aos condôminos em fração ideal."
            },
            {
              id: "dr2-5", modo: "lei", fonte: "CC, arts. 1.277 e 1.279",
              enunciado: "No regime dos direitos de vizinhança, quanto ao uso anormal da propriedade:",
              alternativas: [
                "o vizinho prejudicado só pode reclamar de interferências que decorram de atividade absolutamente ilícita do causador",
                "as interferências que ultrapassam os limites da normal tolerância podem ser feitas cessar, considerando a natureza da utilização e o interesse público",
                "a existência de licença ambiental do poder público sempre exclui o dever de o causador reduzir ou cessar as interferências ao vizinho",
                "o direito de fazer cessar as interferências prejudiciais cabe unicamente ao proprietário, jamais ao possuidor ou inquilino do imóvel",
                "quaisquer interferências prejudiciais devem ser suportadas pelo vizinho quando a atividade for economicamente relevante para a região"
              ],
              correta: 1,
              explicacao: "Arts. 1.277 e 1.279 do CC: o proprietário ou possuidor pode fazer cessar interferências prejudiciais à segurança, ao sossego e à saúde, aferidas pela normal tolerância, pela natureza da utilização, pela localização e pelo interesse público. Mesmo autorizada pelo poder público, se a interferência for excessiva o vizinho tem direito à redução ou à indenização (art. 1.279). Note que o possuidor/inquilino também é legitimado, não só o proprietário."
            },
            {
              id: "dr2-6", modo: "lei", fonte: "CC, art. 1.297; Súmula 415 do STF",
              enunciado: "Sobre a fixação de limites entre prédios e a ação demarcatória:",
              alternativas: [
                "o proprietário só pode exigir a demarcação se detiver título de propriedade registrado há mais de vinte anos",
                "os muros, cercas e tapumes divisórios presumem-se pertencer exclusivamente ao confinante que os construiu com recursos próprios",
                "a ação de demarcação é imprescritível, e as despesas de construção e conservação dos tapumes divisórios são repartidas entre os confinantes",
                "as despesas com a construção dos tapumes divisórios cabem apenas ao vizinho que primeiro solicitar a demarcação da linha lindeira",
                "o direito de exigir a demarcação prescreve em cinco anos contados da aquisição do imóvel confinante pelo proprietário"
              ],
              correta: 2,
              explicacao: "Art. 1.297 do CC: o proprietário pode obrigar o confinante a proceder à demarcação, e as despesas com a construção e conservação dos tapumes divisórios são repartidas proporcionalmente (§1º). A ação demarcatória é imprescritível (a Súmula 415 do STF trata da servidão de trânsito — cuidado com o distrator). Os tapumes divisórios presumem-se comuns, não exclusivos de quem os ergueu."
            },
            {
              id: "dr2-7", modo: "lei", fonte: "CC, arts. 1.285 e 1.288",
              enunciado: "Quanto à passagem forçada e à passagem de cabos e tubulações entre prédios vizinhos:",
              alternativas: [
                "o dono do prédio encravado pode escolher qualquer vizinho para dele exigir a passagem, ainda que não seja o de acesso mais natural e fácil",
                "a passagem forçada é gratuita, não cabendo ao vizinho onerado qualquer indenização pela restrição imposta ao seu imóvel",
                "o dono do prédio sem acesso à via pública tem direito, mediante pagamento de indenização cabal, a exigir passagem pelo prédio vizinho",
                "a passagem forçada só pode ser reconhecida por sentença judicial transitada em julgado, vedado o acordo entre os confinantes",
                "o proprietário é obrigado a tolerar a passagem de cabos e tubulações alheias sem direito a qualquer indenização pelo desvalor do imóvel"
              ],
              correta: 2,
              explicacao: "Art. 1.285 do CC: o dono do prédio encravado (sem saída para a via pública) tem direito à passagem forçada, MEDIANTE indenização cabal — não é gratuita. O rumo deve ser o que menos prejudique o vizinho, e a passagem se dá pelo prédio que mais natural e facilmente se preste (§1º), não por escolha livre. A passagem de cabos e tubulações (art. 1.286) também é indenizável. Não confundir passagem forçada (direito de vizinhança, prédio encravado) com servidão de passagem (voluntária)."
            }
          ]
        }
      ]
    },

    /* ---------------------------- CURATELA, EPD E SAÚDE MENTAL (CIVIL) */
    {
      id: "curatela-epd",
      titulo: "Curatela, Deficiência e Saúde Mental",
      materia: "Direito Civil",
      banca: "I",
      icone: "🫶",
      cor: "dourado",
      descricao: "Estatuto da Pessoa com Deficiência, tomada de decisão apoiada e Lei 10.216.",
      licoes: [
        {
          id: "curatela-epd-1",
          titulo: "Capacidade, curatela e internação",
          questoes: [
            {
              id: "cur-1", modo: "lei", fonte: "EPD (Lei 13.146/2015), arts. 6º, 84 e 85",
              enunciado: "Após o Estatuto da Pessoa com Deficiência, a curatela da pessoa com deficiência:",
              alternativas: [
                "voltou a ser a regra geral, dada a proteção integral que o ordenamento deve a essas pessoas",
                "é medida extraordinária, proporcional e pelo menor tempo possível, restrita aos atos patrimoniais e negociais — sem alcançar o próprio corpo, o voto, o matrimônio, a saúde e o trabalho",
                "abrange todos os atos da vida civil, inclusive os existenciais, para conferir maior segurança jurídica ao curatelado e aos terceiros que com ele venham a contratar de boa-fé",
                "foi extinta do ordenamento jurídico, tendo sido integralmente substituída pela tomada de decisão apoiada",
                "depende de laudo pericial que ateste a incapacidade absoluta e permanente do interditando"
              ],
              correta: 1,
              explicacao: "Arts. 84, §3º, e 85 do EPD: a pessoa com deficiência tem assegurada a capacidade legal em igualdade de condições; a curatela é EXCEPCIONAL e afeta tão somente atos patrimoniais e negociais (art. 85, caput e §1º). A definição da curatela não alcança os direitos existenciais listados — mudança de paradigma da Convenção de Nova York, com status de emenda constitucional."
            },
            {
              id: "cur-2", modo: "lei", fonte: "CC, arts. 3º e 4º (redação do EPD)",
              enunciado: "No regime atual das incapacidades do Código Civil:",
              alternativas: [
                "a pessoa com deficiência mental é, em razão dessa condição, absolutamente incapaz para os atos da vida civil",
                "são absolutamente incapazes tanto os menores de dezesseis anos quanto os enfermos mentais sem discernimento",
                "só é absolutamente incapaz o menor de dezesseis anos; quem não puder exprimir a vontade é relativamente incapaz, e a deficiência, por si, não gera incapacidade",
                "o pródigo é considerado absolutamente incapaz para a prática de todos os atos de natureza patrimonial",
                "a incapacidade absoluta pode ser declarada por sentença também para pessoas maiores, nos casos mais graves"
              ],
              correta: 2,
              explicacao: "Redação dada pelo EPD: o art. 3º hoje contém uma única hipótese de incapacidade absoluta (menor de 16). O art. 4º lista os relativamente incapazes: maiores de 16 e menores de 18, ébrios habituais e viciados em tóxico, os que não puderem exprimir a vontade (causa transitória ou permanente) e os pródigos. Não existe mais maior absolutamente incapaz no Brasil — pegadinha recorrente."
            },
            {
              id: "cur-3", modo: "lei", fonte: "CC, art. 1.783-A",
              enunciado: "A tomada de decisão apoiada (TDA):",
              alternativas: [
                "é espécie de curatela simplificada, que pode ser decretada de ofício pelo juiz da causa",
                "é o processo em que a própria pessoa com deficiência elege ao menos duas pessoas de confiança para apoiá-la nos atos da vida civil, mantendo sua capacidade e a validade dos atos",
                "transfere aos apoiadores o poder de decidir em nome e no lugar da pessoa apoiada",
                "só pode ser requerida pelo Ministério Público ou por familiar próximo da pessoa a ser apoiada",
                "torna anuláveis todos os atos que a pessoa apoiada praticar sem a assinatura conjunta dos apoiadores por ela indicados no termo levado a registro perante o juízo competente"
              ],
              correta: 1,
              explicacao: "Art. 1.783-A do CC (incluído pelo EPD): a legitimidade para requerer é da PRÓPRIA pessoa apoiada (§2º), que indica 2 ou mais apoiadores. A TDA não retira capacidade: a decisão é da pessoa, com apoio — modelo de apoio, não de substituição de vontade. Terceiro contratante pode solicitar a contra-assinatura dos apoiadores (§5º), mas a validade do ato não depende dela."
            },
            {
              id: "cur-4", modo: "lei", fonte: "CC, art. 1.550, §2º (redação do EPD)",
              enunciado: "Quanto ao casamento da pessoa com deficiência mental ou intelectual:",
              alternativas: [
                "é nulo de pleno direito, por ausência de consentimento válido de um dos nubentes que padece de deficiência mental, sendo insuscetível de confirmação posterior",
                "é anulável, ficando sua validade condicionada à obtenção de autorização judicial prévia",
                "depende da prévia aprovação do curador do nubente, sob pena de o casamento ser inexistente",
                "a pessoa com deficiência mental ou intelectual em idade núbil pode casar, manifestando a vontade diretamente ou por seu responsável ou curador",
                "só é admitido quando celebrado sob o regime obrigatório da separação de bens entre os cônjuges"
              ],
              correta: 3,
              explicacao: "Art. 1.550, §2º, do CC, com a redação do EPD: o casamento é direito existencial garantido — a curatela não o alcança (EPD, art. 85, §1º). A antiga causa de nulidade do casamento do 'enfermo mental sem discernimento' foi revogada. E não incide separação obrigatória por esse motivo: as hipóteses do art. 1.641 são outras (ex.: maiores de 70 anos)."
            },
            {
              id: "cur-5", modo: "lei", fonte: "Lei 10.216/2001, arts. 4º, 6º e 8º, §1º",
              enunciado: "Sobre a internação psiquiátrica na Lei da Reforma Psiquiátrica (Lei 10.216/2001):",
              alternativas: [
                "pode ser indicada sempre que a família do paciente a solicitar por escrito ao médico assistente",
                "só cabe quando insuficientes os recursos extra-hospitalares; a involuntária é comunicada ao Ministério Público em setenta e duas horas, e a compulsória é a determinada pela Justiça",
                "a internação voluntária, por decorrer da vontade do próprio paciente, dispensa o laudo médico circunstanciado",
                "a internação compulsória do paciente pode ser determinada diretamente pelo delegado de polícia",
                "é permitida em instituições com características asilares, desde que especializadas no tratamento de transtornos mentais graves e devidamente licenciadas pelo poder público"
              ],
              correta: 1,
              explicacao: "Art. 4º: internação como ultima ratio, vedada em instituições asilares (§3º). Art. 6º: toda internação exige laudo médico circunstanciado; espécies — voluntária, involuntária e compulsória (esta, determinada pelo juiz, art. 9º). Art. 8º, §1º: a involuntária deve ser comunicada ao MP estadual em 72 horas, pelo responsável técnico do estabelecimento — mesmo prazo para a alta."
            },
            {
              id: "cur-6", modo: "lei", fonte: "CC, art. 1.782",
              enunciado: "A interdição do pródigo o priva apenas de:",
              alternativas: [
                "todos os atos da vida civil, inclusive os existenciais como casar, votar e trabalhar livremente",
                "atos de administração ordinária e cotidiana do seu próprio patrimônio pessoal e familiar",
                "emprestar, transigir, dar quitação, alienar, hipotecar, demandar ou ser demandado e atos que não sejam de mera administração — conservando os atos existenciais e o dia a dia",
                "atos negociais cujo valor supere o equivalente a dez salários mínimos vigentes no país",
                "receber diretamente os seus rendimentos, que passam a ser integralmente administrados pelo curador nomeado pelo juízo, a quem cabe prestar contas periodicamente"
              ],
              correta: 2,
              explicacao: "Art. 1.782 do CC: a curatela do pródigo é a mais restrita do sistema — alcança só os atos que possam comprometer o patrimônio (o rol legal: emprestar, transigir, dar quitação, alienar, hipotecar, demandar ou ser demandado). Ele pode casar, votar, trabalhar e administrar o dia a dia. Prodigalidade é hipótese de incapacidade RELATIVA (art. 4º, IV)."
            },
            {
              id: "cur-7", modo: "lei", fonte: "CPC, art. 755, I e II; CC, art. 1.772",
              enunciado: "Na sentença que decreta a curatela, o juiz:",
              alternativas: [
                "declara a incapacidade total e permanente do interditando para todos os atos da vida civil, patrimoniais e existenciais, transferindo-os ao curador que nomeia",
                "fixa os limites da curatela conforme o estado e o desenvolvimento da pessoa, considerando vontade e preferências, e nomeia curador que melhor atenda aos seus interesses",
                "nomeia obrigatoriamente o parente mais próximo do interdito como seu curador legal",
                "transfere ao curador nomeado a titularidade e a propriedade dos bens do curatelado",
                "fica dispensado de entrevistar pessoalmente o interditando quando houver laudo médico nos autos"
              ],
              correta: 1,
              explicacao: "Art. 755, I e II, do CPC: curatela sob medida — limites conforme o estado da pessoa, considerando vontade e preferências. A entrevista pessoal do interditando é obrigatória (art. 751). O curador administra, mas não vira dono; e a escolha observa os interesses do curatelado (§1º), admitida inclusive a curatela compartilhada (CC, art. 1.775-A)."
            }
          ]
        }
      ]
    },

    /* ---------------------------------- PROCESSO DE CONHECIMENTO (CPC) */
    {
      id: "proc-conhecimento",
      titulo: "Conhecimento, Gratuidade e Tutelas",
      materia: "Direito Processual Civil",
      banca: "I",
      icone: "⚖️",
      cor: "ciano",
      descricao: "Gratuidade de justiça, curadoria especial, revelia, ônus da prova e tutela provisória.",
      licoes: [
        {
          id: "proc-conhecimento-1",
          titulo: "Gratuidade, curadoria especial e tutelas",
          questoes: [
            {
              id: "gj-1", modo: "lei", fonte: "CPC, art. 99, §3º; STJ, Súmula 481",
              enunciado: "Quanto à concessão da gratuidade de justiça:",
              alternativas: [
                "a alegação de insuficiência gera presunção absoluta de veracidade para qualquer requerente, aí incluídas as pessoas jurídicas",
                "somente tem direito ao benefício quem comprovar receber renda mensal igual ou inferior a um salário mínimo vigente",
                "a pessoa jurídica, tenha ou não fins lucrativos, jamais faz jus ao benefício da gratuidade de justiça",
                "a concessão do benefício exige o prévio atendimento do requerente por órgão da Defensoria Pública",
                "presume-se verdadeira a alegação de insuficiência da pessoa natural; a jurídica pode obtê-lo, mas deve demonstrar a impossibilidade de arcar com os encargos"
              ],
              correta: 4,
              explicacao: "Art. 99, §3º, do CPC: a presunção (relativa) vale só para pessoa natural. Para pessoa jurídica — com ou sem fins lucrativos — o ônus de demonstrar é dela (Súmula 481 do STJ). Antes de indeferir, o juiz deve permitir a comprovação (art. 99, §2º). E não confunda: gratuidade judiciária e assistência jurídica pela Defensoria são institutos distintos."
            },
            {
              id: "gj-2", modo: "lei", fonte: "CPC, art. 98, §§2º e 3º",
              enunciado: "O beneficiário da gratuidade de justiça que perde a causa:",
              alternativas: [
                "fica inteiramente isento da condenação em custas processuais e em honorários advocatícios de sucumbência",
                "é condenado na sucumbência, mas a exigibilidade fica suspensa: o credor só a executa se provar, em até cinco anos, que cessou a insuficiência; depois, extingue-se",
                "paga apenas a metade das custas processuais e dos honorários advocatícios fixados na sentença",
                "tem a dívida de sucumbência cancelada de forma automática no momento da prolação da sentença",
                "responde com seus bens presentes e futuros a qualquer tempo, sem nenhum limite temporal, ainda que persista a mesma situação de insuficiência econômica que fundou o benefício"
              ],
              correta: 1,
              explicacao: "Art. 98, §§2º e 3º, do CPC: a gratuidade NÃO afasta a responsabilidade pela sucumbência — apenas suspende a exigibilidade pelo prazo de 5 anos, extinguindo-se as obrigações se o credor não demonstrar a mudança da situação econômica. Pegadinha clássica: dizer que o beneficiário 'não é condenado' torna a alternativa errada."
            },
            {
              id: "gj-3", modo: "lei", fonte: "CPC, art. 72",
              enunciado: "O juiz nomeará curador especial ao:",
              alternativas: [
                "réu revel que, tendo sido citado pessoalmente, simplesmente deixou de apresentar a sua contestação",
                "autor que seja beneficiário da gratuidade de justiça e litigue sem advogado constituído nos autos",
                "incapaz sem representante (ou com interesses colidentes) e ao réu preso revel, além do revel citado por edital ou hora certa, enquanto não constituir advogado",
                "réu que vier a constituir advogado particular no curso do prazo legal para a resposta",
                "executado que tiver bens penhorados no cumprimento de sentença ou na execução por quantia certa, ainda que regularmente representado por advogado que constituiu nos autos"
              ],
              correta: 2,
              explicacao: "Art. 72, I e II, e parágrafo único do CPC: a curatela especial é função institucional da Defensoria Pública. O detalhe que derruba candidatos: o réu revel citado PESSOALMENTE não recebe curador — a proteção existe para a citação ficta (edital/hora certa) e para o réu preso revel."
            },
            {
              id: "gj-4", modo: "lei", fonte: "CPC, arts. 344 a 346",
              enunciado: "Sobre os efeitos da revelia:",
              alternativas: [
                "gera presunção absoluta de veracidade de todos os fatos alegados pelo autor na petição inicial",
                "implica a automática e imediata procedência do pedido formulado pelo autor na petição inicial",
                "impede que o réu revel intervenha no processo em qualquer fase posterior à sua caracterização",
                "a presunção de veracidade é relativa e nem sempre opera: não incide, p. ex., sobre direitos indisponíveis ou se, havendo vários réus, algum contestar",
                "atinge inclusive o réu revel que, defendido por curador especial, teve contestação apresentada em seu favor"
              ],
              correta: 3,
              explicacao: "Art. 344 (presunção de veracidade) temperado pelo art. 345: a presunção não opera havendo contestação de litisconsorte (I), direitos indisponíveis (II), exigência de prova por instrumento público (III) ou alegações inverossímeis/contrariadas pela prova (IV). O revel pode intervir a qualquer tempo (art. 346, p.ú.), e a contestação do curador especial afasta os efeitos materiais da revelia."
            },
            {
              id: "gj-5", modo: "lei", fonte: "CPC, art. 373, §§1º e 2º",
              enunciado: "A distribuição dinâmica do ônus da prova:",
              alternativas: [
                "pode ser determinada livremente pelo juiz, a qualquer momento do processo e independentemente de fundamentação específica",
                "cabe nos casos legais ou diante da impossibilidade/excessiva dificuldade de provar, por decisão fundamentada e prévia, com chance de desincumbência, sem tornar a prova impossível",
                "aplica-se de forma exclusiva às relações de consumo regidas pelo Código de Defesa do Consumidor",
                "pode ser feita pela primeira vez na própria sentença de mérito, ainda que isso surpreenda a parte assim onerada",
                "é figura vedada no processo civil brasileiro, por comprometer a segurança jurídica e a paridade entre as partes"
              ],
              correta: 1,
              explicacao: "Art. 373, §1º, do CPC. O §2º proíbe a chamada prova diabólica reversa. A decisão deve vir antes da fase instrutória, dando à parte a oportunidade de se desincumbir. Não confunda com a inversão do CDC (art. 6º, VIII — ope judicis, exige verossimilhança OU hipossuficiência) nem com as inversões ope legis (ex.: CDC, arts. 12, §3º, e 14, §3º)."
            },
            {
              id: "gj-6", modo: "lei", fonte: "CPC, arts. 300 e 311",
              enunciado: "Sobre a distinção entre tutela de urgência e tutela da evidência:",
              alternativas: [
                "ambas exigem, para a sua concessão, a demonstração de perigo de dano ou de risco ao resultado útil do processo",
                "a tutela da evidência só pode ser concedida no momento da prolação da sentença de mérito da causa",
                "a tutela de urgência dispensa a probabilidade do direito, bastando o perigo de dano ou o risco ao resultado útil",
                "a de urgência exige probabilidade do direito e perigo de dano; a da evidência dispensa o perigo — cabe, p. ex., com prova documental e tese em precedente obrigatório, com liminar",
                "a tutela da evidência, uma vez concedida, não se sujeita a contraditório nem a qualquer revisão posterior, tornando-se desde logo definitiva e imutável entre as partes do processo"
              ],
              correta: 3,
              explicacao: "Art. 300 (urgência: probabilidade + perigo) versus art. 311 (evidência: independentemente da demonstração de perigo). Nas hipóteses dos incisos II e III do art. 311, o juiz pode decidir liminarmente (parágrafo único). Na urgência, ainda: caução facultativa (§1º) e vedação quando houver perigo de irreversibilidade (§3º)."
            },
            {
              id: "gj-7", modo: "lei", fonte: "CPC, art. 304",
              enunciado: "A tutela antecipada concedida em caráter antecedente:",
              alternativas: [
                "faz coisa julgada material se não for impugnada por recurso próprio no prazo legal",
                "perde a sua eficácia de forma automática no prazo de trinta dias contado da concessão",
                "torna-se estável se não interposto recurso, extinguindo-se o processo — mas a estabilidade não é coisa julgada, e qualquer parte pode revê-la em ação própria por dois anos",
                "não pode ser revista, modificada ou invalidada em nenhuma hipótese após a extinção do processo, adquirindo desde logo a autoridade da coisa julgada material e formal",
                "depende da prestação de caução real ou fidejussória pelo autor para que possa se estabilizar"
              ],
              correta: 2,
              explicacao: "Art. 304, caput e §§2º a 6º, do CPC: estabilização sem coisa julgada (§6º), com ação autônoma de revisão em 2 anos (§5º). O STJ abranda o texto: não só o agravo, mas qualquer impugnação tempestiva do réu (como a contestação) impede a estabilização (REsp 1.760.966)."
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
      banca: "I",
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
            },
            {
              id: "exe-1", modo: "juris", fonte: "CPC, art. 139, IV; STJ/STF (ADI 5941)",
              enunciado: "Sobre as medidas executivas atípicas (art. 139, IV, do CPC), como apreensão de passaporte ou suspensão de CNH do devedor:",
              alternativas: [
                "são inconstitucionais por violarem o direito fundamental de ir e vir do devedor, conforme decidiu o STF ao julgar a questão em controle concentrado",
                "podem ser adotadas de ofício pelo juiz, sem necessidade de contraditório prévio nem de requerimento do credor, em qualquer execução na qual o devedor, regularmente intimado, deixe de pagar voluntariamente a dívida no prazo legal",
                "são admissíveis de forma subsidiária e excepcional, mediante decisão fundamentada, respeitados o contraditório e a proporcionalidade, quando esgotados os meios típicos e havendo indícios de que o devedor oculta patrimônio",
                "substituem a penhora como meio executivo preferencial, dispensando o exequente da prévia busca de bens penhoráveis do executado",
                "só têm cabimento na execução de prestações alimentícias, dada a natureza urgente e existencial do crédito que se busca satisfazer"
              ],
              correta: 2,
              explicacao: "O STF (ADI 5941) declarou a constitucionalidade das medidas atípicas do art. 139, IV. Não são automáticas: exigem esgotamento dos meios típicos, contraditório prévio, fundamentação idônea e proporcionalidade. O STJ veda o uso como punição ou quando o devedor comprovadamente não tem patrimônio — a medida deve ter aptidão para coagir ao pagamento, não apenas restringir direitos."
            },
            {
              id: "exe-2", modo: "lei", fonte: "CPC, arts. 525 e 917",
              enunciado: "No cumprimento de sentença, a defesa típica do executado é a impugnação; na execução de título extrajudicial, os embargos. Sobre elas:",
              alternativas: [
                "ambas exigem a prévia garantia do juízo, por penhora ou depósito, como pressuposto de admissibilidade, sob pena de rejeição liminar da defesa",
                "nenhuma das duas depende de garantia do juízo, mas apenas os embargos à execução comportam, em regra, matéria de defesa mais ampla que a impugnação",
                "a impugnação ao cumprimento de sentença independe de garantia do juízo, ao passo que os embargos à execução também dispensam garantia — e ambas, em regra, não têm efeito suspensivo automático",
                "os embargos à execução exigem a garantia integral do juízo para serem recebidos; a impugnação ao cumprimento de sentença, por sua vez, a dispensa",
                "a impugnação suspende automaticamente o cumprimento de sentença desde o protocolo; os embargos à execução dependem de decisão judicial expressa"
              ],
              correta: 2,
              explicacao: "Desde o CPC/2015, nem a impugnação (art. 525) nem os embargos (art. 914) exigem garantia do juízo para serem opostos. E nenhuma tem efeito suspensivo automático: ele depende de requerimento, garantia e demonstração de dano (arts. 525, §6º, e 919, §1º). Não confundir com a objeção de pré-executividade, que independe de embargos e cabe para matérias de ordem pública conhecíveis de ofício, sem dilação probatória (Súmula 393/STJ)."
            },
            {
              id: "exe-3", modo: "lei", fonte: "CPC, arts. 528, §7º, e 833, IV; CF, art. 5º, LXVII",
              enunciado: "Sobre a execução de alimentos pelo rito da penhora (expropriação), diferente do rito da prisão:",
              alternativas: [
                "não admite a penhora de salário do devedor em nenhum percentual, por se tratar de verba absolutamente impenhorável destinada ao seu próprio sustento",
                "admite a penhora de parte da remuneração do devedor, pois a impenhorabilidade do salário é excepcionada quando se trata de pagamento de prestação alimentícia, qualquer que seja sua origem",
                "só permite a penhora de bens imóveis registrados em nome do devedor, preservando-se integralmente a sua renda e as suas aplicações financeiras",
                "exige o prévio esgotamento do rito da prisão civil como etapa obrigatória, sem a qual a via expropriatória não pode ser utilizada pelo credor",
                "impede qualquer constrição judicial sobre a conta bancária do devedor de alimentos, dada a presunção de natureza salarial dos valores depositados"
              ],
              correta: 1,
              explicacao: "Art. 833, IV, protege salários e proventos, MAS o § 2º excepciona o pagamento de prestação alimentícia, independentemente de sua origem — e a Corte Especial do STJ admite a penhora de percentual razoável da remuneração mesmo para dívidas não alimentares, conforme o caso concreto. O rito da prisão (art. 528, §7º) alcança as 3 últimas parcelas + vincendas; o rito da penhora serve para o débito pretérito."
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
                "a Defensoria só tem legitimidade se todos os beneficiados comprovarem individualmente a pobreza",
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
                "os interessados que não intervieram como litisconsortes podem propor suas ações de indenização individuais",
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

    /* ---------------------------------- RECURSOS E TRIBUNAIS (CPC) */
    {
      id: "recursos",
      titulo: "Recursos e Tribunais",
      materia: "Direito Processual Civil",
      banca: "I",
      icone: "🏛️",
      cor: "indigo",
      descricao: "Apelação, agravo, embargos, prazo em dobro da DP, reclamação, IRDR e remessa.",
      licoes: [
        {
          id: "recursos-1",
          titulo: "Recursos, reclamação e remessa necessária",
          questoes: [
            {
              id: "rec-1", modo: "lei", fonte: "CPC, art. 1.012, caput e §1º",
              enunciado: "Quanto aos efeitos da apelação:",
              alternativas: [
                "não tem efeito suspensivo em nenhuma hipótese no regime do CPC/2015, produzindo toda sentença efeitos imediatos desde a publicação, à semelhança do agravo",
                "tem, em regra, efeito suspensivo automático — mas produz efeitos imediatos, por exceção, a sentença que condena a pagar alimentos, que confirma, concede ou revoga tutela provisória, ou que decreta a interdição",
                "tem efeito suspensivo somente quando o relator o conceder de forma expressa, a requerimento do apelante que demonstrar risco de dano grave ou de difícil reparação",
                "tem efeito suspensivo apenas nas causas de valor superior a sessenta salários mínimos",
                "suspende inclusive a sentença que homologa acordo entre as partes"
              ],
              correta: 1,
              explicacao: "Art. 1.012 do CPC: a apelação tem efeito suspensivo AUTOMÁTICO (regra que o CPC/2015 manteve). O §1º lista as exceções de eficácia imediata: homologação de divisão/demarcação, condenação a ALIMENTOS, extinção sem mérito ou improcedência dos embargos do executado, procedência do pedido de arbitragem, tutela provisória e INTERDIÇÃO. Nesses casos, cabe pedir efeito suspensivo ao relator (§§3º e 4º)."
            },
            {
              id: "rec-2", modo: "juris", fonte: "CPC, art. 1.015; STJ, Tema 988",
              enunciado: "Sobre o cabimento do agravo de instrumento contra decisões interlocutórias, o STJ fixou que o rol do art. 1.015:",
              alternativas: [
                "é absolutamente taxativo e de interpretação restritiva, não comportando ampliação nem mesmo por analogia ou interpretação extensiva das hipóteses legais",
                "é meramente exemplificativo, cabendo agravo de instrumento contra toda e qualquer decisão interlocutória que cause gravame imediato a alguma das partes",
                "tem taxatividade mitigada: admite-se o agravo fora das hipóteses listadas quando houver urgência decorrente da inutilidade do julgamento da questão só no recurso de apelação",
                "foi tacitamente revogado pela jurisprudência defensiva dos tribunais, aplicando-se o regime recursal amplo do código de processo anterior",
                "só se aplica aos processos de execução e cumprimento de sentença"
              ],
              correta: 2,
              explicacao: "Tema 988/STJ (REsp 1.704.520): taxatividade MITIGADA. As interlocutórias não agraváveis não precluem — podem ser suscitadas em preliminar de apelação (art. 1.009, §1º) —, mas quando esperar a apelação tornar inútil o exame (ex.: decisão sobre competência, segredo de justiça), cabe o agravo desde logo."
            },
            {
              id: "rec-3", modo: "lei", fonte: "CPC, arts. 1.022, 1.023 e 1.026",
              enunciado: "Os embargos de declaração:",
              alternativas: [
                "seguem o prazo geral de quinze dias úteis aplicável aos demais recursos cíveis, contado da intimação da decisão que se pretende integrar",
                "suspendem automaticamente a eficácia da decisão embargada até o julgamento, dada a possibilidade de modificação do julgado com efeitos infringentes",
                "cabem apenas contra sentenças e acórdãos de mérito, jamais contra decisões interlocutórias ou despachos de mero expediente",
                "têm prazo de cinco dias, cabem contra qualquer decisão judicial (obscuridade, contradição, omissão ou erro material) e interrompem o prazo recursal para ambas as partes",
                "quando rejeitados por unanimidade, impedem a interposição dos demais recursos cabíveis contra a decisão originalmente embargada"
              ],
              correta: 3,
              explicacao: "Arts. 1.022 e 1.023 do CPC: prazo de 5 dias (exceção à regra geral de 15) e cabimento amplo, contra qualquer decisão. Art. 1.026: INTERROMPEM (não suspendem) o prazo para os outros recursos — o prazo recomeça inteiro, e para as duas partes. Em regra não têm efeito suspensivo; embargos protelatórios geram multa de até 2% (§2º)."
            },
            {
              id: "rec-4", modo: "lei", fonte: "CPC, art. 186; LC 80/94, art. 128, I",
              enunciado: "Sobre as prerrogativas processuais da Defensoria Pública quanto a prazos:",
              alternativas: [
                "goza de prazo em dobro apenas para contestar e recorrer, correndo os demais prazos processuais de forma simples, como para as partes em geral",
                "tem prazo em dobro para todas as manifestações processuais, contado da intimação pessoal (carga, remessa ou meio eletrônico) — salvo quando a lei estabelecer, de forma expressa, prazo próprio para a Defensoria",
                "tem prazo em quádruplo para contestar e em dobro para recorrer, benefício idêntico ao que o regime anterior reservava à Fazenda Pública",
                "os prazos correm da publicação da decisão no diário oficial eletrônico, exatamente como ocorre para os advogados privados constituídos",
                "as prerrogativas se estendem automaticamente a todo advogado dativo"
              ],
              correta: 1,
              explicacao: "Art. 186 do CPC: prazo em dobro para TODAS as manifestações, com termo inicial na intimação pessoal (§1º c/c art. 183, §1º). A exceção do §4º é a pegadinha: não há dobro quando a lei fixa prazo próprio e expresso para a DP. O benefício também alcança escritórios de prática jurídica de faculdades e entidades conveniadas (§3º) — mas não o advogado dativo em geral."
            },
            {
              id: "rec-5", modo: "lei", fonte: "CPC, art. 988; STF, Súmula 734",
              enunciado: "A reclamação constitucional é cabível para:",
              alternativas: [
                "rever qualquer decisão judicial que se repute injusta ou contrária à prova dos autos, funcionando como sucedâneo recursal de ampla devolutividade",
                "preservar a competência do tribunal, garantir a autoridade de suas decisões e a observância de súmula vinculante e de acórdão de IRDR ou IAC — vedado o uso após o trânsito em julgado da decisão reclamada",
                "impugnar decisões já transitadas em julgado que contrariem súmula vinculante do STF, hipótese em que substitui a própria ação rescisória",
                "garantir a observância de qualquer precedente, inclusive súmulas persuasivas, independentemente de esgotamento das instâncias",
                "substituir a ação rescisória quando esgotado o seu prazo"
              ],
              correta: 1,
              explicacao: "Art. 988 do CPC. Limites que a prova adora: proposta APÓS o trânsito em julgado, não cabe (§5º, I, e Súmula 734/STF — reclamação não é sucedâneo de rescisória); e para garantir observância de acórdão de RE com repercussão geral ou de recursos repetitivos, exige-se o ESGOTAMENTO das instâncias ordinárias (§5º, II)."
            },
            {
              id: "rec-6", modo: "lei", fonte: "CPC, arts. 976 e 982",
              enunciado: "A instauração do Incidente de Resolução de Demandas Repetitivas (IRDR) pressupõe, simultaneamente:",
              alternativas: [
                "apenas a multiplicidade de recursos versando sobre questão de fato relevante, comprovada por certidão do distribuidor do tribunal competente",
                "efetiva repetição de processos com controvérsia sobre a mesma questão unicamente de direito e risco de ofensa à isonomia e à segurança jurídica — e, admitido o incidente, suspendem-se os processos pendentes no estado ou região",
                "o requerimento conjunto e expresso de todas as partes dos processos repetitivos pendentes no tribunal, devidamente homologado pelo presidente da corte após parecer favorável do Ministério Público sobre a relevância da questão",
                "a existência de prévia decisão divergente de tribunal superior sobre o mesmo tema jurídico, demonstrada na petição de instauração",
                "que a questão já tenha sido afetada como recurso repetitivo no STJ"
              ],
              correta: 1,
              explicacao: "Art. 976, I e II, do CPC: os dois pressupostos são cumulativos, e a questão deve ser unicamente de DIREITO (material ou processual). Admitido, o relator suspende os processos pendentes, individuais ou coletivos, no âmbito do tribunal (art. 982, I), pelo prazo de 1 ano (art. 980). Legitimados: partes, juiz de ofício, MP e Defensoria Pública (art. 977)."
            },
            {
              id: "rec-7", modo: "lei", fonte: "CPC, art. 496, §§3º e 4º",
              enunciado: "A remessa necessária das sentenças proferidas contra a Fazenda Pública é dispensada quando:",
              alternativas: [
                "a condenação for líquida e inferior a determinados tetos (por exemplo, mil salários mínimos para a União e quinhentos para os Estados), ou quando a sentença se fundar em súmula de tribunal superior ou em tese firmada em casos repetitivos",
                "a Fazenda Pública deixar de interpor o recurso de apelação no prazo legal em dobro que lhe é assegurado, hipótese em que se opera a preclusão máxima e o imediato trânsito em julgado da sentença condenatória proferida contra o ente",
                "houver condenação da Fazenda em obrigação de fazer ou de não fazer, ainda que ilíquida, dada a natureza mandamental do provimento judicial",
                "o beneficiário da decisão condenatória for pessoa hipossuficiente assistida pela Defensoria Pública, por aplicação do princípio da duração razoável",
                "a causa tramitar pelo procedimento comum, qualquer que seja o valor da condenação imposta ao ente público na sentença"
              ],
              correta: 0,
              explicacao: "Art. 496, §3º (tetos: 1.000 SM para União; 500 para Estados, DF e capitais; 100 para os demais municípios) e §4º (sentença fundada em súmula de tribunal superior, acórdão de repetitivo, entendimento firmado em IRDR/IAC ou orientação vinculante da própria administração). Fora das dispensas, a sentença não transita em julgado sem o reexame — mesmo sem apelação da Fazenda."
            }
          ]
        }
      ]
    },

    /* ---------------------------- RELAÇÃO DE CONSUMO E CONTRATOS (CDC) */
    {
      id: "relacao-consumo",
      titulo: "Relação de Consumo e Contratos",
      materia: "Direito do Consumidor",
      banca: "I",
      icone: "🛒",
      cor: "rosa",
      descricao: "Conceitos, equiparação, cláusulas abusivas, arrependimento e práticas comerciais.",
      licoes: [
        {
          id: "relacao-consumo-1",
          titulo: "Consumidor, cláusulas abusivas e oferta",
          questoes: [
            {
              id: "rel-1", modo: "lei", fonte: "CDC, arts. 2º, 17 e 29",
              enunciado: "Um pedestre é atingido pela queda de um letreiro mal instalado por empresa contratada por uma loja. Embora não tenha comprado nada, ele:",
              alternativas: [
                "não tem qualquer proteção do CDC, por não se enquadrar no conceito de destinatário final de produto ou serviço adquirido no mercado de consumo",
                "é consumidor por equiparação (bystander): o art. 17 equipara a consumidor as vítimas do evento danoso, atraindo a responsabilidade objetiva pelo fato do serviço",
                "só pode acionar a loja com base na responsabilidade aquiliana do Código Civil, cabendo-lhe provar a culpa da empresa instaladora e o nexo com o dano",
                "precisa comprovar a culpa da empresa que instalou o letreiro para obter a reparação integral dos danos que sofreu",
                "é ele próprio considerado fornecedor equiparado, por se encontrar na área de risco criada pela atividade da loja"
              ],
              correta: 1,
              explicacao: "Além do consumidor padrão (art. 2º: destinatário final), o CDC protege equiparados: a coletividade (art. 2º, p.ú.), as VÍTIMAS DO EVENTO (art. 17 — bystanders, no campo do fato do produto/serviço) e as pessoas expostas às práticas comerciais (art. 29). O pedestre atingido litiga sob responsabilidade objetiva do CDC, não sob a culpa do CC."
            },
            {
              id: "rel-2", modo: "juris", fonte: "CDC, art. 2º; STJ (teoria finalista mitigada)",
              enunciado: "Sobre a pessoa jurídica como consumidora, o STJ adota a posição de que:",
              alternativas: [
                "a pessoa jurídica jamais pode ser consumidora, pois todo bem que adquire integra, direta ou indiretamente, a sua cadeia produtiva ou a atividade empresarial que exerce",
                "toda pessoa jurídica que adquire produtos no mercado é consumidora, pela teoria maximalista pura, que dispensa a análise da destinação final do bem",
                "pela teoria finalista mitigada, a pessoa jurídica destinatária final pode ser consumidora quando demonstrar sua vulnerabilidade técnica, jurídica ou econômica ante o fornecedor",
                "basta ostentar a condição de microempresa ou de empresa de pequeno porte para que o CDC incida de forma automática",
                "a condição de consumidora da pessoa jurídica depende sempre de cláusula contratual expressa que a reconheça como tal"
              ],
              correta: 2,
              explicacao: "O STJ parte do finalismo (destinatário final fático E econômico), mas o mitiga: admite o CDC para a PJ — em regra fora da relação de consumo quando o bem é insumo — se comprovada vulnerabilidade concreta (ex.: pequena empresa ante concessionária). A vulnerabilidade do consumidor pessoa física é presumida; a da PJ deve ser demonstrada."
            },
            {
              id: "rel-3", modo: "lei", fonte: "CDC, art. 51, caput e §2º",
              enunciado: "As cláusulas abusivas em contratos de consumo:",
              alternativas: [
                "são anuláveis no prazo decadencial de quatro anos, contado da data em que celebrado o contrato de consumo",
                "são nulas de pleno direito, em rol exemplificativo — e a nulidade de uma cláusula não invalida o contrato, salvo se, feita a integração, decorrer ônus excessivo a qualquer das partes",
                "só podem ser afastadas se o consumidor as impugnar no exato momento da contratação, sob pena de preclusão",
                "tornam nulo o contrato de consumo por inteiro, em qualquer hipótese, dada a gravidade do vício que carregam",
                "dependem de prévia declaração de abusividade por decisão administrativa do Procon ou por sentença judicial, não podendo o juiz reconhecê-las de ofício sem provocação da parte"
              ],
              correta: 1,
              explicacao: "Art. 51 do CDC: nulidade de pleno direito (conhecível de ofício — com a ressalva da Súmula 381/STJ quanto a juros em contratos bancários), rol aberto ('entre outras') e princípio da conservação do contrato (§2º). Exemplos clássicos do rol: cláusula de não indenizar, inversão do ônus da prova em prejuízo do consumidor, renúncia compulsória a direitos."
            },
            {
              id: "rel-4", modo: "lei", fonte: "CDC, art. 49",
              enunciado: "O direito de arrependimento do consumidor:",
              alternativas: [
                "aplica-se a qualquer compra, inclusive à realizada presencialmente dentro da loja física, no prazo de sete dias contado da assinatura do contrato ou do efetivo recebimento do produto",
                "existe apenas para produtos que apresentem defeito ou vício de qualidade que os torne impróprios ao uso",
                "pode ser exercido em sete dias, contados da assinatura ou do recebimento, quando a contratação ocorrer fora do estabelecimento (telefone, internet, domicílio), com devolução imediata e atualizada dos valores",
                "exige que o consumidor apresente justificativa razoável e idônea para desfazer o negócio já celebrado",
                "implica a perda do valor do frete pago pelo consumidor no ato da aquisição do produto devolvido"
              ],
              correta: 2,
              explicacao: "Art. 49 do CDC: o prazo de reflexão de 7 dias vale para contratações FORA do estabelecimento — a compra presencial em loja física não gera arrependimento legal (só se o fornecedor conceder). O parágrafo único garante a devolução imediata e atualizada de TODOS os valores pagos — o que inclui o frete, segundo o STJ. Não se exige motivação."
            },
            {
              id: "rel-5", modo: "lei", fonte: "CDC, arts. 24, 26 e 50",
              enunciado: "Sobre as garantias legal e contratual no CDC:",
              alternativas: [
                "a garantia legal depende da entrega de termo escrito ao consumidor no ato da aquisição do produto ou serviço",
                "a garantia contratual concedida pelo fornecedor substitui integralmente a garantia legal a partir da entrega do bem ao consumidor, que a ela renuncia de forma tácita",
                "vencido o prazo da garantia contratual oferecida pelo fornecedor, nada mais pode ser reclamado pelo consumidor",
                "a garantia legal independe de termo (vedada a exoneração) e a contratual é complementar: os prazos se somam, contando-se o do art. 26 (30/90 dias) a partir do fim da contratual",
                "as garantias legal e contratual só valem para os produtos duráveis novos adquiridos diretamente do fabricante"
              ],
              correta: 3,
              explicacao: "Art. 24 (garantia legal obrigatória e inderrogável) + art. 50 (contratual complementar, mediante termo escrito). STJ: os prazos se somam — esgotada a garantia contratual, o consumidor ainda dispõe do prazo do art. 26 (30 dias para não duráveis, 90 para duráveis). Para vício oculto, o prazo conta da descoberta (art. 26, §3º), balizado pela vida útil do produto (critério do STJ)."
            },
            {
              id: "rel-6", modo: "juris", fonte: "CDC, art. 42, parágrafo único; STJ, EAREsp 600.663",
              enunciado: "A repetição em dobro do que foi cobrado indevidamente do consumidor (art. 42, parágrafo único, do CDC) exige:",
              alternativas: [
                "a prova da má-fé subjetiva do fornecedor ao efetuar a cobrança indevida da quantia, conforme entendimento que o STJ consolidou em julgamento de recursos repetitivos",
                "apenas a emissão da cobrança indevida, ainda que o consumidor não tenha chegado a pagar a quantia exigida",
                "cobrança indevida e pagamento do excesso pelo consumidor, salvo engano justificável — sem prova de má-fé: basta a cobrança contrariar a boa-fé objetiva (STJ, Corte Especial)",
                "a prévia formulação de reclamação administrativa que tenha restado frustrada perante o fornecedor",
                "que a dívida cobrada indevidamente tenha origem em contrato escrito firmado entre as partes"
              ],
              correta: 2,
              explicacao: "Requisitos do art. 42, p.ú.: cobrança indevida + PAGAMENTO em excesso (sem pagamento não há repetição, simples cobrança pode gerar outras sanções). A Corte Especial do STJ (EAREsp 600.663) assentou que a devolução em dobro independe da natureza do elemento volitivo (não exige má-fé), bastando conduta contrária à boa-fé objetiva — ressalvado o engano justificável, que o fornecedor deve provar."
            },
            {
              id: "rel-7", modo: "lei", fonte: "CDC, arts. 30 e 35",
              enunciado: "Publicada oferta suficientemente precisa e recusando-se o fornecedor a cumpri-la, o consumidor pode, À SUA ESCOLHA:",
              alternativas: [
                "apenas rescindir o contrato de consumo, com a devolução monetariamente atualizada de tudo o que houver pago",
                "exigir o cumprimento forçado da obrigação nos termos da oferta, aceitar outro produto ou serviço equivalente, ou rescindir o contrato com restituição atualizada e perdas e danos",
                "somente aceitar, em substituição, outro produto ou serviço equivalente que venha a ser indicado pelo próprio fornecedor",
                "exigir o pagamento do dobro do valor anunciado na oferta descumprida, a título de sanção pela recusa",
                "registrar previamente reclamação no Procon, como condição de procedibilidade para depois acionar a Justiça"
              ],
              correta: 1,
              explicacao: "Art. 30: a oferta suficientemente precisa VINCULA o fornecedor e integra o contrato. Art. 35: a escolha entre as três alternativas é do CONSUMIDOR — não do fornecedor. Ressalva jurisprudencial: erro grosseiro e evidente de sistema (ex.: TV por R$ 1) não vincula, por não gerar confiança legítima."
            }
          ]
        },
        {
          id: "relacao-consumo-2",
          titulo: "LGPD, cadastros e comércio eletrônico",
          questoes: [
            {
              id: "dig-1", modo: "juris", fonte: "CDC, art. 43, §§1º e 2º; STJ, Súmulas 359 e 404",
              enunciado: "Sobre a inscrição do consumidor em cadastros de inadimplentes:",
              alternativas: [
                "a comunicação prévia ao consumidor cabe ao credor que solicitou a inscrição, mediante notificação com aviso de recebimento entregue no endereço do contrato",
                "a comunicação prévia ao consumidor é dispensada quando a dívida estiver documentada por título executivo ou por contrato assinado com duas testemunhas",
                "cabe ao órgão mantenedor do cadastro a comunicação prévia por escrito, dispensado o aviso de recebimento — e a anotação não pode permanecer por mais de cinco anos, nem além do prazo de prescrição da dívida",
                "a anotação pode permanecer por até dez anos se a dívida não for paga, prazo que se interrompe a cada nova tentativa comprovada de cobrança extrajudicial",
                "a inscrição exige autorização judicial quando o débito for contestado"
              ],
              correta: 2,
              explicacao: "Súmula 359/STJ: o dever de comunicar é do órgão mantenedor (Serasa/SPC), não do credor. Súmula 404/STJ: dispensa-se o AR — basta o envio ao endereço. Limites temporais do art. 43: máximo de 5 anos (§1º) e, consumada a prescrição da cobrança, a anotação deve cair (§5º) — o que vier primeiro."
            },
            {
              id: "dig-2", modo: "juris", fonte: "STJ, Súmula 385",
              enunciado: "Consumidor com inscrição legítima preexistente em cadastro de inadimplentes sofre nova anotação, desta vez irregular. Nesse caso:",
              alternativas: [
                "faz jus a indenização por dano moral presumido, como em qualquer inscrição indevida, pois cada anotação irregular constitui ofensa autônoma ao bom nome",
                "não cabe indenização por dano moral pela nova anotação irregular, ressalvado o direito ao cancelamento dela — pois a inscrição legítima anterior afasta o abalo ao crédito",
                "o dano moral permanece presumido, mas o valor da indenização deve ser reduzido pela metade em razão da inscrição anterior",
                "só cabe indenização se as duas inscrições forem do mesmo credor",
                "a inscrição anterior também se torna automaticamente inexigível"
              ],
              correta: 1,
              explicacao: "Súmula 385/STJ: da anotação irregular em cadastro de proteção ao crédito não cabe dano moral quando preexiste legítima inscrição — o crédito já estava abalado por causa lícita. Permanece o direito de exigir o CANCELAMENTO da anotação irregular. Se a preexistente também for ilegítima, a súmula não se aplica."
            },
            {
              id: "dig-3", modo: "juris", fonte: "STJ, REsp 1.419.697 (Tema 710)",
              enunciado: "Sobre o sistema de pontuação de crédito (credit scoring), o STJ decidiu que:",
              alternativas: [
                "é prática ilegal e vedada, por criar perfil de consumo sem autorização, violando a privacidade e a autodeterminação informativa do consumidor avaliado",
                "depende de consentimento prévio, expresso e por escrito do consumidor avaliado, renovável a cada nova operação de crédito em que a pontuação venha a ser utilizada, sob pena de nulidade da avaliação e de indenização por dano moral presumido",
                "é prática comercial lícita, que dispensa o consentimento do avaliado — assegurados a transparência e o acesso às informações consideradas, e cabendo indenização quando houver recusa indevida de crédito baseada em dados incorretos ou desatualizados",
                "só pode ser utilizado por instituições financeiras públicas ou por bureaus de crédito autorizados pelo Banco Central em regulamento específico",
                "gera dano moral presumido sempre que a nota atribuída for baixa e o consumidor não tiver acesso prévio aos critérios do cálculo"
              ],
              correta: 2,
              explicacao: "Tema 710/STJ: o scoring é método lícito de avaliação de risco (hoje amparado também pela Lei do Cadastro Positivo), não exige consentimento, mas deve respeitar transparência, direito de acesso e revisão dos dados. O ilícito indenizável surge do uso de informações excessivas ou incorretas que causem recusa indevida — não da simples existência da nota."
            },
            {
              id: "dig-4", modo: "lei", fonte: "LGPD, art. 7º",
              enunciado: "No regime da Lei Geral de Proteção de Dados, o tratamento de dados pessoais:",
              alternativas: [
                "só é lícito mediante consentimento livre, informado e inequívoco do titular, que pode revogá-lo a qualquer tempo, invalidando o tratamento desde a origem",
                "pode ocorrer com base em dez hipóteses legais — o consentimento é apenas uma delas, ao lado, por exemplo, da execução de contrato, do cumprimento de obrigação legal, da proteção da vida e do legítimo interesse do controlador",
                "é livre e ilimitado quando se tratar de dados tornados públicos pelo próprio titular em redes sociais ou em cadastros de acesso geral",
                "depende sempre de autorização prévia e específica da Autoridade Nacional de Proteção de Dados, renovável a cada dois anos",
                "é vedado para fins comerciais de qualquer natureza, admitindo-se somente as finalidades acadêmicas, jornalísticas e de segurança pública"
              ],
              correta: 1,
              explicacao: "Art. 7º da LGPD: dez bases legais autônomas — a prova adora sugerir que o consentimento é a única. O legítimo interesse (inciso IX) exige teste de balanceamento e pode ser revisto pela ANPD. Para dados SENSÍVEIS (art. 11), o regime é mais restrito. E dado publicizado pelo titular ainda exige respeito à finalidade e à boa-fé."
            },
            {
              id: "dig-5", modo: "juris", fonte: "LGPD, arts. 42 a 44; STJ, AREsp 2.130.619",
              enunciado: "Quanto à responsabilidade civil por vazamento de dados pessoais, o STJ entende que:",
              alternativas: [
                "todo e qualquer vazamento de dados gera dano moral presumido (in re ipsa) ao titular, dada a gravidade intrínseca da exposição não autorizada",
                "o vazamento de dados pessoais comuns (nome, CPF, endereço) não gera dano moral presumido — o titular deve comprovar o efetivo prejuízo; tratando-se de dados sensíveis, a exposição indevida tem maior aptidão lesiva",
                "não há responsabilidade civil do controlador sem a prova de que agiu com dolo ou culpa grave na guarda das informações vazadas",
                "a responsabilidade civil é exclusiva do agente criminoso que invadiu o sistema, ficando o controlador exonerado por se tratar de fato de terceiro",
                "somente a Autoridade Nacional de Proteção de Dados pode reconhecer o dever de indenizar, em processo administrativo prévio à via judicial"
              ],
              correta: 1,
              explicacao: "STJ (AREsp 2.130.619, 2023): vazamento de dados COMUNS não configura dano moral in re ipsa — exige prova do dano concreto (ex.: fraudes decorrentes). Dados sensíveis (saúde, biometria, orientação sexual — art. 5º, II) elevam o potencial lesivo. A responsabilidade do controlador decorre dos arts. 42-44 da LGPD; ataque externo não o exime automaticamente se faltaram medidas de segurança adequadas."
            },
            {
              id: "dig-6", modo: "juris", fonte: "Marco Civil, arts. 19 e 21; STF, Temas 533 e 987 (2025)",
              enunciado: "Sobre a responsabilidade dos provedores de aplicação por conteúdo de terceiros, após o julgamento do STF em 2025:",
              alternativas: [
                "permanece integral e plenamente válida a regra do art. 19: o provedor de aplicação só responde civilmente pelos danos se descumprir ordem judicial específica de remoção do conteúdo apontado como infringente, qualquer que seja a natureza do ilícito publicado pelo terceiro, garantia que o STF reputou essencial à liberdade de expressão na internet",
                "o art. 19 do Marco Civil foi declarado parcialmente inconstitucional: em regra, o provedor responde se não remover conteúdo ilícito após notificação extrajudicial — mantida a exigência de ordem judicial para crimes contra a honra e prevista responsabilidade qualificada para anúncios pagos e redes de contas inautênticas",
                "os provedores de aplicação passaram a responder de forma objetiva e imediata por todo conteúdo publicado por seus usuários, independentemente de notificação ou de ordem judicial de remoção",
                "a remoção de qualquer conteúdo publicado por terceiros passou a depender de prévia decisão administrativa da Autoridade Nacional de Proteção de Dados, mediante provocação do ofendido",
                "o STF validou integralmente a constitucionalidade do art. 19, vedando expressamente que a notificação extrajudicial do ofendido gere qualquer dever de remoção pelo provedor"
              ],
              correta: 1,
              explicacao: "STF, Temas 987 e 533 (jun/2025): inconstitucionalidade PARCIAL e progressiva do art. 19. Enquanto não vier lei nova, aplica-se como regra o regime do art. 21 (responsabilidade após notificação extrajudicial); crimes contra a honra seguem exigindo ordem judicial; e há dever de cuidado agravado — com responsabilidade mesmo sem notificação — para conteúdos impulsionados/pagos e redes de distribuição artificial, além de rol de crimes graves com dever de atuação proativa."
            },
            {
              id: "dig-7", modo: "juris", fonte: "STJ, Súmula 479",
              enunciado: "Em fraudes e golpes praticados por terceiros no âmbito de operações bancárias (ex.: contratos abertos por estelionatários com dados vazados):",
              alternativas: [
                "o banco só responde se o consumidor provar a falha específica de segurança do sistema que permitiu a atuação do estelionatário",
                "a instituição financeira responde objetivamente, por se tratar de fortuito interno ligado ao risco do empreendimento — podendo a responsabilidade ser afastada quando comprovada culpa exclusiva do consumidor",
                "trata-se de fortuito externo equiparável a caso de força maior, que sempre exclui a responsabilidade civil da instituição financeira",
                "a responsabilidade do banco é subjetiva, dependendo da prova de negligência grave dos seus prepostos na conferência dos documentos",
                "somente o criminoso responde pelos danos causados, na esfera penal, restando ao consumidor lesado habilitar o seu crédito indenizatório na ação penal condenatória ou executar civilmente a sentença penal transitada em julgado"
              ],
              correta: 1,
              explicacao: "Súmula 479/STJ: fraudes e delitos de terceiros em operações bancárias são FORTUITO INTERNO — risco da atividade — e geram responsabilidade objetiva (CDC, art. 14). A válvula de escape é a culpa exclusiva da vítima (art. 14, §3º, II): em golpes de engenharia social em que o próprio cliente entrega senha e cartão, o STJ tem afastado o dever de indenizar, conforme as circunstâncias."
            }
          ]
        },
        {
          id: "relacao-consumo-3",
          titulo: "Publicidade, oferta e práticas abusivas",
          questoes: [
            {
              id: "pub-1", modo: "lei", fonte: "CDC, art. 37, §§1º e 2º",
              enunciado: "Sobre a distinção entre publicidade enganosa e abusiva no CDC:",
              alternativas: [
                "ambas exigem, para a sua configuração, a prova da intenção deliberada de enganar ou de ofender o consumidor por parte do fornecedor anunciante, dada a natureza sancionatória da vedação legal",
                "enganosa é a informação falsa ou capaz de induzir o consumidor em erro; abusiva é, entre outras, a discriminatória, a que incita à violência ou se aproveita da deficiência de julgamento da criança — e a enganosa por omissão ocorre quando se deixa de informar dado essencial",
                "somente a publicidade enganosa é juridicamente vedada pelo CDC; a abusiva configura mera infração ética, sujeita apenas à autorregulamentação publicitária do CONAR",
                "a publicidade abusiva depende da comprovação de dano efetivo e individualizado ao consumidor para se tornar ilícita, pois a vedação legal não alcança o perigo abstrato",
                "a publicidade enganosa refere-se exclusivamente ao preço e às condições de pagamento, enquanto a abusiva diz respeito apenas à qualidade essencial do produto anunciado"
              ],
              correta: 1,
              explicacao: "Art. 37: §1º define a enganosa (informação falsa ou que induza em erro, comissiva ou por omissão de dado essencial — §3º); §2º define a abusiva (discriminatória, que incite violência, explore medo/superstição, se aproveite da criança, desrespeite valores ambientais etc.). A responsabilidade é OBJETIVA — independe de intenção de enganar. O ônus de provar a veracidade da informação é do fornecedor (art. 38)."
            },
            {
              id: "pub-2", modo: "lei", fonte: "CDC, art. 39, I",
              enunciado: "A chamada 'venda casada' — condicionar o fornecimento de produto ou serviço ao de outro — é prática:",
              alternativas: [
                "lícita, se houver desconto na aquisição conjunta",
                "abusiva e vedada, salvo quando houver limites justificáveis ou o fornecimento estiver condicionado por lei",
                "permitida entre instituições financeiras e seus clientes",
                "válida desde que informada previamente ao consumidor",
                "vedada apenas quando envolver produtos de valor superior a um salário mínimo"
              ],
              correta: 1,
              explicacao: "Art. 39, I: é vedado condicionar o fornecimento de produto/serviço ao de outro, ou a limites quantitativos, sem justa causa. A ressalva do próprio inciso ('sem justa causa') permite limites razoáveis (ex.: quantidade máxima em promoção). Exemplo clássico no STJ: exigir a contratação de seguro para conceder empréstimo com a seguradora do próprio banco caracteriza venda casada."
            },
            {
              id: "pub-3", modo: "lei", fonte: "CDC, art. 39, III e parágrafo único",
              enunciado: "O consumidor recebe em casa um produto que não solicitou, acompanhado de cobrança. Nesse caso:",
              alternativas: [
                "deve devolver o produto às suas próprias custas no prazo legal e pagar o valor cobrado, caso opte por permanecer com o bem recebido",
                "o envio de produto sem solicitação prévia é prática abusiva, e a amostra equipara-se a amostra grátis: o consumidor pode ficar com o produto sem obrigação de pagar",
                "tem o prazo de trinta dias para providenciar a devolução do produto ao fornecedor, sob pena de caracterização da aceitação tácita da oferta",
                "deve arcar apenas com o valor do frete de devolução do produto, ficando isento do preço da mercadoria enviada sem a sua solicitação",
                "fica obrigado a pagar o valor cobrado se não manifestar a recusa por escrito ao fornecedor no prazo de cinco dias úteis do recebimento"
              ],
              correta: 1,
              explicacao: "Art. 39, III (envio de produto/serviço sem solicitação prévia é prática abusiva) c/c parágrafo único: os serviços prestados e os produtos remetidos sem solicitação equiparam-se a amostras grátis, inexistindo obrigação de pagamento. O consumidor não precisa devolver nem pagar. Aplicável hoje também a serviços 'empurrados' e cobranças automáticas não autorizadas."
            },
            {
              id: "pub-4", modo: "lei", fonte: "CDC, art. 39, V e X",
              enunciado: "Constitui prática abusiva expressamente vedada pelo CDC:",
              alternativas: [
                "conceder desconto ao consumidor para pagamento à vista em dinheiro, por configurar tratamento discriminatório entre os meios de pagamento",
                "exigir do consumidor vantagem manifestamente excessiva e elevar sem justa causa o preço de produtos ou serviços",
                "oferecer ao consumidor garantia contratual superior à garantia legal, por gerar falsa expectativa quanto à durabilidade do produto",
                "informar ao consumidor o preço total do produto na venda parcelada, com a soma de juros e encargos incidentes sobre as prestações",
                "recusar-se o consumidor a assinar orçamento prévio quando este for solicitado e apresentado formalmente pelo fornecedor do serviço"
              ],
              correta: 1,
              explicacao: "Art. 39: são abusivas, entre outras, exigir vantagem manifestamente excessiva (V) e elevar sem justa causa o preço (X). O rol do art. 39 é EXEMPLIFICATIVO ('entre outras práticas abusivas'). Repare no distrator: recusar orçamento é dever do fornecedor prestá-lo (art. 40), não uma prática do consumidor."
            },
            {
              id: "pub-5", modo: "juris", fonte: "CDC, art. 35; STJ",
              enunciado: "Uma loja anuncia produto em oferta e, procurada, recusa-se a vendê-lo pelo preço anunciado. O consumidor:",
              alternativas: [
                "só pode registrar reclamação perante o órgão administrativo de defesa do consumidor, a quem cabe aplicar multa ao fornecedor recalcitrante",
                "pode exigir o cumprimento forçado da oferta, aceitar produto equivalente ou rescindir com devolução — cabendo a ele a escolha, pois a oferta precisa vincula o fornecedor",
                "nada pode exigir do anunciante, pois a oferta publicitária constitui mero convite a contratar, sem força vinculante antes do aceite formal",
                "deve aceitar necessariamente o produto ou serviço substituto equivalente que a loja indicar, preservando-se a liberdade comercial do fornecedor",
                "só tem direito de exigir a diferença entre o preço anunciado e o menor preço praticado pelo concorrente direto na mesma praça"
              ],
              correta: 1,
              explicacao: "Arts. 30 e 35: a oferta suficientemente precisa integra o contrato e vincula o fornecedor; recusado o cumprimento, a escolha entre as três opções (cumprimento forçado, produto equivalente ou rescisão com restituição e perdas e danos) é do CONSUMIDOR. Ressalva jurisprudencial: erro grosseiro e evidente (preço irrisório por falha de sistema) não vincula, por ausência de confiança legítima."
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
      banca: "I",
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
                "depende de decisão do juiz, presente a verossimilhança ou a hipossuficiência",
                "só ocorre se houver expressa previsão contratual",
                "exige, cumulativamente, verossimilhança e hipossuficiência",
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
      banca: "I",
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
        },
        {
          id: "empresarial-2",
          titulo: "Sociedades, desconsideração e recuperação",
          questoes: [
            {
              id: "soc-1", modo: "lei", fonte: "CC, art. 1.052",
              enunciado: "Na sociedade limitada, a responsabilidade de cada sócio:",
              alternativas: [
                "é ilimitada e solidária pelas obrigações sociais",
                "é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social",
                "limita-se ao valor de suas quotas, sem nenhuma solidariedade entre os sócios",
                "alcança o patrimônio pessoal sempre que a sociedade for condenada judicialmente",
                "é subsidiária à do administrador não sócio"
              ],
              correta: 1,
              explicacao: "Art. 1.052 do CC: a regra da limitação vem acompanhada do condicionante que derruba candidatos — enquanto o capital não estiver INTEGRALIZADO, todos os sócios respondem solidariamente pela parte que faltar, ainda que já tenham pago as próprias quotas. Integralizado o capital, o patrimônio pessoal só é alcançado por desconsideração."
            },
            {
              id: "soc-2", modo: "lei", fonte: "CC, art. 50, §3º",
              enunciado: "A desconsideração INVERSA da personalidade jurídica consiste em:",
              alternativas: [
                "atingir os bens pessoais dos sócios e administradores por dívidas contraídas em nome da sociedade, mediante prova do abuso da personalidade jurídica",
                "extinguir e liquidar judicialmente a pessoa jurídica que tenha sido utilizada de forma abusiva pelos seus sócios controladores",
                "atingir os bens da pessoa jurídica por obrigações do sócio que nela ocultou patrimônio — modalidade hoje expressa no Código Civil e frequente em execuções de alimentos e partilhas",
                "transferir a administração da sociedade a um interventor judicial nomeado pelo juízo, até a satisfação integral do crédito exequendo",
                "responsabilizar exclusivamente o administrador não sócio pelos atos de gestão que praticou com excesso de poderes ou infração à lei"
              ],
              correta: 2,
              explicacao: "Art. 50, §3º, do CC (incluído pela Lei 13.874/2019) positivou a desconsideração inversa: o devedor esvazia o patrimônio pessoal transferindo bens à PJ que controla — o juiz então alcança os bens da sociedade. Exige os mesmos pressupostos da teoria maior (desvio de finalidade ou confusão patrimonial) e observa o incidente dos arts. 133-137 do CPC."
            },
            {
              id: "soc-3", modo: "lei", fonte: "CC, arts. 1.003, parágrafo único, e 1.032",
              enunciado: "O sócio que se retira da sociedade:",
              alternativas: [
                "libera-se de toda e qualquer responsabilidade na data da assinatura do instrumento de alteração contratual pelos sócios remanescentes",
                "continua responsável pelas obrigações sociais anteriores por até dois anos após averbada a modificação do contrato social",
                "responde solidariamente pelas dívidas futuras da sociedade pelo prazo de cinco anos contado da sua efetiva saída do quadro social",
                "nunca mais responde por obrigações sociais de nenhuma natureza após formalizada a retirada perante os demais sócios",
                "só responde por obrigações posteriores à saída se houver exercido a administração da sociedade no período correspondente"
              ],
              correta: 1,
              explicacao: "Arts. 1.003, parágrafo único, e 1.032 do CC: a retirada, exclusão ou morte não exime o sócio (ou herdeiros) das obrigações anteriores até 2 anos APÓS A AVERBAÇÃO da resolução. O marco é a averbação no registro — sem ela, a responsabilidade se prolonga. Pegadinha clássica: contar o prazo da assinatura, e não da averbação."
            },
            {
              id: "soc-4", modo: "lei", fonte: "CC, art. 1.052, §1º (Lei 13.874/2019)",
              enunciado: "Sobre a Sociedade Limitada Unipessoal (SLU):",
              alternativas: [
                "é vedada no direito brasileiro, pois toda sociedade pressupõe a pluralidade de sócios como elemento essencial do contrato social",
                "exige a integralização de capital mínimo de cem salários mínimos no ato constitutivo, tal como se exigia da antiga EIRELI",
                "a sociedade limitada pode ser constituída por uma só pessoa, sem exigência de capital mínimo — mantendo a separação entre o patrimônio pessoal e o da sociedade",
                "só pode ser constituída por pessoa jurídica que figure como sócia única, vedada a unipessoalidade à pessoa natural",
                "converte-se automaticamente em empresário individual se não admitir novo sócio no prazo de um ano da sua constituição"
              ],
              correta: 2,
              explicacao: "Art. 1.052, §§1º e 2º, do CC (Lei da Liberdade Econômica): a limitada unipessoal dispensa pluralidade e não tem capital mínimo — vantagens que levaram à extinção da EIRELI (Lei 14.195/2021, que converteu as existentes em SLU). Importante para o pequeno empreendedor: limitação de responsabilidade sem precisar de sócio de fachada."
            },
            {
              id: "soc-5", modo: "lei", fonte: "Lei 11.101/05, art. 49, caput e §3º",
              enunciado: "Estão sujeitos à recuperação judicial:",
              alternativas: [
                "apenas os créditos vencidos e exigíveis na data do pedido, ficando os vincendos sujeitos às condições originalmente contratadas com cada credor",
                "todos os créditos existentes na data do pedido, ainda que não vencidos — com exceções relevantes, como o credor proprietário fiduciário, cujo crédito não se submete aos efeitos da recuperação (a chamada trava bancária)",
                "todos os créditos contra a empresa devedora, inclusive os constituídos após o pedido, até a data da concessão da recuperação pelo juízo competente",
                "somente os créditos quirografários, permanecendo íntegros os créditos com garantia real e os privilegiados de qualquer natureza",
                "apenas os créditos trabalhistas e os tributários, dada a natureza social e pública que justifica o tratamento diferenciado desses credores"
              ],
              correta: 1,
              explicacao: "Art. 49, caput: sujeitam-se TODOS os créditos existentes na data do pedido, mesmo vincendos. O §3º excepciona o proprietário fiduciário, o arrendador mercantil e o vendedor com reserva de domínio, entre outros — que mantêm seus direitos, respeitado o período de suspensão (stay) quanto a bens de capital essenciais. Créditos posteriores ao pedido são extraconcursais e estimulam o financiamento da empresa em crise."
            },
            {
              id: "soc-6", modo: "lei", fonte: "Lei 6.404/76, art. 1º",
              enunciado: "Na sociedade anônima, a responsabilidade do acionista:",
              alternativas: [
                "é limitada ao valor nominal total das ações subscritas pelo conjunto dos acionistas, que respondem solidariamente pela integralização do capital social",
                "é limitada ao preço de emissão das ações subscritas ou adquiridas — sem a solidariedade pela integralização do capital que caracteriza a sociedade limitada",
                "é ilimitada para o acionista controlador em qualquer hipótese, dada a posição de comando que exerce sobre os negócios da companhia",
                "alcança o patrimônio pessoal de todos os acionistas quando a companhia for fechada e não tiver as ações negociadas em bolsa",
                "depende integralmente do que dispuser o estatuto social da companhia, que pode ampliá-la ou restringi-la conforme a classe de ações"
              ],
              correta: 1,
              explicacao: "Art. 1º da Lei 6.404/76: responsabilidade limitada ao preço de emissão das ações. Contraste de prova com a limitada (CC, art. 1.052): na S.A. NÃO há solidariedade dos acionistas pela integralização do capital — cada um responde apenas pelas próprias ações. O controlador responde por atos com abuso de poder (art. 117), o que é outra via, não regra geral."
            },
            {
              id: "soc-7", modo: "lei", fonte: "CC, art. 1.085",
              enunciado: "A exclusão EXTRAJUDICIAL de sócio minoritário da sociedade limitada, por justa causa, exige:",
              alternativas: [
                "apenas a deliberação da maioria simples dos sócios presentes à reunião ordinária, comunicada por escrito ao excluído no prazo de dez dias",
                "sempre o ajuizamento de ação judicial de dissolução parcial da sociedade, com produção de provas sob contraditório pleno, vedada ao ordenamento qualquer forma de exclusão deliberada extrajudicialmente pelos próprios sócios majoritários",
                "previsão expressa no contrato social, deliberação de titulares de mais da metade do capital por atos de inegável gravidade, e reunião ou assembleia especialmente convocada, ciente o acusado em tempo hábil para comparecer e se defender",
                "a aprovação unânime dos demais sócios, formalizada por escritura pública lavrada em cartório de notas com a presença de duas testemunhas",
                "a prévia autorização da Junta Comercial do estado da sede, após procedimento administrativo com contraditório do sócio excluendo"
              ],
              correta: 2,
              explicacao: "Art. 1.085 do CC, com seus três condicionantes: cláusula permissiva no contrato social, maioria absoluta do capital reconhecendo atos de inegável gravidade, e assembleia/reunião específica com direito de defesa do excluído. Sem previsão contratual, resta a via judicial (art. 1.030). Exceção ao rito (parágrafo único): sociedade de apenas dois sócios dispensa a reunião."
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
                "é órgão permanente e autônomo, não jurisdicional, encarregado de zelar pelos direitos da criança e do adolescente",
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
        },
        {
          id: "infancia-idoso-2",
          titulo: "Escuta protegida, Henry Borel e pessoa idosa",
          questoes: [
            {
              id: "vid-1", modo: "lei", fonte: "Lei 13.431/2017, arts. 7º, 8º e 11",
              enunciado: "Na proteção de crianças e adolescentes vítimas ou testemunhas de violência, distinguem-se:",
              alternativas: [
                "a escuta especializada e o depoimento especial, procedimentos que devem ser colhidos exclusivamente pelo juiz da infância, em audiência una e reservada",
                "a escuta especializada, realizada por órgão da rede de proteção e limitada ao estritamente necessário, e o depoimento especial, colhido perante autoridade policial ou judiciária como meio de prova, em rito próprio e acolhedor",
                "a escuta especializada, que constitui o meio de prova judicial por excelência, e o depoimento especial, de finalidade meramente protetiva e assistencial",
                "a inquirição comum em audiência e a acareação da vítima com o suposto agressor, quando houver divergência relevante entre as versões apresentadas",
                "dois procedimentos materialmente idênticos, com nomes distintos conforme a fase — investigativa ou judicial — em que a oitiva é realizada"
              ],
              correta: 1,
              explicacao: "Arts. 7º e 8º da Lei 13.431/2017. O depoimento especial segue procedimento protetivo (art. 12): local apropriado, gravação, vedação de contato com o acusado. Regra de ouro (art. 11): será realizado UMA única vez e como produção antecipada de prova quando a vítima tiver menos de 7 anos ou em caso de violência sexual — para evitar a revitimização."
            },
            {
              id: "vid-2", modo: "lei", fonte: "Lei 14.344/2022 (Lei Henry Borel), arts. 16 e 20",
              enunciado: "Segundo a Lei Henry Borel (violência doméstica e familiar contra criança e adolescente):",
              alternativas: [
                "as medidas protetivas de urgência dependem de prévia audiência de justificação com a presença obrigatória do suposto agressor e do Ministério Público, garantido o contraditório antes da imposição de qualquer restrição de direitos",
                "somente o Ministério Público, na condição de fiscal da ordem jurídica e defensor dos interesses de crianças e adolescentes, pode requerer a concessão de medidas protetivas",
                "a lei alcança apenas as agressões praticadas pelos pais ou responsáveis legais, não se aplicando à violência cometida por outros integrantes do núcleo doméstico",
                "as medidas protetivas de urgência podem ser concedidas de imediato, independentemente de audiência das partes; havendo risco atual ou iminente, o afastamento do agressor do lar pode ser determinado até pelo delegado ou policial, quando o município não for sede de comarca",
                "as medidas protetivas aplicam-se somente aos casos de violência sexual, regendo-se as demais formas de violência pelo sistema geral de proteção do ECA"
              ],
              correta: 3,
              explicacao: "A Lei 14.344/2022 espelha a Maria da Penha: medidas protetivas imediatas, sem audiência prévia das partes (art. 20), e afastamento emergencial do lar decidido por delegado ou policial onde não houver comarca instalada, com comunicação ao juiz em 24 horas (art. 16). A violência pode partir de qualquer pessoa do convívio doméstico ou familiar."
            },
            {
              id: "vid-3", modo: "lei", fonte: "Estatuto da Pessoa Idosa, arts. 12 e 14",
              enunciado: "Quanto aos alimentos devidos à pessoa idosa:",
              alternativas: [
                "seguem fielmente a regra geral do Código Civil, segundo a qual a obrigação alimentar entre parentes é divisível na proporção dos recursos de cada devedor",
                "a obrigação alimentar é solidária, e a pessoa idosa pode optar entre os prestadores — exceção à regra geral do Código Civil, que consagra a divisibilidade",
                "somente podem ser cobrados dos filhos que residem sob o mesmo teto que a pessoa idosa, dada a presunção legal de assistência dos que convivem",
                "excluem qualquer responsabilidade do Poder Público, ainda que nem a pessoa idosa nem os seus familiares disponham de meios para prover o sustento",
                "dependem da prévia comprovação judicial do abandono material da pessoa idosa pelos familiares obrigados, inclusive para fins penais"
              ],
              correta: 1,
              explicacao: "Art. 12 do Estatuto (Lei 10.741/2003): a obrigação alimentar é solidária, podendo a pessoa idosa optar entre os prestadores — pode demandar apenas o filho com melhores condições, sem litisconsórcio necessário. No CC a regra é outra (arts. 1.696-1.698: divisibilidade e chamamento). Se nem a pessoa idosa nem a família têm condições, a obrigação é do Poder Público, no âmbito da assistência social (art. 14)."
            },
            {
              id: "vid-4", modo: "juris", fonte: "Estatuto da Pessoa Idosa, art. 15, §3º; STJ, Tema 952",
              enunciado: "Nos planos de saúde, em relação à pessoa idosa:",
              alternativas: [
                "a operadora pode recusar a admissão de novo beneficiário em razão da idade avançada, desde que a política de aceitação conste do contrato e do material publicitário",
                "o reajuste de mensalidade por mudança de faixa etária é sempre inválido, em qualquer idade do beneficiário, por configurar discriminação vedada pelo sistema protetivo",
                "é vedada a discriminação com cobrança de valores diferenciados em razão da idade; o STJ, porém, admite o reajuste na última faixa etária (59 anos) se houver previsão contratual clara, conformidade com as normas da ANS e percentuais razoáveis",
                "a vedação legal de discriminação etária alcança somente os planos coletivos empresariais, não se aplicando aos contratos individuais e familiares",
                "a mensalidade do plano fica congelada quando o beneficiário completa 60 anos, vedado a partir daí inclusive o reajuste anual autorizado pela ANS"
              ],
              correta: 2,
              explicacao: "Art. 15, §3º, do Estatuto: é vedada a discriminação da pessoa idosa pela cobrança de valores diferenciados em razão da idade. Por isso as faixas etárias da ANS terminam aos 59 anos. O STJ (Tema 952) valida o reajuste da última faixa quando previsto em cláusula clara, conforme as normas regulamentares e sem percentuais desarrazoados — o reajuste anual ordinário continua lícito."
            },
            {
              id: "vid-5", modo: "lei", fonte: "Estatuto da Pessoa Idosa, arts. 43 e 45",
              enunciado: "As medidas de proteção à pessoa idosa são aplicáveis quando seus direitos forem ameaçados ou violados:",
              alternativas: [
                "somente por ação ou omissão da sociedade ou do Estado, pois as relações familiares privadas escapam ao alcance do sistema protetivo estatutário",
                "apenas quando houver violência física comprovada por laudo pericial, não bastando a violência psicológica, patrimonial ou financeira contra a pessoa idosa",
                "exclusivamente a requerimento da própria pessoa idosa interessada, em respeito à sua autonomia e à sua capacidade civil plena",
                "mediante prévia sentença penal condenatória transitada em julgado contra o agressor, pressuposto da intervenção protetiva do Estado",
                "por ação ou omissão da sociedade ou do Estado, por falta, omissão ou abuso da família, curador ou entidade de atendimento, ou ainda em razão da própria condição pessoal da pessoa idosa"
              ],
              correta: 4,
              explicacao: "Art. 43 do Estatuto — rol que inclui a violação praticada pela própria família e a situação de vulnerabilidade pessoal. O art. 45 traz as medidas (encaminhamento à família, requisição de tratamento, inclusão em programa de auxílio, abrigo em entidade etc.), campo típico de atuação protetiva da Defensoria."
            },
            {
              id: "vid-6", modo: "lei", fonte: "Estatuto da Pessoa Idosa, art. 95; CP, art. 183, III",
              enunciado: "Os crimes definidos no Estatuto da Pessoa Idosa:",
              alternativas: [
                "são de ação penal pública condicionada à representação da vítima ou do seu representante legal, em respeito à autonomia da pessoa idosa ofendida",
                "dependem do oferecimento de queixa-crime pela pessoa idosa ofendida ou por seu curador, no prazo decadencial de seis meses do conhecimento da autoria",
                "admitem a aplicação das imunidades familiares absolutória e relativa dos arts. 181 e 182 do Código Penal, dada a preservação da harmonia familiar",
                "são de ação penal pública incondicionada — e as escusas absolutórias entre familiares não se aplicam nos crimes patrimoniais contra maiores de 60 anos",
                "somente se processam mediante requisição do Ministério da Justiça, dada a dimensão nacional da política de proteção à pessoa idosa"
              ],
              correta: 3,
              explicacao: "Art. 95 do Estatuto: ação penal pública incondicionada. E o art. 183, III, do CP afasta as imunidades dos arts. 181/182 quando a vítima tem 60 anos ou mais: o filho ou cônjuge que pratica crime patrimonial contra a pessoa idosa responde normalmente — chave para enfrentar a violência patrimonial e financeira intrafamiliar."
            }
          ]
        },
        {
          id: "infancia-idoso-3",
          titulo: "Adoção, acolhimento e educação",
          questoes: [
            {
              id: "ado-1", modo: "lei", fonte: "ECA, arts. 39, §1º, e 50",
              enunciado: "Sobre a adoção no ECA, é correto afirmar que:",
              alternativas: [
                "é medida prioritária do sistema protetivo, que deve ser buscada antes mesmo da tentativa de manutenção da criança na família natural ou extensa",
                "é medida excepcional e irrevogável, à qual se recorre quando esgotados os recursos de manutenção na família natural ou extensa — em regra precedida de habilitação e cadastro dos pretendentes",
                "pode ser revogada a qualquer tempo pelos pais adotivos, mediante requerimento fundamentado ao juízo da infância, ouvido o Ministério Público",
                "dispensa a habilitação e o cadastro sempre que os pretendentes à adoção comprovarem boa condição financeira e idoneidade moral",
                "só é admitida a casais heterossexuais unidos pelo casamento civil há pelo menos dois anos, comprovada a estabilidade da relação familiar"
              ],
              correta: 1,
              explicacao: "Art. 39, §1º: a adoção é medida EXCEPCIONAL e IRREVOGÁVEL — recorre-se a ela esgotadas as tentativas de manutenção na família natural/extensa (prioridade da convivência familiar, art. 19). Regra: habilitação prévia e cadastro (art. 50). Excepciona-se o cadastro em três hipóteses do §13 (adoção unilateral, por parente com vínculo, ou por quem detém guarda/tutela de criança maior de 3 anos com vínculo afetivo comprovado)."
            },
            {
              id: "ado-2", modo: "juris", fonte: "ECA, art. 50, §13; STJ",
              enunciado: "Sobre a chamada adoção 'intuitu personae' (dirigida a pessoa determinada, fora da ordem do cadastro):",
              alternativas: [
                "é sempre vedada pelo ordenamento, prevalecendo em qualquer caso a ordem cronológica do cadastro de pretendentes, garantia de impessoalidade do sistema",
                "é livre no direito brasileiro, podendo os pais biológicos escolher diretamente os adotantes do filho, sem qualquer forma de controle ou de chancela judicial",
                "não é prevista expressamente, mas o STJ a admite excepcionalmente quando demonstrado o vínculo de afinidade e afetividade já constituído, à luz do melhor interesse da criança, ainda que os pretendentes não estejam no topo do cadastro",
                "só é admitida quando os pretendentes forem parentes da criança até o segundo grau, hipótese legal expressa de dispensa do cadastro",
                "depende exclusivamente da concordância prévia e expressa do Ministério Público, a quem a lei atribui a fiscalização da ordem do cadastro"
              ],
              correta: 2,
              explicacao: "O cadastro (art. 50) é a regra e resguarda a impessoalidade, mas não é absoluto: o STJ, com base no princípio do melhor interesse e no §13, admite a adoção fora da ordem quando já existe vínculo afetivo consolidado (ex.: criança que vive há tempo com a família), evitando romper laços em nome da mera ordem cronológica. Não confundir com 'adoção à brasileira' (registro de filho alheio como próprio), que é crime (CP, art. 242)."
            },
            {
              id: "ado-3", modo: "lei", fonte: "ECA, art. 46",
              enunciado: "O estágio de convivência, na adoção:",
              alternativas: [
                "é sempre dispensável quando os adotantes já tiverem outros filhos, biológicos ou adotivos, pois a experiência parental anterior comprovada supre a necessidade de avaliação técnica do novo vínculo pela equipe interprofissional do juízo",
                "será acompanhado pela equipe interprofissional e terá prazo máximo de noventa dias, prorrogável por igual período — podendo ser dispensado se o adotando já estiver sob a tutela ou guarda legal do adotante por tempo suficiente para avaliar o vínculo",
                "tem prazo mínimo de um ano, improrrogável, período necessário para a consolidação psicológica do vínculo entre adotando e adotantes",
                "só existe na adoção internacional, na qual o período de convivência deve ser cumprido integralmente no país de acolhida dos adotantes",
                "é substituído de forma automática pela guarda provisória em todos os casos nos quais a criança já se encontre acolhida institucionalmente"
              ],
              correta: 1,
              explicacao: "Art. 46: prazo máximo de 90 dias, prorrogável uma vez por igual período mediante decisão fundamentada (§2º-A). Dispensa possível quando já há convivência anterior (tutela/guarda legal) suficiente para aferir o vínculo (§1º) — mas a simples guarda de fato não basta. Na adoção internacional o estágio é obrigatório e cumprido no Brasil (§3º), com prazo mínimo próprio."
            },
            {
              id: "ado-4", modo: "lei", fonte: "ECA, arts. 19, §1º, e 101, §§1º e 10",
              enunciado: "Sobre o acolhimento institucional e o Plano Individual de Atendimento (PIA):",
              alternativas: [
                "o acolhimento institucional constitui medida definitiva de colocação em família substituta, equiparada à tutela para todos os efeitos legais, cessando com ela o poder familiar dos genitores e a possibilidade de retorno à família de origem",
                "o acolhimento é medida provisória e excepcional, reavaliada no máximo a cada três meses, não devendo a permanência exceder dezoito meses, salvo comprovada necessidade — e cabe à equipe elaborar o PIA visando à reintegração familiar",
                "a criança acolhida institucionalmente não pode mais ser reintegrada à família de origem, restando apenas o encaminhamento para adoção",
                "o Plano Individual de Atendimento é elaborado apenas nos procedimentos de adoção internacional, por exigência das convenções ratificadas",
                "a reavaliação da medida de acolhimento é anual e feita exclusivamente pelo Conselho Tutelar do local onde situada a entidade de atendimento"
              ],
              correta: 1,
              explicacao: "Art. 19, §1º: reavaliação no máximo a cada 3 meses; art. 19, §2º: permanência em acolhimento não deve exceder 18 meses, salvo necessidade que atenda ao melhor interesse (redação da Lei 13.509/2017). O PIA (art. 101, §§4º a 6º) é elaborado pela equipe do serviço, com prioridade à reintegração familiar. As audiências concentradas (Lei 12.010/2009) revisam periodicamente todas as crianças acolhidas."
            },
            {
              id: "ado-5", modo: "juris", fonte: "CF, art. 208, IV; ECA, art. 54, IV; STF, Tema 548",
              enunciado: "Sobre o direito à educação infantil (creche e pré-escola) e sua judicialização:",
              alternativas: [
                "trata-se de norma constitucional de natureza meramente programática, insuscetível de exigência judicial direta pelos interessados",
                "o atendimento em creche e pré-escola é direito subjetivo, podendo o Judiciário determinar sua efetivação sem que isso viole a separação de poderes ou a reserva do possível",
                "só pode ser exigido judicialmente depois de esgotada a via administrativa perante a Secretaria de Educação pelo prazo mínimo de dois anos",
                "depende da disponibilidade orçamentária do município, cuja alegação comprovada de insuficiência afasta a obrigação de criar novas vagas",
                "é dever exclusivo dos pais e da família, cabendo ao Estado somente o ensino fundamental obrigatório a partir dos seis anos de idade"
              ],
              correta: 1,
              explicacao: "STF, Tema 548 (RE 1.008.166): a educação infantil (creche até 3 anos e pré-escola de 4-5) é direito subjetivo, e o Judiciário pode impor ao município a criação de vagas, sem ofensa à separação de poderes nem à reserva do possível — que não pode ser invocada para frustrar o mínimo existencial. Frente clássica de atuação da Defensoria em tutela individual e coletiva."
            },
            {
              id: "ado-6", modo: "lei", fonte: "Lei 12.764/2012, art. 3º, IV, 'a'; ECA, art. 54, III",
              enunciado: "Uma escola recusa matrícula de criança com Transtorno do Espectro Autista alegando falta de estrutura. Essa recusa:",
              alternativas: [
                "é lícita, pois nenhuma escola privada é obrigada a adaptar sua estrutura física e pedagógica para receber alunos com necessidades específicas",
                "é vedada: constitui direito da pessoa com TEA o acesso à educação e ao ensino, e a recusa de matrícula por escola regular em razão da deficiência é expressamente proibida, sujeitando o gestor a sanção",
                "só é ilícita quando praticada por escolas da rede pública de ensino, permanecendo as instituições privadas livres para definir seus critérios",
                "é válida desde que a escola ofereça o reembolso integral da mensalidade e indique outra instituição especializada apta a receber a criança",
                "depende, para ser lícita, de laudo da equipe pedagógica que ateste tecnicamente a impossibilidade de inclusão do aluno naquela comunidade escolar"
              ],
              correta: 1,
              explicacao: "Lei Berenice Piana (12.764/2012), art. 3º, parágrafo único: é vedado recusar matrícula a aluno em razão da deficiência — e o gestor ou autoridade competente responde por sanção (multa). No mesmo sentido, o Estatuto da Pessoa com Deficiência (art. 28, §1º) e o dever de atendimento educacional especializado (CF, art. 208, III). A escola, pública ou privada, deve adaptar-se (não repassar custos das adaptações ao aluno)."
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
        },
        {
          id: "proc-penal-juris-4",
          titulo: "Prisões, cautelares e reconhecimento",
          questoes: [
            {
              id: "cau-1", modo: "lei", fonte: "CPP, arts. 282, §2º, 311 e 312",
              enunciado: "Após o Pacote Anticrime, quanto à decretação da prisão preventiva:",
              alternativas: [
                "o juiz pode decretá-la de ofício no curso da ação penal, vedada apenas a decretação de ofício na fase de investigação policial, na qual depende de representação da autoridade ou de requerimento ministerial",
                "ficou vedada a decretação de ofício em qualquer fase — a preventiva depende de requerimento do MP, do querelante ou assistente, ou de representação da autoridade policial",
                "a decretação de ofício permanece possível em qualquer fase da persecução, por força do poder geral de cautela do juiz criminal",
                "somente o juiz das garantias pode decretá-la, mediante provocação exclusiva do Ministério Público",
                "passou a exigir a prévia oitiva da defesa em todas as hipóteses, sem exceção de urgência"
              ],
              correta: 1,
              explicacao: "A Lei 13.964/2019 suprimiu a expressão 'de ofício' dos arts. 282, §2º, e 311 do CPP: a preventiva agora EXIGE provocação (MP, querelante/assistente ou representação policial), em qualquer fase. O STJ estendeu o raciocínio: também é ilegal a CONVERSÃO de ofício do flagrante em preventiva sem requerimento (HC 590.039). Marco do sistema acusatório — bandeira defensiva de primeira hora."
            },
            {
              id: "cau-2", modo: "lei", fonte: "CPP, arts. 282, §6º, e 319",
              enunciado: "Sobre a relação entre a prisão preventiva e as medidas cautelares diversas do art. 319 do CPP:",
              alternativas: [
                "o juiz escolhe livremente entre prisão e medidas alternativas, conforme a gravidade abstrata do delito imputado",
                "a preventiva é a última ratio: só cabe quando não forem adequadas ou suficientes as cautelares diversas, e a decisão deve fundamentar, de modo concreto, a inadequação das alternativas",
                "as medidas diversas só podem ser aplicadas cumulativamente com a prisão preventiva domiciliar, funcionando como reforço da custódia nos crimes cometidos com violência ou grave ameaça contra a pessoa",
                "as cautelares do art. 319 dependem de prévia condenação em primeiro grau, dada a presunção de inocência",
                "a fiança deixou de existir como medida autônoma após a reforma de 2019"
              ],
              correta: 1,
              explicacao: "Art. 282, §6º, do CPP (redação do Pacote): a preventiva é subsidiária — a decisão deve justificar concretamente por que as medidas do art. 319 (comparecimento periódico, monitoração, proibições de contato e de ausentar-se, recolhimento noturno, fiança etc.) são inadequadas ou insuficientes. Falta dessa fundamentação = constrangimento ilegal sanável por habeas corpus."
            },
            {
              id: "cau-3", modo: "juris", fonte: "CPP, art. 310; STJ, HC 590.039",
              enunciado: "Na audiência de custódia, apresentado o preso em flagrante, o juiz deve relaxar a prisão ilegal, conceder liberdade provisória ou converter o flagrante em preventiva. Sobre essa conversão:",
              alternativas: [
                "pode ocorrer de ofício, pois a audiência de custódia é o momento processual próprio para o controle judicial completo da legalidade e da necessidade da prisão em flagrante apresentada",
                "exige requerimento do Ministério Público ou representação da autoridade policial — a conversão de ofício, sem provocação, é ilegal",
                "é obrigatória nos crimes hediondos e equiparados, por vedação legal à liberdade provisória",
                "depende de prévia manifestação favorável da Defensoria Pública quando o preso não tiver advogado",
                "só é admitida se a audiência ocorrer nas primeiras vinte e quatro horas, presumindo-se ilegal a prisão após esse prazo, com soltura automática do conduzido"
              ],
              correta: 1,
              explicacao: "STJ (HC 590.039) e STF: mesmo na audiência de custódia (que deve ocorrer em até 24h — art. 310), o juiz NÃO pode converter o flagrante em preventiva de ofício; precisa de requerimento ou representação. O atraso da audiência gera ilegalidade a ser sanada, mas não soltura automática em todos os casos. E não há prisão automática por hediondez — o STF derrubou vedações abstratas à liberdade provisória."
            },
            {
              id: "cau-4", modo: "juris", fonte: "CPP, art. 316, parágrafo único; STF, SL 1.395",
              enunciado: "O parágrafo único do art. 316 do CPP determina a revisão da necessidade da prisão preventiva a cada noventa dias. Segundo o STF:",
              alternativas: [
                "o transcurso do prazo sem revisão torna a prisão automaticamente ilegal, impondo a soltura imediata do preso independentemente de provocação da defesa ou de novo exame pelo órgão judicial competente",
                "a inobservância do prazo não gera revogação automática da prisão: o juízo deve ser instado a reavaliar a custódia, e a ilegalidade se afere caso a caso",
                "a revisão nonagesimal aplica-se somente às prisões decretadas pelos tribunais superiores no exercício da competência originária",
                "o dever de revisão foi declarado inconstitucional por invadir a discricionariedade judicial",
                "a revisão compete exclusivamente ao tribunal de segundo grau, em remessa necessária"
              ],
              correta: 1,
              explicacao: "STF (SL 1.395, caso André do Rap): o descumprimento do prazo de 90 dias NÃO acarreta soltura automática — a revisão deve ser provocada e a manutenção da prisão reavaliada fundamentadamente pelo órgão que a decretou. A tese defensiva permanece: cobrar a revisão periódica e atacar fundamentações genéricas de manutenção."
            },
            {
              id: "cau-5", modo: "juris", fonte: "CPP, art. 226; STJ, HC 598.886",
              enunciado: "Sobre o reconhecimento de pessoas, a jurisprudência atual do STJ firmou que o procedimento do art. 226 do CPP:",
              alternativas: [
                "é mera recomendação legal, podendo o reconhecimento informal ser livremente valorado pelo juiz em conjunto com as demais provas produzidas sob o crivo do contraditório judicial",
                "constitui garantia mínima de observância obrigatória: o reconhecimento (pessoal ou fotográfico) realizado em desacordo com o modelo legal é inválido e não pode lastrear a condenação, nem mesmo confirmado em juízo",
                "aplica-se apenas ao reconhecimento presencial, ficando o fotográfico submetido ao livre convencimento",
                "foi tacitamente revogado pelas técnicas modernas de identificação biométrica e genética",
                "exige a presença de advogado apenas quando o reconhecimento ocorrer em juízo"
              ],
              correta: 1,
              explicacao: "Virada jurisprudencial do HC 598.886/STJ (2020), hoje consolidada nas duas turmas criminais e acolhida pelo STF: o art. 226 é procedimento OBRIGATÓRIO (não mera recomendação). Reconhecimento — inclusive fotográfico — feito sem as formalidades (descrição prévia, alinhamento com pessoas semelhantes) é inválido e não sustenta condenação, ainda que 'confirmado' depois. Resposta ao drama dos reconhecimentos falhos que encarceram inocentes, sobretudo pessoas negras."
            },
            {
              id: "cau-6", modo: "lei", fonte: "Lei 7.960/89, arts. 1º e 2º",
              enunciado: "A prisão temporária:",
              alternativas: [
                "cabe em qualquer crime, desde que imprescindível para as investigações do inquérito policial em curso",
                "cabe apenas no rol taxativo de crimes da lei, quando imprescindível para a investigação ou quando o indiciado não tiver residência fixa ou não fornecer elementos para sua identificação — com prazo de 5 dias prorrogável por igual período (30+30 nos hediondos)",
                "pode ser decretada pela própria autoridade policial em situação de urgência, com comunicação posterior ao juiz competente no prazo improrrogável de vinte e quatro horas contado da efetivação da medida",
                "transforma-se automaticamente em preventiva ao final do prazo, se a investigação não estiver concluída",
                "foi extinta pelo Pacote Anticrime, absorvida pela prisão preventiva com prazo determinado"
              ],
              correta: 1,
              explicacao: "Lei 7.960/89: cabimento restrito ao rol do art. 1º, III (homicídio doloso, roubo, extorsão mediante sequestro etc.), sempre por decisão judicial mediante representação ou requerimento — jamais pela autoridade policial. Prazos: 5+5 dias; nos hediondos, 30+30 (Lei 8.072, art. 2º, §4º). Vencido o prazo, o preso deve ser posto imediatamente em liberdade, salvo decretação de preventiva com novos fundamentos."
            },
            {
              id: "cau-7", modo: "juris", fonte: "STF, Súmula Vinculante 11",
              enunciado: "Segundo a Súmula Vinculante 11, o uso de algemas:",
              alternativas: [
                "é ato discricionário da escolta policial, insuscetível de controle judicial posterior",
                "só é lícito em caso de resistência, fundado receio de fuga ou perigo à integridade física, por escrito justificado — sob pena de responsabilidade do agente e nulidade da prisão ou do ato processual",
                "é obrigatório em todas as audiências criminais com réu preso, como medida padronizada de segurança das partes, dos advogados e dos servidores presentes no ato judicial",
                "é vedado em qualquer hipótese durante a sessão plenária do Tribunal do Júri",
                "depende de autorização prévia do juiz em todas as diligências externas"
              ],
              correta: 1,
              explicacao: "SV 11: uso excepcional (resistência, receio de fuga, perigo à integridade), com justificação ESCRITA, sob pena de responsabilização (disciplinar, civil e penal) do agente, nulidade da prisão ou do ato e responsabilidade civil do Estado. No júri, o uso injustificado é especialmente grave — afeta a imagem do réu perante os jurados. Não é vedação absoluta: presente o risco concreto e justificado, admite-se."
            }
          ]
        },
        {
          id: "proc-penal-juris-5",
          titulo: "Competência, ação penal e Juizados",
          questoes: [
            {
              id: "comp-1", modo: "lei", fonte: "CPP, arts. 70 e 83; CP, art. 6º",
              enunciado: "Quanto à competência territorial no processo penal brasileiro, a regra geral é que:",
              alternativas: [
                "a competência firma-se pelo domicílio ou residência do réu, adotando-se o lugar do crime apenas de forma subsidiária quando o acusado não tiver residência certa no território nacional",
                "a competência é determinada pelo lugar da consumação da infração (ou, na tentativa, pelo local do último ato de execução), firmando-se por prevenção quando incerto o limite entre duas jurisdições",
                "a competência é sempre do juízo do local onde a vítima sofreu o resultado lesivo, ainda que a conduta tenha sido praticada em comarca diversa da que se produziu o resultado",
                "prevalece o lugar da conduta para todos os efeitos processuais, em coerência com a teoria da atividade adotada pelo art. 4º do Código Penal quanto ao tempo do crime",
                "aplica-se exclusivamente o critério do domicílio da vítima nos crimes de ação penal pública condicionada à representação"
              ],
              correta: 1,
              explicacao: "Art. 70 do CPP adota a teoria do RESULTADO para a competência (lugar da consumação), enquanto o art. 6º do CP adota a ubiquidade para o lugar do crime e o art. 4º a atividade para o tempo do crime — distinção clássica de prova. Na tentativa, competente é o local do último ato de execução. O domicílio do réu é foro SUBSIDIÁRIO (art. 72), quando desconhecido o lugar da infração."
            },
            {
              id: "comp-2", modo: "juris", fonte: "CF, art. 109, IV e V; STJ, Súmula 122",
              enunciado: "Sobre a competência da Justiça Federal em matéria criminal:",
              alternativas: [
                "alcança todos os crimes cometidos com repercussão interestadual ou internacional, independentemente de lesão direta a bens, serviços ou interesse da União",
                "abrange os crimes contra bens, serviços ou interesse da União, suas autarquias ou empresas públicas — e, havendo conexão entre crime federal e estadual, a Justiça Federal julga ambos",
                "no caso de conexão entre crime federal e crime estadual, impõe-se a separação obrigatória dos processos, cada qual perante o respectivo juízo natural competente",
                "é fixada pela gravidade da pena cominada, cabendo à Justiça Federal os delitos punidos com reclusão superior a oito anos",
                "compete à Justiça Federal julgar os crimes praticados contra sociedades de economia mista federais, como o Banco do Brasil e a Petrobras"
              ],
              correta: 1,
              explicacao: "Art. 109, IV, da CF: bens, serviços ou interesse da União, autarquias ou EMPRESAS PÚBLICAS. Sociedade de economia mista está FORA (Súmula 42/STJ: compete à Justiça Estadual). Súmula 122/STJ: havendo conexão entre crime federal e estadual, a Justiça Federal atrai o julgamento de ambos (vis attractiva). Súmula 147/STJ e 151/STJ complementam o quadro."
            },
            {
              id: "comp-3", modo: "lei", fonte: "CPP, arts. 24, 29 e 30; CP, art. 100",
              enunciado: "Sobre as espécies de ação penal e a legitimidade para propô-las:",
              alternativas: [
                "a ação penal privada subsidiária da pública cabe quando o Ministério Público requer o arquivamento do inquérito policial, permitindo à vítima insistir na persecução mediante queixa-crime substitutiva",
                "a ação penal privada subsidiária da pública é garantia constitucional cabível apenas na inércia do Ministério Público (não oferecimento no prazo legal), podendo o Parquet aditar a queixa e retomar a ação como parte principal se houver negligência do querelante",
                "na ação penal pública condicionada, a representação da vítima é irretratável desde o momento em que oferecida perante a autoridade policial competente",
                "a ação penal privada personalíssima admite sucessão processual pelo cônjuge, ascendente, descendente ou irmão em caso de morte do ofendido",
                "o Ministério Público pode oferecer denúncia nos crimes de ação penal privada quando entender presente relevante interesse público na persecução"
              ],
              correta: 1,
              explicacao: "CF, art. 5º, LIX, e art. 29 do CPP: a subsidiária cabe só na INÉRCIA (não oferecimento no prazo) — se o MP pediu arquivamento, não há inércia e a via está fechada. O MP mantém-se como interveniente: adita, repudia, oferece denúncia substitutiva e retoma a ação como parte principal se o querelante for negligente. A representação é retratável até o oferecimento da denúncia (art. 25)."
            },
            {
              id: "comp-4", modo: "lei", fonte: "Lei 9.099/95, arts. 61, 76 e 89",
              enunciado: "No âmbito dos Juizados Especiais Criminais, é correto afirmar que:",
              alternativas: [
                "infrações de menor potencial ofensivo são as contravenções e os crimes com pena máxima não superior a 2 anos; a transação penal cabe nessas infrações e a suspensão condicional do processo alcança crimes com pena mínima igual ou inferior a 1 ano, mesmo fora do Juizado",
                "a transação penal e a suspensão condicional do processo são institutos idênticos, aplicáveis indistintamente às infrações cuja pena máxima não ultrapasse dois anos de detenção ou reclusão",
                "a aceitação da transação penal implica reconhecimento de culpa, gera reincidência e é lançada na certidão de antecedentes criminais do autor do fato para todos os efeitos legais",
                "a suspensão condicional do processo pode ser proposta pelo juiz de ofício quando o Ministério Público se recusar injustificadamente a formulá-la ao acusado",
                "descumprida a transação penal, converte-se automaticamente a pena restritiva acordada em privativa de liberdade, independentemente de oferecimento de denúncia"
              ],
              correta: 0,
              explicacao: "Art. 61: IMPO = contravenções + crimes com pena máxima ≤ 2 anos. Transação (art. 76) é para IMPO; sursis processual (art. 89) tem critério diverso — pena MÍNIMA ≤ 1 ano, aplicável também fora do Juizado. A transação não gera reincidência nem consta de certidão para efeitos civis (art. 76, §§4º e 6º). Descumprida, o STF (SV 35) determina o retorno ao status quo: oferece-se denúncia."
            },
            {
              id: "comp-5", modo: "juris", fonte: "CPP, art. 28 (Pacote Anticrime); STF, ADI 6.298",
              enunciado: "Sobre o arquivamento do inquérito policial após a Lei 13.964/2019:",
              alternativas: [
                "o juiz continua a exercer o controle do arquivamento, podendo discordar da promoção ministerial e remeter os autos ao Procurador-Geral, conforme a antiga sistemática do art. 28 do CPP",
                "o arquivamento passou a ser ato do próprio Ministério Público, com comunicação à vítima e submissão à instância de revisão ministerial — modelo cuja eficácia foi confirmada pelo STF ao julgar as ações diretas contra o Pacote Anticrime",
                "o arquivamento tornou-se ato privativo da autoridade policial, que o comunica ao juízo competente para simples registro estatístico do encerramento da investigação criminal",
                "o inquérito só pode ser arquivado após manifestação favorável da vítima e do investigado, em audiência específica designada para essa finalidade",
                "o arquivamento passou a depender de homologação judicial obrigatória, sob pena de nulidade absoluta do ato ministerial praticado"
              ],
              correta: 1,
              explicacao: "O novo art. 28 retirou o juiz do controle do arquivamento (coerência com o sistema acusatório): o MP ordena o arquivamento e submete à instância de revisão do próprio órgão, comunicando vítima, investigado e autoridade policial. O STF (ADI 6.298 e outras, 2023) manteve o dispositivo, ajustando pontos do juiz das garantias. Encerra a antiga sistemática em que o juiz 'discordava' e remetia ao PGJ."
            },
            {
              id: "comp-6", modo: "lei", fonte: "CPP, art. 28-A (ANPP)",
              enunciado: "O acordo de não persecução penal (ANPP) é cabível quando:",
              alternativas: [
                "o investigado confessar formal e circunstancialmente a prática de infração sem violência ou grave ameaça e com pena mínima inferior a 4 anos, sendo necessário e suficiente para reprovação e prevenção — vedado, entre outros casos, se cabível transação penal ou em crimes de violência doméstica contra a mulher",
                "houver acordo entre as partes em qualquer infração penal cuja pena máxima cominada não ultrapasse oito anos de reclusão, dispensada a confissão do investigado perante a autoridade competente",
                "o acusado já estiver respondendo à ação penal, hipótese em que o acordo substitui a instrução e conduz diretamente à sentença homologatória de mérito",
                "o Ministério Público entender conveniente e oportuno propô-lo ao investigado, independentemente do preenchimento de quaisquer requisitos objetivos previstos em lei, dada a natureza inteiramente discricionária que o instituto assumiu no sistema acusatório",
                "o investigado for reincidente específico, desde que repare integralmente o dano causado à vítima antes do oferecimento da proposta"
              ],
              correta: 0,
              explicacao: "Art. 28-A do CPP: confissão formal e circunstanciada + infração SEM violência ou grave ameaça + pena mínima < 4 anos + necessidade e suficiência para reprovação/prevenção. Vedações do §2º: cabimento de transação, reincidência/habitualidade, ANPP nos 5 anos anteriores e crimes de violência doméstica ou praticados contra a mulher por razões de gênero. O STJ discute a retroatividade a processos em curso (Tema 1303)."
            },
            {
              id: "comp-7", modo: "juris", fonte: "CF, art. 5º, XXXVIII; CPP, art. 74",
              enunciado: "Quanto à competência do Tribunal do Júri:",
              alternativas: [
                "abrange todos os crimes praticados com resultado morte, incluindo o latrocínio e a lesão corporal seguida de morte, dada a identidade do bem jurídico tutelado nesses delitos",
                "alcança os crimes dolosos contra a vida, consumados ou tentados, e os conexos — não abrangendo o latrocínio, que é crime patrimonial julgado pelo juiz singular",
                "é competência de natureza infraconstitucional, podendo ser afastada por lei ordinária que atribua o julgamento a órgão colegiado togado especializado",
                "cede sempre diante do foro por prerrogativa de função previsto exclusivamente em Constituição Estadual, por especialidade da norma local sobre a regra geral do júri",
                "restringe-se ao homicídio doloso, excluídos o induzimento ao suicídio, o infanticídio e o aborto, que seguem o procedimento comum ordinário"
              ],
              correta: 1,
              explicacao: "CF, art. 5º, XXXVIII, 'd': competência para os crimes dolosos contra a vida (homicídio, induzimento/instigação/auxílio ao suicídio, infanticídio e aborto), tentados ou consumados, mais os conexos. Súmula 603/STF: latrocínio é da competência do juiz singular. Súmula Vinculante 45: a competência do júri prevalece sobre o foro por prerrogativa estabelecido exclusivamente pela Constituição Estadual."
            }
          ]
        },
        {
          id: "proc-penal-juris-6",
          titulo: "Júri, nulidades e ato infracional",
          questoes: [
            {
              id: "jur-1", modo: "lei", fonte: "CPP, arts. 413, 414, 415 e 419",
              enunciado: "Encerrada a primeira fase do procedimento do júri (judicium accusationis), o juiz pode proferir quatro decisões. A pronúncia:",
              alternativas: [
                "exige prova plena da autoria e da materialidade, com o standard de certeza próprio de uma sentença condenatória proferida ao final da instrução criminal",
                "exige a materialidade e indícios suficientes de autoria, vigorando na dúvida o in dubio pro societate — critério hoje fortemente contestado pelo STF em favor do in dubio pro reo",
                "só pode ser proferida se o Ministério Público e a defesa técnica manifestarem concordância expressa quanto ao envio do caso ao conselho de sentença",
                "é cabível ainda que o fato narrado não constitua crime doloso contra a vida, hipótese em que o juiz remete os autos ao tribunal do júri para deliberação",
                "encerra definitivamente o processo quando o juiz se convence da inexistência do fato criminoso imputado"
              ],
              correta: 1,
              explicacao: "Art. 413: pronúncia exige materialidade + indícios suficientes de autoria (juízo de admissibilidade, não de certeza). As outras saídas: impronúncia (art. 414), absolvição sumária (art. 415) e desclassificação (art. 419). Sobre a dúvida, o STF vem rejeitando o in dubio pro societate como standard (ARE 1.067.392) — tese defensiva relevante: a dúvida deve favorecer o réu também na pronúncia."
            },
            {
              id: "jur-2", modo: "lei", fonte: "CPP, arts. 482, 483 e 489",
              enunciado: "Sobre a votação dos quesitos pelo conselho de sentença no plenário do júri:",
              alternativas: [
                "os jurados decidem por unanimidade, sendo nula a votação em que houver qualquer divergência entre os sete integrantes do conselho de sentença sorteado",
                "as decisões são tomadas por maioria de votos, e a votação é encerrada assim que se alcançam quatro votos num mesmo sentido, preservando-se o sigilo do resultado numérico",
                "a votação segue a ordem livremente definida pelo juiz presidente, que pode agrupar todos os quesitos numa única pergunta abrangente sobre a responsabilidade penal do acusado",
                "o quesito da absolvição genérica foi suprimido pela reforma de 2008, devendo os jurados responder separadamente a cada tese defensiva sustentada em plenário pela defesa técnica",
                "os jurados podem fundamentar oralmente seus votos, desde que preservada a incomunicabilidade durante os debates entre as partes"
              ],
              correta: 1,
              explicacao: "Art. 489: decisões por maioria. Desde a Lei 11.689/2008, a votação para de contar ao atingir 4 votos (evita revelar a unanimidade e preserva o sigilo). A ordem dos quesitos é legal (art. 483): materialidade, autoria, quesito absolutório genérico ('o jurado absolve o acusado?'), causas de diminuição e qualificadoras. Os jurados não fundamentam — vigora a íntima convicção."
            },
            {
              id: "jur-3", modo: "juris", fonte: "CPP, art. 593, III, 'd'; CF, art. 5º, XXXVIII, 'c'",
              enunciado: "Quando o júri absolve o réu com base no quesito genérico de absolvição, a apelação da acusação por decisão manifestamente contrária à prova dos autos:",
              alternativas: [
                "permite ao tribunal reformar o mérito e condenar diretamente o acusado, desde que a prova dos autos seja robusta e conduza inequivocamente à responsabilidade penal",
                "encontra forte resistência na jurisprudência atual, pois o quesito genérico admite absolvição por clemência — e, se cassado o veredicto, o tribunal apenas determina novo júri, jamais condena",
                "é incabível em qualquer hipótese, dada a soberania absoluta dos veredictos consagrada na Constituição, que impede toda forma de revisão da decisão dos jurados",
                "autoriza o tribunal a determinar sucessivos novos julgamentos até que o conselho de sentença profira decisão conforme a prova produzida nos autos do processo",
                "converte o julgamento em competência do juiz singular, que profere nova sentença substitutiva do veredicto anulado pelo tribunal de segundo grau"
              ],
              correta: 1,
              explicacao: "Pela soberania dos veredictos, o tribunal nunca condena em substituição ao júri: no máximo cassa a decisão e manda a novo julgamento — e só UMA vez pelo mesmo fundamento (art. 593, §3º). Como o quesito do art. 483, III, permite absolvição por clemência (sem vínculo estrito com a prova), o STF tem restringido fortemente essa apelação — o Tema 1087 tratou do tema, com repercussão para a defesa."
            },
            {
              id: "jur-4", modo: "lei", fonte: "CPP, arts. 563, 564 e 566; STF, Súmula 523",
              enunciado: "No sistema de nulidades do processo penal:",
              alternativas: [
                "toda inobservância de forma legal acarreta a nulidade do ato processual praticado, independentemente da demonstração de qualquer prejuízo concreto às partes envolvidas",
                "vigora o princípio pas de nullité sans grief: nenhum ato é declarado nulo se não houver prejuízo — sendo que a falta de defesa constitui nulidade absoluta, mas a defesa deficiente só anula se houver prova de prejuízo",
                "as nulidades absolutas precluem se não forem arguidas na primeira oportunidade de fala da parte interessada nos autos do processo criminal em curso",
                "a nulidade decorrente de incompetência absoluta convalida-se com o trânsito em julgado da sentença condenatória proferida pelo juízo incompetente",
                "a ausência de intimação da Defensoria Pública configura mera irregularidade sanável, por não integrar o núcleo essencial do contraditório"
              ],
              correta: 1,
              explicacao: "Art. 563: pas de nullité sans grief. Súmula 523/STF: no processo penal, a falta de defesa constitui nulidade ABSOLUTA, mas a sua deficiência só o anulará se houver prova de prejuízo — distinção decisiva. As nulidades absolutas podem ser reconhecidas de ofício e a qualquer tempo (não precluem); as relativas devem ser arguidas oportunamente (art. 571)."
            },
            {
              id: "jur-5", modo: "lei", fonte: "ECA, arts. 106, 108 e 121; Lei 12.594/2012",
              enunciado: "Sobre a internação de adolescente autor de ato infracional:",
              alternativas: [
                "pode ser aplicada a qualquer ato infracional, desde que o adolescente seja reincidente e a medida se mostre adequada à sua ressocialização segundo o relatório da equipe técnica",
                "sujeita-se aos princípios da brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento, com prazo máximo de 3 anos, reavaliação a cada 6 meses e liberação compulsória aos 21 anos",
                "tem prazo indeterminado e mínimo de um ano, admitida a reavaliação apenas mediante requerimento fundamentado da defesa técnica constituída ou nomeada nos autos",
                "não se submete a prazo máximo quando o ato infracional for equiparado a crime hediondo, aplicando-se por analogia o regime da Lei dos Crimes Hediondos",
                "a internação provisória, antes da sentença, pode durar até noventa dias, prorrogáveis uma vez por igual período mediante decisão fundamentada"
              ],
              correta: 1,
              explicacao: "Art. 121 do ECA: brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento; prazo máximo de 3 anos (§3º), reavaliação no máximo a cada 6 meses (§2º) e liberação compulsória aos 21 anos (§5º). A internação provisória tem prazo máximo de 45 dias (art. 108) — improrrogável. O SINASE (Lei 12.594/2012) rege a execução das socioeducativas."
            },
            {
              id: "jur-6", modo: "juris", fonte: "ECA, art. 122; STJ, Súmula 492",
              enunciado: "As hipóteses de aplicação da medida de internação são taxativas. Quanto ao tráfico de drogas praticado por adolescente:",
              alternativas: [
                "a gravidade abstrata do ato infracional equiparado ao tráfico conduz obrigatoriamente à internação, por expressa determinação do Estatuto da Criança e do Adolescente",
                "o ato infracional análogo ao tráfico, por si só, não conduz obrigatoriamente à internação, conforme a Súmula 492 do STJ",
                "a internação é vedada em qualquer caso de ato infracional relacionado a entorpecentes, cabendo apenas medidas em meio aberto e tratamento de saúde especializado",
                "o adolescente flagrado com drogas deve ser encaminhado diretamente ao sistema prisional comum quando tiver mais de dezoito anos ao tempo da sentença",
                "a medida de internação prescinde de defesa técnica quando o adolescente confessa a prática do ato infracional perante a autoridade policial competente"
              ],
              correta: 1,
              explicacao: "Súmula 492/STJ: o ato infracional análogo ao tráfico não conduz obrigatoriamente à internação. O art. 122 traz rol TAXATIVO: violência ou grave ameaça à pessoa, reiteração de infrações graves ou descumprimento reiterado e injustificável de medida anterior. Tráfico, isoladamente, não se enquadra — tese defensiva de altíssima incidência prática."
            },
            {
              id: "jur-7", modo: "lei", fonte: "Lei 9.296/96, arts. 2º e 5º",
              enunciado: "A interceptação das comunicações telefônicas para prova em investigação criminal:",
              alternativas: [
                "pode ser autorizada pela autoridade policial em caso de urgência, com posterior comunicação ao juízo competente para ratificação da medida no prazo de vinte e quatro horas",
                "depende de ordem judicial fundamentada, é vedada quando o fato for punido apenas com detenção ou houver outros meios de prova, e vigora por 15 dias renováveis por igual período",
                "prescinde de decisão judicial quando um dos interlocutores da conversa autorizar expressamente a captação do diálogo mantido com o investigado",
                "tem prazo máximo improrrogável de trinta dias, findo o qual a prova produzida torna-se automaticamente ilícita por derivação",
                "aplica-se somente aos crimes hediondos e equiparados, dada a excepcionalidade da restrição ao sigilo das comunicações telefônicas"
              ],
              correta: 1,
              explicacao: "Lei 9.296/96: reserva de jurisdição com decisão fundamentada (art. 5º); vedada se não houver indícios razoáveis de autoria, se a prova puder ser feita por outros meios, ou se o fato for punido no máximo com DETENÇÃO (art. 2º). Prazo de 15 dias renovável por igual período — o STF admite renovações sucessivas desde que fundamentadas. A gravação por um dos interlocutores é figura distinta (gravação clandestina), com regime próprio."
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
        },
        {
          id: "exec-penal-juris-4",
          titulo: "Faltas disciplinares, RDD e clemência",
          questoes: [
            {
              id: "fal-1", modo: "lei", fonte: "LEP, arts. 50 e 118; STJ, Súmula 526",
              enunciado: "Sobre a falta grave na execução penal e seus efeitos:",
              alternativas: [
                "interrompe a contagem do prazo para todos os benefícios da execução, inclusive o livramento condicional, o indulto e a comutação de penas concedidos por decreto presidencial",
                "interrompe o prazo para a progressão de regime (reiniciando a contagem pelo restante da pena) e autoriza a regressão, mas não interfere no livramento condicional, no indulto nem na comutação, salvo previsão expressa do decreto",
                "acarreta automaticamente a perda integral dos dias remidos, sem limite percentual e sem necessidade de decisão judicial fundamentada",
                "só pode ser reconhecida após o trânsito em julgado de sentença penal condenatória pelo fato novo praticado durante o cumprimento da pena",
                "gera regressão de regime independentemente de prévio procedimento administrativo disciplinar e de oitiva do apenado"
              ],
              correta: 1,
              explicacao: "Súmula 534/STJ: a falta grave interrompe o prazo da progressão (reinicia sobre o restante da pena). Súmula 535/STJ: NÃO interrompe livramento condicional, indulto nem comutação (salvo se o decreto exigir). A perda de dias remidos é limitada a 1/3 (LEP, art. 127). Súmula 533/STJ: exige PAD com defesa técnica por advogado ou defensor. A prática de fato definido como crime doloso configura falta grave independentemente de condenação transitada (Súmula 526/STJ)."
            },
            {
              id: "fal-2", modo: "lei", fonte: "LEP, art. 52 (redação da Lei 13.964/2019)",
              enunciado: "O Regime Disciplinar Diferenciado (RDD), após o Pacote Anticrime:",
              alternativas: [
                "pode ser aplicado pela direção do estabelecimento penal por até um ano, com comunicação posterior ao juízo da execução para simples homologação do ato administrativo praticado",
                "tem duração máxima de até 2 anos, sem prejuízo de repetição por nova falta grave da mesma espécie, e depende de decisão judicial fundamentada, precedida de manifestação do MP e da defesa",
                "foi declarado inconstitucional pelo STF por configurar tratamento cruel e degradante vedado pela Convenção Americana sobre Direitos Humanos e pelas Regras de Mandela",
                "aplica-se automaticamente a todo preso provisório acusado de integrar organização criminosa, independentemente da prática de falta disciplinar",
                "tem prazo máximo de trezentos e sessenta dias e não admite prorrogação em nenhuma hipótese"
              ],
              correta: 1,
              explicacao: "Art. 52 da LEP com a redação do Pacote: RDD de até 2 anos, renovável por nova falta grave da mesma espécie, com isolamento em cela individual, visitas quinzenais e banho de sol de 2 horas. Exige decisão judicial fundamentada (art. 54), ouvidos MP e defesa. O isolamento preventivo por até 10 dias pode ser determinado pela autoridade administrativa. Duramente criticado à luz das Regras de Mandela (isolamento prolongado > 15 dias = tratamento cruel)."
            },
            {
              id: "fal-3", modo: "lei", fonte: "LEP, art. 127; STF, Súmula Vinculante 9",
              enunciado: "Reconhecida falta grave, quanto aos dias remidos pelo trabalho ou pelo estudo:",
              alternativas: [
                "o condenado perde a totalidade dos dias remidos até então, recomeçando a contagem do zero a partir da data do cometimento da falta disciplinar de natureza grave",
                "o juiz pode revogar até 1/3 do tempo remido, recomeçando a contagem a partir da data da infração — não havendo perda automática nem integral",
                "não há qualquer perda, pois os dias remidos incorporam-se definitivamente ao patrimônio jurídico do apenado como direito adquirido",
                "a perda alcança metade dos dias remidos, por aplicação analógica do percentual previsto para a revogação do livramento condicional",
                "a decisão sobre a perda compete exclusivamente ao diretor do estabelecimento, no âmbito do procedimento administrativo disciplinar"
              ],
              correta: 1,
              explicacao: "Art. 127 da LEP (redação da Lei 12.433/2011): perda de ATÉ 1/3 dos dias remidos, com decisão judicial fundamentada que observe os critérios do art. 57 (natureza, motivos, circunstâncias e pessoa do faltoso). A SV 9 declarou recepcionado o art. 127, e a lei de 2011 abrandou o dispositivo: não é mais perda total. Tese defensiva: exigir proporcionalidade na fração aplicada."
            },
            {
              id: "fal-4", modo: "lei", fonte: "CF, art. 84, XII; LEP, arts. 187 e 193",
              enunciado: "Sobre os institutos de clemência (anistia, graça, indulto e comutação):",
              alternativas: [
                "todos são concedidos por lei do Congresso Nacional, cabendo ao Presidente apenas a iniciativa privativa do respectivo projeto de lei sobre a matéria",
                "a anistia é concedida por lei e alcança o próprio fato (extinguindo os efeitos penais); o indulto e a comutação vêm por decreto presidencial e atingem a execução da pena; a graça é individual e depende de pedido",
                "o indulto extingue todos os efeitos da condenação, inclusive a reincidência e a obrigação de reparar o dano causado à vítima do delito",
                "a comutação converte a pena privativa de liberdade em restritiva de direitos, dependendo de concordância expressa do Ministério Público",
                "todos são vedados aos condenados por crimes hediondos, inclusive a anistia, mas admitem-se nos crimes equiparados quando a pena remanescente for inferior a quatro anos"
              ],
              correta: 1,
              explicacao: "Anistia = lei (art. 48, VIII, da CF), alcança o fato e apaga efeitos penais. Indulto (coletivo) e comutação (redução) = decreto do Presidente (art. 84, XII), extinguem ou reduzem a pena, mas NÃO apagam os efeitos secundários — subsistem reincidência e dever de reparar o dano. Graça = individual, provocada. Nos hediondos, a CF veda anistia, graça e indulto (art. 5º, XLIII) — a vedação alcança os três."
            },
            {
              id: "fal-5", modo: "juris", fonte: "STF, ADI 5.874; LEP, art. 192",
              enunciado: "Quanto ao decreto presidencial de indulto, o STF firmou que:",
              alternativas: [
                "o Judiciário pode rever o mérito dos requisitos escolhidos pelo Presidente, adequando-os à gravidade concreta dos delitos praticados pelos beneficiários alcançados pelo ato normativo",
                "o indulto é ato discricionário de competência privativa do Presidente, sujeito apenas aos limites constitucionais — cabendo ao juízo da execução verificar o preenchimento dos requisitos do decreto e declarar extinta a pena",
                "o decreto depende de aprovação prévia do Congresso Nacional para produzir efeitos sobre as execuções em curso",
                "o indulto natalino não alcança condenados que respondam a outros processos criminais sem trânsito em julgado, por presunção legal de periculosidade",
                "a concessão do indulto compete ao Conselho Penitenciário, cabendo ao juízo apenas homologar o parecer favorável emitido"
              ],
              correta: 1,
              explicacao: "ADI 5.874: o STF reafirmou que o indulto é ato de governo, privativo do Presidente (delegável — art. 84, p.ú.), com discricionariedade na fixação dos requisitos, limitada apenas pelas vedações constitucionais. Ao juízo da execução cabe aplicar o decreto: verificar requisitos objetivos e subjetivos e declarar extinta a punibilidade (LEP, art. 192), após parecer do Conselho Penitenciário — que é opinativo."
            },
            {
              id: "fal-6", modo: "lei", fonte: "LEP, arts. 185 e 186; ADPF 347",
              enunciado: "O excesso ou desvio de execução ocorre quando ato judicial, administrativo ou de qualquer autoridade extrapola os limites da sentença ou das normas legais. Sobre esse incidente:",
              alternativas: [
                "só pode ser suscitado pelo Ministério Público, na condição de fiscal da execução da pena, ou de ofício pelo próprio juízo da vara de execuções penais competente",
                "pode ser suscitado pelo MP, pelo Conselho Penitenciário, pelo sentenciado e por qualquer dos demais legitimados do art. 186 da LEP — sendo instrumento central para atacar condições degradantes de cumprimento da pena",
                "depende do esgotamento prévio das instâncias administrativas do sistema penitenciário estadual, mediante requerimento formal dirigido à direção do estabelecimento prisional",
                "restringe-se a erros aritméticos no cálculo de liquidação de penas efetuado pela contadoria judicial",
                "foi substituído pelo habeas corpus coletivo após o julgamento da arguição de descumprimento de preceito fundamental 347 pelo Supremo Tribunal Federal"
              ],
              correta: 1,
              explicacao: "Arts. 185-186 da LEP: legitimados amplos — MP, Conselho Penitenciário, o próprio sentenciado e demais interessados. É a via para impugnar cumprimento de pena em desacordo com a sentença ou com a lei, inclusive condições degradantes. Dialoga diretamente com a ADPF 347 (estado de coisas inconstitucional) e com a SV 56 (falta de vaga em regime adequado não autoriza manter o preso em regime mais gravoso)."
            },
            {
              id: "fal-7", modo: "lei", fonte: "LEP, art. 41; Regras de Bangkok",
              enunciado: "Entre os direitos da pessoa presa assegurados pela LEP e pelos instrumentos internacionais, é correto afirmar que:",
              alternativas: [
                "a visita do cônjuge e de familiares pode ser suspensa por ato discricionário e definitivo da direção do estabelecimento, independentemente de motivação escrita e de controle jurisdicional posterior",
                "são direitos do preso, entre outros, a assistência material, à saúde, jurídica, educacional e religiosa, a visita de cônjuge e familiares e a entrevista pessoal e reservada com o advogado ou defensor",
                "o direito ao trabalho remunerado é facultativo para a administração, que pode negá-lo sem justificativa, e sua remuneração não pode ser inferior a um salário mínimo mensal",
                "as mulheres presas não têm direito a acompanhamento por profissional especializado durante o pré-natal e o pós-parto, matéria estranha à Lei de Execução Penal",
                "a assistência jurídica na execução é prestada apenas a quem não tenha sido condenado por crime hediondo ou equiparado"
              ],
              correta: 1,
              explicacao: "Art. 41 da LEP: rol de direitos (assistências material, à saúde, jurídica, educacional, social e religiosa; trabalho remunerado — não inferior a 3/4 do salário mínimo, art. 29; visita; entrevista reservada com advogado/defensor). A suspensão de direitos como a visita exige ato MOTIVADO do diretor (parágrafo único) e é sindicável judicialmente. As Regras de Bangkok e a LEP (art. 14, §3º) garantem acompanhamento pré-natal e pós-parto às mulheres presas."
            }
          ]
        },
        {
          id: "exec-penal-juris-5",
          titulo: "Multa, restritivas, sursis e reabilitação",
          questoes: [
            {
              id: "mul-1", modo: "juris", fonte: "CP, art. 51; STF, ADI 3.150",
              enunciado: "Quanto à execução da pena de multa após o trânsito em julgado da condenação:",
              alternativas: [
                "a multa converte-se em pena privativa de liberdade quando o condenado deixa de pagá-la no prazo legal de dez dias contado do trânsito em julgado da sentença condenatória",
                "a legitimidade prioritária para executá-la é do Ministério Público, na vara de execução penal; subsidiariamente, se o MP se mantiver inerte, cabe à Fazenda Pública promover a cobrança",
                "a competência para a cobrança é exclusiva da Fazenda Pública, na vara de execuções fiscais, por se tratar de dívida de valor inscrita em dívida ativa do ente federado",
                "o inadimplemento da multa não produz nenhum efeito sobre a execução da pena, podendo o condenado obter todos os benefícios independentemente do pagamento",
                "a multa é sempre extinta pelo indulto que alcança a pena privativa de liberdade, por acessoriedade entre as sanções aplicadas na mesma sentença"
              ],
              correta: 1,
              explicacao: "ADI 3.150: a multa mantém caráter de sanção penal — legitimidade PRIORITÁRIA do MP no juízo da execução penal e, se inerte, subsidiária da Fazenda. O art. 51 (redação do Pacote Anticrime) veda a conversão em prisão. Atenção: o STF entende que o não pagamento deliberado da multa impede a progressão e a extinção da punibilidade, salvo comprovada hipossuficiência — tese defensiva relevante."
            },
            {
              id: "mul-2", modo: "lei", fonte: "CP, art. 44, §4º; LEP, art. 181",
              enunciado: "Sobre a conversão da pena restritiva de direitos em privativa de liberdade:",
              alternativas: [
                "é automática diante do primeiro descumprimento noticiado pelo órgão fiscalizador, dispensada a prévia oitiva do condenado ou de sua defesa técnica constituída nos autos",
                "cabe quando ocorrer descumprimento injustificado da restrição imposta, deduzindo-se o tempo cumprido e respeitado o saldo mínimo de 30 dias de detenção ou reclusão",
                "é vedada no ordenamento brasileiro, restando ao juízo apenas advertir o condenado e prorrogar o prazo de cumprimento da medida restritiva descumprida",
                "converte-se pelo total da pena originalmente aplicada, sem qualquer detração do período já cumprido em prestação de serviços à comunidade pelo sentenciado",
                "depende de nova ação penal de conhecimento, com contraditório pleno e produção de prova sobre o descumprimento atribuído ao condenado"
              ],
              correta: 1,
              explicacao: "Art. 44, §4º, do CP: descumprimento INJUSTIFICADO autoriza a conversão, deduzindo-se o tempo cumprido e respeitado o saldo mínimo de 30 dias. A LEP (art. 118, §2º, por analogia, e art. 181) exige a prévia oitiva do condenado — não há conversão automática. Se sobrevier condenação a pena privativa por outro crime, a conversão é facultativa se possível cumprir a anterior (§5º)."
            },
            {
              id: "mul-3", modo: "lei", fonte: "CP, arts. 77, 78 e 81",
              enunciado: "A suspensão condicional da pena (sursis) exige, entre outros requisitos:",
              alternativas: [
                "pena privativa de liberdade não superior a 4 anos e réu primário, com prazo de suspensão de 1 a 3 anos em qualquer hipótese legal prevista no Código",
                "pena privativa não superior a 2 anos, não reincidência em crime doloso e circunstâncias favoráveis — com período de prova de 2 a 4 anos, e o sursis etário (maior de 70) alcança pena de até 4 anos",
                "que o condenado tenha reparado integralmente o dano causado à vítima antes do trânsito em julgado, requisito indispensável em todas as modalidades de suspensão",
                "a concordância expressa do Ministério Público em audiência admonitória, sem a qual o benefício não pode ser concedido pelo juízo sentenciante da causa",
                "que a pena aplicada seja de detenção, sendo o instituto incabível quando a sanção cominada ao delito for de reclusão"
              ],
              correta: 1,
              explicacao: "Art. 77 do CP: pena ≤ 2 anos, não reincidência em crime doloso (a condenação anterior a multa não impede — §1º) e circunstâncias favoráveis. Período de prova: 2 a 4 anos. O art. 77, §2º traz o sursis etário (maior de 70 anos) e o humanitário (razões de saúde), ambos alcançando penas de até 4 anos, com prova de 4 a 6 anos. A revogação obrigatória e a facultativa estão no art. 81."
            },
            {
              id: "mul-4", modo: "lei", fonte: "CP, arts. 93 a 95; LEP, art. 202",
              enunciado: "Sobre o instituto da reabilitação criminal:",
              alternativas: [
                "extingue a pena ainda não cumprida e apaga a condenação para todos os efeitos, inclusive quanto à reincidência em eventual processo criminal futuro contra o reabilitado",
                "assegura o sigilo dos registros sobre o processo e a condenação e pode atingir os efeitos secundários da condenação, sendo requerida após 2 anos do cumprimento ou extinção da pena",
                "opera automaticamente com o cumprimento integral da pena, independentemente de requerimento do interessado ou de decisão judicial que a declare formalmente",
                "só pode ser concedida uma única vez na vida do condenado, sendo definitivamente vedada a quem já tenha obtido o benefício anteriormente em outro processo",
                "tem por efeito principal a restituição do valor da multa paga e das custas processuais suportadas pelo condenado durante a persecução penal"
              ],
              correta: 1,
              explicacao: "Arts. 93-94 do CP: a reabilitação alcança o sigilo dos registros e pode atingir efeitos secundários da condenação (ex.: reaquisição do poder familiar em certos casos), requerida 2 anos após a extinção ou o cumprimento da pena. Não apaga a reincidência nem extingue a pena. A LEP (art. 202) já garante sigilo após o cumprimento — o que reduziu a utilidade prática, mas o instituto permanece cobrado."
            },
            {
              id: "mul-5", modo: "lei", fonte: "LEP, arts. 180 a 184",
              enunciado: "As conversões previstas na Lei de Execução Penal permitem que:",
              alternativas: [
                "a pena privativa de liberdade em regime aberto, não superior a 2 anos, seja convertida em restritiva de direitos se presentes os requisitos legais; e a medida de segurança em pena, se cessada a periculosidade",
                "qualquer pena privativa de liberdade seja convertida em restritiva de direitos a pedido do condenado, independentemente do quantum fixado e do regime de cumprimento",
                "a pena de multa inadimplida seja convertida em detenção pelo prazo correspondente ao número de dias-multa aplicados na sentença condenatória transitada em julgado",
                "a pena restritiva de direitos seja convertida em multa quando o condenado demonstrar impossibilidade material de cumprir a prestação de serviços imposta",
                "o regime semiaberto seja convertido em prisão domiciliar sempre que houver superlotação no estabelecimento penal de destino do sentenciado"
              ],
              correta: 0,
              explicacao: "Art. 180 da LEP: conversão da PPL em regime aberto, não superior a 2 anos, em restritiva de direitos (cumprimento em regime aberto por ao menos 1/4 da pena + antecedentes e personalidade favoráveis). O art. 183 trata da conversão da pena em medida de segurança na superveniência de doença mental. A conversão da multa em detenção foi abolida (art. 51 do CP). A SV 56 rege a falta de vaga."
            },
            {
              id: "mul-6", modo: "juris", fonte: "LEP, art. 112; STJ, Súmulas 439 e 534",
              enunciado: "Sobre o exame criminológico na progressão de regime:",
              alternativas: [
                "tornou-se obrigatório para todos os condenados após o Pacote Anticrime, que restabeleceu a exigência revogada pela Lei 10.792/2003 no procedimento de progressão",
                "não é mais obrigatório, mas pode ser determinado pelo juízo em decisão concretamente fundamentada, quando as peculiaridades do caso indicarem sua necessidade",
                "é vedado em qualquer hipótese, por configurar prova de natureza inquisitorial incompatível com o sistema acusatório adotado pela Constituição de 1988",
                "substitui integralmente o requisito objetivo de cumprimento de percentual da pena, bastando o parecer favorável da comissão técnica de classificação",
                "cabe exclusivamente ao Ministério Público requerê-lo, não podendo o juízo da execução determiná-lo de ofício em nenhuma circunstância"
              ],
              correta: 1,
              explicacao: "A Lei 10.792/2003 retirou a obrigatoriedade do exame. Súmula 439/STJ: admite-se o exame pelas peculiaridades do caso, desde que em decisão motivada. O Pacote Anticrime não restabeleceu a obrigatoriedade geral. Súmula 534/STJ trata da falta grave e da interrupção do prazo. Tese defensiva: exigir fundamentação concreta — não basta invocar a gravidade do crime."
            },
            {
              id: "mul-7", modo: "juris", fonte: "LEP, art. 117; STF, RE 641.320 e SV 56",
              enunciado: "Reconhecido o direito à progressão para o regime semiaberto, mas inexistindo vaga em estabelecimento adequado:",
              alternativas: [
                "o condenado permanece no regime fechado até o surgimento de vaga, sem que isso configure constrangimento ilegal, dada a reserva do possível na execução penal",
                "não se admite a manutenção em regime mais gravoso: cabe ao juízo determinar prisão domiciliar ou outra medida alternativa até o surgimento de vaga, conforme a Súmula Vinculante 56",
                "a pena deve ser automaticamente extinta, por impossibilidade material de cumprimento no regime fixado pela decisão judicial que reconheceu a progressão",
                "o condenado é transferido compulsoriamente para o regime aberto, independentemente do preenchimento dos requisitos legais próprios dessa etapa da execução",
                "a prisão domiciliar do art. 117 da LEP só é cabível para condenados maiores de setenta anos, sendo vedada sua aplicação por analogia à falta de vagas"
              ],
              correta: 1,
              explicacao: "SV 56 (a partir do RE 641.320): a falta de estabelecimento penal adequado NÃO autoriza a manutenção do condenado em regime mais gravoso. O STF indicou parâmetros: saída antecipada de outro sentenciado, liberdade eletronicamente monitorada e cumprimento de penas restritivas ou estudo. Ao lado da ADPF 347, é o principal instrumento contra o encarceramento em condições inconstitucionais."
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
                "seja primário ou tenha bons antecedentes, bastando o preenchimento de qualquer um desses requisitos alternativos",
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
        },
        {
          id: "penal-juris-5",
          titulo: "Teoria da pena e dosimetria",
          questoes: [
            {
              id: "pen-1", modo: "lei", fonte: "CP, arts. 59 e 68",
              enunciado: "No sistema trifásico de dosimetria da pena adotado pelo Código Penal:",
              alternativas: [
                "a pena-base é fixada considerando as agravantes e atenuantes genéricas, seguindo-se as circunstâncias judiciais e, ao final, as causas de aumento e de diminuição previstas na parte especial",
                "fixa-se a pena-base pelas circunstâncias judiciais do art. 59; depois incidem as atenuantes e agravantes; por último, as causas de diminuição e de aumento — única fase em que a pena pode sair dos limites cominados",
                "as três fases limitam-se a graduar a pena entre o mínimo e o máximo cominados, sendo vedado ao juiz ultrapassar esses limites em qualquer delas, inclusive na terceira",
                "o juiz tem liberdade para fixar a pena definitiva em fase única, desde que fundamente cada circunstância judicial, agravante e majorante que considerou no cálculo",
                "as qualificadoras incidem na terceira fase do cálculo, como causas especiais de aumento em fração fixa"
              ],
              correta: 1,
              explicacao: "Art. 68 do CP: pena-base (art. 59) → agravantes/atenuantes → causas de diminuição e de aumento. O detalhe que decide questões: só na TERCEIRA fase a pena pode ficar abaixo do mínimo ou acima do máximo cominados. As qualificadoras não entram no cálculo trifásico — elas alteram a própria moldura penal (novo mínimo e máximo) antes de a dosimetria começar."
            },
            {
              id: "pen-2", modo: "juris", fonte: "STJ, Súmula 231",
              enunciado: "Sobre a incidência de circunstância atenuante quando a pena-base foi fixada no mínimo legal:",
              alternativas: [
                "a atenuante reduz a pena abaixo do mínimo, pois o art. 65 do CP diz que ela sempre atenua a pena",
                "pela Súmula 231 do STJ, a atenuante não pode conduzir a pena abaixo do mínimo legal na segunda fase — limite que não se aplica às causas de diminuição, que podem levá-la abaixo do mínimo na terceira",
                "a atenuante fica automaticamente compensada com eventual agravante ainda não considerada no cálculo, retornando a pena ao patamar intermediário fixado na primeira fase da dosimetria",
                "o juiz deve deixar de aplicar a atenuante e compensá-la na fixação do regime inicial de cumprimento",
                "a atenuante converte-se em causa de diminuição de um sexto, aplicável na fase seguinte"
              ],
              correta: 1,
              explicacao: "Súmula 231/STJ: a atenuante genérica não conduz a pena abaixo do mínimo na 2ª fase (entendimento criticado pela doutrina defensiva, mas dominante). O contraste que a prova cobra: as MINORANTES (causas de diminuição, 3ª fase — ex.: tentativa, tráfico privilegiado) PODEM levar a pena abaixo do mínimo cominado."
            },
            {
              id: "pen-3", modo: "juris", fonte: "STJ, Súmula 545 e Tema 585",
              enunciado: "Quanto à atenuante da confissão espontânea:",
              alternativas: [
                "só incide quando a confissão é integral, coerente e mantida em todas as fases da persecução penal",
                "não incide se o réu confessou na polícia e se retratou em juízo, ainda que a confissão tenha embasado a sentença",
                "incide mesmo quando a confissão é parcial, qualificada ou retratada, desde que utilizada como fundamento da condenação",
                "é incompatível com a prisão em flagrante, pois nesse caso a autoria já está demonstrada por outros meios de prova independentes da palavra do acusado",
                "foi revogada pelo Pacote Anticrime, subsistindo apenas como argumento para o acordo de não persecução penal"
              ],
              correta: 2,
              explicacao: "Súmula 545/STJ: quando a confissão for utilizada para a formação do convencimento do julgador, a atenuante deve incidir — ainda que parcial, qualificada (com tese defensiva embutida) ou posteriormente retratada. É tese cara à Defensoria: se o juiz usou a confissão na fundamentação, não pode negar a atenuante."
            },
            {
              id: "pen-4", modo: "lei", fonte: "CP, art. 44, I a III e §3º",
              enunciado: "A substituição da pena privativa de liberdade por restritivas de direitos exige, em regra, pena não superior a quatro anos e crime cometido sem violência ou grave ameaça. Quanto ao reincidente:",
              alternativas: [
                "a reincidência de qualquer natureza impede de forma absoluta a substituição da pena, dada a presunção legal de que a medida anterior se mostrou insuficiente para prevenir novos delitos",
                "somente o reincidente em crime culposo fica impedido de obter o benefício da substituição",
                "a reincidência em crime doloso veda a substituição, mas o juiz pode concedê-la se a medida for socialmente recomendável e a reincidência não for específica (pelo mesmo crime)",
                "o reincidente tem direito à substituição desde que preste fiança e repare integralmente o dano",
                "a substituição ao reincidente depende de prévia concordância do Ministério Público na audiência"
              ],
              correta: 2,
              explicacao: "Art. 44, II, do CP: exige-se que o réu não seja reincidente em crime doloso. Mas o §3º abre a válvula defensiva: mesmo ao reincidente doloso o juiz pode aplicar a substituição, se socialmente recomendável, salvo reincidência ESPECÍFICA (mesmo crime). Nos crimes culposos, a substituição cabe qualquer que seja a pena."
            },
            {
              id: "pen-5", modo: "juris", fonte: "STJ, Súmulas 269 e 440; STF, Súmulas 718 e 719",
              enunciado: "Na fixação do regime inicial de cumprimento de pena:",
              alternativas: [
                "a reincidência impõe sempre o regime fechado, qualquer que seja a quantidade de pena aplicada na sentença condenatória",
                "a gravidade abstrata do delito é fundamento idôneo para impor regime mais severo, dispensada motivação concreta",
                "a opinião do julgador sobre a gravidade em abstrato do crime autoriza regime mais rigoroso quando se tratar de delito hediondo ou equiparado, por expressa determinação legal",
                "é admissível o regime semiaberto ao reincidente condenado a pena igual ou inferior a quatro anos, se favoráveis as circunstâncias judiciais — e o regime mais severo que a pena permite exige motivação idônea",
                "o regime aberto é vedado a condenados por crime cometido com violência, ainda que a pena fique abaixo de quatro anos"
              ],
              correta: 3,
              explicacao: "Súmula 269/STJ: reincidente com pena de até 4 anos pode iniciar no semiaberto, se favoráveis as circunstâncias. Súmulas 440/STJ e 718-719/STF: gravidade ABSTRATA não fundamenta regime mais severo — é preciso motivação concreta. Conjunto de teses essencialmente defensivas, cobradíssimas pela FGV."
            },
            {
              id: "pen-6", modo: "juris", fonte: "CP, art. 97; STJ, Súmula 527",
              enunciado: "Sobre o prazo de duração da medida de segurança:",
              alternativas: [
                "é indeterminado, perdurando enquanto não averiguada a cessação da periculosidade do agente, sem limite máximo, dada a natureza curativa e não punitiva do instituto",
                "não pode ultrapassar o limite máximo da pena abstratamente cominada ao delito praticado, segundo o STJ",
                "limita-se ao mínimo legal de um a três anos previsto no art. 97 do Código Penal, vedada qualquer prorrogação",
                "corresponde exatamente à pena que seria aplicada ao agente imputável, calculada em sentença pelo sistema trifásico",
                "é de trinta anos para os crimes praticados com violência e de quinze anos para os demais"
              ],
              correta: 1,
              explicacao: "Súmula 527/STJ: o tempo de duração da medida de segurança não deve ultrapassar o limite máximo da pena abstratamente cominada ao delito. O STF, por sua vez, aplica o teto geral do art. 75 do CP (hoje 40 anos). A literalidade do art. 97, §1º ('por tempo indeterminado') foi superada — vedação constitucional às penas perpétuas. Bandeira histórica da Defensoria."
            },
            {
              id: "pen-7", modo: "lei", fonte: "CP, art. 115",
              enunciado: "Os prazos prescricionais são reduzidos de metade quando o agente:",
              alternativas: [
                "era menor de dezoito anos na data do fato ou maior de sessenta na data do julgamento",
                "era menor de vinte e um anos na data do fato, ou maior de setenta anos na data da sentença",
                "for primário e tiver bons antecedentes, reparando o dano antes do recebimento da denúncia oferecida pelo Ministério Público",
                "confessar espontaneamente a prática do delito perante a autoridade policial ou judicial, contribuindo para a elucidação dos fatos e a identificação dos demais envolvidos",
                "era maior de sessenta e cinco anos na data do trânsito em julgado da condenação"
              ],
              correta: 1,
              explicacao: "Art. 115 do CP: metade dos prazos para o menor de 21 na data do fato (a chamada menoridade relativa — sobrevive como causa de redução mesmo com a maioridade civil aos 18) e para o maior de 70 na data da sentença. O STJ estende o benefício ao réu que completa 70 anos antes do acórdão condenatório que substitui a sentença. Marcos distintos — fato × sentença — são a pegadinha padrão."
            }
          ]
        },
        {
          id: "penal-juris-6",
          titulo: "Crimes em espécie",
          questoes: [
            {
              id: "esp-1", modo: "juris", fonte: "STJ, Súmula 582",
              enunciado: "Sobre o momento consumativo do crime de roubo, o STJ consolidou que se consuma:",
              alternativas: [
                "apenas quando o agente obtém a posse mansa, pacífica e desvigiada da coisa subtraída, ainda que por curto espaço de tempo, fora da esfera de vigilância da vítima",
                "com a inversão da posse do bem, mediante violência ou grave ameaça, ainda que por breve tempo e ainda que haja perseguição imediata e recuperação da coisa",
                "somente com o efetivo proveito econômico obtido pelo agente com a coisa subtraída da vítima",
                "no momento do emprego da violência ou da grave ameaça, ainda que a subtração não ocorra",
                "quando cessa a perseguição policial, consolidando-se o apoderamento da res furtiva"
              ],
              correta: 1,
              explicacao: "Súmula 582/STJ (teoria da amotio/apprehensio): o roubo se consuma com a inversão da posse, mesmo que breve e sob perseguição — dispensadas a posse mansa e pacífica e a saída da esfera de vigilância. Consequência prática: a prisão logo após o fato normalmente NÃO gera tentativa, e sim crime consumado. O mesmo raciocínio vale para o furto (Súmula 567? não — tese firmada no REsp repetitivo 1.524.450)."
            },
            {
              id: "esp-2", modo: "juris", fonte: "STF, Súmula 610",
              enunciado: "No latrocínio (roubo qualificado pelo resultado morte), há crime consumado quando:",
              alternativas: [
                "a subtração se consuma, ainda que a morte da vítima não ocorra, dada a natureza patrimonial do delito",
                "o homicídio se consuma, ainda que o agente não realize a subtração dos bens da vítima",
                "ambos os resultados — morte e subtração patrimonial — efetivamente se consumam, pois o tipo complexo exige a integralidade dos seus elementos para alcançar a consumação",
                "a morte decorre de culpa do agente, hipótese em que o crime se desloca para o concurso formal",
                "houver dolo de matar, ainda que nem a morte nem a subtração venham a se consumar"
              ],
              correta: 1,
              explicacao: "Súmula 610/STF: há latrocínio consumado quando o homicídio se consuma, ainda que o agente não consiga subtrair os bens. O norte é o resultado morte: morte consumada + subtração tentada = latrocínio CONSUMADO; morte tentada + subtração consumada = latrocínio TENTADO. Competência: juiz singular, não o júri (Súmula 603/STF), pois o crime é patrimonial."
            },
            {
              id: "esp-3", modo: "juris", fonte: "CP, art. 155, §2º; STJ, Súmula 511",
              enunciado: "Quanto ao furto privilegiado (réu primário e coisa de pequeno valor):",
              alternativas: [
                "é incompatível com qualquer qualificadora, pois o privilégio pressupõe a forma simples do delito descrita no caput do tipo penal incriminador",
                "é compatível com as qualificadoras de natureza objetiva (como concurso de agentes ou rompimento de obstáculo), conforme a Súmula 511 do STJ",
                "exige que o valor da coisa não ultrapasse dez por cento do salário mínimo vigente à época dos fatos, patamar consolidado na jurisprudência para o reconhecimento do pequeno valor",
                "aplica-se somente ao furto de coisa abandonada ou de valor sentimental",
                "foi absorvido pelo princípio da insignificância após o Pacote Anticrime"
              ],
              correta: 1,
              explicacao: "Súmula 511/STJ: o privilégio do art. 155, §2º (primariedade + pequeno valor — parâmetro usual: até 1 salário mínimo) convive com as qualificadoras OBJETIVAS. Só a qualificadora subjetiva (abuso de confiança) o afasta. Não confundir pequeno valor (privilégio: reduz/substitui a pena) com valor ínfimo (insignificância: exclui a tipicidade material)."
            },
            {
              id: "esp-4", modo: "juris", fonte: "STF, HC 84.412 (vetores da insignificância)",
              enunciado: "O princípio da insignificância exclui a tipicidade material quando presentes os quatro vetores do STF. Sobre sua aplicação:",
              alternativas: [
                "a reincidência do agente impede, por si só e em qualquer caso, o reconhecimento da atipicidade material da conduta, por expressa vedação legal introduzida pelo Pacote Anticrime",
                "exige mínima ofensividade, ausência de periculosidade social, reduzida reprovabilidade e inexpressividade da lesão — e a reincidência não impede automaticamente sua aplicação, que se analisa caso a caso",
                "aplica-se somente aos crimes patrimoniais praticados sem violência cujo valor não ultrapasse cinquenta reais",
                "é vedado nos crimes contra a administração pública, sem nenhuma exceção reconhecida na jurisprudência",
                "depende da reparação do dano ou da devolução da coisa antes do oferecimento da denúncia"
              ],
              correta: 1,
              explicacao: "Vetores do HC 84.412/STF (mínima ofensividade, nenhuma periculosidade social, reduzido grau de reprovabilidade, inexpressividade da lesão). O STF decidiu que a reincidência não afasta automaticamente o princípio — a análise é casuística (HC 123.108). Atenção à exceção da Súmula 599/STJ (inaplicável aos crimes contra a Administração), que o próprio STJ já excepcionou em hipóteses concretas."
            },
            {
              id: "esp-5", modo: "lei", fonte: "CP, art. 171, §5º (Pacote Anticrime)",
              enunciado: "Após a Lei 13.964/2019, a ação penal no crime de estelionato:",
              alternativas: [
                "passou a ser pública condicionada à representação, salvo se a vítima for a Administração Pública, criança ou adolescente, pessoa com deficiência mental, maior de setenta anos ou incapaz",
                "continua sendo pública incondicionada em todas as hipóteses, pois a alteração legislativa alcançou somente o crime de apropriação indébita praticado sem violência contra pessoa determinada",
                "tornou-se de ação penal privada, dependendo de queixa-crime da vítima no prazo decadencial de seis meses",
                "é condicionada à representação apenas quando o prejuízo não ultrapassar quarenta salários mínimos",
                "depende de representação inclusive quando praticado contra o patrimônio de entes públicos"
              ],
              correta: 0,
              explicacao: "Art. 171, §5º, do CP: a regra passou a ser a representação, com quatro exceções (Administração Pública direta/indireta; criança ou adolescente; pessoa com deficiência mental; maior de 70 anos ou incapaz), nas quais a ação segue incondicionada. O STF fixou que a exigência de representação NÃO retroage para alcançar processos com denúncia já oferecida (HC 180.421)."
            },
            {
              id: "esp-6", modo: "juris", fonte: "CP, art. 121, §§1º e 2º; jurisprudência pacífica",
              enunciado: "Sobre o homicídio privilegiado-qualificado:",
              alternativas: [
                "é figura juridicamente impossível, pois o privilégio e a qualificadora se excluem mutuamente na estrutura típica do crime de homicídio, conforme entendimento sumulado",
                "admite-se quando a qualificadora é de natureza objetiva (como o meio cruel), coexistindo com o privilégio, que é sempre subjetivo — hipótese que afasta a hediondez do crime",
                "admite-se apenas quando a qualificadora também for de natureza subjetiva, garantindo coerência entre as circunstâncias reconhecidas pelo conselho de sentença no julgamento",
                "é reconhecido exclusivamente pelo juiz presidente do júri, na fase de dosimetria da pena",
                "mantém a natureza hedionda do homicídio qualificado, por ausência de previsão legal em sentido contrário"
              ],
              correta: 1,
              explicacao: "Jurisprudência pacífica: o privilégio (sempre subjetivo — relevante valor moral/social, violenta emoção) é compatível com qualificadoras OBJETIVAS (meio ou modo de execução). Qualificadora subjetiva (motivo torpe/fútil) não coexiste com o privilégio. Consequência defensiva relevante: o homicídio privilegiado-qualificado NÃO é hediondo."
            },
            {
              id: "esp-7", modo: "lei", fonte: "CP, art. 121-A (Lei 14.994/2024)",
              enunciado: "Com a Lei 14.994/2024, o feminicídio:",
              alternativas: [
                "permaneceu como qualificadora do homicídio, com a pena elevada de doze a trinta anos de reclusão e a inclusão de novas causas de aumento específicas para o contexto de violência doméstica",
                "deixou de ser qualificadora e tornou-se tipo penal autônomo (art. 121-A), com pena de reclusão de vinte a quarenta anos",
                "foi incorporado à Lei Maria da Penha como infração de menor potencial ofensivo agravada",
                "passou a exigir a coabitação entre autor e vítima como elementar do tipo penal",
                "teve a pena reduzida para harmonizar o sistema com o homicídio qualificado comum"
              ],
              correta: 1,
              explicacao: "A Lei 14.994/2024 transformou o feminicídio em TIPO AUTÔNOMO: art. 121-A do CP — matar mulher por razões da condição do sexo feminino (violência doméstica/familiar ou menosprezo/discriminação) — com pena de 20 a 40 anos, a mais alta da parte especial. Continua hediondo, e a lei elevou também outras penas ligadas à violência contra a mulher. Por ser mais gravosa, NÃO retroage: fatos anteriores seguem sob a antiga qualificadora."
            }
          ]
        },
        {
          id: "penal-juris-7",
          titulo: "Maria da Penha, hediondos e leis novas",
          questoes: [
            {
              id: "lex-1", modo: "lei", fonte: "Lei 11.340/06, arts. 5º e 7º",
              enunciado: "Para a incidência da Lei Maria da Penha, a violência doméstica e familiar contra a mulher exige:",
              alternativas: [
                "coabitação entre autor e vítima e vínculo conjugal atual ou pretérito entre eles, comprovado documentalmente nos autos do inquérito ou do processo criminal instaurado",
                "ação ou omissão baseada no gênero, praticada no âmbito da unidade doméstica, da família ou em qualquer relação íntima de afeto — dispensada a coabitação —, abrangendo violência física, psicológica, sexual, patrimonial e moral",
                "exclusivamente a prática de violência física ou sexual que deixe vestígios materiais aptos a exame de corpo de delito direto",
                "que autor e vítima sejam cônjuges ou companheiros, excluídas as relações entre pais e filhas ou entre irmãos que residam sob o mesmo teto",
                "a demonstração de hipossuficiência econômica da vítima em relação ao agressor"
              ],
              correta: 1,
              explicacao: "Art. 5º da Lei 11.340/06: unidade doméstica (com ou sem vínculo familiar, inclusive esporadicamente agregadas), família ou relação íntima de afeto — e o parágrafo único dispensa a coabitação (Súmula 600/STJ). O art. 7º lista as cinco formas de violência, incluindo a patrimonial e a moral. A vulnerabilidade é presumida: não se exige prova de hipossuficiência econômica."
            },
            {
              id: "lex-2", modo: "juris", fonte: "Lei 11.340/06, art. 41; STF, ADC 19 e ADI 4.424",
              enunciado: "Nos crimes praticados com violência doméstica e familiar contra a mulher:",
              alternativas: [
                "aplica-se a Lei 9.099/95 quando a pena máxima não ultrapassar dois anos, admitindo-se transação penal e suspensão condicional do processo",
                "é vedada a aplicação da Lei 9.099/95 qualquer que seja a pena, e a ação penal na lesão corporal leve é pública incondicionada, conforme o STF",
                "a ação penal na lesão corporal leve é condicionada à representação da ofendida, que pode retratar-se até a sentença de primeiro grau",
                "cabe a suspensão condicional do processo desde que a vítima concorde expressamente em audiência",
                "admite-se a substituição da pena por prestação pecuniária ou pagamento isolado de multa, conforme as circunstâncias do caso"
              ],
              correta: 1,
              explicacao: "Art. 41: afastamento integral da Lei 9.099/95 (ADC 19). Na ADI 4.424 o STF conferiu interpretação conforme: a ação penal na lesão corporal leve em contexto doméstico é PÚBLICA INCONDICIONADA (Súmula 542/STJ). O art. 17 veda penas de cesta básica, prestação pecuniária e multa isolada. Só nas ameaças e crimes contra a honra subsiste a representação."
            },
            {
              id: "lex-3", modo: "lei", fonte: "Lei 11.340/06, arts. 12-C e 24-A",
              enunciado: "Sobre as medidas protetivas de urgência da Lei Maria da Penha:",
              alternativas: [
                "só podem ser concedidas por decisão judicial, após oitiva do Ministério Público e do agressor em audiência designada para essa finalidade específica",
                "podem ser concedidas de imediato pelo juiz, independentemente de audiência e de manifestação do MP; havendo risco atual e não sendo o município sede de comarca, o afastamento do lar pode ser determinado por delegado ou policial — e o descumprimento configura crime autônomo",
                "dependem do prévio registro de ocorrência policial e da instauração formal de inquérito, sem os quais o juízo não pode antecipar qualquer providência de natureza protetiva à ofendida, ainda que haja risco atual à sua integridade física",
                "têm prazo máximo de validade de trinta dias, prorrogável uma única vez por igual período mediante novo requerimento",
                "só subsistem enquanto tramitar ação penal contra o agressor, extinguindo-se com o arquivamento do inquérito"
              ],
              correta: 1,
              explicacao: "Art. 19, §1º: concessão imediata, sem audiência das partes nem manifestação prévia do MP. Art. 12-C (Lei 13.827/2019): afastamento do lar por delegado ou policial quando não houver comarca — com comunicação ao juiz em 24h. Art. 24-A: descumprir medida protetiva é CRIME autônomo (detenção de 3 meses a 2 anos). As medidas independem de inquérito ou de ação penal (art. 19, §5º) e vigoram enquanto persistir o risco."
            },
            {
              id: "lex-4", modo: "lei", fonte: "Lei 8.072/90, art. 2º; CP, art. 112 da LEP",
              enunciado: "Quanto ao regime jurídico dos crimes hediondos e equiparados após o Pacote Anticrime:",
              alternativas: [
                "permanecem vedadas a liberdade provisória e a progressão de regime, cumprindo-se a pena integralmente em regime fechado nos termos originais da Lei 8.072/90",
                "são insuscetíveis de anistia, graça e indulto, e de fiança — mas admitem progressão de regime, com percentuais mais altos conforme a hediondez, o resultado morte e a reincidência",
                "passaram a admitir anistia e indulto, mantida apenas a vedação à fiança e ao livramento condicional para os reincidentes específicos em crimes da mesma natureza",
                "têm regime inicial necessariamente fechado, por expressa previsão legal declarada constitucional pelo STF",
                "seguem os mesmos percentuais de progressão dos crimes comuns, diferenciando-se apenas quanto ao livramento condicional"
              ],
              correta: 1,
              explicacao: "Art. 2º da Lei 8.072/90: vedadas anistia, graça, indulto e fiança. O STF declarou inconstitucionais o regime integralmente fechado (HC 82.959) e o regime inicial obrigatoriamente fechado (HC 111.840). O Pacote Anticrime levou os percentuais de progressão para o art. 112 da LEP: 40% (hediondo primário), 50% (com resultado morte, primário), 60% (hediondo reincidente) e 70% (com resultado morte, reincidente — sem livramento)."
            },
            {
              id: "lex-5", modo: "lei", fonte: "Lei 15.358/2026 (Lei Antifacção)",
              enunciado: "A Lei Antifacção (Lei 15.358/2026), no sistema de enfrentamento ao crime organizado:",
              alternativas: [
                "revogou integralmente a Lei 12.850/2013, unificando o tratamento das organizações criminosas em diploma único e substituindo a colaboração premiada por acordo de leniência penal",
                "criou tratamento penal mais severo para facções e domínio territorial armado, convivendo com a Lei 12.850/2013 — cabendo à defesa vigiar a tipificação por mera suspeita de vínculo e a expansão do encarceramento",
                "descriminalizou a participação em organização criminosa para menores de vinte e um anos, direcionando-os a medidas socioeducativas",
                "transferiu à Justiça Federal a competência para julgar todos os crimes praticados por facções, independentemente de lesão a bens da União",
                "aboliu o regime disciplinar diferenciado para presos vinculados a organizações criminosas"
              ],
              correta: 1,
              explicacao: "A Lei 15.358/2026 endureceu o enfrentamento a facções e ao domínio territorial armado, somando-se (sem revogar) à Lei 12.850/2013, que segue definindo organização criminosa e regendo a colaboração premiada. Ponto de atenção defensivo, que o edital cobra em Penal, Processo Penal e Execução: risco de imputação por vínculo presumido, ampliação de cautelares e reflexos no regime prisional. Confira o texto atualizado antes da prova."
            },
            {
              id: "lex-6", modo: "lei", fonte: "Lei 9.455/97, arts. 1º e 2º; CF, art. 5º, XLIII",
              enunciado: "Sobre o crime de tortura (Lei 9.455/97):",
              alternativas: [
                "é crime próprio de funcionário público, exigindo-se a qualidade especial do agente para a configuração de qualquer das suas modalidades típicas previstas na legislação de regência",
                "é, em regra, crime comum — podendo ser praticado por particular —, e a condenação acarreta a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena",
                "admite fiança e graça, vedadas apenas a anistia e a progressão de regime aos condenados reincidentes específicos",
                "só se configura quando resulta lesão corporal grave ou morte da vítima submetida ao constrangimento",
                "aplica-se exclusivamente a fatos ocorridos em território nacional, ainda que a vítima seja brasileira"
              ],
              correta: 1,
              explicacao: "A tortura é crime COMUM (salvo a modalidade omissiva do art. 1º, §2º, própria de quem tem o dever de evitá-la). Efeito automático da condenação: perda do cargo + interdição pelo dobro do prazo da pena (§5º). É equiparada a hediondo (CF, art. 5º, XLIII): insuscetível de anistia, graça, indulto e fiança. O art. 2º consagra a extraterritorialidade quando a vítima for brasileira ou o agente estiver em local sob jurisdição brasileira."
            },
            {
              id: "lex-7", modo: "lei", fonte: "Lei 7.716/89; STF, ADO 26; Lei 14.532/2023",
              enunciado: "No sistema de repressão penal ao racismo, é correto afirmar que:",
              alternativas: [
                "a injúria racial permanece como crime contra a honra sujeito à ação penal privada e à prescrição ordinária, distinguindo-se do racismo pela ofensa dirigida a pessoa determinada",
                "a Lei 14.532/2023 tipificou a injúria racial dentro da Lei 7.716/89, tornando-a imprescritível e inafiançável — e o STF já havia enquadrado a LGBTIfobia nos crimes dessa mesma lei",
                "os crimes resultantes de preconceito admitem fiança e transação penal quando a pena máxima não ultrapassar dois anos de reclusão",
                "a imprescritibilidade constitucional alcança apenas o crime de racismo praticado por meio de publicação em veículo de comunicação social",
                "o enquadramento penal da homofobia e da transfobia dependeu de lei específica aprovada pelo Congresso Nacional no ano de 2023"
              ],
              correta: 1,
              explicacao: "A Lei 14.532/2023 deslocou a injúria racial para o art. 2º-A da Lei 7.716/89, atraindo o regime constitucional do racismo: imprescritível e inafiançável (CF, art. 5º, XLII), com pena de reclusão de 2 a 5 anos. Antes disso, na ADO 26/MI 4733 (2019), o STF já havia enquadrado a LGBTIfobia nos tipos da Lei 7.716/89 por interpretação conforme, até que sobrevenha lei específica."
            }
          ]
        },
        {
          id: "penal-juris-8",
          titulo: "Dignidade sexual e administração pública",
          questoes: [
            {
              id: "dig2-1", modo: "lei", fonte: "CP, arts. 213 e 217-A",
              enunciado: "Após a Lei 12.015/2009, quanto aos crimes de estupro e estupro de vulnerável:",
              alternativas: [
                "o estupro continua sendo crime próprio, admitindo apenas a mulher como sujeito passivo e o homem como sujeito ativo da conduta típica descrita no tipo penal",
                "o estupro passou a ser crime comum quanto ao sujeito passivo (qualquer pessoa) e reuniu num só tipo a conjunção carnal e outros atos libidinosos; no estupro de vulnerável (menor de 14 anos), o consentimento é irrelevante",
                "no estupro de vulnerável admite-se prova do consentimento da vítima menor de quatorze anos quando demonstrada sua maturidade sexual e sua experiência anterior",
                "a ação penal nos crimes contra a dignidade sexual permanece privada, dependendo de queixa-crime da vítima ou de seu representante legal",
                "o atentado violento ao pudor subsiste como tipo autônomo, em concurso material com o estupro sempre que praticadas as duas condutas no mesmo contexto"
              ],
              correta: 1,
              explicacao: "A Lei 12.015/2009 unificou estupro e atentado violento ao pudor no art. 213 (crime comum quanto ao sujeito passivo, e o STJ admite mulher como autora). Súmula 593/STJ: no art. 217-A, a vulnerabilidade do menor de 14 é ABSOLUTA — irrelevantes consentimento, experiência sexual anterior ou existência de relacionamento. A ação penal hoje é pública incondicionada (art. 225, redação da Lei 13.718/2018)."
            },
            {
              id: "dig2-2", modo: "lei", fonte: "CP, art. 215-A (Lei 13.718/2018)",
              enunciado: "O crime de importunação sexual (art. 215-A do CP):",
              alternativas: [
                "consiste em praticar ato libidinoso na presença de alguém sem sua anuência, com o fim de satisfazer lascívia própria ou alheia, e é subsidiário: só incide se o fato não constituir crime mais grave",
                "exige violência ou grave ameaça como meio de execução, distinguindo-se do estupro apenas pela menor intensidade do constrangimento imposto à vítima do delito",
                "configura contravenção penal apurada no Juizado Especial Criminal mediante transação penal, dada a pena máxima não superior a dois anos",
                "aplica-se apenas a condutas praticadas em transporte público coletivo, ambiente para o qual o tipo foi originalmente concebido pelo legislador",
                "depende de representação da vítima, sendo retratável até o trânsito em julgado da sentença penal condenatória"
              ],
              correta: 0,
              explicacao: "Art. 215-A (Lei 13.718/2018, resposta ao caso da ejaculação em ônibus): ato libidinoso sem anuência, para satisfazer lascívia própria ou de terceiro; pena de 1 a 5 anos, com subsidiariedade expressa ('se o ato não constitui crime mais grave'). Não é IMPO (pena máxima 5 anos), não exige violência/grave ameaça (que levaria ao art. 213) e não se limita ao transporte público. Ação penal pública incondicionada."
            },
            {
              id: "dig2-3", modo: "juris", fonte: "CP, art. 217-A; STJ, Súmula 593",
              enunciado: "Sobre o contato físico como elementar do estupro de vulnerável, a jurisprudência do STJ firmou que:",
              alternativas: [
                "o crime exige necessariamente contato físico direto entre autor e vítima, sob pena de desclassificação para importunação sexual ou para o crime de satisfação de lascívia",
                "a contemplação lasciva configura o ato libidinoso do art. 217-A, sendo prescindível o contato físico entre autor e vítima para a consumação do delito",
                "a prática de ato libidinoso por meio virtual afasta a tipicidade, por ausência de execução no mundo físico e de perigo concreto ao bem jurídico protegido",
                "o crime só se consuma com a conjunção carnal, respondendo o agente por tentativa nas demais formas de ato libidinoso praticadas contra a vítima vulnerável",
                "a presunção de violência foi revogada, exigindo-se prova do dissenso mesmo quando a vítima for menor de quatorze anos de idade"
              ],
              correta: 1,
              explicacao: "STJ: para o art. 217-A, é PRESCINDÍVEL o contato físico — a contemplação lasciva já configura o ato libidinoso (importante para casos de exploração virtual). Súmula 593: a vulnerabilidade do menor de 14 é absoluta. O contato físico é dispensável tanto na forma presencial quanto na praticada por meio eletrônico, conforme julgados das turmas criminais."
            },
            {
              id: "dig2-4", modo: "lei", fonte: "CP, art. 312; STJ, Súmula 599",
              enunciado: "Sobre o crime de peculato e os crimes contra a Administração Pública:",
              alternativas: [
                "o peculato culposo, uma vez reparado o dano antes da sentença irrecorrível, tem a punibilidade extinta — e, se posterior, reduz de metade a pena imposta ao funcionário",
                "a reparação do dano no peculato doloso, feita antes do recebimento da denúncia, extingue a punibilidade do agente por expressa previsão do Código Penal",
                "o princípio da insignificância é amplamente aplicável aos crimes contra a Administração Pública, dada a possibilidade de reparação administrativa do prejuízo causado ao erário",
                "o peculato é crime comum, podendo ser praticado por qualquer pessoa que se aproprie de bem público de que tenha a posse em razão de qualquer circunstância fática",
                "o particular jamais responde por crime contra a Administração, por se tratar de delito próprio insuscetível de concurso de pessoas"
              ],
              correta: 0,
              explicacao: "Art. 312, §3º: no peculato CULPOSO, a reparação do dano antes da sentença irrecorrível extingue a punibilidade; se posterior, reduz de metade a pena. No doloso, a reparação é apenas atenuante/arrependimento posterior. Súmula 599/STJ: em regra, a insignificância NÃO se aplica aos crimes contra a Administração (o STJ excepciona casos concretos, e o STF admite no descaminho). Peculato é crime próprio, mas o particular responde em concurso se conhecer a condição do funcionário (art. 30)."
            },
            {
              id: "dig2-5", modo: "lei", fonte: "CP, arts. 316 e 333; Lei 13.964/2019",
              enunciado: "Quanto à distinção entre concussão, corrupção passiva e corrupção ativa:",
              alternativas: [
                "concussão é exigir vantagem indevida em razão da função; corrupção passiva é solicitar, receber ou aceitar promessa de vantagem; a corrupção ativa é o crime do particular que oferece ou promete — e não há bilateralidade necessária entre passiva e ativa",
                "concussão e corrupção passiva são o mesmo delito, distinguindo-se apenas pela qualidade do sujeito passivo da conduta praticada pelo funcionário público no exercício da função",
                "a corrupção passiva exige, para sua configuração típica, a correspondente corrupção ativa de um particular identificado, dada a natureza bilateral necessária dessa espécie de delito",
                "na concussão o funcionário solicita a vantagem sem qualquer constrangimento à vítima, ao passo que na corrupção passiva ele a exige mediante ameaça velada de prejuízo",
                "a corrupção ativa só se configura quando a vantagem oferecida é efetivamente aceita e recebida pelo funcionário público destinatário do oferecimento"
              ],
              correta: 0,
              explicacao: "Concussão (art. 316): EXIGIR — há constrangimento, a vítima é coagida. Corrupção passiva (art. 317): solicitar, receber ou aceitar promessa. Corrupção ativa (art. 333): oferecer ou prometer. São crimes autônomos e de encontro não necessariamente bilateral: cabe corrupção passiva por solicitação sem que ninguém ofereça, e corrupção ativa consumada com o simples oferecimento, ainda que recusado."
            },
            {
              id: "dig2-6", modo: "lei", fonte: "CP, art. 327 e §2º",
              enunciado: "Para efeitos penais, considera-se funcionário público:",
              alternativas: [
                "somente o servidor estatutário ocupante de cargo efetivo, excluídos os ocupantes de cargo em comissão, os empregados públicos e os contratados temporariamente pela Administração",
                "quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública — equiparando-se quem trabalha em entidade paraestatal ou em empresa prestadora de serviço contratada para atividade típica da Administração",
                "apenas quem recebe remuneração dos cofres públicos, ainda que exerça a função de forma transitória ou em caráter precário, por delegação ou designação da autoridade competente",
                "todo aquele que presta qualquer serviço de interesse coletivo, incluindo profissionais liberais em atividades regulamentadas pelo poder público",
                "exclusivamente os agentes políticos e os detentores de mandato eletivo, para os quais o Código Penal reserva o conceito funcional ampliado"
              ],
              correta: 1,
              explicacao: "Art. 327, caput: conceito AMPLO — cargo, emprego ou função pública, ainda que transitoriamente ou SEM remuneração (ex.: mesário, jurado). §1º equipara quem exerce função em entidade paraestatal e quem trabalha para empresa prestadora de serviço contratada ou conveniada para atividade típica da Administração. O §2º traz causa de aumento de 1/3 para ocupantes de cargo em comissão, função de direção ou assessoramento."
            },
            {
              id: "dig2-7", modo: "juris", fonte: "CP, art. 225 (Lei 13.718/2018); STJ, Súmula 608",
              enunciado: "Sobre a ação penal nos crimes contra a dignidade sexual:",
              alternativas: [
                "é pública condicionada à representação da vítima, salvo quando esta for menor de dezoito anos ou pessoa vulnerável, hipóteses em que se procede mediante ação pública incondicionada",
                "passou a ser pública incondicionada em todos os crimes contra a dignidade sexual, por força da Lei 13.718/2018 — superando o regime anterior de representação",
                "é privada, cabendo queixa-crime no prazo decadencial de seis meses contado do conhecimento da autoria do fato pela vítima ofendida",
                "depende de representação quando o crime for praticado sem violência real, aplicando-se a incondicionada apenas aos casos de violência ou grave ameaça efetiva",
                "é pública condicionada, admitindo-se retratação da representação até a prolação da sentença de primeiro grau"
              ],
              correta: 1,
              explicacao: "A Lei 13.718/2018 deu nova redação ao art. 225: nos crimes dos Capítulos I e II do Título VI, procede-se mediante ação penal pública INCONDICIONADA — sem exceções. Antes, a regra era a condicionada, com incondicionada só para vulneráveis. A Súmula 608/STF (estupro com violência real = ação pública incondicionada) perdeu utilidade prática, pois hoje todos os casos são incondicionados."
            }
          ]
        },
        {
          id: "penal-juris-9",
          titulo: "Desarmamento, trânsito e leis 2024-2026",
          questoes: [
            {
              id: "arm-1", modo: "lei", fonte: "Lei 10.826/03, arts. 12, 14 e 16",
              enunciado: "No Estatuto do Desarmamento, a distinção entre posse e porte de arma de fogo:",
              alternativas: [
                "é irrelevante, pois ambas as condutas configuram o mesmo tipo penal, diferenciando-se apenas quanto à dosimetria aplicada na terceira fase do cálculo da pena",
                "posse é manter a arma no interior de residência ou local de trabalho (quando o agente for o titular); porte é trazê-la fora desses limites — e o porte tem pena mais severa que a posse",
                "posse pressupõe registro vencido e porte pressupõe registro válido, sendo a regularidade documental o critério legal de distinção entre as duas figuras típicas",
                "posse aplica-se somente a armas de uso restrito e porte a armas de uso permitido, conforme a classificação estabelecida em decreto regulamentador federal",
                "a posse de arma de fogo de uso permitido foi descriminalizada, subsistindo apenas a infração administrativa de omissão de registro perante o órgão competente"
              ],
              correta: 1,
              explicacao: "Posse (art. 12): dentro de casa ou no local de trabalho, se o agente for titular ou responsável — pena de 1 a 3 anos. Porte (art. 14): trazer consigo fora desses locais — pena de 2 a 4 anos. Para arma de uso RESTRITO, o art. 16 pune ambas com 3 a 6 anos, e é crime equiparado a hediondo quando se trata de arma de uso proibido (art. 16, §2º, após o Pacote Anticrime)."
            },
            {
              id: "arm-2", modo: "juris", fonte: "STJ, Súmula 513; STF, RE 715.639",
              enunciado: "Quanto ao porte de arma de fogo com o registro ou a autorização vencidos:",
              alternativas: [
                "a mera desatualização do registro caracteriza o crime de porte ilegal, dada a natureza formal do delito e a irrelevância da regularidade administrativa anterior do agente",
                "a jurisprudência distingue: a posse de arma com registro vencido configura mera irregularidade administrativa (atipicidade), mas o porte fora de casa segue sendo crime",
                "tanto a posse quanto o porte com registro vencido são atípicos, por se tratar de simples inadimplemento de obrigação administrativa de renovação periódica",
                "a arma de fogo desmuniciada e sem munição ao alcance torna a conduta atípica em qualquer das modalidades previstas no Estatuto do Desarmamento",
                "a abolitio criminis temporária dos prazos de regularização permanece vigente por prazo indeterminado para as armas de uso permitido"
              ],
              correta: 1,
              explicacao: "A jurisprudência distingue: POSSE de arma de uso permitido com registro vencido = irregularidade administrativa (atipicidade material, STJ); PORTE nas mesmas condições = crime. Sobre a arma desmuniciada, STF e STJ firmaram que o crime é de perigo abstrato e a conduta permanece TÍPICA — cuidado com esse distrator, que inverte o entendimento consolidado."
            },
            {
              id: "arm-3", modo: "lei", fonte: "Lei 9.503/97, arts. 302, 303 e 306",
              enunciado: "No Código de Trânsito Brasileiro, quanto aos crimes de homicídio culposo na direção e embriaguez ao volante:",
              alternativas: [
                "o homicídio culposo no trânsito exige a comprovação do dolo eventual do condutor quando houver ingestão prévia de bebida alcoólica em qualquer quantidade",
                "o homicídio culposo na direção tem pena majorada quando o agente conduz sob influência de álcool; e o crime de embriaguez ao volante (art. 306) é de perigo abstrato, dispensando lesão concreta",
                "a embriaguez ao volante só se configura mediante exame de sangue ou etilômetro, sendo inadmissível a prova por vídeo, testemunhas ou constatação de sinais notórios de alteração",
                "a recusa do condutor em se submeter ao teste do bafômetro configura, por si só, o crime de desobediência previsto no Código Penal brasileiro",
                "o homicídio culposo no trânsito é de ação penal pública condicionada à representação dos familiares da vítima falecida no acidente"
              ],
              correta: 1,
              explicacao: "Art. 302, §1º, do CTB traz as majorantes; a Lei 13.546/2017 criou a forma qualificada do §3º (conduzir sob influência de álcool ou substância psicoativa), com reclusão de 5 a 8 anos. O art. 306 é crime de perigo abstrato, e o §2º admite a prova por vídeo, testemunhas ou outros meios além do etilômetro e do exame de sangue. A recusa ao teste é infração administrativa gravíssima, não crime de desobediência."
            },
            {
              id: "arm-4", modo: "lei", fonte: "Lei 15.384/2026 (vicaricídio)",
              enunciado: "A Lei 15.384/2026 tipificou a chamada violência vicária (vicaricídio), que consiste, em síntese, em:",
              alternativas: [
                "praticar violência contra a mulher no ambiente de trabalho com o fim de obter vantagem econômica ou impedir sua ascensão profissional na estrutura organizacional da empresa",
                "atingir pessoa afetivamente ligada à vítima — tipicamente o filho — como forma de causar sofrimento à mulher, instrumentalizando terceiro no contexto da violência de gênero",
                "constranger a vítima mediante ameaça de divulgação de imagens íntimas obtidas durante relacionamento anterior, com o objetivo de impedir o rompimento do vínculo afetivo",
                "descumprir medida protetiva de urgência deferida em favor da mulher em situação de violência doméstica e familiar, conduta já prevista na Lei Maria da Penha",
                "omitir socorro à mulher vítima de violência doméstica quando o agente tiver o dever legal de agir para evitar o resultado lesivo"
              ],
              correta: 1,
              explicacao: "Violência vicária: o agressor atinge quem a vítima ama — em regra os filhos — para causar-lhe o máximo sofrimento; a criança é instrumentalizada como meio de violência contra a mulher. A Lei 15.384/2026 deu tipificação própria à conduta, no movimento de expansão legislativa que também produziu a Lei 14.994/2024 (feminicídio autônomo). Confira o texto atualizado antes da prova, por ser legislação recentíssima."
            },
            {
              id: "arm-5", modo: "lei", fonte: "Lei 14.811/2024",
              enunciado: "A Lei 14.811/2024, no enfrentamento à violência contra crianças e adolescentes:",
              alternativas: [
                "revogou integralmente o Estatuto da Criança e do Adolescente na parte relativa aos crimes, transferindo essa disciplina para um capítulo próprio do Código Penal brasileiro",
                "tipificou o bullying e o cyberbullying, instituiu política nacional de prevenção ao abuso e à exploração sexual e incluiu no rol dos hediondos crimes graves praticados contra menores",
                "descriminalizou condutas de menor gravidade praticadas por adolescentes no ambiente escolar, substituindo-as por medidas restaurativas de mediação de conflitos",
                "limitou-se a criar campanhas educativas de conscientização nas escolas públicas e privadas, sem produzir efeitos na esfera penal ou processual penal",
                "estabeleceu que os crimes contra crianças e adolescentes passam a ser de ação penal privada, cabendo aos responsáveis legais o oferecimento da queixa-crime"
              ],
              correta: 1,
              explicacao: "A Lei 14.811/2024 inseriu o art. 146-A no CP (bullying e cyberbullying — este com pena mais grave), criou a Política Nacional de Prevenção e Combate ao Abuso e Exploração Sexual da Criança e do Adolescente e ampliou o rol de crimes hediondos (ex.: induzimento ao suicídio de criança, sequestro de menor de 18 anos). Movimento típico de expansão penal, que o edital cobra em vários pontos."
            },
            {
              id: "arm-6", modo: "lei", fonte: "Lei 12.850/2013, arts. 1º, §1º, e 4º",
              enunciado: "Sobre a organização criminosa e a colaboração premiada:",
              alternativas: [
                "organização criminosa é a associação de duas ou mais pessoas para o fim específico de cometer crimes cuja pena máxima não ultrapasse dois anos, com estrutura ordenada e divisão de tarefas",
                "organização criminosa exige 4 ou mais pessoas, estrutura ordenada e divisão de tarefas, para obter vantagem mediante infrações com pena máxima superior a 4 anos ou de caráter transnacional; e nenhuma sentença condenatória pode se fundar apenas na palavra do colaborador",
                "a colaboração premiada dispensa homologação judicial, bastando o acordo firmado entre o colaborador e o órgão de persecução para produzir seus efeitos legais",
                "a condenação pode fundar-se exclusivamente nas declarações do colaborador quando estas forem detalhadas, coerentes e prestadas sob o compromisso legal de dizer a verdade",
                "o colaborador tem direito subjetivo ao perdão judicial, que o juiz deve conceder sempre que homologado o acordo de colaboração premiada celebrado"
              ],
              correta: 1,
              explicacao: "Art. 1º, §1º: 4 ou mais pessoas + estrutura ordenada + divisão de tarefas + infrações com pena máxima > 4 anos ou de caráter transnacional. Art. 4º, §16: nenhuma sentença condenatória será proferida com fundamento APENAS nas declarações do colaborador — garantia essencial da defesa. A colaboração exige homologação judicial (§7º), e os benefícios dependem da efetividade dos resultados."
            },
            {
              id: "arm-7", modo: "juris", fonte: "STF, RE 635.659 (Tema 506, 2024)",
              enunciado: "Ao julgar o RE 635.659 sobre o porte de maconha para consumo pessoal, o STF fixou que:",
              alternativas: [
                "a conduta permanece integralmente criminalizada, com pena privativa de liberdade, mantida a redação original do art. 28 da Lei de Drogas para todas as substâncias",
                "o porte de maconha para consumo pessoal não configura ilícito penal (sem prejuízo da natureza ilícita da conduta), fixando-se parâmetro de quantidade como presumção relativa de uso próprio",
                "todas as drogas ilícitas tiveram o porte para consumo pessoal descriminalizado, cabendo ao legislador definir a política de redução de danos aplicável a cada substância",
                "a descriminalização alcança também o cultivo e a comercialização em pequena escala, desde que o agente comprove destinação exclusiva ao consumo próprio",
                "o julgamento manteve a competência dos Juizados Especiais Criminais para processar e julgar o porte para consumo, com aplicação de transação penal"
              ],
              correta: 1,
              explicacao: "Tema 506 (2024): o STF declarou a inconstitucionalidade do art. 28 da Lei 11.343/06 na parte em que criminaliza o porte de MACONHA para consumo pessoal — a conduta segue ilícita, mas sem natureza penal, sujeita a sanções administrativas. Fixou-se parâmetro de 40g ou 6 plantas fêmeas como presunção RELATIVA de uso próprio, invertendo o ônus argumentativo. Não alcança outras drogas nem o tráfico."
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
        },
        {
          id: "criminologia-2",
          titulo: "Criminologias contemporâneas e vitimologia",
          questoes: [
            {
              id: "cri2-1", modo: "caso", fonte: "Paradigma da reação social (labeling approach)",
              enunciado: "O paradigma da reação social (labeling approach) promoveu uma virada na criminologia ao sustentar que:",
              alternativas: [
                "as causas da criminalidade estão em fatores biológicos e psicológicos do indivíduo, que a ciência pode identificar precocemente para orientar políticas eficazes de prevenção do delito",
                "a criminalidade não é um dado ontológico, mas um status atribuído por processos de definição e etiquetamento — deslocando o objeto de estudo do criminoso para as instâncias de controle social",
                "o crime decorre da desorganização social das grandes cidades, devendo o Estado investir em urbanização e ocupação dos espaços públicos degradados",
                "a pena cumpre eficazmente as funções declaradas de prevenção geral e especial, cabendo à criminologia aperfeiçoar os instrumentos de medição da reincidência",
                "todos os indivíduos possuem igual propensão ao delito, contida pelos vínculos sociais estabelecidos com a família, a escola e o trabalho"
              ],
              correta: 1,
              explicacao: "O labeling (Becker, Lemert) rompe com o paradigma etiológico: pergunta não 'por que se delinque?', mas 'quem define o que é crime e quem é criminoso?'. O desvio é resultado da reação social — o etiquetamento produz a carreira desviante (desviação secundária). É a base do paradigma da reação social cobrado em todos os pontos do edital."
            },
            {
              id: "cri2-2", modo: "caso", fonte: "Zaffaroni — criminalização primária e secundária",
              enunciado: "Na lição de Zaffaroni, distinguem-se criminalização primária e secundária. É correto afirmar que:",
              alternativas: [
                "a criminalização primária é a atuação policial de rua e a secundária é o julgamento pelos tribunais superiores nas instâncias recursais",
                "a primária é o poder de definir crimes em abstrato (atividade legislativa); a secundária é o exercício concreto do poder punitivo sobre pessoas selecionadas — seleção estruturalmente orientada por estereótipos",
                "ambas se referem a momentos da execução penal: a primária na sentença condenatória e a secundária nos incidentes da execução da pena imposta",
                "a criminalização secundária alcança de forma uniforme todas as camadas sociais, dada a impessoalidade das agências de controle formal do Estado",
                "a distinção perdeu relevância com a constitucionalização do processo penal brasileiro"
              ],
              correta: 1,
              explicacao: "Criminalização primária = programa legislativo (definição abstrata de crimes); secundária = ação das agências (polícia, MP, Judiciário) sobre pessoas concretas. Como o programa primário é irrealizável por completo, a secundária é inevitavelmente SELETIVA — e seleciona pelos estereótipos (pobreza, raça, território). Conceito central para a Defensoria."
            },
            {
              id: "cri2-3", modo: "caso", fonte: "Criminologia feminista",
              enunciado: "A criminologia feminista contribuiu para o campo criminológico ao evidenciar, entre outros pontos, que:",
              alternativas: [
                "as mulheres delinquem menos por características biológicas ligadas à menor agressividade natural do sexo feminino, confirmando as teses positivistas clássicas de Lombroso e Ferri sobre a mulher criminosa",
                "o sistema penal é neutro em relação ao gênero, tratando igualmente homens e mulheres nas fases de criminalização e de vitimização",
                "o saber criminológico tradicional é androcêntrico: invisibiliza a mulher como autora e como vítima, e o próprio sistema penal reproduz violências — como a revitimização da mulher que busca as instâncias formais",
                "a criminalização da violência doméstica esgotou o problema da desigualdade de gênero no campo penal",
                "a prisão feminina reproduz as mesmas condições da masculina, sem especificidades que justifiquem tratamento normativo próprio"
              ],
              correta: 2,
              explicacao: "A crítica feminista denuncia o androcentrismo do saber penal e criminológico, a dupla punição da mulher (pelo crime e pelo desvio do papel de gênero), a vitimização secundária nas instâncias formais e o encarceramento feminino crescente (mulheres-mula, seletividade da Lei de Drogas). Diálogo direto com as Regras de Bangkok, também no edital."
            },
            {
              id: "cri2-4", modo: "caso", fonte: "Criminologia das relações raciais; necropolítica",
              enunciado: "Sobre a criminologia das relações raciais e o conceito de necropolítica (Mbembe) no contexto brasileiro:",
              alternativas: [
                "a seletividade racial foi superada com a igualdade formal consagrada na Constituição de 1988, restando ao sistema penal apenas distorções pontuais de natureza individual, corrigíveis pela via recursal",
                "o racismo estrutural atravessa a criminalização secundária — do perfilamento racial ao encarceramento em massa e à letalidade policial —, e a necropolítica descreve o poder de ditar quem pode viver e quem deve morrer",
                "a letalidade policial distribui-se de modo estatisticamente uniforme entre os grupos raciais e os territórios das cidades brasileiras",
                "a categoria necropolítica foi formulada por Zaffaroni para explicar o genocídio nas agências penais latino-americanas",
                "o pensamento criminológico brasileiro manteve-se historicamente imune às teorias racistas do positivismo do século XIX"
              ],
              correta: 1,
              explicacao: "A criminologia das relações raciais mostra o racismo como elemento ESTRUTURANTE do sistema penal brasileiro (herança escravista, teses de Nina Rodrigues, guerra às drogas racializada). Necropolítica é conceito de Achille Mbembe: soberania como poder de fazer morrer — mobilizado para ler a letalidade policial e o extermínio da juventude negra. Pauta nuclear da DPE-RJ."
            },
            {
              id: "cri2-5", modo: "juris", fonte: "STF, ADO 26 e MI 4733",
              enunciado: "Quanto à criminalização da LGBTIfobia, o STF decidiu que:",
              alternativas: [
                "a criação de tipo penal específico é vedada ao Judiciário, cabendo apenas recomendar ao Congresso Nacional a aprovação de lei em prazo razoável, sob pena de responsabilização por omissão",
                "as condutas homofóbicas e transfóbicas enquadram-se nos tipos da Lei do Racismo (Lei 7.716/89), até que o Congresso edite lei específica — por interpretação conforme, sem criação de tipo novo",
                "a homotransfobia configura o crime de injúria racial em sua modalidade qualificada, punida com reclusão e multa nos termos do Código Penal",
                "a proteção penal da população LGBTI depende de emenda constitucional que inclua a orientação sexual entre os objetivos fundamentais da República",
                "a matéria é de competência legislativa estadual, dada a natureza concorrente da segurança pública"
              ],
              correta: 1,
              explicacao: "Na ADO 26 e no MI 4733 (2019), o STF reconheceu a mora do Congresso e determinou que a LGBTIfobia se subsume aos crimes da Lei 7.716/89 (racismo em sentido social) até a edição de lei específica. Não houve criação judicial de tipo — houve interpretação conforme do conceito de raça fixado no caso Ellwanger. Tema dos pontos de criminologia E de penal."
            },
            {
              id: "cri2-6", modo: "caso", fonte: "Vitimologia — vitimização primária, secundária e terciária",
              enunciado: "Na vitimologia, chama-se vitimização secundária (ou sobrevitimização) aquela que decorre:",
              alternativas: [
                "diretamente da conduta criminosa praticada pelo ofensor contra a vítima do delito",
                "do contato da vítima com as instâncias formais de controle — quando o próprio processo penal lhe impõe novos sofrimentos, como depoimentos repetidos e desqualificação da sua palavra",
                "do abandono da vítima pelo seu grupo social, familiar e comunitário após a repercussão pública do crime sofrido, com estigmatização duradoura e perda dos vínculos de pertencimento",
                "da autocolocação da vítima em situação de risco, que atenua a responsabilidade penal do autor",
                "dos danos difusos suportados pela coletividade em razão da sensação de insegurança"
              ],
              correta: 1,
              explicacao: "Vitimização primária = a causada pelo crime; SECUNDÁRIA = a causada pelo próprio sistema (polícia, perícia, juízo — revitimização); terciária = a do meio social (estigma, abandono). O combate à vitimização secundária inspirou a Lei 13.431/2017 (depoimento especial) e a proteção da vítima de crimes sexuais — pontes que a prova adora cruzar."
            },
            {
              id: "cri2-7", modo: "caso", fonte: "Sutherland — crimes de colarinho branco",
              enunciado: "A teoria dos crimes de colarinho branco (Sutherland) foi revolucionária porque:",
              alternativas: [
                "comprovou estatisticamente que a criminalidade econômica é mais frequente nas camadas pobres, orientando o endurecimento das penas patrimoniais e a política criminal de tolerância zero",
                "definiu o crime de colarinho branco como o cometido por pessoa de respeitabilidade e elevado status no exercício de sua ocupação — refutando as teorias que vinculavam o crime à pobreza",
                "demonstrou que os crimes empresariais são punidos com mais rigor que os crimes de rua, dada a maior capacidade de fiscalização estatal sobre as atividades econômicas formais",
                "propôs a descriminalização dos delitos econômicos, por sua reduzida danosidade social em comparação com a criminalidade violenta das periferias urbanas",
                "atribuiu a criminalidade econômica a traços psicopatológicos dos dirigentes das grandes corporações"
              ],
              correta: 1,
              explicacao: "Sutherland (1939) mostrou que pessoas de alto status delinquem no exercício da profissão — e quase não são alcançadas pelo sistema penal (cifra dourada). A base explicativa é a associação diferencial: o comportamento criminoso é APRENDIDO nas interações. Efeito: derruba a equação crime = pobreza e expõe a seletividade — por isso aparece nos cinco pontos do edital."
            }
          ]
        },
        {
          id: "criminologia-3",
          titulo: "Política criminal e teorias sociológicas",
          questoes: [
            {
              id: "pol-1", modo: "caso", fonte: "Abolicionismo e minimalismo penal",
              enunciado: "Sobre as correntes deslegitimadoras do sistema penal, é correto afirmar que:",
              alternativas: [
                "abolicionismo e minimalismo são sinônimos, pois ambos propõem a extinção imediata e integral do sistema de justiça criminal e a sua substituição por instâncias comunitárias de mediação de conflitos",
                "o abolicionismo (Hulsman, Christie) propõe a superação do sistema penal, substituindo-o por formas não punitivas de solução de conflitos; o minimalismo (Baratta, Ferrajoli) admite o direito penal como mal necessário, reduzido à ultima ratio",
                "o minimalismo penal defende a ampliação dos tipos penais para proteger bens jurídicos difusos e coletivos emergentes na sociedade de risco contemporânea",
                "o abolicionismo foi incorporado ao ordenamento brasileiro pela Lei de Execução Penal, que substituiu a pena de prisão por medidas restaurativas",
                "ambas as correntes sustentam o incremento das penas privativas de liberdade como instrumento de pacificação social e de prevenção geral positiva"
              ],
              correta: 1,
              explicacao: "Abolicionismo: o sistema penal é o problema, não a solução — propõe-se sua superação (Hulsman: 'a linguagem do sistema penal é inadequada'; Christie: o conflito foi roubado das partes). Minimalismo/garantismo: mantém o direito penal, mas como ultima ratio, com máximas garantias (Ferrajoli) — e Zaffaroni propõe o realismo marginal e a teoria agnóstica da pena. Distinção cobrada em todos os pontos do edital."
            },
            {
              id: "pol-2", modo: "caso", fonte: "Jakobs — Direito Penal do Inimigo",
              enunciado: "A teoria do Direito Penal do Inimigo, formulada por Günther Jakobs, caracteriza-se por:",
              alternativas: [
                "assegurar tratamento processual idêntico a todos os acusados, diferenciando apenas a dosimetria da pena conforme a gravidade objetiva do fato praticado e a culpabilidade do agente",
                "cindir o direito penal em dois: o do cidadão (com todas as garantias) e o do inimigo — para quem se antecipa a punição, aumentam-se as penas e relativizam-se garantias, punindo-se pela periculosidade e não pelo fato",
                "propor a abolição das penas privativas de liberdade para crimes cometidos sem violência, restringindo o cárcere aos autores de delitos violentos contra a vida",
                "ampliar as garantias processuais dos acusados de crimes graves, dada a maior severidade das sanções a que estão submetidos no processo penal moderno",
                "sustentar que todo delinquente deve ser tratado como inimigo do Estado, eliminando-se a distinção entre direito penal do fato e direito penal do autor"
              ],
              correta: 1,
              explicacao: "Jakobs distingue o cidadão (que delinque mas mantém vínculo com o Direito) do 'inimigo' (que se afasta permanentemente — terrorismo, criminalidade organizada): antecipação da punibilidade (atos preparatórios), penas desproporcionais e supressão de garantias. É direito penal do AUTOR, não do fato. A crítica — central para a Defensoria — aponta a incompatibilidade com o Estado Democrático e o uso seletivo do rótulo."
            },
            {
              id: "pol-3", modo: "caso", fonte: "Wilson e Kelling — janelas quebradas; tolerância zero",
              enunciado: "A teoria das janelas quebradas (broken windows) e a política de tolerância zero sustentam que:",
              alternativas: [
                "a repressão às pequenas desordens e incivilidades preveniria crimes graves — premissa que embasou políticas de policiamento agressivo, duramente criticadas por aprofundar a seletividade e a violência sobre populações vulneráveis",
                "a solução da criminalidade urbana está no investimento em políticas sociais de longo prazo, com redução do policiamento ostensivo nas áreas de maior vulnerabilidade social e econômica",
                "a criminalidade decorre exclusivamente de fatores individuais de personalidade, devendo o Estado priorizar o tratamento psiquiátrico dos infratores contumazes",
                "as taxas de criminalidade são independentes da atuação policial, cabendo ao sistema penal apenas a função simbólica de reafirmação da norma violada",
                "o controle social informal é ineficaz, devendo ser integralmente substituído pelo controle formal exercido pelas agências estatais de repressão"
              ],
              correta: 0,
              explicacao: "Wilson e Kelling (1982): uma janela quebrada não reparada sinalizaria ausência de controle, gerando espiral de desordem. Aplicada em Nova York (Giuliani/Bratton) como 'tolerância zero'. A criminologia crítica denuncia: confunde correlação com causa, ignora outros fatores da queda dos índices e produz encarceramento em massa e violência policial sobre pobres, negros e moradores de rua."
            },
            {
              id: "pol-4", modo: "caso", fonte: "Merton — teoria da anomia e das oportunidades",
              enunciado: "Na teoria da anomia de Robert Merton, a conduta desviante é explicada por:",
              alternativas: [
                "uma patologia individual do agente, decorrente de disfunções neurológicas identificáveis por exame criminológico prévio à aplicação da pena privativa de liberdade",
                "uma tensão (strain) entre as metas culturais socialmente valorizadas e os meios institucionalizados desigualmente distribuídos para alcançá-las, gerando adaptações como a inovação criminosa",
                "pela aprendizagem do comportamento criminoso em grupos íntimos, mediante associação diferencial com portadores de definições favoráveis à violação da lei",
                "pela ausência de vínculos sociais que contenham o impulso natural ao delito, presente em igual medida em todos os indivíduos de uma sociedade",
                "pela reação social de etiquetamento, que constrói a identidade desviante independentemente da conduta concretamente praticada pelo indivíduo"
              ],
              correta: 1,
              explicacao: "Merton adaptou a anomia de Durkheim: nas sociedades que universalizam metas (sucesso material) mas distribuem desigualmente os meios legítimos, surge a tensão. Cinco modos de adaptação: conformidade, INOVAÇÃO (aceita a meta, rejeita o meio — o crime instrumental), ritualismo, retraimento e rebelião. É teoria do consenso/estrutural-funcionalista — distinta da associação diferencial (Sutherland) e do labeling."
            },
            {
              id: "pol-5", modo: "caso", fonte: "Escola de Chicago — ecologia criminal",
              enunciado: "A Escola de Chicago contribuiu para a criminologia ao:",
              alternativas: [
                "identificar o criminoso nato por características anatômicas hereditárias, fundando o paradigma etiológico de matriz biológica que dominou o século XIX",
                "estudar a distribuição espacial da criminalidade na cidade e associá-la à desorganização social de determinadas zonas urbanas, inaugurando a ecologia criminal e programas de prevenção comunitária",
                "demonstrar que a criminalidade independe do território, distribuindo-se uniformemente pelas diferentes áreas do espaço urbano das grandes metrópoles industriais",
                "sustentar que a pena deve ter finalidade exclusivamente retributiva, sem qualquer pretensão preventiva ou ressocializadora sobre o condenado",
                "propor o abolicionismo penal como resposta à falência das instituições totais nas sociedades urbanas contemporâneas"
              ],
              correta: 1,
              explicacao: "Escola de Chicago (Park, Burgess, Shaw e McKay, anos 1920-30): a cidade em zonas concêntricas; a 'zona de transição' concentraria desorganização social e delinquência. Método empírico e trabalho de campo. Legado: prevenção situacional e programas comunitários. Crítica: naturaliza a associação entre pobreza urbana e crime, abrindo caminho para políticas de controle territorial — leitura que a criminologia crítica retoma."
            },
            {
              id: "pol-6", modo: "caso", fonte: "Criminologia midiática e populismo penal",
              enunciado: "Sobre criminologia midiática e populismo penal:",
              alternativas: [
                "a mídia exerce papel neutro na construção da agenda criminal, limitando-se a informar objetivamente os dados oficiais de criminalidade divulgados pelos órgãos de segurança pública",
                "a criminologia midiática constrói uma realidade paralela sobre o crime — com estereótipos de 'eles' contra 'nós' — que alimenta o populismo penal: respostas legislativas simbólicas e imediatistas a comoções sociais",
                "o populismo penal caracteriza-se pela redução das penas em atenção às demandas de movimentos sociais organizados de defesa dos direitos humanos e das pessoas presas",
                "a inflação legislativa penal decorre de estudos técnicos criminológicos que demonstram a eficácia preventiva do aumento das penas cominadas em abstrato",
                "o direito penal simbólico produz efeitos instrumentais concretos na redução da criminalidade violenta, justificando a criação constante de novos tipos penais"
              ],
              correta: 1,
              explicacao: "Zaffaroni: a criminologia midiática cria causalidade mágica e o estereótipo do inimigo, produzindo pânico moral. O populismo penal converte a comoção em leis apressadas (direito penal simbólico e de emergência), com inflação legislativa e endurecimento sem eficácia preventiva demonstrada — mas com efeito real de encarceramento seletivo. Chave para ler criticamente as leis penais recentes."
            },
            {
              id: "pol-7", modo: "caso", fonte: "Política de drogas e encarceramento em massa",
              enunciado: "Na análise criminológica da política de drogas brasileira e do encarceramento em massa:",
              alternativas: [
                "a ausência de critérios objetivos entre usuário e traficante na Lei 11.343/06 favorece a seletividade racial e territorial, sendo o tráfico um dos principais responsáveis pelo crescimento da população prisional, sobretudo feminina",
                "a Lei de Drogas estabeleceu critérios objetivos e quantitativos precisos para distinguir usuário de traficante, eliminando a discricionariedade policial na tipificação da conduta flagrada",
                "o encarceramento em massa brasileiro decorre principalmente das condenações por crimes contra a vida, que respondem pela maior parcela da população carcerária nacional",
                "a criminalização das drogas atinge de forma equânime todos os grupos sociais, dada a universalidade do consumo nas diferentes camadas da população brasileira",
                "a descriminalização do porte para consumo próprio no Brasil eliminou a principal porta de entrada no sistema penal para jovens de periferia"
              ],
              correta: 0,
              explicacao: "O art. 28, §2º, da Lei 11.343/06 remete a critérios abertos (quantidade, local, circunstâncias, conduta e antecedentes) — o que transfere à polícia o poder de definir quem é usuário e quem é traficante, com resultado racialmente enviesado. O tráfico é a principal imputação da população prisional feminina. Em 2024 o STF (RE 635.659) fixou parâmetro de porte para maconha, mas o debate sobre seletividade permanece central."
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
        },
        {
          id: "constitucional-2",
          titulo: "Tratados, convencionalidade e IDC",
          questoes: [
            {
              id: "trat-1", modo: "juris", fonte: "CF, art. 5º, §§2º e 3º; STF, RE 466.343",
              enunciado: "Sobre a posição hierárquica dos tratados internacionais de direitos humanos no ordenamento brasileiro:",
              alternativas: [
                "todos os tratados de direitos humanos ingressam com estatura constitucional por força do art. 5º, §2º, da Constituição Federal, independentemente do rito de aprovação parlamentar adotado no Congresso",
                "os aprovados pelo rito do art. 5º, §3º (dois turnos, três quintos, nas duas Casas) equivalem a emenda constitucional; os demais têm status supralegal — acima da lei ordinária e abaixo da Constituição",
                "todos os tratados internacionais, versem ou não sobre direitos humanos, ingressam no ordenamento com força de lei ordinária, podendo ser revogados por legislação superveniente",
                "os tratados de direitos humanos anteriores à Emenda Constitucional 45/2004 foram automaticamente recepcionados com estatura de emenda constitucional pelo Supremo Tribunal Federal",
                "a hierarquia é definida caso a caso pelo Supremo, conforme a relevância da matéria versada no tratado e o grau de consenso internacional a seu respeito"
              ],
              correta: 1,
              explicacao: "RE 466.343 (2008) firmou a tese da SUPRALEGALIDADE: tratados de direitos humanos não aprovados pelo rito especial ficam acima das leis e abaixo da Constituição. Os aprovados pelo art. 5º, §3º equivalem a emenda (ex.: Convenção de Nova York sobre pessoas com deficiência e o Tratado de Marraqueche). Efeito prático da supralegalidade: a prisão civil do depositário infiel foi paralisada (Súmula Vinculante 25)."
            },
            {
              id: "trat-2", modo: "caso", fonte: "Controle de convencionalidade; Corte IDH, caso Almonacid Arellano",
              enunciado: "O controle de convencionalidade consiste em:",
              alternativas: [
                "verificar a compatibilidade das leis internas com a Constituição Federal, competência privativa do Supremo Tribunal Federal no exercício do controle concentrado de constitucionalidade",
                "aferir a compatibilidade das normas internas com os tratados de direitos humanos ratificados — controle que, segundo a Corte IDH, deve ser exercido também de ofício por todos os juízes nacionais",
                "submeter os tratados internacionais assinados pelo Brasil ao crivo prévio do Congresso Nacional antes de sua ratificação pelo Presidente da República no plano externo",
                "permitir que a Corte Interamericana revise diretamente as sentenças transitadas em julgado proferidas pelos tribunais superiores dos Estados que reconheceram sua jurisdição",
                "harmonizar as decisões dos tribunais nacionais com a jurisprudência estrangeira dos países que integram o mesmo bloco econômico regional"
              ],
              correta: 1,
              explicacao: "A Corte IDH (Almonacid Arellano vs. Chile, 2006) firmou que o Poder Judiciário nacional deve exercer o controle de convencionalidade de ofício, entre as normas internas e a Convenção Americana, considerando também a interpretação dada pela própria Corte. No Brasil, é ferramenta central da Defensoria: uma lei pode ser constitucional e, ainda assim, inconvencional."
            },
            {
              id: "trat-3", modo: "lei", fonte: "CF, art. 109, §5º (EC 45/2004)",
              enunciado: "O incidente de deslocamento de competência (IDC), previsto no art. 109, §5º, da Constituição:",
              alternativas: [
                "pode ser suscitado por qualquer interessado perante o Supremo Tribunal Federal, em casos de grave violação de direitos humanos ocorridos no âmbito estadual",
                "é suscitado pelo Procurador-Geral da República perante o STJ, em qualquer fase do inquérito ou processo, nas hipóteses de grave violação de direitos humanos e com a finalidade de assegurar o cumprimento de tratados internacionais",
                "desloca automaticamente para a Justiça Federal todos os processos que envolvam violação de direitos humanos, independentemente de decisão judicial prévia sobre o caso concreto",
                "foi declarado inconstitucional pelo Supremo Tribunal Federal por violar o princípio do juiz natural e o pacto federativo consagrado na Constituição de 1988",
                "cabe exclusivamente ao Conselho Nacional de Justiça, no exercício de sua competência de controle da atuação administrativa do Poder Judiciário nacional"
              ],
              correta: 1,
              explicacao: "Art. 109, §5º (federalização dos crimes contra direitos humanos): legitimidade EXCLUSIVA do PGR, competência do STJ, cabível em qualquer fase do inquérito ou processo. Requisitos construídos pelo STJ: grave violação de direitos humanos, risco de responsabilização internacional e incapacidade das instâncias locais. Casos emblemáticos: Manoel Mattos (IDC 2) e o caso da Chacina de Unaí."
            },
            {
              id: "trat-4", modo: "juris", fonte: "Corte IDH; CF, art. 7º do ADCT",
              enunciado: "Quanto aos efeitos das sentenças da Corte Interamericana de Direitos Humanos condenatórias do Brasil:",
              alternativas: [
                "dependem de homologação pelo Superior Tribunal de Justiça, tal como as sentenças estrangeiras em geral, para produzir efeitos no território nacional brasileiro",
                "são obrigatórias e de cumprimento imediato pelo Estado, que responde internacionalmente pelo descumprimento — abrangendo reparações, garantias de não repetição e, por vezes, dever de adequar a legislação interna",
                "têm caráter meramente recomendatório, cabendo ao Estado brasileiro avaliar discricionariamente a conveniência política de seu cumprimento em cada caso concreto",
                "só vinculam o Poder Executivo federal, não alcançando decisões já transitadas em julgado no âmbito do Poder Judiciário brasileiro em nenhuma hipótese",
                "podem ser revistas pelo Supremo Tribunal Federal em sede de recurso extraordinário, quando contrariarem a interpretação constitucional firmada internamente"
              ],
              correta: 1,
              explicacao: "As sentenças da Corte IDH são obrigatórias (art. 68 da Convenção Americana) e dispensam homologação — não são sentenças estrangeiras, mas de tribunal internacional cuja jurisdição o Brasil reconheceu (Decreto 4.463/2002). Casos como Gomes Lund (Guerrilha do Araguaia), Favela Nova Brasília e Herzog impuseram ao Brasil deveres de investigar, reparar e adequar sua legislação."
            },
            {
              id: "trat-5", modo: "juris", fonte: "STF, Súmula Vinculante 25; Pacto de San José, art. 7.7",
              enunciado: "Sobre a prisão civil por dívida no direito brasileiro:",
              alternativas: [
                "é admitida nas duas hipóteses constitucionais originais — devedor de alimentos e depositário infiel —, pois a Constituição prevalece sobre o tratado internacional de hierarquia inferior",
                "somente é lícita a do devedor de alimentos: a do depositário infiel tornou-se ilícita, pois o Pacto de San José, com status supralegal, paralisou a eficácia da legislação ordinária que a previa",
                "foi integralmente abolida do ordenamento jurídico brasileiro pela adesão do Brasil ao Pacto de San José da Costa Rica, inclusive quanto ao devedor de alimentos inadimplente",
                "depende de lei complementar que regulamente as hipóteses de cabimento, inexistente até o presente momento no ordenamento jurídico nacional brasileiro",
                "é cabível também contra o devedor fiduciante na alienação fiduciária em garantia, por equiparação legal expressa à figura do depositário infiel"
              ],
              correta: 1,
              explicacao: "SV 25: é ilícita a prisão civil do depositário infiel, qualquer que seja a modalidade do depósito. Mecanismo: o art. 5º, LXVII, da CF permitia as duas hipóteses, mas o Pacto de San José (art. 7.7), com status supralegal, PARALISOU a eficácia da legislação infraconstitucional que disciplinava a prisão do depositário. Sobrevive apenas a do devedor de alimentos — exemplo didático do efeito da supralegalidade."
            },
            {
              id: "trat-6", modo: "caso", fonte: "Diálogo das cortes; princípio pro homine",
              enunciado: "Diante de conflito aparente entre a norma constitucional interna e a norma internacional de direitos humanos, o critério de solução preconizado pela doutrina e pela Corte IDH é:",
              alternativas: [
                "a prevalência automática da norma constitucional, por força do princípio da supremacia da Constituição no ordenamento jurídico interno de cada Estado soberano",
                "a aplicação da norma mais favorável à pessoa humana (princípio pro homine ou pro persona), independentemente de sua origem interna ou internacional",
                "a prevalência da norma internacional em qualquer hipótese, dada a natureza cogente das obrigações assumidas pelo Estado no plano das relações internacionais",
                "a aplicação da norma mais recente, segundo o critério cronológico tradicional de resolução de antinomias entre normas de mesma hierarquia no sistema jurídico",
                "a suspensão da eficácia de ambas as normas até que o Supremo Tribunal Federal defina a questão em sede de controle concentrado de constitucionalidade"
              ],
              correta: 1,
              explicacao: "Princípio pro homine (ou pro persona): prevalece sempre a norma que melhor proteja a pessoa, seja ela interna ou internacional — positivado no art. 29 da Convenção Americana. Daí o 'diálogo das fontes/cortes': o sistema internacional estabelece um piso mínimo (standard), não um teto. Argumento estruturante da atuação da Defensoria em direitos humanos."
            },
            {
              id: "trat-7", modo: "juris", fonte: "STF, ADPF 153 × Corte IDH, caso Gomes Lund",
              enunciado: "No confronto entre a decisão do STF na ADPF 153 (Lei de Anistia) e a condenação do Brasil pela Corte IDH no caso Gomes Lund, tem-se que:",
              alternativas: [
                "a decisão do STF prevaleceu integralmente, tendo a Corte IDH revisto seu entendimento para reconhecer a validade das anistias aprovadas em contexto de transição democrática",
                "o STF considerou recepcionada a Lei de Anistia, ao passo que a Corte IDH declarou que suas disposições carecem de efeitos jurídicos por serem incompatíveis com a Convenção Americana — tensão ainda não resolvida",
                "o Supremo revogou sua decisão na ADPF 153 imediatamente após a sentença internacional, promovendo a persecução penal dos agentes envolvidos nos crimes do período ditatorial",
                "ambas as decisões convergiram no sentido da imprescritibilidade dos crimes contra a humanidade praticados durante o regime militar brasileiro no país",
                "a Corte IDH reconheceu não ter competência para examinar fatos anteriores ao reconhecimento de sua jurisdição pelo Estado brasileiro em 1998, arquivando o caso"
              ],
              correta: 1,
              explicacao: "ADPF 153 (2010): o STF considerou a Lei de Anistia recepcionada. Meses depois, no caso Gomes Lund (Guerrilha do Araguaia), a Corte IDH decidiu que as disposições de anistia sobre graves violações são incompatíveis com a Convenção e carecem de efeitos jurídicos. A tensão persiste (a ADPF 320 discute o cumprimento) — tema central de Justiça de Transição, item expresso do edital."
            }
          ]
        },
        {
          id: "constitucional-3",
          titulo: "Poder constituinte e controle de constitucionalidade",
          questoes: [
            {
              id: "pcs-1", modo: "caso", fonte: "Teoria do poder constituinte",
              enunciado: "Sobre as espécies de poder constituinte, é correto afirmar que o poder constituinte derivado reformador:",
              alternativas: [
                "é inicial, autônomo e ilimitado, podendo romper integralmente com a ordem jurídica anterior para instaurar uma nova Constituição no Estado",
                "é secundário e condicionado: sujeita-se a limites formais, circunstanciais e materiais — estes últimos representados pelas cláusulas pétreas do art. 60, §4º",
                "pode ser exercido livremente durante a vigência de estado de sítio ou de intervenção federal, desde que observado o quórum qualificado de três quintos",
                "autoriza a supressão de cláusulas pétreas quando houver aprovação por plebiscito ou referendo convocado especificamente para essa finalidade",
                "compete exclusivamente aos Estados-membros na elaboração de suas próprias Constituições estaduais, no exercício da autonomia federativa"
              ],
              correta: 1,
              explicacao: "O originário é inicial, autônomo e juridicamente ilimitado; o derivado REFORMADOR (emendas) é secundário e condicionado — limites formais (iniciativa, quórum de 3/5 em dois turnos), circunstanciais (vedação durante intervenção federal, estado de defesa e de sítio — art. 60, §1º) e materiais (cláusulas pétreas do §4º). O derivado DECORRENTE é o dos Estados, para suas Constituições."
            },
            {
              id: "pcs-2", modo: "lei", fonte: "CF, art. 60, §4º",
              enunciado: "Não será objeto de deliberação a proposta de emenda tendente a abolir:",
              alternativas: [
                "a forma republicana de governo, o presidencialismo, o pluripartidarismo e os direitos sociais previstos no art. 6º da Constituição Federal de 1988",
                "a forma federativa de Estado, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais",
                "todos os direitos fundamentais previstos no Título II da Constituição, incluídos os direitos sociais, de nacionalidade e políticos, sem exceção alguma",
                "a gratuidade dos serviços públicos essenciais e o regime de previdência social dos servidores públicos titulares de cargos efetivos da União",
                "qualquer dispositivo constitucional que tenha sido aprovado pela Assembleia Nacional Constituinte por unanimidade de seus membros em 1988"
              ],
              correta: 1,
              explicacao: "Art. 60, §4º: forma federativa de Estado; voto direto, secreto, universal e periódico; separação dos Poderes; direitos e garantias individuais. Pegadinhas clássicas: a forma REPUBLICANA e o presidencialismo NÃO são cláusulas pétreas expressas (foram objeto do plebiscito de 1993); e o STF admite que direitos fora do art. 5º possam ter natureza de cláusula pétrea (ex.: anterioridade tributária, ADI 939)."
            },
            {
              id: "pcs-3", modo: "lei", fonte: "CF, art. 103; Lei 9.868/99",
              enunciado: "Quanto à legitimidade ativa para propor ação direta de inconstitucionalidade:",
              alternativas: [
                "todos os legitimados do art. 103 da Constituição têm legitimidade universal, dispensada qualquer demonstração de vínculo entre suas finalidades e o objeto impugnado",
                "alguns legitimados são universais e outros são especiais — estes precisam demonstrar pertinência temática entre suas finalidades institucionais e a norma impugnada",
                "somente o Presidente da República, a Mesa do Senado e o Procurador-Geral da República podem propor a ação, dada a natureza excepcional do controle concentrado",
                "qualquer cidadão no gozo dos direitos políticos pode propor a ação direta, por aplicação analógica das regras que regem a ação popular constitucional",
                "a Defensoria Pública da União e as Defensorias estaduais foram incluídas no rol de legitimados pela Emenda Constitucional 80/2014, com legitimidade universal"
              ],
              correta: 1,
              explicacao: "O STF distingue legitimados universais (Presidente, Mesas do Senado e da Câmara, PGR, Conselho Federal da OAB, partido político com representação no Congresso) dos especiais, que devem provar pertinência temática (Mesa de Assembleia Legislativa, Governador, confederação sindical ou entidade de classe de âmbito nacional). A Defensoria Pública NÃO integra o rol do art. 103 — cuidado com esse distrator."
            },
            {
              id: "pcs-4", modo: "lei", fonte: "Lei 9.868/99, arts. 27 e 28",
              enunciado: "A modulação temporal dos efeitos da declaração de inconstitucionalidade:",
              alternativas: [
                "é vedada no sistema brasileiro, que adota a teoria da nulidade absoluta com efeitos sempre retroativos à data de edição da norma inconstitucional",
                "pode ser determinada por maioria de dois terços dos membros do STF, por razões de segurança jurídica ou excepcional interesse social, restringindo os efeitos ou fixando outro momento para sua eficácia",
                "depende de aprovação prévia do Congresso Nacional, a quem cabe deliberar sobre os efeitos financeiros da decisão proferida em controle concentrado",
                "é automática em todas as ações diretas julgadas procedentes, produzindo a decisão efeitos apenas a partir do trânsito em julgado do acórdão publicado",
                "aplica-se somente ao controle difuso, sendo incompatível com a natureza objetiva do processo de controle concentrado de constitucionalidade"
              ],
              correta: 1,
              explicacao: "Art. 27 da Lei 9.868/99: quórum de 2/3 (oito ministros) e fundamento em segurança jurídica ou excepcional interesse social. A regra continua sendo a nulidade com efeitos ex tunc; a modulação é EXCEÇÃO, permitindo efeitos ex nunc ou pro futuro. O mesmo mecanismo existe na ADPF (Lei 9.882/99, art. 11)."
            },
            {
              id: "pcs-5", modo: "juris", fonte: "CF, art. 102, §1º; Lei 9.882/99, art. 4º, §1º",
              enunciado: "A arguição de descumprimento de preceito fundamental (ADPF) caracteriza-se por:",
              alternativas: [
                "substituir integralmente a ação direta de inconstitucionalidade, sendo cabível contra qualquer lei ou ato normativo federal, estadual ou municipal editado após 1988",
                "ser regida pelo princípio da subsidiariedade: só é admitida quando não houver outro meio eficaz de sanar a lesividade — o que a torna via apta a impugnar direito pré-constitucional e atos não normativos",
                "ter cabimento restrito a atos normativos municipais, dada a impossibilidade de controle concentrado dessas normas perante o Supremo Tribunal Federal em ação direta",
                "admitir a propositura por qualquer pessoa que demonstre lesão concreta a preceito fundamental decorrente de ato do poder público federal, estadual ou municipal",
                "produzir efeitos exclusivamente entre as partes do processo originário, sem eficácia contra todos nem efeito vinculante aos demais órgãos do Judiciário"
              ],
              correta: 1,
              explicacao: "Art. 4º, §1º, da Lei 9.882/99: subsidiariedade — não cabe ADPF havendo outro meio eficaz. Por isso ela cobre lacunas: direito pré-constitucional, atos municipais, atos não normativos e omissões (foi a via da ADPF 347 sobre o sistema prisional). Os legitimados são os mesmos da ADI, e a decisão tem eficácia erga omnes e efeito vinculante."
            },
            {
              id: "pcs-6", modo: "juris", fonte: "CF, art. 52, X; STF, ADI 3.406/3.470 (2020)",
              enunciado: "Sobre os efeitos da declaração incidental de inconstitucionalidade no controle difuso pelo STF:",
              alternativas: [
                "os efeitos permanecem restritos às partes, dependendo sempre de resolução do Senado Federal para que a decisão adquira eficácia contra todos os jurisdicionados",
                "o STF passou a atribuir eficácia erga omnes e vinculante também às decisões proferidas em controle difuso (abstrativização), cabendo ao Senado apenas dar publicidade à decisão",
                "a decisão em controle difuso não produz nenhum efeito além do caso concreto, sendo vedada sua invocação como precedente em outros processos judiciais em curso",
                "o Senado Federal tem o dever vinculado de suspender a execução da lei declarada inconstitucional, sob pena de responsabilização por omissão inconstitucional",
                "os efeitos são sempre ex nunc no controle difuso, ao contrário do controle concentrado, no qual a regra é a retroatividade plena da decisão de mérito"
              ],
              correta: 1,
              explicacao: "Nas ADIs 3.406 e 3.470 (2020) o STF consolidou a chamada abstrativização (ou objetivação) do controle difuso: houve mutação constitucional do art. 52, X — o papel do Senado passou a ser de dar publicidade, não de conferir eficácia. As decisões do Plenário em controle difuso passam a ter eficácia geral e vinculante."
            },
            {
              id: "pcs-7", modo: "caso", fonte: "Métodos de interpretação constitucional",
              enunciado: "O princípio da interpretação conforme a Constituição impõe que:",
              alternativas: [
                "o intérprete escolha livremente entre os sentidos possíveis da norma, prevalecendo aquele que melhor atenda às finalidades de política pública do governo em exercício",
                "havendo várias interpretações possíveis, adote-se a que seja compatível com a Constituição — sem que o intérprete possa atuar como legislador positivo, contrariando o sentido literal e a vontade do legislador",
                "toda norma infraconstitucional seja declarada nula sempre que comportar ao menos uma interpretação incompatível com o texto constitucional vigente no país",
                "as normas constitucionais sejam interpretadas a partir da legislação ordinária que as regulamenta, conferindo-se concretude aos preceitos de eficácia limitada",
                "o Judiciário possa alterar o texto legal para adequá-lo à Constituição, exercendo função normativa de caráter substitutivo à atuação do Poder Legislativo"
              ],
              correta: 1,
              explicacao: "Interpretação conforme: entre sentidos possíveis, prefere-se o compatível com a Constituição — preservando a norma (princípio da conservação). Limites: o sentido literal do texto e a vontade do legislador; o intérprete não pode virar legislador positivo. Distingue-se da declaração parcial de nulidade sem redução de texto, embora ambas apareçam no art. 28, parágrafo único, da Lei 9.868/99."
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
        },
        {
          id: "direitos-humanos-4",
          titulo: "DESCs, políticas públicas e tutela coletiva",
          questoes: [
            {
              id: "desc-1", modo: "caso", fonte: "PIDESC; Comentário Geral 3 do Comitê DESC",
              enunciado: "Sobre os direitos econômicos, sociais e culturais (DESCs) no Pacto Internacional de 1966:",
              alternativas: [
                "são normas meramente programáticas, desprovidas de justiciabilidade e insuscetíveis de exigência perante órgãos judiciais ou internacionais de proteção",
                "impõem realização progressiva conforme o máximo de recursos disponíveis, mas contêm obrigações de efeito imediato — como a não discriminação e a garantia de um núcleo essencial mínimo",
                "devem ser integralmente implementados de imediato pelos Estados-partes, independentemente da disponibilidade de recursos orçamentários ou do grau de desenvolvimento econômico nacional",
                "vinculam apenas os Estados desenvolvidos, cabendo aos países em desenvolvimento simples compromisso de cooperação técnica internacional no longo prazo",
                "foram substituídos pelos Objetivos de Desenvolvimento Sustentável da Agenda 2030, que revogaram tacitamente as obrigações do Pacto de 1966"
              ],
              correta: 1,
              explicacao: "Art. 2.1 do PIDESC: realização progressiva até o máximo dos recursos disponíveis. O Comentário Geral 3 do Comitê DESC esclarece que há obrigações de efeito IMEDIATO (não discriminação e adoção de medidas) e um núcleo essencial mínimo (minimum core) exigível desde já. Daí decorrem os princípios da proibição do retrocesso social e da vedação de medidas deliberadamente regressivas."
            },
            {
              id: "desc-2", modo: "caso", fonte: "Reserva do possível e mínimo existencial; STF, ADPF 45",
              enunciado: "Na judicialização de políticas públicas, a alegação estatal de reserva do possível:",
              alternativas: [
                "constitui defesa absoluta que impede o controle judicial de políticas públicas, em respeito à separação dos Poderes e à discricionariedade administrativa na alocação orçamentária",
                "não pode ser invocada para frustrar o mínimo existencial, exigindo-se do poder público a demonstração concreta da escassez — e não a mera alegação genérica de insuficiência de recursos",
                "só é oponível quando o pedido envolver prestações de saúde de alto custo não incorporadas pelas listas oficiais do Sistema Único de Saúde brasileiro",
                "foi rejeitada integralmente pela jurisprudência brasileira, que reconhece direito subjetivo ilimitado a toda e qualquer prestação material postulada em juízo",
                "aplica-se exclusivamente aos direitos de liberdade, não incidindo sobre os direitos sociais de natureza prestacional previstos no art. 6º da Constituição"
              ],
              correta: 1,
              explicacao: "ADPF 45 (Celso de Mello): a reserva do possível não pode ser manipulada para exonerar o Estado do cumprimento de obrigações constitucionais, sobretudo quanto ao mínimo existencial. Exige-se ônus argumentativo e probatório concreto do poder público. O Tema 793 do STF (solidariedade dos entes na saúde) e o Tema 106 do STJ (medicamentos fora da lista) delimitam a atuação judicial."
            },
            {
              id: "desc-3", modo: "juris", fonte: "LACP, art. 5º, II; STF, ADI 3.943",
              enunciado: "Sobre a legitimidade da Defensoria Pública para a tutela coletiva:",
              alternativas: [
                "é restrita aos direitos individuais homogêneos de pessoas comprovadamente hipossuficientes, identificadas nominalmente na petição inicial da ação civil pública",
                "foi reconhecida amplamente pelo STF, bastando que a tutela possa beneficiar grupo que inclua pessoas necessitadas — abrangendo direitos difusos, coletivos e individuais homogêneos",
                "depende de autorização expressa e específica dos membros do grupo lesado, obtida em assembleia convocada pela associação representativa da comunidade atingida",
                "existe apenas quando o Ministério Público declinar da propositura da ação, funcionando a Defensoria como legitimada subsidiária no processo coletivo",
                "limita-se às ações que tramitem perante os Juizados Especiais da Fazenda Pública, dada a natureza da matéria e o valor da causa envolvido"
              ],
              correta: 1,
              explicacao: "ADI 3.943 (2015): o STF julgou improcedente a ação da CONAMP e confirmou a legitimidade ampla da Defensoria para a ACP, bastando que o resultado possa beneficiar grupo que contenha pessoas necessitadas — sem exigir que TODOS o sejam, nem identificação individual. O conceito de 'necessitado' é ampliado (vulnerabilidade organizacional, e não só econômica)."
            },
            {
              id: "desc-4", modo: "caso", fonte: "Custos vulnerabilis; STJ, EDcl no REsp 1.712.163",
              enunciado: "A atuação da Defensoria Pública como custos vulnerabilis significa:",
              alternativas: [
                "a representação processual individual do assistido hipossuficiente que a procura espontaneamente para a defesa de seus interesses em juízo",
                "a intervenção institucional em processos nos quais se discutam interesses de pessoas ou grupos vulneráveis, como guardiã dos vulneráveis, ainda que a parte tenha advogado constituído",
                "o exercício da curadoria especial do réu revel citado por edital ou com hora certa, nos termos do art. 72 do Código de Processo Civil vigente",
                "a fiscalização do cumprimento das decisões judiciais proferidas contra a Fazenda Pública em ações coletivas de natureza prestacional em curso",
                "a assunção da titularidade da ação penal pública quando o Ministério Público permanecer inerte além do prazo legal para o oferecimento da denúncia"
              ],
              correta: 1,
              explicacao: "Custos vulnerabilis ('guardiã dos vulneráveis'): intervenção da Defensoria em razão da vulnerabilidade envolvida no caso, ainda que a parte tenha advogado — reconhecida pelo STJ (EDcl no REsp 1.712.163, sobre medicamentos, e no HC 568.693). Distingue-se da curadoria especial (art. 72 do CPC) e do custos legis do MP. É tese institucional de expansão da atuação defensorial."
            },
            {
              id: "desc-5", modo: "caso", fonte: "Processo estrutural; STF, ADPF 347",
              enunciado: "Os chamados processos estruturais caracterizam-se por:",
              alternativas: [
                "resolver conflitos bipolares entre duas partes determinadas mediante sentença de eficácia imediata e cumprimento instantâneo pelo devedor condenado",
                "enfrentar litígios policêntricos que envolvem falhas estruturais de instituições ou políticas públicas, com decisões em etapas, medidas flexíveis e monitoramento contínuo da implementação",
                "atribuir ao Judiciário a gestão direta e permanente dos órgãos administrativos deficientes, substituindo os gestores públicos no exercício das funções executivas",
                "converter demandas individuais repetitivas em incidente de resolução de demandas repetitivas, com suspensão dos processos pendentes no âmbito do tribunal",
                "limitar-se às ações de improbidade administrativa nas quais se apure dano ao erário decorrente de má gestão de recursos públicos federais"
              ],
              correta: 1,
              explicacao: "Processos estruturais: litígios policêntricos, com pluralidade de atores e causas complexas, exigindo provimentos em cascata, diálogo institucional, audiências públicas e monitoramento. A ADPF 347 (estado de coisas inconstitucional no sistema prisional) é o caso paradigmático brasileiro. O CPC não os disciplina expressamente, mas arts. 139, IV, e 536 dão base — e o edital cobra o tema em Banca I e III."
            },
            {
              id: "desc-6", modo: "caso", fonte: "Educação em direitos humanos; PNEDH",
              enunciado: "A educação em direitos humanos, conforme os marcos normativos nacionais e internacionais:",
              alternativas: [
                "restringe-se à inclusão de disciplina autônoma e obrigatória sobre direitos humanos nos currículos dos cursos de graduação em Direito das universidades brasileiras",
                "é concebida como processo permanente e transversal, voltado à formação de sujeitos de direitos e à construção de uma sociedade antirracista e inclusiva",
                "compete exclusivamente aos órgãos do sistema de justiça, no âmbito de suas atividades de capacitação funcional interna dos respectivos quadros de servidores",
                "tem caráter meramente informativo, destinada à divulgação do texto da Declaração Universal dos Direitos Humanos nas escolas da rede pública de ensino",
                "foi substituída, no Brasil, pelas ações afirmativas de acesso ao ensino superior instituídas pela Lei de Cotas, que a tornaram desnecessária"
              ],
              correta: 1,
              explicacao: "O Plano Nacional de Educação em Direitos Humanos (PNEDH) e as Diretrizes Nacionais (Resolução CNE/CP 1/2012) concebem a EDH como processo sistemático e multidimensional, transversal a todos os níveis de ensino, orientado à formação de sujeitos de direitos, ao empoderamento de grupos vulnerabilizados e à educação emancipatória antirracista — item expresso do Ponto II do edital."
            },
            {
              id: "desc-7", modo: "caso", fonte: "Racismo ambiental; Convenção 169 da OIT",
              enunciado: "Sobre a relação entre direitos humanos e questões socioambientais:",
              alternativas: [
                "o racismo ambiental designa a distribuição desproporcional dos danos ambientais sobre populações racializadas e vulnerabilizadas — e a Convenção 169 da OIT assegura consulta prévia, livre e informada aos povos indígenas e tribais afetados",
                "os danos ambientais atingem de forma equitativa todos os grupos sociais, razão pela qual as políticas ambientais devem ser desenhadas com critérios estritamente técnicos e universais",
                "a consulta prévia prevista na Convenção 169 da OIT tem natureza meramente consultiva e informativa, não gerando qualquer dever jurídico para o Estado ou para o empreendedor",
                "as comunidades quilombolas e tradicionais não integram o âmbito de aplicação da Convenção 169, restrita aos povos indígenas reconhecidos oficialmente pelo Estado",
                "a proteção socioambiental compete exclusivamente ao Ministério Público, carecendo a Defensoria Pública de legitimidade para atuar em conflitos dessa natureza"
              ],
              correta: 0,
              explicacao: "Racismo ambiental (Robert Bullard): os ônus ambientais recaem desproporcionalmente sobre populações negras, indígenas e periféricas. A Convenção 169 da OIT (Decreto 10.088/2019) garante a consulta prévia, livre e informada — direito de natureza vinculante, aplicável a povos indígenas E a comunidades tradicionais que se autoidentifiquem, como quilombolas. Tema expresso dos Pontos II e IV do edital."
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
                "o patrocínio de seus direitos e interesses pelo defensor natural e a qualidade e eficiência do atendimento",
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
