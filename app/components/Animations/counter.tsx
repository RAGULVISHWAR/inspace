'use client'


export const Counter = ({ target, plus }: { target: number, plus?: string }) => {
    return (
        <div>
            {target}{plus}
        </div>
    )
};

