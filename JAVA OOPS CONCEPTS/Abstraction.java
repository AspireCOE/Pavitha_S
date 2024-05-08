abstract class Bank{
    abstract int getRateOfInterest();
}
class SBI extends Bank{
    int getRateOfInterest(){
        return 3;
    }
}
class CUB extends Bank{
    int getRateOfInterest(){
        return 5;
    }
}
public class Abstraction {
    public static void main(String[] args) {
        Bank bank;
        bank=new SBI();
        System.out.println("Interest: "+bank.getRateOfInterest());
        bank=new CUB();
        System.out.println("Interest: "+bank.getRateOfInterest());      
    }
}
