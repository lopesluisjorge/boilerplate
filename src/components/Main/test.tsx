import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);
    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="sc-bRKDuR cQIcRK"
      >
        <h1>
          test
        </h1>
      </main>
    `);
  });
});
