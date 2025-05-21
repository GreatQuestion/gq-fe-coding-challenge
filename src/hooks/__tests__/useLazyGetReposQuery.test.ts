import { act } from 'react';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import { renderHook } from '@testing-library/react';

import { DataType, useLazyGetReposQuery } from "../useLazyGetReposQuery";

const server = setupServer();

describe('useLazyGetReposQuery', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());
  
  afterAll(() => server.close());

  describe('when request is successful', () => {
    const mockData: DataType = {
      total_count: 1,
      incomplete_results: false,
      items: [
        { 
          id: 1,
          name: 'test',
          language: 'JavaScript',
          html_url: 'https://github.com/test',
          description: 'test',
          stargazers_count: 1 
        }
      ]
    }

    beforeEach(() => {
      server.use(
        http.get('https://api.github.com/search/repositories', () => HttpResponse.json(mockData))
      );
    });

    it('returns the correct data', async () => {
      const { result } = renderHook(() => useLazyGetReposQuery());

      await act(() => result.current[0]('test'));

      expect(result.current[1].data).toEqual(mockData);
      expect(result.current[1].isLoading).toBe(false);
      expect(result.current[1].isError).toBe(false);
    });
  });

  describe('when request fails', () => {
    beforeEach(() => {
      server.use(
        http.get('https://api.github.com/search/repositories', () => new HttpResponse(null, { status: 422 }))
      );
    });

    it('returns the correct error', async () => {
      const { result } = renderHook(() => useLazyGetReposQuery());

      await act(() => result.current[0]('test'));

      expect(result.current[1].isError).toBe(true);
      expect(result.current[1].isLoading).toBe(false);
      expect(result.current[1].data).toBeUndefined();
    });
    
  });
});

