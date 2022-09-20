const infoTab = [

    {
    name: 'console.log',
    information: '... используется для вывода данных в консол.',
    syntaxis: 'console.log(message);',
},
{
    name: 'alert',
    information: '... метод выводит модальное окно с сообщением, и две кнопки, Ok и Cancel.',
    syntaxis: 'const message = "I am Ok!"; alert(message);',
},
{
    name: 'prompt',
    information: '... метод выводит модальное окно с полем ввода и кнопками: Ok и Cancel.',
    syntaxis: 'const yourMessage = prompt("Please, type your message"); console.log(yourMessage);',
},
{
    name: 'confirm',
    information: '... метод выводит модальное окно с сообщением, и две кнопки, Ok и Cancel.',
    syntaxis: 'const yourOrder = confirm("Please, confirm"); console.log(yourOrder);',
},
{
    name: 'Number(val)',
    information: '... функция используется для преобразования к числу.',
    syntaxis: 'const valueA = "10"; console.log(Number(valueA));',
    },
{
    name: 'Number.parseInt()',
    information: '... Метод парсит из строки целое число.',
    syntaxis: 'console.log(Number.parseInt("5px"));',
    },

{
    name: 'Number.parseFloat()',
    information: '... Метод Number.parseFloat() парсит из строки дробное число.',
    syntaxis: 'console.log(Number.parseFloat("12.46qwe79"));',
    },
    {
    name: 'toFixed()',
    information: '... метод отсекает до определенного знака после запятой.',
    syntaxis: 'console.log(0.1 + 0.32).toFixed(2));',
},
{
    name: 'Math.floor(num)',
    information: '... метод округляет в меньшую сторону.',
    syntaxis: 'console.log(Math.floor(1.7)); // 1',
},
{
    name: 'Math.ceil(num)',
    information: '... метод округляет в большую сторону.',
    syntaxis: 'console.log(Math.ceil(1.2)); // 2',
},
{
    name: 'Math.round(num)',
    information: '... метод округляет до ближайшего целого.',
    syntaxis: 'console.log(Math.round(1.5)); // 2',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'Math.max(num1, num2, ...)',
    information: '...метод возвращает наибольшее число из набора.',
    syntaxis: 'console.log(Math.max(20, 10, 50, 40)); // 50',
    },

{
    name: 'Math.min(num1, num2, ...)',
    information: '...метод возвращает наименьшее число из набора.',
    syntaxis: 'console.log(Math.min(20, 10, 50, 40)); // 10',
    },
    {
    name: 'Math.pow(base, exponent)',
    information: '... метод возведения в степень.',
    syntaxis: 'console.log(Math.pow(2, 4)); // 16',
},
{
    name: 'Math.random()',
    information: '... метод возвращает псевдослучайное число в диапазоне [0, 1).',
    syntaxis: 'console.log(Math.random())',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
{
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
    {
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'alert(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'prompt(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'cconfirm(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'NaN(x)',
    },
{
    name: 'rty',
    information: '... rrrrrrrrtion about this name and etc.',
    syntaxis: 'okkkkkk',
    },

{
    name: 'last',
    information: '... some information about this name and etc.',
    syntaxis: 'lasttttttttttt)',
    },
]


let htmlLine = "";
for (const key of infoTab) {
    htmlLine +=
        "<li>"
        + "<span>" + key.name + "</span>" + "<br>" + "<br>"
        + key.information + "<br>" + "<br>"
        + key.syntaxis
        + "</li>";

}
document.getElementById("container").innerHTML = htmlLine;


// let json = JSON.stringify(infoTab);











// let htmlString = "";
// for (let key in infoTab) {
//     htmlString += key;
//     htmlString += "<ul>";
//     for (let item in infoTab[key]) {
//         htmlString += "<li>" + infoTab[key][item] + "</li>";
//     }
//     htmlString += "</ul>";
// }

// document.getElementById("container").innerHTML = htmlString;



    // const infoTabName = infoTab.map(item => item.name);
    // console.log(infoTabName);

    // const infoTabInformation = infoTab.map(item => item.information);
    // console.log(infoTabInformation);

    // const infoTabSyntaxis = infoTab.map(item => item.syntaxis);
    // // console.log(infoTabSyntaxis);

    // const infoTabExample = infoTab.map(item => item.example);
    // // console.log(infoTabExample);




// const newLi = document.createElement("li");
// newLi.textContent = `${infoTabName}`;
// list.append(newLi);

//     const newBr = document.createElement('br');
//     const spanInfo = document.createElement('span');
//     const spanSynt = document.createElement('span');
//     spanInfo.classList.add('info');
//     spanSynt.classList.add('syntaxis');

//     const addedName = `${infoTabName}`;
//     const addedInformation = `${infoTabInformation}`;
//     const addedSyntaxis = `${infoTabSyntaxis}`;


//     list.append(newLi, newBr, newBr, spanInfo, newBr, spanSynt);



//     const nameOption = infoTab.map((infoTabName) =>
//         `<li>${infoTabName}<br><span class="info">${addedInformation}</span><br>
// <span class="syntaxis">${addedSyntaxis}</span></li>`).join('')

    
    

//     list.insertAdjacentElement('beforeEnd', newBr);


// const createUsersTable = (infoTab = []) => {
//   return infoTab
//     .map(({ name, information, syntaxis, example }, index) => {
//         return `
//         <li>${name}<br><br>${information}<br>${syntaxis}
//         <br>${example}</li>`
//     })
//     .join("");
// };





// for (const li of findAllLi) {
//     console.log(li);

//     const newBr = document.createElement('br');
//     const newBrMore = document.createElement('br');
//     const newSpan = document.createElement('span');
//     li.append(newBr, newBrMore, newSpan);
//     newSpan.classList.add('details');


//     const findSpan = document.querySelector('span');
    
//     const words = `${itemName}`;

//     const addNow = words.map((itemName) =>
//         `<li><span class="details">${itemName}</span></li>`).join('')
    
    
//     li.insertAdjacentElement('beforeEnd', newBr);
// }

// var lists = {
// "Cars":{"Ford":false,"Ferarri":false},
// "Names":{"John":true,"Harry":false},
// "Homework":{"Maths":true,"Science":false,"History":true,"English":true}
// }


