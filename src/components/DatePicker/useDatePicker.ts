"use client";

import { useState } from "react";

export const useDatePicker = () => {
    const [date, setDate] = useState<Date>();

    return {
        date,
        setDate,
    }
}