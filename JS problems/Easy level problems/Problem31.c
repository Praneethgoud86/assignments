#include <stdio.h>

int main() {
    int arr[100], n, i, pos, value;
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);
    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    printf("Enter the position to insert the element: ");
    scanf("%d", &pos);
    printf("Enter the value to insert: ");
    scanf("%d", &value);
    for (i = n - 1; i >= pos - 1; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos - 1] = value;
    n++;
    printf("The updated array is:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
