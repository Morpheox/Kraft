

var heirlooms = new Array()


for(i=0;i<50;i++){
	heirlooms[i]=0;
}


function createheirloom(x){

	var rnd1=Math.random()*100
	var rnd2=Math.random()*100
	var rnd3=Math.random()*300
	var rnd4=Math.random()*1000

	var rarity=1;
	var value=1;
	var name="";
	var bns=""
	var power=1;

	if(rnd1<10){
		name="Broken ";
		value=0.3;
		rarity=1;
		power=0.1;
	}
	else if(rnd1<20){
		name="Used ";
		value=1;
		power=0.5;
	}else if(rnd1>99){
		name="Mysterious ";
		value=5;
		rarity=5;
		power=3;
	}else if(rnd1>95){
		name="Pristine ";
		value=2.5;
		rarity=2;
		power=2;
	}else if(rnd1>85){
		name="Untouched ";
		value=2;
		rarity=1.5;
		power=1.5;
	}else if(rnd1>75){
		name="New ";
		value=1.5;
		rarity=1.5;
		power=1.2;
	}


	if(rnd2<10){
		name+="Axe ";
		value*=0.4;
		rarity*=1;
		bns="wood";
		bnsd="Wood production: +"
		power*=0.1;
	}
	else if(rnd2<20){
		name+="Pickaxe ";
		value*=0.5;
		rarity*=1;
		bns="mineral";
		bnsd="Mineral production: +"
		power*=0.1;
	}else if(rnd2<30){
		name+="Staff ";
		value*=1.5;
		rarity*=1;
		bns="morale";
		bnsd="Morale production: +"
		power*=0.1;
	}else if(rnd2<40){
		name+="Coin ";
		value*=2;
		rarity*=1;
		bns="gold";
		bnsd="Gold production: +"
		power*=0.05;
	}else if(rnd2<50){
		name+="Sword ";
		value*=1;
		rarity*=1;
		bns="power";
		bnsd="Troops power: +"
		power*=0.03;
	}else if(rnd2<55){
		name+="Shield ";
		value*=1;
		rarity*=2;
		bns="armor";
		bnsd="Troops armor: +"
		power*=0.05;
	}else if(rnd2<60){
		name+="Jar ";
		value*=1;
		rarity*=1;
		bns="healing";
		bnsd="Healing : +"
		power*=0.06;
	}else if(rnd2<65){
		name+="Dress ";
		value*=6;
		rarity*=2;
		bns="hp";
		bnsd="Troops hp: +"
		power*=0.03;
	}else if(rnd2<70){
		name+="Cannon ";
		value*=1;
		rarity*=2;
		bns="shippower";
		bnsd="Ship power: +"
		power*=0.025;
	}else if(rnd2<75){
		name+="Book ";
		value*=1;
		rarity*=2;
		bns="knowledge";
		bnsd="Knowledge production: +"
		power*=0.05;
	}else if(rnd2<80){
		name+="Crate ";
		value*=2;
		rarity*=2;
		bns="shipcargo";
		bnsd="Ship cargo capacity: +"
		power*=0.15;
	}else if(rnd2<85){
		name+="Hammer ";
		value*=5;
		rarity*=2;
		bns="craft";
		bnsd="Crafting efficiency: +"
		power*=0.015;
	}else if(rnd2<90){
		name+="Glasses ";
		value*=1;
		rarity*=2;
		bns="exprew";
		bnsd="Expedition rewards: +"
		power*=0.025;
	}else if(rnd2<93){
		name+="Fossil ";
		value*=9;
		rarity*=3;
		bns="legacy";
		bnsd="Legacy obtained: +"
		power*=0.01;
	}else if(rnd2<96){
		name+="Crown ";
		value*=10;
		rarity*=3;
		bns="trade";
		bnsd="Trade ratios: +"
		power*=0.025;
	}else if(rnd2<98){
		name+="Chest ";
		value*=15;
		rarity*=4;
		bns="storage";
		bnsd="Storage capacity: +"
		power*=0.01;

	}else if(rnd2<99.5){
		name+="Relic ";
		value*=20;
		rarity*=5;
		bns="global";
		bnsd="Global production: +"
		power*=0.01;
	}
	else
	{
		name+="Enigma ";
		value*=30;
		rarity*=15;
		bns="auto";
		bnsd="Autocraft efficiency: +"
		power*=0.01;
	}



	if(rnd3<15){
		name+="of the Beggar ";
		value*=0.5;
		rarity*=2;
		power*=0.5;
	}
	else if(rnd3<30){
		name+="of the Bandit ";
		value*=1;
		rarity*=2;
		power*=1;
	}else if(rnd3<45){
		name+="of the Warrior ";
		value*=1.5;
		rarity*=2;
		power*=1.25;
	}else if(rnd3<55){
		name+="of the Lady ";
		value*=1.5;
		rarity*=2.5;
		power*=1.5;
	}else if(rnd3<65){
		name+="of the Traveler ";
		value*=1.5;
		rarity*=2.5;
		power*=1.5;
	}else if(rnd3<75){
		name+="of the Ancient ";
		value*=2;
		rarity*=2.5;
		power*=1.5;
	}else if(rnd3<85){
		name+="of the Noble ";
		value*=2.5;
		rarity*=2.5;
		power*=2;
	}else if(rnd3<93){
		name+="of the Queen ";
		value*=4;
		rarity*=6;
		power*=3;
	}else if(rnd3<99){
		name+="of the King ";
		value*=5;
		rarity*=8;
		power*=4;
	}else if(rnd3<100){
		name+="of the Sun ";
		value*=15;
		rarity*=15;
		power*=10;
	}


	if(rnd3<150){
		if(rnd4<1){
			name+="God";
			value*=100;
			rarity*=100;
			power*=50;
		}
		else if(rnd4<10){
			name+="Hero";
			value*=35;
			rarity*=35;
			power*=20;
		}
		else if(rnd4<50){
			name+="Master";
			value*=20;
			rarity*=20;
			power*=5;
		}else if(rnd4<150){
			name+="Teacher";
			value*=10;
			rarity*=10;
			power*=2;
		}
	}
	value=Math.ceil(value)
	rarity=Math.ceil(rarity)


	if(heirlooms[1]>0)
	{
		prestige["shards"]+=heirlooms[1];
		$(".shardsnum").show();
		unlocked[".shardsnum"]=1;
	}

	heirlooms[0]=name;
	heirlooms[1]=value;
	heirlooms[2]=rarity;
	heirlooms[3]=power;
	heirlooms[10]=bns;
	heirlooms[11]=bnsd;
	heirlooms[12]=0;
	drawheirlooms();
	setHeirloomNotif();
}

