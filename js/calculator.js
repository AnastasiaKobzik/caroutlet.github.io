$(document).ready(function () {

    $('#calc_electric').change(function () {
        // если выбран электро
		if(document.getElementById('calc_electric').checked === true)
        {
            // если выбран электро и физ лицо
			if(document.getElementById('individual').checked === true)
			{
				document.getElementById('calc_discount_visible').style.display = "none";
				document.getElementById('calc_adge_visible').style.display = "block";
            }
            
            // если выбран электро и юр лицо
			if(document.getElementById('entity').checked === true)
			{
				document.getElementById('calc_discount_visible').style.display = "none";
			}

			document.getElementById('calc_fuel_visible').style.display = "none";
			document.getElementById('calc_volume_visible').style.display = "none";
		}
    });
    
	$('#calc_fuel').change(function () {
        // если выбран топливный
		if(document.getElementById('calc_fuel').checked === true)
        {
            // если выбран топливный и физ лицо
			if(document.getElementById('individual').checked === true)
            {
                console.log('выбран топливный и физ лицо');
				document.getElementById('calc_discount_visible').style.display = "block";
				document.getElementById('calc_volume_visible').style.display = "block";
                document.getElementById('calc_adge_visible').style.display = "block";
                document.getElementById('calc_fuel_visible').style.display = "none";
			}

            // если выбран топливный и юр лицо
			if(document.getElementById('entity').checked === true)
            {
                console.log('выбран топливный и юр лицо');
				document.getElementById('calc_fuel_visible').style.display = "block";
				document.getElementById('calc_volume_visible').style.display = "block";
				document.getElementById('calc_adge_visible').style.display = "block";
			}
		}
	});

    //выбран физ лицо
	$('#individual').change(function () {
		if(document.getElementById('individual').checked === true)
		{
			document.getElementById('calc_discount_visible').style.display = "block";
			document.getElementById('calc_fuel_visible').style.display = "none";
			 if(document.getElementById('calc_electric').checked === true)
			 {
			 	document.getElementById('calc_volume_visible').style.display = "none";
			 	document.getElementById('calc_adge_visible').style.display = "block";
			 	document.getElementById('calc_fuel_visible').style.display = "none";
			 	document.getElementById('calc_discount_visible').style.display = "none";
			 }
		}
	});
    //выбрано юр лицо
	$('#entity').change(function () {
		if(document.getElementById('entity').checked === true)
		{
			if(document.getElementById('calc_electric').checked === true)
			{
				document.getElementById('calc_volume_visible').style.display = "none";
				document.getElementById('calc_adge_visible').style.display = "block";
			 	document.getElementById('calc_fuel_visible').style.display = "none";
			}

			if(document.getElementById('calc_fuel').checked === true)
			{
				document.getElementById('calc_volume_visible').style.display = "block";
				document.getElementById('calc_adge_visible').style.display = "block";
			 	document.getElementById('calc_fuel_visible').style.display = "block";
			}

			document.getElementById('calc_discount_visible').style.display = "none";
		}

	});

	//СЃРѕР±С‹С‚РёРµ РЅР°Р¶Р°С‚РёСЏ РєРЅРѕРїРєРё
	$('#calc_btn').click(function () {
		let err=0;

		if(((document.getElementById('volume').value=='') || (isNaN(document.getElementById('volume').value))
		 || (document.getElementById('volume').value<=0)) && document.getElementById('calc_electric').checked !== true){
			 document.getElementById("volume").setAttribute("style","outline:2px solid #ed4646 !important");
			 err++;
        }

        if((document.getElementById('car-cost').value=='') || (isNaN(document.getElementById('car-cost').value))
         || (document.getElementById('car-cost').value<=0)){
			 document.getElementById("car-cost").setAttribute("style","outline:2px solid #ed4646 !important");
			 err++;
        }

        // if(err>0) {
		// 	UIkit.notification({
		// 	message: 'РљРѕСЂСЂРµРєС‚РЅРѕ Р·Р°РїРѕР»РЅРёС‚Рµ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Рµ РїРѕР»СЏ!',
		// 	status: 'danger',
		// 	pos: 'top-left',
		// 	timeout: 5000
		// 	});
        //     return;
        // }

		 var arr = [
		 	document.getElementById('car-cost').value,
		 	document.getElementById('calc_electric').checked,
		 	document.getElementById('calc_fuel').checked,
		 	document.getElementById('individual').checked,
		 	document.getElementById('entity').checked,
		 	document.getElementById('petrol').checked,
		 	document.getElementById('diesel').checked,
		 	document.getElementById('volume').value,
		 	$('#car-age').val(),
		 	document.getElementById('customs-privilege').checked
		 	];

		get_offer = arr.join('&');

		$.post('../calc/calc-tax.php', { calc_offer: get_offer }, function (data) { $('div#calc_rezult').html(data); });
	});

});

function changeval() {
	if((document.getElementById('car-cost').value=='') || (isNaN(document.getElementById('car-cost').value))
         || (document.getElementById('car-cost').value<=0)){
            console.log('должен менять, что-то не так');
			document.getElementById("car-cost").setAttribute("style","outline:2px solid #ed4646 !important");
        } else {document.getElementById("car-cost").removeAttribute("style");
	}

	if((document.getElementById('volume').value=='') || (isNaN(document.getElementById('volume').value))
         || (document.getElementById('volume').value<=0)){

			document.getElementById("volume").setAttribute("style","outline:2px solid #ed4646 !important");
        } else {document.getElementById("volume").removeAttribute("style");
	}
}