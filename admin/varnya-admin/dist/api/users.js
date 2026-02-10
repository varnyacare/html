const API_URL = "https://api.varnya.care";

let userName = localStorage.getItem('username');
let password = localStorage.getItem('password');

console.log(userName, password);

// Hide invoice menu if specific login
if (userName === 'JCinvoice@varnya.care' && password === '#Va9811') {
    let generateSendInvoice = document.querySelector('#sidebarnav li:nth-child(2)');
    if (generateSendInvoice) generateSendInvoice.remove();
}

let responseData = [];
let token = localStorage.getItem('auth') // ⚠️ Fetch this securely

$(function () {
    loadUsers(1); // start with page 1
});

function loadUsers(page) {
    $.get({
        url: `${API_URL}/admin/get-users?page=${page}&limit=200`,
        contentType: "application/json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: function (res) {
            console.log(res);

            let users = res.users || [];
            if (!users.length) {
                console.log("No more users");
                return;
            }

            responseData = [...responseData, ...users];
            renderUsers(users);

            if (users.length >= 50) {
                loadUsers(page + 1);
            }
        },
        error: function (jqXHR) {
            if (jqXHR.status === 401) {
                window.location.replace("login.php");
            } else {
                console.error("Error fetching users:", jqXHR);
            }
        },
    });
}

function renderUsers(users) {
    let data = ``;
    for (let user of users) {
        let history = `No bookings`;
        if (user.bookings > 0) {
            history = `${user.bookings} bookings <a href="history.php?user_id=${user._id}" class="btn btn-success margin-5 text-white">View history</a>`;
        }
        data += `<tr>
                    <td>${user.name}</td>
                    <td>${user.mobile}</td>
                    <td>${user.email}</td>
                    <td>${user.point}</td>
                    <td>${history}</td>
                 </tr>`;
    }

    $('#user-list').append(data);

    if (!$.fn.DataTable.isDataTable('#zero_config')) {
        $("#zero_config").DataTable(); // init only once
    }
}
