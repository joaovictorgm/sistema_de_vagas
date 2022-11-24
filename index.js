
const vacancies = []

//função para listar vagas 
function vacanciesList(){
    if(vacancies.length == 0){
        alert("Não há vagas disponiveis")
    } else {
    const vacancieinText =  vacancies.reduce(function(finalText, vacancie, index ) {
        finalText += index + ", "
        finalText += vacancie.name
        finalText += "(" + vacancie.persons.length + " candidatos)\n"
        return finalText
     }, "")
    alert(vacancieinText)
 }
} 

  
   

function newVacancie(){
    const name = prompt("Qual o nome da vaga?")
    const description = prompt("Qual a descrição da vaga?")
    const limitedDate = prompt("Qual a data limite? DD/MM/AA")

    const confirmation = confirm("Você confirma as alterações?\nNome: " + name + "\nDescrição da vaga: " + description + "\nData limite da vaga:" + limitedDate)
    
    if(confirmation) {
       const viewVacancie = { name, description, limitedDate, persons: [] }
       vacancies.push(viewVacancie)
       alert("vaga criada")
    }else{
        alert("Não foi possivel cadastrar?")
    }
}

function showVacancie(){
    const index = prompt("Informe o indice da vaga")
    // pega a posiçõa onde esta a vaga 
    const vacancie = vacancies[index]

    const personsInText = vacancie.persons.reduce(function(finalText, persons){
        return finalText + "\n - " + persons
        
   }, "")

   alert(
    "Vaga n° " + index + 
    "\nNome: " + vacancie.name + 
    "\nDescrição da vaga: " + vacancie.description + 
    "\nData limite: " + vacancie.limitedDate + 
    "\nQuantidade de candidatos: "  + vacancie.persons.length + 
    "\nCandidatos inscritos: " + personsInText
   )
}

function newWorker(){
    const person = prompt("Qual o nome do(a) candidato(a):")
    const index =  prompt("Em qual índice deseja inscreve-lo?")
    const vacancie = vacancies[index] 

    const confirmation = confirm("Você confirma as alterações do candidato  " + person + " para a vaga de indice " + index + "?\nNome da vaga : " + vacancie.name +  "\nDescrição: " + vacancie.description + "\nData limite: " + vacancie.limitedDate)
    if(confirmation){
        vacancie.persons.push(person)
        alert("Candidato inscrito com sucesso!!")
                    
    } else {
        alert("Não foi possivel cadastrar")
    }


}

function deleteVacancie(){
    const index = Number(prompt("Qual o indice da vaga que deseja excluir?"))
    const vacancie = vacancies[index]
    const confirmation = confirm("Você deseja deletar a vaga a " + index + "\nNome da vaga : " + vacancie.name + "\nDescrição: " + vacancie.description + "\nData limite: " + vacancie.limitedDate)
    if(confirm){
        vacancies.splice(index, 1)
        alert("Removido com sucesso")
       
    
    } else {
        alert("Não foi possivel excluir")
    }

}


function showMenu(){
    const option = prompt("Bem vindo ao menu de vagas.No total temos " + vacancies.length + " vagas disponiveis.\n O que você deseja fazer?\n\n>>Opção 1 - Listar vagas disponiveis\n>>Opção 2 - Criar uma nova vaga\n>>Opção 3 - Visualizar a vaga\n>>Opção 4 - Inscrever um candidato em uma vaga\n>>Opção 5 - Excluir uma vaga\n>>Opção 6 - Sair"
    )
    return option
}

function execute(){
    let option =""
do {
    option = showMenu()

    let answer

    switch (option){
        case "1":
             vacanciesList()
            break
        case "2":
             newVacancie()
            break
        case "3":
             showVacancie()
            break
        case "4":
             newWorker()
            break
        case "5":
             deleteVacancie()
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("opção invalida")
    }
   
} while(option !== "6")

}
//para o programa funcionar a função tem que ser chamada pelo escopo externo
execute()
 


