 let UpperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz'
 let numbers = '0123456789'
 let special = '!@_$+#%&*'

 let total = UpperAlpha + lowerAlpha + numbers + special
 let charId = document.getElementById('charCount')
 
 function generatePassword() {

    let charCount = charId.value
    let password = ''

    password += UpperAlpha[Math.floor(Math.random() * UpperAlpha.length)]
    password += lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += special[Math.floor(Math.random() * special.length)]

    for(let i=0; i<(charCount-4); i++){
        let whichValue = Math.floor(Math.random() * total.length) ;
        let char = total[whichValue]
        password += char
    }
    
    document.getElementById('password').value = password
 }

const showValue = () => {
    const valueToShow = document.querySelector('#count');
    let charCount = charId.value
    valueToShow.innerHTML = ` ${charCount}` 
}

const copyText = () => {
    let textToCopy = document.getElementById('password').value;
    if(textToCopy){
        navigator.clipboard.writeText(textToCopy);
        document.getElementById('password').select()
    }else{
        alert("No Password Generated Yet!");
    }
}