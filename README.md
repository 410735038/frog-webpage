# frog-webpage
The project from USR.  
I update the first vertion at 2021/4/12.  
All resorce is in the "frog" folder.  
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
All of the resource is in the new folder called "frog_0419".  
This version I researched the responsive imgmap in the HTML and embedded the jquery imgmap in website.  
The resource is from [here](https://github.com/stowball/jQuery-rwdImageMaps).  

Learn a lot, Thanks a lot!!  

As you can see, the Homepage.html has a map, use jquery syntax above website I mentioned, we can hover at specific location and go to the next website.  
The most important thing is that the range of area will not leave the relative position of the origin image, that's amazing!!  


