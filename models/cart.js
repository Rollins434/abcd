module.exports= function Cart(initItems){
 this.items =initItems;
 this.totalQty=0;
 this.totalPrice=0;
 this.add = function(item,id){
var storedItem = this.items[id];

if(!storedItem){
	storedItem=this.items[id]={item:item,qty:0,price:0};
 }
}
};