const productAPI = "https://api.varnya.care";
$(function () {
    // if (window.location.href.endsWith('/services.php')) {
    //     $('.create-new').append(`<li><a class="dropdown-item" href="create-new-service.php">Create New</a></li>`);
    // }
    var token = localStorage.getItem('auth');


    $.ajax({
        url: productAPI + '/admin/get-products',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function (response) {
            let data = "";
            const productBtn = document.querySelector(".select-product");
            const productLists = document.querySelector(".product-items");


            productBtn.addEventListener("click", () => {
                $("#product-search").toggle('style');
                data = response.map((data, index) => {
                    return data = `
                        <li class="item">
                            <label class="customcheckbox mb-3 hover">
                            <input type="checkbox"  id=${'mainCheckbox'+ index}
                            checked />
                                <span class="checkmark">${data.name}</span>
                            </label>
                            <div class="quantity">
                                <div id="increase ${data.name}">
                                    <i style="margin:inherit;" class="fa fa-plus plus-icon" aria-hidden="true"></i>
                                </div>
                                <div id="quantity-value-1">0</div>
                                <div id="decrease ${data.name}">
                                    <i style="margin:inherit;" class="fa fa-minus minus-icon" aria-hidden="true""></i>
                                </div>
                                </div>
                        </li> 
                        <hr>`
                }).join("");
                productLists.innerHTML = data;
                response.map((data,index) => {
                  
                    const checkbox = document.getElementById('mainCheckbox' + index);
                    (function load(){
                        if(localStorage.getItem('mainCheckbox'+ index)){
                            checkbox.checked= true;
                        }else {
                            checkbox.checked= false;
                        }
                    })()
                    checkbox.addEventListener('change',(e)=>{
                        if(e.currentTarget.checked){

                            checkbox.checked= true;
                            localStorage.setItem('mainCheckbox' + index,true)
                            
                        }else{
                            checkbox.checked=false;
                            localStorage.removeItem('mainCheckbox' + index)

    
                        }
                    })
                })
                
        })
    
    const result = response.map((item)=>{
        return item.name;
    })
    
                const productSearch = document.querySelector(".product-search");
                productSearch.addEventListener("keyup", () => {
                    let arr = [];
                    let searchValue = productSearch.value.toLowerCase();
                    arr = result.filter((product)=>{
                        return product.toLowerCase().startsWith(searchValue);
                    }).map((data,index)=>`
                    <li class="item">
                    <label class="customcheckbox mb-3 hover">
                    <input type="checkbox" id=${
                        "mainCheckbox" + index
                      }
                        <span class="checkmark">${data}</span>
                      </label>
                      <div class="quantity">
                      <div id="increase">
                      <i class="fa fa-chevron-up" aria-hidden="true"></i>
                      </div>
                       <div id="quantity-value-1">0</div>
                   <div id="decrease">
                   <i class="fa fa-chevron-down" aria-hidden="true""></i>
                   </div>
                    </li>
                   
                    </div>
                          `).join("");
                          productLists.innerHTML = arr;
                      

                const quantityValue = document.querySelector("#quantity-value-1");
                
                let count = 0;
                $("#increase").click(function () {
                    // quantityValue.innerText=12;
                    count = count + 1
                    console.log(count);
                    console.log(quantityValue.innerText);
                    quantityValue.innerText = count;



                })
                $("#decrease").click(function () {
                    count = count - 1;
                    console.log(count);
                    quantityValue.innerText = count;
                    console.log("decrease");
                })



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
