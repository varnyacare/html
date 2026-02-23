const API_URL = "https://api.amapure.in"
let userNmae = localStorage.getItem('username')
let password = localStorage.getItem('password')

if(userNmae == 'JCinvoice@varnya.care' && password == '#Va9811'){
    let generateSendInvoice = document.querySelector('#sidebarnav li:nth-child(2)');
    generateSendInvoice.remove();
}
$(function () {
    if (window.location.href.endsWith('/services.php')) {
        $('.create-new').append(`<li><a class="dropdown-item" href="create-new-service.php">Create New</a></li>`);
    }
    var token = localStorage.getItem('auth')
    // list of service here
    $.ajax({
        url: API_URL+'/service/get-service',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            let data = ``;
            for(let i = 0; i < response.length; i++) {
                var desc = response[i].service_description
                if(desc == null) {
                    desc = ''
                }
                var shortenedText = desc.substr(0, 20);
                if (desc.length > 50) {
                    shortenedText += "...";
                }
                data += `<tr>
                            <th>
                            <label class="customcheckbox">
                                <input type="checkbox" class="listCheckbox" />
                                <span class="checkmark"></span>
                            </label>
                            </th>
                            <td>${response[i].service_name}</td>
                            <td>${response[i].service_category}</td>
                            <td>${response[i].normal_price}</td>
                            <td>${response[i].time}</td>
                            <td class="text-container"><p class="ht">${shortenedText}</p><span class="tooltip">Tooltip text</span></td>
                            <td>
                                <a href="javascript:void(0)" data-id="${response[i]._id}" class="text-danger delete-service" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete">
                                    <i class="mdi mdi-close"></i>
                                </a>
                            </td>
                        </tr>`;
            }
            $('.customtable').append(data);
            $("#zero_config").DataTable();
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    });
    // End of list of service

    // Delete service action
    $(document).on("click", '.delete-service', function(){
        if(confirm('Are you sure you want to delete this service ?')) {
            var id = $(this).attr("data-id")
            deleteService(id)
        }
    })

    function deleteService(id){
        alert('Service deleted');
    }
    // End of delete service action
})
