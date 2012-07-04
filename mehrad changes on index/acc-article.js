var maximise,target,nextSlide;



nextSlide = function (){
for(var i=0;i<3;i++){
	var maximise =document.getElementsByClassName('acc-container').item().getElementsByTagName('ul').item(i);
	if(maximise.style.height<='10px')
		maximise.style.height='200px';
	else
		maximise.style.height='10px';
}

};



