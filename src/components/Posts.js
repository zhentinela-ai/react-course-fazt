import { VscAzure, VscGitCommit } from "react-icons/vsc";

export const Posts = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await res.json();
          console.log(data);
        }}
      >
        Traer datos
        <VscAzure />
        <VscGitCommit />
      </button>
    </div>
  );
};
