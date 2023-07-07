<?php
require("../app/service.php");

$validateEmpty = new ValidateEmpty(); 
$validateErrors = new ValidateError();
if (isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    if (!empty($_POST)){

        header('Content-Type: application/json');

        // проверяем поля на пустоту
        $errorsEmpty = $validateEmpty->validate($_POST);
        if (empty($errorsEmpty)){


            // проверяем поля на корректность
            $errorsError = $validateErrors->validateEror($_POST);
            if(empty($errorsError)){
                $message = [
                    'phone' => $_POST['phone'], //Телефон
                    'name' => $_POST['name'], //ФИО
                    'comment' => $_POST['comment'],
                    'status' => $_POST['status'],
                    'car-model' => $_POST['car-model'],
                ];
                //ОТПРАВКА НА ПОЧТУ
                $emails = file(__DIR__ . '../email.txt');
                $emails = array_map('trim', $emails);
                
                
                function AsField($name, $parameter)
                {
                    if(!isset($_POST[$parameter])) return '';
                    $value = $_POST[$parameter];
                    return "$name: $value\r\n";
                }
                if(!empty($_POST['car-model'])){
                    $message = AsField("Имя", "name").AsField("Номер телефона", "phone").AsField("Комментарий", "comment").AsField("Причина отправки заявки", "status").AsField("Марка авто", "car-model");
                }else{
                    $message = AsField("Имя", "name").AsField("Номер телефона", "phone").AsField("Комментарий", "comment").AsField("Причина отправки заявки", "status");
                }
                
                        
                $server = $_SERVER['HTTP_HOST'];
                $ip = $_SERVER['REMOTE_ADDR'];
                
                $subject = "Заявка с сайта: $server";
                
                $headers = "MIME-Version: 1.0\r\n";
                $headers.= "Content-type: text/html; charset=UTF-8\r\n";
                $headers.= "From: $server <informer@$server>\r\n";
                $headers.= "Reply-to: Reply to Name <reply@$server>\r\n";
                        
                $message .="\r\nВремя заявки:".date("m.d.Y H:i:s")." \r\nIP адрес клиента: $ip";
                
                $result = mail(implode(',', $emails), $subject, $message, $headers);
                if ($result)
                {
                   http_response_code(201);
                
                    echo json_encode([ 
                        'success' => true
                    ]);
                    exit();
                } else {
                    http_response_code(422);
                    $data_json = json_encode([
                        'success' => false,
                        'errors' => $textSendStatus
                    ]);
                    echo $data_json;
                    exit();
                }
            }else{
                http_response_code(422);
                $data_json = json_encode([
                    'success' => false,
                    'errors' => $errorsError
                ]);
                echo $data_json;
                exit();    
            }
        }else{

            http_response_code(422);

            $data_json = json_encode([
                'success' => false,
                'errors' => $errorsEmpty
            ]);
            echo $data_json;

            exit();
        }
    }
}

?>