<!doctype html>
<html lang="en">
  <head>
  
  <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="keywords"
      content="wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, Matrix lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, Matrix admin lite design, Matrix admin lite dashboard bootstrap 5 dashboard template"
    />
    <meta
      name="description"
      content="Matrix Admin Lite Free Version is powerful and clean admin dashboard template, inpired from Bootstrap Framework"
    />
    <meta name="robots" content="noindex,nofollow" />
    <title>Invoice</title>
    <!-- Favicon icon -->
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../assets/images/logo-icon.png"
    />
    <!-- Custom CSS -->
    <link href="../assets/libs/flot/css/float-chart.css" rel="stylesheet" />
    <!-- Custom CSS -->
    <link href="../dist/css/style.min.css" rel="stylesheet" />
  
  
    <!-- For Bootstrap-->
    
    <!-- CSS For Print Format -->
    <link rel="stylesheet" media="print" href="invoiceprint.css">
    
    <!-- CSS For Invoice -->
    <link rel="stylesheet"  href="invoice.css">

    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.6.2.slim.js" integrity="sha256-OflJKW8Z8amEUuCaflBZJ4GOg4+JnNh9JdVfoV+6biw=" crossorigin="anonymous"></script>
    <style>
    .table-bordered td,
      .table-bordered th {
        border: 1px solid #ddd;
        padding: 10px;
        word-break: break-all;
      }

      
      .h4-14 h4 {
        font-size: 12px;
        margin-top: 0;
        margin-bottom: 5px;
      }
      .img {
        margin-left: "auto";
        margin-top: "auto";
        height: 30px;
      }
      
      .hm-p p {
        text-align: left;
        padding: 1px;
        padding: 5px 4px;
      }
     
      .table-b td,
      .table-b th {
        border: 1px solid #ddd;
      }
      
      .hm-p td,
      .hm-p th {
        padding: 3px 0px;
      }
      .cropped {
        float: right;
        margin-bottom: 20px;
        height: 100px; /* height of container */
        overflow: hidden;
      }
      .cropped img {
        width: 400px;
        margin: 8px 0px 0px 80px;
      }
      .main-pd-wrapper {
        box-shadow: 0 0 10px #ddd;
        background-color: #fff;
        border-radius: 10px;
        padding: 15px;
      }
      .table-bordered td,
      .table-bordered th {
        border: 1px solid #ddd;
        padding: 10px;
        font-size: 14px;
      }
    </style>


