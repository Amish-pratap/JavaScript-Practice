function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const moveCoin = () =>{
	const x=Math.floor(Math.random()*window.innerHeight);
	const y=Math.floor(Math.random()*window.innerWidth);
	coin.style.left =`${y}px`;
	coin.style.top=`${x}px`; 
};

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function (e) {
	if(e.key==='ArrowDown'){
		moveVertical(avatar,50);
	}else if(e.key==='ArrowUp'){
		moveVertical(avatar,-50);
	}else if(e.key==='ArrowRight'){
		const currTop=extractPos(avatar.style.left);
		moveHorizontal(avatar,50);
		avatar.style.transform = 'scale(1,1)';
	}else if(e.key==='ArrowLeft'){
		moveHorizontal(avatar,-50);
		avatar.style.transform = 'scale(-1,1)';
	}
	if(isTouching(avatar,coin)){
		moveCoin();
	}
	
})

 const moveVertical=(element,amount)=>{
	const currTop=extractPos(avatar.style.top);
	avatar.style.top =`${currTop+amount}px`;
 }

 const moveHorizontal = (element, amount)=>{
	const currTop=extractPos(avatar.style.left);
	avatar.style.left =`${currTop+amount}px`;
 }

const extractPos = (pos) => {
	if(!pos){
		return 0;
	}
	return parseInt(pos.slice(0, -2))
};


moveCoin();