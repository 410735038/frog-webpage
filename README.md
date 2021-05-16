# frog-webpage
The project from USR.  
***
#2021/5/16
Hey! Here is forth version in 2021/5/16!  
This time we don't have any fancy stuff, but we describe our frogs more detail.  
We will have fourteen frogs in this project expectedly, so "maybe" we will have 14 frog pages.  
All detail frogs are put in frog_detail folder, but I only do 2 frogs now, all of frogs will be coming soon.
And the most important thing is that our website will grow up soon, so if we only use pure html,css,js in our project, it's not enough!  
So I will learn ReactJS now, to make our website more efficiently, more smoothly, make the best performance and use lowest resource, hope I can do that!  
I think this version have some little bugs, but don't mind it, I will make our website be "RWD Website" and repair the bugs ASAP.
***
#2021/5/3
The third version is coming in 2021/5/3!  
Because we will have a illustrated book in this project to promote frogs! So I create a new website, please check it in Frog_IB.html.  
The homepage.html and frog.html are updated too, I will design it continuously, I think we can do a fancy website before project ended!!  
And the most important thing, the tutorial I learned this time is from [here](https://www.youtube.com/watch?v=hv0rNxr1XXk&list=PLVcDoPkbpyX_PqeHxuJ2XO7ntgQumChu-&index=14), check it out!  
I have to say, Glassmorphism is an super amazing effect in promote some specific stuff!  
![](./frog_0503/frog/Frog_IB/img/frog.PNG)
***
#2021/4/19
I update the second vertion at 2021/4/19.  
All of the resource is in the new folder called "frog_0419".  
This version I researched the responsive imgmap in the HTML and embedded the jquery imgmap in website.  
The resource is from [here](https://github.com/stowball/jQuery-rwdImageMaps), and the License is also in the "frog_0419" folder.  

Learn a lot, Thanks a lot!!  

As you can see, the Homepage.html has a map, use jquery syntax above website I mentioned, we can hover at specific location and go to the next website.  
The most important thing is that the range of area will not leave the relative position of the origin image when we resize the web, that's amazing!!  

***

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



