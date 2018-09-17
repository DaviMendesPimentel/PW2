//função principal de validação
function Validacao_Formulario()
{
	var nome_Informado = document.forms["formulario"]["nome"].value;	//cria uma variável para receber o nome
	var cpf = document.forms["formulario"]["cpf"].value;	//cria uma variável para receber o CPF
	var email = document.forms["formulario"]["email"].value;
	
	if(nome_Informado == "")	//se o nome for nulo ('\0')
		alert("Insira um nome..");	//alerta o usuário para inserir um nome
	if(cpf == "")	//se CPF for nulo ('\0')
		validacao_CPF();	//valida se outro(não o CPF) documento foi inserido
	if(email == "")	//se email for nulo ('\0')
		validacao_email();	//valia o endereço físico
	
}

//função para validar de outros documentos foram inseridos
function validacao_CPF()
{
	var tipoDoc = document.forms["formulario"]["tipoDoc"].value;	//cria uma variável para receber o tipo do documento
	var numDoc = document.forms["formulario"]["numDoc"].value;	//cria uma variável para receber o número do documento
	
	if(tipoDoc == "" || numDoc == "")	//caso algumas das variáveis forem nulas('\0')
		if(tipoDoc == "")
			alert("Insira um CPF ou um outro tipo de documento");	//pede para o usuário que insira um documento
																	//e seu respectivo número
		else if(numDoc == "")	//se o numero for nulo
			alert("Insira o número de documento");
}

function validacao_email()
{
	var enderecoF = document.forms["formulario"]["enderecoF"].value;	//cria uma variável que recebe o endereço físico
	
	if(enderecoF == "")	//se o endereço físico for nulo('\0')
		alert("Insira um endereço de e-mail ou um endereço físico válido."); //pede ao usuário que insira um e-mail ou um endereço físico
}