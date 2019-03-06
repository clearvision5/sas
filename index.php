<!DOCTYPE html>
<html lang="en-us">
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width,initial-scale=1.0">
     <meta name="author" content="John Lukondo">

     <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
      
    
     <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

      <script type="text/javascript" src="js/jquery.dataTables.min.js"></script>

     <script type="text/javascript" src="js/dataTables.bootstrap.min.js"></script>

     
     <link rel="stylesheet" type="text/css" href="css/dataTables.bootstrap.min.css">

       <script type="text/javascript" src="js/bootstrap.min.js"></script>
 
  
  <title>logbook modal</title>

<!-- multistep form style
 -->
  <style type="text/css">
    .box{
      width: 800px;
      margin: 0 auto;
    }

    .active_tab1{
      background-color: #fff;
      color: #333;
      font-weight: 600;
    }

    .inactive_tab1{
      background-color: #f5f5f5;
      color: #333;
      cursor: not-allowed;
    }

  .has-error{
    border-color: #cc0000;
    background-color: #ffff99;
  }



      /*navbar style */

      .navbar-default .navbar-collapse, 
      .navbar-default .navbar-form {
    border-color: #0c7fcf;
}


.navbar-default {
    background-color: #0c7fcf;
    border-color: #0c7fcf;
    
}

.navbar-default .navbar-brand {
    color: #f1f1f1;
}

.navbar-default .navbar-brand:hover {
    color: #f1f1f1;
    
}
.navbar-default .navbar-nav > li > a {
    color: #f1f1f1;
}


.navbar-default .navbar-collapse  {
    color: #f1f1f1;
}
    


  </style>

</head>
<body>
  
  <br />
  <br />
<!--Navbar-->
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><h4 data-toggle="tooltip" title="IFM Student Assistant System">IFM SAS</h4>
          </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#">Home <span class="sr-only">(current)</span></a></li>
        <li><a href="#"></a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Informations <span class="caret"></span></a>
          <ul class="dropdown-menu">

            <li><a href="#">Timetable</a></li>
            <li><a href="#">Almanac</a></li>
            <li><a href="#">Announcements</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Queries</a></li>
            <li role="separator" class="divider"></li>
            

            <li><a href="">Logbook</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Notifications</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settigs</a></li>
            <li><a href="#">Message</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<br />
  <br />
  <div class="container">
<!--sidenav-->
    


<!--multi step form-->

 <script type='text/javascript'>
   /*$.get('logbook_week2_accordion.php',function(response){ 
    $('#week2').html(response);*/ 

// script for loading weekly logbook
 $(document).ready(function(){
    $( "#week1" ).load( "logbook_weeks/logbook_week1_accordion.php" );
    $( "#week2" ).load( "logbook_weeks/logbook_week2_accordion.php" );
    $( "#week3" ).load( "logbook_weeks/logbook_week3_accordion.php" );
    $( "#week4" ).load( "logbook_weeks/logbook_week4_accordion.php" );
    $( "#week5" ).load( "logbook_weeks/logbook_week5_accordion.php" );
    $( "#week6" ).load( "logbook_weeks/logbook_week6_accordion.php" );
    $( "#week7" ).load( "logbook_weeks/logbook_week7_accordion.php" );
    $( "#week8" ).load( "logbook_weeks/logbook_week8_accordion.php" );
   });
  
  </script>
