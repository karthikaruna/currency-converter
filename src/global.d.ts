declare type ArrayElement<T> = T extends (infer U)[] ? U : null
