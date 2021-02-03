'use strict';
/*
 Создать объект с 3 свойствами(number, string, undefined), 1 метод
 Сериализовать JSON.stringify
 Вывести в консоль результат
 Десериализовать JSON.parse
 Посмотреть на результат
 */

const obj = {
  firstName: 'Vlad',
  hostname: 'facebook.com',
  link: 'https://google.com',
  getName() { },
  test: undefined,
};

/* JSON - JavaScript Object Notation */

const serializedObject = JSON.stringify(obj);
console.log(serializedObject);

const deserializedObject = JSON.parse(serializedObject);
console.log(deserializedObject);


const p = fetch('./assets/data.json')
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
