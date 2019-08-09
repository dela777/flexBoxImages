const panels = document.querySelectorAll(".panel");

function openPanel(){
	this.classList.add('open');
}

function closePanel(){
	this.classList.remove('open');
}
function toggleActive(e){
if(e.propertyName.includes('flex-grow')){
	this.classList.toggle('open-active');
	console.log(e);

}
}
panels.forEach(panel => panel.addEventListener('mouseover',openPanel));
panels.forEach(panel => panel.addEventListener('mouseleave',closePanel));

panels.forEach(panel => panel.addEventListener('transitionstart',toggleActive));