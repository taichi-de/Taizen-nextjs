import Layout from "../components/Layout";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import WorksItem from "../components/works/WorksItem";
import {
  worksObjOne,
  worksObjTwo,
  worksObjThree,
  worksObjFour,
  worksObjFive,
  worksObjSix,
} from "../components/works/WorksData";

export default function Works() {
  return (
    <Layout title="Works">
      <div className="h-full p-4">
        <p className="font-mono text-lg font-bold text-white mt-14">Works</p>
        <div className="grid w-9/12 grid-cols-1 mx-auto my-4 overflow-y-scroll leading-relaxed text-center text-white h-2/3 overscroll-y-auto sm:grid-cols-3">
          <WorksItem {...worksObjOne} />
          <WorksItem {...worksObjTwo} />
          <WorksItem {...worksObjThree} />
          <WorksItem {...worksObjFour} />
          <WorksItem {...worksObjFive} />
          <WorksItem {...worksObjSix} />
        </div>
        <Link href={"https://github.com/taichi-de"}>
          <div className="inline-flex items-center justify-center p-2 text-white bg-green-700 rounded-lg w-60">
            See more in Github
            <FaGithub className="ml-3 text-gray-300 w-7 h-7 lg:text-sm md:text-xs hover:text-gray-600" />
          </div>
        </Link>
      </div>
    </Layout>
  );
}