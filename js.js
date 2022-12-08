let eventos = {};

function addevento(id, data, horain, horafim, evento, descri, status) {
    eventos[id] = {data, horain, horafim, evento, descri, status}
}




function getAllEvents() {
    return eventos;
}

function showeventos(){
    const AllEvents = getAllEvents();
    $("#result").html(JSON.stringify(AllEvents));
    $("#id").val(AllEvents.id);
    $("#data").val(AllEvents.data);
    $("#horain").val(AllEvents.horain);
    $("#horaterm").val(AllEvents.horaterm);
    $("#evento").val(AllEvents.evento);
    $("#descricao").val(AllEvents.descricao);
    $("#status").val(AllEvents.status);
    
    }

function returnValues() {
    const id = $("#id").val();
    const data = $("#data").val();
    const horain = $("#horain").val();
    const horafim = $("#horaterm").val();
    const evento = $("#evento").val();
    const descri = $("#descricao").val();
    const status = $("#status").val();
    return {
        id, data, horain, horafim, evento, descri, status
    }
}
function returnid() {
    const id = $("#id").val();
    return id;
}

$("#add").on("click", function(){
    const valor = returnValues();
    if (valor.id) {
        addevento(valor.id, valor.data, valor.horain, valor.horafim, valor.evento, valor.descri, valor.status);
    } else {
        return $("#result").html("ERRO: insira as informações");
    }
    showeventos();
    clearForm();
})

function update(id, data, horain, horafim, evento, descri, status) {
    if (eventos[id]) {
        eventos[id] = { data, horain, horafim, evento, descri, status};
    } else {
        return null;
    }
}

$("#changestats").on("click", function() {
    const returnedValues = returnValues();
    if (returnedValues.id){
        if (returnedValues.status == "Não Concluido") {
            returnedValues.status = "Concluido";
            update(returnedValues.id, returnedValues.data, returnedValues.horain, returnedValues.horafim, returnedValues.evento, returnedValues.descri, returnedValues.status);
        } else {
            returnedValues.status = "Não Concluido";
            update(returnedValues.id, returnedValues.data, returnedValues.horain, returnedValues.horafim, returnedValues.evento, returnedValues.descri, returnedValues.status);
        }} else{
            return $("#result").html("ERRO: insira as informações")
        }
    showeventos();
    clearForm();
})

function remove(id) {
    if (eventos[id]) {
        delete eventos[id];
        return true;
    }
    return false;
}
$("#remove").on("click", function() {
    const returnedValues = returnValues();
    if (returnedValues.id) {
    remove(returnedValues.id);
    showeventos();
    clearForm();
    } else {
        return $("#result").html("ERRO: insira as informações");
    }
})

$("#change").on("click", function() {
   const value = returnValues();
   if (value.id) {
   update(value.id, value.data, value.horain, value.horafim, value.evento, value.descri);
    } else {
        return $("#result").html("ERRO: insira as informações");
    }
   showeventos();
   clearForm();
})

function clearForm() {
    $("#id").val("");
    $("#data").val("");
    $("#horain").val("");
    $("#horaterm").val("");
    $("#evento").val("");
    $("#descricao").val("");
    $("#status").val("");
}
