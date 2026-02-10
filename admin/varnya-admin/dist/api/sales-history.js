const API_URL = "https://api.varnya.care"
var token = localStorage.getItem('auth');
var salon_id = localStorage.getItem('salon_id')
let userNmae = localStorage.getItem('username')
let password = localStorage.getItem('password')


if(userNmae == 'JCinvoice@varnya.care' && password == '#Va9811'){
    let generateSendInvoice = document.querySelector('#sidebarnav li:nth-child(2)');
    generateSendInvoice.remove();
}
$(function () {
    $.ajax({
        url: API_URL+'/stylist/get-stylist',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            data = `<option value="all">All</option>`
            for(let i = 0; i < response.length; i++) {
                data += `<option value="${response[i]._id}">${response[i].name}</option>`;
            }
            $('#stylist').append(data)
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    })
    //get Sales history
    getSalesHistory();
    
});

function getSalesHistory(stylist = null, fromDate = null, toDate = null){
    if(stylist == 'all') {
        stylist = null
    }
    $.ajax({
        url: API_URL+'/booking/get-sales-history?salon_id='+salon_id+'&stylist='+stylist+'&fromDate='+fromDate+'&toDate='+toDate,
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            $('#booking-list').empty()
            response = response.data
            let data = ``;
            let totalAmount = 0;
            let totalBooking = response.length
            let totalServices = 0;
            for(let i = 0; i < response.length; i++) {
                totalServices = response[i].services.length + totalServices
                var services = response[i].services
                var discountPercent = !response[i].booking.discount_percent ? 0 : response[i].booking.discount_percent
                var discount  = response[i].booking.total_amount * discountPercent / 100
                var amountAfterDiscount = response[i].booking.total_amount - discount
                totalAmount = response[i].booking.total_amount - discount + totalAmount
                var servicename = ``
                for(var j=0; j< services.length; j++) {
                    servicename += `${services[j].service_name}, `
                }

                data += `<tr> <td>${response[i].stylist.name}</td><td>${response[i].stylist.emp_id}</td><td>${response[i].booking.booking_date}</td><td>${response[i].services.length}</td><td>${servicename}</td><td>${amountAfterDiscount}</td></tr>`;
            }
            $('#total-booking').text(totalBooking)
            $('#total-revenue').text(totalAmount)
            $('#total-services').text(totalServices)
            $('#booking-list').append(data)
            $("#zero_config").DataTable();
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    })
}

function FilterSalesData(){
    var stylist = $('#stylist').val()
    var fromDate = $('#from-date').val()
    var toDate = $('#to-date').val()
    console.log(stylist)
    if(stylist == 'all' && (!fromDate || !toDate)) {
        alert('Please select either stylist or date to filter')
        return
    }
    if((fromDate && !toDate) || (toDate && !fromDate)) {
        alert('Please select both from and to date')
        return
    }
    getSalesHistory(stylist, fromDate, toDate)
}
