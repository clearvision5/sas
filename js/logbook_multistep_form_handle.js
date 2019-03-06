 $(document).ready(function(){
/*
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


              if ($.trim($('#lessons-message-text').val()).length == 0) {

                  error_lessons = 'Please record lessons learned today';
                  $('#error_lessons').text(error_lessons);
                  $('#lessons-message-text').addClass('has-error');
              }else{

                error_lessons = '';
                $('#error_lessons').text(error_lessons);
                $('#lessons-message-text').removeClass('has-error');
              }

            
    });*/
            //week1 next button
      $('#btn_week1_details').click(function(){
              
           /*   var error_day_one = '';
             
              if ($.trim($('#tasks-message-text').val()).length == 0) {

                  error_day_one = 'Day one entries  required';
                    $('#error_day_one').text(error_day_one);
                    $('#tasks-message-text').addClass('has-error');
              }

                if (error_day_one != '') {
                 return false;
              }else{
*/
                 $('#list_week1_details').removeClass('active active_tab1');
                 $('#list_week1_details').removeAttr('href data-toggle');
                 $('#week1_details').removeClass('active');
                 $('#list_week1_details').addClass('inactive_tab1');
                 $('#list_week2_details').removeClass('inactive_tab1');
                 $('#list_week2_details').addClass('active_tab1 active');
                 $('#list_week2_details').attr('href','#week2_details');
                 $('#list_week2_details').attr('data-toggle','tab');
                 $('#week2_details').addClass('active in');
           
});
      //week2 previous button
    $('#previous_btn_week2_details').click(function(){
               $('#list_week2_details').removeClass('active active_tab1');
               $('#list_week2_details').removeAttr('href data-toggle');
               $('#week2_details').removeClass('active in');
               $('#list_week2_details').addClass('inactive_tab1');
               $('#list_week1_details').removeClass('inactive_tab1');
               $('#list_week1_details').addClass('active_tab1 active');
               $('#list_week1_details').attr('href','#week1_details');
               $('#list_week1_details').attr('data-toggle','tab');
               $('#week1_details').addClass('active in');
    });

         //week2 next button
       $('#btn_week2_details').click(function(){
            
              $('#list_week2_details').removeClass('active active_tab1');
                 $('#list_week2_details').removeAttr('href data-toggle');
                 $('#week2_details').removeClass('active');
                 $('#list_week2_details').addClass('inactive_tab1');
                 $('#list_week3_details').removeClass('inactive_tab1');
                 $('#list_week3_details').addClass('active_tab1 active');
                 $('#list_week3_details').attr('href','#week3_details');
                 $('#list_week3_details').attr('data-toggle','tab');
                 $('#week3_details').addClass('active in');

    });

              //week3 previous button
            $('#previous_btn_week3_details').click(function(){
               $('#list_week3_details').removeClass('active active_tab1');
               $('#list_week3_details').removeAttr('href data-toggle');
               $('#week3_details').removeClass('active in');
               $('#list_week3_details').addClass('inactive_tab1');
               $('#list_week2_details').removeClass('inactive_tab1');
               $('#list_week2_details').addClass('active_tab1 active');
               $('#list_week2_details').attr('href','#week2_details');
               $('#list_week2_details').attr('data-toggle','tab');
               $('#week2_details').addClass('active in');
    });
              //week3 next button
             $('#btn_week3_details').click(function(){
            
              $('#list_week3_details').removeClass('active active_tab1');
                 $('#list_week3_details').removeAttr('href data-toggle');
                 $('#week3_details').removeClass('active');
                 $('#list_week3_details').addClass('inactive_tab1');
                 $('#list_week4_details').removeClass('inactive_tab1');
                 $('#list_week4_details').addClass('active_tab1 active');
                 $('#list_week4_details').attr('href','#week4_details');
                 $('#list_week4_details').attr('data-toggle','tab');
                 $('#week4_details').addClass('active in');

    });

               //week4 previous button
            $('#previous_btn_week4_details').click(function(){
               $('#list_week4_details').removeClass('active active_tab1');
               $('#list_week4_details').removeAttr('href data-toggle');
               $('#week4_details').removeClass('active in');
               $('#list_week4_details').addClass('inactive_tab1');
               $('#list_week3_details').removeClass('inactive_tab1');
               $('#list_week3_details').addClass('active_tab1 active');
               $('#list_week3_details').attr('href','#week3_details');
               $('#list_week3_details').attr('data-toggle','tab');
               $('#week3_details').addClass('active in');
    });
               
               //week4 next button
              $('#btn_week4_details').click(function(){
            
              $('#list_week4_details').removeClass('active active_tab1');
                 $('#list_week4_details').removeAttr('href data-toggle');
                 $('#week4_details').removeClass('active');
                 $('#list_week4_details').addClass('inactive_tab1');
                 $('#list_week5_details').removeClass('inactive_tab1');
                 $('#list_week5_details').addClass('active_tab1 active');
                 $('#list_week5_details').attr('href','#week5_details');
                 $('#list_week5_details').attr('data-toggle','tab');
                 $('#week5_details').addClass('active in');

    });

             //week5 previous button
            $('#previous_btn_week5_details').click(function(){
               $('#list_week5_details').removeClass('active active_tab1');
               $('#list_week5_details').removeAttr('href data-toggle');
               $('#week5_details').removeClass('active in');
               $('#list_week5_details').addClass('inactive_tab1');
               $('#list_week4_details').removeClass('inactive_tab1');
               $('#list_week4_details').addClass('active_tab1 active');
               $('#list_week4_details').attr('href','#week4_details');
               $('#list_week4_details').attr('data-toggle','tab');
               $('#week4_details').addClass('active in');
    });


    
      //week5 next button
              $('#btn_week5_details').click(function(){
            
              $('#list_week5_details').removeClass('active active_tab1');
                 $('#list_week5_details').removeAttr('href data-toggle');
                 $('#week5_details').removeClass('active');
                 $('#list_week5_details').addClass('inactive_tab1');
                 $('#list_week6_details').removeClass('inactive_tab1');
                 $('#list_week6_details').addClass('active_tab1 active');
                 $('#list_week6_details').attr('href','#week6_details');
                 $('#list_week6_details').attr('data-toggle','tab');
                 $('#week6_details').addClass('active in');

    });

             //week6 previous button
            $('#previous_btn_week6_details').click(function(){
               $('#list_week6_details').removeClass('active active_tab1');
               $('#list_week6_details').removeAttr('href data-toggle');
               $('#week6_details').removeClass('active in');
               $('#list_week6_details').addClass('inactive_tab1');
               $('#list_week5_details').removeClass('inactive_tab1');
               $('#list_week5_details').addClass('active_tab1 active');
               $('#list_week5_details').attr('href','#week5_details');
               $('#list_week5_details').attr('data-toggle','tab');
               $('#week5_details').addClass('active in');
    });



      //week6 next button
              $('#btn_week6_details').click(function(){
            
              $('#list_week6_details').removeClass('active active_tab1');
                 $('#list_week6_details').removeAttr('href data-toggle');
                 $('#week6_details').removeClass('active');
                 $('#list_week6_details').addClass('inactive_tab1');
                 $('#list_week7_details').removeClass('inactive_tab1');
                 $('#list_week7_details').addClass('active_tab1 active');
                 $('#list_week7_details').attr('href','#week7_details');
                 $('#list_week7_details').attr('data-toggle','tab');
                 $('#week7_details').addClass('active in');

    });

             //week7 previous button
            $('#previous_btn_week7_details').click(function(){
               $('#list_week7_details').removeClass('active active_tab1');
               $('#list_week7_details').removeAttr('href data-toggle');
               $('#week7_details').removeClass('active in');
               $('#list_week7_details').addClass('inactive_tab1');
               $('#list_week6_details').removeClass('inactive_tab1');
               $('#list_week6_details').addClass('active_tab1 active');
               $('#list_week6_details').attr('href','#week6_details');
               $('#list_week6_details').attr('data-toggle','tab');
               $('#week6_details').addClass('active in');
    });


        //week7 next button
              $('#btn_week7_details').click(function(){
            
              $('#list_week7_details').removeClass('active active_tab1');
                 $('#list_week7_details').removeAttr('href data-toggle');
                 $('#week7_details').removeClass('active');
                 $('#list_week7_details').addClass('inactive_tab1');
                 $('#list_week8_details').removeClass('inactive_tab1');
                 $('#list_week8_details').addClass('active_tab1 active');
                 $('#list_week8_details').attr('href','#week8_details');
                 $('#list_week8_details').attr('data-toggle','tab');
                 $('#week8_details').addClass('active in');

    });

             //week8 previous button
            $('#previous_btn_week8_details').click(function(){
               $('#list_week8_details').removeClass('active active_tab1');
               $('#list_week8_details').removeAttr('href data-toggle');
               $('#week8_details').removeClass('active in');
               $('#list_week8_details').addClass('inactive_tab1');
               $('#list_week7_details').removeClass('inactive_tab1');
               $('#list_week7_details').addClass('active_tab1 active');
               $('#list_week7_details').attr('href','#week7_details');
               $('#list_week7_details').attr('data-toggle','tab');
               $('#week7_details').addClass('active in');
    });

  });

  