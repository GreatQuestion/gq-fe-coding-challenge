import { useLazyGetReposQuery } from "../hooks/useLazyGetReposQuery";

export const RepoExplorer = () => {
  const [getRepos, { data }] = useLazyGetReposQuery();

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    getRepos(e.target.value);
  }

  return (
    <section>
      <div className="flex flex-col gap-4">
        <label htmlFor="search">Search</label>
        <input type="text" id="search" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleOnSearch} />

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Repositories</h2>

          <ul className="list-none">
            {data?.items?.map((repo) => (
              <li key={repo.id}>{repo.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}