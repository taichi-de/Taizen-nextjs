import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from '../../libs/client';
import { Blog } from '../blog';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import dayjs from 'dayjs';
import BlogLayout from '../../components/BlogLayout';
import RightSidebar from '../../components/blog/RightSidebar';

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <BlogLayout>
      <div className="grid grid-cols-12 gap-4 p-8 w-4/5 h-4/5">
        <div className="col-span-8 p-8 bg-gray-200 scrollbar-hide overflow-auto">
          <div className="w-full h-72 mx-auto bg-gray-400" />
          <h1 className="text-xl font-bold my-8">{props.title}</h1>
          <time dateTime={props.publishedAt} className="py-2 block">
            {dayjs(props.publishedAt).format('YYYY/MM/DD')}
          </time>
          <div
            className="prose prose-slate text-gray-300"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
        </div>
        <div className="col-span-4 hidden lg:block h-screen overflow-y-scroll scrollbar-hide bg-sky-300 lg:bg-transparent">
          <RightSidebar />
        </div>
      </div>
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const ids = data.contents.map((content: { id: string }) => `/blog/${content.id}`);
  return {
    fallback: false,
    paths: ids,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const data = await client.getListDetail<Blog>({ contentId: ctx.params.id, endpoint: 'blog' });

  return { props: data };
};

export default BlogId;