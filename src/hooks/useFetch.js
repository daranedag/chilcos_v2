import { useState, useEffect, useRef } from "react";

/**
 * useFetch — hook genérico para consumir endpoints de la API.
 *
 * @param {Function} fetchFn  — función que retorna una Promise (axios call)
 * @param {Array}    deps     — dependencias que disparan un re-fetch (como useEffect)
 *
 * @returns {{ data, loading, error, refetch }}
 *
 * Uso:
 *   const { data: staff, loading, error } = useFetch(() => getStaff(), []);
 *   const { data: textos } = useFetch(() => getTextos("kinder"), []);
 */
const useFetch = (fetchFn, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortRef = useRef(null);

    const execute = async () => {
        setLoading(true);
        setError(null);

        // Cancel any in-flight request when re-fetching
        if (abortRef.current) {
            abortRef.current.abort();
        }
        const controller = new AbortController();
        abortRef.current = controller;

        try {
            const response = await fetchFn();
            setData(response.data);
        } catch (err) {
            if (err.name !== "CanceledError" && err.name !== "AbortError") {
                setError(err?.response?.data?.message || err.message || "Error al cargar datos");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        execute();
        return () => {
            if (abortRef.current) abortRef.current.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return { data, loading, error, refetch: execute };
};

export default useFetch;
