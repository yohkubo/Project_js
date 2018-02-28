
// Hide and show up the receipt part
$(document).ready(function() {
	$("#receipt, #notice").hide();
	$("#check").click(function() {
		$("#receipt, #notice").show();
	});
});

//cancel
$(document).ready(function() {
	$("#cancel").click(function() {
		$("#receipt, #notice").hide();
		$("#Medium").prop("selected", true);
		$("input[name=meats]").prop("checked", false);
		$("input[name=veggies]").prop("checked", false);
		$("#regular").prop("checked", true);
		$("#plain").prop("checked", true);
		$("#marinara").prop("checked", true);
	})
})

function cancel() {
//	document.getElementsByName("meats").checked = false;
}



function check() {

	document.getElementById("vreceipt").innerHTML = "<tr><th>Items</th><th>Sub total</th></tr>";

	var tPrice = 0; // Total price

	//Choose size
	var size = document.getElementById("size");
	var vsize = "NOt selected.";
	var psize = 0;

	for (var i = 0; i<size.length; i++) {
		if(size[i].selected) {
			vsize = size[i].value;
		}
		if (vsize == "Personal") {psize=6;
		} else if (vsize == "Medium") {psize = 10;
		} else if (vsize == "Large") {psize = 14;
		} else if (vsize == "Extra Large") {psize = 16;
		}
	}

	//Choose meats
	var meats = document.getElementsByName("meats");
	var vmeats = []; //Array of checked meats
	var cmeats = 0;  //Count meats
	var pmeats = 0.00; // Price of meats

	for (var j = 0; j<meats.length; j++) {
		if (meats[j].checked) {
			vmeats.push(meats[j].value); //Add checked items
			cmeats = cmeats + 1; //Count checked items
		};
	}
	if (cmeats>0) {pmeats = cmeats - 1;} // meats price

	//Choose veggies
	var veggies = document.getElementsByName("veggies");
	var vveggies = [];  //Array of checked veggies
	var cveggies = 0;  //Count checked items
	var pveggies = 0; //Price of veggies
	
	for (var k = 0; k<veggies.length; k++) {
		if (veggies[k].checked) {
			vveggies.push(veggies[k].value);
			cveggies = cveggies + 1; 
		}
	}
	if (cveggies>0) {pveggies = cveggies - 1;} // veggies price


	//Choose about cheese
	var cheese = document.getElementsByName("cheese");
	var vcheese = "Not checked";
	var pcheese = 0; // price of cheese

	for (var i = 0; i<cheese.length; i++) {
		if(cheese[i].checked) {
			vcheese = cheese[i].value;
			if (vcheese == "Extra Cheese") {pcheese=3;}
		};
	}

	//Choose a type of crust
	var crust = document.getElementsByName("crust");
	var vcrust = "Not checked";
	var pcrust = 0;//price of crust

	for (var i = 0; i<crust.length; i++) {
		if (crust[i].checked) {
			vcrust = crust[i].value;
			if (vcrust == "Cheese Stuffed Crust") {pcrust=3}
		};
	}

	//Choose a type of suace
	var sauce = document.getElementsByName("sauce");
	var vsauce = "Not selected";

	for (var i = 0; i<sauce.length; i++) {
		if (sauce[i].checked) {
			vsauce = sauce[i].value;
		};
	}

	tPrice = psize + pmeats + pveggies + pcheese + pcrust

	//For check variable
/*
	alert(vsize + ", " + vcheese + ", \n" + vcrust + ", " + vsauce + ", \n"+ vmeats
		+"\n"+ vveggies + "\nCount emat: " + cmeats + "\ncount veggies: " + cveggies +"\npsize: "+psize
		+"\npcheese: "+pcheese+"\npcrust: "+pcrust+"\ntPrice: "+tPrice);
*/	

	//Create a receipt teble
	//Total price
	var table = document.getElementById("vreceipt");
	var row =table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "Total Price: ";
	cell2.innerHTML = "$" + tPrice.toFixed(2);

	//Checked sauce to a receipt
	var table = document.getElementById("vreceipt");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = vsauce;
	cell2.innerHTML = "+$0.00";
	
	//Checked crust to a receipt
	var table = document.getElementById("vreceipt");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = vcrust;
	cell2.innerHTML = "+$"+pcrust.toFixed(2);

	//Checked cheese to a receipt
	var table = document.getElementById("vreceipt");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "Cheese - " + vcheese;
	cell2.innerHTML = "+$"+pcheese.toFixed(2);


	//Checked veggies to a receipt
	if (cveggies>0) {
	var table = document.getElementById("vreceipt");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = vveggies;
	cell2.innerHTML = "+$" + pveggies.toFixed(2);
	}

	//Checked meat to a receipt
	if (cmeats>0) {
		var table = document.getElementById("vreceipt");
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = vmeats;
		cell2.innerHTML = "+$" + pmeats.toFixed(2);
	}

	//Selected size to a receipt
		var table = document.getElementById("vreceipt");
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = vsize;
		cell2.innerHTML = "$" + psize.toFixed(2);



};

/*
function cancel() {
	document.getElementById("size").selected = 
}
*/
