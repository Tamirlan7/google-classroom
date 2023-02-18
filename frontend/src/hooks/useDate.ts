import { useState } from 'react';

export function useDate(currentDate: string) {
    // const date = '2006-07-21';

    const [date, setDate] = useState<string>(currentDate);
    let [year, month, day] = date.split('-')

    function changeDate (dateType: 'month' | 'year' | 'day' | 'all', value: string) {
        if(dateType === 'day') 
            day = value
         

        if(dateType === 'month') 
            month = value
        

        if (dateType === 'year') 
            year = value
        
        if (dateType === 'all') {
            setDate(value)
            return
        }

        const newDate = [year, month, day].join('-');
        setDate(newDate);
    }

    return [date, {year, month, day}, changeDate] as const
}
