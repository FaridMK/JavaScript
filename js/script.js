const findAllLi = document.querySelectorAll('li');
console.log(findAllLi);


const infoTab = [
{
    name: 'console.log',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
    example: 'const x = a + b; console.log(x)',
},
{
    name: 'alert',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
    example: 'const x = a + b; console.log(x)',
},
{
    name: 'prompt',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
    example: 'const x = a + b; console.log(x)',
},
{
    name: 'confirm',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
    example: 'const x = a + b; console.log(x)',
},
{
    name: 'NaN',
    information: '... some information about this name and etc.',
    syntaxis: 'console.log(x)',
    example: 'const x = a + b; console.log(x)',
},
]

const itemName = [];

for (const item of infoTab) {
    itemName.push(item.name);
}




for (const li of findAllLi) {
    console.log(li);
    const newBr = document.createElement('br');
    const newBrMore = document.createElement('br');
    const newSpan = document.createElement('span');
    li.append(newBr, newBrMore, newSpan);
    newSpan.classList.add('details');
    const findSpan = document.querySelector('span');
    
    const words = `${itemName}`;
    const addNow = words.map((itemName) =>
        `<li><span class="details">${itemName}</span></li>`).join('')
    
    
    li.insertAdjacentElement('beforeEnd', newBr);
}

