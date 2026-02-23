let userNmae = localStorage.getItem('username')
let password = localStorage.getItem('password')
let varnya_mobile = localStorage.getItem('varnya_mobile')
let pdfMobileNumber = `+91-${varnya_mobile.slice(-10)}`;
let gstPercentage= 5;


document.getElementById('gstToggle').addEventListener('change', function () {
        const checkbox = document.getElementById('gstToggle');
        const gstLabel = document.getElementById('gstLabel');
        const cGSTLabel = document.getElementById('cGSTLabel');
        const sGSTLabel = document.getElementById('sGSTLabel');
        const addBtn = document.getElementById('addProductBtn');
        if (checkbox.checked) {
            console.log(checkbox.checked);
            gstPercentage = 18;
            addBtn.disabled = false;
      gstLabel.textContent = 'GST 18%';
      cGSTLabel.textContent = 'CGST 9%';
      sGSTLabel.textContent = 'SGST 9%';
      // Optional: update the GST amount
      gstValueElement.textContent = '₹' + calculateGst(18);
    } else {
      gstLabel.textContent = 'GST 5%'
      cGSTLabel.textContent = 'CGST 2.5%';
      sGSTLabel.textContent = 'SGST 2.5%';
      gstPercentage = 5;
      addBtn.disabled = true;
    }
    })
if(userNmae == 'JCinvoice@varnya.care' && password == '#Va9811'){
    let generateSendInvoice = document.getElementById('nextpage1')
    if(generateSendInvoice){
        generateSendInvoice.parentNode.removeChild(generateSendInvoice);
    }
    else{
        console.log("Not Fount");
    }
}
var advance;
let pointToUse = 0;
var advancePay = 0;
let points = 0;
let category;
let paymentModesNames = "";
let buyingAdvanceAmound = 0;
let buyingRewads =0;
let bisqueCount = 0;
let netpaybleAmoutIsCorr = 0;

var parentProductElement = document.getElementById("TBodyProduct");
var productElement = parentProductElement.querySelectorAll('[name="product_id"]')
let rewardInput = document.getElementById('rewardInput');
let rewardAdvance = document.getElementById('rewardAdvance');
function GetPrint()
{
    $('.left-sidebar').remove()
    $('.container').removeAttr('style')
    var className = "container"
    var elements = document.getElementsByClassName(className);

    // Convert the HTMLCollection to an array for easier iteration
    var elementsArray = Array.prototype.slice.call(elements);
  
    elementsArray.forEach(function(element) {
      element.style.display = 'block'; // Make sure the element is visible before printing
    });
  
    window.print();
  
    elementsArray.forEach(function(element) {
      element.style.display = ''; // Restore the original display style
    });
}

let checkbox1 = document.getElementById('check1');
let checkbox2 = document.getElementById('check2');
let happyHours = document.getElementById('happyHours');

happyHours.addEventListener('change',function() {
    if(happyHours.checked){
    $('.paymentAmount').val(0);
    $('.paymentAmountDiv').css('display','none');
    rewardInput.textContent = 'Reward'; 
    $('#pay-mode').val('');
    $('#rewardAdvance').val('points')
        checkbox1.checked = false;
        checkbox2.checked = false;
        checkbox1.disabled = true;
        checkbox2.disabled = true;
    document.getElementById('discount').value = 20;
    let checkboxes = document.getElementsByName("payment-mode");
        checkboxes.forEach(checkbox => {
            // Set the checked property to false
            checkbox.checked = false;
            checkbox.disabled = false;
          });
    GetTotal();
    
    // $('.mode').css('background','transparent')
    $('#pay-mode').val('');
    $('#rewardAdvance').val('points')
    }
    else{
        $('.paymentAmount').val(0);
    $('.paymentAmountDiv').css('display','none');
    rewardInput.textContent = 'Reward'; 
    $('#pay-mode').val('');
    $('#rewardAdvance').val('points')
        checkbox2.checked = false;
        checkbox1.disabled = false;
        checkbox2.disabled = false;
    document.getElementById('discount').value = 0;
    let checkboxes = document.getElementsByName("payment-mode");
        checkboxes.forEach(checkbox => {
            // Set the checked property to false
            checkbox.checked = false;
            checkbox.disabled = false;
          });
    GetTotal();
    // $('.mode').css('background','transparent')
   
    }
})

