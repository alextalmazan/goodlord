import '@testing-library/jest-dom';
import { afterAll, vi } from 'vitest';

afterAll(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
});
