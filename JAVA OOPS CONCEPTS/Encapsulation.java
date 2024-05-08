class Account{
    public long accountNumber;
    public String name, email;
    public float amount;
    public long getAccountNumber(){
        return accountNumber;
    }
    public void setAccountNumber(long accountNumber){
        this.accountNumber=accountNumber;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email=email;
    }
    public float getAmount(){
        return amount;
    }
    public void setAmount(float amount){
        this.amount=amount;
    }
}
public class Encapsulation {
    public static void main(String args[]){
        Account account=new Account();
        account.setAccountNumber(234567678L);
        account.setName("Vishnu");
        account.setEmail("vishnulrk@gmail.com");
        account.setAmount(56000.25f);
        System.out.println("Account Number: "+account.getAccountNumber());
        System.out.println("Name: "+account.getName());
        System.out.println("Email: "+account.getEmail());
        System.out.println("Amount: "+account.getAmount());
    }
}