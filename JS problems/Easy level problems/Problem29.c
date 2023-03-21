#include <stdio.h>

int main() {
    int n, i, sum = 0, expected_sum = 0;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter %d integers:\n", n);
    for (i = 0; i < n - 1; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    expected_sum = (n * (n + 1)) / 2; // calculate the sum of first n natural numbers
    printf("The missing number is: %d\n", expected_sum - sum);
    return 0;
}
