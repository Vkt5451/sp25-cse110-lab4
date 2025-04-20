let statistics = {

    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};



for (let index in statistics) {

    if(index[0]==='r'||statistics[index]%2!==0){
        console.log(index, ":", statistics[index]); 
    }
}