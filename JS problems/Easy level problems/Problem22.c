#include <stdio.h>

int main() {
    int n, i;
    unsigned long long factorial = 1;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    // factorial of 0 and 1 is always 1
    if (n == 0 || n == 1) {
        printf("Factorial of %d is 1\n", n);
    }
    else {
        // calculate the factorial using a loop
        for (i = 2; i <= n; i++) {
            factorial *= i;
        }
        printf("Factorial of %d is %llu\n", n, factorial);
    }

    return 0;
}
