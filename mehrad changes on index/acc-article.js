var maximise,target,nextslide;


maximise = document.getElementById('ass');
target =   document.getElementById('ss');

nextslide = function (){

	target.style.height='200px;'

};


maximise.onclick=function (){
	nextslide();
};


