const API_URL = "https://api.varnya.care"
$(function () {
    var token = localStorage.getItem('auth')
    $('#create-salon').click(function(event){
        event.preventDefault();
        var name = $('#name').val()
        var location = $('#location').val()
        var city = $('#city').val()
        var state = $('#state').val()
        var pin_code = $('#pin_code').val()
        var description = $('#description').val()
        var image = $('#image').val()
        var images = image.split(",")
        var postData = { "name": name, "location": category, "images": images, "city": city, "state": state, "description": description, "pin_code": pin_code}
        console.log(postData);
        $.post({
            url: API_URL+"/salon/create-salon",
            contentType: "application/json",
            data : JSON.stringify(postData),
                beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: function(response) {
                if (confirm('Salon added ! Do you want to create more Salon ?')) {
                    window.location.reload()
                } else {
                    window.location.replace('slaon.php');
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
