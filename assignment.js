//                     Porblem------1

function IncheToMile(Inche) {
    Mile = Inche * (1/63360)
    console.log(Mile)
    
}
IncheToMile(633349)
//                     Porblem------2

// const MyFriend = [ 'Adhara','Mahim','Azad','Fahad','Sabian','Iesrat']

// const SabinasFriend = ['Adhara','Iesrat','Rakib','Kuddos','Abul']

// const MutualFriend = getComm

//                     Porblem------3

function WoodCalculator(chair,table,khat) {
    TotalWood = chair*1 + table*3 + khat*5 
    console.log(`Kather poriman ${TotalWood} q.ft`) 
    
}
WoodCalculator(2,3,4)

//                     Porblem------4

//                     Porblem------5

function GredCalculatar(mark) {
    if(mark <= 100){
        if (mark >=97){
            console.log("A+ \nCongratulation! You've selected for the scholarship!"
            )
        }
        else if(mark >= 90){
            console.log("A")
        }
        else if (mark >=86){
            console.log("A-")
        
        }
        else if (mark >=80){
            console.log("B")
        }
        else if (mark >=75){
            console.log("C+")
        }
        else if (mark >=70){
            console.log("C")
        }
        else if (mark >=65){
            console.log("D+")
        }
        else if (mark >=60){
            console.log("D")
        }
        else{
            console.log("Fail")
        }
    }
    else{
        console.log("Invalied Mark")
    }
    
}

GredCalculatar(100)