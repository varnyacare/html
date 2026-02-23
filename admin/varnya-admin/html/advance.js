let cvarnya_mobile = localStorage.getItem("varnya_mobile");
$(document).ready(function(){
    var token = localStorage.getItem('auth')
    var salon_id = localStorage.getItem('salon_id');
    $.ajax({
        url: API_URL+'/user/get-advance-no?salon_id='+salon_id,
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            $('#advanceNumber').val(response.data)
            $('.invoice-id').text(response.data)
            if(salon_id == "640ac5b60244f4cc2f50d9d6"){
            $('#bdaarAddress').html("BDAAR &nbsp;Solutions &nbsp;Private &nbsp;Limited. &nbsp;Shop &nbsp;no &nbsp;80, &nbsp;Spaze &nbsp;Corporate &nbsp;Park, &nbsp;Sector &nbsp;69, &nbsp;Gurgaon, &nbsp;Haryana &nbsp;122101.")
            }
            else if(salon_id ==  "640ac5b60244f4cc2f50d9d6"){
                $('#bdaarAddress').html("BDAAR &nbsp;Solutions &nbsp;Private &nbsp;Limited. &nbsp;Shop &nbsp;no &nbsp;11 & &nbsp;13, &nbsp;Eros &nbsp;city &nbsp;square, &nbsp;Rosewood &nbsp;City &nbsp;Rd, &nbsp;Sector &nbsp;49, &nbsp;Gurugram, &nbsp;Haryana &nbsp;122018")
            }
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    });

    var input = document.getElementById("userList");

    input.addEventListener("change", function() {
        var selectedOption = getSelectedOption();
        
        if (selectedOption) {
            var selectedValue = selectedOption.value;
            var selectedName = selectedOption.getAttribute("data-name");
            var selectedEmail = selectedOption.getAttribute("data-email");
            var rewardPoint = selectedOption.getAttribute("data-point");
             advance = selectedOption.getAttribute("data-advance");
            if(selectedName) {
                $('#caName').val(selectedName)
            }
            if(selectedEmail) {
                $('#caEmail').val(selectedEmail)
            }

            advancePay = advance ? advance : 0
            points = rewardPoint ? rewardPoint : 0
            $('.rewPoint').text(`${points} Reward point's`)
            $('.advance').text(`${advancePay} Advance amount`)
            $('#checkAdvance').val(advancePay)
            $('#checkAdvance').attr('data-val',advancePay)
            $('#check1').val(points)
            $('#check1').attr('data-val', points)
        }

        function getSelectedOption() {
            var value = input.value;
            var options = document.getElementById("browsers").getElementsByTagName("option");
          
            for (var i = 0; i < options.length; i++) {
              var option = options[i];
          
              if (option.value === value) {
                return option;
              }
            }
          
            return null;
        }
    });

    const today = new Date();

    // Extract day, month, and year components
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero if single digit
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = today.getFullYear();
    
    // Format the date as DD/MM/YYYY
    const formattedDate = `${day}/${month}/${year}`;
    
    // Set the value of the input field
dateInput.value = formattedDate;
let receipts = [];
$('#filterAdvance').on('click', function() {
    var formattedDate = $('#adfrom-date').val();
    var formattedDate2 = $('#adto-date').val();

    // Create a Date object from the input value
    let inputDate = new Date(formattedDate);

    // Format the date in the desired format (DD/MM/YYYY)
    let from_date = `${inputDate.getDate().toString().padStart(2, '0')}/${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getFullYear()}`;

    // Create a Date object from the input value
    let inputDate2 = new Date(formattedDate2);

    // Format the date in the desired format (DD/MM/YYYY)
    let to_date = `${inputDate2.getDate().toString().padStart(2, '0')}/${(inputDate2.getMonth() + 1).toString().padStart(2, '0')}/${inputDate2.getFullYear()}`;

    console.log(from_date);

    if (!formattedDate || !formattedDate2) {
        alert('Please select both from and to date');
        return;
    }

    getAdvanceHistory(from_date, to_date);
});


getAdvanceHistory()
function getAdvanceHistory( from_date = null, to_date = null){``
    var qs = from_date ? `from_date=${from_date}&` : ``
    qs += to_date ? `to_date=${to_date}` : ``
    console.log("hello");
    let data = ``;
    $.ajax({
        url: API_URL+'/admin/get-all-receipt?'+qs,
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            console.log(response);
            $('#advance-list').empty()
            for(let i =0; i<response.data.length; i++){
                console.log(response.data[i]);
                data += `<tr><td>${response.data[i].item.advance_no}</td><td>${response.data[i].item.date}</td><td>${response.data[i].user.mobile}</td><td>${response.data[i].user.name}</td><td>${response.data[i].item.advance_amount}</td><td><a href="${response.data[i].item.advance_RCPT}" target="_blank" rel="noopener noreferrer" ><i class="mdi mdi-download"></i></a></tr>`
            }
            console.log(data,"data");
            $('#advance-list').append(data);
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    })
}
})


