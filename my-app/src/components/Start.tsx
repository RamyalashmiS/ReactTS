// let nme="fsdiuaa";
// export default nme;

export default function Start(){
let chocolates:(string|number)[]=["Dairy Milk",10,"KitKat",20,"5Star","Munch"];

let icecreams:Array<string|number>=["Vanilla","Strawberry","Chocolate"];

let currentDate:Date=new Date();

return(
    <>
    <div>I love {chocolates[0]}</div>
    <div>Today's date is {currentDate.toLocaleDateString()}</div>
    </>
)
}