</head>
  <body>


   <!-- here starting section to test -->
    <div id="adv-hid" style="display: none">
      <section class="main-pd-wrapper invoice-print" style="width: 800px; margin: auto">
        <div style="display: table-header-group">
          <h4 style="text-align: center; margin: 0">
            <b>ADVANCE RECEIPT</b>
          </h4>

          <table style="width: 100%; table-layout: fixed">
            <tr>
              <td
                style="border-left: 1px solid #ddd; border-right: 1px solid #ddd"
              >
                <div
                  style="
                    text-align: center;
                    margin: auto;
                    line-height: 1.5;
                    font-size: 14px;
                    color: #4a4a4a;
                  "
                >
                  <img src="../assets/images/logo-text.png"></img> 
                  <p style="font-weight: bold">
                    Mobile :
                    <a href="tel:018001236477" style="color: #00bb07"
                      >+91-9667917771</a
                    >
                  </p>
                  <p style="font-weight: bold">
                    Email : hello@varnya.care
                  </p>
                </div>
              </td>
              <td
                align="right"
                style="
                  text-align: right;
                  padding-left: 50px;
                  line-height: 1.5;
                  color: #323232;
                "
              >
                <div>
                  <h4 style="margin-top: 5px; margin-bottom: 5px">
                    Bill to
                  </h4>
                  <p>NAME :- <b class="customerName"></b></p>
                  <p>MOBILE :- <b class="customermobile"></b></p>
                  <p>Receipt No. :- <b class="advance-id"></b></p> 
                  <p>Date :- <b class="RCPTdate"></b></p> 
                  <!-- <p style="font-size: 14px">
                    Aakriti Rathore<br />
                    Mobile:
                    <a href="tel:01241234568" style="color: #00bb07"
                      >0124-1234568</a
                    >
                  </p> -->
                </div>
              </td>
            </tr>
          </table>
        </div>

        


        <table class="hm-p table-bordered" style="width: 90%; margin: 30px !important;">
          <tr>
            <th style="width: 400px">
              <p>Payment Mode:</p>
            </th>
            <td style="width: 400px; border-right: none">
              <p class="payment-mode">&nbsp;</p>
            </td>
            <td colspan="5" style="border-left: none"></td>
          </tr>
          <tr style="background: #fcbd02">
            <th>Total Payable amount</th>
            <td style="width: 70px; text-align: left; border-right: none">
              <b class="AdvanceAmount"></b>
            </td>
            <td colspan="5" style="border-left: none"></td>
            <input type="hidden" id="pay-mode">
          </tr>
        </table>

       
        <table class="hm-p table-bordered" style="width: 90%; margin: 30px !important;">
          <tr>
            <th style="vertical-align: top">Advance Wallet</th>
            <td style="vertical-align: top; color: #000">
              <b class="walletReward"></b>
            </td>
          </tr>
      </table>
      <table style="width: 100%" cellspacing="0" cellspadding="0" border="0">
          <tr>
            <td>
              <p>
                This is computer generated Receipt.
              </p>
            </td>
            <!-- <td>
              <h4 style="margin: 0; text-align: right">
                Not a Deerika Plus+ member yet?<br />
                You could have saved 5%
              </h4>
            </td> -->
          </tr>
        </table>
      </section>
    </div>

    
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
      <?php include 'header.php'; ?>
      <div id="nextpage2" class="container" style="width: 1050px; margin-left: 322px">
        <div class="card">
            <div class="card-header text-center">
              <h4>ADVANCE</h4>
            </div>
            <div class="card-header">
            <button type="button" class="btn "><a href="invoice.php">Back</a></button>
            </div>
            <div class="card-body" style="border-color: red; outline: thick solid #080908; outline-width: 1px">

                <div class="row">
                    <div class="col-6">
                        <div class="input-group mb-3">
                            <span style="width:20%" class="input-group-text" >Customer</span>
                            <input id="caName" type="text" class="form-control" placeholder="Customer"  >
                        </div>
            
                        <div class="input-group form-outline mb-3" id="navbar-search-autocomplete">
                            <span class="input-group-text" >Number</span>
                            <input id="userList" list="browsers" type="search" class="form-control search-input" placeholder="Number"  required>
                            <datalist id="browsers">
                              
                            </datalist>
                        </div>
            
                        <div class="input-group mb-3">
                            <span class="input-group-text" >Email</span>
                            <input id="caEmail" type="text" class="form-control" placeholder="Email (Optional)"  >
                        </div>
                        <div id="advance" class="form-check">
                          <input class="form-check-input" type="checkbox" id="checkAdvance" name="advance-pay" data-val="0" style="display:none" value="0" disabled/>
                          <label class="form-check-label advance">0 Advance amount</label>
                        </div>
                        
                    </div>
                    <div class="col-6">
                      
                        <div class="input-group mb-3">
                            <span class="input-group-text" >AD. No</span>
                            <input id="advanceNumber" type="text" class="form-control" placeholder="Number"  disabled>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" >Date</span>
                            <input type="text" value="" id="dateInput" class="form-control" placeholder="Date" disabled />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" >Amount</span>
                            <input type="Number" value="" class="form-control" id="advanceAmount" placeholder="0" />
                        </div>
                    </div>
                </div>

                  


                  <div class="row">
                    <div class="col-4">
                      <div class="row paymode">
                        <div class="col-3">
                          <span class="mdi mdi-cash-multiple">&nbsp;Cash</span>
                          <input type="radio" class="form-control mode" name="payment-mode" value="cash">
                        </div>
                        <div class="col-3">
                          <span class="mdi mdi-credit-card">&nbsp;Card</span>
                          <input type="radio" class="form-control mode" name="payment-mode" value="card">
                        </div>
                        <div class="col-3">
                          <span class="mdi mdi-qrcode-scan">&nbsp;UPI</span>
                          <input type="radio" class="form-control mode" name="payment-mode" value="upi">
                        </div>
                      </div>
                      <br>
                      <div class="row cash" style="display:none;">
                        <div class="col-6">
                        <input type="text" class="form-control mode" name="payment-mode" value="0" placeholder="Cash amount">
                        </div>
                      </div>
                      <div class="row card" style="display:none;">
                        <div class="col-6">
                        <input type="text" class="form-control mode" name="payment-mode" value="0" placeholder="Card amount">
                        </div>
                      </div>
                      <div class="row upi" style="display:none;">
                        <div class="col-6">
                        <input type="text" class="form-control mode" name="payment-mode" value="0" placeholder="Upi amount">
                        </div>
                      </div>
                      <div class="row reward" style="display:none;">
                        <div class="col-6">
                        <input type="text" class="form-control mode rewardAdvanceNone" name="payment-mode" value="0" placeholder="Reward point">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <button type="button" class="btn btn-primary" onclick="generateRCPTAndSend()">Add Payment</button>
                        </div>
                      </div>
                      </div>
                      <div class="row" style="margin-top:30px !important;">
                        <div class="col-3">
                            <span class="mdi mdi-calendar-clock">From date</span>
                            <input class="form-control" type="date" name="date" id="adfrom-date">
                        </div>
                        <div class="col-3">
                          <span class="mdi mdi-calendar-clock">To date</span>
                          <input class="form-control" type="date" name="date" id="adto-date">
                        </div>
                        <div class="col-3">
                          <br>
                          <button class="btn btn-success" type="button" id="filterAdvance">Filter</button>
                        </div>
                      </div>
                      <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                  <div class="table-responsive">
                    <table
                      id="zero_config"
                      class="table table-striped table-bordered"
                    >
                      <thead>
                        <tr>
                            <th>advance Id</th>
                            <th>Date</th>
                            <th>Mobile No</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Download</th>
                        </tr>
                      </thead>
                      <tbody id="advance-list">

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
                </div>
             </div>
             
        </div>
      </div>
    </div>







   
    



    <!-- Bootstrap Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
    
    <script src="../assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
    <script src="../assets/extra-libs/multicheck/jquery.multicheck.js"></script>

    <!-- Bootstrap tether Core JavaScript -->
    <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="../assets/extra-libs/sparkline/sparkline.js"></script>
    <!--Wave Effects -->
    <script src="../dist/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="../dist/js/sidebarmenu.js"></script>
    <!--Custom JavaScript -->
    <script src="../dist/js/custom.min.js"></script>
    <!--This page JavaScript -->
    <!-- Charts js Files -->
    
    <script src="../assets/libs/flot/excanvas.js"></script>
    <script src="../assets/libs/flot/jquery.flot.js"></script>
    <script src="../assets/libs/flot/jquery.flot.pie.js"></script>
    <script src="../assets/libs/flot/jquery.flot.time.js"></script>
    <script src="../assets/libs/flot/jquery.flot.stack.js"></script>
    <script src="../assets/libs/flot/jquery.flot.crosshair.js"></script>
    <script src="../assets/libs/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
    <script src="../dist/js/pages/chart/chart-page-init.js"></script>
    
    <!-- quick-sale js -->
    <script src="../dist/js/dropdown.js"></script>
    <script src="../dist/js/products.js"></script>
    <script src="../dist/js/services.js"></script>
    <script src="../dist/js/search-user.js"></script>
      <!-- For Invoice  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script src="advance.js"></script>
  </body>
</html>
