/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

type AsyncFunction<T, P extends any[]> = (...args: P) => Promise<T>;

export function useFetch<T, P extends any[] = []>(
  asyncFunction: AsyncFunction<T, P>,
  params?: P,
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (...args: P) => {
      setLoading(true);
      setError(null);
      try {
        const result = await asyncFunction(...args);
        setData(result);
        return result;
      } catch (error: any) {
        setError(error.message || 'Unknown error');
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction],
  );
  useEffect(() => {
    if (params) {
      execute(...params).catch(() => {});
    }
  }, [execute, params]);
  return { data, loading, error, execute };
}