checkbox1.addEventListener('change', function() {
  if (checkbox1.checked) {
    $('.paymentAmount').val(0);
$('.paymentAmountDiv').css('display','none');
    checkbox2.checked = false; // Uncheck checkbox2 if checkbox1 is checked
    happyHours.checked = false;
    rewardInput.textContent = 'Reward';
    // $('.mode').css('background','transparent')
    $('#pay-mode').val('');
    $('#rewardAdvance').val('points')
    let checkboxes = document.getElementsByName("payment-mode");
    checkboxes.forEach(checkbox => {
        // Set the checked property to false
        checkbox.checked = false;
        checkbox.disabled = false;
      });
    document.getElementById('discount').value = 0;
    GetTotal();
  }
  else{
    $('.paymentAmount').val(0);
$('.paymentAmountDiv').css('display','none');
    checkbox2.checked = false;
document.getElementById('discount').value = 0;
let checkboxes = document.getElementsByName("payment-mode");
    checkboxes.forEach(checkbox => {
        // Set the checked property to false
        checkbox.checked = false;
        checkbox.disabled = false;
});
GetTotal();
rewardInput.textContent = 'Reward';
// $('.mode').css('background','transparent')

$('#pay-mode').val('');
$('#rewardAdvance').val('points')
}
});

checkbox2.addEventListener('change', function() {
  if (checkbox2.checked) {
    $('.paymentAmount').val(0);
    $('.paymentAmountDiv').css('display','none');
    checkbox1.checked = false; // Uncheck checkbox1 if checkbox2 is checked
    happyHours.checked = false;
    rewardInput.textContent = 'Advance';
    $('#rewardAdvance').val('Advance Pay')
    // $('.mode').css('background','transparent')
    $('#pay-mode').val('')
    document.getElementById('discount').value = 30;
    let checkboxes = document.getElementsByName("payment-mode");
        checkboxes.forEach(checkbox => {
            // Set the checked property to false
            checkbox.checked = false;
            checkbox.disabled = true;
          });
    GetTotal();
    $('#check1').val(0)
    if ($('.subtotal').length > 0) {
        // Remove the element
        $('.subtotal').remove();
        $('.rewardUsed').text(0)
      } 
  }
  if (checkbox2.checked === false) {
    $('.paymentAmount').val(0);
    $('.paymentAmountDiv').css('display','none');
    // checkbox1.checked = false; // Uncheck checkbox1 if checkbox2 is checked
    rewardInput.textContent = 'Reward';
    $('#rewardAdvance').val('points')
    // $('.mode').css('background','transparent')
    $('#pay-mode').val('')
    document.getElementById('discount').value = 0;
    let checkboxes = document.getElementsByName("payment-mode");
        checkboxes.forEach(checkbox => {
            // Set the checked property to false
            checkbox.checked = false;
            checkbox.disabled = false;
          });
    GetTotal();
    $('#check1').val(0)
    if ($('.subtotal').length > 0) {
        // Remove the element
        $('.subtotal').remove();
        $('.rewardUsed').text(0)
      } 
  }
  if(checkbox2.checked && productElement.length > 1){
        alert("Advance can't be used. Please Remove product")
        checkbox2.checked = false
    }
});

function BtnAdd()
{
    /*Add Button*/
    var v = $("#TRow").clone().appendTo("#TBody") ;
    $(v).find("input").val('');
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}

function BtnAddProduct()
{
    /*Add Button*/
    var v = $("#TRowProduct").clone().appendTo("#TBodyProduct") ;
    $(v).find("input").val('');
    $(v).removeClass("d-none-product");
    $(v).find("th").first().html($('#TBodyProduct tr').length - 1);
    console.log(parentProductElement);
    $('#pay-mode').val('');
    if(checkbox2.checked){
        checkbox2.checked = false
        document.getElementById('rewardAdvance').disabled = true;
        rewardInput.textContent = 'Reward';
        // $('.mode').css('background','transparent')
        $('#pay-mode').val('');
        $('#rewardAdvance').val('points')
        alert("Advance can't be used. Please Remove product")
}
        
        checkbox2.checked = false;
        happyHours.checked = false;
        happyHours.disabled = true;
        checkbox2.disabled = true;
    document.getElementById('discount').value = 0;
    GetTotal();
}

function BtnDel(v)
{
    /*Delete Button*/
       $(v).parent().parent().remove(); 
       GetTotal();

        $("#TBody").find("tr").each(
        function(index)
        {
           $(this).find("th").first().html(index);
        }

       );
}

function Calc(v)
{
    /*Detail Calculation Each Row*/
    // var index = $(v).parent().parent().index();

    // var qty = document.getElementsByName("qty")[index].value;
    // var rate = document.getElementsByName("rate")[index].value;

    // var amt = qty * rate;
    // document.getElementsByName("amt")[index].value = amt;

    var qty = document.getElementsByName("qty");
    var rate = document.getElementsByName("rate")
    var disc = document.getElementsByName("disc");

    // Loop through the elements and do something with each of them
    for (var i = 0; i < qty.length; i++) {
        var amt = qty[i].value * rate[i].value;
        var discount = rate[i].value * disc[i].value / 100;
        amt = amt - discount;
        document.getElementsByName("amt")[i].value = amt;
        document.getElementsByName("amt")[i].setAttribute('value', amt)
        qty[i].setAttribute('value',qty[i].value)
        rate[i].setAttribute('value',rate[i].value)
        disc[i].setAttribute('value',disc[i].value)

    }

    GetTotal();
}

