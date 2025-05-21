import { RepoExplorer } from './components/RepoExplorer';

export const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Repo Explorer Demo</h1>
      <RepoExplorer />
    </div>
  );
}