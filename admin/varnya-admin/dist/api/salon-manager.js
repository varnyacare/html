const API_URL = "https://api.amapure.in"
$(function () {
    if (window.location.href.endsWith('/salon-manager.php')) {
        $('.create-new').append(`<li><a class="dropdown-item" href="create-salon-manager.php">Create New</a></li>`);
    }
    var token = localStorage.getItem('auth')
    $.ajax({
        url: API_URL+'/salon/get-salon',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            let data = ``;
            for(let i = 0; i < response.length; i++) {
                var desc = response[i].description
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
                            <td>${response[i].name}</td>
                            <td>${response[i].location}</td>
                            <td>${response[i].city}</td>
                            <td>${response[i].pin_code}</td>
                            <td class="text-container"><p class="ht">${shortenedText}</p><span class="tooltip">Tooltip text</span></td>
                            <td>
                                <a href="javascript:void(0)" data-id="${response[i]._id}" class="text-danger delete-salon" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete">
                                    <i class="mdi mdi-close"></i>
                                </a>
                            </td>
                        </tr>`;
            }
            $('.customtable').append(data);
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    });

    // Delete Salon action
    $(document).on("click", '.delete-salon', function(){
        if(confirm('Are you sure you want to delete this salon ?')) {
            var id = $(this).attr("data-id")
            deleteSalon(id)
        }
    })

    function deleteSalon(id){
        alert('Salon deleted');
    }
    // End of delete Salon action
})
