/* ============================================================
   MPRJ — XXXIX Concurso para Promotor de Justiça (FGV)

   Trilha própria, com banco de questões próprio: ao contrário da
   ENAM (que reaproveita as questões da DPE-RJ via `refs`), aqui as
   questões são inéditas e vivem neste arquivo, porque o recorte do
   MP — tutela coletiva, infância, princípios institucionais — não
   existe no banco da Defensoria.

   As unidades seguem as 4 Bancas do conteúdo programático, e a
   quantidade de lições acompanha os pesos do edital: as matérias
   de peso 5 (Penal, Processo Penal, Extravagante, Civil, Processo
   Civil, Constitucional, Administrativo, Infância e Tutela
   Coletiva) têm duas lições; as de peso 2 e 3 (Empresarial,
   Eleitoral, Financeiro e Tributário, Princípios Institucionais)
   têm uma.

   ATENÇÃO: as unidades precisam ficar AGRUPADAS por banca e na
   ordem I → II → III → IV. A trilha desenha o divisor de banca
   quando o campo `banca` muda, então intercalar bancas duplicaria
   os divisores.

   Conteúdo jurídico gerado para estudo: confira as fontes citadas
   antes de tomar como verdade definitiva.
   ============================================================ */

window.APP_DATA_MPRJ = {
  meta: {
    concurso: "XXXIX Concurso — MPRJ",
    banca: "FGV",
    fase: "Objetiva · Bancas I a IV",
    grupos: {
      I: { nome: "Banca I", tema: "Penal, Processo Penal e Legislação Extravagante" },
      II: { nome: "Banca II", tema: "Civil, Processo Civil e Empresarial" },
      III: { nome: "Banca III", tema: "Constitucional, Administrativo, Eleitoral e Tributário" },
      IV: { nome: "Banca IV", tema: "Infância, Tutela Coletiva e Princípios do MP" }
    }
  },

  // Cada unidade = um tópico da trilha; cada lição = um bloco de questões.
  units: [
    /* --------------------------------------------- BANCA I · PENAL */
    {
      id: "mprj-penal",
      titulo: "Código Penal — parte geral e crimes contra a Administração",
      materia: "Direito Penal",
      banca: "I",
      icone: "⚖️",
      descricao: "Aplicação da lei penal, teoria do crime e os crimes funcionais que o MP mais denuncia.",
      licoes: [
        {
          id: "mprj-penal-1",
          titulo: "Aplicação da lei penal e teoria do crime",
          questoes: [
            {
              id: "mp-pen-1", modo: "lei", fonte: "CP, arts. 7º, I e II, §§1º e 2º, e 8º",
              enunciado: "Sobre a aplicação da lei penal brasileira a fatos praticados fora do território nacional, é correto afirmar que:",
              alternativas: [
                "os crimes praticados por brasileiro no estrangeiro sujeitam-se à lei brasileira de modo incondicionado, bastando a nacionalidade do agente para a punição no Brasil",
                "no genocídio cometido por agente brasileiro ou domiciliado no Brasil aplica-se a lei nacional, ainda que o agente tenha sido absolvido ou condenado no estrangeiro",
                "o crime contra o patrimônio de empresa pública da União praticado no exterior só é punível no Brasil se o agente aqui ingressar e o fato também for punível no país da prática",
                "os crimes que, por tratado ou convenção, o Brasil se obrigou a reprimir constituem hipótese de extraterritorialidade incondicionada da lei penal brasileira",
                "a pena cumprida no estrangeiro pelo mesmo crime impede nova persecução no Brasil, por força da vedação ao bis in idem no plano internacional"
              ],
              correta: 1,
              explicacao: "O art. 7º, I, d, do CP prevê extraterritorialidade INCONDICIONADA para o genocídio praticado por brasileiro ou por pessoa domiciliada no Brasil; e o §1º determina que, nas hipóteses do inciso I, o agente é punido segundo a lei brasileira ainda que absolvido ou condenado no estrangeiro. Já o crime praticado por brasileiro (inciso II, b) e o previsto em tratado que o Brasil se obrigou a reprimir (inciso II, a) são de extraterritorialidade CONDICIONADA, sujeitos às condições cumulativas do §2º — eis o distrator clássico. O crime contra o patrimônio de empresa pública da União está no inciso I, b, e por isso dispensa aquelas condições. Por fim, a pena cumprida no estrangeiro não impede a persecução no Brasil: atenua a pena aqui imposta, quando diversas, ou nela é computada, quando idênticas (art. 8º)."
            },
            {
              id: "mp-pen-2", modo: "juris", fonte: "Súmula 711 do STF; CP, arts. 2º, parágrafo único, e 3º",
              enunciado: "Quanto à sucessão de leis penais no tempo, à luz do Código Penal e da jurisprudência sumulada do Supremo Tribunal Federal:",
              alternativas: [
                "a lei penal mais grave que entra em vigor no curso da permanência não alcança o crime permanente, incidindo sempre a lei vigente ao início da conduta",
                "a lei intermediária mais benéfica não pode ser aplicada, por não estar em vigor nem ao tempo do fato nem ao tempo do julgamento do acusado",
                "a lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência",
                "a lei posterior que de qualquer modo favorece o agente retroage somente até o trânsito em julgado da sentença penal condenatória",
                "a lei excepcional ou temporária deixa de aplicar-se aos fatos praticados durante a sua vigência tão logo cesse o período nela previsto"
              ],
              correta: 2,
              explicacao: "A Súmula 711 do STF é expressa: a lei penal mais grave aplica-se ao crime continuado ou ao crime permanente se a sua vigência é anterior à cessação da continuidade ou da permanência — como a conduta se prolonga no tempo, o agente pratica o crime também já sob a lei nova. As demais assertivas invertem o regime legal: o art. 2º, parágrafo único, manda a lei mais benéfica retroagir ainda que o fato já esteja decidido por sentença condenatória transitada em julgado; o art. 3º consagra a ultratividade das leis excepcionais e temporárias, que continuam a reger os fatos praticados durante sua vigência; e a lei intermediária mais favorável é aplicada, por força da conjugação da retroatividade benéfica com a ultratividade da lei mais branda."
            },
            {
              id: "mp-pen-3", modo: "lei", fonte: "CP, arts. 20, caput e §1º, e 21",
              enunciado: "Sobre o tratamento do erro no Código Penal, é correto afirmar que:",
              alternativas: [
                "o erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas permite a punição por crime culposo, se previsto em lei",
                "o erro sobre a ilicitude do fato, quando inevitável, apenas diminui a pena de um sexto a um terço, sem isentar o agente de pena",
                "o desconhecimento da lei é escusável e equipara-se ao erro de proibição inevitável, isentando de pena aquele que a ignorava",
                "o erro quanto à existência de situação de fato que tornaria legítima a ação é sempre irrelevante, por recair sobre a ilicitude",
                "o erro de tipo essencial e inevitável exclui a culpabilidade, permanecendo íntegros o fato típico e a sua ilicitude"
              ],
              correta: 0,
              explicacao: "O art. 20, caput, do CP define o erro de tipo: o erro sobre elemento constitutivo do tipo exclui o DOLO, mas permite a punição por crime culposo se houver previsão legal — atua, portanto, no fato típico, e não na culpabilidade (o que derruba a última alternativa). O erro de proibição segue regime diverso (art. 21): se inevitável, ISENTA de pena; se evitável, permite reduzi-la de um sexto a um terço. O mesmo art. 21 é categórico ao afirmar que o desconhecimento da lei é inescusável, servindo apenas como atenuante genérica. Por fim, o art. 20, §1º, cuida da descriminante putativa fática: quem, por erro plenamente justificado pelas circunstâncias, supõe situação de fato que tornaria a ação legítima é isento de pena, respondendo por culpa imprópria se o erro derivar de culpa e houver modalidade culposa."
            },
            {
              id: "mp-pen-4", modo: "caso", fonte: "CP, arts. 15, 16 e 65, III, b",
              enunciado: "Após subtrair, mediante grave ameaça exercida com arma de fogo, o aparelho celular da vítima, o agente, três dias depois e antes do recebimento da denúncia, comparece espontaneamente à delegacia e devolve o bem íntegro ao ofendido. Nessa hipótese, o agente:",
              alternativas: [
                "faz jus à causa de diminuição do arrependimento posterior, de um a dois terços, por haver restituído a coisa antes do recebimento da denúncia",
                "responde por furto, e não por roubo, pois a devolução voluntária do bem descaracteriza retroativamente a grave ameaça empregada",
                "beneficia-se da desistência voluntária, respondendo apenas pelos atos até então praticados, ou seja, pelo crime de ameaça",
                "não faz jus ao arrependimento posterior, por ser crime cometido com grave ameaça, restando-lhe a atenuante da reparação do dano antes do julgamento",
                "tem a punibilidade extinta, por aplicação analógica da regra do peculato culposo reparado antes da sentença irrecorrível"
              ],
              correta: 3,
              explicacao: "O arrependimento posterior do art. 16 do CP exige, como primeiro requisito, que o crime tenha sido praticado SEM violência ou grave ameaça à pessoa — o roubo, por definição, não preenche esse pressuposto, ainda que a restituição seja voluntária e anterior ao recebimento da denúncia. Sobra ao agente a atenuante genérica do art. 65, III, b (reparação do dano antes do julgamento). A desistência voluntária e o arrependimento eficaz (art. 15) são inaplicáveis porque pressupõem crime não consumado, e aqui o roubo já se consumara com a inversão da posse. Já a extinção da punibilidade pela reparação do dano é regra excepcional do peculato culposo (art. 312, §3º), insuscetível de analogia para outros tipos."
            },
            {
              id: "mp-pen-5", modo: "juris", fonte: "Súmulas 231, 444 e 545 do STJ",
              enunciado: "Na dosimetria da pena, de acordo com a jurisprudência sumulada do Superior Tribunal de Justiça:",
              alternativas: [
                "inquéritos policiais e ações penais em curso, ainda que sem trânsito em julgado, agravam a pena-base a título de maus antecedentes",
                "a incidência de circunstância atenuante pode conduzir a pena inferior ao mínimo legal, desde que a decisão esteja concretamente fundamentada",
                "a confissão utilizada pelo julgador para formar o seu convencimento não gera direito à atenuante, por traduzir mero dever de colaboração",
                "a ação penal em curso configura circunstância judicial desfavorável relativa à personalidade do agente, e não aos seus antecedentes",
                "é vedada a utilização de inquéritos policiais e de ações penais em curso para agravar a pena-base, ainda que numerosos os registros"
              ],
              correta: 4,
              explicacao: "A Súmula 444 do STJ veda a utilização de inquéritos policiais e ações penais em curso para agravar a pena-base — sem trânsito em julgado não há como afastar a presunção de inocência, e a vedação alcança qualquer vetorial do art. 59 (antecedentes, conduta social ou personalidade), o que também derruba o quarto item. A Súmula 231 do STJ impede que a atenuante reduza a pena abaixo do mínimo legal, ainda que fundamentada a decisão. E a Súmula 545 do STJ garante a atenuante do art. 65, III, d, sempre que a confissão for utilizada para a formação do convencimento do julgador."
            }
          ]
        },
        {
          id: "mprj-penal-2",
          titulo: "Crimes contra a Administração Pública",
          questoes: [
            {
              id: "mp-pen-6", modo: "lei", fonte: "CP, art. 312, §§2º e 3º",
              enunciado: "No peculato culposo, em que o funcionário concorre culposamente para o crime de outrem, a reparação do dano:",
              alternativas: [
                "extingue a punibilidade se precede à sentença irrecorrível e, se lhe é posterior, reduz de metade a pena imposta",
                "apenas reduz a pena de um a dois terços, qualquer que seja o momento em que venha a ser efetivada pelo funcionário",
                "extingue a punibilidade a qualquer tempo, inclusive depois do trânsito em julgado da sentença penal condenatória",
                "é irrelevante para a punibilidade, funcionando somente como atenuante genérica da reparação do dano antes do julgamento",
                "extingue a punibilidade se anterior ao recebimento da denúncia e, se posterior a ele, reduz a pena imposta de um terço"
              ],
              correta: 0,
              explicacao: "O art. 312, §3º, do CP é literal: no peculato culposo (§2º), a reparação do dano, se precede à sentença irrecorrível, EXTINGUE a punibilidade; se lhe é posterior, REDUZ DE METADE a pena imposta. Note os dois marcos que a banca costuma trocar: o divisor não é o recebimento da denúncia (esse é o marco do arrependimento posterior do art. 16), e sim a sentença irrecorrível; e o efeito posterior não é redução de um terço nem de um a dois terços, mas exatamente de metade. Registre-se, ainda, que o benefício é exclusivo do peculato CULPOSO — no peculato doloso a reparação vale apenas como atenuante ou como causa de diminuição, conforme o caso. A persecução, em qualquer hipótese, é de ação penal pública incondicionada, privativa do Ministério Público (CF, art. 129, I)."
            },
            {
              id: "mp-pen-7", modo: "lei", fonte: "CP, arts. 327, caput e §§1º e 2º, e 30",
              enunciado: "Sobre o conceito de funcionário público para efeitos penais e seus reflexos nos crimes contra a Administração Pública:",
              alternativas: [
                "exige-se vínculo estatutário e remuneração, de modo que o exercício meramente transitório e gratuito de função pública afasta essa qualidade",
                "equipara-se a funcionário público quem trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública",
                "a pena é aumentada da metade quando o autor do crime ocupa cargo em comissão ou função de direção em empresa pública ou sociedade de economia mista",
                "o exercente de mandato eletivo não se enquadra no conceito legal, por não ocupar cargo, emprego ou função pública em sentido próprio",
                "o particular que concorre para crime funcional jamais por ele responde, ainda que conheça a condição de funcionário público do coautor"
              ],
              correta: 1,
              explicacao: "O art. 327, §1º, do CP equipara a funcionário público quem exerce cargo, emprego ou função em entidade paraestatal e quem trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública. O caput é ainda mais amplo: alcança quem exerce cargo, emprego ou função pública embora TRANSITORIAMENTE ou SEM REMUNERAÇÃO — o que inclui o detentor de mandato eletivo. O §2º prevê aumento da TERÇA PARTE (não da metade) para ocupantes de cargo em comissão ou de função de direção ou assessoramento. Por fim, a condição de funcionário público é elementar do tipo e, por isso, comunica-se ao particular que dela tem conhecimento (art. 30)."
            },
            {
              id: "mp-pen-8", modo: "juris", fonte: "Súmula 599 do STJ; CP, art. 312",
              enunciado: "Servidor apropria-se de bem móvel da repartição, de reduzido valor econômico, de que tinha a posse em razão do cargo. De acordo com a jurisprudência sumulada do Superior Tribunal de Justiça:",
              alternativas: [
                "o fato é atípico, pois o princípio da insignificância incide sempre que o valor econômico do bem subtraído for irrisório",
                "o fato configura mera infração disciplinar, ficando o Direito Penal afastado pelo caráter subsidiário da tutela penal",
                "o princípio da insignificância é inaplicável aos crimes contra a Administração Pública, subsistindo a imputação de peculato",
                "a insignificância deve ser reconhecida, já que o bem jurídico tutelado pelo peculato é apenas o patrimônio da entidade lesada",
                "a tipicidade depende de prévia conclusão de processo administrativo disciplinar que reconheça a irregularidade funcional"
              ],
              correta: 2,
              explicacao: "A Súmula 599 do STJ afirma que o princípio da insignificância é inaplicável aos crimes contra a Administração Pública — o bem jurídico protegido não é apenas o patrimônio público, mas sobretudo a moralidade e a probidade administrativas, valores que não se medem por cifras. Logo, subsiste o peculato do art. 312 do CP, ainda que ínfimo o valor do bem apropriado. A responsabilização administrativa é independente da penal, não sendo o processo disciplinar condição de procedibilidade nem elemento de tipicidade. A ação penal é pública incondicionada, de titularidade privativa do Ministério Público (CF, art. 129, I)."
            },
            {
              id: "mp-pen-9", modo: "juris", fonte: "Súmula Vinculante 24",
              enunciado: "Nos crimes materiais contra a ordem tributária previstos no art. 1º, incisos I a IV, da Lei 8.137/1990, segundo a Súmula Vinculante 24:",
              alternativas: [
                "a denúncia pode ser oferecida desde a lavratura do auto de infração, ainda que pendente recurso na esfera administrativa fiscal",
                "o lançamento definitivo do tributo é dispensável sempre que houver prova documental robusta da conduta de sonegação fiscal",
                "a persecução penal independe do desfecho da esfera administrativa, em razão da independência entre as instâncias sancionadoras",
                "não se tipifica o crime antes do lançamento definitivo do tributo, condição que repercute na própria persecução penal",
                "o enunciado alcança igualmente os crimes formais contra a ordem tributária e a apropriação indébita previdenciária"
              ],
              correta: 3,
              explicacao: "A Súmula Vinculante 24 dispõe que não se tipifica crime material contra a ordem tributária, previsto no art. 1º, incisos I a IV, da Lei 8.137/1990, antes do lançamento definitivo do tributo. Trata-se de elemento normativo do tipo: enquanto pendente discussão administrativa sobre o crédito, o crime sequer está consumado, o que impede o oferecimento da denúncia e obsta o próprio curso da prescrição. A independência entre as instâncias, invocada no terceiro item, cede diante da exigência sumular. E o enunciado é restrito aos crimes MATERIAIS do art. 1º, I a IV — não se estende aos tipos formais, que se consumam independentemente do resultado de supressão ou redução do tributo."
            },
            {
              id: "mp-pen-10", modo: "juris", fonte: "CP, arts. 316, caput e §§1º e 2º, e 317; entendimento consolidado do STJ",
              enunciado: "Sobre a distinção entre concussão, corrupção passiva e excesso de exação, à luz do Código Penal e do entendimento consolidado dos Tribunais Superiores:",
              alternativas: [
                "a concussão pressupõe a simples solicitação da vantagem, ao passo que a corrupção passiva exige a sua imposição com abuso de autoridade",
                "a corrupção passiva é crime material, que só se consuma com o efetivo recebimento da vantagem indevida pelo funcionário público",
                "o excesso de exação exige que o funcionário desvie em proveito próprio o tributo já recebido, sob pena de atipicidade da conduta",
                "a concussão só se configura se o agente já estiver no exercício da função, sendo atípica a exigência formulada antes de assumi-la",
                "a concussão se caracteriza pela exigência da vantagem indevida, e a corrupção passiva pela solicitação, pelo recebimento ou pela aceitação de promessa"
              ],
              correta: 4,
              explicacao: "O verbo é o divisor de águas: o art. 316 pune EXIGIR vantagem indevida (concussão, com o temor da autoridade pública), enquanto o art. 317 pune SOLICITAR, RECEBER ou ACEITAR PROMESSA de vantagem indevida (corrupção passiva). Ambos são crimes FORMAIS: consumam-se com a mera exigência ou solicitação, sendo o recebimento mero exaurimento — o que derruba a segunda alternativa. Os dois tipos são expressos ao alcançar a conduta praticada ainda que fora da função ou antes de assumi-la, mas em razão dela, o que afasta a quarta alternativa. Por fim, o excesso de exação (art. 316, §1º) consiste em exigir tributo ou contribuição social que o funcionário sabe ou deveria saber indevido, ou empregar na cobrança meio vexatório ou gravoso não autorizado em lei; o desvio, em proveito próprio ou alheio, do que foi recebido para recolher aos cofres públicos é figura autônoma do §2º."
            }
          ]
        }
      ]
    },

    /* ------------------------------------ BANCA I · PROCESSO PENAL */
    {
      id: "mprj-cpp",
      titulo: "Do inquérito às prisões cautelares",
      materia: "Direito Processual Penal",
      banca: "I",
      icone: "🔎",
      descricao: "Inquérito, titularidade da ação penal, ANPP, provas e o regime de prisões do Pacote Anticrime.",
      licoes: [
        {
          id: "mprj-cpp-1",
          titulo: "Inquérito policial, ação penal e ANPP",
          questoes: [
            {
              id: "mp-cpp-1", modo: "lei", fonte: "CPP, art. 10, caput e §3º",
              enunciado: "Nos termos do Código de Processo Penal, o inquérito policial deve ser concluído no prazo de:",
              alternativas: [
                "dez dias, se o indiciado estiver preso — contado, na preventiva, da execução da ordem de prisão —, ou trinta dias, quando solto, hipótese em que se admite prorrogação",
                "quinze dias, estando o indiciado preso, ou trinta dias, estando solto, admitida a prorrogação em ambas as hipóteses por uma única vez e por igual período",
                "trinta dias, estando o indiciado preso, ou noventa dias, estando solto, prazos que a autoridade policial pode prorrogar de ofício quantas vezes reputar necessário",
                "dez dias em qualquer hipótese, esteja o indiciado preso ou solto, vedada a prorrogação por se tratar de prazo de natureza penal e, portanto, improrrogável",
                "cinco dias, se o indiciado estiver preso, ou quinze dias, se solto, prazos idênticos aos previstos para o oferecimento da denúncia pelo Ministério Público"
              ],
              correta: 0,
              explicacao: "O art. 10 do CPP fixa 10 dias quando o indiciado está preso — contado, na preventiva, do dia em que se executar a ordem de prisão — e 30 dias quando ele está solto. No regime do art. 10, a dilação está prevista expressamente apenas para o indiciado solto: o §3º permite que a autoridade requeira ao juiz a devolução dos autos para ulteriores diligências quando o fato for de difícil elucidação E o indiciado estiver solto. Isso não significa que o inquérito com investigado preso jamais comporte prorrogação: ressalvados os regimes especiais, o art. 3º-B, §2º, do CPP autoriza o juiz das garantias a prorrogá-lo uma única vez, por até 15 dias, mediante representação da autoridade policial e ouvido o Ministério Público. Cuidado com a troca clássica: 5 dias (preso) e 15 dias (solto) são os prazos do art. 46, para o oferecimento da DENÚNCIA, não para a conclusão do inquérito."
            },
            {
              id: "mp-cpp-2", modo: "caso", fonte: "CPP, art. 28, caput e §1º (redação da Lei 13.964/2019)",
              enunciado: "Concluído o inquérito policial que apurava suposto estelionato, o Promotor de Justiça se convence da ausência de justa causa para a ação penal. Segundo a disciplina do art. 28 do CPP na redação dada pela Lei 13.964/2019, cabe ao membro do Ministério Público:",
              alternativas: [
                "requerer o arquivamento ao juiz competente, que, discordando, remeterá os autos ao Procurador-Geral de Justiça para a palavra final sobre a promoção",
                "determinar o arquivamento e comunicá-lo apenas à autoridade policial, ficando a promoção sujeita a homologação judicial com força de coisa julgada material",
                "ordenar o arquivamento, comunicando a vítima, o investigado e a autoridade policial, e submeter a matéria à revisão da instância competente do próprio Ministério Público",
                "colher previamente a concordância expressa da vítima, sem a qual o arquivamento não pode ser ordenado, e só então encaminhar os autos ao juízo competente",
                "oferecer denúncia de todo modo, pois a promoção de arquivamento é atribuição privativa do Procurador-Geral de Justiça, único legitimado a aferir a justa causa"
              ],
              correta: 2,
              explicacao: "Na redação do art. 28 dada pelo Pacote Anticrime, o arquivamento deixou de ser requerido ao juiz: o próprio membro do Ministério Público o ORDENA, comunica a vítima, o investigado e a autoridade policial e submete a matéria à revisão da instância competente do próprio MP — o controle é interno, e não judicial. Pelo §1º, a vítima ou seu representante legal que não concordar pode, no prazo de 30 dias do recebimento da comunicação, submeter a matéria à revisão da instância competente. O arquivamento não faz coisa julgada material: nos termos da Súmula 524 do STF, a ação penal só pode ser iniciada se surgirem novas provas."
            },
            {
              id: "mp-cpp-3", modo: "juris", fonte: "CPP, art. 28-A, §§1º e 14; entendimento consolidado do STJ",
              enunciado: "Investigado por peculato (pena mínima de dois anos), o servidor confessa formal e circunstancialmente os fatos e pleiteia ao Promotor de Justiça a celebração de acordo de não persecução penal, que é motivadamente recusado. À luz do art. 28-A do CPP e do entendimento consolidado do STJ:",
              alternativas: [
                "o acordo é direito subjetivo de quem preenche os requisitos objetivos, devendo o juiz determinar ao Ministério Público que formule a proposta nos termos requeridos",
                "diante da recusa ministerial, cabe ao próprio juiz formular as condições do acordo e homologá-lo, desde que o investigado e o seu defensor com elas concordem",
                "a confissão formal e circunstanciada é dispensável sempre que a materialidade delitiva já estiver comprovada por prova documental robusta produzida no inquérito",
                "o acordo é inviável na hipótese, pois o art. 28-A exige que a pena máxima cominada em abstrato ao delito seja inferior a quatro anos, o que não ocorre no peculato",
                "o acordo não é direito subjetivo do investigado, mas, diante da recusa, ele pode requerer a remessa dos autos ao órgão superior do Ministério Público"
              ],
              correta: 4,
              explicacao: "O art. 28-A, §14, do CPP prevê que, recusada a proposta pelo membro do MP, o investigado pode requerer a remessa dos autos a órgão superior, na forma do art. 28 — solução que pressupõe justamente que o ANPP não é direito subjetivo, entendimento consolidado no STJ, pois a proposta depende do juízo ministerial sobre ser ela necessária e suficiente para a reprovação e prevenção do crime. O juiz não formula o acordo (não é titular da ação penal): limita-se a verificar voluntariedade e legalidade em audiência (§4º), podendo devolver os autos para reformulação (§5º) ou recusar a homologação (§7º). Atenção ao requisito: pena MÍNIMA inferior a 4 anos, consideradas as causas de aumento e diminuição (§1º), e não pena máxima; a confissão formal e circunstanciada é requisito legal indispensável."
            },
            {
              id: "mp-cpp-4", modo: "juris", fonte: "Súmula Vinculante 14",
              enunciado: "Advogado constituído por investigado requer vista dos autos de inquérito policial ainda em curso, no qual há diligências não concluídas. À luz da Súmula Vinculante 14:",
              alternativas: [
                "o acesso é integralmente vedado enquanto não encerrado o inquérito, dada a natureza inquisitiva e sigilosa do procedimento investigatório presidido pela polícia",
                "o defensor tem direito de acesso amplo aos elementos de prova já documentados no procedimento investigatório, o que não alcança as diligências ainda em andamento",
                "o acesso abrange também as diligências em curso, como interceptações telefônicas em execução, sob pena de nulidade de todos os atos do inquérito policial",
                "o acesso depende de autorização judicial específica, a ser deferida apenas depois que o investigado houver sido formalmente indiciado pela autoridade policial",
                "o direito de acesso é assegurado somente ao investigado preso, pois apenas nessa hipótese há restrição à liberdade a justificar o exercício antecipado da defesa"
              ],
              correta: 1,
              explicacao: "A Súmula Vinculante 14 assegura ao defensor, no interesse do representado, acesso amplo aos elementos de prova que, JÁ DOCUMENTADOS em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa. A expressão já documentados é a chave: diligências ainda em andamento (interceptação em execução, busca a ser cumprida) não estão documentadas e podem ser preservadas pelo sigilo, sob pena de se inviabilizar a investigação. O acesso independe de indiciamento formal, de autorização judicial específica ou de estar o investigado preso."
            },
            {
              id: "mp-cpp-5", modo: "juris", fonte: "CF, art. 5º, LIX; CPP, art. 29; entendimento consolidado dos Tribunais Superiores",
              enunciado: "Recebidos os autos do inquérito policial, o Ministério Público, dentro do prazo legal, requisita novas diligências à autoridade policial. Inconformado com a demora, o ofendido ajuíza queixa-crime subsidiária. De acordo com a Constituição, o CPP e a jurisprudência dominante:",
              alternativas: [
                "a queixa deve ser recebida, pois a ação penal privada subsidiária é cabível sempre que o ofendido discordar da estratégia investigativa adotada pelo Ministério Público",
                "a queixa deve ser recebida, e o Ministério Público perde a titularidade da ação penal, podendo atuar apenas como fiscal da ordem jurídica até a sentença final",
                "a queixa é cabível também quando o Ministério Público promove o arquivamento dentro do prazo legal, hipótese que a jurisprudência equipara à inércia do acusador",
                "a queixa não deve ser recebida, pois a subsidiária pressupõe a inércia do Ministério Público, que não se configura quando há requisição de diligências no prazo",
                "a queixa não deve ser recebida, pois a ação penal privada subsidiária da pública foi tacitamente revogada pelo novo regime de arquivamento do Pacote Anticrime"
              ],
              correta: 3,
              explicacao: "A ação penal privada subsidiária da pública é garantia constitucional (CF, art. 5º, LIX) e pressupõe INÉRCIA do Ministério Público, isto é, a ausência de qualquer manifestação no prazo do art. 46. Se o órgão se manifesta tempestivamente — oferecendo denúncia, promovendo o arquivamento ou requisitando diligências —, não há inércia e a queixa subsidiária é incabível, conforme entendimento consolidado dos Tribunais Superiores. Por ser garantia constitucional, ela não foi revogada; e, mesmo quando admitida, o MP conserva os poderes do art. 29 do CPP: aditar a queixa, repudiá-la e oferecer denúncia substitutiva, intervir em todos os termos do processo, recorrer e, no caso de negligência do querelante, retomar a ação como parte principal."
            }
          ]
        },
        {
          id: "mprj-cpp-2",
          titulo: "Provas, prisões e medidas cautelares",
          questoes: [
            {
              id: "mp-cpp-6", modo: "lei", fonte: "CPP, art. 157, caput e §§1º a 3º",
              enunciado: "Sobre a prova ilícita e a chamada prova ilícita por derivação, nos termos do art. 157 do Código de Processo Penal:",
              alternativas: [
                "as provas derivadas das ilícitas são sempre admissíveis, pois a ilicitude do meio de obtenção não se comunica aos elementos probatórios dela decorrentes",
                "a prova ilícita permanece nos autos e se sujeita à livre valoração do juiz, que apenas lhe atribuirá peso menor na formação do seu convencimento motivado",
                "as derivadas também são inadmissíveis, salvo quando não evidenciado o nexo de causalidade entre umas e outras ou quando puderem ser obtidas por fonte independente",
                "o juiz que tomou conhecimento do conteúdo da prova declarada inadmissível fica impedido de proferir sentença ou acórdão, por expressa previsão legal em vigor",
                "declarada inadmissível, a prova é desentranhada e devolvida à parte que a produziu, vedada em qualquer caso a sua inutilização, ainda que preclusa a decisão"
              ],
              correta: 2,
              explicacao: "O art. 157, caput, torna inadmissíveis as provas ilícitas, que devem ser desentranhadas do processo. O §1º acolhe a teoria dos frutos da árvore envenenada e, ao mesmo tempo, fixa suas limitações: as derivadas são inadmissíveis, SALVO quando não evidenciado o nexo de causalidade entre umas e outras ou quando puderem ser obtidas por fonte independente, conceito definido no §2º. O distrator sobre o impedimento do juiz que conheceu a prova ilícita corresponde ao §5º, que foi VETADO e não está em vigor. Pelo §3º, preclusa a decisão de desentranhamento, a prova é inutilizada por decisão judicial, facultado às partes acompanhar o incidente."
            },
            {
              id: "mp-cpp-7", modo: "lei", fonte: "CPP, arts. 158-A, §§1º e 3º, 158-B e 158-C, §2º",
              enunciado: "A respeito da cadeia de custódia da prova, disciplinada pelos arts. 158-A e seguintes do CPP:",
              alternativas: [
                "seu início se dá com a preservação do local de crime ou com os procedimentos policiais ou periciais em que se detecte a existência de vestígio",
                "seu início se dá apenas com o recebimento do vestígio pela central de custódia, momento a partir do qual passa a existir rastreabilidade documental do material",
                "a coleta dos vestígios deve ser feita exclusivamente pela autoridade policial, vedada a atuação de perito oficial antes de formalmente instaurado o inquérito",
                "é permitida a remoção de vestígios do local isolado antes da liberação pelo perito responsável, desde que haja registro fotográfico prévio da cena do crime",
                "a disciplina alcança somente os vestígios de crimes dolosos contra a vida, únicos em que a lei exige o rastreamento do material desde a coleta até o descarte"
              ],
              correta: 0,
              explicacao: "O art. 158-A, §1º, é expresso: o início da cadeia de custódia se dá com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio — e vestígio, pelo §3º, é todo objeto ou material bruto, visível ou latente, constatado ou recolhido, que se relacione à infração penal, em qualquer delito que deixe rastros, não apenas nos crimes contra a vida. A coleta deve ser feita preferencialmente por perito oficial (art. 158-C), e o §2º desse dispositivo proíbe a entrada em locais isolados e a remoção de vestígios antes da liberação pelo perito, tipificando a conduta como fraude processual. O art. 158-B enumera as etapas, do reconhecimento ao descarte."
            },
            {
              id: "mp-cpp-8", modo: "caso", fonte: "CPP, arts. 310, caput e §4º, 311 e 282, §2º",
              enunciado: "Preso em flagrante por furto qualificado, João é apresentado à audiência de custódia realizada vinte horas após a prisão. O Ministério Público, presente ao ato, requer apenas medidas cautelares diversas da prisão; o juiz, contudo, reputa necessária a prisão preventiva. Nessa hipótese, à luz do CPP com as alterações do Pacote Anticrime:",
              alternativas: [
                "o juiz pode converter o flagrante em preventiva de ofício, pois o auto de prisão em flagrante equivale, para esse fim, à representação da autoridade policial",
                "o juiz deve relaxar a prisão, uma vez que a audiência de custódia foi realizada antes de decorrido integralmente o prazo de vinte e quatro horas fixado em lei",
                "o juiz pode decretar a preventiva de ofício apenas na fase de investigação, sendo-lhe vedado fazê-lo somente depois de recebida a denúncia pelo juízo competente",
                "o juiz não pode decretar a preventiva sem requerimento, cabendo-lhe conceder a liberdade provisória com as medidas cautelares diversas efetivamente requeridas",
                "o juiz deve converter o flagrante em preventiva, pois o furto qualificado tem pena máxima superior a quatro anos, o que torna a custódia cautelar obrigatória"
              ],
              correta: 3,
              explicacao: "Após a Lei 13.964/2019, o art. 311 do CPP somente admite a prisão preventiva decretada pelo juiz a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial — em qualquer fase, ficando vedada a decretação de ofício (arts. 311 e 282, §2º), vedação que a jurisprudência do STJ estende à conversão do flagrante em preventiva na audiência de custódia (art. 310, II). Sem pedido de preventiva, o juiz não pode decretá-la. A audiência realizada em 20 horas respeitou o prazo de até 24 horas do art. 310, caput (é a NÃO realização injustificada que enseja o relaxamento, na forma do §4º). Por fim, o art. 313, I, é requisito de admissibilidade, e não comando de decretação: não há prisão preventiva obrigatória no ordenamento."
            },
            {
              id: "mp-cpp-9", modo: "juris", fonte: "Súmula 145 do STF; CP, art. 17",
              enunciado: "Sobre a distinção entre flagrante preparado (ou provocado) e flagrante esperado, à luz da Súmula 145 do STF e da jurisprudência dos Tribunais Superiores:",
              alternativas: [
                "ambos são ilícitos, pois em qualquer deles há intervenção estatal prévia que vicia por completo a espontaneidade da conduta praticada pelo agente",
                "ambos são válidos, pois o Estado apenas antecipa a atuação repressiva diante de crime que, de um modo ou de outro, acabaria por se consumar",
                "no flagrante esperado há crime impossível, já que a vigilância policial previamente montada torna absolutamente impossível a consumação do delito",
                "o flagrante preparado é válido sempre que a atuação do agente provocador se limitar a criar a oportunidade para que o crime venha a ser praticado",
                "o flagrante preparado configura crime impossível, ao passo que o flagrante esperado, em que a polícia apenas aguarda a ação do agente, é válido"
              ],
              correta: 4,
              explicacao: "A Súmula 145 do STF enuncia que não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação: no flagrante preparado, o agente é induzido à prática pelo agente provocador e a montagem policial impede a consumação, caracterizando crime impossível (CP, art. 17). No flagrante esperado não há indução alguma — a polícia, informada, apenas aguarda ou monitora a ação que o agente já decidira praticar —, de modo que a prisão é válida. Nos crimes permanentes, como o tráfico nas modalidades guardar ou ter em depósito, a jurisprudência reconhece a validade da prisão quanto ao núcleo permanente, ainda que a venda tenha sido simulada por policiais."
            },
            {
              id: "mp-cpp-10", modo: "juris", fonte: "CPP, art. 316, caput e parágrafo único; entendimento consolidado dos Tribunais Superiores",
              enunciado: "Decretada a prisão preventiva, o órgão emissor da decisão não realiza a revisão da necessidade de sua manutenção no prazo de noventa dias. Segundo o CPP e o entendimento consolidado dos Tribunais Superiores:",
              alternativas: [
                "o decurso do prazo acarreta a revogação automática da prisão e a imediata expedição de alvará de soltura, independentemente de qualquer provocação das partes",
                "a inobservância do prazo não gera revogação automática da preventiva, devendo o órgão competente ser instado a reavaliar fundamentadamente a necessidade da medida",
                "a revisão periódica é mera faculdade do julgador, pois a lei não estabelece prazo algum para o reexame da necessidade da prisão preventiva já decretada",
                "o prazo de revisão é de trinta dias e se aplica exclusivamente às prisões temporárias decretadas no curso de investigação de crimes hediondos e equiparados",
                "a revisão só pode ser feita a requerimento da defesa, sendo vedado ao juiz reexaminar de ofício a subsistência dos motivos que autorizaram a prisão"
              ],
              correta: 1,
              explicacao: "O art. 316, parágrafo único, do CPP determina que o órgão emissor da decisão revise a necessidade de manutenção da preventiva a cada 90 dias, de ofício e mediante decisão fundamentada, sob pena de tornar a prisão ilegal. Os Tribunais Superiores, contudo, firmaram que a mera inobservância do prazo não implica revogação automática nem soltura imediata: o órgão competente deve ser instado a reavaliar a necessidade da medida, e a exigência recai sobre o órgão que decretou a prisão, não se estendendo automaticamente às instâncias recursais. O caput do art. 316 confirma que o reexame não depende de provocação da defesa, pois autoriza o juiz a revogar a preventiva de ofício quando verificar a falta de motivo para que subsista."
            }
          ]
        }
      ]
    },

    /* --------------------------- BANCA I · LEGISLAÇÃO EXTRAVAGANTE */
    {
      id: "mprj-lpe",
      titulo: "Leis penais especiais e execução",
      materia: "Legislação Penal Extravagante",
      banca: "I",
      icone: "📕",
      descricao: "Drogas, Maria da Penha, hediondos, organização criminosa e os patamares de progressão da LEP.",
      licoes: [
        {
          id: "mprj-lpe-1",
          titulo: "Lei de Drogas e violência doméstica",
          questoes: [
            {
              id: "mp-lpe-1", modo: "lei", fonte: "Lei 11.343/06, art. 28, caput e §§ 3º e 4º",
              enunciado: "Quem adquire e traz consigo droga destinada a consumo pessoal fica sujeito, nos termos do art. 28 da Lei 11.343/2006, exclusivamente às seguintes penas:",
              alternativas: [
                "detenção de seis meses a dois anos e multa, admitida a substituição por pena restritiva de direitos quando o agente for primário e de bons antecedentes",
                "reclusão de um a três anos e multa, com possibilidade de suspensão condicional da pena, por se tratar de infração penal de menor potencial ofensivo",
                "advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo",
                "prestação pecuniária, limitação de fim de semana e interdição temporária de direitos, nos moldes gerais das penas restritivas do Código Penal",
                "internação compulsória em estabelecimento de saúde pelo prazo máximo de cinco meses, prorrogável por igual período na hipótese de reincidência"
              ],
              correta: 2,
              explicacao: "O art. 28 da Lei de Drogas prevê três penas, todas não privativas de liberdade: advertência sobre os efeitos das drogas (I), prestação de serviços à comunidade (II) e medida educativa de comparecimento a programa ou curso educativo (III). As penas dos incisos II e III têm prazo máximo de 5 meses (§ 3º), elevado a 10 meses em caso de reincidência (§ 4º). Não há previsão de prisão, de multa autônoma nem de internação compulsória — daí a afirmação corrente de que houve despenalização, e não a adoção do modelo comum de penas restritivas do Código Penal."
            },
            {
              id: "mp-lpe-2", modo: "juris", fonte: "Lei 8.072/90, art. 2º, § 5º; jurisprudência do STF e do STJ",
              enunciado: "Condenado por tráfico de drogas teve a pena reduzida pela causa de diminuição do art. 33, § 4º, da Lei 11.343/2006. Quanto à natureza do delito, de acordo com o entendimento dos Tribunais Superiores, hoje positivado na Lei dos Crimes Hediondos:",
              alternativas: [
                "o tráfico privilegiado não é equiparado a hediondo, afastando-se os rigores próprios desse regime na execução da pena",
                "o tráfico privilegiado permanece equiparado a hediondo, pois a causa de diminuição não altera a tipicidade da conduta descrita no art. 33",
                "a hediondez só é afastada se a redução for aplicada no patamar máximo de dois terços, subsistindo nas reduções inferiores a esse limite",
                "a hediondez subsiste integralmente, embora o condenado faça jus à progressão pelos patamares comuns previstos no art. 112, I e II, da LEP",
                "a discussão é irrelevante, porque a Lei dos Crimes Hediondos jamais alcançou o tráfico de drogas, delito autônomo e não equiparado"
              ],
              correta: 0,
              explicacao: "O STF e o STJ firmaram que o tráfico privilegiado (art. 33, § 4º, da Lei 11.343/2006) não ostenta natureza hedionda, entendimento posteriormente incorporado ao art. 2º, § 5º, da Lei 8.072/1990. A consequência prática é relevante na execução: não incidem os patamares agravados de progressão previstos para o hediondo nem as demais restrições da Lei 8.072/1990. A alternativa que condiciona o afastamento ao patamar de dois terços cria requisito inexistente; e o tráfico é, sim, equiparado a hediondo por força do art. 5º, XLIII, da Constituição — apenas a figura privilegiada é que escapa desse regime."
            },
            {
              id: "mp-lpe-3", modo: "caso", fonte: "Lei 11.343/06, art. 33, § 4º",
              enunciado: "João foi preso em flagrante com duzentos gramas de cocaína. É primário e de bons antecedentes, mas a investigação demonstrou que integrava, com divisão de tarefas, o núcleo de distribuição de uma facção criminosa. Requerida em alegações finais a incidência do art. 33, § 4º, da Lei 11.343/2006, o pedido deve ser:",
              alternativas: [
                "deferido, pois a primariedade e os bons antecedentes bastam para a incidência da minorante, sendo os demais requisitos meramente indicativos",
                "deferido no patamar mínimo de um sexto, porque a vinculação à facção apenas gradua a redução, sem impedir o reconhecimento do benefício",
                "indeferido, porque a quantidade de droga apreendida constitui, por si só, o único obstáculo legal ao reconhecimento da causa de diminuição",
                "deferido, desde que o réu confesse a traficância, pois a confissão espontânea supre a ausência dos demais requisitos exigidos pelo dispositivo",
                "indeferido, porque os requisitos do § 4º são cumulativos e a integração a organização criminosa afasta a minorante, ainda que o réu seja primário"
              ],
              correta: 4,
              explicacao: "O art. 33, § 4º, da Lei 11.343/2006 exige quatro requisitos CUMULATIVOS: primariedade, bons antecedentes, não dedicação a atividades criminosas e não integração a organização criminosa. Basta a ausência de um deles para inviabilizar a redução de um sexto a dois terços — e integrar o núcleo de distribuição de uma facção fulmina os dois últimos requisitos. A quantidade de droga, isoladamente, não é requisito negativo previsto no § 4º: ela opera na dosimetria, como circunstância preponderante do art. 42 da Lei de Drogas; e a confissão é atenuante genérica, que não substitui requisito legal de causa de diminuição."
            },
            {
              id: "mp-lpe-4", modo: "juris", fonte: "Súmulas 536, 542, 588, 589 e 600 do STJ",
              enunciado: "Sobre a aplicação da Lei 11.340/2006, de acordo com a jurisprudência sumulada do Superior Tribunal de Justiça:",
              alternativas: [
                "admite-se a suspensão condicional do processo nos delitos sujeitos ao rito da Lei Maria da Penha, desde que a pena mínima cominada em abstrato não exceda um ano",
                "é vedada a substituição da pena privativa de liberdade por restritiva de direitos no crime praticado com violência ou grave ameaça contra a mulher no ambiente doméstico",
                "a configuração da violência doméstica e familiar exige a coabitação entre autor e vítima, salvo quando houver entre eles vínculo de parentesco por afinidade",
                "aplica-se o princípio da insignificância à subtração de bem de valor irrisório praticada pelo companheiro no âmbito das relações domésticas e familiares",
                "a ação penal no crime de lesão corporal leve praticado contra a mulher no ambiente doméstico e familiar é pública condicionada à representação da ofendida"
              ],
              correta: 1,
              explicacao: "A Súmula 588 do STJ veda a substituição por pena restritiva de direitos quando o crime ou a contravenção for praticado contra a mulher com violência ou grave ameaça no ambiente doméstico. As demais alternativas contrariam frontalmente outras súmulas: a Súmula 536 afasta a suspensão condicional do processo e a transação penal nos delitos sujeitos ao rito da Lei Maria da Penha; a Súmula 600 dispensa a coabitação entre autor e vítima; a Súmula 589 afasta o princípio da insignificância; e a Súmula 542 fixa que a ação penal na lesão corporal decorrente de violência doméstica contra a mulher é pública incondicionada."
            },
            {
              id: "mp-lpe-5", modo: "lei", fonte: "Lei 11.340/06, arts. 17, 24-A e 41",
              enunciado: "À luz do texto da Lei 11.340/2006, é correto afirmar que:",
              alternativas: [
                "aos crimes praticados com violência doméstica e familiar contra a mulher aplica-se a Lei 9.099/1995 sempre que a pena máxima cominada em abstrato não superar dois anos",
                "admite-se a substituição por pena que implique o pagamento isolado de multa, vedando-se apenas a imposição de prestação de cesta básica ao agressor condenado",
                "o descumprimento de medida protetiva de urgência somente configura crime quando a medida houver sido deferida por juízo dotado de competência criminal",
                "descumprir decisão que defere medida protetiva de urgência é crime autônomo punido com detenção, e, no flagrante, só a autoridade judicial pode conceder fiança",
                "as medidas protetivas de urgência somente podem ser concedidas após a instauração do inquérito policial e o oferecimento de representação pela ofendida"
              ],
              correta: 3,
              explicacao: "O art. 24-A da Lei Maria da Penha tipifica o descumprimento de medida protetiva de urgência, com pena de detenção de 3 meses a 2 anos; o § 1º esclarece que o crime independe da competência civil ou criminal do juiz que deferiu a medida, e o § 2º reserva à autoridade judicial a concessão de fiança na hipótese de prisão em flagrante. O art. 41 afasta integralmente a Lei 9.099/1995, independentemente da pena prevista, e o art. 17 veda tanto as penas de cesta básica e outras prestações pecuniárias quanto a substituição por pena de multa isolada."
            }
          ]
        },
        {
          id: "mprj-lpe-2",
          titulo: "Hediondos, organização criminosa e execução penal",
          questoes: [
            {
              id: "mp-lpe-6", modo: "lei", fonte: "LEP, art. 112, III a VII (redação da Lei 13.964/2019)",
              enunciado: "Condenado primário por crime hediondo do qual não resultou morte deve cumprir, para obter a progressão de regime, o seguinte percentual da pena:",
              alternativas: [
                "quarenta por cento da pena, patamar aplicável ao apenado primário condenado por crime hediondo ou equiparado sem resultado morte",
                "cinquenta por cento da pena, sendo-lhe ainda vedada, por expressa disposição legal, a concessão de livramento condicional",
                "trinta por cento da pena, o mesmo percentual exigido do reincidente condenado por crime cometido com violência à pessoa ou grave ameaça",
                "sessenta por cento da pena, por se tratar de condenação submetida ao regime mais gravoso instituído pela Lei 8.072/1990",
                "vinte e cinco por cento da pena, percentual reservado ao primário condenado por crime praticado com violência à pessoa ou grave ameaça"
              ],
              correta: 0,
              explicacao: "O art. 112 da LEP, na redação do Pacote Anticrime, escalona os percentuais: 25% para o primário em crime com violência ou grave ameaça (III); 30% para o reincidente nessa hipótese (IV); 40% para o primário em crime hediondo ou equiparado (V); 50% para o hediondo com resultado morte, sendo primário, aí vedado o livramento condicional (VI); 60% para o reincidente em hediondo (VII). Como o enunciado trata de apenado primário, condenado por hediondo sem resultado morte, o patamar é o de 40%. Os percentuais de 16% e 20% (incisos I e II) só alcançam crimes sem violência à pessoa ou grave ameaça."
            },
            {
              id: "mp-lpe-7", modo: "lei", fonte: "Lei 12.850/13, art. 1º, § 1º",
              enunciado: "Para os efeitos da Lei 12.850/2013, considera-se organização criminosa a associação de:",
              alternativas: [
                "três ou mais pessoas, estruturalmente ordenada e com divisão de tarefas, ainda que informal, para obter vantagem de qualquer natureza mediante infrações com pena máxima superior a dois anos",
                "duas ou mais pessoas, ainda que sem estabilidade ou estrutura ordenada, para a prática reiterada de qualquer infração penal, independentemente do máximo de pena a ela cominado em abstrato",
                "quatro ou mais pessoas, estruturalmente ordenada e com divisão de tarefas, ainda que informal, para obter vantagem de qualquer natureza mediante infrações com pena máxima superior a quatro anos",
                "quatro ou mais pessoas, com divisão de tarefas formalmente ajustada e hierarquia documentada, voltada exclusivamente à obtenção de vantagem econômica de caráter necessariamente transnacional",
                "cinco ou mais pessoas, com estrutura hierarquizada e permanente, destinada à prática de crimes hediondos ou a eles equiparados, ainda que ausente qualquer repercussão de caráter transnacional"
              ],
              correta: 2,
              explicacao: "O art. 1º, § 1º, da Lei 12.850/2013 exige: 4 ou mais pessoas; estrutura ordenada; divisão de tarefas, ainda que informalmente; finalidade de obter, direta ou indiretamente, vantagem de qualquer natureza; e prática de infrações penais cujas penas máximas sejam superiores a 4 anos OU que sejam de caráter transnacional — os dois últimos são alternativos, não cumulativos. Note que a vantagem é de qualquer natureza, e não necessariamente econômica, e que a divisão de tarefas pode ser informal. O número de duas ou mais pessoas, sem os demais elementos, corresponde à associação criminosa do art. 288 do Código Penal, figura diversa."
            },
            {
              id: "mp-lpe-8", modo: "juris", fonte: "Súmula Vinculante 26; Súmula 439 do STJ",
              enunciado: "Sobre a progressão de regime nos crimes hediondos e equiparados, de acordo com a Súmula Vinculante 26 e a jurisprudência sumulada do Superior Tribunal de Justiça:",
              alternativas: [
                "o juízo da execução está vinculado à obrigatoriedade do regime inicial fechado, cuja constitucionalidade foi reafirmada pelo Supremo Tribunal Federal",
                "o exame criminológico foi extinto e não pode mais ser determinado pelo juízo da execução em nenhuma hipótese, por ausência de previsão legal específica",
                "a progressão depende de parecer favorável da Comissão Técnica de Classificação, cuja manifestação vincula a decisão do juízo da execução penal",
                "o exame criminológico é obrigatório em todo e qualquer pedido de progressão de regime formulado por condenado a crime hediondo ou a ele equiparado, sob pena de nulidade",
                "o juízo da execução afasta a vedação legal à progressão e pode determinar, de modo fundamentado, a realização de exame criminológico para aferir o requisito subjetivo"
              ],
              correta: 4,
              explicacao: "A Súmula Vinculante 26 determina que, para efeito de progressão em crime hediondo ou equiparado, o juízo da execução observe a inconstitucionalidade da vedação do art. 2º da Lei 8.072/1990, sem prejuízo de avaliar os requisitos objetivos e subjetivos, podendo determinar, de modo fundamentado, a realização de exame criminológico. Na mesma linha, a Súmula 439 do STJ admite o exame criminológico pelas peculiaridades do caso, desde que em decisão motivada — logo, ele não é nem proibido nem obrigatório, mas facultativo e fundamentado. O regime inicial fechado obrigatório para hediondos também foi declarado inconstitucional pelo STF, e o parecer da Comissão Técnica de Classificação não vincula o juiz."
            },
            {
              id: "mp-lpe-9", modo: "juris", fonte: "LEP, arts. 112, § 6º, e 127; Súmulas 441 e 535 do STJ",
              enunciado: "Reconhecida a prática de falta grave por condenado que cumpre pena privativa de liberdade, de acordo com a Lei de Execução Penal e a jurisprudência sumulada do Superior Tribunal de Justiça:",
              alternativas: [
                "interrompem-se os prazos para a progressão de regime, para o livramento condicional e para o indulto, reiniciando-se a contagem sobre a pena remanescente",
                "interrompe-se o prazo para a progressão de regime, mas não os prazos para o livramento condicional, para o indulto e para a comutação de pena",
                "nenhum prazo é interrompido, porque a falta grave produz efeitos apenas disciplinares no âmbito interno do estabelecimento prisional em que se deu",
                "interrompe-se apenas o prazo para a obtenção do livramento condicional, mantida a contagem original do requisito objetivo da progressão de regime",
                "revoga-se automaticamente a totalidade do tempo remido pelo trabalho e pelo estudo, independentemente de decisão judicial que o declare"
              ],
              correta: 1,
              explicacao: "O art. 112, § 6º, da LEP, incluído pelo Pacote Anticrime, prevê que a falta grave interrompe o prazo para a progressão de regime, reiniciando-se a contagem sobre a pena remanescente. Já a Súmula 441 do STJ afirma que a falta grave não interrompe o prazo para obtenção do livramento condicional, e a Súmula 535 do STJ que não interrompe o prazo para fim de comutação de pena ou indulto. Quanto à remição, o art. 127 da LEP autoriza o juiz a revogar ATÉ um terço do tempo remido, em decisão fundamentada — não há revogação automática nem integral."
            },
            {
              id: "mp-lpe-10", modo: "juris", fonte: "Lei 12.850/13, art. 4º, §§ 4º, 14 e 16; jurisprudência do STF",
              enunciado: "Sobre a colaboração premiada disciplinada na Lei 12.850/2013, de acordo com o texto legal e a orientação dos Tribunais Superiores:",
              alternativas: [
                "as declarações do colaborador, uma vez homologado o acordo pelo juiz, bastam por si sós para fundamentar sentença condenatória contra os delatados",
                "a homologação judicial do acordo importa juízo antecipado sobre o mérito das imputações que o colaborador dirige aos terceiros por ele delatados",
                "o Ministério Público está impedido de deixar de oferecer denúncia contra o colaborador, ainda que este não seja o líder e tenha sido o primeiro a colaborar",
                "nenhuma condenação será proferida com fundamento apenas nas declarações do colaborador, que constituem meio de obtenção de prova a ser corroborado",
                "o colaborador conserva integralmente o direito ao silêncio nos depoimentos que prestar, não se sujeitando ao compromisso legal de dizer a verdade"
              ],
              correta: 3,
              explicacao: "O art. 4º, § 16, da Lei 12.850/2013 é expresso: nenhuma condenação será proferida com fundamento apenas nas declarações de agente colaborador, exigindo-se elementos de corroboração — a colaboração é meio de obtenção de prova, e não prova autossuficiente. O § 14 estabelece que, nos depoimentos que prestar, o colaborador renuncia, na presença do defensor, ao direito ao silêncio e fica sujeito ao compromisso legal de dizer a verdade. Já o § 4º autoriza o Ministério Público a deixar de oferecer denúncia se o colaborador não for o líder da organização e for o primeiro a prestar efetiva colaboração. A homologação, por fim, restringe-se a regularidade, legalidade e voluntariedade, sem juízo antecipado sobre o mérito das imputações."
            }
          ]
        }
      ]
    },

    /* -------------------------------------------- BANCA II · CIVIL */
    {
      id: "mprj-civil",
      titulo: "Do negócio jurídico às sucessões",
      materia: "Direito Civil",
      banca: "II",
      icone: "📖",
      descricao: "Parte geral, prescrição e decadência, família e sucessões — com foco no que o MP fiscaliza.",
      licoes: [
        {
          id: "mprj-civil-1",
          titulo: "Pessoas, negócio jurídico e prescrição",
          questoes: [
            {
              id: "mp-civ-1", modo: "lei", fonte: "CC, arts. 3º e 4º (redação da Lei 13.146/2015)",
              enunciado: "Após a entrada em vigor do Estatuto da Pessoa com Deficiência (Lei 13.146/2015), o regime das incapacidades no Código Civil passou a ser o seguinte:",
              alternativas: [
                "são absolutamente incapazes todos os menores de dezoito anos, e relativamente incapazes apenas os que, por enfermidade mental, não puderem exprimir a sua vontade",
                "permanecem absolutamente incapazes os que, por deficiência mental, não tiverem o discernimento necessário para a prática dos atos da vida civil, ao lado dos menores impúberes",
                "são absolutamente incapazes apenas os menores de dezesseis anos; os que, por causa transitória ou permanente, não puderem exprimir sua vontade são relativamente incapazes",
                "os pródigos, os ébrios habituais e os viciados em tóxico passaram a integrar o rol dos absolutamente incapazes, junto com os menores de dezesseis anos",
                "a pessoa com deficiência tornou-se, por força de lei, relativamente incapaz, ficando sempre sujeita à curatela em sua extensão máxima, inclusive para atos existenciais"
              ],
              correta: 2,
              explicacao: "Depois da Lei 13.146/2015, o art. 3º do CC ficou com um único critério: são absolutamente incapazes os menores de dezesseis anos. Todas as demais hipóteses migraram para o art. 4º (relativamente incapazes): maiores de dezesseis e menores de dezoito; ébrios habituais e viciados em tóxico; os que, por causa transitória ou permanente, não puderem exprimir sua vontade; e os pródigos. A deficiência, por si só, não afeta a plena capacidade civil, e a curatela é medida extraordinária, restrita a atos de natureza patrimonial e negocial."
            },
            {
              id: "mp-civ-2", modo: "lei", fonte: "CC, arts. 201, 202 e 198, I",
              enunciado: "A respeito das causas que impedem, suspendem ou interrompem a prescrição no Código Civil, é correto afirmar que:",
              alternativas: [
                "a interrupção da prescrição somente pode ocorrer uma vez, recomeçando o prazo a correr da data do ato que a interrompeu ou do último ato do processo destinado a interrompê-la",
                "a interrupção pode repetir-se quantas vezes o credor promover a citação válida do devedor, desde que o faça antes de vencido cada novo prazo prescricional",
                "não corre a prescrição contra os relativamente incapazes, a quem o Código assegura exatamente a mesma proteção conferida aos absolutamente incapazes",
                "o protesto cambial não é causa de interrupção da prescrição, que somente se interrompe por despacho do juiz que ordenar a citação do devedor",
                "a suspensão da prescrição em favor de um dos credores solidários sempre aproveita aos demais, ainda que a obrigação seja divisível"
              ],
              correta: 0,
              explicacao: "O art. 202, caput, do CC é expresso: a interrupção da prescrição somente poderá ocorrer uma vez; e o parágrafo único determina que o prazo recomeça da data do ato que a interrompeu ou do último ato do processo para interrompê-la. O protesto cambial está no rol do art. 202, III, e por isso interrompe a prescrição. O art. 198, I, protege apenas os absolutamente incapazes (hoje, os menores de dezesseis anos), e não os relativamente incapazes. Já o art. 201 condiciona o aproveitamento da suspensão aos demais credores solidários à indivisibilidade da obrigação."
            },
            {
              id: "mp-civ-3", modo: "caso", fonte: "CC, arts. 156, 167, 171, II, e 178, II",
              enunciado: "Premido pela necessidade de custear cirurgia de emergência do filho, João assume, perante o médico que conhecia essa circunstância, obrigação de honorários excessivamente onerosa. Semanas depois, para aparentar insolvência, celebra com o irmão escritura de compra e venda de imóvel, sem que houvesse qualquer pagamento e permanecendo João na posse do bem. Quanto aos dois negócios:",
              alternativas: [
                "ambos são nulos de pleno direito, porque em nenhum deles houve manifestação de vontade livre e consciente por parte do declarante",
                "ambos são anuláveis no prazo decadencial de quatro anos, contado, para cada um, do dia em que o respectivo negócio foi celebrado",
                "o primeiro é nulo por lesão e o segundo é anulável por fraude contra credores, no prazo decadencial de dois anos contado do registro",
                "o primeiro é válido, por ausência de dolo do contratante, e o segundo é anulável por erro substancial quanto à natureza do negócio",
                "o primeiro é anulável por estado de perigo, em quatro anos; o segundo é nulo por simulação, subsistindo o dissimulado se válido"
              ],
              correta: 4,
              explicacao: "Assumir obrigação excessivamente onerosa premido da necessidade de salvar pessoa da família de grave dano conhecido da outra parte configura estado de perigo (art. 156), defeito que gera anulabilidade (art. 171, II), com prazo decadencial de quatro anos contado da celebração (art. 178, II). Já a venda aparente, sem pagamento e sem transferência real da posse, é simulação, que o Código de 2002 sancionou com NULIDADE (art. 167) — e o nulo não convalesce pelo decurso do tempo (art. 169), subsistindo apenas o negócio dissimulado, se válido na substância e na forma. Confundir simulação (nulidade) com fraude contra credores (anulabilidade) é a armadilha clássica."
            },
            {
              id: "mp-civ-4", modo: "juris", fonte: "Súmula 227 do STJ",
              enunciado: "Sociedade empresária tem seu nome indevidamente inscrito em cadastro de inadimplentes e sofre abalo de crédito na praça. Segundo a jurisprudência sumulada do Superior Tribunal de Justiça:",
              alternativas: [
                "a pessoa jurídica jamais pode sofrer dano moral, por lhe faltarem os atributos psíquicos e a dignidade inerentes à pessoa natural",
                "a pessoa jurídica pode sofrer dano moral, tutelando-se a sua honra objetiva, isto é, o bom nome e a reputação de que goza no meio em que atua",
                "a pessoa jurídica só pode pleitear reparação por dano moral quando comprovar, cumulativamente, dano material decorrente do mesmo fato",
                "somente as pessoas jurídicas de direito privado que persigam fins lucrativos podem sofrer dano moral passível de indenização",
                "a pessoa jurídica de direito público faz jus a indenização por dano moral sempre que houver ofensa à sua honra e à sua imagem institucional"
              ],
              correta: 1,
              explicacao: "A Súmula 227 do STJ enuncia que a pessoa jurídica pode sofrer dano moral. O fundamento é a tutela da honra objetiva — reputação, bom nome, credibilidade no mercado —, e não da honra subjetiva, que pressupõe sentimento e é exclusiva da pessoa natural. Por isso a indenização não depende de prova de prejuízo material concomitante, nem se restringe às sociedades com fins lucrativos. A alternativa sobre a pessoa jurídica de direito público inverte o entendimento consolidado do STJ, que lhe nega, em regra, indenização por dano moral por ofensa à honra e à imagem."
            },
            {
              id: "mp-civ-5", modo: "juris", fonte: "Súmula 403 do STJ; CC, art. 20",
              enunciado: "Revista de circulação nacional publica, sem autorização, fotografia de conhecida atleta em anúncio publicitário de determinada marca. Ajuizada ação indenizatória, e de acordo com a jurisprudência sumulada do STJ:",
              alternativas: [
                "a indenização depende da demonstração de efetivo prejuízo patrimonial suportado pela pessoa cuja imagem foi divulgada sem autorização",
                "não há dever de indenizar, pois a pessoa notória renuncia tacitamente à proteção de sua imagem em razão da exposição pública que busca",
                "a reparação só é cabível se a publicação houver atingido também a honra, a boa fama ou a respeitabilidade da pessoa retratada",
                "a indenização é devida independentemente de prova do prejuízo, por se tratar de publicação não autorizada de imagem com fins econômicos ou comerciais",
                "a indenização é devida apenas se a interessada houver previamente notificado a editora, por via extrajudicial, exigindo a retirada da imagem"
              ],
              correta: 3,
              explicacao: "A Súmula 403 do STJ estabelece que independe de prova do prejuízo a indenização pela publicação não autorizada de imagem de pessoa com fins econômicos ou comerciais: o dano é in re ipsa. O direito à imagem é direito da personalidade autônomo (CC, art. 20), de modo que a reparação não pressupõe ofensa à honra nem prejuízo patrimonial demonstrado. A notoriedade da pessoa retratada não equivale a renúncia — os direitos da personalidade são irrenunciáveis (CC, art. 11) —, e nenhuma notificação prévia é condição da ação indenizatória."
            }
          ]
        },
        {
          id: "mprj-civil-2",
          titulo: "Família e sucessões",
          questoes: [
            {
              id: "mp-civ-6", modo: "juris", fonte: "Súmula 594 do STJ",
              enunciado: "Promotor de Justiça toma conhecimento de que criança de sete anos, que reside com a mãe, nada recebe do pai a título de sustento. A comarca conta com Defensoria Pública em pleno funcionamento, os pais não foram destituídos do poder familiar e a criança não se encontra em nenhuma das situações de risco do art. 98 do ECA. À luz da jurisprudência sumulada do STJ:",
              alternativas: [
                "o Ministério Público tem legitimidade ativa para ajuizar a ação de alimentos em proveito da criança, independentemente do exercício do poder familiar ou de situação de risco",
                "a legitimidade é exclusiva da Defensoria Pública, restando ao Ministério Público apenas intervir no feito como fiscal da ordem jurídica",
                "o Ministério Público somente teria legitimidade se a criança estivesse em uma das situações de risco descritas no art. 98 do Estatuto da Criança e do Adolescente",
                "o Ministério Público somente teria legitimidade se os pais estivessem suspensos ou destituídos do poder familiar por decisão judicial",
                "a legitimidade do Ministério Público está condicionada à inexistência ou à comprovada ineficiência da Defensoria Pública na comarca em que tramitaria a ação"
              ],
              correta: 0,
              explicacao: "A Súmula 594 do STJ reconhece ao Ministério Público legitimidade ativa para ajuizar ação de alimentos em proveito de criança ou adolescente independentemente do exercício do poder familiar pelos pais, de o menor se encontrar nas situações de risco do art. 98 do ECA ou de qualquer questionamento sobre a existência ou a eficiência da Defensoria Pública na comarca. Trata-se de legitimidade concorrente e autônoma, fundada na proteção integral e na prioridade absoluta (CF, art. 227; ECA, art. 201). As demais alternativas criam condicionantes que a súmula expressamente afasta."
            },
            {
              id: "mp-civ-7", modo: "juris", fonte: "Súmula 358 do STJ",
              enunciado: "Filho que recebia pensão alimentícia fixada em ação de alimentos completa dezoito anos. O alimentante peticiona nos próprios autos requerendo a imediata cessação dos pagamentos. Conforme a jurisprudência sumulada do STJ:",
              alternativas: [
                "a exoneração opera-se de forma automática com a maioridade, bastando ao alimentante comunicar o fato ao juízo e cessar os depósitos mensais",
                "a pensão prorroga-se automaticamente até os vinte e quatro anos de idade sempre que o alimentando estiver matriculado em curso superior regular",
                "o cancelamento só pode ser postulado por meio de ação autônoma de exoneração de alimentos, sendo vedado o pedido nos mesmos autos",
                "a maioridade extingue de pleno direito o dever alimentar, que decorre exclusivamente do poder familiar e com ele se encerra",
                "o cancelamento não é automático: depende de decisão judicial, precedida de contraditório, ainda que o pedido seja processado nos próprios autos"
              ],
              correta: 4,
              explicacao: "A Súmula 358 do STJ dispõe que o cancelamento de pensão alimentícia de filho que atingiu a maioridade está sujeito a decisão judicial, mediante contraditório, ainda que nos próprios autos. A maioridade extingue o poder familiar, mas não o dever alimentar, que pode subsistir com fundamento no parentesco (CC, art. 1.694) enquanto perdurar a necessidade. Daí por que a exoneração não é automática nem exige ação autônoma: basta o incidente nos mesmos autos, assegurada ao alimentando a oportunidade de demonstrar que ainda necessita da verba."
            },
            {
              id: "mp-civ-8", modo: "lei", fonte: "CC, art. 1.584, §2º",
              enunciado: "Em ação de dissolução de união estável, os conviventes não chegam a acordo sobre a guarda do filho de seis anos, e a prova revela que ambos estão aptos ao exercício do poder familiar. Nos termos do Código Civil:",
              alternativas: [
                "será deferida a guarda unilateral à mãe, em razão da primazia materna que a lei reconhece nos primeiros anos de vida da criança",
                "será aplicada a guarda compartilhada, salvo se um dos genitores declarar ao magistrado que não deseja a guarda do filho",
                "a guarda compartilhada depende necessariamente de consenso entre os genitores, sendo-lhe vedada a imposição por decisão judicial",
                "será determinada a guarda alternada, com residência do filho dividida em períodos rigorosamente iguais na casa de cada genitor",
                "a guarda caberá ao genitor que ostentar melhores condições econômicas para prover o sustento material da criança"
              ],
              correta: 1,
              explicacao: "O art. 1.584, §2º, do CC é claro: não havendo acordo entre a mãe e o pai quanto à guarda do filho, e estando ambos aptos a exercer o poder familiar, será aplicada a guarda compartilhada, salvo se um dos genitores declarar ao magistrado que não deseja a guarda. A guarda compartilhada é, portanto, a regra, e pode ser imposta mesmo contra a vontade litigiosa das partes. Ela não se confunde com a guarda alternada: o que se compartilha é a responsabilidade e o exercício dos direitos e deveres do poder familiar, com divisão equilibrada — não necessariamente igual — do tempo de convívio. A melhor condição financeira, isoladamente, não define a guarda."
            },
            {
              id: "mp-civ-9", modo: "caso", fonte: "CC, art. 1.829, I",
              enunciado: "Falece pessoa casada sob o regime da comunhão parcial de bens, deixando dois filhos comuns, bens adquiridos onerosamente na constância do casamento e, ainda, um imóvel que recebera por herança antes de casar-se. Quanto à sucessão:",
              alternativas: [
                "o cônjuge é excluído da sucessão hereditária, pois a meação sobre os bens comuns esgota o seu direito sobre o acervo deixado pelo falecido",
                "o cônjuge concorre com os descendentes sobre a totalidade do acervo hereditário, somando-se essa concorrência à sua própria meação sobre os bens comuns",
                "o cônjuge não concorre com os descendentes, porque, na comunhão parcial, a concorrência só existe quando o falecido não deixa bens particulares",
                "o cônjuge concorre com os descendentes e, segundo o entendimento consolidado do STJ, essa concorrência recai apenas sobre os bens particulares do falecido",
                "o cônjuge só concorreria com os ascendentes do falecido, jamais com os descendentes, seja qual for o regime de bens adotado no casamento"
              ],
              correta: 3,
              explicacao: "O art. 1.829, I, do CC afasta a concorrência do cônjuge com os descendentes se o casamento se deu sob comunhão universal, separação obrigatória ou comunhão parcial em que o autor da herança NÃO tenha deixado bens particulares. Como aqui há bem particular (o imóvel herdado antes do casamento), o cônjuge concorre — e o entendimento consolidado do STJ é o de que a concorrência incide somente sobre esses bens particulares, ficando os bens comuns sujeitos apenas à meação, que não é herança. A alternativa que nega a concorrência inverte a exceção legal; a que estende a concorrência a todo o acervo ignora a distinção entre meação e herança."
            },
            {
              id: "mp-civ-10", modo: "juris", fonte: "Súmula 377 do STF; CC, art. 1.641, II",
              enunciado: "Casamento celebrado sob o regime da separação obrigatória de bens, imposto em razão da idade de um dos nubentes. Dissolvida a sociedade conjugal, discute-se a partilha de imóvel adquirido a título oneroso durante a convivência. De acordo com a súmula do STF sobre a matéria:",
              alternativas: [
                "nenhum bem se comunica, porque a separação obrigatória impõe a incomunicabilidade absoluta de todo o patrimônio dos cônjuges",
                "comunicam-se todos os bens do casal, presentes e futuros, como se o regime aplicável fosse o da comunhão universal de bens",
                "comunicam-se os bens adquiridos na constância do casamento, ainda que o regime tenha sido imposto por lei e não escolhido pelos nubentes",
                "comunicam-se apenas os bens recebidos por doação ou por herança pelos cônjuges no curso da sociedade conjugal, e não os adquiridos onerosamente",
                "a comunicação de qualquer bem depende de previsão expressa em pacto antenupcial celebrado por escritura pública antes das núpcias"
              ],
              correta: 2,
              explicacao: "A Súmula 377 do STF enuncia que, no regime de separação legal de bens, comunicam-se os adquiridos na constância do casamento — os chamados aquestos. A separação obrigatória do art. 1.641, II, do CC (nubente maior de setenta anos) não gera, portanto, incomunicabilidade absoluta. O entendimento consolidado do STJ acrescenta um requisito relevante: a comunicação alcança os bens adquiridos onerosamente desde que comprovado o esforço comum na aquisição, afastando-se a presunção automática. Vale lembrar que, no regime legal de separação obrigatória, o pacto antenupcial não é o que autoriza a comunicação dos aquestos."
            }
          ]
        }
      ]
    },

    /* ----------------------------------- BANCA II · PROCESSO CIVIL */
    {
      id: "mprj-pcivil",
      titulo: "CPC/2015 e a intervenção do Ministério Público",
      materia: "Direito Processual Civil",
      banca: "II",
      icone: "📐",
      descricao: "Normas fundamentais, competência, o MP como fiscal da ordem jurídica, tutela provisória e recursos.",
      licoes: [
        {
          id: "mprj-pcivil-1",
          titulo: "Normas fundamentais, competência e o MP no processo",
          questoes: [
            {
              id: "mp-pciv-1", modo: "lei", fonte: "CPC, arts. 9º e 10",
              enunciado: "Sobre o contraditório substancial e a vedação à decisão surpresa no CPC/2015, é correto afirmar que:",
              alternativas: [
                "a vedação à decisão surpresa cede diante das matérias de ordem pública, que o juiz conhece de ofício e decide independentemente de prévia oitiva das partes",
                "o contraditório prévio é absoluto no sistema do Código, que não admite nenhuma decisão proferida antes de ouvida a parte contrária",
                "o juiz não pode decidir com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de se manifestar, ainda que a matéria seja cognoscível de ofício",
                "a exigência de contraditório prévio vincula apenas o juízo de primeiro grau, pois os tribunais julgam a partir do que já foi debatido nos autos originários",
                "a concessão de tutela provisória de urgência sem a oitiva do réu é vedada, sendo o contraditório diferido admitido somente na ação monitória"
              ],
              correta: 2,
              explicacao: "O art. 10 do CPC proíbe ao juiz decidir, em grau algum de jurisdição, com base em fundamento sobre o qual não se deu às partes oportunidade de manifestação, e a parte final do dispositivo é justamente o que derruba a alternativa sobre matéria de ordem pública: a vedação vale 'ainda que se trate de matéria sobre a qual deva decidir de ofício'. Também não há restrição ao primeiro grau — a norma alcança todos os graus de jurisdição. E o contraditório prévio não é absoluto: o parágrafo único do art. 9º excepciona a tutela provisória de urgência, a tutela da evidência dos incisos II e III do art. 311 e a decisão do art. 701 (monitória)."
            },
            {
              id: "mp-pciv-2", modo: "lei", fonte: "CPC, arts. 178 e 698",
              enunciado: "Segundo o CPC/2015, o Ministério Público deve ser intimado para intervir como fiscal da ordem jurídica:",
              alternativas: [
                "nos litígios coletivos pela posse de terra rural ou urbana, hipótese expressamente arrolada entre as de intervenção obrigatória",
                "em todo processo em que a Fazenda Pública figure como parte, dado o interesse público inerente à presença do ente estatal",
                "em todas as ações possessórias, ainda que a disputa se trave entre dois particulares por imóvel urbano individual",
                "em toda ação de família, inclusive no divórcio consensual entre maiores e capazes em que não haja interesse de incapaz",
                "apenas quando o Ministério Público atuar como parte, pois o CPC/2015 suprimiu a figura do fiscal da ordem jurídica"
              ],
              correta: 0,
              explicacao: "O art. 178 lista três hipóteses de intervenção obrigatória como fiscal da ordem jurídica: interesse público ou social, interesse de incapaz e litígios COLETIVOS pela posse de terra rural ou urbana. Daí o erro de estender a intervenção a qualquer ação possessória individual entre particulares. O parágrafo único do art. 178 é expresso: a participação da Fazenda Pública não configura, por si só, hipótese de intervenção do MP. E o art. 698 restringe a intervenção nas ações de família aos casos em que haja interesse de incapaz, o que afasta o divórcio consensual entre maiores e capazes."
            },
            {
              id: "mp-pciv-3", modo: "juris", fonte: "CPC, art. 279, §§ 1º e 2º; entendimento consolidado do STJ",
              enunciado: "Processo em que havia interesse de incapaz tramitou até a sentença sem que o Ministério Público fosse intimado a intervir. De acordo com o CPC/2015 e o entendimento consolidado do STJ:",
              alternativas: [
                "a nulidade é absoluta e insanável, devendo ser decretada de imediato pelo juiz, independentemente de qualquer manifestação do órgão ministerial",
                "o vício é meramente formal e se convalida com o trânsito em julgado, sendo inútil a intimação posterior do Ministério Público",
                "a invalidação alcança todos os atos praticados desde a distribuição da inicial, ainda que a intervenção só fosse exigível em momento processual posterior",
                "cabe ao juiz decretar de plano a nulidade e só depois intimar o Ministério Público, a quem restará ratificar os atos que reputar aproveitáveis",
                "a nulidade só pode ser decretada após a intimação do Ministério Público, que se manifestará sobre a existência ou a inexistência de prejuízo"
              ],
              correta: 4,
              explicacao: "O art. 279, caput, comina nulidade quando o membro do Ministério Público não é intimado a acompanhar feito em que deva intervir, mas o §2º condiciona o reconhecimento do vício à prévia intimação do Parquet, que se pronunciará sobre a existência ou não de prejuízo — é a positivação, quanto ao MP, do princípio de que não há nulidade sem prejuízo, aplicado de forma consolidada pelo STJ. Por isso é errado decretar a nulidade de ofício e de imediato, sem ouvir o órgão. Também é equivocado invalidar o processo desde a distribuição: o §1º manda invalidar os atos praticados a partir do momento em que o membro deveria ter sido intimado."
            },
            {
              id: "mp-pciv-4", modo: "lei", fonte: "CPC, art. 180, caput e §2º",
              enunciado: "A respeito da contagem dos prazos processuais do Ministério Público no processo civil:",
              alternativas: [
                "o prazo em dobro alcança apenas as manifestações do Ministério Público como fiscal da ordem jurídica, não se estendendo à sua atuação como parte",
                "o prazo conta-se em dobro a partir da intimação pessoal, salvo quando a lei estabelecer, de forma expressa, prazo próprio para o Ministério Público",
                "o prazo é contado em dobro em qualquer hipótese, inclusive quando lei especial fixar prazo próprio para o órgão ministerial no procedimento",
                "o prazo é simples, pois o CPC/2015 extinguiu a prerrogativa da contagem em dobro para o Ministério Público, mantendo-a só para a Defensoria",
                "o prazo em dobro depende de requerimento do membro do Ministério Público e de deferimento expresso pelo juiz da causa em cada processo"
              ],
              correta: 1,
              explicacao: "O art. 180, caput, garante ao Ministério Público prazo em dobro para manifestar-se nos autos, com início a partir da intimação pessoal, sem distinguir entre atuação como parte e como fiscal da ordem jurídica — é prerrogativa legal, que não depende de pedido nem de deferimento judicial. O ponto de corte é o §2º: não se aplica a contagem em dobro quando a lei estabelecer, de forma expressa, prazo próprio para o Ministério Público. Vale lembrar ainda o §1º: findo o prazo sem parecer, o juiz requisita os autos e dá andamento ao processo."
            },
            {
              id: "mp-pciv-5", modo: "juris", fonte: "Súmula 33 do STJ; CPC, arts. 64, §1º, e 65",
              enunciado: "Ação de cobrança é ajuizada em foro diverso do domicílio do réu, que contesta o pedido sem nada alegar sobre competência. Ao sentenciar, o juiz cogita declarar-se incompetente. Segundo a jurisprudência sumulada do STJ:",
              alternativas: [
                "deve declinar de ofício, pois toda regra de competência territorial é de ordem pública e, portanto, improrrogável",
                "deve remeter os autos ao tribunal para que dirima conflito de competência, ainda que nenhum outro juízo o tenha suscitado",
                "deve anular o processo desde a citação, por se tratar de vício insanável relativo à competência do juízo",
                "não pode declará-la de ofício: a incompetência relativa se prorroga se o réu não a alegar em preliminar de contestação",
                "pode declará-la de ofício até a sentença, momento após o qual a competência relativa se considera definitivamente prorrogada"
              ],
              correta: 3,
              explicacao: "A Súmula 33 do STJ é categórica: a incompetência relativa não pode ser declarada de ofício. O foro do domicílio do réu é regra de competência territorial, logo relativa, e o art. 65 do CPC determina que ela se prorroga se o réu não alegar a incompetência em preliminar de contestação. O regime é o oposto do da incompetência ABSOLUTA (matéria, pessoa e função), que, na forma do art. 64, §1º, pode ser alegada em qualquer tempo e grau de jurisdição e deve ser declarada de ofício. Não há aqui conflito de competência nem nulidade a decretar."
            }
          ]
        },
        {
          id: "mprj-pcivil-2",
          titulo: "Tutela provisória, sentença e recursos",
          questoes: [
            {
              id: "mp-pciv-6", modo: "lei", fonte: "CPC, arts. 300 e 311",
              enunciado: "A tutela da evidência disciplinada no art. 311 do CPC/2015 caracteriza-se por:",
              alternativas: [
                "prescindir da demonstração de perigo de dano ou de risco ao resultado útil do processo, bastando a evidência do direito nas hipóteses legalmente previstas",
                "exigir, cumulativamente, a probabilidade do direito e o perigo de dano, nos mesmos moldes em que se concede a tutela de urgência",
                "poder ser concedida liminarmente em todas as suas hipóteses, inclusive na de abuso do direito de defesa ou manifesto propósito protelatório",
                "depender sempre da prestação de caução real ou fidejussória pelo requerente, como contracautela obrigatória de eventuais danos ao réu",
                "ter natureza estritamente cautelar, limitando-se a assegurar o resultado útil do processo sem jamais satisfazer o direito afirmado"
              ],
              correta: 0,
              explicacao: "O art. 311 é expresso ao dizer que a tutela da evidência será concedida INDEPENDENTEMENTE da demonstração de perigo de dano ou de risco ao resultado útil do processo — esse é exatamente o traço que a distingue da tutela de urgência do art. 300, que exige probabilidade do direito E perigo de dano. Confundir os dois requisitos é o distrator clássico. A concessão liminar não é regra geral: o parágrafo único do art. 311 só a autoriza nas hipóteses dos incisos II e III. E a tutela da evidência é satisfativa, não cautelar."
            },
            {
              id: "mp-pciv-7", modo: "caso", fonte: "CPC, art. 304, caput e §§ 1º, 2º, 5º e 6º",
              enunciado: "Concedida tutela antecipada requerida em caráter antecedente, o réu deixa transcorrer in albis o prazo do agravo de instrumento. Nesse caso:",
              alternativas: [
                "a decisão transita materialmente em julgado, tornando-se imutável e indiscutível para ambas as partes em qualquer processo futuro",
                "o processo prossegue normalmente rumo ao julgamento do pedido principal, incumbindo ao autor apenas aditar a petição inicial",
                "a tutela se torna estável e o processo é extinto, podendo qualquer das partes, em até dois anos, demandar para revê-la, reformá-la ou invalidá-la",
                "a estabilização não se opera, pois depende de concordância expressa do réu manifestada nos autos após a intimação da decisão",
                "a decisão perde a eficácia se o autor não propuser ação principal autônoma no prazo de trinta dias contados da efetivação da medida"
              ],
              correta: 2,
              explicacao: "Pelo art. 304, caput e §1º, a tutela antecipada antecedente torna-se estável se não interposto o respectivo recurso, e o processo é extinto. O §2º faculta a qualquer das partes demandar a outra para rever, reformar ou invalidar a tutela estabilizada, direito que se extingue em dois anos contados da ciência da decisão extintiva (§5º). Atenção ao §6º: a decisão estabilizada NÃO faz coisa julgada — sua estabilidade só é afastada por decisão proferida na ação prevista no §2º. Já a perda de eficácia por falta de formulação do pedido principal em trinta dias é regime da tutela cautelar antecedente, não da antecipada estabilizada."
            },
            {
              id: "mp-pciv-8", modo: "juris", fonte: "CPC, arts. 1.009, §1º, e 1.015; entendimento consolidado do STJ em recurso repetitivo",
              enunciado: "Sobre o cabimento do agravo de instrumento contra decisões interlocutórias proferidas na fase de conhecimento, à luz do CPC/2015 e do entendimento consolidado do STJ:",
              alternativas: [
                "o rol do art. 1.015 é meramente exemplificativo, cabendo agravo de instrumento contra qualquer decisão interlocutória proferida no processo",
                "as decisões interlocutórias não agraváveis precluem de imediato, não podendo ser impugnadas em nenhum outro momento processual",
                "o agravo de instrumento cabe apenas na liquidação, no cumprimento de sentença, na execução e no inventário, jamais na fase de conhecimento",
                "o agravo de instrumento foi extinto pelo CPC/2015, subsistindo somente o agravo interno e o agravo em recurso especial ou extraordinário",
                "o rol é taxativo, mas comporta mitigação: cabe o agravo quando verificada a urgência decorrente da inutilidade do julgamento da questão no recurso de apelação"
              ],
              correta: 4,
              explicacao: "O STJ, em julgamento de recurso repetitivo, firmou a tese da taxatividade mitigada: o rol do art. 1.015 é taxativo, mas admite agravo de instrumento quando verificada a urgência decorrente da inutilidade do julgamento da questão apenas na apelação. Não se trata, portanto, nem de rol exemplificativo nem de rol rígido e fechado. As interlocutórias não agraváveis não precluem: o art. 1.009, §1º, manda suscitá-las em preliminar de apelação ou nas contrarrazões. E o parágrafo único do art. 1.015 amplia o cabimento na liquidação, no cumprimento de sentença, na execução e no inventário, sem excluir a fase de conhecimento."
            },
            {
              id: "mp-pciv-9", modo: "juris", fonte: "Súmula 7 do STJ",
              enunciado: "Em recurso especial, a parte sustenta que o tribunal de origem apreciou mal a prova pericial e pede a reapreciação do conjunto probatório dos autos. Segundo a jurisprudência sumulada do STJ, o recurso:",
              alternativas: [
                "é admissível, pois a apreciação da prova pericial constitui, por sua natureza técnica, questão exclusivamente de direito",
                "é inadmissível, pois a pretensão de simples reexame de prova não enseja recurso especial",
                "é admissível desde que o recorrente demonstre a repercussão geral da questão probatória debatida na origem",
                "é admissível sempre que a matéria houver sido prequestionada, sendo irrelevante a natureza probatória da controvérsia",
                "deve ser convertido em recurso extraordinário e remetido ao Supremo Tribunal Federal para o exame do quadro fático"
              ],
              correta: 1,
              explicacao: "A Súmula 7 do STJ enuncia que a pretensão de simples reexame de prova não enseja recurso especial, cuja função é uniformizar a interpretação da lei federal, e não rejulgar fatos. O prequestionamento é requisito de admissibilidade, mas não supera o óbice da Súmula 7 quando o pedido é de reavaliação do acervo probatório. Repercussão geral é requisito próprio do recurso extraordinário, não do especial. Registre-se a distinção clássica: a REVALORAÇÃO jurídica de prova incontroversa é admitida; o REEXAME do conjunto probatório, não."
            },
            {
              id: "mp-pciv-10", modo: "juris", fonte: "Súmulas 282 e 356 do STF; CPC, art. 1.025",
              enunciado: "O acórdão recorrido silenciou sobre a questão constitucional suscitada pela parte, que, sem opor embargos de declaração, interpôs desde logo recurso extraordinário. Conforme a jurisprudência sumulada do STF:",
              alternativas: [
                "o recurso é admissível, pois o prequestionamento se presume sempre que a matéria houver sido suscitada nas razões de apelação",
                "o recurso é admissível, incumbindo ao tribunal superior suprir de ofício a omissão verificada no acórdão recorrido",
                "a omissão do acórdão configura, por si só, negativa de prestação jurisdicional, o que dispensa qualquer providência da parte",
                "falta o requisito do prequestionamento, pois o ponto omisso sobre o qual não foram opostos embargos de declaração não pode ser objeto do recurso",
                "o prequestionamento é exigência exclusiva do recurso especial, aferindo-se o extraordinário apenas pela repercussão geral da matéria"
              ],
              correta: 3,
              explicacao: "A Súmula 356 do STF é direta: o ponto omisso da decisão, sobre o qual não foram opostos embargos de declaração, não pode ser objeto de recurso extraordinário, por faltar o requisito do prequestionamento. No mesmo sentido, a Súmula 282 do STF exige que a questão tenha sido ventilada na decisão recorrida. O caminho correto seria opor embargos de declaração — e o art. 1.025 do CPC/2015 consagra o prequestionamento ficto, considerando incluídos no acórdão os elementos suscitados pelo embargante ainda que os embargos sejam inadmitidos ou rejeitados. O prequestionamento é requisito comum ao recurso extraordinário e ao especial."
            }
          ]
        }
      ]
    },

    /* -------------------------------------- BANCA II · EMPRESARIAL */
    {
      id: "mprj-emp",
      titulo: "Sociedades, falência e recuperação",
      materia: "Direito Empresarial",
      banca: "II",
      icone: "💼",
      descricao: "Peso 2 no edital: uma lição concentrada na Lei 11.101/05 e nos tipos societários.",
      licoes: [
        {
          id: "mprj-emp-1",
          titulo: "Sociedades, falência e recuperação",
          questoes: [
            {
              id: "mp-emp-1", modo: "lei", fonte: "Lei 11.101/2005, art. 49, §3º",
              enunciado: "Instituição financeira é titular de crédito garantido por alienação fiduciária sobre máquina que constitui bem de capital essencial à atividade de sociedade empresária cujo processamento da recuperação judicial foi deferido. À luz da Lei 11.101/2005:",
              alternativas: [
                "o crédito submete-se aos efeitos da recuperação judicial, porque a lei somente exclui de seus efeitos os créditos de natureza tributária e aqueles constituídos após o ajuizamento do pedido",
                "o crédito não se submete aos efeitos da recuperação judicial e, por isso, o credor pode retirar de imediato do estabelecimento os bens de capital essenciais à atividade da devedora",
                "o crédito não se submete à recuperação judicial, prevalecendo o direito de propriedade do fiduciário, vedadas a venda e a retirada dos bens de capital essenciais durante o prazo de suspensão",
                "o crédito submete-se aos efeitos da recuperação judicial e será alocado na classe dos titulares de garantia real, votando nessa condição na assembleia geral de credores",
                "o crédito não se submete aos efeitos da recuperação judicial, mas o credor fiduciário fica obrigado a habilitar-se no quadro geral de credores na qualidade de quirografário"
              ],
              correta: 2,
              explicacao: "O art. 49, §3º, da Lei 11.101/2005 exclui dos efeitos da recuperação judicial o credor proprietário fiduciário de bens móveis ou imóveis, o arrendador mercantil, o proprietário ou promitente vendedor de imóvel com cláusula de irrevogabilidade e o proprietário em contrato de venda com reserva de domínio: prevalecem o direito de propriedade sobre a coisa e as condições contratuais. Há, contudo, uma trava expressa: durante o prazo de suspensão do art. 6º, §4º (180 dias, prorrogável uma única vez por igual período), não se permite a venda nem a retirada do estabelecimento do devedor dos bens de capital essenciais à atividade empresarial. Justamente por não se sujeitar à recuperação, esse credor não é classificado em classe alguma nem vota na assembleia."
            },
            {
              id: "mp-emp-2", modo: "caso", fonte: "Lei 11.101/2005, art. 94, I e §1º",
              enunciado: "Credor titular de duplicata vencida e regularmente protestada, no valor equivalente a 25 salários mínimos, pretende requerer a falência da sociedade devedora, que não pagou nem depositou a quantia. Outro credor, com título executivo protestado equivalente a 20 salários mínimos, quer aderir ao pedido. Nesse cenário:",
              alternativas: [
                "os credores podem reunir-se em litisconsórcio para perfazer o piso legal, pois a impontualidade autoriza o pedido quando a soma dos títulos protestados ultrapassa 40 salários mínimos",
                "o pedido é inviável, pois o piso de 40 salários mínimos precisa ser alcançado por título ou títulos de um único credor, sendo vedada a formação de litisconsórcio para esse fim",
                "o pedido independe de qualquer patamar mínimo de valor, bastando a impontualidade injustificada e o protesto do título para autorizar a decretação da quebra da devedora",
                "o pedido depende da demonstração prévia da insolvência real da devedora, mediante prova contábil de que o passivo exigível supera o ativo apurado em balanço",
                "o protesto do título é dispensável na hipótese de duplicata, bastando a notificação extrajudicial da devedora para que se caracterize a impontualidade injustificada"
              ],
              correta: 0,
              explicacao: "O art. 94, I, da Lei 11.101/2005 autoriza a falência de quem, sem relevante razão de direito, não paga no vencimento obrigação líquida materializada em título ou títulos executivos protestados cuja soma ultrapasse o equivalente a 40 salários mínimos na data do pedido. O §1º do mesmo artigo permite expressamente que os credores se reúnam em litisconsórcio para perfazer esse limite mínimo — no caso, 25 + 20 = 45 salários mínimos. O sistema brasileiro adota a insolvência presumida (impontualidade, execução frustrada e atos de falência do art. 94, I a III), e não a insolvência real apurada em balanço."
            },
            {
              id: "mp-emp-3", modo: "lei", fonte: "Lei 11.101/2005, art. 83, I e VI (redação da Lei 14.112/2020)",
              enunciado: "Na falência, quanto à classificação do crédito derivado da legislação do trabalho, é correto afirmar que ele:",
              alternativas: [
                "é integralmente extraconcursal e deve ser satisfeito antes de qualquer outro crédito do falido, seja qual for o seu montante por credor",
                "prefere ao crédito com garantia real apenas até 100 salários mínimos por credor, sendo o valor excedente classificado como crédito subordinado",
                "está limitado a 150 salários mínimos por credor, e a parcela que exceder esse teto passa a ser classificada como crédito com privilégio geral",
                "concorre em igualdade de condições com os créditos tributários, rateando-se proporcionalmente entre ambos o produto da arrecadação dos bens",
                "ocupa o primeiro lugar da ordem concursal, limitado a 150 salários mínimos por credor, e o saldo que exceder esse teto é classificado como quirografário"
              ],
              correta: 4,
              explicacao: "O art. 83, I, da Lei 11.101/2005 coloca em primeiro lugar na ordem de classificação os créditos derivados da legislação do trabalho, limitados a 150 salários mínimos por credor, e os decorrentes de acidentes de trabalho — estes últimos sem qualquer teto. O saldo trabalhista que ultrapassar os 150 salários mínimos não desaparece nem vira privilégio geral: é reclassificado como quirografário (art. 83, VI). Vêm depois os créditos com garantia real, até o limite do valor do bem gravado (inciso II), e só então os tributários (inciso III), de modo que não há rateio paritário entre trabalhistas e Fisco. Extraconcursais são os créditos do art. 84, pagos antes dos do art. 83."
            },
            {
              id: "mp-emp-4", modo: "juris", fonte: "Súmula 581 do STJ; Lei 11.101/2005, art. 49, §1º",
              enunciado: "Deferido o processamento da recuperação judicial da devedora principal, o credor pretende prosseguir na execução que move contra o avalista do título. De acordo com a jurisprudência sumulada do STJ:",
              alternativas: [
                "a execução deve ser extinta, pois a novação produzida pela homologação do plano alcança os coobrigados e libera as garantias fidejussórias prestadas por terceiros",
                "a execução prossegue, pois a recuperação judicial do devedor principal não induz suspensão nem extinção das ações ajuizadas contra terceiros devedores solidários ou coobrigados",
                "a execução permanece suspensa enquanto perdurar o prazo legal de suspensão, retomando o seu curso apenas depois de esgotado esse período em favor da recuperanda",
                "a execução deve ser remetida ao juízo da recuperação judicial, único competente para decidir sobre qualquer ato de constrição do patrimônio do avalista da recuperanda",
                "a execução só pode prosseguir se o plano de recuperação aprovado houver ressalvado expressamente a manutenção das garantias prestadas por terceiros coobrigados"
              ],
              correta: 1,
              explicacao: "A Súmula 581 do STJ é clara: a recuperação judicial do devedor principal não impede o prosseguimento das execuções nem induz suspensão ou extinção de ações ajuizadas contra terceiros devedores solidários ou coobrigados em geral, por garantia cambial, real ou fidejussória. O fundamento legal é o art. 49, §1º, da Lei 11.101/2005, pelo qual os credores conservam seus direitos e privilégios contra os coobrigados, fiadores e obrigados de regresso. A novação do art. 59 é sui generis e não extingue as garantias prestadas por terceiros; e a suspensão do art. 6º atinge apenas as ações e execuções contra o próprio devedor em recuperação."
            },
            {
              id: "mp-emp-5", modo: "juris", fonte: "Súmula 480 do STJ",
              enunciado: "A respeito da competência do juízo da recuperação judicial, conforme entendimento sumulado do STJ:",
              alternativas: [
                "o juízo da recuperação judicial é universal e atrai para si todas as execuções contra a recuperanda, inclusive as execuções fiscais, que nele devem ser obrigatoriamente reunidas",
                "o juízo da recuperação judicial é competente para decidir sobre a constrição de quaisquer bens do devedor, estejam ou não abrangidos pelo plano de recuperação aprovado",
                "a competência do juízo da recuperação judicial cessa com a concessão da recuperação, passando ao juízo da execução decidir sobre atos de constrição de bens essenciais",
                "o juízo da recuperação judicial não é competente para decidir sobre a constrição de bens não abrangidos pelo plano de recuperação da empresa, ainda que titularizados pela recuperanda",
                "compete ao juízo trabalhista, e não ao juízo da recuperação judicial, determinar a alienação de bens da recuperanda para a satisfação de créditos de qualquer natureza"
              ],
              correta: 3,
              explicacao: "A Súmula 480 do STJ enuncia que o juízo da recuperação judicial não é competente para decidir sobre a constrição de bens não abrangidos pelo plano de recuperação da empresa — a atração para aquele juízo pressupõe que o bem esteja afetado ao soerguimento da atividade. Diferentemente da falência, a recuperação judicial não instaura juízo universal pleno: as execuções fiscais, por exemplo, não se suspendem com o deferimento do processamento, embora o juízo da recuperação possa determinar a substituição de atos de constrição que recaiam sobre bens de capital essenciais à atividade (Lei 11.101/2005, com a redação da Lei 14.112/2020). Por isso também é equivocado afirmar que ao juízo trabalhista caberia alienar bens da recuperanda."
            }
          ]
        }
      ]
    },

    /* ---------------------------------- BANCA III · CONSTITUCIONAL */
    {
      id: "mprj-const",
      titulo: "CF/88: direitos, Estado e controle de constitucionalidade",
      materia: "Direito Constitucional",
      banca: "III",
      icone: "📗",
      descricao: "Direitos fundamentais, repartição de competências, controle concentrado e o desenho do MP nos arts. 127 a 130.",
      licoes: [
        {
          id: "mprj-const-1",
          titulo: "Direitos fundamentais e organização do Estado",
          questoes: [
            {
              id: "mp-const-1", modo: "lei", fonte: "CF, art. 3º, III (c/c arts. 1º e 4º)",
              enunciado: "Constitui objetivo fundamental da República Federativa do Brasil, nos exatos termos do art. 3º da Constituição de 1988:",
              alternativas: [
                "a dignidade da pessoa humana, valor que a Constituição arrola entre os pilares sobre os quais se assenta o Estado Democrático de Direito brasileiro",
                "a prevalência dos direitos humanos, diretriz que a Constituição impõe à atuação do País no plano das relações internacionais",
                "o pluralismo político, elemento que a Constituição enumera ao lado da soberania e da cidadania já no seu artigo inaugural",
                "erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais, meta que o constituinte projetou para o futuro",
                "os valores sociais do trabalho e da livre iniciativa, binômio que a Constituição enuncia como base do próprio Estado brasileiro"
              ],
              correta: 3,
              explicacao: "O art. 3º da CF/88 traz os OBJETIVOS fundamentais, sempre redigidos com verbos no infinitivo (construir, garantir, erradicar, promover) porque são metas programáticas a alcançar; o inciso III é exatamente erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais. Dignidade da pessoa humana, pluralismo político e valores sociais do trabalho e da livre iniciativa são FUNDAMENTOS (art. 1º, III, V e IV), redigidos como substantivos, isto é, bases já existentes do Estado. Prevalência dos direitos humanos é princípio que rege as RELAÇÕES INTERNACIONAIS (art. 4º, II). Essa troca fundamento/objetivo/princípio internacional é o distrator mais recorrente da matéria."
            },
            {
              id: "mp-const-2", modo: "caso", fonte: "CF, art. 5º, XI",
              enunciado: "Policiais civis, munidos de mandado judicial de busca e apreensão domiciliar regularmente expedido, chegam à residência do investigado às 22h e pretendem cumpri-lo de imediato. À luz do art. 5º, XI, da Constituição:",
              alternativas: [
                "o ingresso é legítimo, porque a ordem judicial escrita e fundamentada afasta a inviolabilidade do domicílio em qualquer horário",
                "o ingresso por determinação judicial só se admite durante o dia; à noite, apenas flagrante delito, desastre ou prestação de socorro autorizam a entrada",
                "o ingresso é legítimo à noite desde que acompanhado de duas testemunhas e de representante do Ministério Público que presencie a diligência",
                "o ingresso depende sempre do consentimento expresso do morador, pois nem mesmo a ordem judicial supera a inviolabilidade do domicílio",
                "o ingresso é vedado em qualquer horário, salvo se o crime investigado for hediondo ou equiparado, hipótese em que a lei o autoriza"
              ],
              correta: 1,
              explicacao: "O art. 5º, XI, da CF admite o ingresso no domicílio sem consentimento do morador em quatro situações, mas apenas três delas valem a qualquer hora: flagrante delito, desastre e prestação de socorro. A quarta hipótese — determinação judicial — está expressamente restrita ao período diurno. Logo, o mandado existente não legitima a entrada às 22h: os policiais devem aguardar o dia seguinte, salvo se surgir alguma das hipóteses de ingresso a qualquer tempo. Vale lembrar que, mesmo no flagrante, o STF exige fundadas razões, aferíveis a posteriori, que justifiquem a entrada, sob pena de nulidade da prova."
            },
            {
              id: "mp-const-3", modo: "juris", fonte: "Súmulas 629 e 630 do STF; CF, art. 5º, LXX, b",
              enunciado: "Entidade de classe de âmbito nacional impetra mandado de segurança coletivo em favor de parcela de seus associados, sem juntar autorização expressa deles. Conforme a jurisprudência sumulada do Supremo Tribunal Federal:",
              alternativas: [
                "a impetração é inviável, pois o mandado de segurança coletivo exige autorização expressa e individualizada de cada associado beneficiado",
                "a impetração é inviável, porque a entidade de classe só ostenta legitimidade quando a pretensão interessa à totalidade da categoria representada",
                "a impetração é válida: a legitimação independe de autorização dos associados e subsiste ainda que a pretensão interesse a apenas parte da categoria",
                "a impetração é válida, mas a entidade atua como mera representante, exigindo-se prévia deliberação em assembleia geral convocada para esse fim",
                "a impetração é inviável, uma vez que o mandado de segurança coletivo é remédio privativo de partido político com representação no Congresso Nacional"
              ],
              correta: 2,
              explicacao: "Súmula 629 do STF: a impetração de mandado de segurança coletivo por entidade de classe em favor dos associados independe da autorização destes. Súmula 630 do STF: a entidade de classe tem legitimação para o mandado de segurança ainda quando a pretensão veiculada interesse apenas a uma parte da respectiva categoria. A razão é que no writ coletivo a entidade age como substituta processual (legitimação extraordinária), e não como representante — daí a desnecessidade de autorização ou de assembleia. O art. 5º, LXX, b, da CF também desmente a alternativa que reserva o remédio aos partidos políticos, pois estes são apenas uma das duas alíneas do dispositivo."
            },
            {
              id: "mp-const-4", modo: "lei", fonte: "CF, art. 24, §§ 1º a 4º",
              enunciado: "No campo da competência legislativa concorrente, o Estado editou lei disciplinando integralmente determinada matéria diante da inexistência de normas gerais federais. Sobrevindo, depois, lei federal de normas gerais em sentido contrário, a lei estadual:",
              alternativas: [
                "é integralmente revogada, pois a lei federal prevalece sobre a estadual em razão da hierarquia existente entre os entes da Federação",
                "torna-se inconstitucional desde a origem, já que o Estado jamais poderia ter legislado sobre matéria atribuída à União",
                "permanece válida e plenamente eficaz, porque a competência legislativa plena já exercida não é atingida por lei federal superveniente",
                "é recepcionada como norma federal de caráter supletivo, passando a vigorar em todo o território nacional até nova deliberação do Congresso",
                "tem a sua eficácia suspensa naquilo que contrariar a lei federal de normas gerais, sem que isso configure revogação"
              ],
              correta: 4,
              explicacao: "Na competência concorrente, cabe à União editar normas gerais (art. 24, §1º) e aos Estados suplementá-las (§2º); inexistindo lei federal sobre normas gerais, o Estado exerce competência legislativa plena (§3º). O §4º é literal: a superveniência de lei federal sobre normas gerais SUSPENDE A EFICÁCIA da lei estadual, no que lhe for contrário. Não há revogação — se a lei federal for depois revogada, a estadual recupera eficácia. Trocar suspensão de eficácia por revogação, ou invocar hierarquia entre entes federativos (que não existe), são os erros clássicos cobrados no tema."
            },
            {
              id: "mp-const-5", modo: "juris", fonte: "Súmula Vinculante 25; CF, art. 5º, LXVII e §3º",
              enunciado: "Tratado internacional de direitos humanos foi incorporado ao ordenamento brasileiro sem observância do rito do art. 5º, §3º, da Constituição. Segundo o entendimento firmado pelo Supremo Tribunal Federal:",
              alternativas: [
                "o tratado tem status supralegal, situando-se abaixo da Constituição e acima da legislação ordinária, que resta paralisada no que lhe for contrária",
                "o tratado ingressa com estatura de lei ordinária, de modo que a legislação interna anterior conflitante continua a produzir todos os seus efeitos",
                "o tratado tem status de emenda constitucional, pois todo pacto de direitos humanos é materialmente constitucional, independentemente do rito de aprovação",
                "o tratado é inconstitucional na parte em que restringe direito expressamente ressalvado pelo texto constitucional originário, devendo ser denunciado",
                "o tratado é inaplicável enquanto não aprovado por três quintos dos membros de cada Casa do Congresso Nacional, em dois turnos de votação"
              ],
              correta: 0,
              explicacao: "O STF adotou a tese da SUPRALEGALIDADE: tratados de direitos humanos aprovados sem o rito do art. 5º, §3º (três quintos, dois turnos, nas duas Casas) situam-se acima das leis ordinárias e abaixo da Constituição, paralisando a eficácia da legislação infraconstitucional conflitante. Foi esse raciocínio que levou à Súmula Vinculante 25, segundo a qual é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito: o art. 5º, LXVII, da CF apenas autorizava a prisão, e a legislação que a disciplinava perdeu aplicabilidade diante do Pacto de São José da Costa Rica. Só os tratados aprovados pelo rito do §3º equivalem a emenda constitucional — não todos eles."
            }
          ]
        },
        {
          id: "mprj-const-2",
          titulo: "Controle de constitucionalidade e o MP na Constituição",
          questoes: [
            {
              id: "mp-const-6", modo: "juris", fonte: "CF, art. 103; jurisprudência do STF sobre pertinência temática",
              enunciado: "A respeito da legitimidade ativa para a propositura de ação direta de inconstitucionalidade perante o Supremo Tribunal Federal:",
              alternativas: [
                "o Procurador-Geral de Justiça é legitimado, na condição de chefe do Ministério Público estadual, para impugnar leis federais e estaduais",
                "a confederação sindical e a entidade de classe de âmbito nacional são legitimadas universais, dispensada qualquer demonstração de pertinência temática",
                "o Governador de Estado é legitimado, mas dele se exige a demonstração de pertinência temática entre a norma impugnada e os interesses do ente que chefia",
                "qualquer partido político devidamente registrado é legitimado, ainda que não conte com representação em nenhuma das Casas do Congresso Nacional",
                "o Conselho Federal da Ordem dos Advogados do Brasil é legitimado somente em matérias atinentes ao exercício da advocacia e às prerrogativas dos advogados"
              ],
              correta: 2,
              explicacao: "O art. 103 da CF lista taxativamente os legitimados, e o STF os divide em universais (Presidente da República, Mesas do Senado e da Câmara, Procurador-Geral da República, Conselho Federal da OAB e partido político com representação no Congresso) e especiais, que precisam demonstrar pertinência temática: Governador de Estado ou do DF, Mesa de Assembleia Legislativa ou da Câmara Legislativa e confederação sindical ou entidade de classe de âmbito nacional. Daí o erro das alternativas que dispensam a pertinência das entidades de classe e que restringem a do Conselho Federal da OAB, legitimado universal. O Procurador-Geral de JUSTIÇA não figura no art. 103 — apenas o Procurador-Geral da República (inciso VI); o PGJ pode, contudo, ser legitimado pela Constituição estadual para a representação de inconstitucionalidade estadual. Partido sem representação no Congresso não tem legitimidade (inciso VIII)."
            },
            {
              id: "mp-const-7", modo: "juris", fonte: "Súmula Vinculante 10; CF, art. 97",
              enunciado: "Órgão fracionário de tribunal, sem declarar expressamente a inconstitucionalidade de lei, afasta a sua incidência ao caso concreto por reputá-la incompatível com a Constituição. Segundo a jurisprudência vinculante do Supremo Tribunal Federal:",
              alternativas: [
                "a decisão viola a cláusula de reserva de plenário, ainda que a inconstitucionalidade não tenha sido declarada de modo expresso",
                "a decisão é válida, pois a reserva de plenário só incide quando há declaração expressa de inconstitucionalidade na parte dispositiva do acórdão",
                "a decisão é válida, porquanto a cláusula de reserva de plenário se dirige exclusivamente ao Supremo Tribunal Federal e aos demais tribunais superiores",
                "a decisão é nula apenas se a parte prejudicada houver suscitado formalmente o incidente de inconstitucionalidade antes do julgamento pelo órgão fracionário",
                "a decisão é válida, uma vez que a reserva de plenário não alcança o controle difuso, ficando restrita às ações próprias do controle concentrado"
              ],
              correta: 0,
              explicacao: "Súmula Vinculante 10: viola a cláusula de reserva de plenário (CF, art. 97) a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do poder público, afasta sua incidência, no todo ou em parte. O enunciado combate justamente a chamada declaração de inconstitucionalidade disfarçada. A reserva de plenário é exigência do controle DIFUSO exercido por tribunais (turma, câmara ou seção deve remeter a questão ao pleno ou ao órgão especial), e não do controle concentrado, o que derruba as alternativas que a restringem aos tribunais superiores ou às ações diretas. Não se trata de nulidade condicionada à provocação da parte: a matéria é de ordem pública."
            },
            {
              id: "mp-const-8", modo: "lei", fonte: "CF, art. 128, §5º, I e II",
              enunciado: "Acerca das garantias e das vedações constitucionais dos membros do Ministério Público:",
              alternativas: [
                "a vitaliciedade é adquirida após três anos de efetivo exercício, período em que a perda do cargo depende de processo administrativo disciplinar",
                "a inamovibilidade é absoluta, não comportando remoção sequer por motivo de interesse público reconhecido pelo órgão colegiado competente",
                "é vedado ao membro do Ministério Público o exercício do magistério, ainda que em caráter eventual e fora do horário normal de expediente",
                "a inamovibilidade cede por motivo de interesse público, mediante decisão do órgão colegiado competente, pelo voto da maioria absoluta e assegurada ampla defesa",
                "é permitido ao membro do Ministério Público exercer a advocacia fora das atribuições do órgão em que atua, desde que não litigue contra a Fazenda Pública"
              ],
              correta: 3,
              explicacao: "O art. 128, §5º, I, b, da CF assegura a inamovibilidade, mas a excepciona expressamente por motivo de interesse público, mediante decisão do órgão colegiado competente do Ministério Público, pelo voto da maioria absoluta de seus membros, assegurada ampla defesa — garantia relativa, portanto. A vitaliciedade é adquirida após DOIS anos de exercício, e a partir dela a perda do cargo só ocorre por sentença judicial transitada em julgado (alínea a). Quanto às vedações do inciso II, é proibido exercer a advocacia (alínea b) e qualquer outra função pública, SALVO UMA DE MAGISTÉRIO (alínea d) — daí o erro das alternativas que liberam a advocacia e proíbem o magistério."
            },
            {
              id: "mp-const-9", modo: "lei", fonte: "Lei 9.882/99, art. 4º, §1º; Lei 9.868/99, art. 27",
              enunciado: "Sobre a arguição de descumprimento de preceito fundamental e a modulação dos efeitos das decisões proferidas no controle concentrado:",
              alternativas: [
                "a arguição é cabível ainda que exista outro meio eficaz de sanar a lesividade, dada a amplitude dos preceitos fundamentais que ela protege",
                "a arguição só é admitida quando inexistir outro meio eficaz de sanar a lesividade, e a modulação de efeitos reclama o voto de dois terços dos membros do Supremo",
                "a arguição não se presta ao exame de direito pré-constitucional, cuja compatibilidade com a Constituição só pode ser aferida em sede de controle difuso",
                "a modulação de efeitos depende de decisão unânime do Plenário e só pode eleger como marco temporal o trânsito em julgado do acórdão declaratório",
                "a arguição pode ser proposta por qualquer cidadão no gozo dos direitos políticos, o que a distingue da ação direta de inconstitucionalidade"
              ],
              correta: 1,
              explicacao: "O art. 4º, §1º, da Lei 9.882/99 consagra a subsidiariedade: não se admite ADPF quando houver qualquer outro meio eficaz de sanar a lesividade. Já o art. 27 da Lei 9.868/99 autoriza o STF, por razões de segurança jurídica ou excepcional interesse social, a restringir os efeitos da declaração de inconstitucionalidade ou fixar outro momento para sua eficácia, exigindo maioria de DOIS TERÇOS dos membros — e não unanimidade, nem marco temporal único. A ADPF é exatamente o instrumento adequado para o exame de direito PRÉ-constitucional (juízo de recepção), o que a diferencia da ADI. Seus legitimados são os mesmos do art. 103 da CF, não havendo legitimidade do cidadão."
            },
            {
              id: "mp-const-10", modo: "juris", fonte: "CF, art. 125, §2º",
              enunciado: "Constituição estadual atribui, com exclusividade, ao Procurador-Geral de Justiça a legitimidade para propor representação de inconstitucionalidade de leis municipais em face da própria Constituição do Estado. Tal previsão:",
              alternativas: [
                "é válida, pois o Ministério Público é o defensor natural da ordem jurídica, o que justifica a concentração da legitimidade em suas mãos",
                "é inválida, porque a Constituição Federal reserva o controle concentrado de leis municipais exclusivamente ao Supremo Tribunal Federal",
                "é válida apenas quanto a leis estaduais, sendo vedado o controle concentrado de leis municipais no âmbito dos Tribunais de Justiça",
                "é inválida, uma vez que a representação de inconstitucionalidade estadual só pode ter como parâmetro normas da Constituição Federal",
                "é inválida, pois a Constituição Federal veda expressamente a atribuição da legitimação para agir a um único órgão"
              ],
              correta: 4,
              explicacao: "O art. 125, §2º, da CF permite aos Estados instituir a representação de inconstitucionalidade de leis ou atos normativos estaduais ou municipais em face da Constituição estadual, mas veda de modo expresso a atribuição da legitimação para agir a UM ÚNICO ÓRGÃO. O Procurador-Geral de Justiça pode, sim, ser legitimado — e usualmente o é —, apenas não em regime de exclusividade. As demais alternativas erram ao negar o controle concentrado estadual de leis municipais (que é justamente o campo próprio dessa via, já que lei municipal não é objeto de ADI federal) e ao afirmar que o parâmetro seria a Constituição Federal: o parâmetro é a Constituição estadual, admitindo o STF que ela contenha normas de reprodução obrigatória, hipótese em que cabe recurso extraordinário contra a decisão do Tribunal de Justiça."
            }
          ]
        }
      ]
    },

    /* ---------------------------------- BANCA III · ADMINISTRATIVO */
    {
      id: "mprj-adm",
      titulo: "Administração, licitações e improbidade",
      materia: "Direito Administrativo",
      banca: "III",
      icone: "🏛️",
      descricao: "Atos e responsabilidade do Estado, a Lei 14.133/21 e a improbidade já com a Lei 14.230/21.",
      licoes: [
        {
          id: "mprj-adm-1",
          titulo: "Atos, agentes públicos e responsabilidade do Estado",
          questoes: [
            {
              id: "mp-adm-1", modo: "juris", fonte: "Súmula 473 do STF; CF, art. 5º, XXXV",
              enunciado: "Sobre o poder de autotutela da Administração Pública, conforme a Súmula 473 do Supremo Tribunal Federal:",
              alternativas: [
                "a Administração pode anular seus próprios atos quando eivados de vícios que os tornem ilegais e revogá-los por motivo de conveniência ou oportunidade, ressalvada, em todos os casos, a apreciação judicial",
                "a Administração só pode desfazer ato que já produziu efeitos mediante provocação do interessado ou decisão judicial, pois lhe falta poder de autotutela sobre atos ampliativos de direitos",
                "a revogação é o instrumento próprio para retirar do mundo jurídico o ato ilegal, reservando-se a anulação aos atos válidos que se tornaram inconvenientes ao interesse público",
                "tanto a anulação quanto a revogação operam efeitos apenas ex nunc, de modo que os efeitos já produzidos pelo ato ilegal ficam integralmente preservados em qualquer caso",
                "exercida a autotutela pela própria Administração, fica excluída a apreciação judicial do ato desfeito, em respeito à separação dos Poderes e ao mérito administrativo"
              ],
              correta: 0,
              explicacao: "A Súmula 473 do STF sintetiza a autotutela: anula-se o ato ILEGAL (porque dele não se originam direitos) e revoga-se o ato LEGAL que se tornou inconveniente ou inoportuno, respeitados os direitos adquiridos e ressalvada sempre a apreciação judicial. A alternativa 'c' inverte os conceitos — esse é o distrator clássico. A anulação tem, em regra, efeitos ex tunc (desfaz o ato desde a origem), enquanto a revogação opera ex nunc, o que derruba a alternativa 'd'. E a autotutela jamais afasta o controle judicial, por força do art. 5º, XXXV, da CF."
            },
            {
              id: "mp-adm-2", modo: "caso", fonte: "Lei 9.784/99, art. 54, caput",
              enunciado: "Em 2018, a Administração concedeu a servidor uma vantagem pecuniária com base em interpretação equivocada da lei, sem que houvesse má-fé do beneficiário. Em 2026, verificado o equívoco, pretende anular o ato. À luz da Lei 9.784/99:",
              alternativas: [
                "a anulação pode ser feita a qualquer tempo, pois do ato ilegal não se originam direitos, sendo juridicamente irrelevante o decurso do tempo para o exercício da autotutela",
                "a anulação não é mais possível: decai em cinco anos, contados da data em que foram praticados, o direito de anular atos de que decorram efeitos favoráveis ao destinatário, salvo má-fé comprovada",
                "a hipótese é de prescrição decenal, cujo termo inicial é a data em que a Administração efetivamente tomou conhecimento da ilegalidade do ato que praticara",
                "o prazo quinquenal só começa a correr depois de instaurado o processo administrativo destinado a apurar a ilegalidade, providência que ainda não foi adotada no caso",
                "o prazo quinquenal de decadência incide apenas sobre atos de conteúdo sancionatório, de modo que o ato ampliativo de direitos pode ser anulado sem limite temporal"
              ],
              correta: 1,
              explicacao: "O art. 54 da Lei 9.784/99 fixa prazo DECADENCIAL de cinco anos para a Administração anular atos de que decorram efeitos favoráveis aos destinatários, contado da data em que foram praticados, ressalvada a comprovada má-fé. Não é prescrição nem prazo decenal, e o termo inicial é a prática do ato, não a ciência da ilegalidade — por isso caem as alternativas 'c' e 'd'. A regra da Súmula 473 do STF (anulação a qualquer tempo) foi temperada por esse prazo legal, em nome da segurança jurídica e da proteção da confiança."
            },
            {
              id: "mp-adm-3", modo: "caso", fonte: "Teoria dos motivos determinantes; Lei 9.784/99, art. 2º, parágrafo único, VII",
              enunciado: "Autoridade exonera servidor ocupante de cargo em comissão, de livre nomeação e exoneração, declarando expressamente como motivo o abandono do posto de trabalho. Comprova-se depois, em juízo, que o alegado abandono nunca ocorreu. À luz da teoria dos motivos determinantes:",
              alternativas: [
                "o ato permanece hígido, pois a exoneração de ocupante de cargo em comissão é discricionária e a motivação declarada não integra o seu suporte de validade",
                "há mero vício de forma, sanável pela simples supressão da motivação declarada, uma vez que a lei não exigia a exposição dos motivos naquele ato específico",
                "o ato é inválido, pois, uma vez enunciado o motivo, ainda que a lei não o exigisse, a validade do ato passa a depender da efetiva existência e veracidade desse motivo",
                "o ato converte-se em demissão de ofício, cabendo à Administração instaurar processo disciplinar para confirmar ou afastar a falta funcional que foi imputada",
                "o vício atinge o objeto do ato e comporta convalidação por ratificação da autoridade hierarquicamente superior, com efeitos retroativos à data da edição"
              ],
              correta: 2,
              explicacao: "Pela teoria dos motivos determinantes, quando a autoridade declara o motivo do ato — mesmo em ato discricionário que dispensaria motivação —, a validade do ato fica vinculada à existência e à veracidade do motivo alegado. Motivo inexistente ou falso invalida o ato. O vício é de MOTIVO, e não de forma ou de objeto: por isso não se convalida (a convalidação da Lei 9.784/99, art. 55, alcança apenas vícios sanáveis, tipicamente de competência e de forma). A exoneração ad nutum também não se transforma em demissão disciplinar."
            },
            {
              id: "mp-adm-4", modo: "juris", fonte: "CF, art. 37, §6º, e art. 5º, XLIX; jurisprudência do STF em repercussão geral",
              enunciado: "Preso morre em razão de agressão sofrida dentro de estabelecimento prisional estadual, em contexto de falha no dever de vigilância. Segundo a jurisprudência do STF sobre o art. 37, §6º, da Constituição:",
              alternativas: [
                "o Estado responde objetivamente, pois assume o dever específico de proteger a integridade de quem está sob sua custódia, salvo se comprovar que lhe era impossível evitar o dano",
                "a responsabilidade decorrente de omissão é sempre subjetiva e exige a prova de dolo do agente público individualmente identificado no caso concreto",
                "não há dever de indenizar, porque o fato de terceiro configura, em qualquer hipótese, excludente do nexo causal entre a conduta estatal e o resultado danoso",
                "a responsabilidade é regida pela teoria do risco integral, de modo que nem mesmo a culpa exclusiva da vítima afastaria o dever estatal de indenizar",
                "os familiares devem demandar diretamente o agente penitenciário, que responde objetivamente perante terceiros, cabendo ao Estado apenas a posição de assistente"
              ],
              correta: 0,
              explicacao: "O art. 37, §6º, da CF adota a responsabilidade OBJETIVA sob a teoria do risco administrativo. Quando o Estado tem dever específico de proteção — como na custódia de presos (CF, art. 5º, XLIX) —, o STF reconhece responsabilidade objetiva também por omissão, afastada apenas se demonstrado que era impossível evitar o dano. Risco administrativo não é risco integral: admite excludentes (culpa exclusiva da vítima, força maior, fato exclusivo de terceiro), o que derruba a alternativa 'd'. O regresso contra o agente exige dolo ou culpa; e, pela chamada tese da dupla garantia, a vítima demanda a pessoa jurídica, não o agente."
            },
            {
              id: "mp-adm-5", modo: "lei", fonte: "CF, art. 41, caput e §4º; art. 37, V e XVI",
              enunciado: "Sobre o regime constitucional dos agentes públicos, é correto afirmar que:",
              alternativas: [
                "a estabilidade é adquirida após dois anos de efetivo exercício pelo servidor nomeado para cargo de provimento efetivo em virtude de aprovação em concurso público",
                "é lícita a acumulação remunerada de dois cargos de professor ainda que os horários sejam incompatíveis, pois a ressalva constitucional dispensa esse requisito",
                "o servidor estável somente perde o cargo por sentença judicial transitada em julgado, sendo-lhe inaplicável a perda decorrente de processo administrativo disciplinar",
                "a estabilidade pressupõe três anos de efetivo exercício e, como condição para sua aquisição, avaliação especial de desempenho por comissão instituída para essa finalidade",
                "as funções de confiança e os cargos em comissão podem ser providos livremente por qualquer pessoa, servidor de carreira ou não, sem qualquer condicionamento legal"
              ],
              correta: 3,
              explicacao: "O art. 41, caput, da CF exige três anos de efetivo exercício, e o §4º condiciona a aquisição da estabilidade a avaliação especial de desempenho por comissão instituída para essa finalidade — daí a alternativa 'd'. O prazo de dois anos é o do texto original da Constituição, alterado pela EC 19/98. A acumulação do art. 37, XVI, sempre exige compatibilidade de horários. O art. 41, §1º, admite a perda do cargo também por processo administrativo com ampla defesa e por avaliação periódica de desempenho. E o art. 37, V, reserva as funções de confiança a ocupantes de cargo efetivo, prevendo percentuais mínimos de cargos em comissão para servidores de carreira."
            }
          ]
        },
        {
          id: "mprj-adm-2",
          titulo: "Licitações (14.133/21) e improbidade (14.230/21)",
          questoes: [
            {
              id: "mp-adm-6", modo: "lei", fonte: "Lei 14.133/21, art. 28, I a V",
              enunciado: "São modalidades de licitação previstas na Lei 14.133/2021:",
              alternativas: [
                "concorrência, tomada de preços, convite, concurso e leilão",
                "pregão, concorrência, tomada de preços, concurso e diálogo competitivo",
                "pregão, concorrência, convite, leilão e diálogo competitivo",
                "concorrência, concurso, leilão, consulta pública e diálogo competitivo",
                "pregão, concorrência, concurso, leilão e diálogo competitivo"
              ],
              correta: 4,
              explicacao: "O art. 28 da Lei 14.133/2021 arrola cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. A tomada de preços e o convite eram modalidades da Lei 8.666/93, hoje REVOGADA, e não subsistem no novo regime — é o distrator preferido da banca. O diálogo competitivo é a inovação da lei, cabível em contratações de objeto que envolva inovação tecnológica ou técnica ou impossibilidade de o órgão definir sozinho a solução. Consulta pública não é modalidade licitatória da Lei 14.133/2021."
            },
            {
              id: "mp-adm-7", modo: "caso", fonte: "Lei 14.133/21, art. 74, III, alínea e, e §3º",
              enunciado: "Município pretende contratar diretamente escritório de advocacia de notória especialização para o patrocínio de causa judicial, serviço técnico especializado de natureza predominantemente intelectual. À luz da Lei 14.133/2021, a hipótese é de:",
              alternativas: [
                "dispensa de licitação em razão do valor, bastando que o contrato observe o limite legal fixado para outros serviços e compras da Administração",
                "licitação obrigatória na modalidade concurso, cujo critério legal de julgamento é o de melhor técnica ou conteúdo artístico, com prêmio ao vencedor",
                "dispensa de licitação por notória especialização, hipótese expressamente arrolada entre as situações de contratação direta do art. 75 da lei",
                "inexigibilidade de licitação por inviabilidade de competição, exigida a demonstração da notória especialização e da natureza predominantemente intelectual do serviço",
                "credenciamento, procedimento auxiliar que afasta a licitação em toda e qualquer contratação de serviços advocatícios pela Administração Pública"
              ],
              correta: 3,
              explicacao: "O art. 74, III, 'e', da Lei 14.133/2021 prevê a INEXIGIBILIDADE para contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização, nela incluído o patrocínio ou defesa de causas judiciais ou administrativas. A distinção clássica: na inexigibilidade a competição é INVIÁVEL (rol exemplificativo do art. 74); na dispensa (art. 75) a competição é possível, mas a lei autoriza afastá-la em rol taxativo. Atenção ao ponto que a banca explora: a Lei 14.133/2021 não repetiu o requisito da natureza SINGULAR do serviço, que constava do art. 25, II, da revogada Lei 8.666/93 — o §3º define apenas a notória especialização, exigindo que o trabalho do contratado seja essencial e indiscutivelmente o mais adequado à plena satisfação do objeto. Permanecem indispensáveis a motivação da escolha e a demonstração concreta da inviabilidade de competição, como cobram o TCU e o STJ."
            },
            {
              id: "mp-adm-8", modo: "juris", fonte: "Lei 8.429/92, art. 1º, §§1º a 3º, com a Lei 14.230/21; jurisprudência do STF em repercussão geral",
              enunciado: "Servidor causa prejuízo ao erário ao autorizar pagamento indevido por manifesta negligência no exame da documentação, sem que se demonstre vontade livre e consciente de alcançar o resultado ilícito. Segundo a Lei 8.429/92, na redação da Lei 14.230/2021, e a jurisprudência do STF:",
              alternativas: [
                "responde por improbidade culposa, modalidade que a reforma preservou exclusivamente para os atos que causam prejuízo ao erário, previstos no art. 10",
                "não há ato de improbidade, pois todos os tipos exigem dolo, não bastando a voluntariedade da conduta nem o mero exercício da função pública",
                "responde por ato que atenta contra os princípios da administração, cujo rol permaneceu exemplificativo e passou a admitir expressamente a culpa grave",
                "responde por improbidade, pois a culpa grave foi equiparada ao dolo eventual pela nova redação conferida ao art. 10 da Lei 8.429/92",
                "a supressão da modalidade culposa retroage de forma plena, alcançando inclusive as condenações por improbidade já transitadas em julgado"
              ],
              correta: 1,
              explicacao: "A Lei 14.230/2021 extinguiu a improbidade culposa: o art. 1º, §1º, só considera ímprobas as condutas DOLOSAS dos arts. 9º, 10 e 11; o §2º define dolo como a vontade livre e consciente de alcançar o resultado ilícito, 'não bastando a voluntariedade do agente'; e o §3º afirma que o mero exercício da função, sem ato doloso com fim ilícito, afasta a responsabilidade. O rol do art. 11 passou a ser TAXATIVO, o que derruba a alternativa 'c'. O STF, em repercussão geral, fixou que a norma mais benéfica alcança os processos sem condenação transitada em julgado, mas não desconstitui a coisa julgada — daí o erro da alternativa 'e'. Ilícito não doloso pode gerar responsabilidade civil e disciplinar, mas não improbidade."
            },
            {
              id: "mp-adm-9", modo: "juris", fonte: "Lei 8.429/92, art. 17, caput, com a Lei 14.230/21; STF, ADI 7042 e ADI 7043",
              enunciado: "A Lei 14.230/2021 deu ao art. 17, caput, da Lei 8.429/92 redação segundo a qual a ação por improbidade administrativa será proposta pelo Ministério Público. Sobre a legitimidade ativa, conforme o julgamento do STF nas ADIs 7042 e 7043:",
              alternativas: [
                "a legitimidade tornou-se exclusiva do Ministério Público, único autor possível da ação, tendo o STF julgado integralmente improcedentes as ações diretas",
                "a legitimidade passou a ser exclusiva da pessoa jurídica lesada, restando ao Ministério Público apenas a atuação como fiscal da ordem jurídica no processo",
                "o STF manteve a exclusividade do Ministério Público, ressalvando às pessoas jurídicas de direito público lesadas a possibilidade de assistência simples",
                "a ação pode ser proposta por qualquer cidadão, tal como se dá na ação popular, dada a natureza difusa do interesse na probidade administrativa",
                "o STF declarou a inconstitucionalidade parcial dos dispositivos e restabeleceu a legitimidade ativa concorrente e disjuntiva das pessoas jurídicas interessadas"
              ],
              correta: 4,
              explicacao: "A literalidade do art. 17, caput, com a redação da Lei 14.230/2021, atribuiu a ação apenas ao Ministério Público. No entanto, ao julgar as ADIs 7042 e 7043, o STF declarou a inconstitucionalidade parcial dos dispositivos e restabeleceu a legitimidade ativa CONCORRENTE e DISJUNTIVA das pessoas jurídicas interessadas, ao lado do Ministério Público. Concorrente porque ambos podem agir; disjuntiva porque cada um pode agir sozinho, sem litisconsórcio necessário. Não há legitimidade do cidadão para a ação de improbidade — a via popular é a da Lei 4.717/65, com objeto e sanções diversos."
            },
            {
              id: "mp-adm-10", modo: "juris", fonte: "Lei 8.429/92, art. 23, caput e §1º; CF, art. 37, §5º; jurisprudência do STF em repercussão geral",
              enunciado: "Sobre a prescrição na Lei 8.429/92, com as alterações da Lei 14.230/2021, e o entendimento do STF quanto ao art. 37, §5º, da Constituição:",
              alternativas: [
                "a pretensão sancionatória prescreve em cinco anos e o ressarcimento ao erário é imprescritível em qualquer hipótese, inclusive quando o ato for meramente culposo",
                "tanto a pretensão sancionatória quanto a de ressarcimento prescrevem em oito anos, contados do fato ou, nas infrações permanentes, do dia em que cessou a permanência",
                "a pretensão sancionatória prescreve em oito anos, ao passo que é imprescritível a pretensão de ressarcimento fundada na prática de ato doloso de improbidade",
                "a pretensão sancionatória prescreve em dez anos e a instauração de inquérito civil interrompe o prazo, que volta a correr integralmente após o arquivamento",
                "não corre prazo prescricional contra a pretensão sancionatória, dada a natureza indisponível do interesse tutelado pela ação de improbidade administrativa"
              ],
              correta: 2,
              explicacao: "O art. 23, caput, da Lei 8.429/92, na redação da Lei 14.230/2021, fixa prazo único de OITO anos para a pretensão sancionatória, contado da ocorrência do fato ou, nas infrações permanentes, do dia em que cessou a permanência. O ressarcimento segue regra própria: o STF firmou que são imprescritíveis as ações de ressarcimento ao erário fundadas em ato DOLOSO de improbidade (CF, art. 37, §5º) — quando o ato não é doloso, a pretensão de ressarcimento prescreve, o que derruba a alternativa 'a'. O inquérito civil SUSPENDE o prazo por até 180 dias corridos (art. 23, §1º), não o interrompe. Cuidado ainda com a prescrição intercorrente: interrompido o prazo pelos marcos do art. 23, §4º, ele recomeça pela metade."
            }
          ]
        }
      ]
    },

    /* --------------------------------------- BANCA III · ELEITORAL */
    {
      id: "mprj-eleitoral",
      titulo: "Direitos políticos, propaganda e crimes eleitorais",
      materia: "Direito Eleitoral",
      banca: "III",
      icone: "🗳️",
      descricao: "Peso 2: inelegibilidades, condutas vedadas, Lei das Eleições e a atuação do promotor eleitoral.",
      licoes: [
        {
          id: "mprj-eleitoral-1",
          titulo: "Inelegibilidades, propaganda e crimes eleitorais",
          questoes: [
            {
              id: "mp-ele-1", modo: "caso", fonte: "CF, art. 15, III",
              enunciado: "João foi condenado por peculato; a sentença transitou em julgado e ele cumpre a pena imposta. Quanto aos seus direitos políticos, à luz do art. 15 da Constituição:",
              alternativas: [
                "houve cassação dos direitos políticos, medida que a Constituição admite excepcionalmente nos crimes praticados contra a Administração Pública",
                "não há repercussão alguma sobre os direitos políticos, que somente se perdem no caso de cancelamento da naturalização por sentença transitada em julgado",
                "há suspensão dos direitos políticos enquanto durarem os efeitos da condenação, sendo vedada, em qualquer hipótese, a cassação",
                "a suspensão depende de declaração expressa na sentença penal condenatória, sem a qual os direitos políticos permanecem íntegros durante a execução",
                "a perda dos direitos políticos é definitiva, restabelecendo-se apenas por meio de reabilitação criminal requerida ao juízo da execução penal"
              ],
              correta: 2,
              explicacao: "O art. 15, caput, da CF é categórico: é VEDADA a cassação de direitos políticos, que só podem ser perdidos ou suspensos nas hipóteses taxativas dos incisos. A condenação criminal transitada em julgado (inciso III) gera SUSPENSÃO enquanto durarem seus efeitos, e não perda definitiva. Pela jurisprudência consolidada do STF, essa suspensão é efeito automático da condenação, qualquer que seja o crime, dispensando declaração expressa na sentença — o que não se confunde com a perda de cargo do art. 92 do Código Penal, esta sim de motivação obrigatória."
            },
            {
              id: "mp-ele-2", modo: "lei", fonte: "Lei 9.504/97, art. 41-A, caput e §1º",
              enunciado: "A captação ilícita de sufrágio consiste na conduta do candidato que doa, oferece, promete ou entrega ao eleitor bem ou vantagem pessoal de qualquer natureza com o fim de obter-lhe o voto. Sobre esse ilícito eleitoral:",
              alternativas: [
                "só se configura entre a data do registro da candidatura e o início da propaganda gratuita no rádio e na televisão, período de maior risco ao pleito",
                "exige o pedido explícito de votos, sem o qual a conduta é eleitoralmente irrelevante, por ausência de nexo entre a vantagem e o sufrágio",
                "sujeita o candidato apenas à sanção de multa, já que a cassação do registro ou do diploma depende de ação de impugnação de mandato eletivo",
                "pressupõe a prática pessoal do candidato, não se aplicando quando executada por terceiro, ainda que com a anuência do beneficiário do ilícito",
                "dispensa o pedido explícito de votos, bastando a evidência do dolo consistente no especial fim de agir, e acarreta multa e cassação do registro ou do diploma"
              ],
              correta: 4,
              explicacao: "O art. 41-A da Lei 9.504/97 pune a captação ilícita de sufrágio praticada desde o registro da candidatura até o dia da eleição, inclusive, com multa E cassação do registro ou do diploma, pelo rito do art. 22 da LC 64/90 — logo, a sanção não se resume à multa nem depende de AIME. O §1º, incluído pela Lei 12.034/2009, afasta o distrator mais tentador: é desnecessário o pedido explícito de votos, bastando a evidência do dolo, consistente no especial fim de agir. A conduta de terceiro atrai a responsabilidade do candidato quando há sua participação ou anuência."
            },
            {
              id: "mp-ele-3", modo: "juris", fonte: "Súmula Vinculante 18; CF, art. 14, §7º",
              enunciado: "Prefeito em primeiro mandato divorcia-se da esposa no curso do mandato, e ela pretende candidatar-se ao cargo de Prefeita do mesmo Município na eleição imediatamente seguinte. Conforme entendimento sumulado com efeito vinculante do STF:",
              alternativas: [
                "a dissolução do vínculo conjugal no curso do mandato afasta a inelegibilidade, pois esta pressupõe vínculo familiar atual na data do pedido de registro",
                "a dissolução do vínculo conjugal no curso do mandato não afasta a inelegibilidade reflexa prevista no art. 14, §7º, da Constituição da República",
                "a inelegibilidade reflexa alcança apenas cônjuge e parentes de Presidente da República e de Governador, não os de Prefeito, cuja circunscrição é restrita",
                "a inelegibilidade fica afastada desde que o divórcio seja decretado até seis meses antes do pleito, prazo geral de desincompatibilização",
                "a ex-cônjuge é elegível para qualquer cargo do Município, exceto o de Vereador, por incidir a vedação ao terceiro mandato consecutivo no mesmo ente"
              ],
              correta: 1,
              explicacao: "A Súmula Vinculante 18 do STF é expressa: a dissolução da sociedade ou do vínculo conjugal, no curso do mandato, não afasta a inelegibilidade prevista no §7º do art. 14 da Constituição. O objetivo é impedir a burla ao dispositivo por meio de divórcio de conveniência às vésperas do pleito. A inelegibilidade reflexa alcança o cônjuge e os parentes consanguíneos ou afins até o segundo grau ou por adoção do Presidente, do Governador e do Prefeito, no território de jurisdição do titular, salvo se o parente já for titular de mandato eletivo e candidato à reeleição."
            },
            {
              id: "mp-ele-4", modo: "juris", fonte: "LC 64/90, art. 1º, I, 'e' (redação da LC 135/2010); STF, ADC 29, ADC 30 e ADI 4.578",
              enunciado: "A respeito da Lei Complementar 135/2010 (Lei da Ficha Limpa) e da orientação firmada pelo Supremo Tribunal Federal em controle concentrado:",
              alternativas: [
                "a lei é inconstitucional na parte em que dispensa o trânsito em julgado da condenação, por violação frontal à presunção de não culpabilidade",
                "a lei incide somente sobre fatos ocorridos após a sua publicação, sob pena de retroatividade vedada de norma de natureza sancionadora",
                "as novas hipóteses de inelegibilidade puderam ser aplicadas já ao pleito de 2010, por serem normas de direito material estranhas ao art. 16 da Constituição",
                "a lei é constitucional e alcança fatos anteriores à sua vigência, pois a inelegibilidade não é pena, mas requisito de capacidade eleitoral passiva",
                "a inelegibilidade da alínea 'e' pressupõe condenação criminal transitada em julgado, sendo insuficiente o acórdão condenatório de órgão judicial colegiado"
              ],
              correta: 3,
              explicacao: "No julgamento conjunto da ADC 29, da ADC 30 e da ADI 4.578, o STF declarou a constitucionalidade da LC 135/2010 e admitiu sua incidência sobre fatos anteriores à sua vigência: a inelegibilidade não tem natureza de pena, mas de requisito de capacidade eleitoral passiva aferido no momento do registro, de modo que não há ofensa à irretroatividade, à coisa julgada nem à presunção de inocência. A alínea 'e' do art. 1º, I, da LC 64/90 contenta-se com a condenação transitada em julgado OU proferida por órgão judicial colegiado, gerando inelegibilidade até o transcurso de oito anos após o cumprimento da pena. Quanto às eleições de 2010, o STF entendeu que a anterioridade eleitoral do art. 16 da CF impedia a aplicação imediata da lei àquele pleito."
            }
          ]
        }
      ]
    },

    /* ------------------------- BANCA III · FINANCEIRO E TRIBUTÁRIO */
    {
      id: "mprj-tribut",
      titulo: "CTN, limitações ao poder de tributar e finanças públicas",
      materia: "Direito Financeiro e Tributário",
      banca: "III",
      icone: "💰",
      descricao: "Peso 2: princípios e imunidades, crédito tributário, ciclo orçamentário e a LRF.",
      licoes: [
        {
          id: "mprj-tribut-1",
          titulo: "CTN, limitações ao poder de tributar e LRF",
          questoes: [
            {
              id: "mp-trib-1", modo: "caso", fonte: "CF, art. 150, III, b e c, e §1º; art. 153, §1º",
              enunciado: "Por decreto publicado em 10 de outubro, a União majorou, dentro das condições e dos limites fixados em lei, as alíquotas do imposto de importação e do imposto sobre produtos industrializados incidentes sobre determinado bem. Quanto à eficácia dessas majorações, é correto afirmar que:",
              alternativas: [
                "ambas somente poderão ser exigidas a partir do primeiro dia do exercício financeiro seguinte, por incidir sobre os dois impostos a anterioridade anual",
                "ambas poderão ser exigidas de imediato, pois se trata de impostos extrafiscais integralmente excepcionados das duas anterioridades",
                "a majoração do IPI produz efeitos imediatos, ao passo que a do imposto de importação depende do transcurso do prazo de noventa dias da publicação",
                "a majoração do imposto de importação produz efeitos imediatos; a do IPI, somente após noventa dias da publicação, dispensada a espera do exercício seguinte",
                "nenhuma das majorações é válida, pois a alteração de alíquota de qualquer imposto depende de lei em sentido formal, não bastando o decreto"
              ],
              correta: 3,
              explicacao: "O art. 153, §1º, da CF faculta ao Poder Executivo alterar, atendidas as condições e os limites da lei, as alíquotas do II, do IE, do IPI e do IOF — por isso o decreto é meio idôneo, o que derruba a última alternativa. Quanto à eficácia, o art. 150, §1º, excepciona das duas anterioridades o II, o IE, o IOF, o imposto extraordinário de guerra e o empréstimo compulsório de guerra ou calamidade; o IPI é exceção apenas à anterioridade anual, submetendo-se à nonagesimal. O inverso ocorre com o imposto de renda, que respeita a anterioridade anual e é exceção à noventena, assim como a fixação da base de cálculo do IPVA e do IPTU."
            },
            {
              id: "mp-trib-2", modo: "lei", fonte: "LC 101/2000 (LRF), art. 42",
              enunciado: "Nos termos da Lei de Responsabilidade Fiscal, ao titular de Poder ou órgão, nos dois últimos quadrimestres do seu mandato, é vedado:",
              alternativas: [
                "contrair obrigação de despesa que não possa ser cumprida integralmente dentro desse período, ou que tenha parcelas a serem pagas no exercício seguinte sem suficiente disponibilidade de caixa",
                "realizar qualquer despesa de custeio que não esteja expressamente discriminada na lei de diretrizes orçamentárias do exercício em curso, ainda que haja disponibilidade de caixa",
                "contrair qualquer obrigação de despesa, ainda que integralmente liquidada e paga dentro do próprio período, salvo se houver prévia autorização legislativa específica",
                "conceder ou ampliar incentivo de natureza tributária, vedação absoluta que a lei estende a todo o último ano do mandato, independentemente de estimativa de impacto orçamentário",
                "empenhar despesas com investimentos já iniciados em exercícios anteriores, cuja continuidade a lei transfere ao titular que vier a assumir o cargo no exercício seguinte"
              ],
              correta: 0,
              explicacao: "O art. 42 da LRF veda ao titular de Poder ou órgão referido no art. 20, nos dois últimos quadrimestres do mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a pagar no exercício seguinte sem suficiente disponibilidade de caixa — a conduta correspondente é tipificada no art. 359-C do Código Penal. Note que a vedação não é a de assumir despesas, mas a de assumi-las sem lastro financeiro, o que afasta a terceira alternativa. Não confunda com o art. 21 da LRF, que fulmina de nulidade o ato de aumento de despesa com pessoal nos cento e oitenta dias anteriores ao final do mandato, nem com o art. 14, que não proíbe a renúncia de receita, apenas a condiciona a estimativa de impacto orçamentário-financeiro e a medidas de compensação."
            },
            {
              id: "mp-trib-3", modo: "juris", fonte: "Súmula 436 do STJ; CTN, arts. 173 e 174",
              enunciado: "Contribuinte sujeito a tributo lançado por homologação entrega ao Fisco a declaração em que reconhece integralmente o débito, mas deixa de recolher o valor declarado. De acordo com a jurisprudência sumulada do Superior Tribunal de Justiça:",
              alternativas: [
                "o crédito somente se constitui por lançamento de ofício suplementar, sem o qual a Fazenda não pode inscrever em dívida ativa o valor que o contribuinte declarou",
                "a declaração equivale a mera confissão extrajudicial, exigindo-se homologação expressa da autoridade fiscal para que o crédito se repute definitivamente constituído",
                "é indispensável a prévia notificação do contribuinte para impugnar administrativamente o valor por ele próprio declarado, sob pena de nulidade da inscrição em dívida ativa",
                "a falta de pagamento faz correr contra a Fazenda o prazo decadencial de cinco anos para lançar o valor declarado, e não o prazo prescricional para cobrá-lo",
                "a entrega da declaração já constitui o crédito tributário, dispensada qualquer outra providência do Fisco, que pode desde logo inscrevê-lo em dívida ativa e executá-lo"
              ],
              correta: 4,
              explicacao: "A Súmula 436 do STJ é expressa: a entrega de declaração pelo contribuinte, reconhecendo o débito fiscal, constitui o crédito tributário, dispensada qualquer outra providência por parte do Fisco. Por isso não há notificação, impugnação ou lançamento suplementar a exigir. E, uma vez constituído o crédito, não há mais falar em decadência (art. 173 do CTN, que rege o prazo para constituir): o que corre é a prescrição quinquenal do art. 174 do CTN para a cobrança, cujo termo inicial, segundo entendimento consolidado do STJ, é a data do vencimento da obrigação ou a da entrega da declaração, o que for posterior."
            },
            {
              id: "mp-trib-4", modo: "juris", fonte: "Súmula Vinculante 52; CF, art. 150, VI, c, e §4º",
              enunciado: "Entidade de assistência social sem fins lucrativos que atende aos requisitos legais é proprietária de imóvel locado a terceiro, aplicando integralmente o produto dos aluguéis em suas finalidades institucionais. Quanto à exigência de IPTU sobre esse imóvel:",
              alternativas: [
                "o imposto é devido, porque a locação a terceiro configura exploração de atividade econômica estranha às finalidades essenciais e afasta de plano a imunidade da entidade",
                "o imposto é devido, uma vez que a imunidade constitucional alcança apenas o patrimônio diretamente empregado nas atividades da entidade, jamais o bem cedido a terceiro",
                "o imóvel permanece imune, pois o enunciado vinculante do STF preserva a imunidade ainda quando o bem esteja alugado a terceiros, desde que os aluguéis sejam aplicados nas atividades essenciais",
                "o imóvel é imune independentemente da destinação dada ao produto dos aluguéis, bastando a titularidade do bem pela entidade beneficente para afastar a incidência do imposto",
                "a hipótese é de isenção, e não de imunidade, cabendo à lei municipal decidir livremente sobre a manutenção ou a supressão do benefício em favor da entidade"
              ],
              correta: 2,
              explicacao: "A Súmula Vinculante 52 firma que, ainda quando alugado a terceiros, permanece imune ao IPTU o imóvel pertencente a qualquer das entidades referidas pelo art. 150, VI, c, da CF, desde que o valor dos aluguéis seja aplicado nas atividades para as quais tais entidades foram constituídas. A condição de destinação é essencial e derruba a quarta alternativa, que dispensa qualquer vinculação do produto da locação. Também não se trata de isenção: a imunidade é limitação constitucional ao poder de tributar, indisponível ao legislador municipal — e, nos termos do art. 150, §4º, da CF, compreende o patrimônio, a renda e os serviços relacionados às finalidades essenciais das entidades."
            }
          ]
        }
      ]
    },

    /* ----------------------------- BANCA IV · INFÂNCIA E JUVENTUDE */
    {
      id: "mprj-eca",
      titulo: "ECA: proteção integral e ato infracional",
      materia: "Direito da Infância e Juventude",
      banca: "IV",
      icone: "🌱",
      descricao: "A matéria mais própria do MP: direitos fundamentais, poder familiar, adoção, remissão e medidas socioeducativas.",
      licoes: [
        {
          id: "mprj-eca-1",
          titulo: "Direitos fundamentais, poder familiar e adoção",
          questoes: [
            {
              id: "mp-eca-1", modo: "lei", fonte: "ECA, art. 19, §§1º e 2º; art. 101, §1º",
              enunciado: "Criança afastada do convívio familiar por decisão judicial encontra-se inserida em programa de acolhimento institucional enquanto se define sua situação familiar. Nos termos do Estatuto da Criança e do Adolescente, a manutenção dessa medida:",
              alternativas: [
                "deve ser reavaliada, no máximo, a cada seis meses, mediante relatório da equipe interprofissional, não podendo o acolhimento ultrapassar dois anos em nenhuma hipótese",
                "independe de reavaliação periódica pelo juízo, bastando o relatório anual da entidade de acolhimento encaminhado ao Ministério Público e ao conselho municipal de direitos",
                "deve ser reavaliada, no máximo, a cada três meses, e o acolhimento não se prolongará por mais de dezoito meses, salvo necessidade comprovada e fundamentada pela autoridade judiciária",
                "deve ser reavaliada, no máximo, a cada três meses, sendo de vinte e quatro meses o prazo máximo e improrrogável de permanência da criança no programa de acolhimento",
                "pode perdurar por prazo indeterminado, desde que a entidade de acolhimento comprove nos autos o esforço continuado de reintegração da criança à sua família natural ou extensa"
              ],
              correta: 2,
              explicacao: "O art. 19, §1º, do ECA impõe reavaliação da situação, no máximo, a cada 3 meses, com decisão judicial fundamentada sobre reintegração familiar ou colocação em família substituta; o §2º limita a permanência em acolhimento institucional a 18 meses, salvo comprovada necessidade atendendo ao superior interesse, fundamentada pelo juiz. Atenção ao distrator: os prazos de 6 meses e 2 anos eram os da redação anterior (Lei 12.010/2009), alterados pela Lei 13.509/2017. O acolhimento é sempre medida provisória e excepcional, de transição, e não implica privação de liberdade (art. 101, §1º)."
            },
            {
              id: "mp-eca-2", modo: "lei", fonte: "ECA, arts. 31, 39, §1º, 40 e 42, §§1º e 3º",
              enunciado: "A respeito da adoção regulada pelo Estatuto da Criança e do Adolescente, com as alterações da Lei 13.509/2017, é correto afirmar que:",
              alternativas: [
                "é revogável por iniciativa dos adotantes enquanto não decorrido o prazo de dois anos da averbação da sentença no registro civil do adotado",
                "o adotando deve contar, no máximo, com dezesseis anos de idade à data do pedido, salvo se já estiver sob a guarda ou a tutela dos adotantes",
                "exige-se diferença mínima de dez anos entre adotante e adotando, admitindo-se a adoção pelos ascendentes e pelos irmãos do adotando",
                "a colocação em família substituta estrangeira é medida ordinária de proteção, admissível também nas modalidades de guarda e de tutela",
                "é medida excepcional e irrevogável, exigindo-se ainda que o adotante seja, pelo menos, dezesseis anos mais velho do que o adotando"
              ],
              correta: 4,
              explicacao: "O art. 39, §1º, do ECA define a adoção como medida excepcional e irrevogável, cabível apenas quando esgotados os recursos de manutenção da criança na família natural ou extensa; o art. 42, §3º, exige que o adotante seja no mínimo dezesseis anos mais velho que o adotando. Os distratores trocam dados legais: o adotando deve ter no máximo dezoito anos à data do pedido (art. 40), é vedada a adoção pelos ascendentes e pelos irmãos do adotando (art. 42, §1º) e a colocação em família substituta estrangeira é medida excepcional, admissível somente na modalidade de adoção (art. 31)."
            },
            {
              id: "mp-eca-3", modo: "caso", fonte: "ECA, arts. 13, 129, 136, II e XI",
              enunciado: "O Conselho Tutelar recebe comunicação e confirma que um casal vem submetendo o filho de nove anos a castigos físicos reiterados. No exercício de suas atribuições próprias, o Conselho Tutelar pode:",
              alternativas: [
                "aplicar aos pais o encaminhamento a programa oficial de proteção à família e a advertência, cabendo-lhe representar ao Ministério Público para a ação de destituição do poder familiar",
                "decretar desde logo a suspensão do poder familiar dos pais e determinar a colocação da criança em família substituta na modalidade de guarda provisória",
                "aplicar aos pais a perda da guarda e a destituição da tutela, medidas que o Estatuto inclui expressamente no rol de suas atribuições deliberativas",
                "ajuizar diretamente a ação de destituição do poder familiar, dada a legitimidade concorrente que o Estatuto lhe confere com o Ministério Público para essa demanda",
                "aplicar aos pais qualquer das medidas do art. 129 do Estatuto, inclusive a suspensão do poder familiar, sujeita apenas à posterior homologação pela autoridade judiciária"
              ],
              correta: 0,
              explicacao: "O Conselho Tutelar é órgão não jurisdicional (art. 131) e o art. 136, II, limita sua atuação às medidas do art. 129, I a VII — encaminhamentos, obrigações e advertência. A perda da guarda, a destituição da tutela e a suspensão ou destituição do poder familiar (art. 129, VIII a X) são de competência exclusiva do juiz; por isso o art. 136, XI, prevê que o Conselho REPRESENTE ao Ministério Público, único legitimado, ao lado de quem tenha legítimo interesse, a propor a ação (art. 155). Vale lembrar que esse procedimento tem prazo máximo de conclusão de 120 dias (art. 163)."
            },
            {
              id: "mp-eca-4", modo: "juris", fonte: "Súmula 383 do STJ; ECA, art. 147, I",
              enunciado: "Após a separação dos pais, a criança passou a residir com a mãe, detentora da guarda, em comarca diversa daquela em que tramitou a ação de divórcio. Ajuizada nova ação de interesse da criança, a competência, segundo a jurisprudência sumulada do STJ, firma-se:",
              alternativas: [
                "pelo foro do domicílio do genitor réu, aplicando-se sem temperamentos a regra geral de competência territorial do Código de Processo Civil",
                "pelo juízo que primeiro conheceu da causa entre os pais, por força da prevenção e da perpetuação da jurisdição, que não cedem ao interesse do menor",
                "pelo foro eleito pelas partes no acordo de guarda homologado judicialmente, ainda que diverso daquele em que a criança efetivamente reside",
                "pelo foro do domicílio do detentor da guarda, solução que concretiza o princípio do melhor interesse da criança e do adolescente",
                "pelo foro do lugar do fato que originou o pedido, salvo se o Ministério Público requerer expressamente a remessa dos autos a outro juízo"
              ],
              correta: 3,
              explicacao: "A Súmula 383 do STJ enuncia que a competência para processar e julgar as ações conexas de interesse de menor é, em princípio, do foro do domicílio do detentor de sua guarda. A regra dialoga com o art. 147, I, do ECA (domicílio dos pais ou responsável) e se explica pelo princípio do melhor interesse: o juízo mais próximo da criança é o que melhor colhe provas e acompanha sua realidade. Por isso a competência aqui é relativa em sua origem, mas cede à proteção integral, afastando a rigidez da perpetuatio jurisdictionis. Erram as demais: a regra geral de competência territorial do CPC cede à norma especial do art. 147, I, do ECA; não se admite foro de eleição em matéria de interesse de incapaz, por ser competência fixada em favor do menor, e não das partes; e o foro do lugar do fato só incide nas hipóteses dos §§ 1º e 2º do art. 147, ligadas ao ato infracional e à fiscalização."
            },
            {
              id: "mp-eca-5", modo: "juris", fonte: "Súmula 594 do STJ",
              enunciado: "Promotor de Justiça pretende ajuizar ação de alimentos em favor de criança cujo genitor não presta o sustento devido. Há Defensoria Pública instalada e em funcionamento regular na comarca, e a criança não se encontra em nenhuma das situações de risco do art. 98 do Estatuto. Conforme a jurisprudência sumulada do STJ:",
              alternativas: [
                "falta ao Ministério Público legitimidade, que é exclusiva da Defensoria Pública onde ela esteja instalada e em funcionamento regular na comarca",
                "o Ministério Público tem legitimidade ativa, independentemente do exercício do poder familiar pelos pais, da situação de risco do art. 98 ou da existência de Defensoria Pública na comarca",
                "a legitimidade do Ministério Público só se configura quando a criança estiver em uma das situações de risco descritas no art. 98 do Estatuto da Criança e do Adolescente",
                "a legitimidade do Ministério Público depende de prévia autorização da autoridade judiciária e da concordância expressa do representante legal da criança alimentanda",
                "o Ministério Público só tem legitimidade quando os pais já tiverem sido destituídos ou suspensos do poder familiar por decisão judicial transitada em julgado"
              ],
              correta: 1,
              explicacao: "A Súmula 594 do STJ é expressa: o Ministério Público tem legitimidade ativa para ajuizar ação de alimentos em proveito de criança ou adolescente independentemente do exercício do poder familiar dos pais, do fato de o menor se encontrar nas situações do art. 98 do ECA, ou de quaisquer questionamentos sobre a existência ou a eficiência da Defensoria Pública na comarca. A legitimidade decorre do dever de zelar pelos direitos da criança (art. 201, III e VIII, do ECA) e é concorrente, não subsidiária em relação à Defensoria."
            },
            {
              id: "mp-eca-6", modo: "juris", fonte: "ECA, art. 50, §13; entendimento consolidado do STJ",
              enunciado: "Casal não inscrito no cadastro de adotantes obteve a guarda de fato de recém-nascido e com ele convive há mais de dois anos, havendo estudo social que atesta vínculo afetivo sólido e ausência de má-fé. Segundo o entendimento consolidado do STJ sobre a observância da ordem do cadastro:",
              alternativas: [
                "a inobservância do cadastro acarreta nulidade absoluta do processo de adoção, devendo a criança ser desde logo entregue aos primeiros habilitados da lista",
                "o cadastro tem caráter meramente indicativo e pode ser livremente afastado sempre que os pretendentes demonstrem boa-fé e adequada capacidade econômica",
                "a observância do cadastro é a regra, mas comporta excepcional mitigação quando o melhor interesse da criança, no caso concreto, o recomendar",
                "o cadastro é dispensável em qualquer hipótese, bastando o consentimento dos pais biológicos manifestado em audiência perante a autoridade judiciária competente",
                "a preterição do cadastro só é admitida na adoção internacional, cuja natureza excepcional autoriza o afastamento da lista nacional de habilitados à adoção"
              ],
              correta: 2,
              explicacao: "O cadastro do art. 50 do ECA é a regra e serve à impessoalidade e ao controle da adoção, mas o próprio §13 traz exceções legais (adoção unilateral, parente com vínculo de afinidade e afetividade e detentor de tutela ou guarda legal de criança maior de três anos). Além dessas hipóteses legais — nenhuma das quais se configura aqui, pois a guarda é de fato e a criança não é maior de três anos —, o STJ firmou entendimento de que a ordem do cadastro pode ser excepcionalmente mitigada em favor do princípio do melhor interesse quando já consolidado vínculo socioafetivo e ausente má-fé ou burla ao sistema. As demais alternativas erram por transformar a exceção em regra, ou a regra em nulidade insuperável."
            }
          ]
        },
        {
          id: "mprj-eca-2",
          titulo: "Ato infracional e medidas socioeducativas",
          questoes: [
            {
              id: "mp-eca-7", modo: "lei", fonte: "ECA, arts. 108, 117, 118, §2º, e 121, §§2º, 3º e 5º",
              enunciado: "A respeito dos prazos das medidas previstas no Estatuto da Criança e do Adolescente ao adolescente a quem se atribui a prática de ato infracional, é correto afirmar que:",
              alternativas: [
                "a prestação de serviços à comunidade não excede seis meses, com jornada máxima de oito horas semanais, e a liberdade assistida é fixada pelo prazo mínimo de seis meses",
                "a prestação de serviços à comunidade não excede um ano, com jornada máxima de oito horas semanais, e a liberdade assistida tem prazo máximo de seis meses, vedada a prorrogação",
                "a internação antes da sentença pode ser determinada pelo prazo máximo de noventa dias, e a internação aplicada em sentença é reavaliada, no máximo, a cada doze meses",
                "a internação não excede três anos, sendo compulsória a liberação aos dezoito anos, quando cessa a competência da Justiça da Infância e da Juventude sobre o socioeducando",
                "a semiliberdade comporta prazo determinado de, no máximo, dois anos, e a prestação de serviços à comunidade tem jornada máxima de oito horas diárias em dias úteis"
              ],
              correta: 0,
              explicacao: "O art. 117 limita a prestação de serviços à comunidade a seis meses, com jornada máxima de oito horas SEMANAIS, cumprida de modo a não prejudicar a escola ou o trabalho; o art. 118, §2º, fixa para a liberdade assistida prazo MÍNIMO de seis meses, prorrogável, revogável ou substituível a qualquer tempo. Os distratores trocam prazos clássicos: a internação provisória é de no máximo 45 dias (art. 108); a internação é reavaliada no máximo a cada seis meses, não excede três anos e a liberação é compulsória aos vinte e um anos (art. 121, §§2º, 3º e 5º); a semiliberdade não comporta prazo determinado (art. 120, §2º)."
            },
            {
              id: "mp-eca-8", modo: "lei", fonte: "ECA, arts. 126, 127, 128 e 181",
              enunciado: "Sobre a remissão no procedimento de apuração de ato infracional, é correto afirmar que:",
              alternativas: [
                "concedida pelo Ministério Público antes de iniciado o procedimento judicial, importa necessariamente o reconhecimento da responsabilidade do adolescente e prevalece para efeito de antecedentes",
                "somente pode ser concedida pela autoridade judiciária após o oferecimento da representação, hipótese em que sempre acarreta a extinção do processo de apuração",
                "pode ser cumulada com qualquer medida socioeducativa, inclusive a semiliberdade e a internação, desde que haja concordância expressa do adolescente e de seu defensor",
                "concedida pelo Ministério Público como forma de exclusão do processo, não implica reconhecimento da responsabilidade nem prevalece para antecedentes, e não pode ser cumulada com semiliberdade ou internação",
                "é ato discricionário e irrecorrível do Ministério Público, dispensada a homologação judicial, sendo insuscetível de revisão a medida que dela eventualmente decorra"
              ],
              correta: 3,
              explicacao: "O art. 126, caput, autoriza o Ministério Público a conceder a remissão antes de iniciado o procedimento judicial, como forma de EXCLUSÃO do processo; iniciado este, a remissão concedida pelo juiz importa suspensão ou extinção (parágrafo único). O art. 127 é o núcleo da questão: a remissão não implica necessariamente reconhecimento ou comprovação da responsabilidade, não prevalece para efeito de antecedentes e pode incluir medidas, EXCETO semiliberdade e internação. A remissão ministerial não é ato imune a controle: depende de homologação judicial, com remessa ao Procurador-Geral de Justiça em caso de discordância do juiz (art. 181, §2º), e a medida dela decorrente é revisável a qualquer tempo (art. 128)."
            },
            {
              id: "mp-eca-9", modo: "caso", fonte: "ECA, art. 122, I a III, §§1º e 2º",
              enunciado: "Adolescente primário, sem qualquer medida socioeducativa anterior, é apreendido pela prática de ato infracional análogo a furto simples, sem violência ou grave ameaça a pessoa. Oferecida representação, o juiz aplica a medida de internação. Essa decisão é:",
              alternativas: [
                "adequada, pois a gravidade abstrata do ato infracional e a repercussão social da conduta autorizam, por si sós, a imposição da internação ao adolescente",
                "inadequada, pois as hipóteses autorizadoras da internação são taxativas e o caso não se enquadra em nenhuma delas, havendo ainda outras medidas adequadas",
                "adequada, desde que a internação seja fixada por prazo determinado não superior a três meses, a título de internação-sanção prevista no Estatuto",
                "inadequada apenas quanto ao prazo, devendo a internação ser mantida com reavaliação obrigatória da medida, no máximo, a cada três meses",
                "adequada, pois o rol das medidas socioeducativas não estabelece hierarquia, cabendo ao juiz escolher livremente aquela que reputar mais eficaz"
              ],
              correta: 1,
              explicacao: "O art. 122 do ECA traz rol TAXATIVO: a internação só cabe em ato cometido mediante violência ou grave ameaça à pessoa (I), por reiteração no cometimento de outras infrações graves (II) ou por descumprimento reiterado e injustificável de medida anteriormente imposta (III). O furto simples de adolescente primário não se amolda a nenhuma hipótese, e o §2º reforça que em nenhuma hipótese será aplicada a internação havendo outra medida adequada. A internação-sanção de até três meses (§1º) só existe na hipótese do inciso III, e a reavaliação da internação é no máximo a cada seis meses (art. 121, §2º), não a cada três."
            },
            {
              id: "mp-eca-10", modo: "juris", fonte: "Súmula 492 do STJ",
              enunciado: "Adolescente é representado pela prática de ato infracional análogo ao tráfico de drogas. Sobre a medida socioeducativa cabível, segundo a jurisprudência sumulada do STJ:",
              alternativas: [
                "a internação é obrigatória, pois a equiparação legal do tráfico a crime hediondo impõe ao adolescente a resposta socioeducativa mais gravosa",
                "a internação é obrigatória sempre que expressiva a quantidade de droga apreendida, dispensada nesse caso fundamentação judicial específica sobre a necessidade",
                "é vedada, em qualquer caso, a aplicação de medida socioeducativa privativa de liberdade ao ato infracional análogo ao tráfico de drogas",
                "cabe apenas a advertência, por não haver violência ou grave ameaça a pessoa na conduta análoga ao tráfico ilícito de entorpecentes",
                "o ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação ao adolescente"
              ],
              correta: 4,
              explicacao: "A Súmula 492 do STJ afirma que o ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação. A razão é que o tráfico, isoladamente considerado, não envolve violência ou grave ameaça à pessoa e, portanto, não preenche o inciso I do art. 122 do ECA. Isso não significa vedação absoluta à internação: ela poderá ser aplicada se presente outra hipótese do art. 122 (reiteração ou descumprimento reiterado de medida anterior), sempre com fundamentação concreta."
            },
            {
              id: "mp-eca-11", modo: "juris", fonte: "ECA, art. 104, parágrafo único; Súmula 605 do STJ",
              enunciado: "Adolescente pratica ato infracional aos dezessete anos de idade; instaurado o procedimento de apuração, ele completa dezoito anos no curso do feito. À luz do Estatuto e da jurisprudência sumulada do STJ:",
              alternativas: [
                "a superveniência da maioridade acarreta a extinção do procedimento e a remessa imediata dos autos ao juízo criminal comum competente para a apuração do fato",
                "a maioridade impede a aplicação de medida socioeducativa, remanescendo ao juízo apenas a possibilidade de aplicar as medidas protetivas do art. 101 do Estatuto",
                "considera-se a idade do agente à data do fato, e a maioridade superveniente não interfere na apuração nem na medida em curso",
                "considera-se a idade do agente à data do oferecimento da representação, o que desloca o caso para a competência da Justiça criminal comum desde então",
                "a medida socioeducativa em curso deve ser convertida em pena restritiva de direitos tão logo o socioeducando complete a maioridade penal no curso da execução"
              ],
              correta: 2,
              explicacao: "O art. 104, parágrafo único, do ECA determina que se considere a idade do adolescente à data do FATO — distrator clássico, que a banca costuma trocar pela data da representação ou da sentença. No mesmo sentido, a Súmula 605 do STJ dispõe que a superveniência da maioridade penal não interfere na apuração de ato infracional nem na aplicabilidade de medida socioeducativa em curso, inclusive na liberdade assistida, enquanto não atingida a idade de vinte e um anos, quando a liberação é compulsória (art. 121, §5º)."
            },
            {
              id: "mp-eca-12", modo: "juris", fonte: "Súmula 342 do STJ; ECA, art. 111, II",
              enunciado: "Em audiência de continuação no procedimento de apuração de ato infracional, o adolescente confessa a prática do fato e, por essa razão, o juiz homologa a desistência das demais provas requeridas e profere sentença aplicando medida socioeducativa. Segundo a jurisprudência sumulada do STJ:",
              alternativas: [
                "há nulidade, pois no procedimento para aplicação de medida socioeducativa é nula a desistência de outras provas em face da confissão do adolescente",
                "não há nulidade, pois a confissão do adolescente, por si só, é suficiente para autorizar a aplicação de qualquer medida socioeducativa prevista no Estatuto",
                "não há nulidade, desde que a confissão tenha sido prestada na presença do defensor constituído e do representante do Ministério Público oficiante no feito",
                "há mera irregularidade, sanável pela simples ratificação da confissão em nova audiência designada pelo juízo antes do trânsito em julgado da sentença",
                "não há nulidade, pois no procedimento estatutário vigora a livre apreciação da prova pelo juiz, sem qualquer restrição legal quanto à produção probatória"
              ],
              correta: 0,
              explicacao: "A Súmula 342 do STJ dispõe que, no procedimento para aplicação de medida socioeducativa, é nula a desistência de outras provas em face da confissão do adolescente. O fundamento é a proteção reforçada do adolescente e a garantia de produzir todas as provas necessárias à sua defesa (art. 111, II, do ECA), somada à exigência de provas suficientes de autoria e materialidade para a imposição das medidas dos incisos II a VI do art. 112 (art. 114). A presença do defensor e do Ministério Público não convalida o vício, que é de nulidade e não mera irregularidade."
            }
          ]
        }
      ]
    },

    /* ---------------------------------- BANCA IV · TUTELA COLETIVA */
    {
      id: "mprj-tc",
      titulo: "Processo coletivo e atuação extrajudicial",
      materia: "Tutela Coletiva",
      banca: "IV",
      icone: "🌐",
      descricao: "LACP, CDC processual, coisa julgada coletiva, inquérito civil, TAC e improbidade na prática do promotor.",
      licoes: [
        {
          id: "mprj-tc-1",
          titulo: "Processo coletivo: LACP, CDC e coisa julgada",
          questoes: [
            {
              id: "mp-tc-1", modo: "lei", fonte: "CDC, art. 81, parágrafo único, I, II e III",
              enunciado: "Sobre a classificação dos direitos tuteláveis coletivamente, tal como fixada no art. 81, parágrafo único, do Código de Defesa do Consumidor, é correto afirmar que:",
              alternativas: [
                "os direitos difusos são indivisíveis e pertencem a titulares determináveis, unidos entre si por uma relação jurídica base anterior à lesão",
                "os direitos coletivos em sentido estrito são divisíveis e pertencem a titulares indeterminados, ligados apenas por circunstâncias de fato comuns",
                "os direitos individuais homogêneos são divisíveis e decorrem de origem comum, sendo por isso apenas acidentalmente coletivos",
                "os direitos individuais homogêneos são indivisíveis, o que impede a liquidação e a execução individualizadas da sentença coletiva",
                "a tripartição é construção meramente doutrinária, sem previsão legal, pois a lei confere tratamento unitário às três categorias"
              ],
              correta: 2,
              explicacao: "O art. 81, parágrafo único, do CDC parte de dois critérios: divisibilidade do objeto e determinação dos titulares. Difusos (I) são transindividuais, de natureza indivisível, de titulares INDETERMINADOS ligados por circunstâncias de fato; coletivos em sentido estrito (II) são transindividuais, também INDIVISÍVEIS, de titulares determináveis (grupo, categoria ou classe) ligados entre si ou com a parte contrária por uma relação jurídica base; individuais homogêneos (III) são DIVISÍVEIS e decorrem de origem comum — por isso a doutrina os chama de essencialmente individuais e apenas acidentalmente coletivos, admitindo liquidação e execução individualizadas."
            },
            {
              id: "mp-tc-2", modo: "lei", fonte: "Lei 7.347/85, art. 1º, caput e parágrafo único",
              enunciado: "Nos termos expressos da Lei da Ação Civil Pública, NÃO é cabível ação civil pública para veicular pretensões que envolvam:",
              alternativas: [
                "tributos, contribuições previdenciárias, o FGTS ou outros fundos de natureza institucional cujos beneficiários possam ser individualmente determinados",
                "danos ao meio ambiente causados por concessionária de serviço público, matéria que a lei reserva com exclusividade à ação popular",
                "direitos individuais homogêneos de consumidores, por serem divisíveis e, portanto, insuscetíveis de tutela por via coletiva",
                "a proteção do patrimônio público e social, cuja defesa em juízo se faz exclusivamente pela ação de improbidade administrativa",
                "a ordem urbanística e os bens de valor artístico, histórico e paisagístico, tuteláveis apenas pelo mandado de segurança coletivo"
              ],
              correta: 0,
              explicacao: "O parágrafo único do art. 1º da Lei 7.347/85 veda a ACP para pretensões envolvendo tributos, contribuições previdenciárias, FGTS ou outros fundos de natureza institucional cujos beneficiários possam ser individualmente determinados — a razão é evitar o uso da via coletiva como sucedâneo de ação individual tributária. As demais alternativas são falsas: meio ambiente, consumidor, ordem urbanística, patrimônio público e social e bens de valor histórico e paisagístico estão expressamente no rol do caput do art. 1º, que é exemplificativo (o inciso IV fala em 'qualquer outro interesse difuso ou coletivo')."
            },
            {
              id: "mp-tc-3", modo: "caso", fonte: "CDC, art. 100 e parágrafo único; Lei 7.347/85, art. 13",
              enunciado: "Transitou em julgado sentença coletiva genérica de procedência, proferida em ação civil pública ajuizada pelo Ministério Público em favor de vítimas de dano de origem comum. Decorrido mais de um ano do trânsito em julgado, não houve habilitação de interessados em número compatível com a gravidade do dano. Nessa hipótese:",
              alternativas: [
                "a sentença coletiva perde a eficácia executiva, restando às vítimas apenas o ajuizamento de novas demandas individuais de reparação",
                "os legitimados coletivos poderão promover a liquidação e a execução da indenização devida, revertendo o produto ao fundo de defesa dos direitos difusos",
                "o valor da condenação deve ser rateado em partes iguais entre todos os consumidores que se habilitaram, extinguindo-se o saldo remanescente",
                "a execução coletiva só é admitida se previamente se habilitar ao menos um terço das vítimas identificadas no cadastro judicial",
                "somente o Ministério Público pode executar o valor residual, que será recolhido diretamente ao Tesouro do ente federativo lesado"
              ],
              correta: 1,
              explicacao: "É a chamada fluid recovery (reparação fluida) do art. 100 do CDC: decorrido o prazo de UM ANO sem habilitação de interessados em número compatível com a gravidade do dano, os legitimados do art. 82 do CDC — e não apenas o Ministério Público — poderão promover a liquidação e a execução da indenização devida. O parágrafo único é expresso: o produto da indenização reverte ao fundo criado pela Lei 7.347/85, gerido por conselho com participação necessária do Ministério Público e de representantes da comunidade, com recursos destinados à reconstituição dos bens lesados (art. 13 da LACP). A sentença não perde eficácia nem há exigência legal de percentual mínimo de habilitações."
            },
            {
              id: "mp-tc-4", modo: "juris", fonte: "Súmula 601 do STJ; Súmula 643 do STF",
              enunciado: "De acordo com a jurisprudência sumulada dos Tribunais Superiores sobre a legitimidade do Ministério Público na tutela coletiva:",
              alternativas: [
                "o Ministério Público não pode defender direitos individuais homogêneos em ação civil pública, por serem divisíveis e de titularidade determinada",
                "o Ministério Público só tem legitimidade em matéria de consumo quando o serviço for prestado por particular, excluída a hipótese de serviço público",
                "o Ministério Público carece de legitimidade para a defesa de interesses individuais indisponíveis de incapazes, atribuição privativa da Defensoria Pública",
                "o Ministério Público tem legitimidade para a defesa de direitos difusos, coletivos e individuais homogêneos dos consumidores, ainda que de serviço público",
                "o Ministério Público não tem legitimidade para discutir a ilegalidade de reajuste de mensalidades escolares, por se tratar de interesse meramente individual"
              ],
              correta: 3,
              explicacao: "A alternativa correta reproduz a Súmula 601 do STJ, que abrange as três espécies de direitos do art. 81, parágrafo único, do CDC e não distingue conforme a natureza pública ou privada do prestador do serviço. A última alternativa é contrariada pela Súmula 643 do STF, que reconhece a legitimidade do MP para a ação civil pública fundada na ilegalidade de reajuste de mensalidades escolares. Erram as demais: os direitos individuais homogêneos são tuteláveis pela via coletiva quando presente relevância social; e a defesa de interesses individuais indisponíveis de incapazes é função institucional do MP (CF, art. 127, caput, e CPC, art. 178, II), não atribuição privativa da Defensoria Pública."
            },
            {
              id: "mp-tc-5", modo: "juris", fonte: "Lei 7.347/85, art. 16; CDC, art. 103, §§ 2º e 3º; jurisprudência do STF",
              enunciado: "A respeito da coisa julgada nas ações coletivas, conforme a disciplina legal e o entendimento dos Tribunais Superiores:",
              alternativas: [
                "julgado improcedente o pedido por insuficiência de provas, fica vedada nova ação coletiva sobre os mesmos fatos, ainda que surja prova nova",
                "a coisa julgada coletiva, em qualquer hipótese, prejudica as pretensões individuais de reparação dos danos pessoalmente sofridos",
                "a eficácia da sentença coletiva permanece restrita aos limites territoriais do órgão prolator, tal como consta da literalidade do art. 16 da LACP",
                "na tutela de direitos individuais homogêneos, a improcedência impede a ação individual de quem não interveio como litisconsorte no processo coletivo",
                "a limitação territorial do art. 16 da LACP foi declarada inconstitucional pelo STF, e a procedência aproveita às vítimas no plano individual"
              ],
              correta: 4,
              explicacao: "O STF declarou a inconstitucionalidade da limitação territorial inserida no art. 16 da LACP, restabelecendo a eficácia nacional da sentença coletiva conforme a extensão do dano e a competência do juízo. A coisa julgada coletiva é secundum eventum probationis (a improcedência por insuficiência de provas não impede nova ação com nova prova — art. 16 da LACP e art. 103, I e II, do CDC) e secundum eventum litis no plano individual: a improcedência não prejudica as pretensões individuais de quem não interveio no processo coletivo como litisconsorte (art. 103, §2º) — e é por inverter essa ressalva que a alternativa sobre o litisconsorte erra, ao passo que a procedência é transportada in utilibus para beneficiar as vítimas e seus sucessores, que poderão liquidar e executar individualmente (art. 103, §3º)."
            },
            {
              id: "mp-tc-6", modo: "juris", fonte: "Lei 7.347/85, art. 5º, caput e §§ 1º e 4º; CF, art. 129, §1º; jurisprudência do STF",
              enunciado: "Sobre a legitimidade ativa para a ação civil pública, à luz da Lei 7.347/85, da Constituição e da jurisprudência do Supremo Tribunal Federal:",
              alternativas: [
                "a legitimação é concorrente e disjuntiva, podendo cada colegitimado agir isoladamente, e o STF reconheceu a legitimidade da Defensoria Pública",
                "a legitimação do Ministério Público é exclusiva quando estiverem em jogo direitos difusos, afastando-se a dos demais colegitimados",
                "o Ministério Público, quando não for parte, atuará facultativamente como fiscal da ordem jurídica, conforme juízo do órgão de execução",
                "o requisito da pré-constituição da associação há pelo menos um ano é absoluto, não comportando dispensa pelo juiz em nenhuma hipótese",
                "a Defensoria Pública só pode propor ação civil pública mediante prévia anuência do Ministério Público quanto à relevância social da causa"
              ],
              correta: 0,
              explicacao: "A legitimação do art. 5º da LACP é concorrente e disjuntiva: qualquer dos colegitimados pode propor a ação isoladamente, sem ordem de preferência e sem necessidade de litisconsórcio, e a legitimação do MP não impede a de terceiros (CF, art. 129, §1º). O STF, em controle concentrado, julgou constitucional a inclusão da Defensoria Pública no rol do art. 5º, II. São falsas as demais: o MP, se não for parte, atuará OBRIGATORIAMENTE como fiscal da lei (art. 5º, §1º), e o requisito da pré-constituição anual da associação pode ser dispensado pelo juiz quando houver manifesto interesse social, pela dimensão do dano ou pela relevância do bem jurídico (art. 5º, §4º)."
            }
          ]
        },
        {
          id: "mprj-tc-2",
          titulo: "Inquérito civil, recomendação, TAC e improbidade",
          questoes: [
            {
              id: "mp-tc-7", modo: "lei", fonte: "CF, art. 129, III; Lei 7.347/85, art. 8º, §1º; Resolução CNMP 23/2007, art. 1º",
              enunciado: "O inquérito civil, previsto no art. 129, III, da Constituição e no art. 8º, §1º, da Lei 7.347/85, caracteriza-se como:",
              alternativas: [
                "procedimento de instrução contraditória e obrigatória, cuja ausência acarreta a inépcia da petição inicial da ação civil pública",
                "procedimento administrativo inquisitivo, unilateral e facultativo, que não constitui condição de procedibilidade da ação civil pública",
                "processo administrativo de natureza jurisdicional, presidido pelo Ministério Público, sujeito à ampla defesa desde a instauração",
                "instrumento de titularidade concorrente, podendo ser instaurado também por associações civis e pela Defensoria Pública",
                "procedimento obrigatório sempre que a ação civil pública tiver por objeto direitos individuais homogêneos de consumidores"
              ],
              correta: 1,
              explicacao: "O inquérito civil é procedimento administrativo investigatório, de natureza inquisitiva e unilateral, presidido com exclusividade pelo Ministério Público (CF, art. 129, III, e art. 8º, §1º, da LACP). A Resolução CNMP 23/2007 é expressa ao qualificá-lo como unilateral e facultativo e ao afirmar que não é condição de procedibilidade para as ações a cargo do MP: havendo elementos suficientes, a ACP pode ser ajuizada de imediato, com base em peças de informação. Por ser inquisitivo, eventuais vícios nele ocorridos não contaminam automaticamente a ação, e o contraditório se instaura em juízo."
            },
            {
              id: "mp-tc-8", modo: "caso", fonte: "Lei 7.347/85, art. 9º, caput e §§ 1º a 4º",
              enunciado: "Esgotadas as diligências no inquérito civil, o Promotor de Justiça se convence da inexistência de fundamento para a propositura da ação civil pública e promove, fundamentadamente, o arquivamento dos autos. Nessa hipótese:",
              alternativas: [
                "o arquivamento produz efeitos imediatos e independe de revisão, dada a independência funcional do órgão de execução que o promoveu",
                "os autos devem ser remetidos ao Procurador-Geral de Justiça, a quem cabe homologar o arquivamento ou designar outro membro para agir",
                "o arquivamento depende de homologação judicial, aplicando-se por analogia o regime previsto para o inquérito policial",
                "os autos devem ser remetidos ao Conselho Superior do Ministério Público, e o arquivamento não produz efeito antes da homologação",
                "basta a comunicação ao noticiante, que poderá provocar diretamente o Poder Judiciário para determinar o prosseguimento das investigações"
              ],
              correta: 3,
              explicacao: "O art. 9º da LACP exige promoção fundamentada de arquivamento e determina a remessa dos autos, sob pena de falta grave, no prazo de 3 dias, ao CONSELHO SUPERIOR DO MINISTÉRIO PÚBLICO — não ao Procurador-Geral nem ao juiz. Enquanto não houver deliberação do Conselho, o arquivamento não produz efeito, e as associações legitimadas podem apresentar razões escritas ou documentos (§2º). Não homologada a promoção, o próprio Conselho designará desde logo outro órgão do Ministério Público para ajuizar a ação (§4º), solução que preserva a independência funcional do membro que arquivou."
            },
            {
              id: "mp-tc-9", modo: "lei", fonte: "Lei 7.347/85, art. 5º, §6º",
              enunciado: "O compromisso de ajustamento de conduta previsto no art. 5º, §6º, da Lei 7.347/85:",
              alternativas: [
                "pode ser tomado por qualquer legitimado à ação civil pública, inclusive por associação civil regularmente constituída há mais de um ano",
                "tem natureza de título executivo judicial, dependendo sempre de prévia homologação pelo juízo competente para a ação civil pública",
                "pode ser tomado dos interessados pelos órgãos públicos legitimados, mediante cominações, e tem eficácia de título executivo extrajudicial",
                "autoriza o órgão público compromitente a transigir sobre o próprio direito material, reduzindo a extensão da reparação legalmente devida",
                "substitui integralmente a recomendação e impede a instauração de inquérito civil posterior sobre os mesmos fatos e o mesmo compromissário"
              ],
              correta: 2,
              explicacao: "O art. 5º, §6º, da LACP é expresso: os ÓRGÃOS PÚBLICOS legitimados poderão tomar dos interessados compromisso de ajustamento de sua conduta às exigências legais, mediante cominações, com eficácia de título executivo EXTRAJUDICIAL. Associações civis, embora legitimadas à ACP, não podem celebrar TAC — distrator clássico. O compromisso não é espaço de disposição do direito material, que é indisponível: a negociação recai apenas sobre prazo, modo e lugar de cumprimento da obrigação. Distingue-se da recomendação (LC 75/93, art. 6º, XX, e Lei 8.625/93, art. 27, parágrafo único, IV), que é ato unilateral e sem força executiva."
            },
            {
              id: "mp-tc-10", modo: "juris", fonte: "Lei 8.429/92, com a Lei 14.230/2021; jurisprudência do STF",
              enunciado: "Sobre a aplicação no tempo das alterações promovidas pela Lei 14.230/2021 na Lei de Improbidade Administrativa, segundo o entendimento firmado pelo Supremo Tribunal Federal:",
              alternativas: [
                "a revogação da modalidade culposa retroage para desconstituir condenações por improbidade já transitadas em julgado; o novo prazo prescricional também retroage",
                "a lei nova não alcança fato algum anterior à sua vigência, ainda que o processo esteja em curso e sem condenação definitiva; a coisa julgada é indiferente",
                "o novo prazo prescricional de oito anos retroage para atingir fatos pretéritos, extinguindo desde logo as ações em andamento; a modalidade culposa subsiste",
                "permanece dispensável a comprovação de dolo nos atos que atentam contra os princípios da administração pública; o rol do art. 11 segue meramente exemplificativo",
                "a revogação da modalidade culposa não atinge a coisa julgada, mas incide nos processos sem condenação definitiva; o novo regime prescricional é irretroativo"
              ],
              correta: 4,
              explicacao: "O STF fixou que é necessária a comprovação de dolo para a tipificação de qualquer ato de improbidade (arts. 9º, 10 e 11 da Lei 8.429/92), não mais existindo modalidade culposa. Quanto ao direito intertemporal: a norma que revogou a improbidade culposa é irretroativa diante da coisa julgada (CF, art. 5º, XXXVI), mas aplica-se aos atos culposos praticados sob a lei antiga cujos processos ainda não têm condenação transitada em julgado, cabendo ao juízo competente analisar a presença de dolo. O novo regime prescricional (art. 23, com prazo de 8 anos e prescrição intercorrente) também é irretroativo, incidindo a partir da publicação da lei."
            },
            {
              id: "mp-tc-11", modo: "juris", fonte: "Lei 8.429/92, art. 17, com a Lei 14.230/2021; jurisprudência do STF",
              enunciado: "Quanto à legitimidade ativa para a ação de improbidade administrativa, após a Lei 14.230/2021 e o pronunciamento do Supremo Tribunal Federal em controle concentrado:",
              alternativas: [
                "a legitimidade tornou-se exclusiva do Ministério Público, tendo sido validada a supressão da legitimidade dos entes lesados",
                "qualquer cidadão no gozo dos direitos políticos passou a ter legitimidade, à semelhança do que ocorre na ação popular",
                "a legitimidade é concorrente entre o Ministério Público e a pessoa jurídica de direito público lesada, pois o STF afastou a exclusividade",
                "somente a pessoa jurídica lesada pode propor a ação, cabendo ao Ministério Público apenas intervir como fiscal da ordem jurídica",
                "a legitimidade é do Ministério Público, mas a pessoa jurídica lesada deve obrigatoriamente compor o polo passivo da demanda"
              ],
              correta: 2,
              explicacao: "A Lei 14.230/2021 deu ao art. 17 da Lei 8.429/92 redação que atribuía a legitimidade exclusivamente ao Ministério Público. O STF, em controle concentrado, declarou a inconstitucionalidade parcial desse regime e restabeleceu a legitimidade ativa CONCORRENTE E DISJUNTIVA da pessoa jurídica de direito público interessada, que pode propor a ação ou nela prosseguir. Não há legitimidade do cidadão para a ação de improbidade — essa é característica da ação popular (Lei 4.717/65) —, e a pessoa jurídica lesada figura no polo ativo ou como interveniente, não como ré por imposição legal."
            },
            {
              id: "mp-tc-12", modo: "lei", fonte: "Lei 8.429/92, art. 17-B, caput e §§ 1º e 4º (Lei 14.230/2021)",
              enunciado: "O acordo de não persecução cível, introduzido no art. 17-B da Lei 8.429/92, é corretamente descrito na alternativa:",
              alternativas: [
                "pode ser celebrado pelo Ministério Público na investigação, no curso da ação ou na execução da sentença, e depende de homologação judicial",
                "dispensa o ressarcimento integral do dano, bastando a reversão da vantagem indevida obtida à pessoa jurídica lesada",
                "só pode ser celebrado antes do ajuizamento da ação de improbidade, sendo nulo o acordo firmado após a citação do réu",
                "independe de homologação judicial quando aprovado pelo órgão do Ministério Público competente para apreciar promoções de arquivamento",
                "é vedado sempre que o ato de improbidade imputado ao agente importar enriquecimento ilícito, por indisponibilidade do interesse público"
              ],
              correta: 0,
              explicacao: "O art. 17-B permite ao Ministério Público celebrar o ANPC, exigindo que dele advenham, ao menos, o integral ressarcimento do dano e a reversão à pessoa jurídica lesada da vantagem indevida obtida. A celebração depende cumulativamente da oitiva do ente federativo lesado, da aprovação pelo órgão do MP competente para apreciar promoções de arquivamento (quando anterior ao ajuizamento) e, em qualquer caso, de HOMOLOGAÇÃO JUDICIAL. O §4º é expresso ao admitir o acordo no curso da investigação, no curso da ação de improbidade ou no momento da execução da sentença condenatória — não há a restrição temporal nem a vedação por enriquecimento ilícito sugeridas nos distratores."
            }
          ]
        }
      ]
    },

    /* ----------------------------- BANCA IV · DIREITOS DIFUSOS */
    {
      id: "mprj-difusos",
      titulo: "Direitos difusos — direito material",
      materia: "Tutela Coletiva",
      banca: "IV",
      descricao: "O que a ACP discute no mérito: responsabilidade civil ambiental, LC 140, Código Florestal, Mata Atlântica, SNUC e resíduos sólidos.",
      licoes: [
        {
          id: "mprj-difusos-1",
          titulo: "Direito ambiental material: responsabilidade, licenciamento e áreas protegidas",
          questoes: [
            {
              id: "mp-dif-1", modo: "juris", fonte: "Súmula 623 do STJ; Tema 999 do STF (RE 654.833); Lei 6.938/81, art. 14, §1º",
              enunciado: "Adquirente de imóvel rural é demandado em ação civil pública para recompor área de preservação permanente desmatada pelo proprietário anterior há mais de vinte anos. Em defesa, alega que não deu causa ao dano e que a pretensão já estaria prescrita. À luz da jurisprudência dos tribunais superiores, é correto afirmar que:",
              alternativas: [
                "as obrigações ambientais têm natureza propter rem e podem ser exigidas do proprietário ou possuidor atual e/ou dos anteriores, à escolha do credor, sendo imprescritível a pretensão de reparação civil do dano ambiental",
                "o adquirente somente responde pela recomposição se tiver ciência inequívoca da degradação ao tempo da aquisição, incumbindo ao autor da ação demonstrar essa ciência por cláusula expressa constante do título aquisitivo",
                "a pretensão de reparação do dano ambiental submete-se a prazo prescricional de dez anos contado da alienação do imóvel, transferindo-se ao adquirente apenas o dever de não degradar a área daquele momento em diante",
                "a responsabilidade recai sobre o causador direto do dano, de modo que o adquirente só pode ser acionado em execução subsidiária, depois de excutido integralmente o patrimônio do alienante degradador",
                "a consolidação da ocupação por longo período autoriza a aplicação da teoria do fato consumado, convertendo-se a obrigação de recompor em mera indenização pecuniária a ser revertida ao fundo de direitos difusos"
              ],
              correta: 0,
              explicacao: "A Súmula 623 do STJ fixa que as obrigações ambientais têm natureza propter rem: acompanham a coisa e podem ser cobradas do proprietário ou possuidor atual e/ou dos anteriores, À ESCOLHA DO CREDOR — o adquirente responde ainda que não tenha causado a degradação. Some-se o Tema 999 do STF (RE 654.833): é imprescritível a pretensão de reparação civil de dano ambiental. A responsabilidade é objetiva e independe de culpa (Lei 6.938/81, art. 14, §1º), regida pela teoria do risco integral. Os distratores caem por dispositivos próprios: a Súmula 613 do STJ veda a teoria do fato consumado em direito ambiental, e a execução subsidiária da Súmula 652 do STJ é regra restrita à Administração Pública omissa no dever de fiscalizar, não ao particular adquirente."
            },
            {
              id: "mp-dif-2", modo: "lei", fonte: "LC 140/2011, arts. 2º, II e III, 13, caput e §1º, 15, 16, parágrafo único, e 17, §3º",
              enunciado: "A Lei Complementar 140/2011 fixa normas de cooperação entre União, Estados, Distrito Federal e Municípios nas ações administrativas decorrentes da competência comum em matéria ambiental. Sobre esse regime, é correto afirmar que:",
              alternativas: [
                "a atuação supletiva se configura sempre que o órgão originariamente competente ultrapassar o prazo regulamentar de análise do pedido, hipótese em que o ente federativo de maior abrangência assume de ofício o licenciamento",
                "o empreendimento de impacto regional deve ser licenciado cumulativamente pelo Estado e por cada Município atingido, exigindo-se licença autônoma de todo ente cujo território sofra os efeitos diretos da atividade",
                "a atuação subsidiária consiste no apoio técnico, científico, administrativo ou financeiro prestado por outro ente federativo e depende de solicitação do ente originariamente detentor da atribuição",
                "a manifestação dos demais entes federativos interessados no processo de licenciamento assume caráter vinculante para o órgão licenciador quando o impacto do empreendimento ultrapassar seus limites territoriais",
                "o auto de infração lavrado por ente diverso do responsável pelo licenciamento é nulo de pleno direito, pois a atribuição de fiscalizar segue estritamente a atribuição para licenciar o empreendimento"
              ],
              correta: 2,
              explicacao: "O art. 2º, III, define atuação subsidiária como a ação do ente que auxilia no desempenho das atribuições da competência comum — e o art. 16, parágrafo único, exige que ela seja SOLICITADA pelo ente originariamente detentor da atribuição, prestando-se por apoio técnico, científico, administrativo ou financeiro. Não se confunde com a atuação supletiva (art. 2º, II), em que o ente se SUBSTITUI ao detentor originário, e apenas nas hipóteses taxativas do art. 15 (inexistência de órgão ambiental capacitado ou de conselho de meio ambiente). Os demais itens contrariam: o art. 13, caput (um único ente licencia), o §1º do art. 13 (a manifestação dos demais entes é não vinculante) e o art. 17, §3º (a fiscalização é comum a todos os entes; o auto lavrado por ente não licenciador não é nulo — apenas prevalece o do órgão licenciador)."
            },
            {
              id: "mp-dif-3", modo: "lei", fonte: "Lei 12.651/2012 (Código Florestal), art. 15, I a III, e §1º; arts. 12 e 8º",
              enunciado: "Proprietário de imóvel rural situado no Estado do Rio de Janeiro, cuja faixa ciliar protegida como área de preservação permanente está em processo de recuperação, pretende computá-la no cálculo do percentual de Reserva Legal. Nos termos do Código Florestal, esse cômputo:",
              alternativas: [
                "é vedado em qualquer hipótese, pois a área de preservação permanente e a Reserva Legal são institutos autônomos, com finalidades diversas e regimes de proteção inconfundíveis, que a lei não autoriza sobrepor no mesmo imóvel",
                "é admitido apenas nos imóveis situados na Amazônia Legal e desde que o percentual mínimo de Reserva Legal exigido supere cinquenta por cento da área total do imóvel, conforme o zoneamento ecológico-econômico estadual",
                "é admitido desde que o proprietário compense área equivalente em outro imóvel situado no mesmo bioma e na mesma bacia hidrográfica, mediante servidão ambiental averbada em cartório ou aquisição de Cota de Reserva Ambiental registrada",
                "é admitido desde que não implique conversão de novas áreas para uso alternativo do solo, a área esteja conservada ou em recuperação e o imóvel tenha sido inscrito no Cadastro Ambiental Rural, mantido o regime da área de preservação permanente",
                "é admitido e converte a área computada em Reserva Legal para todos os efeitos, passando ela a admitir exploração econômica por manejo florestal sustentável mediante autorização prévia do órgão estadual competente"
              ],
              correta: 3,
              explicacao: "O art. 15 admite o cômputo das APPs no cálculo do percentual de Reserva Legal, mas sob TRÊS REQUISITOS CUMULATIVOS: que o benefício não implique conversão de novas áreas para uso alternativo do solo (I), que a área esteja conservada ou em processo de recuperação (II) e que o proprietário ou possuidor tenha requerido a inclusão do imóvel no CAR (III). O §1º é decisivo contra a última alternativa: o regime de proteção da APP NÃO SE ALTERA com o cômputo — ela não passa a admitir o manejo que a Reserva Legal comporta (art. 20), tampouco a intervenção fora das hipóteses de utilidade pública, interesse social ou baixo impacto (art. 8º). No Rio de Janeiro a Reserva Legal é de 20% (art. 12, II), percentual das regiões fora da Amazônia Legal, e a compensação em outro imóvel é instituto diverso, próprio da regularização do passivo."
            },
            {
              id: "mp-dif-4", modo: "caso", fonte: "Lei 11.428/2006 (Mata Atlântica), art. 14, caput e §1º; art. 11",
              enunciado: "Sociedade empresária requer ao órgão ambiental estadual autorização para suprimir vegetação secundária em estágio avançado de regeneração do Bioma Mata Atlântica, em área rural, para implantar empreendimento. Segundo a Lei 11.428/2006, essa supressão:",
              alternativas: [
                "pode ser autorizada em caso de utilidade pública ou de interesse social, bastando que o empreendedor apresente projeto de recomposição de área equivalente no mesmo Município e no mesmo estágio de regeneração",
                "independe de autorização específica, submetendo-se ao regime da vegetação em estágio inicial de regeneração, cujo corte é liberado mediante simples comunicação prévia ao órgão ambiental municipal competente",
                "é livre quando o imóvel estiver inscrito no Cadastro Ambiental Rural e a área a ser suprimida não ultrapassar vinte por cento do remanescente florestal existente na propriedade do interessado",
                "é vedada de forma absoluta, ainda que caracterizada a utilidade pública, pois a vegetação em estágio avançado integra o patrimônio nacional e se torna insuscetível de qualquer intervenção autorizada",
                "somente pode ser autorizada em caso de utilidade pública, caracterizada e motivada em procedimento administrativo próprio, e quando inexistir alternativa técnica e locacional ao empreendimento proposto"
              ],
              correta: 4,
              explicacao: "O art. 14 gradua o regime pelo estágio de regeneração: a vegetação primária e a secundária em estágio AVANÇADO só podem ser suprimidas por UTILIDADE PÚBLICA; a secundária em estágio MÉDIO admite ainda o interesse social. Em ambos os casos exige-se caracterização e motivação em procedimento administrativo próprio e — condicionante que os distratores omitem — a INEXISTÊNCIA DE ALTERNATIVA TÉCNICA E LOCACIONAL ao empreendimento. A autorização é do órgão estadual, com anuência prévia do órgão federal ou municipal quando couber (§1º). O art. 11 acrescenta vedações absolutas ao corte nos estágios médio e avançado, como abrigar espécies ameaçadas de extinção, proteger mananciais, formar corredores ecológicos ou proteger o entorno de unidades de conservação."
            },
            {
              id: "mp-dif-5", modo: "caso", fonte: "Lei 9.985/2000 (SNUC), art. 36, caput e §§ 1º a 4º; ADI 3.378 do STF",
              enunciado: "Empreendimento de significativo impacto ambiental, assim reconhecido pelo órgão licenciador com base em EIA/RIMA, atinge a zona de amortecimento de uma Floresta Estadual, unidade de conservação do Grupo de Uso Sustentável. Sobre a compensação ambiental prevista no art. 36 do SNUC, é correto afirmar que:",
              alternativas: [
                "o montante da compensação não pode ser inferior a meio por cento dos custos totais previstos para a implantação do empreendimento, piso que vincula o órgão licenciador independentemente do grau de impacto apurado",
                "o licenciamento só pode ser concedido mediante autorização do órgão responsável pela administração da unidade afetada, que deverá ser uma das beneficiárias da compensação ainda que não integre o Grupo de Proteção Integral",
                "cabe ao empreendedor indicar no EIA/RIMA as unidades de conservação beneficiárias, ficando o órgão ambiental licenciador vinculado a essa escolha, que não pode contemplar a criação de novas unidades de conservação",
                "a autorização do órgão gestor da unidade só é exigível quando o empreendimento se situar dentro dos limites da unidade de conservação, não bastando que os seus efeitos alcancem a respectiva zona de amortecimento",
                "a compensação destina-se exclusivamente a unidades do Grupo de Proteção Integral, sendo vedado o aporte de recursos em unidades de uso sustentável, ainda que de posse e domínio públicos e situadas na Amazônia Legal"
              ],
              correta: 1,
              explicacao: "O §3º do art. 36 traz a regra cobrada: quando o empreendimento afeta unidade de conservação específica OU A SUA ZONA DE AMORTECIMENTO, o licenciamento só pode ser concedido mediante autorização do órgão responsável pela administração da unidade, e a unidade afetada, MESMO QUE NÃO PERTENÇA AO GRUPO DE PROTEÇÃO INTEGRAL, deve ser uma das beneficiárias da compensação. Os distratores invertem outros parágrafos: quem define as unidades beneficiadas é o órgão licenciador, ouvido o empreendedor, podendo inclusive criar novas unidades (§2º); a obrigação pode ser cumprida em unidades de uso sustentável de posse e domínio públicos (§4º); e o percentual é fixado conforme o grau de impacto — o STF, na ADI 3.378, declarou inconstitucional a expressão que impunha piso de meio por cento dos custos totais."
            },
            {
              id: "mp-dif-6", modo: "caso", fonte: "Lei 12.305/2010 (PNRS), art. 27, §1º; Lei 6.938/81, art. 3º, IV, e art. 14, §1º",
              enunciado: "Indústria geradora de resíduos perigosos contrata empresa regularmente licenciada para o transporte e a destinação final dos rejeitos. A contratada, porém, despeja o material em área não licenciada, contaminando o solo e o lençol freático. Instaurado inquérito civil, é correto afirmar que:",
              alternativas: [
                "a responsabilidade do gerador cessa com a entrega dos resíduos à empresa licenciada, transferindo-se integralmente à contratada a partir da emissão do manifesto de transporte de resíduos perigosos pelo órgão ambiental",
                "o gerador responde apenas se demonstrada culpa in eligendo na contratação, ônus que incumbe ao Ministério Público, pois a responsabilidade por ato de terceiro não dispensa a prova da negligência na escolha da empresa",
                "a contratação de terceiro licenciado não isenta o gerador da responsabilidade pelos danos decorrentes do gerenciamento inadequado dos resíduos, respondendo ele solidariamente na condição de poluidor indireto",
                "a responsabilidade do gerador é meramente subsidiária, de modo que só pode ser executado depois de esgotado o patrimônio da empresa contratada e o dos sócios que integram o respectivo quadro societário",
                "cabe ao Município, titular do serviço público de manejo de resíduos sólidos, reparar integralmente o dano ambiental, assegurado o direito de regresso contra a empresa contratada e contra a indústria geradora"
              ],
              correta: 2,
              explicacao: "O art. 27, §1º, da Lei 12.305/2010 é expresso: a contratação de serviços de coleta, transporte, tratamento ou destinação final NÃO ISENTA o gerador da responsabilidade por danos provocados pelo gerenciamento inadequado dos resíduos ou rejeitos — expressão da responsabilidade compartilhada pelo ciclo de vida dos produtos. Como o art. 3º, IV, da Lei 6.938/81 considera poluidor quem responde DIRETA OU INDIRETAMENTE pela atividade degradadora, o gerador figura como poluidor indireto e responde solidariamente, de forma objetiva e independentemente de culpa (art. 14, §1º), sem que o Ministério Público precise provar culpa in eligendo. A execução subsidiária invocada em um dos distratores é a da Súmula 652 do STJ, restrita à Administração omissa no dever de fiscalizar."
            }
          ]
        }
      ]
    },

    /* ------------------------ BANCA IV · PRINCÍPIOS INSTITUCIONAIS */
    {
      id: "mprj-inst",
      titulo: "O Ministério Público na CF/88 e nas leis orgânicas",
      materia: "Princípios Institucionais do Ministério Público",
      banca: "IV",
      icone: "🛡️",
      descricao: "Princípios, garantias, vedações e funções institucionais — CF arts. 127 a 130-A, Lei 8.625/93 e LC-RJ 106/03.",
      licoes: [
        {
          id: "mprj-inst-1",
          titulo: "O MP na CF/88, na Lei 8.625/93 e na LC-RJ 106/03",
          questoes: [
            {
              id: "mp-inst-1", modo: "lei", fonte: "CF, art. 128, §§ 1º a 4º",
              enunciado: "A respeito da investidura no cargo de Procurador-Geral de Justiça de Ministério Público estadual, à luz da Constituição da República:",
              alternativas: [
                "o nome escolhido pelo Chefe do Poder Executivo deve ser previamente aprovado pela maioria absoluta da Assembleia Legislativa, tal como se exige do Procurador-Geral da República perante o Senado Federal",
                "o Procurador-Geral é eleito diretamente pelos membros da carreira e toma posse independentemente de qualquer ato de nomeação do Chefe do Poder Executivo estadual",
                "a lista tríplice é formada dentre integrantes da carreira e advogados de notório saber jurídico e reputação ilibada, cabendo ao Governador do Estado a escolha e a nomeação",
                "o próprio Ministério Público forma lista tríplice dentre integrantes da carreira, cabendo ao Chefe do Poder Executivo a nomeação, para mandato de dois anos, permitida uma recondução",
                "a nomeação é de livre escolha do Chefe do Poder Executivo dentre integrantes da carreira, para mandato de dois anos, vedada a recondução para o período imediatamente subsequente"
              ],
              correta: 3,
              explicacao: "O art. 128, §3º, da CF determina que os Ministérios Públicos dos Estados e o do DF e Territórios formem lista tríplice dentre integrantes da carreira, para escolha de seu Procurador-Geral, nomeado pelo Chefe do Poder Executivo para mandato de dois anos, permitida uma recondução. O distrator da aprovação legislativa prévia confunde o PGJ com o Procurador-Geral da República, que é nomeado pelo Presidente após aprovação do nome pela maioria absoluta do Senado (art. 128, §1º). Também não há lista aberta a advogados: a escolha é sempre dentre integrantes da carreira. Já a destituição do PGJ dá-se por deliberação da maioria absoluta do Poder Legislativo, na forma da lei complementar respectiva (art. 128, §4º)."
            },
            {
              id: "mp-inst-2", modo: "lei", fonte: "CF, art. 129, III, V, VII, VIII e IX",
              enunciado: "Nos termos do art. 129 da Constituição da República, constitui função institucional do Ministério Público:",
              alternativas: [
                "exercer a representação judicial e a consultoria jurídica das entidades públicas, sempre que o ente federativo não contar com órgão de advocacia pública estruturado em carreira",
                "promover o inquérito civil, cuja instauração, contudo, fica condicionada à prévia autorização do Conselho Superior do Ministério Público",
                "defender judicialmente os direitos e interesses das populações indígenas, atuando obrigatoriamente em litisconsórcio necessário com o órgão federal indigenista",
                "requisitar diligências investigatórias e a instauração de inquérito policial, ficando impedido, por consequência, de oferecer a denúncia no feito respectivo",
                "exercer o controle externo da atividade policial, na forma da lei complementar a que se refere o art. 128 da Constituição da República"
              ],
              correta: 4,
              explicacao: "O controle externo da atividade policial é função institucional expressa do art. 129, VII, da CF. O distrator mais tentador é o primeiro: o art. 129, IX, autoriza o MP a exercer outras funções compatíveis com sua finalidade, mas VEDA expressamente a representação judicial e a consultoria jurídica de entidades públicas — sem qualquer ressalva quanto à existência ou não de advocacia pública. O inquérito civil é instaurado pelo próprio órgão de execução (art. 129, III), cabendo ao Conselho Superior a apreciação da promoção de arquivamento, e não a autorização prévia. A defesa judicial dos direitos e interesses das populações indígenas é função do MP (art. 129, V), mas não depende de litisconsórcio necessário com o órgão indigenista. Por fim, a requisição de diligências e de inquérito policial (art. 129, VIII) não gera impedimento para a denúncia."
            },
            {
              id: "mp-inst-3", modo: "caso", fonte: "CF, art. 127, §1º",
              enunciado: "Em uma audiência de instrução, o Promotor de Justiça titular é substituído por seu colega em exercício cumulativo, sem que disso decorra qualquer nulidade processual. Em outro feito, o Promotor natural sustenta tese jurídica diversa da que fora adotada nos autos por seu antecessor, não podendo ser compelido pelo Procurador-Geral de Justiça a alterar sua convicção. Os princípios institucionais que explicam, respectivamente, cada uma dessas situações são:",
              alternativas: [
                "a indivisibilidade e a independência funcional",
                "a unidade e a inamovibilidade dos membros da instituição",
                "a independência funcional e a indivisibilidade",
                "a hierarquia funcional interna e o princípio do promotor natural",
                "a autonomia administrativa e a irredutibilidade de subsídios"
              ],
              correta: 0,
              explicacao: "O art. 127, §1º, da CF fixa como princípios institucionais do MP a unidade, a indivisibilidade e a independência funcional. Pela indivisibilidade, os membros podem substituir-se uns aos outros na forma da lei, porque quem atua no processo é a instituição, e não a pessoa do agente. Pela independência funcional, o membro submete-se apenas à lei e à sua consciência jurídica, inexistindo hierarquia funcional que lhe imponha uma tese (a subordinação ao PGJ é apenas administrativa). A alternativa que inverte os dois conceitos é o distrator clássico. Inamovibilidade e irredutibilidade de subsídios não são princípios institucionais, mas garantias dos membros (art. 128, §5º, I), assim como a autonomia administrativa é atributo da instituição (art. 127, §2º)."
            },
            {
              id: "mp-inst-4", modo: "juris", fonte: "Súmula 234 do STJ",
              enunciado: "Promotor de Justiça acompanha pessoalmente diligências ao longo da apuração de um crime e, encerrada a investigação, oferece denúncia contra o investigado. A defesa suscita nulidade, alegando que o membro estaria impedido de acusar. De acordo com o entendimento sumulado do Superior Tribunal de Justiça:",
              alternativas: [
                "o membro que participou da investigação fica impedido de denunciar, devendo os autos ser remetidos ao Procurador-Geral de Justiça para designação de outro órgão de execução",
                "a participação de membro do Ministério Público na fase investigatória criminal não acarreta o seu impedimento ou suspeição para o oferecimento da denúncia",
                "o impedimento somente se configura quando o membro houver presidido procedimento investigatório criminal instaurado no âmbito do próprio Ministério Público",
                "trata-se de suspeição relativa, que se convalida caso a defesa deixe de alegá-la na resposta à acusação, operando-se a preclusão da matéria",
                "a denúncia é nula de pleno direito, vício que apenas se sana com a ratificação do ato pelo Procurador-Geral de Justiça antes da instrução"
              ],
              correta: 1,
              explicacao: "A Súmula 234 do STJ é expressa: a participação de membro do Ministério Público na fase investigatória criminal não acarreta o seu impedimento ou suspeição para o oferecimento da denúncia. A lógica é que o MP não é órgão julgador — as causas de impedimento e suspeição do CPP tutelam a imparcialidade do juiz, ao passo que o membro do MP é parte imparcial que forma sua convicção justamente a partir dos elementos colhidos. O enunciado não distingue entre inquérito policial e procedimento investigatório presidido pelo próprio MP, de modo que a solução é a mesma nas duas hipóteses."
            },
            {
              id: "mp-inst-5", modo: "juris", fonte: "CF, art. 129, I, VI, VIII e IX; entendimento consolidado do STF sobre o poder investigatório do MP",
              enunciado: "A respeito do poder de investigação criminal do Ministério Público, segundo a jurisprudência dos Tribunais Superiores:",
              alternativas: [
                "é vedado, porque a apuração de infrações penais constitui atribuição exclusiva das polícias judiciárias, restando ao Ministério Público apenas requisitar diligências à autoridade policial",
                "é admitido apenas em caráter subsidiário, condicionado a prévia autorização judicial e ao arquivamento do inquérito policial anteriormente instaurado sobre o mesmo fato",
                "é legítimo, por decorrer das próprias funções constitucionais da instituição, devendo ser exercido nos limites das atribuições do órgão, com respeito aos direitos e garantias fundamentais e sob controle jurisdicional",
                "é legítimo e não encontra limites procedimentais, podendo o membro determinar de ofício, no procedimento que preside, a interceptação telefônica e a busca domiciliar do investigado",
                "somente se admite quando a investigação recair sobre servidores públicos ou sobre integrantes dos próprios órgãos policiais, únicas hipóteses admitidas pelo Supremo Tribunal Federal"
              ],
              correta: 2,
              explicacao: "O STF, em julgamento com repercussão geral, reconheceu a legitimidade da investigação criminal conduzida diretamente pelo Ministério Público, como decorrência de suas funções constitucionais (art. 129, I, VI, VIII e IX, da CF) e da teoria dos poderes implícitos, sem que isso esvazie a atribuição das polícias judiciárias. O poder, porém, não é ilimitado: deve observar as garantias do investigado, as prerrogativas profissionais dos advogados — inclusive o acesso amplo aos elementos de prova já documentados, na linha da Súmula Vinculante 14 — e as matérias sujeitas à reserva de jurisdição, como a interceptação telefônica e a busca domiciliar, que jamais podem ser determinadas pelo próprio membro. Não há, ademais, restrição do poder investigatório a crimes de servidores ou de policiais."
            },
            {
              id: "mp-inst-6", modo: "juris", fonte: "Súmula 189 do STJ; CPC, art. 178, parágrafo único",
              enunciado: "Em execução fiscal ajuizada por Município para a cobrança de créditos tributários, o juiz determina a remessa dos autos ao Ministério Público para atuação como fiscal da ordem jurídica. Conforme entendimento sumulado do Superior Tribunal de Justiça, a intervenção do Ministério Público nesses feitos:",
              alternativas: [
                "é desnecessária, de modo que a ausência de manifestação do órgão não acarreta nulidade do processo executivo",
                "é obrigatória, por haver interesse público evidenciado pela própria natureza tributária do crédito exequendo",
                "é obrigatória apenas quando figurar no polo passivo pessoa jurídica de direito público ou entidade da administração indireta",
                "é dispensável em primeiro grau, mas obrigatória na instância recursal, sob pena de nulidade absoluta do acórdão proferido",
                "é exigível somente nas execuções fiscais cujo valor ultrapasse o limite legal de dispensa de ajuizamento pela Fazenda credora"
              ],
              correta: 0,
              explicacao: "A Súmula 189 do STJ firma que é desnecessária a intervenção do Ministério Público nas execuções fiscais. A presença da Fazenda Pública em juízo não caracteriza, por si só, o interesse público que justifica a intervenção do órgão — é o que diz expressamente o parágrafo único do art. 178 do CPC/2015. O interesse público apto a atrair o custos iuris é o primário, ligado à ordem jurídica e aos valores sociais indisponíveis, e não o mero interesse patrimonial do ente arrecadador. Por isso, a falta de vista ao MP nesses autos não gera nulidade."
            }
          ]
        },
        {
          id: "mprj-inst-2",
          titulo: "Lei Orgânica Nacional — órgãos, carreira, garantias e vedações",
          questoes: [
            {
              id: "mp-inst-7", modo: "lei", fonte: "Lei 8.625/93, arts. 5º, 6º, 7º e 8º",
              enunciado: "A Lei Orgânica Nacional do Ministério Público distribui a estrutura da instituição entre órgãos da Administração Superior, órgãos de administração, órgãos de execução e órgãos auxiliares. Sobre essa classificação, é correto afirmar que:",
              alternativas: [
                "a Corregedoria-Geral do Ministério Público integra a Administração Superior e, por fiscalizar a atuação funcional dos membros nos feitos, é igualmente arrolada entre os órgãos de execução",
                "as Promotorias de Justiça e as Procuradorias de Justiça são órgãos de execução, ao passo que os Promotores e os Procuradores de Justiça figuram apenas como agentes nelas lotados",
                "o Conselho Superior do Ministério Público, embora seja órgão da Administração Superior, figura também entre os órgãos de execução, tal como o Procurador-Geral de Justiça",
                "o Centro de Estudos e Aperfeiçoamento Funcional e a Comissão de Concurso são órgãos da Administração Superior, salvo quando presididos por Procurador de Justiça designado pelo Procurador-Geral",
                "os Centros de Apoio Operacional são órgãos auxiliares, mas os estagiários não integram a estrutura da instituição, por não titularizarem vínculo funcional efetivo com ela"
              ],
              correta: 2,
              explicacao: "O art. 5º da Lei 8.625/93 arrola como órgãos da Administração Superior a Procuradoria-Geral de Justiça, o Colégio de Procuradores de Justiça, o Conselho Superior do Ministério Público e a Corregedoria-Geral. Já o art. 7º lista como órgãos de execução o Procurador-Geral de Justiça, o Conselho Superior do Ministério Público, os Procuradores de Justiça e os Promotores de Justiça: o Conselho Superior e o Procurador-Geral ocupam, portanto, dupla posição na estrutura, e é esse o ponto cobrado. A Corregedoria-Geral e o Colégio de Procuradores não figuram entre os órgãos de execução. O art. 6º qualifica como órgãos de administração as Procuradorias e as Promotorias de Justiça — as unidades, e não as pessoas dos membros que nelas oficiam —, e o art. 8º trata como auxiliares os Centros de Apoio Operacional, a Comissão de Concurso, o Centro de Estudos e Aperfeiçoamento Funcional, os órgãos de apoio administrativo e os estagiários."
            },
            {
              id: "mp-inst-8", modo: "caso", fonte: "Lei 8.625/93, art. 9º, §§ 1º a 3º",
              enunciado: "Concluída a votação, o Ministério Público do Estado Alfa encaminhou ao Governador a lista tríplice para a escolha do novo Procurador-Geral de Justiça. Transcorridos vinte dias do recebimento da lista, o Chefe do Poder Executivo ainda não havia efetivado a nomeação. À luz da Lei 8.625/93, na situação descrita:",
              alternativas: [
                "a lista tríplice perde a eficácia e o Colégio de Procuradores de Justiça deve promover nova eleição no prazo de trinta dias, dela excluídos os três nomes anteriormente indicados",
                "o Procurador-Geral de Justiça cujo mandato se encerrou permanece no cargo, em regime de prorrogação, até que sobrevenha a nomeação do sucessor pelo Chefe do Poder Executivo",
                "cabe ao Colégio de Procuradores de Justiça dar posse ao mais antigo dos integrantes da lista, que exercerá o cargo em caráter interino enquanto não houver nomeação",
                "compete à Assembleia Legislativa, por deliberação da maioria absoluta de seus membros, escolher e empossar um dos integrantes da lista tríplice para o exercício do mandato",
                "está investido automaticamente no cargo o integrante da lista mais votado, porque a nomeação não foi efetivada nos quinze dias seguintes ao recebimento da lista tríplice"
              ],
              correta: 4,
              explicacao: "O art. 9º da Lei 8.625/93 determina que o Ministério Público estadual forme lista tríplice dentre integrantes da carreira, eleita mediante voto plurinominal de todos eles (§1º), para a escolha do Procurador-Geral de Justiça, nomeado pelo Chefe do Poder Executivo para mandato de dois anos, permitida uma recondução. O §3º cuida justamente da inércia do Executivo: não efetivada a nomeação nos quinze dias que se seguirem ao recebimento da lista, o integrante mais votado é investido automaticamente no cargo, para exercício do mandato. Não há prorrogação do mandato anterior, nova eleição nem posse interina do mais antigo. E a Assembleia Legislativa não escolhe o chefe da instituição: ao Poder Legislativo a lei reserva papel diverso, o de deliberar, por maioria absoluta, sobre a destituição do Procurador-Geral de Justiça (§2º), na forma da Lei Orgânica estadual."
            },
            {
              id: "mp-inst-9", modo: "lei", fonte: "Lei 8.625/93, art. 10, I e IX",
              enunciado: "Dois Promotores de Justiça do mesmo Ministério Público estadual divergem sobre qual deles tem atribuição para oficiar em uma ação popular, e o conflito negativo é formalmente suscitado. Nos termos da Lei 8.625/93, esse conflito de atribuições:",
              alternativas: [
                "é dirimido pelo Conselho Superior do Ministério Público, que encaminha o caso ao Procurador-Geral de Justiça para que este designe o membro que deva oficiar no feito",
                "é dirimido pelo Procurador-Geral de Justiça, a quem cabe designar o membro que deva oficiar no feito, no exercício da chefia que a lei lhe atribui",
                "é dirimido pelo Colégio de Procuradores de Justiça, mediante deliberação da maioria absoluta de seus integrantes, quando os órgãos de execução envolvidos forem de comarcas diversas",
                "é dirimido pelo juízo perante o qual atuam os órgãos de execução divergentes, aplicando-se por analogia as regras de conflito de competência do Código de Processo Civil",
                "é dirimido pelo Corregedor-Geral do Ministério Público, que submete a decisão ao referendo do Conselho Superior sempre que houver divergência sobre a atribuição originária"
              ],
              correta: 1,
              explicacao: "O art. 10, IX, da Lei 8.625/93 confere ao Procurador-Geral de Justiça a atribuição de dirimir conflitos de atribuições entre membros do Ministério Público, designando quem deva oficiar no feito. A solução é coerente com a chefia da instituição, que o art. 10, I, lhe reserva, e com a unidade institucional: a definição de quem oficia é matéria interna, não devolvida ao juiz nem submetida ao Conselho Superior ou ao Colégio de Procuradores, cujas competências estão nos arts. 15 e 12. O dispositivo cuida do conflito entre membros do mesmo Ministério Público — o conflito instaurado entre membros de Ministérios Públicos diversos segue disciplina própria, estranha à Lei Orgânica Nacional."
            },
            {
              id: "mp-inst-10", modo: "lei", fonte: "Lei 8.625/93, arts. 12, 14 e 15",
              enunciado: "Acerca do Conselho Superior do Ministério Público, na disciplina da Lei 8.625/93, é correto afirmar que:",
              alternativas: [
                "é integrado por todos os Procuradores de Justiça em exercício, competindo-lhe julgar o recurso interposto contra decisão condenatória proferida em processo administrativo disciplinar, quando aplicada a pena de suspensão",
                "tem como membros natos apenas o Procurador-Geral de Justiça e o Corregedor-Geral, cabendo-lhe indicar ao Procurador-Geral, em lista tríplice, os candidatos à promoção por merecimento",
                "compete-lhe propor ao Poder Legislativo a destituição do Procurador-Geral de Justiça, pelo voto de dois terços de seus integrantes, em caso de abuso de poder, conduta incompatível ou grave omissão nos deveres do cargo",
                "cabe-lhe indicar, em lista tríplice, os candidatos à promoção por antiguidade, reservada ao Colégio de Procuradores de Justiça a escolha do promovido por merecimento",
                "são seus membros natos o Procurador-Geral de Justiça, o Corregedor-Geral e o Procurador de Justiça mais antigo, competindo-lhe eleger o dirigente da Corregedoria-Geral"
              ],
              correta: 1,
              explicacao: "O art. 14 da Lei 8.625/93 diz que o Conselho Superior do Ministério Público tem como membros natos APENAS o Procurador-Geral de Justiça e o Corregedor-Geral — os demais integrantes são eleitos na forma da Lei Orgânica, o que impede acrescentar ao rol o mais antigo dos Procuradores de Justiça. Entre as competências do art. 15 estão indicar ao Procurador-Geral, em lista tríplice, os candidatos a remoção ou promoção por merecimento e indicar o nome do MAIS ANTIGO para a remoção ou promoção por antiguidade: inverter os dois critérios, exigindo lista tríplice na antiguidade, é o distrator clássico. Já a composição por todos os Procuradores de Justiça, o julgamento de recurso contra decisão condenatória em processo disciplinar, a eleição do Corregedor-Geral e a proposta de destituição do Procurador-Geral ao Poder Legislativo, por dois terços, são atribuições do COLÉGIO DE PROCURADORES DE JUSTIÇA (art. 12)."
            },
            {
              id: "mp-inst-11", modo: "caso", fonte: "Lei 8.625/93, art. 38, §§ 1º e 2º",
              enunciado: "Promotor de Justiça já vitalício abandona o cargo por prazo superior a trinta dias corridos e, no mesmo período, passa a advogar em causa estranha às suas atribuições. Apurados os fatos no âmbito do Ministério Público, é correto afirmar que:",
              alternativas: [
                "a perda do cargo pode ser decretada pelo Colégio de Procuradores de Justiça, pelo voto de dois terços de seus integrantes, em processo disciplinar presidido pelo Corregedor-Geral",
                "a perda do cargo somente poderia ser cogitada se sobreviesse condenação criminal transitada em julgado por crime incompatível com o exercício da função, o que não se verifica",
                "a perda do cargo depende de decisão do Conselho Superior do Ministério Público, tomada por maioria absoluta e com ampla defesa, cabendo recurso ao Conselho Nacional do Ministério Público",
                "a perda do cargo depende de sentença transitada em julgado em ação civil própria, proposta pelo Procurador-Geral de Justiça perante o Tribunal de Justiça, após autorização do Colégio de Procuradores",
                "a perda do cargo decorre automaticamente do abandono, bastando ao Procurador-Geral de Justiça editar o ato declaratório da vacância, dada a natureza objetiva da falta apurada"
              ],
              correta: 3,
              explicacao: "O art. 38, §1º, da Lei 8.625/93 arrola as três hipóteses de perda do cargo do membro VITALÍCIO: prática de crime incompatível com o exercício do cargo, após decisão judicial transitada em julgado; exercício da advocacia; e abandono do cargo por prazo superior a trinta dias corridos. Em todas elas a perda só se dá por sentença judicial transitada em julgado, proferida em ação civil própria. O §2º completa o desenho institucional: essa ação é proposta pelo Procurador-Geral de Justiça perante o Tribunal de Justiça local, após autorização do Colégio de Procuradores, na forma da Lei Orgânica. Nenhum órgão do Ministério Público, portanto, decreta administrativamente a perda do cargo de membro vitalício — o processo disciplinar aplica as demais sanções, não a demissão. Regime diverso é o do membro ainda em estágio probatório, cujo não vitaliciamento é proposto pelo Corregedor-Geral e decidido pelo Conselho Superior."
            },
            {
              id: "mp-inst-12", modo: "lei", fonte: "Lei 8.625/93, art. 44, I a IV e parágrafo único",
              enunciado: "A respeito das vedações impostas aos membros do Ministério Público pela Lei 8.625/93, é correto afirmar que:",
              alternativas: [
                "é vedado receber honorários, percentagens ou custas processuais, ressalvada a verba de sucumbência fixada em favor do Ministério Público em ação civil pública julgada procedente",
                "é vedado o exercício do comércio, sendo igualmente proibida a participação em sociedade empresária na condição de cotista ou de acionista, ainda que sem poderes de gerência",
                "é vedado exercer o comércio ou participar de sociedade comercial, ressalvada a participação na qualidade de cotista ou de acionista",
                "é vedado exercer, ainda que em disponibilidade, qualquer outra função pública, inclusive a de magistério, salvo se ministrada em instituição pública de ensino e fora do horário de expediente",
                "é vedado integrar organismos estatais afetos à área de atuação do Ministério Público e ocupar cargo de confiança na administração da própria instituição, por configurarem acumulação indevida"
              ],
              correta: 2,
              explicacao: "O art. 44, III, da Lei 8.625/93 veda ao membro do Ministério Público exercer o comércio ou participar de sociedade comercial, EXCETO como cotista ou acionista: a ressalva é o ponto da questão — proíbe-se a atuação empresarial, não o mero investimento. Os demais incisos vedam receber, a qualquer título e sob qualquer pretexto, honorários, percentagens ou custas processuais (I), sem ressalva de sucumbência (a verba eventualmente fixada reverte à instituição ou ao fundo respectivo, jamais ao membro); exercer a advocacia (II); e exercer, ainda que em disponibilidade, qualquer outra função pública, salvo UMA de magistério (IV), sem exigência de que o ensino seja prestado em instituição pública. O parágrafo único, por fim, esclarece que não constituem acumulação as atividades exercidas em organismos estatais afetos à área de atuação do Ministério Público, em entidades de representação de classe, nem o exercício de cargos de confiança na administração da instituição e em seus órgãos auxiliares."
            },
            {
              id: "mp-inst-13", modo: "lei", fonte: "Lei 8.625/93, art. 40, caput e parágrafo único, e art. 41, II",
              enunciado: "Sobre as prerrogativas asseguradas aos membros do Ministério Público pela Lei 8.625/93, é correto afirmar que:",
              alternativas: [
                "a prisão do membro depende sempre de ordem judicial escrita, inclusive no flagrante de crime inafiançável, cabendo ao Procurador-Geral de Justiça ratificá-la em vinte e quatro horas",
                "a intimação pessoal é assegurada apenas nos feitos criminais e nos processos de competência originária dos tribunais, valendo nos demais a publicação no órgão oficial",
                "o membro é processado e julgado originariamente pelo Superior Tribunal de Justiça nos crimes comuns e de responsabilidade, ressalvada a competência da Justiça Eleitoral",
                "o membro é ouvido como testemunha em dia, hora e local previamente ajustados, salvo quando o depoimento versar sobre fatos de que teve ciência no exercício de suas atribuições",
                "havendo indício da prática de infração penal por membro da instituição, a autoridade policial remete imediatamente os autos ao Procurador-Geral de Justiça, observada a vedação ao indiciamento"
              ],
              correta: 4,
              explicacao: "O art. 41, II, da Lei 8.625/93 assegura ao membro do Ministério Público a prerrogativa de não ser indiciado em inquérito policial, e o parágrafo único do art. 40 explica o mecanismo: surgindo indício da prática de infração penal por membro da instituição, a autoridade policial, civil ou militar, remete IMEDIATAMENTE os autos ao Procurador-Geral de Justiça, a quem cabe dar prosseguimento à apuração. As demais prerrogativas do art. 40 têm ressalvas próprias que os distratores deturpam: a prisão só se dá por ordem judicial escrita, SALVO em flagrante de crime inafiançável, quando a autoridade tem o prazo máximo de vinte e quatro horas para comunicar e apresentar o membro ao Procurador-Geral; o julgamento originário nos crimes comuns e de responsabilidade cabe ao TRIBUNAL DE JUSTIÇA do respectivo Estado, ressalvada exceção de ordem constitucional; e a oitiva como testemunha ou ofendido dá-se em dia, hora e local previamente ajustados em qualquer processo ou inquérito, sem exceção quanto ao objeto do depoimento. A intimação pessoal, por sua vez, é garantida em qualquer processo e grau de jurisdição, mediante entrega dos autos com vista (art. 41)."
            }
          ]
        }
      ]
    }
  ]
};
