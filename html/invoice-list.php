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
    <title>Users</title>
    <!-- Favicon icon -->
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../assets/images/logo-icon.png"
    />
    <!-- Custom CSS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/extra-libs/multicheck/multicheck.css"
    />
    <link
      href="../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.css"
      rel="stylesheet"
    />
    <link href="../dist/css/style.min.css" rel="stylesheet" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
   <style>
      .spinner-container {
    position: relative;
  }

  .spinner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Ensure the spinner is above the table content */
  }

  .spinner {
    width: 100px;
    height: 100px;
    border: 10px solid #ccc;
    border-top-color: #0694bc; /* Change color as needed */
    border-radius: 50%;
    animation: spin 1s linear infinite; /* Animation properties */
  }

  /* Keyframes for the spinning animation */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
    </style>
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
        <!-- Sidebar scroll-->
      <!-- ============================================================== -->
      <!-- End Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Page wrapper  -->
      <!-- ============================================================== -->
      <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <div class="page-breadcrumb">
          <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
              <h4 class="page-title">Sales</h4>
              <div class="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
          <!-- ============================================================== -->
          <!-- Start Page Content -->
          <!-- ============================================================== -->

          <!-- Filter block section -->
        <div class="row">
            <div class="col-3">
                <span class="mdi mdi-book-multiple">Payment mode</span>
                <select class="form-select" id="payment-mode">
                    <option value="all">ALL</option>
                    <option value="card">CARD<i class="mdi mdi-cash-multiple"></i></option>
                    <option value="cash">CASH<i class="mdi mdi-credit-card"></i></option>
                    <option value="upi">UPI<i class="mdi-qrcode-scan"></i></option>
                    <option value="points">Rewards</option>
                </select>
            </div>
            <div class="col-3">
                <span class="mdi mdi-calendar-clock">From date</span>
                <input class="form-control" type="date" name="date" id="from-date">
            </div>
            <div class="col-3">
                <span class="mdi mdi-calendar-clock">To date</span>
                <input class="form-control" type="date" name="date" id="to-date">
            </div>
            <div class="col-3">
                <br>
                <button class="btn btn-success" type="button" id="filter">Filter</button>
            </div>
        </div>
        <br>
          <!-- Filter block section ends -->

          <!-- Car block section -->
          <div class="row">
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-book fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1" id="total-invoice">0</h5>
                <small class="font-light">Total Invoice</small>
                </div>
            </div>
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-currency-inr fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1" id="total-revenue">0</h5>
                <small class="font-light">Total Revenue</small>
                </div>
            </div>
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-currency-inr fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1" id="service-cost">0</h5>
                <small class="font-light">Service cost</small>
                </div>
            </div>
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-currency-inr fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1" id="discount">0</h5>
                <small class="font-light">Service Discount</small>
                </div>
            </div>
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-currency-inr fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1" id="total-without-gst">0</h5>
                <small class="font-light">Total without gst</small>
                </div>
            </div>
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-currency-inr fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1" id="total-gst">0</h5>
                <small class="font-light">Total gst</small>
                </div>
            </div>
            
            <!-- <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-account fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1">2540</h5>
                <small class="font-light">Total Users</small>
                </div>
            </div>
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-account fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1">2540</h5>
                <small class="font-light">Total Users</small>
                </div>
            </div>
            <div class="col-2">
                <div class="bg-dark p-10 text-white text-center">
                <i class="mdi mdi-account fs-3 mb-1 font-16"></i>
                <h5 class="mb-0 mt-1">2540</h5>
                <small class="font-light">Total Users</small>
                </div>
            </div> -->
          </div>
          <!-- Car block section ends -->
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                  <div class="table-responsive spinner-container">
                  <div class="spinner-overlay" id="spinnerOverlay">
                    <div class="spinner"></div>
                  </div>
                    <table
                      id="zero_config"
                      class="table table-striped table-bordered"
                    >
                      <thead>
                        <tr>
                            <th>Invoice Id</th>
                            <th>Customer</th>
                            <th>Invoice Date</th>
                            <th>Product cost</th>
                            <th>Service cost</th>
                            <th>Discount</th>
                            <th>GST</th>
                            <th>Total amount</th>
                            <th>Payment mode</th>
                            <th>Status</th>
                            <th>Download</th>
                        </tr>
                      </thead>
                      <tbody id="invoice-list">

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- End PAge Content -->
          <!-- ============================================================== -->
          <!-- ============================================================== -->
          <!-- Right sidebar -->
          <!-- ============================================================== -->
          <!-- .right-sidebar -->
          <!-- ============================================================== -->
          <!-- End Right sidebar -->
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
    <!-- Bootstrap tether Core JavaScript -->
    <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="../assets/extra-libs/sparkline/sparkline.js"></script>
    <!--Wave Effects -->
    <script src="../dist/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="../dist/js/sidebarmenu.js"></script>
    <!--Custom JavaScript -->
    <script src="../dist/js/custom.min.js"></script>
    <!-- this page js -->
    <script src="../assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
    <script src="../assets/extra-libs/multicheck/jquery.multicheck.js"></script>
    <script src="../assets/extra-libs/DataTables/datatables.min.js"></script>

    
    <!-- <script>
      /****************************************
       *       Basic Table                   *
       ****************************************/
      $("#zero_config").DataTable();
    </script> -->
    <script src="../dist/api/invoice-list.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js"></script>
  </body>
</html>
