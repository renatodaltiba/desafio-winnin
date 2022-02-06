import { PostProps } from "@pages/index";

import moment from "moment";
import "moment/locale/pt-br";

import {
  Container,
  InfoPost,
  Photo,
  PublicationTime,
  Title,
  TitleWrapper,
  InfoPostWrapper,
  Domain,
} from "./styles";

interface Props {
  data: PostProps;
}

export function Post({ data }: Props) {
  const nowDate = moment(new Date(data.created_utc * 1000))
    .locale("pt-br")
    .fromNow();

  return (
    <Container role="post">
      <InfoPostWrapper>
        <Photo src={data?.thumbnail_width ? data.thumbnail : undefined} />

        <InfoPost>
          <TitleWrapper>
            <Title>{data?.title}</Title>
            <PublicationTime>
              enviado {nowDate} por{" "}
              <a href={`https://www.reddit.com/user/${data.author}/`}>
                {data?.author}
              </a>
            </PublicationTime>
          </TitleWrapper>
          <Domain href={data?.url} target="_blank">
            {data?.domain}
          </Domain>
        </InfoPost>
      </InfoPostWrapper>
    </Container>
  );
}
