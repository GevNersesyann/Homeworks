// 1

function revNum(n) {
  let arr = n.toString().split("");
  let revNum = [];
  function loop(i) {
    if (i === 0) {
      return;
    }
    revNum.push(arr[i]);
    loop(i - 1);
  }
  loop(arr.length - 1);
  return Number(revNum.join(""));
}
const x = revNum(51);
alert(x);

// 2

function findSecOcc(num, arr) {
  let count = 1;

  function loop(i) {
    if (i >= arr.length) {
      return -1;
    }
    if (num === arr[i]) {
      if (count === 2) {
        return i;
      }
      count++;
    }
    return loop(i + 1);
  }

  return loop(0);
}

const answer = findSecOcc(5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]);
alert(answer);

//3 chem karoxacel

//4

function replacePi(str) {
  if (str === "" || !str.toLowerCase().includes("pi")) {
    return str;
  }

  const index = str.toLowerCase().indexOf("pi");
  if (index !== -1) {
    return (
      str.substring(0, index) + "3.14" + replacePi(str.substring(index + 2))
    );
  }
  return str;
}

const str = "Picsart pipelines with Pi";
const replacedStr = replacePi(str);
alert(replacedStr);

//5

function flattenArr(arr) {
  return arr.reduce(function (accr, val) {
    if (Array.isArray(val)) {
      return accr.concat(flattenArr(val));
    }
    return accr.concat(val);
  }, []);
}

const arr = [14, [1, [[[3, []]], 1], 0]];
const flattenedArr = flattenArr(arr);
alert(flattenedArr);

//6

function sumOfDigits(num) {
  let answer;
  if (!num) {
    return 0;
  }
  answer = (num % 10) + sumOfDigits(Math.floor(num / 10));
  if (answer > Number(num.toString().split("")[0])) {
    return sumOfDigits(answer);
  }
  return answer;
}
const sum = sumOfDigits(29);
alert(sum);
