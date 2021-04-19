# frog-webpage
The project from USR.  
I update the first vertion at 2021/4/12.  
Open the frog.html to see the webpage.  
```js
//Here is the animation in the article <p>
function showPrag(x,i){
	const storyprag  = document.querySelectorAll('.story-prag');
	console.log(i);
	for(j = 0; j < storyprag.length; j++){
		if(j == i){
			storyprag[j].style.display = "inline";
		}
		else{
			storyprag[j].style.display = "none";
		}
	}
}
```
I update the second vertion at 2021/4/19.  
This version I researched the responsive imgmap in the HTML and embedded the jquery imgmap in our website.  
The resource is from #here.
