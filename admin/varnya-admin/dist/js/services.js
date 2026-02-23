const api = "https://api.amapure.in";
const servicedata = [];
function getTotal() {
  var total = servicedata.reduce((pre, c) => {
    return pre + Number(c.price);
  }, 0);
  $(".subtotal").text(total);
  $(".gtotal").text(total);
}
$(function () {
  if (window.location.href.endsWith("/services.php")) {
    $(".create-new").append(
      `<li><a class="dropdown-item" href="create-new-service.php">Create New</a></li>`
    );
  }
  var token = localStorage.getItem("auth");
  // list of service here
  $.ajax({
    url: api + "/service/get-service",
    type: "GET",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    success: function (response) {
      // console.log(response);
      let data = "";

      const serviceBtn = document.querySelector(".select-service");
      // items = document.querySelectorAll(".item");
      const addServices = document.querySelector(".service-items");
      const item = document.querySelector(".item");
      const serviceBtnText = document.querySelector(".service-btn-text");
      const invoiceItems = document.querySelector(".invoice-item-section");

      serviceBtn.addEventListener("click", () => {
        $("#service-search").add("style");
        setTimeout(() => {
          $("#service-search").toggle("isopen");
        }, 0);
        data = response
          .map((data, index) => {
            return (data = `
                  <li class="item">
                  <label class="customcheckbox  mb-3 check">
                      <input 
                      type="checkbox" 
                      id=${"mainCheckbox" + index}
                      data-price="${data.normal_price}"
                      data-id="${data._id}"
                      value="${data.service_name}"
                      />
                      <span class="checkmark">${data.service_name}</span>
                    </label>
                  </li>
                          `);
          })
          .join("");
        addServices.innerHTML = data;
        const result = response.map((item) => {
          return item.service_name;
        });

        const serviceSearch = document.querySelector(".service-search");
        serviceSearch.addEventListener("keyup", () => {
          let arr = [];
          let searchValue = serviceSearch.value.toLowerCase();
          arr = result
            .filter((product) => {
              return product.toLowerCase().startsWith(searchValue);
            })
            .map(
              (data, index) => `
                                <li class="item">
                                <label class="customcheckbox mb-3 check">
                                    <input type="checkbox" id=${
                                      "mainCheckbox" + index
                                    }
                                    checked/>
                                    <span class="checkmark">${data}</span>
                                  </label>
                                </li>
                                      `
            )
            .join("");
          addServices.innerHTML = arr;
        });

        response.map((data, index) => {
          const checkbox = document.getElementById("mainCheckbox" + index);

          (function load() {
            if (localStorage.getItem("mainCheckbox" + index)) {
              checkbox.checked = true;
            } else {
              checkbox.checked = false;
            }
          })();
          checkbox.addEventListener("change", (e) => {
            var price = e.currentTarget.getAttribute("data-price");
            var _id = e.currentTarget.getAttribute("data-id");
            var name = e.currentTarget.getAttribute("value");
            if (e.currentTarget.checked) {
              checkbox.checked = true;
              servicedata.push({ name, price, gst: 0, _id });
            } else {
              checkbox.checked = false;
              var index = servicedata.findIndex((item) => item._id === _id);
              servicedata.splice(index, 1);
            }
            var htmlData = "";
            servicedata.map((item) => {
              htmlData += `<div class="invoice-item" data-id="${item._id}">
                <div class="ex-charges fill-primary">
                    <p class="ex-charges text">${item.name}</p>
                </div>
                <div class="ex-charges fill-primary">
                    
                    <input type="number"  class="ex-charges-value fill height price-input" value="${item.price}">
                </div>
                <div class="discount fill-primary">
                    <input type="text" class="dicount-value gst-input fill height" ${item.gst}>
                </div>
                </div>`;
            });
            invoiceItems.innerHTML = htmlData;
            getTotal();
            localStorage.setItem("serviceItems", JSON.stringify(servicedata));
          });
        });

        //    window.addEventListener("click",()=>{

        //     console.log("window clicked")
        //     if(serviceBtn.classList.contains("open") && serviceBtn.classList.contains("isopen")){
        //         serviceBtn.classList.remove("open");
        //         $("#service-search").toggle("open")
        //         // serviceBtn.style.display = "none"
        //     }
        //    })
      });
    },

    error: function (xhr, status, error) {
      if (xhr.status == 403) {
        window.location.replace("login.php");
      }
    },
  });
});
// End of list of service

// Delete service action
$(document).on("click", ".delete-service", function () {
  if (confirm("Are you sure you want to delete this service ?")) {
    var id = $(this).attr("data-id");
    deleteService(id);
  }
});

function deleteService(id) {
  alert("Service deleted");
}
// End of delete service action
$(document).on("change", ".price-input", function (e) {
  var _id = $(this).closest(".invoice-item").attr("data-id");
  var index = servicedata.findIndex((item) => item._id === _id);
  servicedata[index].price = e.target.value;
  getTotal();
  localStorage.setItem("serviceItems", JSON.stringify(servicedata));
  console.log(servicedata);
});
$(document).on("change", ".gst-input", function (e) {
  var _id = $(this).closest(".invoice-item").attr("data-id");

  var index = servicedata.findIndex((item) => item._id === _id);
  servicedata[index].gst = e.target.value;
  getTotal();
  localStorage.setItem("serviceItems", JSON.stringify(servicedata));
});
