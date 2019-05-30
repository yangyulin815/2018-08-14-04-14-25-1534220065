module.exports = function main(x) {  
	var len=x.length; 
    var arr_s=[
    "._.",
    "...",
    "._.",
    "._.",
    "...",
    "._.",
    "._.",
	"._.",
	"._.",
	"._."];
 
    var arr_z=[
    "|.|",
    "..|",
    "._|",
    "._|",
    "|_|",
    "|_.",
    "|_.",
	"..|",
	"|_|",
	"|_|"];

    var arr_x=[
    "|_|",
    "..|",
    "|_.",
    "._|",
    "..|",
    "._|",
    "|_|",
	"..|",
	"|_|",
	"..|"
    ];
 
    var res1='',res2='',res3='',res='';
 	
 	for(var i = 0 ; i < len - 1 ; i++){
 		res1+=arr_s[x[i]]+" ";
 		res2+=arr_z[x[i]]+" ";
 		res3+=arr_x[x[i]]+" ";
 	}

 	res=res1+arr_s[x[len-1]]+"\n"
 		+res2+arr_z[x[len-1]]+"\n"
 		+res3+arr_x[x[len-1]]+"\n";
 	
 	return res;
};


