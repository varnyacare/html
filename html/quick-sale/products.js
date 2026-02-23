const productAPI = "https://api.amapure.in";
$(function () {
    // if (window.location.href.endsWith('/services.php')) {
    //     $('.create-new').append(`<li><a class="dropdown-item" href="create-new-service.php">Create New</a></li>`);
    // }
    var token = localStorage.getItem('auth');
    // list of service here
    $.ajax({
        url: productAPI + '/admin/get-products',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function (response) {
            console.log(response);
            let data = "";
            const productBtn = document.querySelector(".select-product");
            const productLists = document.querySelector(".product-items");

            productBtn.addEventListener("click", () => {
                    data = response.map((data) => {
                        
                        return data = `
                        <option value="product-text">${data.name}</option>
                              `
                    }).join("");
                    productLists.innerHTML = data;
    
                 
            
    
                   
                })
    
            
        }
      
    ,
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
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
