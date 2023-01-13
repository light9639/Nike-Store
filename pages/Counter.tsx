import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment, Anyincrement, Anydecrement } from '../features/counter/counterSlice';
import { persistor } from "./_app";

export default function Counter(): JSX.Element {
    const { value: count } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    const purge = async () => {
        location.reload();
        await persistor.purge(); // persistStore의 데이터 전부 날림
    };

    return (
        <div className='h-screen'>
            <div>
                <div className='block bg-black text-white'>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span className='mx-10'>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
                <div className='block bg-blue-600 text-white'>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(Anyincrement(10))}
                    >
                        AnyinDecrement
                    </button>
                    <span className='mx-10'>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(Anydecrement(10))}
                    >
                        AnyDecrement
                    </button>
                </div>
                <button onClick={async () => purge()}>초기화</button>
            </div>
        </div>
    );
}