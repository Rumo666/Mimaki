var maximise,target,nextSlide;



nextSlide = function (){
	var maximise =document.getElementsByClassName('acc-container').item().getElementsByClassName('acdc').item();

	if(maximise.style.height<='10px')
		maximise.style.height='200px';
	else
		maximise.style.height='10px';

};



