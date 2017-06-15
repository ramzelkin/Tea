var prev;
var alter;
function vvod(a)  {
   prev=a;
   alter = false;
	switch (a) {
		case 1:
			console.log("1 чашка в день синего чая");
			printRes("1 чашка в день синего чая");
			break;	
		case 2:
			console.log("2 чашки в день улуна");
			printRes("2 чашки в день улуна");
			break;
		case 3:
			console.log("2 чашки любого зеленого чая");
			printRes("2 чашки любого зеленого чая");
			break;
		case 4:
			console.log("2 чашки в день чая пуэр");
			printRes("2 чашки в день чая пуэр");
			break;
		case 5:
			console.log("1 чашка в день синего чая");
			printRes("1 чашка в день синего чая");
			break;
		case 6:
			console.log("1 чашка в неделю желтого чая");
			printRes("1 чашка в неделю желтого чая");
			break;
		case 7:
			console.log("1 чашка чая ройбуш за 30 мин до сна");
			printRes("1 чашка чая ройбуш за 30 мин до сна");
			break;
		case 8:
			console.log("1 литр чая пуэр в неделю");
			printRes("1 литр чая пуэр в неделю");
			break;
		
	}

	
	}
	function printRes(a) {
document.getElementById('result').innerHTML = a;
}

function or() {
	if (!alter) {
		alter = true;
		switch (prev) {
			case 1:
				console.log("4 чашки любого зеленого чая в день");
				printRes("4 чашки любого зеленого чая в день");
				break;	
			case 2:
				console.log("3 чашки белого чая");
				printRes("3 чашки белого чая");
				break;
			case 3:
				console.log("2 чашки любого китайского чая");
				printRes("2 чашки любого китайского чая");
				break;
			case 4:
				console.log("1 чашка крепкого черного чая");
				printRes("1 чашка крепкого черного чая");
				break;
			case 5:
				console.log("маска для волос из черного чая");
				printRes("маска для волос из черного чая");
				break;
			case 6:
				console.log("2 чашки чая маття в день");
				printRes("2 чашки чая маття в день");
				break;
			case 7:
				console.log("2 чашки чая с ромашкой");
				printRes("2 чашки чая с ромашкой");
				break;
			case 8:
				console.log("1 чашка имбирного чая в день");
				printRes("1 чашка имбирного чая в день");
				break;
		}
		
	}
	else {
	vvod(prev);
	}
}
	