function GetTotal()
{
    /*Footer Calculation*/   

    var sum=0;
    var amts =  document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++)
    {
        var amt = amts[index].value;
        sum = +(sum) +  +(amt) ; 
    }
    $('.totalAmt').text(sum)

    // reward point use section
console.log(productElement.length,"hello");
    var parentElement = document.getElementById("TBody");
    var elements = parentElement.querySelectorAll('[name="amt"]'); // Get all elements inside the parent
    var serviceValue = 0
    for (var i = 0; i < elements.length; i++) {
        serviceValue = parseInt(elements[i].value) + serviceValue;
    }
    var totalPoints = $('#rewardValue').val()
    totalPoints = parseInt(totalPoints)

    var discount = $('#discount').val()
    discount = parseInt(discount)
    if(discount && discount != 0) {
        sum = sum - sum  * discount/100
        serviceValue = serviceValue - serviceValue * discount/100
    }
    
   let pointsAre = document.getElementById("rewardValue").value
   console.log(pointsAre,"le le");
    console.log($('#check1').val());
    if(checkbox1.checked) {
    if(totalPoints >= serviceValue) {
        pointToUse = serviceValue
        sum = sum - serviceValue
        serviceValue = 0;
    } else {
        pointToUse = totalPoints
        sum = sum - totalPoints
    }
        $('.subtotal').remove()
        $('.rewardUsed').text(0)
        console.log(checkbox1.checked);
        $('.totalCalculation').prepend(`<div class="input-group mb-3 subtotal">
                                        <span class="input-group-text" >Sub Total</span>
                                        <input type="number" class="form-control text-end" disabled="" value="${sum}">
                                    </div>
                                    `)
        $('.gstsection').prepend(`<div class="input-group mb-3 subtotal">
                                    <span style="width:60%" class="input-group-text" >Reward used</span>
                                    <input type="number" class="form-control text-end" id="PointUsedAre" disabled="" onchange="GetTotal()" value="${pointToUse}">
                                </div>`)
        
        $('.rewardUsed').text(pointToUse)
    } else {
        $('.subtotal').remove()
        $('.rewardUsed').text(0)
        console.log('Inside else')
    }
    
   
    // End reward point use section
    var netpayble = document.getElementById("FNet").value;
    document.getElementById("FTotal").value = sum.toFixed(2);
    let rewardUsedElement = document.getElementById('PointUsedAre');
    var number = sum*gstPercentage/100;
    console.log("hair",gstPercentage,number);
    
  
    
    document.getElementById("FGST").value = number.toFixed(2);
    var gst =  document.getElementById("FGST").value;
    var net = +(sum) + +(gst);
    net = Math.round(net)
    document.getElementById("FNet").value = net.toFixed(2);
    var splitNumber = number/2
    document.getElementById("CGST").value = splitNumber.toFixed(2);
    document.getElementById("SGST").value = splitNumber.toFixed(2);
    if(advance >= net){
        checkbox2.disabled = false;
        console.log(checkbox2.checked);
        if(checkbox2.checked){
            console.log("check");
    // Change the text content of the span
    rewardInput.textContent = 'Advance';
    rewardAdvance = "Advance Pay"
}
    }
    else{
        if(checkbox2.checked && advance < net){
            document.getElementById('discount').value = 0;
            alert("Advance can't be Used, Net Payable Amount must be less than Advance Amount")
        }
        checkbox2.checked = false;
        checkbox2.disabled = true;
        rewardInput.textContent = 'Reward';
        rewardAdvance = "points"

    }

var productElementPrice = document.getElementById("TBodyProduct");
var productElementPrice = parentProductElement.querySelectorAll('[name="amt"]')
    console.log(elements.length > 1 && productElementPrice.length < 2, "Boolean");
    console.log(elements.length, productElementPrice.length , "BValue");
    if(elements.length > 1 && productElementPrice.length < 2){
        checkbox1.disabled = false;
        checkbox2.disabled = false;
        happyHours.disabled = false;
        document.getElementById('rewardAdvance').disabled = false;
    }
    let productName = $('.products');
    for(let i =0; i<= productName.length; i++){
        console.log(productName[i]);
    }
    console.log(document.getElementById('rewardAdvance').checked);
    let rewardValueIs = Number(document.getElementById('rewardValue').value);
    let pointsValueIs = Number(points);
    console.log(typeof(document.getElementById('rewardValue').value));
    console.log(typeof(points));
    if(checkbox1.checked && document.getElementById('rewardAdvance').checked && rewardValueIs > pointsValueIs || rewardValueIs < 0){
        alert("check the Points you have Enter");
        console.log($('.rewPoint').text(), points)
        document.getElementById('rewardValue').value = Number(points)
        document.getElementById('PointUsedAre').value = Number(points)
}
else if(!checkbox1.checked && rewardUsedElement !== null){
    document.getElementById('rewardValue').value = 0
        document.getElementById('PointUsedAre').value = 0
}
}

