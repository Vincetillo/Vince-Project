package cocolo;
import java.util.Scanner;
public class Cocolo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        try (Scanner s = new Scanner(System.in)) {
int x=1;
int customerCount = 0;
char choice;

do {
    customerCount++;
    String[] product = {"Cocolo Fish Roll", "Potato Mojo", "Soju", "Coffe Jelly", "Laksa", "Ramen", "Cereal Chicken", "Sweet Chili Chicken", "Cocolo Takoyaki Classic", "Cocolo Cheese Overload "};
    double[] price = {199.00, 149.00, 199.00, 99.00, 105.00, 120.00, 99.00, 49.00, 45.00, 110.00};

    int[] quantities = new int[10];
    boolean DONE = false;
{

System.out.print("--------------------------------------");
System.out.print("Welcome to Cocolo Restaurant!");
System.out.println("--------------------------------------");

}
    System.out.println("Here is our Menu:");
    for (int i = 0; i < product.length; i++) {
        System.out.println("["+(i + 1) + "] " + product[i] + " - PHP " + price[i]);
    }
    System.out.println("-------------------------------------------");
    System.out.println("Enter 0 to Check Out");
    System.out.println("-------------------------------------------");
    while (!DONE) {

        System.out.print("Enter your order [1,2,3,4,5,6,7,8,9,10]: ");
        int productNumber = s.nextInt();

        if (productNumber == 0) {
            DONE = true;
        } else if (productNumber < 1 || productNumber > product.length) {
            System.out.println("Invalid Input!");
            System.out.println("-------------------------------------------");
        } else {
            System.out.print("Enter number quantity: ");
            int quantity = s.nextInt();
            quantities [productNumber - 1] += quantity;
            System.out.println("-------------------------------------------");
        }
    }

    double total = 0;

    System.out.println("-------------------------------------------");
    System.out.println("******7/7******");
    System.out.println("Here are the food/drink that you ordered:");
    for (int i = 0; i < product.length; i++) {
        if (quantities[i] > 0) {
            double subtotal = quantities[i] * price[i];
            System.out.println(product[i] + "  x " + '('+quantities[i]+')' + " - PHP " + subtotal);
            total += subtotal;
        }
    }

    System.out.println("Total: Php " + total);
    
        
    do {
        System.out.print("Enter your Payment: " );
        double pay =s.nextDouble();
        if (pay >= total) {
            pay -= total;
            System.out.println("Change: Php "+pay);
            System.out.println("Thank  you! Please come again and dine in with us!");
            System.out.println("***************");
            System.out.println("-------------------------------------------");

            break;
        } else {
            System.out.println("-------------------------------------------");
            System.out.println("Not Enough Amount");
            System.out.println("-------------------------------------------");
        }
    } while (x==1);

    System.out.println("**************************************");
    System.out.println("New Customer? Yes(Y)No(N) ");
    choice = s.next().charAt(0);

} while (choice =='y'|| choice =='Y');

System.out.print("Number of customers served today: " + customerCount);
        }
    }

     
 }