$(document).on('click','.mode', function(){
    $('.mode').css('background','transparent')
    $(this).css('background','bisque')
    $('#pay-mode').val($(this).val())
})



function generateRCPTAndSend(){
    let cName = document.getElementById("caName").value;
    let cNumber = document.getElementById("userList").value;
    let cEmail = document.getElementById("caEmail").value;
    let advanceNumber = document.getElementById("advanceNumber").value;
    let date = document.getElementById("dateInput").value;
    let amount = document.getElementById("advanceAmount").value;
    let paymentMode = document.getElementById("pay-mode").value;
    let checkAdvance = document.getElementById("checkAdvance").value;
    // console.log(checkAdvance.value,"checkAdvance",amount.value,"amount.value");
    let walletReward = Number(amount) + Number(checkAdvance);
    $('.customerName').text(cName)
    $('.customermobile').text(cNumber)
    $('.advance-id').text(advanceNumber)
    $('.RCPTdate').text(date)
    $('.AdvanceAmount').text(amount);
    $('.walletReward').text(walletReward);
    $('.payment-mode').text(paymentMode)

    if(cName == "" || cNumber.length < 10 || cNumber.length >  10){
        alert("Please check all the details!");
        return false;
    }
    if(amount < 5000){
        alert("Amount must be grater then 5000");
        return false;
    }
    if(paymentMode == ""){
        alert("Please Select Mode of Payment");
        return false;
    }
    console.log(cEmail,"cEmail.value");
    var options = {
        image: { type: 'jpeg', quality: 0.98 },
        jsPDF: { unit: 'pt', format: 'a4' },
        margin: 0,
        html2canvas: { scale: 2 },
    };

    $('#adv-hid').removeAttr('style')
    $('#nextpage2').remove()
    $('#main-wrapper2').remove()
    const printelement = document.querySelector('#adv-hid');
    html2pdf()
    .set(options)
    .from(printelement)
    .toPdf()
    .get('pdf')
    .then(pdfData => {
        // Create a FormData object
        let formData = new FormData();
        formData.append('pdf', pdfData.output('blob'), advanceNumber+'-advance.pdf');
        formData.append('name', cName);
	formData.append('varnya_mobile',cvarnya_mobile)
        formData.append('email', '');
        formData.append('mobile',cNumber);
        formData.append('advance_no',advanceNumber);
        formData.append('amount',parseInt(walletReward));
        formData.append('advance_amount',parseInt(amount));
        formData.append('date',date)
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        fetch('https://api.amapure.in/user/advance-payment', {
            method: 'POST',
            body: formData
        })
        .then(response => {
        // Handle the API response
        if (response.ok) {
            console.log(response);
            alert("Receipt Send successful");
            window.location.reload()
        } else {
            alert('PDF upload failed');
        }
        })
        .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        });
    });
    console.log(cName,"Cname",cNumber,"Cnumber",cEmail,"CEmail",advanceNumber,"Advancenumber",date,"DATE",amount,"Amount");
}



