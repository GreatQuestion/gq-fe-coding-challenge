import { render } from "@testing-library/react";

import { RepoExplorer } from "../RepoExplorer";

describe('RepoExplorer', () => {
  it('should render', () => {
    const {getByText} = render(<RepoExplorer />);

    expect(getByText('Repositories')).toBeInTheDocument();
  });
});