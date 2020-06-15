function fillModal() {

    let date = document.getElementById("dateTimeInput").value;
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let phone = document.getElementById("phoneInput").value;

    // document.getElementById("modalService").innerHTML = service;
    document.getElementById("modalDate").innerHTML = date;
    document.getElementById("modalName").innerHTML = name;
    document.getElementById("modalEmail").innerHTML = email;
    document.getElementById("modalPhone").innerHTML = phone;
}

function updateBookingBtn() {
    let service;
    for (const ser of document.getElementsByName("service")) {
        if (ser.checked) {
            service = ser.value;
        }
    }
    if (service === undefined ||
    	$("#dateTimeInput").prop("value") == "" ||
    	$("#nameInput").prop("value") == "" ||
    	document.getElementById("emailInput").value == "" ||
    	document.getElementById("phoneInput").value.includes("_") ||
    	document.getElementById("phoneInput").value == "" ){
        $("#paymentNext").attr("disabled", true);
    	// debugger;
        return;
    }
    $("#paymentNext").attr("disabled", false);
}

$("#navHome").click(function() {
    window.scrollTo(0, 200);
});

$("#navServices").click(function() {
    window.scrollTo(0, 900);
});

$("#navApp").click(function() {
    window.scrollTo(0, 2300);
});

$("#navProv").click(function() {
    window.scrollTo(0, 3500);
});

$("#navContact").click(function() {
    window.scrollTo(0, 3500);
});

