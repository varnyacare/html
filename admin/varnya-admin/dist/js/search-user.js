const serachUserAPI = "https://api.varnya.care";
const API_URL = "https://api.varnya.care";
var token = localStorage.getItem('auth');
let currentDate = new Date();
let memberTable = '';

// Extract day, month, and year
let day = String(currentDate.getDate()).padStart(2, '0');
let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
let year = String(currentDate.getFullYear()).slice(-2); // Get the last two digits of the year

// Format the date as dd/mm/yy
let formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate, "currentDate");
let user_id = '';
$(function () {
    // if (window.location.href.endsWith('/services.php')) {
    //     $('.create-new').append(`<li><a class="dropdown-item" href="create-new-service.php">Create New</a></li>`);
    // }
    var token = localStorage.getItem('auth');
    // list of service here
    $('.search-input').keyup(function(){
        var input = $('.search-input').val();
        let data = "";
        if(input.length > 2) {
            $.ajax({
                url: serachUserAPI + `/admin/search-users/${input}`,
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                },
                success: function (response) {
                    $('#browsers').empty();
		      let getUserdetails = document.getElementById('getUserdetails')
			console.log(getUserdetails);
                    if(response.length < 1) {
                        $('#new-user').addClass('btn')
                        $('#new-user').removeAttr('style');
                        $("#users-list").addClass("close");
                    } else {
                        userData = '';
                        for(var i =0; i < response.length; i++) {
                            userData += `<option data-advance="${response[i].advance}" data-point="${response[i].point}" data-email="${response[i].email}" data-name="${response[i].name}" value="${response[i].mobile}">`
                            user_id = response[i]._id;
                            localStorage.setItem('userNameMobile',`${response[i].name} (${response[i].mobile})`)
                            var disReson = response[i].disReson;
                            var disValue = response[i].disValue;
                            var membership = response[i].membership;
                            var memTime = response[i].memTime;
                             var comments = response[i].comment
                        }
                        let mobile = document.getElementById("userList").value;
                        $("#discountDiv").hide();
                        $("#membershipDiv").hide();
                        $("#commentDiv").hide();
                        if(mobile.length == 10){
                           $('#memberTable').empty();
			   memberTable = ''; 
                            userDetails(user_id);
                            membershipDetails(user_id);
                           $('#DiskTable').empty();
                           $('#commentsText').empty();
                            if(disReson && disReson.length > 0){
                                let discountTable;
                                $('#discountDiv').removeAttr('style')
                                for(let k = 0; k< disReson.length; k++){
                                    discountTable += `<tr class="disBroder"><td class="disBroder">${disReson[k]}</td><td class="disBroder">${disValue[k]}</td></tr>`
                                }
                                $('#DiskTable').append(discountTable);
                            }
                            if(comments){
                                $("#commentDiv").removeAttr('style')
                                $('#commentsText').append(comments)
                            }
                        }
                        else if(getUserdetails != null){
                            getUserdetails.disabled = true;
                        }
                        $('#browsers').append(userData);
                    }

                    $("#users-list").removeAttr('style');
                    response.map((user)=>{
                        console.log(user.name);
                        return data +=`
                        <li class="user">${user.name}</li>
                        `
                    }).join(" ");

                   document.querySelector(".users-list").innerHTML = data;
                   $(".user").click(function(){
                    $("#users-list").addClass("close");

                   })
                  
                   
                //    Create New User 

             $("#new-user").click(()=>{
                $('.user-container').removeAttr('style');
                console.log("clicked on create new user");
             })
               


            
                  
                    
                },
                error: function(xhr, status, error) {
                    if(xhr.status == 403) {
                        window.location.replace('login.php');
                    }
                }
            })
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
function userDetails(user_id){
    let userSdata = ``;
    let index = 0;
    $.get({
        url: API_URL+"/booking/get-user-history/"+user_id,
        contentType: "application/json",
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success : function(response){
            console.log(response);
            let getUserdetails = document.getElementById('getUserdetails')
            getUserdetails.disabled = false;
            for(let i=0; i< response.data.length; i++){
                console.log(response.data[i].booking.booking_date);
                let booking_date = response.data[i].booking.booking_date
                console.log(response.data[i].invoice.invoice_no);
                let invoice_no = response.data[i].invoice.invoice_no;
                let serviceName = '';
                let stylistName = '';
                console.log(response.data[i].services);
                console.log(response.data[i].stylists);
                for(let k =0; k<response.data[i].services.length; k++){
                    serviceName += `${response.data[i].services[k].service_name}, `
                    console.log(response.data[i].services[k].service_name);
                    stylistName += `${response.data[i].stylists[k].name}, `
                    console.log(response.data[i].stylists[k].name);
                }
                userSdata += `<tr><td>${booking_date}</td><td>${invoice_no}</td><td>${serviceName}</td><td>${response.data[i].booking.total_amount}</td><td>${stylistName}</td></tr>`
            }
            localStorage.setItem("userDetails",userSdata);
        },
    error: function(jqXHR, textStatus, errorThrown){
        if(xhr.status) {
            window.location.replace('login.php');
        }
    }
})
}


function parseDate(dateString) {
    const [day, month, year] = dateString.split('/');
    // Assuming the year is given as two digits, prepend '20' to make it a four-digit year
    const fullYear = '20' + year;
    return new Date(fullYear, month - 1, day); // Months are zero-indexed in JS Date
}

function getDifferenceInDays(date1, date2) {
    const timeDiff = date1.getTime() - date2.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

function membershipDetails(user_id){
    let userSdata = ``;
    let index = 0;
    $.get({
        url: API_URL+"/admin/membership-details/"+user_id,
        contentType: "application/json",
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success : function(response){
            $('#membershipDiv').removeAttr('style')
            $('#memberTable').empty();
            let responseArray = [response]
             console.log(response,responseArray.length,"response");
            for(let i =0; i< responseArray.length; i++){
                console.log(responseArray[i],"response");
                let memparseDate = parseDate(responseArray[i].toDate);
                let todayCDate =  parseDate(formattedDate);
                let diffDate = getDifferenceInDays(memparseDate,todayCDate)
                console.log(memparseDate,todayCDate ,"daymonthyear");
                if(diffDate <= 7 && diffDate >= 0){
                    if(diffDate === 0){
                        diffDate = 'Today'
                    }
                    else{
                        diffDate = `within ${diffDate} Days`
                    }
                memberTable += `<tr class="disBroder"><td class="disBroder">${responseArray[i].membershipName}</td><td class="disBroder">${responseArray[i].startDate} To ${responseArray[i].toDate}</td></tr>`
                    let expireDates = `your ${responseArray[i].membershipName} Membership is expire ${diffDate}`
                    alert(expireDates);
                }
                else if(diffDate < 0 ){
                    alert(`your ${responseArray[i].membershipName} Membership is expired. \n         (${responseArray[i].toDate})`);
                }
                else{
                    memberTable += `<tr class="disBroder"><td class="disBroder">${responseArray[i].membershipName}</td><td class="disBroder">${responseArray[i].startDate} To ${responseArray[i].toDate}</td></tr>`
                }
            }
            $('#memberTable').append(memberTable);
        },
    error: function(jqXHR,textStatus,errorThrown){
        if(xhr.status){
            console.log('xhr.status');
        }
    }
})
}
