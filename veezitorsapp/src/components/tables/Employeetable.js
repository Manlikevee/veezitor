import React from 'react'

const Employeetable = (mydata  ) => {
  return (

    <div className='ttable'>
{mydata?.mydata?.length > 0 ? (

<>
    {mydata?.mydata?.map((info, index) => (
      <div className="tabledata">
      <div key={index} className="acc">
      <div className="accflx">
          <div className="init">
            {info?.first_name.charAt(0)}{info?.last_name.charAt(0)}
          </div>
          <div className="accnames">
            <div className="name">
              {info?.first_name} {info?.last_name}
            </div>
          </div>
        </div>
      </div>

        <div className="acc">
          {info?.email}
        </div>
        <div className="acc initialize ">
          <div className="eid">
            {info?.staff_id}
          </div>
        </div>
        <div className="acc initialize">
          {info?.phone_number}
        </div>
        <div className="acc initialize">
          {info?.gender}
        </div>
      </div>
    ))}
</>

) : (
  <div className="tabledata" id="tableusers">
    <div className="acc nodata">
      <img src="Group26780.png" alt="" />
      <h5 className="sectiontitle" style={{ fontSize: 20 }}>
        No Employees
      </h5>
    </div>
  </div>
)}


    </div>
  )
}

export default Employeetable