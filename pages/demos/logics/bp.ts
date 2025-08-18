declare const tf: any
export function bpLearn() {
  importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs')
  function learn(inputArray: number[], outputArray: number[], stepNumber: number, learningLoopNumber: number) {
    return tf.tidy(() => {
      const input = tf.tensor(inputArray, [2, 1])
      const output = tf.tensor(outputArray, [2, 1])
      let Bias1Value = tf.variable(tf.randomNormal([1, 1])).dataSync()[0]
      let Bias2Value = tf.variable(tf.randomNormal([1, 1])).dataSync()[0]
      let Bias1 = tf.tensor([Bias1Value, Bias1Value], [2, 1])
      let Bias2 = tf.tensor([Bias2Value, Bias2Value], [2, 1])
      const layer1Parameter = tf.variable(tf.randomNormal([2, 2]).concat(Bias1, 1))
      const layer2Parameter = tf.variable(tf.randomNormal([2, 2]).concat(Bias2, 1))
      const learningLoop = learningLoopNumber
      const step = tf.tensor(stepNumber, [1, 1])
      const errors = Array.from({ length: learningLoop }, () => 0)
      const one = tf.tensor([1], [1, 1])
      for (let i = 0; i < learningLoop; i++) {
        const layer1Input = layer1Parameter.matMul(input.concat(one))
        const layer1Output = layer1Input.sigmoid()
        const layer2Input = layer2Parameter.matMul(layer1Output.concat(one))
        const layer2Output = layer2Input.sigmoid()
        errors[i] = layer2Output.sub(output).square().sum().dataSync()[0] / 2
        const deltaLayer2 = layer2Output.sub(output).mul(layer2Output).mul(layer2Output.sub(1).neg())
        let devLayer2 = deltaLayer2.matMul(layer1Output.concat(one).transpose())
        const deltaLayer1 = layer2Parameter.slice([0, 0], [2, 2]).transpose().matMul(deltaLayer2).mul(layer1Output).mul(layer1Output.sub(1).neg())
        let devLayer1 = deltaLayer1.matMul(input.concat(one).transpose())
        Bias1Value = devLayer1.slice([0, 2], [2, 1]).sum().dataSync()[0]
        Bias2Value = devLayer2.slice([0, 2], [2, 1]).sum().dataSync()[0]
        Bias1 = tf.tensor([Bias1Value, Bias1Value], [2, 1])
        Bias2 = tf.tensor([Bias2Value, Bias2Value], [2, 1])
        devLayer1 = devLayer1.slice([0, 0], [2, 2]).concat(Bias1, 1)
        devLayer2 = devLayer2.slice([0, 0], [2, 2]).concat(Bias2, 1)
        layer2Parameter.assign(layer2Parameter.sub(step.mul(devLayer2)))
        layer1Parameter.assign(layer1Parameter.sub(step.mul(devLayer1)))
      }
      return { error: errors, layer1Parameter: layer1Parameter.arraySync(), layer2Parameter: layer2Parameter.arraySync() }
    })
  }
  return learn([0.05, 0.10], [0.01, 0.99], 0.5, 1000)
}

export function modelLearn() {
  importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs')
  async function learn(_input: number[], _output: number[], _lr: number, epochs: number) {
    const errors = Array.from({ length: epochs }, () => 0)
    const model = tf.sequential()
    model.add(tf.layers.dense({ units: 2, inputShape: [2] }))
    model.add(tf.layers.dense({ units: 2 }))
    model.compile({ loss: 'meanSquaredError', optimizer: tf.train.sgd(_lr) })
    const input = tf.tensor(_input, [1, 2])
    const output = tf.tensor(_output, [1, 2])
    const onEpochEnd = (epoch: number, logs: any) => {
      errors[epoch] = logs.loss
    }
    await model.fit(input, output, {
      epochs,
      callbacks: { onEpochEnd },
    })
    const getParam = (layer: any, id: number): Float32Array => layer.getWeights()[id].dataSync()
    const getParams = (layer: any): [Float32Array, Float32Array] => [getParam(layer, 0), getParam(layer, 1)]
    const concatResult = (w: Float32Array, b: Float32Array) => [[w[0], w[1], b[0]], [w[2], w[3], b[1]]]
    const [l1Params, l2Params] = [0, 1].map(i => concatResult(...getParams(model.layers[i])))
    return { error: errors, layer1Parameter: l1Params, layer2Parameter: l2Params }
  }
  return learn([0.05, 0.10], [0.01, 0.99], 0.01, 1000)
}
