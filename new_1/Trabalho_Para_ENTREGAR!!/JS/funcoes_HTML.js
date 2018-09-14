function Validacao_Formulario()
{
	var nome_Informado = document.forms["formulario"]["nome"].value;
	var sobrenome_Informado = document.forms["formulario"]["sobrenome"].value;
	
	
	if(nome_Informado == ""){
		alert("Insira um nome..");
	}
	if(sobrenome_Informado == ""){
		alert("Insira um sobrenome...");
	}
	
}