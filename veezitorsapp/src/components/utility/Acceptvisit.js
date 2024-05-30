import React, { useEffect } from 'react'

const Acceptvisit = ({togglevisitorbar, acceptvisitor}) => {



    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const number = params.get('visitor_id');
        console.log('eee');
        if (number) {
          alert(number);
          async function work() {
            await togglevisitorbar(number);
            await acceptvisitor(number);
          }
          work();
        }
      }, []);
  return (
   <></>
  )
}

export default Acceptvisit