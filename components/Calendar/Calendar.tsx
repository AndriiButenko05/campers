"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Calendar.module.css";
interface CalendarProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
}

export default function Calendar({
  selected,
  onChange,
  className,
}: CalendarProps) {
  return (
    <div className={css.wrapper}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        className={className}
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date*"
        minDate={new Date()}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3).toUpperCase()}
        showPopperArrow={false}
        calendarClassName={css.calendarPopup}
        wrapperClassName={css.wrapper}
        required={true}
      />
    </div>
  );
}
