proto = Object.getPrototypeOf;

// Get the whole prototype chain
function protos(obj) {
  let ps = [];
  obj = proto(obj);
  while (obj !== null) {
    ps.push(obj);
    obj = proto(obj);
  }
  return ps;
}

function dir(obj) {
  let d = [];
  let ps = protos(obj);
  ps.splice(0, 0, obj);
  let ns = [];
  let nh = {};
  for (const p of ps) {
    for (const n of Object.getOwnPropertyNames(p)) {
      if (! (n in nh)) {
        nh[n] = true;
        ns.push(n);
      }
    }
  }
  return ns.sort();
}
