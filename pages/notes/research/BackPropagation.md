<h1 c-blueGray flex="~ items-center">
  Back Propagation
  <a
    href="/demo/BackPropagation"
    hover:c-black hover:dark:c-white
    hover:op-80 m-l-8 i-carbon:cube
  />
</h1>

## A Simple Toy
### Introduction
$i_i: \text{input}$
$h_i: \text{hidden layer}$
$o_i: \text{output}$
$w_i: \text{weight}$
$b_i: \text{bias}$

> [!TIP]
> $i_1=0.05, i_2=0.10$
> $o_1=0.01, o_2=0.99$
> Learning is the process to get the right $[w_1,…,w_8]$ to arrive at $[o_1=0.01,o_2=0.99]$

![network](/images/note/BackPropagation.png)

### Algorithm Step
#### step 1: initialization of weights
set $w_i$ and $b_i$ to random values
e.g.

 $[w_1, w_2, b_1] = [0.15, 0.20, 0.35]$
 $[w_3, w_4, b_1] = [0.25, 0.30, 0.35]$
 $[w_5, w_6, b_2] = [0.40, 0.45, 0.60]$
 $[w_7, w_8, b_2] = [0.50, 0.55, 0.60]$

#### step 2: forward pass
$net_{h1} = w_1 \times i1 + w_2 \times i2 + b_1 \times 1 = 0.3775$
$out_{h1} = \sigma(net_{h1}) = 0.593269992$
$net_{h2} = w_3 \times i1 + w_4 \times i2 + b_1 \times 1 = 0.3925$
$out_{h2} = \sigma(net_{h2}) = 0.596884378$

 so that we have

$net_{o_1} = w_5 \times out_{h1} + w_6 \times out_{h2} + b_2 \times 1 = 1.10590597$
$out_{o_1} = \sigma(net_{o_1}) = 0.75136507$
$net_{o_2} = w_7 \times out_{h1} + w_8 \times out_{h2} + b_2 \times 1 = 1.2249214$
$out_{o_2} = \sigma(net_{o_2}) = 0.772928465$

#### step 3: calculate error
$E = \frac{1}{2} \sum_{i=1}^{2} (out_{oi} - o_i)^2$

 so that we have

$E_{o_1} = \frac{1}{2} (0.75136507 - 0.01)^2 = 0.274811083$
$E_{o_2} = \frac{1}{2} (0.772928465 - 0.99)^2 = 0.023560026$

#### step 4: backward pass
As $E_{total}$ is a function of $w_i$ and $b_i$, we can use the chain rule to calculate the partial derivatives of $E_{total}$ with respect to $w_i$ and $b_i$ to see how to change each $w_i$ and $b_i$.
e.g.

$\frac{\partial E_{total}}{\partial w_5} = \frac{\partial E_{total}}{\partial out_{o_1}} \times \frac{\partial out_{o_1}}{\partial net_{o_1}} \times \frac{\partial net_{o_1}}{\partial w_5}$

$E_{total} = E_{o_1} + E_{o_2} = \frac{1}{2} (out_{o_1} - o_1)^2 + \frac{1}{2} (out_{o_2} - o_2)^2$

$\Rightarrow  \frac{\partial E_{total}}{\partial out_{o1}} = out_{o1} - o_1$

$out_{o1} = \sigma(net_{o1}) = \frac{1}{1 + e^{-net_{o1}}}$

$\Rightarrow  \frac{\partial out_{o1}}{\partial net_{o1}} = out_{o1} \times (1 - out_{o1})$

$net_{o1} = w_5 \times out_{h1} + w_6 \times out_{h2} + b_2 \times 1$

$\Rightarrow  \frac{\partial net_{o1}}{\partial w_5} = out_{h1}$

so that we have

$\frac{\partial E_{total}}{\partial w_5} = (out_{o1} - o_1) \times out_{o1} \times (1 - out_{o1}) \times out_{h1} = 0.082167041$

To decrease the error, we then subtract this value from the current weight. But we need a parameter eta called learning rate.

$w_5^+ = w_5 - \eta \times \frac{\partial E_{total}}{\partial w_5} = 0.35891648$

##### Deeper Network and bias

$\frac{\partial E_{total}}{\partial w_1}=\frac{\partial E_{o_1}}{\partial out_{o_1}} \times \frac{\partial out_{o_1}}{\partial w_1} +  \frac{\partial E_{o_2}}{\partial out_{o_2}} \times \frac{\partial out_{o_2}}{\partial w_1} $