function generatePdfAndSend() {

    const mobileElement = document.getElementById('varnyaMobilenumber');
 // Change the text content
            $('.varnyaMobilenumber').text(pdfMobileNumber);

            // Change the href attribute
           $('.varnyaMobilenumber').attr('href', 'tel:' + pdfMobileNumber)
    const mobile = $('#userList').val()
    $('.mobile').text(mobile)
    const invoice = $('#invoiceNumber').val()
    const name = $('#cName').val()
    $('.name').text(name)
    const email = $('#cEmail').val()
    const total_amount = $('#FNet').val()
    let  totalAmountTaxable = Number(total_amount);
    $('.netPay').text(total_amount)
    const paymode = $('#pay-mode').val()
    let paymentAmount = 0;
    let pdfPaymentMethod = '';
    // console.log();
    if(document.getElementById('cash-checkbox').checked){
       paymentAmount += Number(document.getElementById('cash-amount').value);
       pdfPaymentMethod += `cash (${document.getElementById('cash-amount').value}), `
       console.log(pdfPaymentMethod);
    }
    if(document.getElementById('Card-checkbox').checked){
        paymentAmount += Number(document.getElementById('Card-amount').value);
        pdfPaymentMethod += `card (${document.getElementById('Card-amount').value}), `
        console.log(pdfPaymentMethod);
    }
    if(document.getElementById('upi-checkbox').checked){
        paymentAmount += Number(document.getElementById('upi-amount').value);
        pdfPaymentMethod += `upi (${document.getElementById('upi-amount').value}), `
        console.log(pdfPaymentMethod);
    }
    if(checkbox1.checked && document.getElementById('rewardAdvance').checked){
        $('.rewardUsed').text(document.getElementById('PointUsedAre').value)
        pdfPaymentMethod += `points (${document.getElementById('PointUsedAre').value})`
        console.log(pdfPaymentMethod);
    }
    if(checkbox2.checked && document.getElementById('rewardAdvance').checked){
        paymentAmount = totalAmountTaxable;
        pdfPaymentMethod = `Advance(${totalAmountTaxable}).`;
        console.log(pdfPaymentMethod);
    }
    console.log(paymentAmount,total_amount, "okk then");
    $('.payment-mode').text(pdfPaymentMethod)
    let useRewardPoints = 0;
    let advance_pay = 0;
    let advacePayCheck = false;
    // const advancePay = checkbox2.checked;
    console.log(checkbox1.checked, "what the fuck");
    
    var totalWithProduct = $('#FTotal').val()
    $('.ftotal').text(totalWithProduct)
    var salon_id = localStorage.getItem("salon_id")
    var err = false
    if(!mobile || mobile.length !==10) {
        $('#userList').css('border-color', 'red')
        err = true
    }
    if(!name) {
        $('#cName').css('border-color', 'red')
        err = true
    }
    if(!paymode) {
        $('.mode').css('border-color', 'red')
        err = true
    }
    if(checkbox1.checked){
        useRewardPoints = $('#PointUsedAre').val()
        useRewardPoints = parseInt(useRewardPoints)
    }
    if(checkbox2.checked){
        advance_pay = advancePay - total_amount;
        let pdfadvance_pay = Number(advance_pay) + Number(buyingAdvanceAmound);
        console.log(advance_pay,"ok");
        advacePayCheck = true;
        $('.adWallet').text(pdfadvance_pay); 
    }
    else if(checkbox2.checked == false){
        advance_pay = advancePay;
        let pdfadvance_pay = Number(advance_pay) + Number(buyingAdvanceAmound);
        advacePayCheck = false;
        console.log(advance_pay,"ok");
        $('.adWallet').text(pdfadvance_pay)
    }
    if(checkbox2.checked && document.getElementById('rewardAdvance').value !== 'Advance Pay'){
        alert("Please select correct Payment Mode.");
        console.log(document.getElementById('rewardAdvance').value);
        err = true;
    }
    console.log(paymentAmount , totalAmountTaxable,"let's see");
    console.log(typeof(paymentAmount),typeof(totalAmountTaxable));
    console.log( !totalAmountTaxable == paymentAmount );
    if(totalAmountTaxable !== paymentAmount){
        alert("Netpayble Amount and total paid amount is not Matched!");
        err = true
    }
    if(err) {
        return
    }

    // reward poit calculation, service ids collection and also getting service stylist wise for each stylist

    var parentElement = document.getElementById("TBody");
    var elements = parentElement.querySelectorAll('[name="amt"]'); // Get all elements with name amt inside the parent
    var serviceElement = parentElement.querySelectorAll('[name="service_id"]'); //Get all elements with name service_id 
    var stylistElement = parentElement.querySelectorAll('[name="stylist_id"]'); // Get all elements with class stylist-data 
    var serviceValue = 0
    var service_ids = []
    var stylistData = []
    for (var i = 0; i < elements.length; i++) {
        serviceValue = parseFloat(elements[i].value) + serviceValue;
        if(serviceElement[i].value) {
            service_ids.push(serviceElement[i].value)
        }
        if(serviceElement[i].value && stylistElement[i].value && stylistElement[i].value != 0){
            stylistData.push({"service_id": serviceElement[i].value, "stylist_id" : stylistElement[i].value, 'service_amount': parseFloat(elements[i].value)})
        }
    }

    if(stylistData.length != service_ids.length) {
        alert('Please select stylist')
        err = true
    }
    if(err) {
        return
    }

    // start calculation for product purchased

    // reward poit calculation, service ids collection and also getting service stylist wise for each stylist

    var parentProductElement = document.getElementById("TBodyProduct");
    var pElements = parentProductElement.querySelectorAll('[name="amt"]'); // Get all elements with name amt inside the parent
    var productElement = parentProductElement.querySelectorAll('[name="product_id"]'); //Get all elements with name product_id 
    var stylistproductElement = parentProductElement.querySelectorAll('[name="stylist_id"]'); // Get all elements with class stylist-data 
    var productValue = 0
    var product_ids = []
    var stylistproductData = []
    for (var i = 0; i < pElements.length; i++) {
        productValue = parseFloat(pElements[i].value) + productValue;
        if(productElement[i].value) {
            product_ids.push(productElement[i].value)
        }
        if(productElement[i].value && stylistproductElement[i].value && stylistproductElement[i].value != 0){
            stylistproductData.push({"product_ids": productElement[i].value, "stylist_id" : stylistproductElement[i].value, 'product_amount': parseFloat(pElements[i].value)})
        }
    }
    if(serviceElement.length < 2 && productElement.length < 2){
        alert("Please add service or product!")
        err = true
    }
    if(stylistproductData.length != product_ids.length) {
        alert('Please select stylist')
        err = true
    }
    if(err) {
        return
    }

    //End product calculation



    // get stylist data with service value and all service done with a stylist
    var mergedStylistData = getMergedData(stylistData);
    var mergedStylistProductData = getMergedProductData(stylistproductData);
    // Ends here

    // Removing unwanted ui fro printing invoice
    $('.left-sidebar').remove()
    $('.topbar').remove()
    $('.container').removeAttr('style')
    
    const element = document.querySelector('.container');
    const inputBoxes = element.querySelectorAll('input');
    inputBoxes.forEach(function(inputBox) {
        inputBox.style.background = 'transparent';
        inputBox.style.border = 'none';
    });

    const spans = element.querySelectorAll('span');

    spans.forEach(function(span) {
        span.style.background = 'transparent';
        span.style.border = 'none';
    });

    const buttons = element.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
    const radios = element.querySelectorAll('.paymode');
    radios.forEach(function(radio) {
        radio.style.display = 'none';
    });
    const sytlists = element.querySelectorAll('.stylist');
    sytlists.forEach(function(stylist) {
        stylist.style.display = 'none';
    });
    const sytlistCols = element.querySelectorAll('.stylist-col');
    sytlistCols.forEach(function(col) {
        col.style.display = 'none';
    });
    const inputMargins = element.querySelectorAll('.mb-3');
    inputMargins.forEach(function(inputMargin) {
        inputMargin.style = 'margin-bottom: 0rem!important';
    });
    
    let RewardBalance = 0;
    let rewardBalancebackend = 0;
    $('#reward').remove()
    // Removing unwanted ui fro printing invoice ends here

    
    var productCost = productValue
    var discount = $('#discount').val()
    $('.discount').text(discount)
    discountValue = serviceValue * parseInt(discount)/100
    var full_pay_with_points = false
    if(useRewardPoints >= serviceValue - discountValue && service_ids.length > 0) {
        useRewardPoints = serviceValue - discountValue
        full_pay_with_points = true
    }
    console.log(advacePayCheck, "tree");
    if(advacePayCheck === false && happyHours.checked === false){
    let tatalServiceAfterDis = serviceValue - discountValue;
    tatalServiceAfterDis = tatalServiceAfterDis - Number(useRewardPoints);
    let calculatingRewardPoint = Math.round(tatalServiceAfterDis * 10/100)
    RewardBalance =  Number(points) - Number(useRewardPoints); 
     RewardBalance = Number(RewardBalance) + calculatingRewardPoint;
    console.log(RewardBalance);
    rewardBalancebackend = Math.round(RewardBalance);
    RewardBalance = Number(RewardBalance) + Number(buyingRewads);
    console.log(RewardBalance);
    RewardBalance = Math.round(RewardBalance)
    $('.rewardBalance').text(RewardBalance)
    }
    else if(advacePayCheck === true || happyHours.checked === true){
        RewardBalance =  Number(points);
        RewardBalance = Math.round(RewardBalance);
        rewardBalancebackend = Math.round(RewardBalance)
        $('.rewardBalance').text(RewardBalance); 
    }
    var totalGST = $('#FGST').val()
    $('.fgst').text(totalGST)
    $('.cgst').text($('#CGST').val())
    $('.sgst').text($('#SGST').val())
    var serviceAfterDiscount = serviceValue - discountValue
    rewardPoint = Math.round(serviceAfterDiscount * 10/100) // this line is calculating reward point for all service amount.
    // End reward poit calculation, service ids collection and also getting service stylist wise for each stylist
    var options = {
        image: { type: 'jpeg', quality: 0.98 },
        jsPDF: { unit: 'pt', format: 'a4' },
        margin: 0,
        html2canvas: { scale: 2 },
    };
    var services = $('#TBody').html()
    var products = $('#TBodyProduct').html()
    $('.render-items').append(services)
    $('.render-items').append(products)
    $('#inv-hid').removeAttr('style')
    $('#nextpage1').remove()
    $('#main-wrapper').remove()
    const printelement = document.querySelector('#inv-hid');

    html2pdf()
    .set(options)
    .from(printelement)
    .toPdf()
    .get('pdf')
    .then(pdfData => {
        // Create a FormData object
        const formData = new FormData();
        // const file = new File([pdfData], 'dummy.pdf', { type: 'application/pdf' });
        formData.append('pdf', pdfData.output('blob'), invoice+'-invoice.pdf');
        formData.append('salon_id', salon_id)
        formData.append('mobile', mobile);
        formData.append('invoice_no', invoice);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('point', rewardPoint);
        formData.append('service_id', JSON.stringify(service_ids))
        formData.append('total_amount', parseFloat(total_amount).toFixed(2))
        formData.append('stylist_data', JSON.stringify(mergedStylistData))
        formData.append('payment_mode', paymode)
        formData.append('use_point', parseFloat(useRewardPoints))
        formData.append('product_cost', parseFloat(productCost).toFixed(2))
        formData.append('service_cost', parseFloat(serviceValue).toFixed(2))
        formData.append('gst', parseFloat(totalGST).toFixed(2))
        formData.append('discount', discountValue.toFixed(2))
        formData.append('product_ids', JSON.stringify(product_ids))
        formData.append('product_data', JSON.stringify(mergedStylistProductData))
        formData.append('full_pay_with_points', full_pay_with_points)
        formData.append('discount_percent', discount)
        formData.append('advance_pay', parseFloat(advance_pay).toFixed(2))
        formData.append('rewardBalance', parseFloat(rewardBalancebackend))
	formData.append('varnya_mobile',varnya_mobile);
        document.getElementById('spinnerOverlay').style.display = 'flex';
        document.getElementById('windorel').style.display = 'block';
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        // Send the PDF data and phone number to the server via API request
        fetch('https://api.amapure.in/user/send-invoice', {
            method: 'POST',
            body: formData
        })
        .then(response => {
        // Handle the API response
        if (response.ok) {
            alert('PDF Send successful.');
            document.getElementById('spinnerOverlay').style.display = 'none';
           // window.location.reload()
        } else {
            alert('PDF upload failed');
        }
        })
        .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        });
    });
}

