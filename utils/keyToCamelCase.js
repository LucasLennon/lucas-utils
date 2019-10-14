const isObject = function (o) {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function';
};

export default function keysToCamelCase(subject) {

  if (isObject(subject)) {
    var changedObject = {}
    Object.entries(subject).forEach((n) => {
      var changedKey = n[0]
        .replace(/([-_][a-z])/ig, ($1) => {
          return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
        });
      changedObject[changedKey] = keysToCamelCase(n[1]);
    })
    return changedObject;
  } 
  if (Array.isArray(subject)){
    return subject.map((i) => {
      return keysToCamelCase(i);
    });
  }
  
  return subject;
}