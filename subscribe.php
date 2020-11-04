<?php
    $email = $_POST['email'];
    $message = "Contact form from:\n $email \n";
    $recipient = "info@onostarmedia.com.ng";
    $subject = "Subscription form";
    $mailheader ="From: $email \r \n";
    mail($recipient, $subject, $message, $mailheader);
    or die ("Error!");
    echo "<!DOCTYPE html>
    <html lang='e'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Subscription successful! - Temix empire</title>
        <style>
            *{
                margin:0;
                padding:0;
            }
            body{
                position:relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background:rgb(32, 2, 32);
            }
            .contact_background{
                position:absolute;
                width:100%;
                height:100vh;
                top:0;
                left:0;
            }
            .contact_background img{
                width:100%;
                height:100%;
            }
            .contact_background:after{
                content:'';
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100vh;
                background:rgba(32, 2, 32,.9);
            }
            #daily_deals_success{
                position:absolute;
                top:20vh;
                background:purple;
                color:#fff;
                box-shadow: 2px 2px 2px #fff;
                text-align:center;
                padding:20px;
                animation:1s zoomOut 1;
                font-size:1.2rem;
            }
            @keyframes zoomOut{
                0%{
                    opacity:0;
                    transform:scale(0);
                }
                100%{
                    opacity:1;
                    transform:scale(1);
                }
            }

            #daily_deals_success button{
                padding:5px;
                margin-top:10px;
                transition:.5s all;
            }
            #daily_deals_success button a{
                padding:10px;
                text-decoration:none;
                transition:.5s all;
            }
            #daily_deals_success button:hover{
                background:rgba(32, 2, 32, .8);
            }
            #daily_deals_success button a:hover{
                color:#fff;
            }
        </style>
    </head>
    <body>
        <div class='contact_background'>
            <img src='images/contact2.jpg' alt='temix empire contact'>
        </div>
        <div id='daily_deals_success'>
            <p>Thanks for joining our community! <br>
            Look out for daily tips and tricks.</p>
            <button><a href='index.html'>Ok</a></button>
        </div>
    </body>
    </html>";
?>