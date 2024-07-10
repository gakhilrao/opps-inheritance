import Hardik from "./Hardik";

class Axar extends Hardik{

    constructor (){
            super();
            console.log('Inside Axar constructor.');
    }

    battingStyle = () =>{
        console.log('Left Handed batsman');
    };

    bowlingStyle =()=>{
        console.log('Left Arm Orthodox spinner');
    };

    battingPosition =()=>{
        console.log('Number 6');
    };
}

export default Axar;