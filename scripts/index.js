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
    if (service === undefined) {
        document.getElementById("book").disabled = true;
        return;
    }

    if ( $("#dateTimeInput").prop("value") == "") {
        document.getElementById("book").disabled = true;
        return;
    }

    if ( $("#nameInput").prop("value") == "" ) {
        document.getElementById("book").disabled = true;
        return;
    }

    if (document.getElementById("emailInput").value == "") {
        document.getElementById("book").disabled = true;
        return;
    }

    if (document.getElementById("phoneInput").value == "") {
        document.getElementById("book").disabled = true;
        return;
    }

    document.getElementById("book").disabled = false;
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
});