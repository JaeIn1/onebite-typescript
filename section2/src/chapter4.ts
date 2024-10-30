// 타입 별칭

type User = {
  id: number;
  name: string;
  location: string;
};

type Birth = {
  birth: string;
};

let user1: User & Birth = {
  id: 1,
  name: "user1",
  location: "location",
  birth: "1999-00-00",
};

let birth: Birth = {
  birth: "1999-00-00",
};

// 인덱스 시그니처

type CountryInfo = {
  [key: string]: string | number;
  korea: number;
};

let CountryInfo: CountryInfo = {
  korea: 1,
};
