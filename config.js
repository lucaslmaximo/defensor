/* ============================================================
   Configuração do Firebase — App Defensor (DPE-RJ)
   ------------------------------------------------------------
   Estes valores são a "Web config" PÚBLICA do Firebase. Não são
   segredo: todo app Firebase os expõe no navegador (o próprio
   Google documenta isso). Quem tem só estes valores NÃO acessa
   o progresso de ninguém. A segurança vem de duas camadas:

     1) Regras do Realtime Database — cada usuário só lê/escreve
        o próprio caminho /usuarios/<seu-uid> (auth.uid === $uid).
     2) Restrições da chave no Google Cloud Console — a chave só
        funciona a partir dos domínios do seu site (HTTP referrers)
        e apenas para as APIs de login.

   Passo a passo em "Ativar o backup por e-mail" no LEIA-ME.
   Deixe estas linhas vazias ("") para desativar login + backup.
   ============================================================ */
window.DPE_AUTH_KEY = "AIzaSyA-UB5QDQe28lL4mPrKzIm2QnzkSi92gXw";
window.DPE_DB_URL   = "https://defensor-app-default-rtdb.firebaseio.com";
