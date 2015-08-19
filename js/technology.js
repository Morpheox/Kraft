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

	if(bonus["military"]>=3000 && unlocked[".tech_rampage"]!=1){
		$(".tech_rampage").show()
		unlocked[".tech_rampage"]=1;
	}

	if(bonus["economy"]>=3200 && unlocked[".tech_risk"]!=1){
		$(".tech_risk").show()
		unlocked[".tech_risk"]=1;
	}

	if((bonus["science"]>=3500 || bonus["economy"]>=4000) && unlocked[".tech_construction"]!=1){
		$(".tech_construction").show()
		unlocked[".tech_construction"]=1;
	}

	if(bonus["military"]>=3800 && unlocked[".tech_domestication"]!=1){
		$(".tech_domestication").show()
		unlocked[".tech_domestication"]=1;
	}


	if((bonus["science"]>=4000 || bonus["economy"]>=4500 || bonus["military"]>=5000) && unlocked[".tech_architecture"]!=1){
		$(".tech_architecture").show()
		unlocked[".tech_architecture"]=1;
	}

	if(bonus["science"]>=4500 && unlocked[".tech_chemistry"]!=1){
		$(".tech_chemistry").show()
		unlocked[".tech_chemistry"]=1;
	}

	if(bonus["military"]>=3800 && unlocked[".tech_elephantry"]!=1){
		$(".tech_elephantry").show()
		unlocked[".tech_elephantry"]=1;
	}

}