const API_URL = "https://api.amapure.in"
let userNmae = localStorage.getItem('username')
let password = localStorage.getItem('password')


if(userNmae == 'JCinvoice@varnya.care' && password == '#Va9811'){
    let generateSendInvoice = document.querySelector('#sidebarnav li:nth-child(2)');
    generateSendInvoice.remove();
}
$(function () {
    var token = localStorage.getItem('auth')
    $('#create-service').click(function(event){
        event.preventDefault();
        var name = $('#name').val()
        var category = $('#category').val()
        var image = $('#image').val()
        var price = $('#price').val()
        var time = $('#time').val()
        var description = $('#description').val()
        var postData = { "service_name": name, "service_category": category, "image": image, "normal_price": price, "time": time, "service_description": description}
        console.log(postData);
        $.post({
            url: API_URL+"/service/create-service",
            contentType: "application/json",
            data : JSON.stringify(postData),
                beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: function(response) {
                if (confirm('Service added ! Do you want to create more service ?')) {
                    window.location.reload()
                } else {
                    window.location.replace('services.php');
                }
            },
            error: function(xhr, status, error) {
                if(xhr.status == 403) {
                    window.location.replace('login.php');
                }
            }
        })
    })
})
