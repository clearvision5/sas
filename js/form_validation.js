  $(document).ready(function(){

    $('#btn_week1_details').click(function(){
              
              var error_day_one = '';
             
              if ($.trim($('#tasks-message-text').val()).length == 0) {

                  error_day_one = 'Day one entries  required';
                    $('#error_day_one').text(error_day_one);
                    $('#tasks-message-text').addClass('has-error');
              }

});

     $('#submit_tasks').click(function(){

               var error_tasks = '';
              var error_lessons = '';
              

              if ($.trim($('#tasks-message-text').val()).length == 0) {
                    
                    error_tasks = 'Please record tasks performed today';
                    $('#error_tasks').text(error_tasks);
                    $('#tasks-message-text').addClass('has-error');
              }else{

          
                  error_tasks = '';
                  $('#error_tasks').text(error_tasks);
                  $('#tasks-message-text').removeClass('has-error');

                }

              }

              if ($.trim($('#lessons-message-text').val()).length == 0) {

                  error_lessons = 'Please record lessons learned today';
                  $('#error_lessons').text(error_lessons);
                  $('#lessons-message-text').addClass('has-error');
              }else{

                error_lessons = '';
                $('#error_lessons').text(error_lessons);
                $('#lessons-message-text').removeClass('has-error');
              }

              if (error_task != '' || error_lessons != '' || error_day_one != '') {
                 return false;
              }else{

                 $('#list_week1_details').removeClass('active active_tab1');
                 $('#list_week1_details').removeAttr('href data-toggle');
                 $('#week1_details').removeClass('active');
                 $('#list_week1_details').addClass('inactive_tab1');
                 $('#list_week2_details').removeClass('inactive_tab1');
                 $('#list_week2_details').addClass('active_tab1 active');
                 $('#list_week2_details').attr('href','#personal_details');
                 $('#list_week2_details').attr('data-toggle','tab');
                 $('#personal_details').addClass('active in');
              }
    });

    $('#previous_btn_personal_details').click(function(){
               $('#list_personal_details').removeClass('active active_tab1');
               $('#list_personal_details').removeAttr('href data-toggle');
               $('#personal_details').removeClass('active in');
               $('#list_personal_details').addClass('inactive_tab1');
               $('#list_login_details').removeClass('inactive_tab1');
               $('#list_login_details').addClass('active_tab1 active');
               $('#list_login_details').attr('href','#login_details');
               $('#list_login_details').attr('data-toggle','tab');
               $('#login_details').addClass('active in');
    });

    $('#btn_personal_details').click(function(){
              
              var error_first_name = '';
              var error_last_name = '';
              if ($.trim($('#first_name').val()).length == 0) {
                error_first_name = 'First Name is required';
                $('#error_first_name').text(error_first_name);
                $('#first_name').addClass('has-error');
              }else{

                error_first_name = '';
                $('#error_first_name').text(error_first_name);
                $("#first_name").removeClass('has-error');
              }

              if ($.trim($('#last_name').val()).length == 0) {
                      
                      error_last_name = 'Last Name is required';
                      $('#error_last_name').text(error_last_name);
                      $('#last_name').addClass('has-error');

              }else{

                  error_last_name = '';
                  $('#error_last_name').text(error_last_name);
                  $('#last_name').removeClass('has-error');


              }

              if (error_first_name != '' || error_last_name != '') {
                  return false;
              }else{

                 $('#list_personal_details').removeClass('active active_tab1');
                 $('#list_personal_details').removeAttr('href data-toggle');
                 $('#personal_details').removeClass('active');
                 $('#list_personal_details').addClass('inactive_tab1');
                 $('#list_contact_details').removeClass('inactive_tab1');
                 $('#list_contact_details').addClass('active_tab1 active');
                 $('#list_contact_details').attr('href', '#contact_details');
                 $('#list_contact_details').attr('data-toggle','tab');
                 $('#contact_details').addClass('active in');
              }
    });

    $('#previous_btn_contact_details').click(function(){
            
            $('#list_contact_details').removeClass('active active_tab1');
            $('#list_contact_details').removeAttr('href data-toggle');
            $('#contact_details').removeClass('active in');
            $('#list_contact_details').addClass('inactive_tab1');
            $('#list_personal_details').removeClass('inactive_tab1');
            $('#list_personal_details').addClass('active_tab1 active');
            $('#list_personal_details').attr('href','#personal_details');
            $('#list_personal_details').attr('data-toggle', 'tab');
            $('#personal_details').addClass('active in');
    });

    $('#btn_contact_details').click(function(){
            
            var error_address = '';
            var error_mobile_no = '';
            var mobile_validation = /^\d{10}$/;
            if ($.trim($('#address').val()).length == 0) {

              error_address = 'Address is required';
              $('#error_address').text(error_address);
              $('#address').addClass('has-error');
            }else{

              error_address = '';
              $('#error_address').text(error_address);
              $('#address').removeClass('has-error');
            }

            if ($.trim($('#mobile_no').val()).length == 0) {

              error_mobile_no = 'Mobile Number is required';
              $('#error_mobile_no').text(error_mobile_no);
              $('#mobile_no').addClass('has-error');

            }else{

              if (!mobile_validation.test($('#mobile_no').val())) {

                error_mobile_no = 'Invalid Mobile Number';
                $('#error_mobile_no').text(error_mobile_no);
                $('#mobile_no').addClass('has-error');
              }else{

                error_mobile_no = '';
                $('#error_mobile_no').text(error_mobile_no);
                $('#mobile_no').removeClass('has-error');

              }

            }

            if (error_address != '' || error_mobile_no != '') {

              return false;
            }else{

              $('#register_form').submit();
            }
    });

 });