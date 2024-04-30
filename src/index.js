// import './css/style.css';
// import './js/app';

export default function sorting(object) {
  let flag = false;
  for (let i = 0; i < object.length; i++) {
    if (flag) {
      break;
    }
    flag = true;
    for (let j = i + 1; j < object.length; j++) {
      if (object[i].health < object[j].health) {
        let t = object[i];
        object[i] = object[j];
        object[j] = t;
        flag = false;
      }
    }
  }
  return object;
}