function getMergedData(data) {
    var mergedData = [];

    // Iterate over the data array
    for (var i = 0; i < data.length; i++) {
        var currentData = data[i];
        var found = false;

        // Check if the stylist ID already exists in mergedData
        for (var j = 0; j < mergedData.length; j++) {
            if (mergedData[j].stylist_id === currentData.stylist_id) {
            mergedData[j].service_ids.push(currentData.service_id);
            mergedData[j].service_amount += currentData.service_amount;
            found = true;
            break;
            }
        }

        // If the stylist ID doesn't exist, add it to mergedData
        if (!found) {
            mergedData.push({
                stylist_id: currentData.stylist_id,
                service_ids: [currentData.service_id],
                service_amount: currentData.service_amount
            });
        }
    }
    return mergedData;
}

function getMergedProductData(data) {
    var mergedData = [];

    // Iterate over the data array
    for (var i = 0; i < data.length; i++) {
        var currentData = data[i];
        var found = false;

        // Check if the stylist ID already exists in mergedData
        for (var j = 0; j < mergedData.length; j++) {
            if (mergedData[j].stylist_id === currentData.stylist_id) {
            mergedData[j].product_ids.push(currentData.product_ids);
            mergedData[j].product_amount += currentData.product_amount;
            found = true;
            break;
            }
        }

        // If the stylist ID doesn't exist, add it to mergedData
        if (!found) {
            mergedData.push({
                stylist_id: currentData.stylist_id,
                product_ids: [currentData.product_ids],
                product_amount: currentData.product_amount
            });
        }
    }
    return mergedData;
}

