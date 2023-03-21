#include <stdio.h>

int main() {
    int count = 0;
    char ch;
    for (ch = 'A'; ch <= 'Z'; ch++) {
        printf("%c ", ch);
        count++;
    }
    printf("\nTotal characters: %d\n", count);
    return 0;
}
