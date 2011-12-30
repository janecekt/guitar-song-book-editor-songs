function createEntry(name, idx){
	this.name = name;
	this.idx = idx;
}


var akordNum = new Array();
akordNum[8] = new createEntry('C', 0);
akordNum[0] = new createEntry('C#', 1);
akordNum[9] = new createEntry('D', 2);			
akordNum[1] = new createEntry('D#', 3);
akordNum[2] = new createEntry('Es', 3);
akordNum[10] = new createEntry('E', 4);		
akordNum[11] = new createEntry('F', 5);		
akordNum[3] = new createEntry('F#', 6);
akordNum[12] = new createEntry('G', 7);
akordNum[4] = new createEntry('G#', 8);
akordNum[5] = new createEntry('As', 8);
akordNum[13] = new createEntry('A', 9);
akordNum[6] = new createEntry('B', 10);
akordNum[7] = new createEntry('A#', 10);
akordNum[14] = new createEntry('H', 11);

	


function findAkordByIdx( idx ){
	for (var i=0; i<akordNum.length; i++){
		if (akordNum[i].idx == idx){
			return akordNum[i].name;
		}
	}
	return "ERR";
}
		
		
function findEntryByAkord( akord ){
	var pref1 = akord.substr(0,1);			
	var pref2 = akord.substr(0,2);

	for (var i=0; i<akordNum.length; i++){
		if (pref2 == akordNum[i].name){
			return akordNum[i];
		} 
		if (pref1 == akordNum[i].name){
			return akordNum[i];
		}
	}
	
	return "ERR";
}
		


function transposeAkord(akord, step){
	var entry = findEntryByAkord(akord);
	if (entry == "ERR"){ return "ERR"; }

	var idx = (entry.idx + step + 12) % 12;

	return findAkordByIdx(idx)+akord.substr(entry.name.length,akord.length);
}
		
					

function transpose(step){
	var akordList = document.getElementsByTagName("span");
	var origAkord = "";
	var transAkord = "";
	
	for (var i=0; i<akordList.length; i++){
		if ( akordList.item(i).getAttribute("title") == "chord" ){		
			// prirad jsmeno akordu
			origAkord = akordList.item(i).innerHTML;
		
			transAkord = transposeAkord(origAkord,step);
			akordList.item(i).innerHTML = transAkord;
		}
	}



       var obj = document.getElementById("totaltranspose");
       obj.innerHTML =  Math.round(obj.innerHTML) + step;
}
