import { useState } from 'react';
import { ReferenceData } from '../types';

const API_URL = 'https://ref-api.goodlord.co/reference/new';

export const useExecutePostReference = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<any>(null);

    const postRefernce = async (data: ReferenceData) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.errors || 'Something went wrong');
            }
            setResponse(res);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return { postRefernce, response, loading, error };
};
