'use client'

import { NumberTicker } from "../magicui/number-ticker";



export const Counter = ({ target, plus, classname }: { target: number, plus?: string, classname?: string }) => {
    return (
        <div className={classname}>
            <NumberTicker className="text-primary" value={target} />{' '}{plus}
        </div>
    )
};

