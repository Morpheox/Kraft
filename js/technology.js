function researchunlock(){


	if(bonus["science"]>=100 && unlocked[".tech_geology"]!=1){
		$(".tech_geology").show()
		unlocked[".tech_geology"]=1;
	}


	if(bonus["military"]>=100 && unlocked[".tech_tactics"]!=1){
		$(".tech_tactics").show()
		unlocked[".tech_tactics"]=1;
	}

	if(bonus["economy"]>=100 && unlocked[".tech_funding"]!=1){
		$(".tech_funding").show()
		unlocked[".tech_funding"]=1;
	}

	if(bonus["military"]>=500 && unlocked[".tech_healing"]!=1){
		$(".tech_healing").show()
		unlocked[".tech_healing"]=1;
	}

	if(bonus["economy"]>=500 && unlocked[".tech_savings"]!=1){
		$(".tech_savings").show()
		unlocked[".tech_savings"]=1;
	}

	if(bonus["science"]>=500 && unlocked[".tech_studies"]!=1){
		$(".tech_studies").show()
		unlocked[".tech_studies"]=1;
	}

	if((bonus["science"]>=1000 || bonus["economy"]>=1000 || bonus["military"]>=1000) && unlocked[".tech_organization"]!=1){
		$(".tech_organization").show()
		unlocked[".tech_organization"]=1;
	}

	if(bonus["economy"]>=1500 && unlocked[".tech_culturaltrade"]!=1){
		$(".tech_culturaltrade").show()
		unlocked[".tech_culturaltrade"]=1;
	}
	if(bonus["military"]>=1600 && unlocked[".tech_intelligence"]!=1){
		$(".tech_intelligence").show()
		unlocked[".tech_intelligence"]=1;
	}

	if(bonus["science"]>=1700 && unlocked[".tech_crushing"]!=1){
		$(".tech_crushing").show()
		unlocked[".tech_crushing"]=1;
	}

	if((bonus["science"]>=2000 || bonus["economy"]>=2000 || bonus["military"]>=2000) && unlocked[".tech_contracts"]!=1){
		$(".tech_contracts").show()
		unlocked[".tech_contracts"]=1;
	}
	
	if(bonus["science"]>=2200 && unlocked[".tech_floatglass"]!=1){
		$(".tech_floatglass").show()
		unlocked[".tech_floatglass"]=1;
	}
	if(bonus["economy"]>=2500 && unlocked[".tech_galleon"]!=1){
		$(".tech_galleon").show()
		unlocked[".tech_galleon"]=1;
	}

	if(bonus["military"]>=2200 && unlocked[".tech_canteen"]!=1){
		$(".tech_canteen").show()
		unlocked[".tech_canteen"]=1;
	}

	if(bonus["science"]>=2500 && unlocked[".tech_glassblowing"]!=1){
		$(".tech_glassblowing").show()
		unlocked[".tech_glassblowing"]=1;
	}
}