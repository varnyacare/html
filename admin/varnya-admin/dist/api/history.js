const API_URL = "https://api.amapure.in"
$(function () {
    var token = localStorage.getItem('auth')
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var paramValue = urlParams.get('user_id');
    $.get({
        url: API_URL+"/booking/get-bookings-history/"+paramValue,
        contentType: "application/json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            response = response.data
            let data = ``;
            let totalAmount = 0;
            for(let i = 0; i < response.length; i++) {
                var services = response[i].services
                totalAmount = response[i].booking.total_amount + totalAmount
                var servicename = ``
                for(var j=0; j< services.length; j++) {
                    servicename += `${services[j].service_name}, `
                }

                data += `<tr> <td>${response[i].booking.booking_date}</td><td>${response[i].services.length}</td><td>${servicename}</td><td>${response[i].booking.status}</td><td>${response[i].booking.payment_status}</td><td>${response[i].booking.total_amount}</td></tr>`;
            }
            console.log(totalAmount);
            $('#booking-list').append(data);
            $('#revenue').text(totalAmount)
            $("#zero_config").DataTable();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            if(xhr.status) {
                window.location.replace('login.php');
            }
        }
    })
})
