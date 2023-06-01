// 1
function totalLompatan(x, y, k) {
  let jumps = 0;
  for (let i = x; i < y; i += k) {
    jumps++;
  }
  return jumps;
}

console.log(totalLompatan(10, 85, 30));

// 2
const arr = [3, 8, 9, 7, 6];
function rotateArray(arr, iteration) {
  arr.splice(0, 0, ...arr.splice(arr.length - iteration, iteration));
  return arr;
}
console.log(rotateArray(arr, 3));

// 3
const array1 = [
  "Mangga",
  "Apel",
  "Melon",
  "Pisang",
  "Sirsak",
  "Tomat",
  "Nanas",
  "Nangka",
  "Timun",
  "Mangga",
];
const array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];

function filter(array1, array2) {
  let same = [];
  let different = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      same.push(array1[i]);
    } else {
      different.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      different.push(array2[i]);
    }
  }

  // Menghilangkan duplicate
  function eliminate(theArray) {
    let output = theArray.reduce((result, current) => {
      if (!result.includes(current)) {
        result.push(current);
      }
      return result;
    }, []);
    return output;
  }
  let outputSame = eliminate(same);
  let outputDifferent = eliminate(different);
  return {
    outputSame,
    outputDifferent,
  };
}
console.log(filter(array1, array2));

// 4
function pattern(params) {
  let output = "";
  let num = 1;
  for (let i = 1; i <= params; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    output += row + "\n";
  }
  return output;
}
console.log(pattern(7));
