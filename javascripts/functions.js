
// P2 req. 4-A

var isArmstrong = function(num) {
	"use strict";
	//declare local variables
	var sum = 0;
	//convert num to a String
	num = String(num);
	//traverse string and process digits
	for(var i = 0; i < num.length; ++i) {
	//process the current digit
		sum = sum + Math.pow(Number(num[i]), num.length);
    }
	if (Number(num)== sum){
		return true;
	} else {
		return false;
	}
		
};

// P2 req. 4-B

var allArmstrongs = function () {
	var result = '';
	//generate
	for (var k = 1; k  <= 99999; ++k){
		//test
		if (isArmstrong(k)){
			result = result + k + ' ';
		}
	}
	return result;
		
};

// P2 req. 4-C

var allSubstrings1 = function (s) {
	var result = "";
	for (var i = 0; i < s.length; ++i) {
		for(var j = i+1; j <= s.length; j++) {
			result = result + s.substring(i, j) + ","
		}
	}
	return result;
};

// P2 req. 4-D

var allSubstrings2 = function (s) {
	var result = [];
	for (var i = 0; i < s.length; ++i) {
		for (var j = i + 1; j <= s.length; j++) {
			var arr = s.substring (i,j);
			result.push(arr);
		}
	}
	return result;
}

// P2 req. 4-E
	
var maxWord = function (s) {
    var str = s.split(" ");
    var longest = 0;
    var result = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            result = str[i];
        }
    }
    return result;
};
