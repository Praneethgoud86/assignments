#include <stdio.h>

int main() {
    int n, num, count = 0;

    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array:\n");

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the number to count: ");
    scanf("%d", &num);

    for (int i = 0; i < n; i++) {
        if (arr[i] == num) {
            count++;
        }
    }

    printf("The number %d occurs %d times in the array.\n", num, count);

    return 0;
}
