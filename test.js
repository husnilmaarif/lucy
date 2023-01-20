// mengembalikan true jika terdapat nilai duplikat dalam array
function findDuplicate() {
  let array = [232, 424, 586, 948, 586];
  let returnStatus = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] === array[j]) {
          returnStatus = true;
        }
      }
    }
  }
  if (returnStatus) {
    console.log("true");
  } else {
    console.log("false");
  }
}

findDuplicate();
