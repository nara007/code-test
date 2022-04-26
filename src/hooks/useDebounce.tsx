// custom hook for debouncing
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    const onValueChange: (v: string) => void = useCallback(debounce((v: string): void => {
        setDebouncedValue(v);
    }, delay), [delay]);

    useEffect(() => {
        onValueChange(value);
    }, [value]);
    return [debouncedValue];
}

export default useDebounce;
