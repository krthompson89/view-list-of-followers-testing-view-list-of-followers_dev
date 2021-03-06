import { Post } from "./post";
import { reverbClientWithAuth } from '../../remote/reverb-api/reverbClient'

export const createPost = async (neoPost: Post): Promise<Post> => {
  const {data: post} = await reverbClientWithAuth.post<Post>('/api/post/submit', neoPost);

  return post;
}

export const createGroupPost = async (neoPost: Post): Promise<Post> => {
  const {data: post} = await reverbClientWithAuth.post<Post>('/api/post/submit', neoPost);

  return post;
}

export const getAllPosts = async (): Promise<Post[]> => {
  const {data: posts} = await reverbClientWithAuth.get<Post[]>('/api/post/get-all-posts');
  //const {data: posts} = await reverbClientWithAuth.get<Post[]>('/api/post/get-following-posts');


  return posts;
}

export const getFollowingPosts = async (): Promise<Post[]> => {
  const {data: posts} = await reverbClientWithAuth.get<Post[]>('/api/post/get-following-posts');

  return posts;
}

export const getAllGroupPosts = async (groupName: string): Promise<Post[]> => {
  const {data: posts} = await reverbClientWithAuth.get<Post[]>(`/api/post/get-group-posts/${groupName}`)

  return posts;
}

export const getPersonalPosts = async (): Promise<Post[]> => {
  const {data: posts} = await reverbClientWithAuth.get<Post[]>('/api/post/get-personal-posts');

  return posts;
}
