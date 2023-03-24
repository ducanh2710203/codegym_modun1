class Apple {
    constructor(weight) {
         this.weight = weight;

    }

    isEmpty(){
        if (this.weight<=0){
            return true;
        }else {
            return false
        }
    }
    decrease(){
        if (this.isEmpty()){
            alert("táo ăn hết r")
        }else {
            this.weight--
        }
    }
    getWeight(){
        return this.weight
    }
}