const addItemInput = document.querySelector('#addItem');
const itemsUl= document.querySelector('#itemList');

addItemInput.addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        if(!this.value)return;
        const newTextItem=this.value;
        const newItem = document.createElement('li');
        newItem.innerText=newTextItem;
        itemsUl.appendChild(newItem); 
        this.value='';
    }
})