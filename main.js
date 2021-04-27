const args = process.argv.slice(2)
var names = ["Zero","One", "Two","Three","Four", "Five" ,"Six" ,"Seven","Eight", "Nine"]

function getNames(num) 
{
	var output = [];
	var digits = num.toString().split('');
	var realDigits = digits.map(Number)
	for( let i=0; i < realDigits.length; i++)
	{
		var pos = realDigits[i];
		output.push(names[pos]);
	}
	var x = output.join('');
	console.log(x)
	return x;
}
getNames(args[0])


