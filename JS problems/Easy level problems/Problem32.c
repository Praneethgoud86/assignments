#include <stdio.h>
int main()
{
    int n, r;
    printf("Enter a Number: ");
    scanf("%d", &n);
    while (n>0)
    {
        r = n%10;
      printf("%d",r);       /* code */
    n=n/10;
    }
return 0;    
}