$=\frac{\partial E_{o_1}}{\partial out_{o_1}} \times \frac{\partial out_{o_1}}{\partial net_{o_1}} \times \frac{\partial net_{o_1}}{\partial out_{h_1}} \times \frac{\partial out_{h_1}}{\partial net_{h_1}} \times \frac{\partial net_{h_1}}{\partial w_1} $

$+\frac{\partial E_{o_2}}{\partial out_{o_2}} \times \frac{\partial out_{o_2}}{\partial net_{o_2}} \times \frac{\partial net_{o_2}}{\partial out_{h_1}} \times \frac{\partial out_{h_1}}{\partial net_{h_1}} \times \frac{\partial net_{h_1}}{\partial w_1} $

$= (out_{o_1} - o_1) \times out_{o1} \times (1 - out_{o1}) \times w_5 \times out_{h_1} \times (1 - out_{h_1}) \times i_1 $

$+ (out_{o_2} - o_2) \times out_{o2} \times (1 - out_{o2}) \times \times w_7 \times out_{h_1} \times (1 - out_{h_1}) \times i_1$

$\frac{\partial E_{total}}{\partial b_1} = \frac{\partial E_{o_1}}{\partial out_{o_1}} \times \frac{\partial out_{o_1}}{\partial b_1} + \frac{\partial E_{o_2}}{\partial out_{o_2}} \times \frac{\partial out_{o_2}}{\partial b_1}$

$=\frac{\partial E_{o_1}}{\partial out_{o_1}} \times \frac{\partial out_{o_1}}{\partial net_{o_1}} \times (\frac{\partial net_{o_1}}{\partial out_{h_1}} \times \frac{\partial out_{h_1}}{\partial net_{h_1}} \times \frac{\partial net_{h_1}}{\partial b_1} + \frac{\partial net_{o_1}}{\partial out_{h_2}} \times \frac{\partial out_{h_2}}{\partial net_{h_2}} \times \frac{\partial net_{h_2}}{\partial b_1})$

$+\frac{\partial E_{o_2}}{\partial out_{o_2}} \times \frac{\partial out_{o_2}}{\partial net_{o_2}} \times (\frac{\partial net_{o_2}}{\partial out_{h_1}} \times \frac{\partial out_{h_1}}{\partial net_{h_1}} \times \frac{\partial net_{h_1}}{\partial b_1} + \frac{\partial net_{o_2}}{\partial out_{h_2}} \times \frac{\partial out_{h_2}}{\partial net_{h_2}} \times \frac{\partial net_{h_2}}{\partial b_1})$

$= (out_{o_1} - o_1) \times out_{o_1} \times (1 - out_{o_1}) \times (w_5 \times out_{h_1} \times (1 - out_{h_1}) + w_6 \times out_{h_2} \times (1 - out_{h_2}))$

$+ (out_{o_2} - o_2) \times out_{o_2} \times (1 - out_{o_2}) \times (w_7 \times out_{h_1} \times (1 - out_{h_1}) + w_8 \times out_{h_2} \times (1 - out_{h_2}))$

Finally, we get the new weights and biases

$[w_1^+, w_2^+, b_1^+] = [0.149780716, 0.19956143, 0.3450265]$
$[w_3^+, w_4^+, b_1^+] = [0.24975114, 0.29950229, 0.3450265]$
$[w_5^+, w_6^+, b_2^+] = [0.35891648, 0.408666186, 0.511301270]$
$[w_7^+, w_8^+, b_2^+] = [0.511301270, 0.561370121, 0.511301270]$

##### Linear Algebra
we can use matrix to simplify the calculation

- the first layer:
$\begin{bmatrix} w_1 & w_2 & b_1 \\ w_3 & w_4 & b_1 \end{bmatrix} \times \begin{bmatrix} i_1 \\ i_2 \\ 1 \end{bmatrix} = \begin{bmatrix} net_{h1} \\ net_{h2} \end{bmatrix}$

- the second layer:
$\begin{bmatrix} w_5 & w_6 & b_2 \\ w_7 & w_8 & b_2 \end{bmatrix} \times \begin{bmatrix} out_{h1} \\ out_{h2} \\ 1 \end{bmatrix} = \begin{bmatrix} net_{o1} \\ net_{o2} \end{bmatrix}$

