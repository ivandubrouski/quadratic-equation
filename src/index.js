module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g, '');
  var temp = equation.match(/(-?\d+)\*x\^2(-?\+?\d+)\*x(-?\+?\d+)/);
  var discriminant=temp[2]*temp[2]-4*temp[1]*temp[3];
  var solution=[];
  solution.push(+(-temp[2]/(2*temp[1])-Math.sqrt(discriminant)/(2*temp[1])).toFixed());
  solution.push(+(-temp[2]/(2*temp[1])+Math.sqrt(discriminant)/(2*temp[1])).toFixed());
  return (solution.sort((x1,x2) => x1-x2));
}