# class-utils

From the creators of class-utils-old. We bring you. class-utils. A new "highly available" serverless postgres vercel integrated application for school purposes.

Deployed on vercel [here](https://klasseverktoy.vercel.app/)

```mermaid
flowchart TD
    A(Deploy to production) --> B{Is it friday?};
    B -- Yes --> C[Do not deploy!];
    B -- No --> D[Run git push to deploy!];
    C ----> E[Enjoy your weekend!];
    D -- Repeat --> A;
```
