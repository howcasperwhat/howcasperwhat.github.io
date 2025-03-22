# Number In Javascript

The JavaScript `Number` type is a double-precision 64-bit binary format IEEE 754 value.
<IEEE754Float />
$$ (-1)^{sign} \times (1 + mantissa) \times 2^{exponent - bias} $$
$bias$ is $1023$ for double-precision 64-bit and $127$ for single-precision 32-bit.

## Number.parseFloat()

This method has the same functionality as the global parseFloat() function:
``` js
// eslint-disable-next-line unicorn/prefer-number-properties
parseFloat === Number.parseFloat // true
```
`parseFloat()` use DFA to parse string to number, when it meets a abnormal character, it will stop and return the number parsed so far, `parseInt()` is similar.

For example:
``` js
Number.parseFloat('123.456abc') // 123.456
Number.parseFloat('12.3.41bc') // 12.3
Number.parseFloat('-0x123') // -0
Number.parseFloat('.11.1') // 0.11
Number.parseFloat('..1') // NaN
Number.parseFloat('+1.1e-2') // 0.011
Number.parseFloat('a1.1e-2') // NaN
Number.parseFloat('.1e-2.5') // 0.001
```

## Why `0.1 + 0.2 !== 0.3`

$0.1$ in IEEE754 is below:
<IEEE754Float :value="0.1" />
$0.2$ in IEEE754 is below:
<IEEE754Float :value="0.2" />

> Here is the process of **add-operation** for double-precision 64-bit binary format IEEE 754:
> 1. Align the exponents, the smaller one will be shifted right until the exponents are equal.
> 2. Add the mantissas.
> 3. Normalize the result (and judge if it is overflow or underflow).
> 4. Round the result to the nearest representable value.  

Now we can get the binary sum result of $0.1$ and $0.2$:  
$0.1=1.1001... \times 2^{-4}$  
$0.2=1.1001... \times 2^{-3}$  
$1^{st}$. $0.1=0.1100... \times 2^{-3}$  
&emsp;&emsp;$0.2=1.1001... \times 2^{-3}$  
$2^{nd}$. $0.1+0.2=10.1011... \times 2^{-3}$

<BinaryOp lhs="0.11001100110011001100110011001100110011001100110011010" rhs="1.1001100110011001100110011001100110011001100110011010" op="+" />

$3^{rd}$. $0.1+0.2=1.01011... \times 2^{-2}$

$4^{th}$. sign = 0  
&emsp;&emsp;exponent = -2 + 1023 => 01111111101  
&emsp;&emsp;mantissa = 0011001100110011001100110011001100110011001100110<span c-green>011</span><span c-yellow>100</span>  
=>0011001100110011001100110011001100110011001100110<span c-green>100</span>

So the sum of $0.1$ and $0.2$ in IEEE754 is below:
<IEEE754Float :value="0.1 + 0.2" />
which is equal to $0.30000000000000004$.  

## Why `0.2 - 0.1 === 0.1`
$0.1=1.1001... \times 2^{-4}$  
$0.2=1.1001... \times 2^{-3}$  
$1^{st}$. $0.1=0.1100... \times 2^{-3}$  
&emsp;&emsp;$0.2=1.1001... \times 2^{-3}$  
$2^{nd}$. $0.1-0.2=0.1100... \times 2^{-3}$  

<BinaryOp lhs="0.11001100110011001100110011001100110011001100110011010" rhs="1.1001100110011001100110011001100110011001100110011010" op="-" />

$3^{rd}$. $0.1-0.2=1.100... \times 2^{-4}$  

$4^{th}$. sign = 0  
&emsp;&emsp;exponent = -4 + 1023 => 01111111011  
&emsp;&emsp;mantissa = 1001100110011001100110011001100110011001100110011010
=>1001100110011001100110011001100110011001100110011010

So the subtraction of $0.2$ and $0.1$ in IEEE754 is below:  
<IEEE754Float :value="0.2 - 0.1" />  
which is equal to $0.1$.

