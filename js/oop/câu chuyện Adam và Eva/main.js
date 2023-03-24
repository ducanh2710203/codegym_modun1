let apple = new Apple(10,)
let adam = new Human("adam", 1, 66)
let eva = new Human("eva", 3, 55)
while (apple.isEmpty() !== true) {
    document.write("Adam ăn táo" + "<br>")
    adam.eat(apple)

    document.write("Quả táo còn: " + "<br>")
    document.write(apple.getWeight() + " đơn vị" + "<br>")
    document.write( "Cân nặng của Adam là: " + adam.getWeight() + " đơn vị" + "<br>")

    document.write("<br>")

    document.write("Eva ăn táo" + "<br>")
    eva.eat(apple)

    document.write("Quả táo còn: " + "<br>")
    document.write(apple.getWeight() + " đơn vị" + "<br>")
    document.write( "Cân nặng là: " + eva.getWeight() + " đơn vị" + "<br>")
}