import { useMemo } from "react";
import useCountUp from "../../hooks/useCountUp.js";
import formatNumber from "../../utils/formatNumber.js";

const FASTEST_ROLL_DURATION = 550;

function RollingDigit({ digit, place, hasStarted, lineHeight }) {
  // A zero completes a full wheel revolution so it visibly rolls before landing.
  const steps = Number(digit) === 0 ? 10 : Number(digit);
  const reel = Array.from({ length: steps + 1 }, (_, index) => index % 10);
  const duration = steps === 10 ? 1000 : FASTEST_ROLL_DURATION * (place + 1);
  const digitHeight = lineHeight ? `${lineHeight}px` : "1lh";
  const travelDistance = lineHeight ? steps * lineHeight : 0;

  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ height: digitHeight }}
      aria-hidden="true"
    >
      <span
        className="flex flex-col transition-transform ease-out motion-reduce:transition-none"
        style={{
          transform:
            hasStarted && lineHeight
              ? `translateY(-${travelDistance}px)`
              : "translateY(0)",
          transitionDuration: `${duration}ms`,
        }}
      >
        {reel.map((item, index) => (
          <span
            key={index}
            className="block leading-[inherit]"
            style={{ height: digitHeight }}
          >
            {item}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function CountUp({ value, suffix = "", className = "" }) {
  const { ref, hasStarted, lineHeight } = useCountUp(value);
  const characters = useMemo(() => formatNumber(value).split(""), [value]);
  const digitCount = characters.filter((character) =>
    /\d/.test(character),
  ).length;
  let digitPosition = digitCount;

  return (
    <span ref={ref} className={`inline-flex whitespace-nowrap ${className}`}>
      <span className="sr-only">
        {formatNumber(value)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {characters.map((character, index) => {
          if (!/\d/.test(character))
            return <span key={`${character}-${index}`}>{character}</span>;

          digitPosition -= 1;
          return (
            <RollingDigit
              key={`${character}-${index}`}
              digit={character}
              place={digitPosition}
              hasStarted={hasStarted}
              lineHeight={lineHeight}
            />
          );
        })}
        {suffix}
      </span>
    </span>
  );
}
