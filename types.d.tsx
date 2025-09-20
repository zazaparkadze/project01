type Post = {
  id: number;
  userId: string;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

type Params = {
  params: {
    userId: string;
  };
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type Employee = {
  name: string;
  occupation: string;
};
