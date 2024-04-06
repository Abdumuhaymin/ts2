interface user {
  name: string;
  age: number;
  email: string;
  img: string;
}

interface cart {
  img: string;
  title: string;
  brand: string;
  price: number;
}

interface like {
  img: string;
  title: string;
  brand: string;
  price: number;
}
function saveState(key: string, data: user | cart | like) {
  localStorage.setItem(key, JSON.stringify(data));
}

saveState("user", {
  name: "abdumuhaymin",
  age: 18,
  email: "abdu@gmail.com",
  img: "https://lh3.googleusercontent.com/ogw/AF2bZygRsiwPFJQDAmrIEYWzCk31JyLa3ZzA1itXriPI=s32-c-mo",
});
saveState("cart", {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgh_ftVsCF8VwZa_6BYvOMZ1u291KKC8eN0kaoEUsCDg&s",
  title: "BMW M5 F90 CS with WENGALBI",
  brand: "BMW",
  price: 111895,
});
saveState("like", {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgh_ftVsCF8VwZa_6BYvOMZ1u291KKC8eN0kaoEUsCDg&s",
  title: "BMW M5 F90 CS with WENGALBI",
  brand: "BMW",
  price: 111895,
});
