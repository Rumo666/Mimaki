var maximise,target,nextSlide;
var target =document.getElementsByClassName('acc-container').item().getElementsByTagName('h3');



nextSlide =function (){

	 maximise =document.getElementsByClassName('acc-container').item().getElementsByTagName('ul').item(j);
	if(maximise.style.height<='10px')
		maximise.style.height='200px';
	else
		maximise.style.height='10px';


};
for(var i=0;i<3;i++){
		(function(j){
			target.item(j).onclick=function(){
				nextSlide(j);
			}
		})(i);
	}


