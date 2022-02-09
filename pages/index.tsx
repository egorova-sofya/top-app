import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import P from "../components/P/P";
import Raiting from "../components/Raiting/Raiting";
import Tag from "../components/Tag/Tag";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  console.log(menu);
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log(`counter` + counter);
    return function cleanup() {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log(`counter` + counter);
    return function cleanup() {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <p>{counter}</p>
      <Htag tag="h1">h1 заголовок</Htag>
      <Htag tag="h2">h1 заголовок</Htag>
      <Htag tag="h3">h1 заголовок</Htag>
      <Button appearence="primary" onClick={() => setCounter((x) => x + 1)}>
        hi
      </Button>
      <Button appearence="ghost">hi</Button>
      <Button arrow="right" appearence="ghost">
        hi
      </Button>
      <Button arrow="down" appearence="primary">
        hi
      </Button>
      <P size="size18px">thtfhf</P>
      <P size="size14px">thtfhf</P>
      <Tag size="m" color="red">
        fdd
      </Tag>
      <Raiting rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map((item) => {
          return (
            <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
