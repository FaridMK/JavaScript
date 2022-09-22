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
    name: 'toUpperCase()',
    information: '... метод возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку.',
    syntaxis: 'console.log(message.toUpperCase());',
},
{
    name: 'toLowerCase()',
    information: '... метод возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку.',
    syntaxis: 'console.log(message.toLowerCase());',
},
{
    name: 'indexOf()',
    information: '... метод возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.',
    syntaxis: 'console.log(message.indexOf("to"));',
    },
{
    name: 'includes()',
    information: '... метод проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае.',
    syntaxis: 'const itemName = "My car"; console.log(itemName.includes("ca")); // true',
    },

{
    name: 'endsWith()',
    information: '... метод позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.',
    syntaxis: 'const jsFileName = "script.js"; console.log(jsFileName.endsWith(".js")); // true',
    },
    {
    name: 'replace()',
    information: '... метод возвращает новую строку, в которой первое совпадение подстроки заменены на указанное значение.',
    syntaxis: 'const jsFileName = "script.js"; const minJsFileName = jsFileName.replace(".js", ".min.js"); console.log(minJsFileName); // "script.min.js"',
},
{
    name: 'replaceAll()',
    information: '... метод возвращает новую строку, в которой все совпадения подстроки заменены на указанное значение.',
    syntaxis: 'const cssFileNames = "styles.css, about.css, portfolio.css"; const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css"); console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"',
},
{
    name: 'slice()',
    information: '... метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.',
    syntaxis: 'const productName = "Repair droid"; console.log(productName.slice(0, 4)); // "Repa"',
},
{
    name: 'Тернарный оператор (?)',
    information: '... вычисляется условие. Если условие истинно, то есть приводится к true, вычисляется выражение после ?. Если условие ложно, то есть приводится к false, вычисляется выражение после :.',
    syntaxis: 'const age = 20; const type = age >= 18 ? "adult" : "child"; console.log(type); // "adult"',
},
{
    name: 'switch',
    information: '... область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать). Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство. ',
    syntaxis: 'let cost; const subscription = "pro"; switch (subscription) { case "free": cost = 0; break; case "pro": cost = 100;break; default: console.log("Invalid subscription type"); } console.log(cost); // 100',
    },
{
    name: 'while',
    information: '... цикл с предусловием — цикл, который выполняется пока истинно некоторое условие, указанное перед его началом. Это условие проверяется до выполнения тела цикла, поэтому тело может быть не выполнено ни разу, если условие с самого начала ложно..',
    syntaxis: 'let counter = 0; while (counter < 10) { console.log("counter: ", counter); counter += 1; }',
    },

{
    name: 'do...while',
    information: '... Цикл с постусловием - цикл, в котором условие проверяется после выполнения тела цикла. Отсюда следует, что тело всегда выполняется хотя бы один раз. Конструкция do...while создает цикл, который выполняет блок кода до тех пор, пока condition не вернёт false.',
    syntaxis: 'do { // statement } while (condition);',
    },
    {
    name: 'for',
    information: '... Цикл со счётчиком - цикл, в котором некоторая переменная изменяет своё значение от заданного начального до конечного значения с некоторым шагом и для каждого значения этой переменной тело цикла выполняется один раз.',
    syntaxis: 'for (initialization; condition; post-expression) { // statements }',
},
{
    name: 'break',
    information: '... с этим оператором прервать выполнение цикла можно в любой момент. Полностью прекращает выполнение цикла и передаёт управление на строку за его телом.',
    syntaxis: 'break;',
},
{
    name: 'continue',
    information: '... оператор прерывает не весь цикл, а только выполнение текущей итерации.',
    syntaxis: 'continue;',
},
{
    name: 'Массивы',
    information: '... структура данных для хранения и манипулирования коллекцией индексированных значений. Используeтся для хранения упорядоченных коллекций данных, например списка курортов, товаров, клиентов в отеле и т. п.',
    syntaxis: 'const cars = ["", "", ....]',
},
{
    name: 'for...of',
    information: '... конструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента.',
    syntaxis: 'for (const variable of iterable) { // тело цикла }',
    },
{
    name: 'split (delimiter)',
    information: '... метод превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.',
    syntaxis: 'const message = "JavaScript это интересно"; console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]',
    },

{
    name: 'join(delimiter)',
    information: '... метод массивов join(delimiter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter.',
    syntaxis: 'const words = ["JavaScript", "это", "интересно"]; console.log(words.join("-")); // "JavaScript-это-интересно"',
    },
    {
    name: 'push()',
    information: '... метод добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. Возвращает длину массива после добавления элементов',
    syntaxis: 'const numbers = []; numbers.push(1); console.log(numbers); // [1]',
},
{
    name: 'pop()',
    information: '... метод удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.',
    syntaxis: 'const numbers = [1, 2, 3, 4, 5]; console.log(numbers.pop()); //  5 /// console.log(numbers); // [1, 2, 3, 4]',
},
{
    name: 'slice()',
    information: '... метод возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.',
    syntaxis: 'slice(begin, end)',
},
{
    name: 'splice()',
    information: '... Метод для работы с массивоами, если нужно удалять, добавлять и заменить элементы в произвольном месте массива. ',
    syntaxis: 'Удаление: splice(position(индекс 1-го элемента для удаления), num(колиество удаляемых элементов)) /// Добавление: splice(position, 0, new_element_1, new_element_2, ...); /// Замена: splice(position (индекс 1-го элемента), num (количество удаляемых элементов), new_element_1, new_element_2, ...(аргументы, которые добавляются в массив))',
},
{
    name: 'concat()',
    information: '... Метод объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый',
    syntaxis: 'const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"]; const newClients = ["Monkong", "Singu"]; const allClientsWithOldFirst = oldClients.concat(newClients); console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]',
    },
{
    name: 'Функция',
    information: '... это подпрограмма, независимая часть кода, предназначенная для многократного выполнения конкретной задачи с разными начальными значениями. Функции позволяют структурировать большие программы, уменьшают повторение и изолируют код. Объявление функции (function declaration) начинается с ключевого слова function.',
    syntaxis: '// объявляем функцию nameFn /// function nameFn() { // тело функции // сonsole.log("Лог для вызова функции nameFn") }  /// вызываем функцию nameFn /// nameFn(); ',
    },

{
    name: 'Параметры',
    information: '... В круглых скобках после имени функции идут параметры - перечисление данных которые функция ожидает при вызове. Параметры это локальные переменные доступные только в теле функции. Они разделяются запятыми.',
    syntaxis: '// Объявление параметров x, y, z /// function multiply(x, y, z) { console.log(`Результат умножения равен ${x * y * z}`); }',
    },
    {
    name: 'Аргументы',
    information: '... При вызове функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.',
    syntaxis: '/// вызываем функцию с аргументами /// function nameFn(2, 3. 4); ',
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


