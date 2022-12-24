#include <stdio.h>

int main()

{

    char P[] = "me";

    int i;

    for (i = 0; P[i]; i++)
        printf("%c %c %c %c", P[i], *[P + i], *(i + P), i[P]);
}