var quotes = ['Calm down, you will get an A on your next test.', 'Keep persevering', 'A little fun will never hurt!', 'Take a break.', 'Why don\'t you go outside?', 'IMPOSSIBRU!', 'I\'m just a glitch in this program... dont mess with me', 'Yes I\'m not a gamer, as shown in my username', 'C', 'Just throwing it out there, I\'m pretty sure I have absolute pitch.', 'Want some food? here:', 'CCCCCC', 'AROOOOOOOOOOOOOOOO!', 'Bacon lead Bacon\'s rebellion!', 'Shay led Shay\'s rebellion', 'Unfortunately Whiskey did not lead the Whiskey rebellion.', 'I WANT AN A+!', 'I was up til two in the morning trying to research Obama\'s last name.', 'I was up all night trying to figure out what year the panic of 1893 started.', 'my hair is around 4 inches long as of day 60 of quarantine.', '---', 'gaming is fun', 'aaaaaaaaaa'];
var generatedquotes = [];

var generatedchars = 0;
var encryptedchars = 0;
var generated = 0;
var encrypted = 0;
var custom = 0;

var optioncounter = 0;
var statcounter = 0;
var historycounter = 0;
var aboutcounter = 0;

for (var a = 0; a < 6; a++){
    var setup = document.createElement('div');
    setup.className = 'container';
    setup.innerHTML = ''
    document.body.appendChild(setup);
    document.getElementsByClassName('container')[a].style.display = 'none';
}

var optionarr = ['Dark mode ➝', 'Edit/delete quotes ➝', 'Show generated quote history ➝', 'User stats ➝', 'Show source code ➝', 'About this page ➝']


for (var b = 0; b < 6; b++){
    var arrow = document.createElement('p');
    arrow.className = 'optionarrow'
    arrow.innerHTML = optionarr[b];
    document.getElementsByClassName('container')[b].appendChild(arrow);
}

function getRandomQuote(){
    document.getElementById('quote').innerHTML = quotes[Math.floor((Math.random() * quotes.length) + 1) - 1];
    generated += 1;
    generatedchars += document.getElementById('quote').innerHTML.length;
    generatedquotes.push(document.getElementById('quote').innerHTML);
}

function addQuote(){
    var addingQuote = prompt("Enter quote to add here - click OK to submit or click CANCEL to dismiss.");
    if (addingQuote != ''){
        quotes.push(addingQuote);
        //alert(quotes);
        alert('Custom quote' + " '" + addingQuote + "' " + 'was added to the list.');
        custom +=1;
    }
}

function encrypt(){
    var toEncrypt = document.getElementById('quote').innerHTML;
    var toEncryptArray = toEncrypt.split(' ');
    
    var newEncryptArray = [];
    var newString = '';
    //alert(toEncryptArray);

    var posneg = prompt("Shift alphabet forward or backward? Enter '+' to shift forward and '-' to shift backwards.")
    if (posneg = '+'){
        var num = prompt("Enter the value of shifting. (You are shifting in a positive direction)")
        for (var i = 0; i < toEncryptArray.length; i++){
            var newWords = '';
            for(var j = 0; j < toEncryptArray[i].length; j++){
                //var testingvar = 'a';
                //var test2 = 'A';
                //alert(testingvar.toLowerCase() === test2);
                
                if(toEncryptArray[i].charAt(j).toLowerCase() === toEncryptArray[i].charAt(j)){
                    //alert('abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/');
                    var char = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/'
                    var n = char.indexOf(toEncryptArray[i].charAt(j));
                    var total = (Number(n) + Number(num) + 1)
                    var pos = (total % char.length) - 1;                   
                    newWords+=(char.charAt(pos));

                }else{
                    //alert('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/')
                    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/'
                    var n = char.indexOf(toEncryptArray[i].charAt(j));
                    var total = (Number(n) + Number(num) + 1)
                    var pos = (total % char.length) - 1;
                    newWords+=(char.charAt(pos));
                }
            //alert(newWords);
            }

        var newStringModified = newWords + " ";
        //alert(newStringModified);
        newString += newStringModified;        
        }
    }
    document.getElementById('quote').innerHTML = newString;
    encrypted += 1;
    encryptedchars += document.getElementById('quote').innerHTML.length;
    
    if (posneg = '-'){
        var num = prompt("Enter the value of shifting. (You are shifting in a negative direction)")

    }else{
        alert('Sorry, I could not recognize that.')
    }
}

