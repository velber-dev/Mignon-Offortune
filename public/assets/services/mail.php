<?php
    if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['message'])) {
        $_POST['name'] = htmlspecialchars($_POST['name']);
        $_POST['phone'] = htmlspecialchars($_POST['phone']);
        $_POST['message'] = htmlspecialchars($_POST['message']);

        $message = "
        <html><body>
            <font size='4'>Имя и фамилия: <b>{$_POST['name']}</b></font><br />
            <font size='4'>Номер телефона: <b>{$_POST['phone']}</b></font><br />
            <font size='4'>Сообщение: <b>{$_POST['message']}</b></font>
        </html></body>
        ";

        mail('businessmignonoffortune@gmail.com', 'У вас новое сообщение! MIGNON OFFORTUNE', $message,  "From: mignonoffortune@gmail.com\r\n"
        ."Content-type: text/html; charset=utf-8\r\n"
        ."X-Mailer: PHP mail script");

        mail('loudaguelee@gmail.com', 'У вас новое сообщение! MIGNON OFFORTUNE', $message,  "From: mignonoffortune@gmail.com\r\n"
        ."Content-type: text/html; charset=utf-8\r\n"
        ."X-Mailer: PHP mail script");
    }
?>