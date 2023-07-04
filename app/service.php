<?php 
class ValidateEmpty{

	protected $errorsEmpty = [];

	function validate (array $request){
		
        if (!isset($request['phone']) || empty($request['phone'])) {
            $this->errorsEmpty[]['phone'] = 'Введите номер телефона';
        }

        if (!isset($request['name']) || empty($request['name'])) {
            $this->errorsEmpty[]['name'] = 'Введите Ваше имя';
        }

        return $this->errorsEmpty;
	}
}

class ValidateError{

	public $errorsError = [];

	function validateEror(array $request){
		$phoneRegEx = "/^([0-9])+$/";

        if (mb_strlen($request['name']) < 2) {
            $this->errorsError[]['name'] = 'Имя должно быть больше 2х символов';
        }

        if (!preg_match($phoneRegEx,$request['phone'])){
            $this->errorsError[]['phone'] = 'Номер телефона может содержать только цифры';
        }
        if(strlen($request['phone']) < 7){
            $this->errorsError[]['phone'] = 'Недостаточно цифр';
        }


        // if (strlen($request['email']) > 0) {
        //     if (!filter_var($request['email'], FILTER_VALIDATE_EMAIL)) {
        //         $this->errorsError[]['email'] = 'Неправильный формат email';
        //     }
        // }


        return $this->errorsError;
	}
}
?>