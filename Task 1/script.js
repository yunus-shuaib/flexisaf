const data = [
  {name: "fred", sex: "male", age: 24},
  {name: "lixa", sex: "female", age: 14},
  {name: "jane", sex: "female", age: 34},
  {name: "brock", sex: "male", age: 44},
  {name: "sindi", sex: "female", age: 4},
  {name: "pole", sex: "male", age: 8},
  {name: "gane", sex: "male", age: 38},
  {name: "linda", sex: "female", age: 28},
  {name: "maggie", sex: "female", age: 10},
  {name: "rita", sex: "female", age: 11},
  ]
 console.log(data);
export function getCitizens() {
  return data;
}
 export function getAdult() {
    return data.filter(c => c.age >= 18);
  }
  
 export function getOldest() {
    return data.reduce((a,b) => a.age > b.age ? a : b);
  }
  
  export function getNames() {
    return data.map(c => c.name);
  }
  
  export function addCitizen(name, sex, age) {
    data.push({name, sex, age})
  }
  
