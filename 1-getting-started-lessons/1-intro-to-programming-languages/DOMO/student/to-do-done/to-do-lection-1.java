// This is a comment, it doesn't affect the code execution.

public static void isEven(int number) {
    number = % 2 == 0;
    return number;
}

static final int startingPoint = 0;
static final int endingPoint = 100;

for(int i = startingPoint; i <= endingPoint; i++) {
    if(isEven(i)) {
        System.out.println("Even number: " + i);
      } else {
        System.out.println("Odd number: " + i);
      }
}|