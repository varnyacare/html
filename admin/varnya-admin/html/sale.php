<!DOCTYPE html>
<html dir="ltr" lang="en">
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
    <title>Matrix Admin Lite Free Versions Template by WrapPixel</title>
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
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->


    <!-- css for quick-sale -->
    <link rel="stylesheet" href="../dist/css/quick-sale-style.css">
    <!-- style for icon -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
  </head>

  <body>
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
      <div class="lds-ripple">
        <div class="lds-pos"></div>
        <div class="lds-pos"></div>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
      <!-- ============================================================== -->
      <!-- Topbar header - style you can find in pages.scss -->
      <!-- ============================================================== -->
      <?php include 'header.php'; ?>
      <!-- ============================================================== -->
      <!-- End Topbar header -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- End Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Page wrapper  -->
      <!-- ============================================================== -->
      <div class="page-wrapper">

      <div class="main-container">
        <div class="container" id="content">
      
            <div class="hero">
                
            <div class="search-section">
                <div class="search-section-part">
                <form class="search-bar">   
                 <input class="search-input" type="text" placeholder="Search By Name/Contact/Address/FileNo/Card Number (Atleast 3 Characters are required)">
                 <span class="user-name" ></span>
                   </form>
                   <ul class="users-list " style="display:none;" id="users-list">
                    <li class="user"></li>
                   
                   </ul>
                       
                    <button style="display:none;" class="btn-success text-white" id="new-user">Create New User</button>
                    
                    
                    </div>
                    
                    <div class="bill-date">
                        <p class="bill-date-text">Bill date</p>
                        <div class="bill-date-value"><?php echo date("d-m-Y"); ?></div>
                    </div>
          </div>
    <div class="user-container" style="display:none;">
      <i class="fa fa-times" aria-hidden="true" id="close-btn"></i>
      <h2 class="create-user-heading">Create New Uer</h2>
      <div class="form-data">
      <div class="info"><label class="name">Name : </label><input type="text" name="name" value="" id="name" placeholder="Enter Your Name" required></div>
      <div class="info"><label class="name">Email : </label><input type="email" name="email" value="" id="email" placeholder="Enter Your Email" required></div>
      <div class="info"><label class="name">Mobile : </label><input type="text" name="mobile" value="" id="mobile"  placeholder="Enter Your Mobile No."required></div>
      <div class="info"><label class="name">Location : </label><input type="text" name="location" value=""  placeholder="Enter Your Location"></div>
      <div class="info"><label class="name">City :</label> <input type="text" name="city" value="" placeholder="Enter Your City"></div>
      <div class="info"><label class="name">State :</label> <input type="text" name="state" value=""  placeholder="Enter Your State"></div>
      <div class="info"><label class="name">Description :</label> <input type="text" name="desc"  value="" placeholder="Tell us something !!"></div>
      </div>
      <div class="submit-btn btn btn-success text-white">Submit</div>
    

    </div>

                    
                    
               
               
                <div class="services-section" >
                    <div class="service-category">
                        <div class="select-service btn btn-success text-white" id="service">
                            <span class="service-btn-text">Add Services</span>
                            <i class="fa fa-plus plus-icon" aria-hidden="true" ></i>
                    </div>
                    <input type="text" placeholder="Search Service By Name" class="service-search" style="display:none;" id="service-search">
                    <ul class="service-items">
                        <li class="item">
                        <label class="customcheckbox mb-3">
                            <input type="checkbox" id="mainCheckbox" class="checkbox" autocomplete=off  vlaue=" "/>
                            <span class="checkmark"></span>
                          </label>
                        </li>
                    </ul>
                    </div>
                    <div class="service-category">
                        <div class="select-product btn btn-success text-white">
                            <span class="product-btn-text">Add Products</span>
                            <i class="fa fa-plus plus-icon" aria-hidden="true" ></i>
                            
                    </div>
                    <input type="text" placeholder="Search Product By Name" class="product-search" style="display:none;" id="product-search">
                    <ul class="product-items"> 
                        <li class="item">
                        <label class="customcheckbox mb-3 check">
                            <input type="checkbox" id="mainCheckbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <div class="quantity">
                            <i class="fa fa-chevron-up" aria-hidden="true" class="increase"></i>
                            <span class="quantity-value">0</span>
                            <i class="fa fa-chevron-down" aria-hidden="true" class="decrease"></i>
                            </div>
                    </ul>
                    </div>
                    <div class="service-category">
                        <div class="select-service btn btn-success text-white">
                            <span class="service-btn-text">Add Membership</span>
                            <i class="fa fa-plus plus-icon" aria-hidden="true" ></i>
                    </div>
                    <ul class="service-items">
                        <li class="item">
                            <span class="checkbox">
                                <i class="fa-solid fa-check check-icon"></i>
                            </span>
                            <span class="item-text">HTML & CSS</span>
                        </li>
                        
                    </ul>
                    </div>
                    <div class="service-category">
                        <div class="select-service btn btn-success text-white">
                            <span class="service-btn-text">Add Gifts</span>
                            <i class="fa fa-gift gift-icon" aria-hidden="true"></i>
                    </div>
                    <ul class="service-items">
                        <li class="item">
                            <span class="checkbox">
                                <i class="fa-solid fa-check check-icon"></i>
                            </span>
                            <span class="item-text">HTML & CSS</span>
                        </li>
                       
                    </ul>
                    </div>


                </div>
                <div class="reward-section">
                    <!-- <div class="reward-points">
                        <p class="reward-points-text text">Reward Points</p>
                        <div class="select-menu  ">
                            <div class="select-btn ">
                                <span class="sBtn-text">Select your option</span>
                                <i class="bx bx-chevron-down"></i>
                            </div>
                    
                            <ul class="options">
                                <li class="option">
                                    <span class="option-text">reward-1</span>
                                </li>
                                <li class="option">
                                    <span class="option-text">reward-2</span>
                                </li>
                                <li class="option">
                                    <span class="option-text">reward-3</span>
                                </li>
                                <li class="option">
                                    <span class="option-text">reward-4</span>
                                </li>
                                <li class="option">
                                    <span class="option-text">reward-5</span>
                                </li>
                            </ul>
                        </div>
                
                    </div> -->
                    
                    
                </div>
                <div class="service-group">
                <div class="service-header">
                    <div class="ex-charges fill-primary">
                        <p class="ex-charges text">Service Name</p>
                        
                    </div>
                    <div class="ex-charges fill-primary">
                        <p class="ex-charges text">Charges</p>
                        
                    </div>
                    <div class="discount fill-primary">
                        <p class="discount text">GST</p>
                    </div>
                    </div>
                    <div class="invoice-item-section"></div>
                    
                </div>
                    
                <div class="summary">
                    <div class="payment-mode">
                            <div class="payment-options">
                                <div class="cash payment">Cash</div>
                                <div class="bank-card payment">Card</div>
                                <div class="upi payment">UPI</div>
                            </div>
                            <div class="adjust-pay">
                                <p class="adjust-pay-text">Adjust Payments</p>
                                <input type="text" class="adjust-pay-value fill" placeholder="Adjust Payments">
                            </div>
                            <div class="coupon">
                                <input type="text" class="coupon-value fill" placeholder="Add Coupon">
                                <button class="btn btn-success text-white">Apply</button>
                            </div>
                        
                          <input type="text" name="" id="" placeholder="Enter Notes" class="notes">
                            
                    </div>
                    <div class="summary-detail">
                        <table>
                            <tr>
                                <td>Sub Total :</td>
                                <td><span class="subtotal"></span></td>
                            </tr>
                            <tr>
                                <td>Grand Total :</td>
                                <td><span class="gtotal"></span></td>
                            </tr>
                            <tr>
                                <td>Paying Now :</td>
                                <td></td>
                            </tr>
                            <tr>
                               
                                <td>Due Amount :</td>
                                <td></td>
                            </tr>

                        </table>
                    </div>
                </div>
            <div>
            </div>
            </div>
            <div class="footer-btn">
                <button class="btn btn-success text-white reset">Reset</button>
                <button class="btn btn-success text-white generate-bill">Generate Bill</button>
                <button class="btn btn-success text-white reset">Submit</button>
            </div>
         </div>  
       
     </div>
       
          <!-- ============================================================== -->
          <!-- Recent comment and chats -->
          <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== -->
        <footer class="footer text-center">
          All Rights Reserved by Matrix-admin. Designed and Developed by
          <a href="https://www.wrappixel.com">WrapPixel</a>.
        </footer>
        <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== -->
      </div>
      <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    
    
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
    <!-- <script src="../dist/js/pages/dashboards/dashboard1.js"></script> -->
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
    <script src="../dist/js/create-new-user.js"></script>
    <script src="../dist/js/checked.js"></script>
<style>
    .service-group {
    padding-left: 20px;
    padding-right: 20px;
}
    .service-header{
    font-weight:bold
}
    .service-header,.invoice-item {
    display: flex;
    justify-content: space-between;
    max-width: 700px;
}
.invoice-item {
    margin-bottom: 20px;
}
    </style>


  </body>
</html>
