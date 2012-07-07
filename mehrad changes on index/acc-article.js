var maximise,target,nextSlide;
window.onload=function(){
var liBtns= document.getElementsByClassName('acc-container').item(0).getElementsByTagName('h3');
		 maximise =document.getElementsByClassName('acc-container').item(0).getElementsByTagName('ul');


nextSlide =function (n){
	if(maximise.item(n).style.height<='10px')
		maximise.item(n).style.height='200px';
	else
		maximise.item(n).style.height='10px';
};
for(var i=0;i<=2;i++){
		(function(j){
			liBtns.item(j).onclick=function(){
				nextSlide(j);
			}
		})(i);
	}
}