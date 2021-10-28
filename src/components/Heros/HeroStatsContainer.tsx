import { useGetHeroStatsQuery } from "../../services/HeroService";
import { HeroStatsItem } from "./HeroStatsItem";
import { postApi } from "../../services/PostService";
import { IPost } from "../../models/IPost";

export const HeroStatsContainer = () => {
  // const [limit, setLimit] = useState(100);
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(5);
  const [createPost, {}] = postApi.useCreatePostMutation();
  // const [updatePost, {}] = postApi.useUpdatePostMutation();
  // const [deletePost, {}] = postApi.useDeletePostMutation();

  // @ts-ignore
  // const { data: heros, error, isLoading } = useGetHeroStatsQuery();

  const handleCreatePost = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };
  //
  // const handleRemove = (post: IPost) => {
  //   deletePost(post);
  // };
  //
  // const handleUpdate = (post: IPost) => {
  //   updatePost(post);
  // };

  return (
    <div>
      {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
      {/*{error && <h1>Произошла ошибка при загрузке!</h1>}*/}
      {/*{heros &&*/}
      {/*  heros.map((hero) => <HeroStatsItem key={hero.id} hero={hero} />)}*/}
    </div>
  );
};
