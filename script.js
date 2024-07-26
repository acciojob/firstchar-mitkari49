function firstChar(text) {
  // your code here
	for (let index = 0; index < text.length; index++) {
		if(text[index]!==' '){
			return text[index];
		}
		
		}
			return ' ';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
