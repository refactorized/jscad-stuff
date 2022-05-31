/**
 * Parametric Involute Gear
 * @category Parameters
 * @skillLevel 1
 * @description Build a proper involute gear, demonstrating parameters, and how they can be used in complex math.
 * @tags gear, tangent, parameter, parameters
 * @authors Joost Nieuwenhuijse, Simon Clark
 * @licence MIT License
 */

const jscad = require('@jscad/modeling')

const { cylinder, polygon, cuboid } = jscad.primitives
const { rotateZ, translateZ } = jscad.transforms
const { extrudeLinear } = jscad.extrusions
const { union, subtract } = jscad.booleans
const { vec2 } = jscad.maths
const { degToRad } = jscad.utils

// Here we define the user editable parameters:
const getParameterDefinitions = () => [
  { name: 'sideLength', caption: 'Side Length (mm):', type: 'float', initial: 100, min: 5, max: 1000, step: 1 },
  { name: 'holeRadius', caption: 'Hole Radius (mm):', type: 'float', initial: 10, min: 1, max: 100, step: 1 },
  { name: 'holeInset', caption: 'Hole inset (mm):',type: 'float', initial: 10, min: 1, max: 100, step: 1 },
  { name: 'thickness', caption: 'Thickness (mm):',type: 'float', initial: 6.5, min: 1, max: 100, step: 1 },
  { name: 'cornerRadius', caption: 'Corner Radius (mm):',type: 'float', initial: 3, min: 0, max: 1000, step: 1 },
  
]

// Main entry point; here we construct our solid:
const main = (params) => {
  const s = params.sideLength;
  const z = params.thickness;
  const hole = {
    r: params.holeRadius,
    inset: params.holeInset,
  };
  
  const frame = cuboid({ size: [s, s, z] });
  return frame
}

module.exports = { main, getParameterDefinitions }
