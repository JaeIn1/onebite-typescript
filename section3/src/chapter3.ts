type animal = {
  name: "name";
  color: "white";
};

type dog = {
  name: "name";
  color: "white";
  breed: "진도";
};

let animal2: animal;

let dog2: dog = {
  name: "name",
  color: "white",
  breed: "진도",
};

animal2 = dog2;
// ❗️오류 : 다운캐스팅이기 때문
// dog = animal;
// dog2 = animal2;

animal2 = {
  name: "name",
  color: "white",
  // breed: "진도",
};
// 오류
//dog2 = animal2;
