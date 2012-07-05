var maximise,target,nextSlide;
var target =document.getElementsByClassName('acc-container').item().getElementsByTagName('h3').item();



	target.onclick =function (){
for(var i=0;i<3;i++){
	 maximise =document.getElementsByClassName('acc-container').item().getElementsByTagName('ul').item(i);
	if(maximise.style.height<='10px')
		maximise.style.height='200px';
	else
		maximise.style.height='10px';
}

};