<img src="images/ifm.jpg" alt="IFM logo" style="float: left;"> <h3>Student Logbook</h3>
<form method="post" id="logbook_form">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a href="#" class="nav-link active_tab1" style="border:1px solid #ccc" id="list_week1_details">
            Week 1
            
          </a>
        </li>
        
        <li class="nav-item">
          <a href="#" class="nav-link inactive_tab1" style="border:1px solid #ccc" id="list_week2_details">
            Week 2
            
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link inactive_tab1" style="border:1px solid #ccc" id="list_week3_details">
            week 3
            
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link inactive_tab1" style="border:1px solid #ccc" id="list_week4_details">
            week 4
            
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link inactive_tab1" style="border:1px solid #ccc" id="list_week5_details">
            Week 5
            
          </a>
        </li>
        
        <li class="nav-item">
          <a href="#" class="nav-link inactive_tab1" style="border:1px solid #ccc" id="list_week6_details">
            Week 6
            
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link inactive_tab1" style="border:1px solid #ccc" id="list_week7_details">
            week 7
            
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link inactive_tab1" style="border:1px solid #ccc" id="list_week8_details">
            week 8
            
          </a>
        </li>

      </ul>

      <div class="tab-content" style="margin-top: 16px;">

        <!--first week tab-->
        <div class="tab-pane active" id="week1_details">
          <div class="panel panel-default">
            <div class="panel-heading">
              First Week  Entries
            </div>
            <div class="panel-body">
                <!--first week-->
                <div id="week1"></div>
              

              <br />
              <br />
              <div align="center">
                <button type="button" name="btn_week1_details" id="btn_week1_details" class="btn btn-primary btn-lg">Next</button>
              </div>
            </div>
          </div>
        </div>

           <!--second week tab-->
        <div class="tab-pane fade" id="week2_details">
          <div class="panel panel-default">
            <div class="panel-heading">
              Second Week Entries
            </div>

           
            <div class="panel-body">
              
              <!--Second week-->
               <div id="week2"></div>
                
              <br />

              <div align="center">
                <button type="button" name="previous_btn_week2_details" id="previous_btn_week2_details" class="btn btn-default btn-lg">Previous</button>
            
                <button type="button" name="btn_week2_details" id="btn_week2_details" class="btn btn-primary btn-lg">Next</button>
              </div>
            </div>
          </div>
        </div>

        
        <!--Third week tab-->
        <div class="tab-pane fade" id="week3_details">
          <div class="panel panel-default">
            <div class="panel-heading">
             Third Week Entries
            </div>
            <div class="panel-body">
             <!--week3-->
             <div id="week3"></div>
             <?php //include 'logbook_week3_accordion.php'; ?>

              
              <br />

              <div align="center">
                <button type="button" name="previous_btn_week3_details" id="previous_btn_week3_details" class="btn btn-default btn-lg">Previous</button>
              
                <button type="button" name="btn_week3_details" id="btn_week3_details" class="btn btn-primary btn-lg">Next</button>
              </div>
      </div>
       </div>
          </div>

            <!--Fourth week tab-->
           <div class="tab-pane fade" id="week4_details">
          <div class="panel panel-default">
            <div class="panel-heading">
              Fourth Week Entries
            </div>

           
            <div class="panel-body">
              
              <!--fourth week-->
               <div id="week4"></div>
                
              <br />

              <div align="center">
                <button type="button" name="previous_btn_week4_details" id="previous_btn_week4_details" class="btn btn-default btn-lg">Previous</button>
            
                <button type="button" name="btn_week4_details" id="btn_week4_details" class="btn btn-primary btn-lg">Next</button>
              </div>
            </div>
          </div>
        </div>

        <!--Fifth week tab-->
        <div class="tab-pane fade" id="week5_details">
          <div class="panel panel-default">
            <div class="panel-heading">
              Fifth Week Entries
            </div>

           
            <div class="panel-body">
              
              <!--fifth week-->
               <div id="week5"></div>
                
              <br />

              <div align="center">
                <button type="button" name="previous_btn_week5_details" id="previous_btn_week5_details" class="btn btn-default btn-lg">Previous</button>
            
                <button type="button" name="btn_week5_details" id="btn_week5_details" class="btn btn-primary btn-lg">Next</button>
              </div>
            </div>
          </div>
        </div>
        
         <!--Sixth week-->
        <div class="tab-pane fade" id="week6_details">
          <div class="panel panel-default">
            <div class="panel-heading">
              Sixth Week Entries
            </div>

           
            <div class="panel-body">
              
              <!--Sixth week-->
               <div id="week6"></div>
                
              <br />

              <div align="center">
                <button type="button" name="previous_btn_week6_details" id="previous_btn_week6_details" class="btn btn-default btn-lg">Previous</button>
            
                <button type="button" name="btn_week6_details" id="btn_week6_details" class="btn btn-primary btn-lg">Next</button>
              </div>
            </div>
          </div>
        </div>

         <!--Seventh week-->
          <div class="tab-pane fade" id="week7_details">
          <div class="panel panel-default">
            <div class="panel-heading">
              Seventh Week Entries
            </div>

           
            <div class="panel-body">
              
              <!--Seventh week-->
               <div id="week7"></div>
                
              <br />

              <div align="center">
                <button type="button" name="previous_btn_week7_details" id="previous_btn_week7_details" class="btn btn-default btn-lg">Previous</button>
            
                <button type="button" name="btn_week7_details" id="btn_week7_details" class="btn btn-primary btn-lg">Next</button>
              </div>
            </div>
          </div>
        </div>
            
             <!--Eighth week-->
         <div class="tab-pane fade" id="week8_details">
          <div class="panel panel-default">
            <div class="panel-heading">
              Eighth Week Entries
            </div>

           
            <div class="panel-body">
              
              <!--Eighth week-->
               <div id="week8"></div>
                
              <br />

              <div align="center">
                <button type="button" name="previous_btn_week8_details" id="previous_btn_week8_details" class="btn btn-default btn-lg">Previous</button>
            
                <button type="button" name="btn_week8_details" id="btn_week8_details" class="btn btn-primary btn-lg">Next</button>
              </div>
            </div>
          </div>
        </div>
      
    </form>


    <!-- multistep form script code -->
<script src="js/logbook_multistep_form_handle.js"></script>


</div>

<footer>
  <hr>
  <p>&copy; <?php echo date('Y'); ?>  <span title="IFM Student Assistant System" style="font-size: 18px;">SAS</span></p>
</footer>
</body>
</html>










