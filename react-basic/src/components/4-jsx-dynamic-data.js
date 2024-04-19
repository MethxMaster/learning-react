

let userName = "Soratorn";
let accountantName = "Patipon";
let totalMoney = 22845

const Title = ()=><h1>{userName}'s bank account</h1>


function DynamicData(){
    return (
        <div>
            <Title/>
            <p>total money : {totalMoney} USD</p>
            <p>Recorded by : {accountantName}</p>
        </div>
    );
}

export default DynamicData;