function showOptions(){
    optioncounter++;
    if (optioncounter % 2 === 1){
        for (var a = 0; a < 6; a++){
            document.getElementsByClassName('container')[a].style.display = 'block';
            document.getElementById('optiondown').innerHTML = '⏷';
        }      
    }else{
        for (var a = 0; a < 6; a++){
            document.getElementsByClassName('container')[a].style.display = 'none';
            document.getElementById('optiondown').innerHTML = '⏵';
        }        
    }
}

function showHistory(){
    var subcontain = document.createElement('div')
    subcontain.id = 'subcontain1';
    subcontain.innerHTML = ''
    document.getElementsByClassName('container')[2].appendChild(subcontain);
    historycounter++;
    if (historycounter % 2 === 1){
        for (var d = 0; d < generatedquotes.length; d++){
            var content = document.createElement('div');
            content.className = 'content';
            content.innerHTML = Number(d) + 1 + ". " + generatedquotes[d];
            document.getElementById('subcontain1').appendChild(content);
        }
    }else if (historycounter % 2 === 0){
        document.getElementById('subcontain1').remove();
        document.getElementById('subcontain1').remove();
    }
}

function showStats(){
    //empty container created above
    //updating stats
    var subcontain = document.createElement('div')
    subcontain.id = 'subcontain2';
    subcontain.innerHTML = ''
    document.getElementsByClassName('container')[3].appendChild(subcontain);
    var statstorage = ['Total generated chars: ' + generatedchars, 'Total encrypted chars: ' + encryptedchars, 'Total generated quotes: ' + generated, 'Total encrypted quotes: ' + encrypted, 'Custom quotes added: ' + custom];
    statcounter++;
    //alert(statstorage);
    if (statcounter % 2 === 1){
        for (var c = 0; c < 5; c++){
            var content = document.createElement('div');
            content.className = 'content';
            content.innerHTML = statstorage[c];
            document.getElementById('subcontain2').appendChild(content);
        }    
    }else if (statcounter % 2 === 0){
        document.getElementById('subcontain2').remove();
        document.getElementById('subcontain2').remove();    
    }
}

function showAbout(){
    aboutcounter++;
    var subcontain = document.createElement('div')
    subcontain.id = 'subcontain3';
    subcontain.innerHTML = ''
    document.getElementsByClassName('container')[5].appendChild(subcontain);
    if (aboutcounter % 2 === 1){
        var content = document.createElement('div');
        content.className = 'content';
        content.innerHTML = 'This quote generator by me is more than a quote generator - it has more functions such as an encryptor, custom quote input, deleting/editing of quotes, and dark mode. I can confidently say that this has been one of the hardest projects to code so far. With 200+ lines of JavaScript and close to 300 lines of CSS, it also has been one of my most extensive. All the elements besides the title banner, quote, generator buttons, and footer are made using DOM. I\'ve used new techniques of JavaScript and CSS that I have never used before, like the gradient. Hope you like it!';
        document.getElementById('subcontain3').appendChild(content);
    }else if (aboutcounter % 2 === 0){
        document.getElementById('subcontain3').remove();
        document.getElementById('subcontain3').remove(); 
    }
}

document.getElementById('btn1').addEventListener('click', encrypt);
document.getElementById('btn2').addEventListener('click', getRandomQuote);
document.getElementById('btn3').addEventListener('click', addQuote);
document.getElementsByClassName('optionbanner')[0].addEventListener('click', showOptions);
document.getElementsByClassName('optionarrow')[2].addEventListener('click', showHistory);
document.getElementsByClassName('optionarrow')[3].addEventListener('click', showStats);
document.getElementsByClassName('optionarrow')[5].addEventListener('click', showAbout);

