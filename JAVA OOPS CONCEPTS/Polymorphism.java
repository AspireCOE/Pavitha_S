//Run time polymorphism
class Bike{
    void run(){
        System.out.println("Ruuning...");
    }
}
class TVS extends Bike{
    void run(){
        System.out.println("RAIDAR is running...");
    }
}
//Compile time polymorphism
class Addition{
    int AddNum(int a,int b){
        return a+b;
    }
    int AddNum(int a,int b,int c){
        return a+b+c;
    }
}
public class Polymorphism {
    public static void main(String args[]){
        Bike bike=new TVS(); //Method overriding
        bike.run();
        Addition addition=new Addition();
        System.out.println(addition.AddNum(2,3,4)); //Method overloading
    }
}
