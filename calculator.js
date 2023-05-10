let string="";
let buttons = document.querySelectorAll('.buttons');

Array.from(buttons).forEach((button)=>{
	button.addEventListener('click',(item)=>{	
		if(item.target.innerHTML == '='){
			
			if (string.startsWith('sin')) {
				const degreeValue = string.substring(4, string.length - 1);
				const radians = (degreeValue * Math.PI) / 180;
				string = Math.sin(radians);
				return document.querySelector('input').value = string;
			}
			  
			else if (string.startsWith('cos')) {
				const degreeValue = string.substring(4, string.length - 1);
				const radians = (degreeValue * Math.PI) / 180;
				string = Math.cos(radians);
				return document.querySelector('input').value = string;
			}

			else if (string.startsWith('tan')) {
				const degreeValue = string.substring(4, string.length - 1);
				const radians = (degreeValue * Math.PI) / 180;
				string = Math.tan(radians);
				return document.querySelector('input').value = string;
			}
			  
			  else {
				string = eval(string);
				return document.querySelector('input').value = string;
			  }
			  
}

		if(item.target.innerHTML == 'C'){
			string = ""
			document.querySelector('input').value=string;
		}

		else{
		console.log(item.target)
		string = string + item.target.innerHTML;
		document.querySelector('input').value = string
	    }
    })
})