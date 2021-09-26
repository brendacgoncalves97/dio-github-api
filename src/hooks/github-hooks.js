import { useContext } from "react";
import { GithubContext } from "../providers/github-providers";

const useGithub = () => {
   const { githubState, getUser, getUserRepos, gitUserStarred } = useContext(
       GithubContext
    );

   return { githubState, getUser, getUserRepos, gitUserStarred };

};

export default useGithub;