import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

export const TimePicker = ({
  inputClassName,
  onChange,
}: {
  inputClassName?: string;
  onChange: (e: any) => void;
}) => {
  const now = new Date();
  const [hours, setHours] = useState(now.getHours());
  const [minutes, setMinutes] = useState(now.getMinutes());

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "hours") {
      setHours(parseInt(value));
    } else if (name === "minutes") {
      setMinutes(parseInt(value));
    }
  };

  useEffect(() => {
    const specificDate = new Date(2023, 10, 25, hours, minutes);
    console.log(
      "🚀 ~ file: TimePicker.tsx:24 ~ handleChange ~ specificDate:",
      specificDate,
    );

    onChange(specificDate);
  }, [hours, minutes]);

  return (
    <div className="mt-2 w-40 rounded-lg bg-white p-5 shadow-xl">
      <div className="flex">
        <select
          name="hours"
          onChange={handleChange}
          value={hours}
          className="appearance-none bg-transparent text-xl outline-none"
        >
          {Array(24)
            .fill(0)
            .map((_, index) => {
              return index;
            })
            .map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
        <span className="mr-3 text-xl">:</span>
        <select
          name="minutes"
          value={minutes}
          onChange={handleChange}
          className="mr-4 appearance-none bg-transparent text-xl outline-none"
        >
          {Array(12)
            .fill(0)
            .map((_, index) => {
              return index * 5;
            })
            .map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
