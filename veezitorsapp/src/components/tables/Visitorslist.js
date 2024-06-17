import React from 'react'

const Visitorslist = ({mydata}) => {
  return (
    <>
    {mydata?.length > 0 ? (
  
  <>
      {mydata?.map((info, index) => (
  
  <div className="tabledata"  key={index}>
  <div className="acc">
    <div className="accflx">
      <div className="init">
        {info?.first_name.charAt( 0)}
        {info?.last_name.charAt(0)}
      </div>
      <div className="accnames">
        <div className="name">
          {info?.first_name} {info?.last_name}
        </div>
      </div>
    </div>
  </div>
  <div className="acc">
    <div className="email">
      {info?.email}
    </div>
  </div>
  <div className="acc initialize">
    <div className="eid">
    {info?.ref}
    </div>
  </div>
  <div className="acc initialize stfname">
  
  {info?.phonenumber}
  </div>

  <div className="acc initialize stfname">
  male
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
    </>
  )
}

export default Visitorslist