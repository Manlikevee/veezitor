'use client';
import React, { useState, useEffect } from 'react';

class Utils {
  static digits(n) {
    return n < 10 ? `0${n}` : `${n}`;
  }
}

const Clock28 = () => {
  const activeClass = "clock__unit--active";
  const pristineClass = "clock__unit--pristine";

  const [time, setTime] = useState(getTimeAsObject());
  const [lastTime, setLastTime] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const intervalId = setInterval(() => {
      const newTime = getTimeAsObject();
      setLastTime(time);
      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  function getTimeAsObject() {
    const date = new Date();
    const h = Utils.digits(date.getHours());
    const m = Utils.digits(date.getMinutes());
    const s = Utils.digits(date.getSeconds());

    return { h, m, s };
  }

  function getTimeAsString() {
    const { h, m, s } = time;
    return [h, m, s].join(":");
  }

  function renderDigits(unit, currentTime) {
    const prevDigits = +currentTime - 1 < 0 ? 59 : +currentTime - 1;
    return (
      <>
        <div className="clock__digits" data-prev>{Utils.digits(prevDigits)}</div>
        <div className="clock__digits" data-prev>{Utils.digits(prevDigits)}</div>
        <div className="clock__digits" data-next>{currentTime}</div>
        <div className="clock__digits" data-next>{currentTime}</div>
      </>
    );
  }

  if (!isMounted) {
    // Render placeholder digits on the server
    return (
      <div className="clock" aria-label="00:00:00">
        <div className="clock__unit" data-unit="h">
          <div className="clock__digits" data-prev>00</div>
          <div className="clock__digits" data-prev>00</div>
          <div className="clock__digits" data-next>00</div>
          <div className="clock__digits" data-next>00</div>
        </div>
        <div className="clock__unit" data-unit="m">
          <div className="clock__digits" data-prev>00</div>
          <div className="clock__digits" data-prev>00</div>
          <div className="clock__digits" data-next>00</div>
          <div className="clock__digits" data-next>00</div>
        </div>
        <div className="clock__unit" data-unit="s">
          <div className="clock__digits" data-prev>00</div>
          <div className="clock__digits" data-prev>00</div>
          <div className="clock__digits" data-next>00</div>
          <div className="clock__digits" data-next>00</div>
        </div>
      </div>
    );
  }

  return (
    <div className="clock" aria-label={getTimeAsString()}>
      <div className={`clock__unit ${time.h !== lastTime?.h ? activeClass : ''}`} data-unit="h">
        {renderDigits('h', time.h)}
      </div>
      <div className={`clock__unit ${time.m !== lastTime?.m ? activeClass : ''}`} data-unit="m">
        {renderDigits('m', time.m)}
      </div>
      <div className={`clock__unit ${time.s !== lastTime?.s ? activeClass : ''}`} data-unit="s">
        {renderDigits('s', time.s)}
      </div>
    </div>
  );
};

export default Clock28;
