import { renderHook, act } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { expect, it, describe, beforeAll, afterAll, afterEach } from 'vitest';
import { useExecutePostReference } from '../useExecutePostReference';

// Mock API URL
const API_URL = 'https://ref-api.goodlord.co/reference/new';

// Mock server setup using MSW
const server = setupServer(
    http.post(API_URL, async () => {
        return HttpResponse.json({ message: 'Success' });
    })
);

// Start and close the mock server
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('useExecutePostReference Hook', () => {
    it('should call the API and set response correctly on success', async () => {
        const { result } = renderHook(() => useExecutePostReference());

        await act(async () => {
            await result.current.postRefernce({
                personal: {
                    first_name: 'Jane',
                    last_name: 'Doe',
                    current_address: 'Test Address',
                },
                guarantor: {
                    name: 'Guarantor',
                    address: 'Address 1',
                    relation: 'Parent',
                },
                employer: [
                    {
                        name: 'Test Name',
                        start_date: '20180301',
                        end_date: '20190815',
                    },
                ],
            });
        });

        expect(result.current.response).toBeTruthy();
        expect(result.current.error).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    it('should handle API failure correctly', async () => {
        server.use(
            http.post(API_URL, async () => {
                return HttpResponse.json(
                    { errors: 'Something went wrong' },
                    { status: 500 }
                );
            })
        );

        const { result } = renderHook(() => useExecutePostReference());

        await act(async () => {
            await result.current.postRefernce({
                personal: {
                    first_name: 'Jane',
                    last_name: 'Doe',
                    current_address: 'Test Address',
                },
                guarantor: {
                    name: 'Guarantor',
                    address: 'Address 1',
                    relation: 'Parent',
                },
                employer: [
                    {
                        name: 'Test Name',
                        start_date: '20180301',
                        end_date: '20190815',
                    },
                ],
            });
        });

        expect(result.current.error).toBe('Something went wrong');
        expect(result.current.response).toBeNull();
        expect(result.current.loading).toBe(false);
    });

    it('should set loading state correctly', async () => {
        const { result } = renderHook(() => useExecutePostReference());

        act(() => {
            result.current.postRefernce({
                personal: {
                    first_name: 'Jane',
                    last_name: 'Doe',
                    current_address: 'Test Address',
                },
                guarantor: {
                    name: 'Guarantor',
                    address: 'Address 1',
                    relation: 'Parent',
                },
                employer: [
                    {
                        name: 'Test Name',
                        start_date: '20180301',
                        end_date: '20190815',
                    },
                ],
            });
        });

        expect(result.current.loading).toBe(true);
    });
});
