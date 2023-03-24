class Human {
    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
    }

    isMale(){
        if (this.setGender()===1){
            return true
        }else {
            return false
        }
    }
    setGender(){
        if (this.isMale()){
            return "Male"
        }
        else {}
        return "female"
    }
    checkApple(Apple){
        return Apple.isEmpty();
    }
    eat(Apple){
        if (Apple.isEmpty()<= 0){
            Apple.decrease();
            this.weight++
        } else {
            alert("ăn hết táo r")
        }

    }
    say(){}
    getName(){
        return this.name
    }
    setName(){
        return  this.name = name
    }
    getWeight(){
        return this.weight
    }
    setWeight(weight){
         return this.weight = weight
    }
}