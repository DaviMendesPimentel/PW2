
function print_Any_Val(array_val)
{
	document.write(array_val);
}
function main()
{
	var anyVal = ["Zero", "Um", "Dois", "Tres", "Quatro", "Cinco"];
	var i = 0;
	
	while(i == 0){
		var j = 0;
		for(j = 0; j < 6; j++){
			print_Any_Val(anyVal[j]);
		}
	}
}