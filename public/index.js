var fragments = [
  66, 30, 92, 25, 117, 30, 73, 66, 27, 25, 92, 25, 78, 117,
  83, 26, 95, 68, 77, 117, 90, 30, 78, 30, 93, 30, 68, 87
];

function xorKey() {
  return (7**2) - (7**1);
}

function retrievePart4() {
  return String.fromCharCode.apply(null, fragments.map(function (n) {
    return n ^ xorKey();
  }));
}
