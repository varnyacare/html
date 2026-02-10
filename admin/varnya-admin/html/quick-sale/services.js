const api = "https://api.varnya.care"
$(function () {
    if (window.location.href.endsWith('/services.php')) {
        $('.create-new').append(`<li><a class="dropdown-item" href="create-new-service.php">Create New</a></li>`);
    }
    var token = localStorage.getItem('auth');
    // list of service here
    $.ajax({
        url: api + '/service/get-service',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function (response) {
            // console.log(response);
            let data = "";
          
            const serviceBtn = document.querySelector(".select-service"),
            items = document.querySelectorAll(".item");
            const addServices = document.querySelector(".service-items");
            const serviceBtnText = document.querySelector(".service-btn-text");

            
            serviceBtn.addEventListener("click", () => {
                 
            //      items.forEach((e)=>{
            //         console.log();

            //      item.classList.toggle("checked");
            //      let checked = document.querySelectorAll(".checked"),
            //      btnText = document.querySelector(".service-btn-text");
         
            //  if (checked && checked.length > 0) {
            //      btnText.innerText = `${checked.length} Selected`;
            //  } else {
            //      btnText.innerText = "Add Services";
            //  }
            //      })

               



                data = response.map((data) => {
                    
                    return data = `
                        <li class="item">
                             <input type = "checkbox" id="checkbox" autocomplete=off>
                            <span class="item-text">${data.service_name}</span>
                        </li>
                          `
                }).join("");
                addServices.innerHTML = data;

             
        

               
            })

           




        }

        ,
        error: function (xhr, status, error) {
            if (xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    })
});
// End of list of service

// Delete service action
$(document).on("click", '.delete-service', function () {
    if (confirm('Are you sure you want to delete this service ?')) {
        var id = $(this).attr("data-id")
        deleteService(id)
    }
})

function deleteService(id) {
    alert('Service deleted');
}
    // End of delete service action