$(document).ready(function() {
	
	$("#navHome").click(function() {
	    window.scrollTo(0, 200);
	});

	$("#navServices").click(function() {
	    window.scrollTo(0, 900);
	});

	$("#navApp").click(function() {
	    window.scrollTo(0, 2300);
	});

	$("#navProv").click(function() {
	    window.scrollTo(0, 3500);
	});

	$("#navContact").click(function() {
	    window.scrollTo(0, 3500);
	});

	$("hairdresserChoice").click( function() {
		if ( this.checked ) {
			$("#modalHairdresser").html(this.value);
		}
	});

	$("[name='service']").click( function() {
		// debugger;
		if ( this.checked ) {
			$("#modalService").html(this.value);
		}
	});

	$("tr").click(function() {
		// debugger;
		this.cells[0].children[0].checked = true;
		const rad = this.cells[0].children[0];
		if ( rad.name == "hairdresserChoice" ) {
			$("#modalHairdresser").html(rad.value);
		} else if ( rad.name == "service" ) {
			$("#modalService").html(rad.value);
		}
		// $(this.cells[0].children[0]).prop("checked", true);
	});

	$("tr").click(function() {
		$("#"+this.attributes["target"].value).attr('disabled', false);
		// $("#" + ).attr('disabled', false);
	});

	$("[name='breadcrumb']").click(function() {
		// hide all
		$("[name='appointmentSection']").hide();
		// debugger;
		$("#"+this.attributes["target"].value).show();
	});

	$("[name='appointmentSection']").hide();
	$("#successMsg").hide();
	$("#breadInitial").show();

	 $("#serviceNext").attr('disabled', true);
	 $("#hairdresserNext").attr('disabled', true);
	 $("#paymentNext").attr('disabled', true);
	 $("#finalBreadBtn").attr('disabled', true);
	 $("#dateNext").attr("disabled", true);
	 

	 $("#hairdresserNext").click(function(){
	 	const hairdresser = getHairdresser();
	 	$("#chosenHairdresser").html(hairdresser);
	 	
	 	let av;
	 	if (hairdresser == "no preferences") {
			av = "monday - saturday";
    	} else if (hairdresser == "Julius Caesar") {
    		av = "monday, wednesday, friday";
    	} else if (hairdresser == "Anna Green") {
			av = "tuesday, thirsday, saturday";
    	}

    	$("#avDays").html(av);
	 });

	$("#startBookingBtn").click(function() {
		this.style.display = "none";
	});

	$("#finalBreadBtn").click(function() {
		$("#successMsg").show();
	});

	$("[name='paymentInfoField']").on('input', function(){
		let list = $("[name='paymentInfoField']");
		// console.log(list);
	 	for(let i=0; i<list.length; i++){
	 		if( list[i].value == "" || list[i].attributes["type"] == "tel" && list[i].value.includes("_") ) {
	 			$("#finalBreadBtn").attr("disabled", true);
	 			return;
	 		}

	 		$("#finalBreadBtn").attr("disabled", false);
	 	}
	});


	var phones = [{ "mask": "(###) ###-####"}];
    $('#phoneInput').inputmask({ 
        mask: phones, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

    var card = [{ "mask": "#### #### #### ####"}];
    $('#cardNum').inputmask({ 
        mask: card, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

    var cvvn = [{ "mask": "###"}];
    $('#cvvNum').inputmask({ 
        mask: cvvn, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

    $("#dateTimeInput").change(function(){

    	$("#dateMsgSuccess").hide();
	    $("#dateMsgDangerFormat").hide();
	    $("#dateMsgDangerAv").hide();

	    let dateTime = {};

    	dateTime.year = this.value.slice(0,4);
    	dateTime.month = this.value.slice(5,7);
    	dateTime.day = this.value.slice(8,10);
    	dateTime.hour = this.value.slice(12,14);
    	dateTime.minute = this.value.slice(15,17);
    	
    	let choice = getHairdresser();
    	let availableDays;
    	if (choice == "no preferences") {
			availableDays = [0,1,2,3,4,5];
    	} else if (choice == "Julius Caesar") {
    		availableDays = [0,2,4];
    	} else if (choice == "Anna Green") {
			availableDays = [1,3,5];
    	}

    	const invalidFormat = "Date format is invalid, Please follow the format requested";
    	const invalidDay = "The day you have chosen doesn't work for us";

    	let invalids = [];
    	
		if (dateTime.year === undefined) {
			if (invalids.indexOf(invalidFormat) < 0) {
				invalids.push(invalidFormat);
			}
		}	
    	
		if (dateTime.month === undefined) {
			if (invalids.indexOf(invalidFormat) < 0) {
				invalids.push(invalidFormat);
			}
		}

		if (dateTime.day === undefined ||
			dateTime.day > 31 ||
			dateTime.day < 0) {
			if (invalids.indexOf(invalidFormat) < 0) {
				invalids.push(invalidFormat);
			}
		} else {
			let day = (new Date(dateTime.year +"-"+ dateTime.month +"-"+ dateTime.day)).getDay();
			
			if ( availableDays.indexOf(day) < 0 ) {
				if (invalids.indexOf(invalidDay) < 0) {
    				invalids.push(invalidDay);
    			}
			}
		}
    	
		if (dateTime.hour === undefined ||
			dateTime.hour < 0 ||
			dateTime.hour > 23) {
			if (invalids.indexOf(invalidFormat) < 0) {
				invalids.push(invalidFormat);
			}
		}
    	
		if (dateTime.minute === undefined || 
			dateTime.minute > 59 || 
			dateTime.minute < 0) {
			if (invalids.indexOf(invalidFormat) < 0) {
				invalids.push(invalidFormat);
			}
		}


       	if (invalids.length === 0) {
       		$("#dateMsgSuccess").show();
       		$("#dateNext").attr("disabled", false);

       	} else {
       		if (invalids.indexOf(invalidFormat) >= 0) {
       			$("#dateMsgDangerFormat").show();
       		}

       		if (invalids.indexOf(invalidDay) >= 0) {
				$("#dateMsgDangerAv").show();
       		}
       		$("#dateNext").attr("disabled", true);
       	}

    });

    $("#dateMsgSuccess").hide();
    $("#dateMsgDangerFormat").hide();
    $("#dateMsgDangerAv").hide();
});

function getHairdresser() {
	let choice;
	let list = $("[name='hairdresserChoice']");
	for(let i=0; i<list.length; i++) {
		if (list[i].checked) {
   			choice = list[i].value;
			break;
		}
	}
	return choice;
}