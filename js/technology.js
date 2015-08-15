function researchunlock(){


	if(bonus["science"]>=100){
		$(".tech_geology").show()
		unlocked[".tech_geology"]=1;
	}


	if(bonus["military"]>=100){
		$(".tech_tactics").show()
		unlocked[".tech_tactics"]=1;
	}

	if(bonus["economy"]>=100){
		$(".tech_funding").show()
		unlocked[".tech_funding"]=1;
	}



}