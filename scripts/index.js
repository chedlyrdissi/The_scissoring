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
    // $('#cvvNum').inputmask("999");

});