function setHeirloomNotif() {
	$("#heirloomspane").html("<a data-toggle='tab' onclick='clearHeirloomNotif()' href='#heirlooms'><div style='color:orange'>Heirlooms(!)</div></a>");
}

function clearHeirloomNotif() {
	setTimeout(function(){$("#heirloomspane").html("<a data-toggle='tab' href='#heirlooms'>Heirlooms</a>");},20);
}


function getRarityColor(x){


	if(x<=3){
		return "white";
	}
	else if(x<=20){
		return "#1eff00";
	}
	else if(x<=75){
		return "#0070dd";
	}else if(x<=200){
		return "#a335ee";
	}else if(x<=400){
		return "#ff8000";
	}
	else
	{
		return "red ";	
	}



}


function drawheirlooms(){

	suffix=""
	suffix2=""
	if(heirlooms[12]>0){
	suffix=" +"+heirlooms[12]
	}
	if(heirlooms[13]>0){
	suffix2=" +"+heirlooms[13]
	}
	if(heirlooms[1]>0){
		$(".heirloomslog").html("<div style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heirlooms[2])+"' >"+heirlooms[0]+suffix+"</div> Value: "+heirlooms[1]+" Rarity: "+heirlooms[2]+"<br>"+heirlooms[11]+(heirlooms[3]*100).toFixed(2)+"%")
		$("#sellheirloombutton").text("Sell ("+heirlooms[1]+" shards)")
	}
	else
	{
		$(".heirloomslog").html(" ");
		$("#sellheirloombutton").text("Sell")
	}
	if(heirlooms[5]>0){
		$(".heirloomslog2").html("<div style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heirlooms[6])+"' >"+heirlooms[4]+suffix2+"</div> Value: "+heirlooms[5]+" Rarity: "+heirlooms[6]+"<br>"+heirlooms[9]+(heirlooms[7]*100).toFixed(2)+"%")
		$("#upgradeheirloom").text("Upgrade ("+Math.ceil(Math.pow(1.5,(heirlooms[13]))*5)+" shards)")
	}
	else
	{
		$("#upgradeheirloom").text("Upgrade")
		$(".heirloomslog2").html(" ")
	}
	$(".heirloomlist").html("");
	if(heirlooms[14]>0){
	heirlist="<table>";
		for(i=0;i<heirlooms[14];i++){
		suffix3="";
		heir=heirlooms[20+i].split(";")
	
		if(heir[6]>0){
		suffix3=" +"+heir[6]
		}

		heirlist+=("<tr><td style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heir[2])+"' >"+heir[0]+suffix3+"</div></td><td><button onclick='storeheirlooms("+i+")'>Pick</button></td></tr>")		
		}
heirlist+="<table>"
		$(".heirloomlist").html(heirlist)
	}

}

function storeheirlooms(x){

	heir=new Array()


		if(x==-1){
			if(parseFloat(heirlooms[4])==0){
				return;
			}
			x=heirlooms[14]
			if(heirlooms[14]>9){

				x=0;
			}
		}


	if(heirlooms[x+20]!=0){
	heir=heirlooms[x+20].split(";")
	
	if(parseFloat(heir[0])==0){
		heirlooms[14]++;
	}
	}
	else
	{
	heirlooms[14]++;
	heir=new Array()
	heir[0]=0
	heir[1]=0
	heir[2]=0
	heir[3]=0
	heir[4]=0
	heir[5]=0
	heir[6]=0
	}
	if(heir[3]>0){
	bonus[heir[5]]+=parseFloat(heir[3])
	}
	if(heirlooms[7]>0){
	bonus[heirlooms[8]]-=parseFloat(heirlooms[7])
	}
	swap1=heirlooms[4]
	swap2=heirlooms[5]
	swap3=heirlooms[6]
	swap4=heirlooms[7]
	swap5=heirlooms[9]
	swap6=heirlooms[8]
	swap7=heirlooms[13]

	heirlooms[4]=heir[0]
	heirlooms[5]=parseFloat(heir[1])
	heirlooms[6]=parseFloat(heir[2])
	heirlooms[7]=parseFloat(heir[3])
	heirlooms[9]=heir[4]
	heirlooms[8]=heir[5]
	heirlooms[13]=parseFloat(heir[6])


	heir[0]=swap1
	heir[1]=swap2
	heir[2]=swap3
	heir[3]=swap4
	heir[4]=swap5
	heir[5]=swap6
	heir[6]=swap7

	heirlooms[20+x]=heir[0]+";"+heir[1]+";"+heir[2]+";"+heir[3]+";"+heir[4]+";"+heir[5]+";"+heir[6]

	if(parseFloat(heir[0])==0){
		heirlooms[14]--
		for(i=20+x;i<30;i++){
			heirlooms[i]=heirlooms[i+1]
		}
	}

	drawheirlooms();
	

}

function swapheirlooms(){


	if(heirlooms[3]>0){
	bonus[heirlooms[10]]+=heirlooms[3]
	}
	if(heirlooms[7]>0){
	bonus[heirlooms[8]]-=heirlooms[7]
	}
	swap1=heirlooms[0]
	swap2=heirlooms[1]
	swap3=heirlooms[2]
	swap4=heirlooms[3]
	swap5=heirlooms[10]
	swap6=heirlooms[11]
	swap7=heirlooms[12]

	heirlooms[0]=heirlooms[4]
	heirlooms[1]=heirlooms[5]
	heirlooms[2]=heirlooms[6]
	heirlooms[3]=heirlooms[7]
	heirlooms[10]=heirlooms[8]
	heirlooms[11]=heirlooms[9]
	heirlooms[12]=heirlooms[13]

	heirlooms[4]=swap1
	heirlooms[5]=swap2
	heirlooms[6]=swap3
	heirlooms[7]=swap4
	heirlooms[8]=swap5
	heirlooms[9]=swap6
	heirlooms[13]=swap7

	drawheirlooms();
}

function sellheirloom(){

if(heirlooms[1]>0){
	prestige["shards"]+=heirlooms[1];
	heirlooms[0]=0;
	heirlooms[1]=0;
	heirlooms[2]=0;
	heirlooms[3]=0;
	heirlooms[10]=0
	heirlooms[11]=0
	heirlooms[12]=0

	$(".shardsnum").show();
	unlocked[".shardsnum"]=1;
	drawheirlooms();
}

}


function upgradeheirloom(){
if(heirlooms[5]>0){
if(prestige["shards"]>=Math.ceil(Math.pow(1.5,(heirlooms[13]))*5)){

bonus[heirlooms[8]]-=heirlooms[7]
prestige["shards"]-=Math.ceil(Math.pow(1.5,(heirlooms[13]))*5)
heirlooms[13]++


heirlooms[5]+=Math.ceil(Math.pow(1.5,(heirlooms[13]))*2)
heirlooms[7]*=1.05




bonus[heirlooms[8]]+=heirlooms[7]

}
}

drawheirlooms()
}