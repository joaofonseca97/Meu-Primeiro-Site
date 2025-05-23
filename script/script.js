
function getParameters() {

    var params = new Array();
    var paramsRet = new Array();
    var url = window.location.href; // Obtém a URL
    var paramsStart = url.indexOf("?"); // Procura ? na URL
    
    if(paramsStart != -1){
    // Encontrou ? na URL
    var paramString = url.substring(paramsStart + 1); // Retorna parte da URL após ?
    paramString = decodeURIComponent(paramString); // Decodifica código de URI da URL
    var params = paramString.split("&"); // Retorna trechos da String separados por &
    for(var i = 0 ; i < params.length ; i++) {
    var pairArray = params[i].split("="); // Retorna trechos da String separados por =
    if(pairArray.length == 2){
    paramsRet[pairArray[0]] = pairArray[1];
    }
    
    }
    return paramsRet;
    }
    return null; // Não encontrou ? na URL
    }

    function mascaraTelefone(event) {
        let tecla = event.key;
        // Regex:
        // g = não termina verificação enquanto não houver combinação para todos os elementos
        // \D+ = troca qualquer caractere que não seja um dígito por caracter vazio
        let telefone = event.target.value.replace(/\D+/g, "");
        
        // Regex: i = case insensitive
        // Se Tecla é número, concatena com telefone
        if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;
        
        if (tamanho >= 12) { // Se telefone com 12 ou mais caracteres, não faz mais nada
        return false;
        }
        
        if (tamanho > 10) {
        telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) {
        telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho > 2) {
        telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
        telefone = telefone.replace(/^(\d*)/, "($1");
        }
        
        event.target.value = telefone;
        }
        
        if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
        return false;
        }
        }