$(document).ready(function(){
    const API_URL = "https://api.amapure.in"
    var token = localStorage.getItem('auth')
    var salon_id = localStorage.getItem('salon_id')
    $.ajax({
        url: API_URL+'/user/get-invoice-no?salon_id='+salon_id,
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            $('#invoiceNumber').val(response.data)
            $('.invoice-id').text(response.data)
            if(salon_id == "66053fc6016afee3d6e33a08"){
            $('#bdaarAddress').html("BDAAR &nbsp;Solutions &nbsp;Private &nbsp;Limited. &nbsp;Shop &nbsp;no &nbsp;80, &nbsp;Spaze &nbsp;Corporate &nbsp;Park, &nbsp;Sector &nbsp;69, &nbsp;Gurgaon, &nbsp;Haryana &nbsp;122101.")
            }
            else if(salon_id ==  "67e8eb2a27319831446cf288"){
                $('#bdaarAddress').html("BDAAR &nbsp;Solutions &nbsp;Private &nbsp;Limited. &nbsp;Shop &nbsp;no &nbsp;11 & &nbsp;13, &nbsp;Eros &nbsp;city &nbsp;square, &nbsp;Rosewood &nbsp;City &nbsp;Rd, &nbsp;Sector &nbsp;49, &nbsp;Gurugram, &nbsp;Haryana &nbsp;122018")
            }
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    });

    $.ajax({
        url: API_URL+'/stylist/get-stylist?salon_id='+salon_id,
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function(response) {
            data = `<option value="0">Select stylist</option>`
            for(let i = 0; i < response.length; i++) {
                data += `<option value="${response[i]._id}">${response[i].name}</option>`;
            }
            $('.stylist-data').append(data)
        },
        error: function(xhr, status, error) {
            if(xhr.status == 403) {
                window.location.replace('login.php');
            }
        }
    });


    $(document).on('keyup', '.service', function() {
        searchService($(this).val(), $(this))
    })

    function searchService(value, e){
        const API_URL = "https://api.amapure.in"
        var token = localStorage.getItem('auth')
        // list of service here
        $.ajax({
            url: API_URL+'/admin/search-service/'+value,
            type: 'GET',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: function(response) {
                $('.list-group').empty()
                let data = ``;
                $('.list-group').removeAttr('style');
                for(let i = 0; i < response.length; i++) {
                    console.log(response[i])
                    data += `
                        <li class="list-group-item serviceListData" data-name="${response[i].service_name}" data-id="${response[i]._id}" data-price=${response[i].normal_price}>${response[i].service_name}</li>
                    `;
                }
                e.siblings('.list-group').append(data);
            },
            error: function(xhr, status, error) {
                if(xhr.status == 403) {
                    window.location.replace('login.php');
                }
            }
        });
    }


    $(document).on('click','.serviceListData', function(){
        $(this).parent().siblings('.service').val($(this).attr('data-name'))
        $(this).parent().siblings('.service').attr('value',$(this).attr('data-name'))
        var quantity = $(this).parent().parent().siblings('.quantity').find('.qty');
        quantity.val(1)
        $(this).parent().parent().siblings('.quantity').find('.service_id').val($(this).attr('data-id'));
        var price = $(this).parent().parent().siblings('.price').find('.rate');
        price.val($(this).attr('data-price'))
        price.trigger('change')
        $('.list-group').empty()
    })

    $(document).on('change','.stylist-data', function() {
        $(this).parent().siblings('.quantity').find('.stylist_id').val($(this).val());
    })



    $(document).on('keyup', '.products', function() {
        searchProducts($(this).val(), $(this))
    })

    function searchProducts(value, e){
        const API_URL = "https://api.amapure.in"
        var token = localStorage.getItem('auth')
        // list of service here
        $.ajax({
            url: API_URL+'/admin/search-products/'+value,
            type: 'GET',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: function(response) {
                $('.list-group').empty()
                let data = ``;
                $('.list-group').removeAttr('style');
                for(let i = 0; i < response.length; i++) {
                    console.log(response[i])
                    data += `
                        <li class="list-group-item productListData" data-value="${response[i].value}" data-name="${response[i].name}" data-id="${response[i]._id}" data-category="${response[i].category}" data-price=${response[i].price}>${response[i].name}</li>
                    `;
                }
                e.siblings('.list-group').append(data);
            },
            error: function(xhr, status, error) {
                if(xhr.status == 403) {
                    window.location.replace('login.php');
                }
            }
        });
    }

    $(document).on('click','.productListData', function(){
        $(this).parent().siblings('.products').val($(this).attr('data-name'))
        $(this).parent().siblings('.products').attr('value',$(this).attr('data-name'))
        var quantity = $(this).parent().parent().siblings('.quantity').find('.qty');
        quantity.val(1)
        $(this).parent().parent().siblings('.quantity').find('.product_id').val($(this).attr('data-id'));
        $(this).parent().parent().siblings('.quantity').find('.category').val($(this).attr('data-category'));
        var price = $(this).parent().parent().siblings('.price').find('.rate');
        price.val($(this).attr('data-price'))
        price.trigger('change')
        category = $(this).attr('data-category');

    console.log(category);
    if(category == 'rewards' || category == 'advance'){
        if(category == 'rewards'){
            buyingRewads += Number($(this).attr('data-value'))
        }
        else{
            buyingAdvanceAmound += Number($(this).attr('data-value'))
        }
    }
        console.log(category,"category");
        $('.list-group').empty()
    })

    $(document).on('click','#windorel', function(){
        window.location.reload()
    })



    // data list select option operations
    var input = document.getElementById("userList");

    input.addEventListener("change", function() {
        var selectedOption = getSelectedOption();
        
        if (selectedOption) {
            var selectedValue = selectedOption.value;
            var selectedName = selectedOption.getAttribute("data-name");
            var selectedEmail = selectedOption.getAttribute("data-email");
            var rewardPoint = selectedOption.getAttribute("data-point");
             advance = selectedOption.getAttribute("data-advance");
            if(selectedName) {
                $('#cName').val(selectedName)
            }
            if(selectedEmail) {
                $('#cEmail').val(selectedEmail)
            }

            advancePay = advance ? advance : 0
            points = rewardPoint ? rewardPoint : 0
            $('.rewPoint').text(`${points} Reward point's`)
            $('.advance').text(`${advancePay} Advance amount`)
            $('#check2').val(advancePay)
            $('#check2').attr('data-val',advancePay)
            $('#check1').val(points)
            $('#check1').attr('data-val', points)
        }
    });

    function getSelectedOption() {
        var value = input.value;
        var options = document.getElementById("browsers").getElementsByTagName("option");
      
        for (var i = 0; i < options.length; i++) {
          var option = options[i];
      
          if (option.value === value) {
            return option;
          }
        }
      
        return null;
    }
     // End data list select option operations

     function allpaymentBisque(){
        // Get all elements with class "mode"
const elements = document.querySelectorAll('.mode');

// Initialize a counter for elements with background color "bisque"
bisqueCount = 0

// Loop through each element and check its background color
elements.forEach(element => {
  const backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color');
  
  if (backgroundColor == 'rgb(255, 255, 255)') {
    bisqueCount++;
  }
});


     }
    //select cash or card payment option
    $(document).on('click','.mode', function(){
        allpaymentBisque();
        const inputElement = document.querySelector('.mode');
        const computedStyle = window.getComputedStyle(inputElement);
        const backgroundColor = computedStyle.getPropertyValue('background-color');
       let payAmtClsNam = $(this).val()
       console.log(payAmtClsNam);
    //    console.log($(this).css('background','bisque'));
       console.log($(this).prop('checked'));
       if($(this).prop('checked')){
        $(`.${payAmtClsNam}`).css('display','block');
        paymentModesNames += `${payAmtClsNam}, `;
       }
       else{
           $('.paymentAmount').val(0);
        $('.paymentAmountDiv').css('display','none');
        $('#pay-mode').val("");
        paymentModesNames = ''
        let checkboxes = document.getElementsByName("payment-mode");
        checkboxes.forEach(checkbox => {
            // Set the checked property to false
            checkbox.checked = false;
          });
        GetTotal()
       }
       console.log($('.rewPoint').text(), points)
        // $(this).css('background','bisque')
        console.log(`Number of elements with background bisque: ${bisqueCount}`);
        // $('.mode').css('background','transparent')
        $('#pay-mode').val(`${paymentModesNames}`) 
        
    })
    //select cash or card payment option ends

    //reward point add use or remove
    $('#check1').click(function(){
        var value = $(this).attr('data-val')
        if($(this).val() == 0) {
            $(this).val(value)
           
        } else {
            $(this).val(0)
        }
        Calc($(this))
    })

})


