<html lang="en">

<head>

    <?php include('../main/head2.php'); ?>
    <meta content="Demo page of the nestedSortable jQuery Plugin" name="description">
    <meta content="Manuele J Sarfatti" name="author">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" />
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="drag.css">
    <script src="script.js"></script>
    <script src="drag-drop2.js"></script>

    <script src="tree_1.js"></script>
    
    <script src="drag-drop.js"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- <script type="text/javascript" src="jquery.mjs.nestedSortable.js"></script> -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- file upload  -->
    
</head>

<body class="sidebar-icon-only">
    <div class="container-scroller">
        <?php include('../main/navbar2.php'); ?>
        <div class="container-fluid page-body-wrapper">
            <?php include('../main/sidebar2.php'); ?>
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin">
                            <div class="card" margin-top="50px;">
                                <div class="card-body">

                                    <div class="container">

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <div class="grid-main">
                                <?php include('section.php')?>
                                <div class="form-add-div">
                                    <?php include('form-add.php') ?>
                                </div>
                                <div>
                              

                            </div>
                        </div>
                    </div>


                    <?php include('../main/footer.php'); ?>
                </div>
                <!-- main-panel ends -->
            </div>
            <!-- page-body-wrapper ends -->
        </div>


</body>



</html>