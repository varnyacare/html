const API_URL = "https://api.varnya.care"
var token = localStorage.getItem('auth');
var salon_id = localStorage.getItem('salon_id');
let userNmae = localStorage.getItem('username')
let password = localStorage.getItem('password')


if(userNmae == 'JCinvoice@varnya.care' && password == '#Va9811'){
    let generateSendInvoice = document.querySelector('#sidebarnav li:nth-child(2)');
    generateSendInvoice.remove();
}
$(function () {
    $('#payment-mode').on('change', function(){
        var payment_mode  = $(this).val()
        var from_date = $('#from-date').val()
        var to_date = $('#to-date').val()
        if(from_date && to_date) {
            $('#invoice-list').empty()
            getInvoiceHistory(payment_mode, from_date, to_date)
        } else {
            $('#invoice-list').empty()
            getInvoiceHistory(payment_mode)
        }
        
        $('#zero_config').DataTable()
        return
    })

    $('#filter').on('click', function(){
        var payment_mode = $('#payment-mode').val()
        var from_date = $('#from-date').val()
        var to_date = $('#to-date').val()
        if((from_date && !to_date) || (to_date && !from_date)) {
            alert('Please select both from and to date')
            return
        }
        $('#invoice-list').empty()
        getInvoiceHistory(payment_mode, from_date, to_date)
        $('#zero_config').DataTable()
        return;
    })

    //get Sales history
    getInvoiceHistory();
    $('#zero_config').DataTable()
    
});

function getInvoiceHistory(payment_mode = null, from_date = null, to_date = null) {
    document.getElementById('spinnerOverlay').style.display = 'flex';
    var qs = `?salon_id=${salon_id}&`
    qs += payment_mode ? `payment_mode=${payment_mode}&` : ``
    qs += from_date ? `from_date=${from_date}&` : ``
    qs += to_date ? `to_date=${to_date}` : ``
    $.ajax({
        url: API_URL+'/admin/get-all-invoice'+qs,
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            response = response.data
            $('#invoice-list').empty()
            var data = ``
            var total_amount = 0
            var withoutgst = 0
            var totalgst = 0
            var discount = 0
            var totalDiscount = 0
            var totalServiceCost = 0
            for(let i = 0; i < response.length; i++) {
                
                var username = response[i].user.name.toUpperCase()
                response[i] = response[i].item
                var is_cancelled = "Approved"
                if(response[i].is_cancelled) {
                    is_cancelled = "Cancelled"
                }
                if(response[i].discount != undefined) {
                    discount = response[i].discount
                    totalDiscount += discount
                }
                total_amount = total_amount + response[i].total_amount
                totalServiceCost += response[i].service_cost
                totalgst = totalgst + response[i].gst
                data += `<tr> <td>${response[i].invoice_no}</td><td>${username}</td><td>${response[i].date}</td><td>${response[i].product_cost}</td><td>${response[i].service_cost}</td><td>${discount}</td><td>${response[i].gst}</td><td>${response[i].total_amount}</td><td>${response[i].payment_mode}</td><td>${is_cancelled}</td><td><a href="${response[i].invoice_url}"><i class="mdi mdi-download"></i></a></td></tr>`;
            }
            document.getElementById('spinnerOverlay').style.display = 'none';
            withoutgst = total_amount - totalgst
            $('#total-invoice').text(response.length)
            $('#total-revenue').text(total_amount.toFixed(2))
            $('#total-without-gst').text(withoutgst.toFixed(2))
            $('#total-gst').text(totalgst.toFixed(2))
            $('#invoice-list').append(data);
            $('#discount').text(totalDiscount);
            $('#service-cost').text(totalServiceCost)
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    })
}

