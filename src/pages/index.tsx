import type { NextPage } from "next";
import GlobalStyle from "@styles/global";
import { Header } from "@components/Header";
import { SelectButton } from "@components/SelectButton";
import { Post } from "@components/Post";
import Head from "next/head";
import {
  ButtonsWrapper,
  ListPost,
  Container,
  ContainerSpinner,
} from "@styles/pages/home";
import { ConfirmButton } from "@components/ConfirmButton";
import { ThemeProvider } from "styled-components";
import { useSwitchTheme } from "@hooks/switchTheme";

import { useCallback, useEffect, useState } from "react";
import { api } from "@services/api";
import { Spinner } from "@components/Spinner";

export interface PostProps {
  thumbnail: string;
  title: string;
  author: string;
  url: string;
  domain: string;
  created_utc: number;
  thumbnail_width: number;
  id: string;
}

interface PostList {
  data: PostProps[];
}

const Home: NextPage = () => {
  const { theme } = useSwitchTheme();
  const [filter, setFilter] = useState("hot");
  const [posts, setPosts] = useState<PostList[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(true);
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  const getData = useCallback(async () => {
    try {
      setPosts([]);
      setLoading(true);
      const { data: response } = await api.get(filter, {
        params: {
          limit: filter === "hot" ? 6 : 8,
        },
      });

      setPosts(response.data.children);
      setNextPage(response.data.after);
    } catch (error) {
      alert("Error loading data");
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    if (getData) getData();
    return () => setPosts([]);
  }, [getData]);

  async function viewMore() {
    try {
      setNextPageLoading(true);
      const { data: response } = await api.get(filter, {
        params: {
          limit: 8,
          after: nextPage,
        },
      });
      setNextPage(response.data.after);

      setPosts((item: PostList[]) => [...item, ...response.data.children]);

      setLastPage(response.data.after === "");
    } catch (error) {
      alert("Error loading data");
    } finally {
      setNextPageLoading(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Home | REACTSJS</title>
      </Head>
      <Header />
      <Container>
        <ButtonsWrapper>
          <SelectButton
            title="Hot"
            selected={filter === "hot"}
            onClick={() => {
              setFilter("hot");
            }}
          />
          <SelectButton
            title="News"
            selected={filter === "new"}
            onClick={() => {
              setFilter("new");
            }}
          />
          <SelectButton
            title="Rising"
            selected={filter === "rising"}
            onClick={() => {
              setFilter("rising");
            }}
          />
        </ButtonsWrapper>
        <ListPost role="posts-list">
          {loading && (
            <ContainerSpinner>
              <Spinner
                width={100}
                height={100}
                schemeColor={
                  theme.TITLE === "light"
                    ? theme.COLORS.PRIMARY
                    : theme.COLORS.WARNING
                }
              />
            </ContainerSpinner>
          )}

          {posts.map((i: any) => (
            <Post data={i.data} key={i.data.id} />
          ))}
        </ListPost>
        <ConfirmButton
          onClick={viewMore}
          lastPage={lastPage}
          nextPageLoading={nextPageLoading}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
