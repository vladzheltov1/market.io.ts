"use strict";
exports.__esModule = true;
exports.FormErrors = exports.ServerUtils = void 0;
exports.ServerUtils = {
    JsonConvert: function (json) {
        return (JSON.parse(JSON.stringify(json)));
    }
};
exports.FormErrors = [
    "Одно из полей пустое!",
    "Пароль не может содержать менее 8 символов!",
    "Такого пользователя не существует!",
    "Неправильный пароль!",
    "Такой пользователь уже существует!",
    "Пароли не совпадают!",
    "Ошибка сервера. Попробуйте ещё раз.",
    "Всё хорошо!",
    "Не удалось подключиться к базе данных!"
];