- net and out:
$\begin{bmatrix} out_{x1} \\ out_{x2} \end{bmatrix} = \sigma(\begin{bmatrix} net_{x1} \\ net_{x2} \end{bmatrix})$

- the error:
$\begin{bmatrix} E_{o1} \\ E_{o2} \end{bmatrix} = \frac{1}{2} \times (\begin{bmatrix} out_{o1} \\ out_{o2} \end{bmatrix} - \begin{bmatrix} o_1 \\ o_2 \end{bmatrix})^2$

- delta layer 2:
$\begin{bmatrix} \delta_{o1} \\ \delta_{o2} \end{bmatrix} = \begin{bmatrix} out_{o1} - o_1 \\ out_{o2} - o_2 \end{bmatrix} * \begin{bmatrix} out_{o1} \\ out_{o2} \end{bmatrix} * (1 - \begin{bmatrix} out_{o1} \\ out_{o2} \end{bmatrix})$

- dev layer 2:
$\begin{bmatrix} \frac{\partial E_{total}}{\partial w_5} & \frac{\partial E_{total}}{\partial w_6} & (\frac{\partial E_{total}}{\partial b_2})_1 \\ \frac{\partial E_{total}}{\partial w_7} & \frac{\partial E_{total}}{\partial w_8} & (\frac{\partial E_{total}}{\partial b_2})_2 \end{bmatrix} = \begin{bmatrix} \delta_{o1} \\ \delta_{o2} \end{bmatrix} \times \begin{bmatrix} out_{h1} \\ out_{h2} \\ 1 \end{bmatrix}^T$

- delta layer 1:
$\begin{bmatrix} \delta_{h1} \\ \delta_{h2} \end{bmatrix} = \begin{bmatrix} w_5 & w_7 \\ w_6 & w_8 \end{bmatrix}^T \times \begin{bmatrix} \delta_{o1} \\ \delta_{o2} \end{bmatrix} * \begin{bmatrix} out_{h1} \\ out_{h2} \end{bmatrix} * (1 - \begin{bmatrix} out_{h1} \\ out_{h2} \end{bmatrix})$

- dev layer 1:
$\begin{bmatrix} \frac{\partial E_{total}}{\partial w_1} & \frac{\partial E_{total}}{\partial w_2} & (\frac{\partial E_{total}}{\partial b_1})_1 \\ \frac{\partial E_{total}}{\partial w_3} & \frac{\partial E_{total}}{\partial w_4} & (\frac{\partial E_{total}}{\partial b_1})_2 \end{bmatrix} = \begin{bmatrix} \delta_{h1} \\ \delta_{h2} \end{bmatrix} \times \begin{bmatrix} i_1 \\ i_2 \\ 1 \end{bmatrix}^T$

- bias
$ \frac{\partial E_{total}}{\partial b_n} = (\frac{\partial E_{total}}{\partial b_n})_1 + (\frac{\partial E_{total}}{\partial b_n})_2$

#### step 5: repeat step 2-4
We can repeat step 2-4 until the error is small enough.

### Code

```ts
import * as tf from '@tensorflow/tfjs'

async function train(_input: number[], _output: number[], _lr: number, epochs: number) {
  const errors = Array.from({ length: epochs }, () => 0)
  const model = tf.sequential()
  model.add(tf.layers.dense({ units: 2, inputShape: [2] }))
  model.add(tf.layers.dense({ units: 2 }))
  model.compile({ loss: 'meanSquaredError', optimizer: tf.train.sgd(_lr) })
  const input = tf.tensor(_input, [1, 2])
  const output = tf.tensor(_output, [1, 2])
  const onEpochEnd = (epoch: number, logs) => {
    errors[epoch] = logs.loss
  }
  await model.fit(input, output, {
    epochs,
    callbacks: { onEpochEnd },
  })
  const getParam = (layer, id: number): Float32Array => layer.getWeights()[id].dataSync()
  const getParams = (layer): [Float32Array, Float32Array] => [getParam(layer, 0), getParam(layer, 1)]
  const concatResult = (w: Float32Array, b: Float32Array) => [[w[0], w[1], b[0]], [w[2], w[3], b[1]]]
  const [l1Params, l2Params] = [0, 1].map(i => concatResult(...getParams(model.layers[i])))
  return { error: errors, layer1Parameter: l1Params, layer2Parameter: l2Params }
}
```
